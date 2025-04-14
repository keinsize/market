import { AiFillHeart } from 'react-icons/ai'
import { BiSolidUser } from 'react-icons/bi'
import { FaBasketShopping } from 'react-icons/fa6'

import { notify } from '@/utils/notify'
import styles from '../header.module.scss'

export function Menu() {
	return (
		<section className={styles.menu}>
			<button className={styles.item} onClick={notify}>
				<BiSolidUser />
				<span>Войти</span>
			</button>
			<button className={styles.item} onClick={notify}>
				<AiFillHeart />
				<span>Избранное</span>
			</button>
			<button className={styles.item} onClick={notify}>
				<FaBasketShopping />
				<span>Корзина</span>
			</button>
		</section>
	)
}
