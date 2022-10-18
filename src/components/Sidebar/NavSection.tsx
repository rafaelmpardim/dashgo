import { Box, Stack, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface NavSectionProps {
	children: ReactNode
	title: string
}

export function NavSection({ children, title }: NavSectionProps) {
	return (
		<Box>
			<Text
				color='gray.400'
				fontSize='sm'
				fontWeight='bold'
			>
				{title}
			</Text>

			<Stack align='stretch' mt='8' spacing='4'>
				{children}
			</Stack>
		</Box>
	)
}