import { Button, Flex, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'

type SignInFormData = {
	email: string
	password: string
}

const signInFormSchema = yup.object().shape({
	email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
	password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
		resolver: yupResolver(signInFormSchema)
	})

	const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
		await new Promise(res => setTimeout(res, 2000))

		console.log(values)
	}

	return (
		<Flex
			align='center'
			h='100vh'
			justify='center'
			w='100vw'
		>
			<Flex
				as='form'
				borderRadius={8}
				bg='gray.800'
				flexDirection='column'
				maxW={360}
				onSubmit={handleSubmit(handleSignIn)}
				p='8'
				w='100%'
			>
				<Stack
				  spacing='4'
				>
					<Input
						error={errors.email}
					  label='E-mail'
					  placeholder='Email'
					  type='email'
						{...register('email')}
					/>

					<Input
						error={errors.password}
					  label='Senha'
					  placeholder='Senha'
					  type='password'
						{...register('password')}
					/>

					<Button
						colorScheme='pink'
						isLoading={isSubmitting}
						type='submit'
					>
            Entrar
					</Button>
				</Stack>
			</Flex>
		</Flex>
	)
}