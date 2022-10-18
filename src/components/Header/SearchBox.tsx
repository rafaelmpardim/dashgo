import { Flex, Icon, Input } from '@chakra-ui/react'
import { useRef } from 'react'
import { RiSearchLine } from 'react-icons/ri'

export function SearchBox() {
	const searchInputRef = useRef<HTMLInputElement>(null)

	return (
		<Flex
			alignSelf='center'
			as='label'
			borderRadius='full'
			bg='gray.800'
			color='gray.200'
			flex='1'
			maxW={400}
			ml='6'
			position='relative'
			px='8'
			py='4'
		>
			<Input
				color='gray.50'
				mr='4'
				placeholder='Buscar na plataforma'
				px='4'
				ref={searchInputRef}
				variant='unstyled'
				_placeholder={{
					color: 'gray.400'
				}}
			/>

			<Icon as={RiSearchLine} fontSize='20'	/>

		</Flex>
	)
}