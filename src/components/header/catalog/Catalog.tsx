'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useOutside } from '@/hooks/useOutside'
import { CategoriesService } from '@/services/categories/categories.service'
import styles from '../header.module.scss'

export function Catalog() {
	const { ref, isShow, setIsShow } = useOutside(false)
	const categories = CategoriesService.getAll()

	return (
		<section className={styles.catalog} ref={ref}>
			<button
				className={styles.catalog_button}
				onClick={() => setIsShow(prev => !prev)}
			>
				<Image src={'/icons/menu.svg'} alt='' width={16} height={16} />
				<span>Каталог</span>
			</button>
			{isShow && (
				<div className={styles.catalog_list}>
					{categories.map(category => (
						<Link
							className={styles.catalog_item}
							href={`/category/${category.slug}`}
							key={category.id}
						>
							{category.name}
						</Link>
					))}
				</div>
			)}
		</section>
	)
}
