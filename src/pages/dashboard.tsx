import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

const Chart = dynamic(() => import('react-apexcharts'), {
	ssr: false
})

const options = {
	chart: {
		foreColor: theme.colors.gray[500],
		toolbar: {
			show: false
		},
		zoom: {
			enabled: false
		}
	},
	dataLabels: {
		enabled: false
	},
	fill: {
		opacity: 0.3,
		type: 'gradient',
		gradient: {
			shade: 'dark',
			opacityFrom: 0.7,
			opacityTo: 0.3
		}
	},
	grid: {
		show: false
	},
	tooltip: {
		enabled: false
	},
	xaxis: {
		axisBorder: {
			color: theme.colors.gray[600]
		},
		axisTicks: {
			color: theme.colors.gray[600]
		}
	}
}

const series = [
	{
		name: 'series1',
		data: [
			{
				x: '11/Out',
				y: 120
			},
			{
				x: '12/Out',
				y: 31
			},
			{
				x: '13/Out',
				y: 10
			},
			{
				x: '14/Out',
				y: 28
			},
			{
				x: '15/Out',
				y: 51
			},
			{
				x: '16/Out',
				y: 18
			},
			{
				x: '17/Out',
				y: 109
			}
		]
	}
]

export default function Dashboard() {
	return (
		<Flex direction='column' h='100vh' >
			<Header />

			<Flex
			  maxW={1480}
			  mx='auto'
			  my='6'
			  px='6'
			  w='100%'
			>
				<Sidebar />

				<SimpleGrid
				  flex='1'
				  gap='4'
				  minChildWidth='320px'
				>
					<Box borderRadius={8} bg='gray.800' p={['6', '8']}>
						<Text fontSize='lg' mb='4'>Inscritos da semana</Text>
						<Chart
						  height={180}
						  options={options}
						  series={series}
						  type='area'
						/>
					</Box>
					<Box borderRadius={8} bg='gray.800' p={['6', '8']}>
						<Text fontSize='lg' mb='4'>Taxa de abertura</Text>
						<Chart
						  height={180}
						  options={options}
						  series={series}
						  type='area'
						/>
					</Box>
				</SimpleGrid>
			</Flex>
		</Flex>
	)
}