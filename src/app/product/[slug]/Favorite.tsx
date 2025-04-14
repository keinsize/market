import { AiOutlineHeart } from 'react-icons/ai'

import { redirect } from 'next/navigation'
import { toast } from 'react-toastify'
import styles from './Product.module.scss'

export function Favorite() {
	return (
		<button
			onClick={() =>
				toast.info(
					'Так как сайт работает без базы данных, из этой версии проекта был вырезан пользовательский функционал и данная кнопка не работает. Рабочую версию вы можете найти в другом моем проекте на GitHub. (Кликните чтобы перейти)',
					{
						onClick: () => {
							redirect('https://github.com/keinsize/marketplace')
						},
					}
				)
			}
			className={styles.favorites}
		>
			<AiOutlineHeart />
		</button>
	)
}
