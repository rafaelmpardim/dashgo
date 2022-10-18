import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  isCurrent?: boolean
  page: number
}

export function PaginationItem({ isCurrent = false, page }: PaginationItemProps) {
	if (isCurrent) {
		return (
			<Button
				colorScheme='pink'
				disabled
				fontSize='xs'
				size='sm'
				w='4'
				_disabled={{
					bg: 'pink.500',
					cursor: 'default'
				}}
			>
				{page}
			</Button>
		)
	}

	return (
		<Button
			bg='gray.700'
			fontSize='xs'
			size='sm'
			w='4'
			_hover={{
				bg: 'gray.500'
			}}
		>
			{page}
		</Button>
	)
}