'use client'

import cn from 'clsx'
import { useState } from 'react'

import { Review } from '@/components/ui/review/Review'
import { Score } from '@/components/ui/score/Score'
import { ProductsSwiper } from '@/components/ui/swiper/ProductsSwiper'

import { IProductWithReviews } from '@/types/product.types'
import { IShop } from '@/types/shop.types'

import { formatToCurrency } from '@/utils/format-to-currency'

import Link from 'next/link'
import { AiOutlineShop } from 'react-icons/ai'
import { CartItem } from './CartItem'
import { Favorite } from './Favorite'
import styles from './Product.module.scss'

export function Product({
	product,
	shop,
}: {
	product: IProductWithReviews
	shop: IShop
}) {
	const [section, setSection] = useState<'description' | 'reviews'>(
		'description'
	)

	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<div className={styles.left}>
					<ProductsSwiper className={styles.swiper} product={product} />
				</div>
				<div className={styles.info}>
					<h1>{product.name}</h1>
					<div className={styles.price}>
						<span className={styles.current}>
							{formatToCurrency(product.price)}
						</span>
						{product.oldPrice > product.price && (
							<>
								<span className={styles.old}>
									{formatToCurrency(product.oldPrice)}
								</span>
								<span className={styles.discount}>
									-
									{(
										((product.oldPrice - product.price) / product.oldPrice) *
										100
									).toFixed()}
									%
								</span>
							</>
						)}
					</div>
					<div className={styles.btns}>
						<CartItem />
						<Favorite />
					</div>
					{shop && (
						<Link href={`/shops/${shop.slug}`} className={styles.shop}>
							<AiOutlineShop />
							<span>{shop.name}</span>
						</Link>
					)}
				</div>
			</div>
			<div className={styles.other}>
				<div className={styles.headers}>
					<button
						onClick={() => setSection('description')}
						className={cn({ [styles.active]: section === 'description' })}
					>
						Описание
					</button>
					{!!product.reviews.length && (
						<button
							onClick={() => setSection('reviews')}
							className={cn({ [styles.active]: section === 'reviews' })}
						>
							Отзывы
						</button>
					)}
					{section === 'reviews' && (
						<div className={styles.score}>
							<span>{product.reviewsScore}</span>
							<Score score={product.reviewsScore!} />
						</div>
					)}
				</div>
				<div className={styles.content}>
					{section === 'description' ? (
						<div className={styles.description}>{product.description}</div>
					) : (
						<div className={styles.reviews}>
							{product.reviews.map(review => (
								<Review review={review} key={review.id} />
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
