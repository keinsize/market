'use client'

import { Pagination } from '@/components/ui/pagination/Pagination'
import { Products } from '@/components/ui/products/Products'
import { IProductResponse } from '@/types/product.types'

interface ICategoryProducts {
	searchParams: {
		limit: number
		page: number
	}
	title: string
	data: IProductResponse
}

export function CategoryProducts({
	data,
	searchParams,
	title,
}: ICategoryProducts) {
	return (
		<>
			<Products products={data.items} title={title} />
			{searchParams.limit < data.totalCount && (
				<Pagination
					currentPage={searchParams.page}
					limit={searchParams.limit}
					totalCount={data.totalCount}
				/>
			)}
		</>
	)
}
