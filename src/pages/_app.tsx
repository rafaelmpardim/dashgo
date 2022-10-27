import { React } from 'react-dom'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { AppProps } from 'next/app'

import { queryClient } from '../services/queryClient'

import { ChakraProvider } from '@chakra-ui/react'

import { SidebarDrawerProvider } from '../context/SidebarDrawerContext'

import { theme } from '../styles/theme'
import { AuthProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<ChakraProvider theme={theme}>
					<SidebarDrawerProvider>
						<Component {...pageProps} />
					</SidebarDrawerProvider>
				</ChakraProvider>
			
				<ReactQueryDevtools />
			</QueryClientProvider>
		</AuthProvider>
	)
}

export default MyApp