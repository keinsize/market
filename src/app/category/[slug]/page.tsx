import { notFound } from 'next/navigation'

import { CategoriesService } from '@/services/categories/categories.service'
import { ProductsService } from '@/services/products/products.service'
import { Props } from '@/types/page.types'
import { CategoryProducts } from './CategoryProducts'

export async function generateMetadata({ params }: Props) {
	const { slug } = await params
	const category = CategoriesService.getBySlug(slug)

	if (!category) notFound()

	return {
		title: category.name,
	}
}
export default async function Page({ params, searchParams }: Props) {
	const { slug } = await params
	const category = CategoriesService.getBySlug(slug)
	if (!category) notFound()
	const limit = parseInt(
		(await searchParams).limit || process.env.PRODUCTS_LIMIT!
	)
	const page = parseInt((await searchParams).page || '1')
	const data = ProductsService.getProducts({
		page,
		limit,
		categoryId: category.id,
	})

	return (
		<CategoryProducts
			data={data}
			title={category.name}
			searchParams={{ limit, page }}
		/>
	)
}

export async function generateStaticParams() {
	const categories = CategoriesService.getAll()

	return categories.map(category => ({
		slug: category.slug,
	}))
}
