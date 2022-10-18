import { Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from '@chakra-ui/react'
import { ElementType } from 'react'
import { ActiveLink } from '../ActiveLink'

interface NavLinkProps extends ChakraLinkProps {
	children: string
	href: string
	icon: ElementType
}

export function NavLink({ children, href, icon, ...rest }: NavLinkProps) {
	return (
		<ActiveLink href={href} passHref>
			<ChakraLink display='flex' py='1' {...rest}>
				<Icon as={icon} fontSize='20' />
				<Text fontWeight='medium' ml='4'>{children}</Text>
			</ChakraLink>
		</ActiveLink>
	)
}