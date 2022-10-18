import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

type CreateUserFormData = {
	email: string
	name: string
	password: string
	password_confirmation: string
}

const createUserFormSchema = yup.object().shape({
	email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
	name: yup.string().required('Nome obrigatório'),
	password: yup.string().required('Senha obrigatória').min(6, 'No minímimo 6 caracteres'),
	password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
})

export default function CreateUser() {
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
		resolver: yupResolver(createUserFormSchema)
	})

	const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
		await new Promise(res => setTimeout(res, 2000))

		console.log(values)
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

				<Box
				  as='form'
				  bg='gray.800'
				  borderRadius={8}
				  flex='1'
					onSubmit={handleSubmit(handleCreateUser)}
				  p={['6', '8']}
				>
					<Heading fontWeight='normal' size='lg'>Criar usuário</Heading>
					<Divider borderColor='gray.700' my='6'/>

					<VStack spacing='8'>
						<SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
							<Input
								error={errors.name}
							  label='Nome completo'
								{...register('name')}
							/>
							<Input
								error={errors.email}
							  label='E-mail'
							  type='email'
								{...register('email')}
							/>
						</SimpleGrid>

						<SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
							<Input
								error={errors.password}
							  label='Senha'
							  type='password'
								{...register('password')}
							/>
							<Input
								error={errors.password_confirmation}
							  label='Confime a senha'
							  type='password'
								{...register('password_confirmation')}
							/>
						</SimpleGrid>
					</VStack>

					<Flex justify='flex-end' mt='8'>
						<HStack spacing='4'>
							<Link href='/users' passHref >
								<Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
							</Link>
							
							<Button
							  colorScheme='pink'
								isLoading={isSubmitting}
							  type='submit'
							>
								Salvar
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	)
}