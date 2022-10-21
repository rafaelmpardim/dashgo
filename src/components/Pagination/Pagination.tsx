import { Box, Stack, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

interface PaginationProps {
	currentPage: number
	totalCountOfRegisters: number
	onPageChange: (page: number) => void
	registersPerPage?: number
	siblingsCount?: number
}

function generationPagesArray(from: number, to: number) {
	return [...new Array(to - from)]
		.map((_, index) => {
			return from + index + 1
		})
		.filter(page => page > 0)
}

export function Pagination({ currentPage = 1, totalCountOfRegisters, onPageChange, registersPerPage = 10, siblingsCount = 1 }: PaginationProps) {
	const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage)

	const previousPages = currentPage > 1
		? generationPagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
		: []

	const nextPages = currentPage < lastPage
		? generationPagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
		: []

	return (
		<Stack
		  align='center'
			direction={['column', 'row']}
		  justify='space-between'
		  mt='8'
		  spacing='6'
		>
			<Box>
				<strong>{((currentPage - 1) * registersPerPage) + 1}</strong> - <strong>{currentPage !== lastPage ? (((currentPage - 1) * registersPerPage) + registersPerPage) : (totalCountOfRegisters) }</strong> de <strong>{totalCountOfRegisters}</strong>
			</Box>

			<Stack direction='row' spacing='2'>

				{ currentPage > (1 + siblingsCount) && (
					<>
						<PaginationItem onPageChange={onPageChange} page={1}/>
						{ currentPage > (2 + siblingsCount) && (
							<Text color='gray.300' textAlign='center' w='8'>...</Text>
						)}
					</>
				)}

				{ previousPages.length > 0 && previousPages.map(
					page => {
						return (
							<PaginationItem onPageChange={onPageChange} key={page} page={page}/>
						)
					})
				}


				<PaginationItem onPageChange={onPageChange} page={Number(currentPage)} isCurrent />

				{ nextPages.length > 0 && nextPages.map(
					page => {
						return (
							<PaginationItem onPageChange={onPageChange} key={page} page={page}/>
						)
					})
				}

				{ (currentPage + siblingsCount) < lastPage &&
					(
						<>
							{ (currentPage + 1 + siblingsCount) < lastPage && (
								<Text color='gray.300' textAlign='center' w='8'>...</Text>
							)}
							<PaginationItem onPageChange={onPageChange} page={lastPage}/>
						</>
					)
				}

			</Stack>
		</Stack>
	)
}