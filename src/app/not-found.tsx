import type { Metadata } from 'next'
import Link from 'next/link'

import NotFound from '../components/ui/not-found/NotFound'

export const metadata: Metadata = {
	title: 'Страница не найдена',
}

export default function notFound() {
	return (
		<NotFound>
			<p className='text-xl w-1/3 text-justify'>
				Если вы видите это сообщение, данный функционал еще не добавлен в
				проект. Скорее всего, вы сможете найти его{' '}
				<Link
					className='underline '
					href='https://github.com/keinsize/marketplace'
				>
					здесь
				</Link>
				.
			</p>
		</NotFound>
	)
}
