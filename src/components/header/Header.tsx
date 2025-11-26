import Link from 'next/link'
import { Suspense } from 'react'
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
				className='h-full text-[28px] bg-blue text-white p-2 mr-2 rounded-[10px]'
			>
				<IoHome />
			</Link>

			<Catalog />
			<Suspense>
				<Search />
			</Suspense>
			<Menu />
		</header>
	)
}
