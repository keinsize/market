import { notFound } from 'next/navigation'

import { IProductWithReviews } from '@/types/product.types'
import { IShop } from '@/types/shop.types'

import { ProductsService } from '@/services/products/products.service'
import { ShopsService } from '@/services/shops/shops.service'
import { Props } from '@/types/page.types'
import { Product } from './Product'

export async function generateMetadata({ params }: Props) {
	const { slug } = await params
	const product = ProductsService.getById(slug)
	if (!product) notFound()

	return {
		title: product.name,
	}
}
export default async function Page({ params }: Props) {
	const { slug } = await params
	const { product, shop } = await getData(slug)

	return <Product product={product} shop={shop} />
}

export async function generateStaticParams() {
	const products = ProductsService.getProducts()

	return products.items.map(products => ({
		slug: products.id,
	}))
}

async function getData(
	slug: string
): Promise<{ product: IProductWithReviews; shop: IShop }> {
	const product = ProductsService.getById(slug)
	if (!product) notFound()
	const productWithReviews: IProductWithReviews = {
		...product,
		reviews: ProductsService.getReviews(slug),
	}

	const shop: IShop = ShopsService.getById(product.shopId)

	return { product: productWithReviews, shop }
}
