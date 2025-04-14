'use client'

import { Products } from '@/components/ui/products/Products'
import { ProductsService } from '@/services/products/products.service'
import type { IProductResponse } from '@/types/product.types'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './page.module.scss'

interface IMain {
	searchParams: {
		limit: number
		query?: string
	}
	data: IProductResponse
}

export function Main({ data, searchParams }: IMain) {
	const [page, setPage] = useState(1)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (page === 1) return
		const query = {
			query: searchParams.query || '',
			limit: searchParams.limit,
			page: page,
		}

		const filteredItems = ProductsService.getProducts(query)

		const start = (page - 1) * searchParams.limit
		const end = page * searchParams.limit

		const paginatedItems = filteredItems.items.slice(start, end)

		data.items.push(...paginatedItems)

		setLoading(false)
	}, [page])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const handleScroll = async () => {
		if (
			document.documentElement.scrollHeight -
				(document.documentElement.scrollTop + window.innerHeight) <
				100 &&
			data.items.length < data.totalCount
		) {
			if (loading) return
			setLoading(true)
			setPage(prev => prev + 1)
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.banner}>
				<Image
					src={'/cb21f752-f997-11ef-877e-863c847721fe-1.webp'}
					alt=''
					width={1418}
					height={300}
				/>
			</div>
			<main className='mt-5'>
				<Products products={data.items} title='Все товары' />
			</main>
		</div>
	)
}
