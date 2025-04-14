import db from '@/db'
import {
	IGetSearchProductNames,
	IProduct,
	IProductResponse,
	IQueriesToGetProducts,
} from '@/types/product.types'

export const ProductsService = {
	updateCountOpened(id: string): void {
		db.products.map(product => {
			if (product.id === id) {
				product.countOpened++
			}
		})
	},

	getProductNames(
		data: IGetSearchProductNames
	): Pick<IProduct, 'id' | 'name' | 'images'>[] {
		return db.products
			.filter(product =>
				product.name.toLowerCase().includes(data.searchSuggest.toLowerCase())
			)
			.slice(0, data.limit)
	},

	getById(id: string): IProduct | undefined {
		const product = db.products.find(product => product.id === id)
		const reviews = calculateReviewsScore(id)

		return product ? { ...product, reviewsScore: reviews } : undefined
	},

	getProducts(data?: IQueriesToGetProducts): IProductResponse {
		let products = db.products

		// 3. Добавляем поле reviewsScore к каждому товару
		products = products.map(product => ({
			...product,
			reviewsScore: calculateReviewsScore(product.id),
		}))

		if (!data)
			return {
				items: products,
				totalCount: products.length, // Общее количество товаров после фильтрации
			}

		if (data.categoryId)
			products = products.filter(
				product => product.categoryId === data.categoryId
			)

		if (data.query) {
			const query = data.query.toLowerCase()
			products = products.filter(product =>
				product.name.toLowerCase().includes(query)
			)
		}

		// 4. Пагинация
		const limit = data.limit || parseInt(process.env.PRODUCTS_LIMIT!)
		const page = data.page || 1 // По умолчанию первая страница
		const startIndex = (page - 1) * limit
		const endIndex = page * limit

		const paginatedProducts = products.slice(startIndex, endIndex)

		// 5. Возвращаем результат
		return {
			items: paginatedProducts,
			totalCount: products.length, // Общее количество товаров после фильтрации
		}
	},

	getReviews(productId: string) {
		return db.reviews.filter(review => review.productId === productId)
	},
}

function calculateReviewsScore(productId: string) {
	const productReviews = db.reviews.filter(
		review => review.productId === productId
	)

	// Если есть отзывы, считаем средний балл
	if (productReviews.length > 0) {
		const totalScore = productReviews.reduce(
			(sum, review) => sum + review.score,
			0
		)
		const averageScore = totalScore / productReviews.length

		return averageScore
	} else {
		// Если отзывов нет, устанавливаем reviewsScore в 0
		return 0
	}
}
