import React from 'react'

export default function Price() {
	return (
		<div className='flex flex-col items-center justify-center bg-black py-12 px-4'>
			<h2 className='text-3xl font-bold mb-6'>ЦІНА</h2>
			<div className='text-center p-10 rounded-2xl shadow-2xl bg-gradient-to-br from-red-700 via-orange-600 to-yellow-500 animate-pulse'>
				<h1 className='text-4xl font-extrabold text-white drop-shadow-lg'>
					🔥 6000 грн 🔥
				</h1>
			</div>
		</div>
	)
}
