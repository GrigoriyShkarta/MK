import Carousel from '@/components/Carousel'

export default function Testimonials() {
	return (
		<section className='py-12'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold mb-6'>ВІДГУКИ</h2>
				{/* <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h3 className='text-xl font-semibold mb-2'>Відео-відгуки</h3>
						<p>Реальні враження та досягнення учасників.</p>
					</div>
					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h3 className='text-xl font-semibold mb-2'>Текстові відгуки</h3>
						<p>Скріншоти або цитати з повідомлень задоволених учасників.</p>
					</div>
				</div> */}
				<iframe
					width='100%'
					height='642'
					src='https://www.youtube.com/embed/q1dL_hneZG4'
					title='Відгуки про майстер-клас по екстрим-технікам'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					referrerPolicy='strict-origin-when-cross-origin'
				></iframe>

				<div className='relative h-[400px] overflow-hidden mt-[24px]'>
					<Carousel />
				</div>
			</div>
		</section>
	)
}
