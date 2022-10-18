import { Box, Stack } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

export function Pagination() {
	return (
		<Stack
		  align='center'
			direction={['column', 'row']}
		  justify='space-between'
		  mt='8'
		  spacing='6'
		>
			<Box>
				<strong>1</strong> - <strong>10</strong> de <strong>100</strong>
			</Box>

			<Stack direction='row' spacing='2'>
				<PaginationItem isCurrent page={1}/>
				<PaginationItem page={2}/>
				<PaginationItem page={3}/>
				<PaginationItem page={4}/>
				<PaginationItem page={5}/>
				<PaginationItem page={6}/>
			</Stack>
		</Stack>
	)
}