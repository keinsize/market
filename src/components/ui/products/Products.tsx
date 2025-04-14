import Image from 'next/image'
import Link from 'next/link'

import { IProduct } from '@/types/product.types'
import { formatToCurrency } from '@/utils/format-to-currency'
import styles from './Products.module.scss'

export function Products({
	products,
	title,
}: {
	products: IProduct[]
	title: string
}) {
	return (
		<div className={styles.wrapper}>
			<h1>{title}</h1>
			<div className={styles.row}>
				{products.map(product => (
					<Link
						href={`/product/${product.id}`}
						key={product.id}
						className={styles.item}
					>
						<Image
							src={product.images[0]}
							alt={product.name}
							className={styles.image}
							width={400}
							height={533}
						/>
						<div className={styles.price_wrapper}>
							<p className={styles.price}>{formatToCurrency(product.price)}</p>
							<p className={styles.old_price}>
								{formatToCurrency(product.oldPrice)}
							</p>
						</div>
						<h2>{product.name}</h2>
					</Link>
				))}
			</div>
		</div>
	)
}
