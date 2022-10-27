import { createContext, ReactNode, useEffect, useState } from 'react'

import Router from 'next/router'

import { destroyCookie, setCookie, parseCookies } from 'nookies'

import { api } from '../services/axios/apiClient'

type User = {
	name: string
	email: string
	permissions: string[]
	roles: string[]
}

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  isAuthenticated: boolean
	user: User
  signIn(credentials: SignInCredentials): Promise<void>
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
	destroyCookie(undefined, 'nextauth.token')
	destroyCookie(undefined, 'nextauth.refreshToken')

	Router.push('/')
}

export function AuthProvider({ children }: AuthProviderProps) {
	const [ user, setUser ] = useState<User>()
	const isAuthenticated = !!user

	useEffect(() => {
		const { 'nextauth.token': token } = parseCookies()

		if (token) {
			api.get('me')
				.then(response => {
					const { name, email, permissions, roles } = response.data

					setUser({ name, email, permissions, roles })
				})
				.catch(err => {
					signOut()
				})
		}
	}, [])

	async function signIn({ email, password }: SignInCredentials) {
		try {
			const response = await api.post('sessions', {
				email,
				password
			})

			const { name, token, refreshToken, permissions, roles } = response.data

			setCookie(undefined, 'nextauth.token', token, {
				maxAge: 60 * 60 * 24 * 30, // 30 days
				path: '/'
			})

			setCookie(undefined, 'nextauth.refreshToken', refreshToken, {
				maxAge: 60 * 60 * 24 * 30, // 30 days
				path: '/'
			})

			setUser({
				name,
				email,
				permissions,
				roles
			})

			api.defaults.headers['Authorization'] = `Bearer ${token}`

			Router.push('/dashboard')

		} catch (err) {
			console.log(err)
		}
	}

	return (
		<AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
			{ children }
		</AuthContext.Provider>
	)
}