import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'YS Vocal Coach',
	description:
		'Це унікальне навчання для викладачів вокалу та вокалістів, які прагнуть глибоко зануритися у світ екстрим-технік, розібратися в їх механіці та отримати мій найефективніший метод, заснований на наукових дослідженнях голосу.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-3xl mx-auto
`}
			>
				{children}
			</body>
		</html>
	)
}
