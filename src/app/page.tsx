import { ProductsService } from '@/services/products/products.service'
import { Props } from '@/types/page.types'
import { IProductResponse, IQueriesToGetProducts } from '@/types/product.types'
import { Main } from './Main'

export default async function Page({ searchParams }: Props) {
	const limit = parseInt(
		(await searchParams).limit || process.env.PRODUCTS_LIMIT!
	)
	const data = await getProducts({
		query: (await searchParams).query || '',
		limit: limit,
	})

	return (
		<Main
			data={data}
			searchParams={{ limit, query: (await searchParams).query }}
		/>
	)
}

export async function getProducts(
	data: IQueriesToGetProducts
): Promise<IProductResponse> {
	return ProductsService.getProducts(data)
}
