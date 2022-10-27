import { Stack } from '@chakra-ui/react'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { Can } from '../Can'

export function SidebarNav() {
	const { user } = useContext(AuthContext)

	return (
		<Stack align='flex-start' spacing='8'>
			<NavSection title='GERAL'>
				<NavLink href='/dashboard' icon={RiDashboardLine}>Dashboard</NavLink>
				<Can
					roles={['admin']}
				>
					<NavLink href='/users' icon={RiContactsLine}>Usuários</NavLink>
				</Can>
			</NavSection>

			<Can
				roles={['admin']}
			>
				<NavSection title='AUTOMAÇÃO'>
					<Can
						permissions={['admin.master']}
					>
						<NavLink href='/forms' icon={RiInputMethodLine}>Formulários</NavLink>
					</Can>
					<NavLink href='/automation' icon={RiGitMergeLine}>Automação</NavLink>
				</NavSection>
			</Can>
		</Stack>
	)
}