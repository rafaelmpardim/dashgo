import { Flex, Avatar, Text, Box } from '@chakra-ui/react'

interface ProfileProps {
	showProfileData?: boolean
}

export function Profile({ showProfileData = true}: ProfileProps) {
	return (
		<Flex align='center' >
			{ showProfileData && (
				<Box mr='4' textAlign='right'>
					<Text>Rafael Pardim</Text>
					<Text color='gray.300' fontSize='sm'>rafael@madeincode.com.br</Text>
				</Box>
			)}
			<Avatar
			  bg='pink.500'
			  color='gray.50'
			  name='Rafael Pardim'
			  size='md'
			  src='https://github.com/rafaelmpardim.png'
			/>
		</Flex>
	)
}