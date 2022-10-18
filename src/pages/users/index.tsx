import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination/Pagination'
import { Sidebar } from '../../components/Sidebar'

export default function UserList() {
	const isWideVersion = useBreakpointValue({
		base: false,
		lg:true
	})

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
						<Heading fontWeight='normal' size='lg'>Usuários</Heading>

						<Link href='/users/create' passHref >
							<Button
								as='a'
								colorScheme='pink'
								fontSize='sm'
								leftIcon={<Icon as={RiAddLine} fontSize='20' />}
								size='sm'
							>
								Criar novo
							</Button>
						</Link>
					</Flex>

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
							<Tr>
								<Td px={['4', '4', '6']}>
									<Checkbox colorScheme='pink' />
								</Td>
								<Td>
									<Box>
										<Text fontWeight='bold'>Lucas Scatolin</Text>
										<Text color='gray.300' fontSize='sm'>lucas@madeincode.com.br</Text>
									</Box>
								</Td>
								{ isWideVersion && <Td>17 de Outubro, 2022</Td> }
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
							<Tr>
								<Td px={['4', '4', '6']}>
									<Checkbox colorScheme='pink' />
								</Td>
								<Td>
									<Box>
										<Text fontWeight='bold'>Rafael Pardim</Text>
										<Text color='gray.300' fontSize='sm'>rafael@madeincode.com.br</Text>
									</Box>
								</Td>
								{ isWideVersion && <Td>17 de Outubro, 2022</Td> }
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
							<Tr>
								<Td px={['4', '4', '6']}>
									<Checkbox colorScheme='pink' />
								</Td>
								<Td>
									<Box>
										<Text fontWeight='bold'>Raphael Peixoto</Text>
										<Text color='gray.300' fontSize='sm'>raphael@madeincode.com.br</Text>
									</Box>
								</Td>
								{ isWideVersion && <Td>17 de Outubro, 2022</Td> }
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
						</Tbody>
					</Table>
					<Pagination />
				</Box>
			</Flex>
		</Box>
	)
}