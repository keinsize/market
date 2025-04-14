import Link from 'next/link'
import { IoHome } from 'react-icons/io5'
import { Catalog } from './catalog/Catalog'
import styles from './header.module.scss'
import { Menu } from './menu/Menu'
import { Search } from './search/Search'

export function Header() {
	return (
		<header className={styles.header}>
			<Link
				href={'/'}
				className='h-full text-[28px] bg-blue text-white p-2 rounded-[10px]'
			>
				<IoHome />
			</Link>

			<Catalog />
			<Search />
			<Menu />
		</header>
	)
}
