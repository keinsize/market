import { notify } from '@/utils/notify'
import styles from './Product.module.scss'

export function CartItem() {
	return (
		<button onClick={notify} className={styles.addToCart}>
			Добавить в корзину
		</button>
	)
}
