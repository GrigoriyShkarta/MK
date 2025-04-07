import Link from 'next/link'
import Image from 'next/image'

import main from '@/assets/main.jpg'

export default function Header() {
	return (
		<header className='bg-black text-white pb-10'>
			<Image alt='ys vocal coach' src={main} />
			<div className='container mx-auto text-center'>
				<h1 className='text-4xl font-bold mt-12'>
					МАЙСТЕР-КЛАС З ЕКСТРЕМАЛЬНИХ ТЕХНІК ВОКАЛУ
				</h1>
				<h1 className='text-4xl my-4'>🔥🔥🔥</h1>
				<h1 className='text-4xl font-bold mb-4 text-[#ff6723]'>
					ХІТ ПРОДАЖІВ!
				</h1>
				<p className='text-xl mb-6 '>
					ЄДИНЕ НАВЧАННЯ, ЯКЕ ДАЄ РЕАЛЬНИЙ РЕЗУЛЬТАТ
				</p>
				<Link
					href='#cta'
					className='bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition'
				>
					Записатися зараз
				</Link>
			</div>
		</header>
	)
}
