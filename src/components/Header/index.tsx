import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
	const { onOpen } = useSidebarDrawer()

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true
	})

	return (
		<Flex
		  align='center'
		  as='header'
		  h='20'
		  maxW={1480}
		  mt='4'
		  mx='auto'
		  px='6'
		  w='100%'
		>
			{ !isWideVersion && (
				<IconButton
					alignItems='center'
					aria-label='Open navigation'
					display='flex'
					fontSize='24'
					icon={<Icon as={RiMenuLine}/>}
					justifyContent='center'
					onClick={onOpen}
					mr='2'
					variant='unstyled'
				></IconButton>
			)}

			<Logo />
			{ isWideVersion && <SearchBox /> }

			<Flex align='center' ml='auto'>
				<NotificationsNav />	
				<Profile showProfileData={isWideVersion} />
			</Flex>
		</Flex>
	)
}