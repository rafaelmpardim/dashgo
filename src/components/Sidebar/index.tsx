import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from '@chakra-ui/react'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'
import { Logo } from '../Header/Logo'
import { SidebarNav } from './SidebarNav'

export function Sidebar() {
	const { isOpen, onClose } = useSidebarDrawer()

	const isDrawerSidebar = useBreakpointValue({
		base: true,
		lg: false
	})

	if (isDrawerSidebar) {
		return (
			<Drawer isOpen={isOpen} onClose={onClose} placement='left'>
				<DrawerOverlay>
					<DrawerContent bg='gray.800' p='4'>
						<DrawerCloseButton mt='6'/>
						<DrawerHeader>
							<Logo />
						</DrawerHeader>
						<DrawerBody>
							<SidebarNav />
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		)
	}

	return (
		<Box as='aside' mr='8' w='64'>
			<SidebarNav />
		</Box>
	)
}