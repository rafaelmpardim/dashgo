import { useQuery } from 'react-query'

import { api } from '../axios/apiClient'


type User = {
	createdAt: string
	email: string
	id: string
	name: string
}

type GetUsersResponse = {
	users: User[],
	totalCount: number
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
	const { data, headers } = await api.get('/users', {
		params: {
			page: page
		}
	})

	const totalCount = Number(headers['x-total-count'])

	const users = data.users.map(user => {
		return {
			createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
				day: '2-digit',
				month: 'long',
				year: 'numeric'
			}),
			email: user.email,
			id: user.id,
			name: user.name,
		}
	})

	return {
		users,
		totalCount
	}
}

export function useUsers(page: number) {
	return useQuery(['users', page], () => getUsers(page), {
		staleTime: 10 * 60 * 1000
	})
}