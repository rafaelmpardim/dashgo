import { React } from 'react-dom'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { AppProps } from 'next/app'

import { makeServer } from '../services/mirage'
import { queryClient } from '../services/queryClient'

import { ChakraProvider } from '@chakra-ui/react'

import { SidebarDrawerProvider } from '../context/SidebarDrawerContext'

import { theme } from '../styles/theme'

if (process.env.NODE_ENV == 'development') {
	makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<SidebarDrawerProvider>
					<Component {...pageProps} />
				</SidebarDrawerProvider>
			</ChakraProvider>
			
			<ReactQueryDevtools />
		</QueryClientProvider>
	)
}

export default MyApp