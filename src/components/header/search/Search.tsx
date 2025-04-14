'use client'

import Link from 'next/link'

import { useOutside } from '@/hooks/useOutside'
import Image from 'next/image'
import { IoSearch } from 'react-icons/io5'
import styles from '../header.module.scss'
import { useSearch } from './hooks/useSearch'

export function Search() {
	const { handleSearch, productNames, searchTerm, submitSearch } = useSearch()
	const { isShow, ref, setIsShow } = useOutside(false)

	return (
		<>
			{isShow && (
				<div className='fixed h-screen w-screen left-0 top-0 bg-[rgba(3,8,13,.32)] z-0' />
			)}
			<section className={styles.search}>
				<form onSubmit={e => e.preventDefault()}>
					<div
						onClick={() => setIsShow(true)}
						className={styles.input_wrapper}
						ref={ref}
					>
						<input
							placeholder='Search'
							value={searchTerm}
							onChange={handleSearch}
						/>
					</div>
					<div className={styles.button_wrapper}>
						<button
							type='submit'
							title='Было решено изменить функционал поиска, но кнопку решил оставить для красоты'
						>
							<IoSearch />
						</button>
					</div>
				</form>
				{productNames && isShow && (
					<>
						<div className={styles.list}>
							{productNames.map(product => (
								<Link key={product.id} href={`/product/${product.id}`}>
									<Image
										src={product.images[0]}
										className={styles.image}
										alt=''
										width={100}
										height={100}
									/>
									<span>{product.name}</span>
								</Link>
							))}
						</div>
					</>
				)}
			</section>
		</>
	)
}
