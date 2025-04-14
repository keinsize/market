'use client'

import { redirect } from 'next/navigation'
import { toast } from 'react-toastify'

export function notify() {
	toast.info(
		'Поскольку сайт работает без базы данных, в этой версии проекта отсутствует пользовательский функционал, и данная кнопка неактивна. Рабочую версию можно найти в другом моём проекте на GitHub. (Нажмите, чтобы перейти)',
		{
			onClick: () => {
				redirect('https://github.com/keinsize/marketplace')
			},
			autoClose: 3000,
		}
	)
}
