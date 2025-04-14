import db from '@/db'
import { ICategory } from '@/types/category.types'

export const CategoriesService = {
	getAll(): ICategory[] {
		return db.categories
	},

	getBySlug(slug: string): ICategory | undefined {
		return db.categories.find(category => category.slug === slug)
	},
}
