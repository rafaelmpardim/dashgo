import { HStack, Icon } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function NotificationsNav() {
	return (
		<HStack
			borderColor='gray.700'
			borderRightWidth={1}
			color='gray.300'
			mx={['8', '6']}
			pr={['8', '6']}
			py='1'
			spacing={['8', '6']}
		>
			<Icon as={RiNotificationLine} fontSize='20' />
			<Icon as={RiUserAddLine} fontSize='20' />
		</HStack>
	)
}