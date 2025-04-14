import db from '@/db'
import { IShop } from '@/types/shop.types'

export const ShopsService = {
	getBySlug(slug: string): IShop | undefined {
		return db.shops.find(shop => shop.slug === slug)
	},

	getById(id: string): IShop {
		return db.shops.find(shop => shop.id === id)!
	},

	getAll(): IShop[] {
		return db.shops
	},
}
