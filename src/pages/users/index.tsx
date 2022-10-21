import { useState } from 'react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import NextLink from 'next/link'

import { useUsers } from '../../services/hooks/useUsers'
import { queryClient } from '../../services/queryClient'
import { api } from '../../services/axios/api'

import { Box, Button, Checkbox, Flex, Heading, Icon, Link as ChakraLink, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination/Pagination'
import { Sidebar } from '../../components/Sidebar'

export default function UserList() {
	const [ page, setPage ] = useState(1)
	const { data, error, isFetching, isLoading } = useUsers(page)

	const isWideVersion = useBreakpointValue({
		base: false,
		lg:true
	})

	async function handlePrefetchUser(userId: string) {
		await queryClient.prefetchQuery(['users', userId], async () => {
			const { data } = await api.get(`/users/${userId}`)

			return data
		}, {
			staleTime: 10 * 60 * 1000 // 10 minutes
		})
	}

	return (
		<Box>
			<Header />

			<Flex
			  maxW={1480}
			  mx='auto'
			  my='6'
			  px='6'
			  w='100%'
			>
				<Sidebar />

				<Box bg='gray.800' borderRadius={8} flex='1' p='8'>
					<Flex align='center' justify='space-between' mb='8'>
						<Heading fontWeight='normal' size='lg'>
							Usuários

							{ !isLoading && isFetching && <Spinner color='gray.300' ml='4' size='sm' />}	
						</Heading>

						<NextLink href='/users/create' passHref >
							<Button
								as='a'
								colorScheme='pink'
								fontSize='sm'
								leftIcon={<Icon as={RiAddLine} fontSize='20' />}
								size='sm'
							>
								Criar novo
							</Button>
						</NextLink>
					</Flex>

					{
						isLoading ? (
							<Flex align='center' justify="center" minH='50vh'>
								<Spinner size='xl'/>
							</Flex>
						) : error ? (
							<Flex justify="center">
								<Text>Falha ao carregar os dados do usuário</Text>
							</Flex>
						) : (
							<>
								<Table colorScheme='whiteAlpha' >
									<Thead>
										<Tr>
											<Th color='gray.300' px={['4', '4', '6']} w='8'>
												<Checkbox colorScheme='pink' />
											</Th>
											<Th>Usuário</Th>
											{ isWideVersion && <Th>Data de cadastro</Th> }
											{ isWideVersion && <Th></Th> }
										</Tr>
									</Thead>
									<Tbody>
										{ data.users.map(user => {
											return (
												<Tr key={user.id}>
													<Td px={['4', '4', '6']}>
														<Checkbox colorScheme='pink' />
													</Td>
													<Td>
														<Box>
															<ChakraLink color='pink.500' onMouseEnter={() => handlePrefetchUser(user.id)}>
																<Text fontWeight='bold'>{user.name}</Text>
															</ChakraLink>
															<Text color='gray.300' fontSize='sm'>{user.email}</Text>
														</Box>
													</Td>
													<Td>{user.createdAt}</Td>
													{ isWideVersion && (
														<Td w='8'>
															<Button
																as='a'
																colorScheme='purple'
																fontSize='sm'
																leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
																size='sm'
															>
																Editar
															</Button>
														</Td>
													)}
												</Tr>
											)
										})}
									</Tbody>
								</Table>
								<Pagination
									currentPage={page}
									totalCountOfRegisters={data.totalCount}
									onPageChange={setPage}
								/>
							</>
						)
					}
				</Box>
			</Flex>
		</Box>
	)
}