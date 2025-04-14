import type { Metadata, Viewport } from 'next'
import { Bounce, ToastContainer } from 'react-toastify'

import { SITE_NAME } from '@/config/config'

import { Header } from '@/components/header/Header'
import localFont from 'next/font/local'
import './globals.scss'
import { Providers } from './providers'

const gtEestiProDisplay = localFont({
	src: [
		{
			path: '../../public/fonts/ALSHauss-Hairline.woff2',
			weight: '100',
			style: 'normal',
		},
		{
			path: '../../public/fonts/ALSHauss-Thin.woff2',
			weight: '200',
			style: 'normal',
		},
		{
			path: '../../public/fonts/ALSHauss-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../public/fonts/ALSHauss-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/ALSHauss-Book.woff2',
			weight: '450',
			style: 'normal',
		},
		{
			path: '../../public/fonts/ALSHauss-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/ALSHauss-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/ALSHauss-Black.woff2',
			weight: '900',
			style: 'normal',
		},
	],
	display: 'swap',
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description:
		'Покупайте электронику и бытовую технику, игры, игрушки, одежду и обувь, товары для дома и сада, продукты питания по выгодным ценам."',
}
export const viewport: Viewport = {
	initialScale: 1,
	width: 'device-width',
	themeColor: '#1E1E1E',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={gtEestiProDisplay.className}>
				<Providers>
					<Header />
					<main>{children}</main>
					<ToastContainer
						position='bottom-right'
						autoClose={2000}
						hideProgressBar
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss={false}
						draggable
						pauseOnHover
						theme='light'
						transition={Bounce}
					/>
				</Providers>
			</body>
		</html>
	)
}
