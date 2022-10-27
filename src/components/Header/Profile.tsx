import { Button, Flex, Avatar, Text, Box, Icon } from '@chakra-ui/react'

import { AuthContext, signOut } from '../../context/AuthContext'

import { FiLogOut } from 'react-icons/fi'
import { useContext } from 'react'

interface ProfileProps {
	showProfileData?: boolean
}

export function Profile({ showProfileData = true}: ProfileProps) {
	const { user } = useContext(AuthContext)

	return (
		<Flex align='center' >
			{ showProfileData && (
				<Box mr='4' textAlign='right'>
					<Text>{user?.name}</Text>
					<Text color='gray.300' fontSize='sm'>{user?.email}</Text>
				</Box>
			)}
			<Avatar
			  bg='pink.500'
			  color='gray.50'
			  name={user?.name}
			  size='md'
			/>
			<Button
				colorScheme='unstyled'
				onClick={signOut}
				type='button'
			>
				<Icon as={FiLogOut} fontSize='20' />
			</Button>
		</Flex>
	)
}