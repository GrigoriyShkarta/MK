'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import Image from 'next/image'

import one from '@/assets/1.png'
import two from '@/assets/2.png'
import three from '@/assets/3.png'
import four from '@/assets/4.png'
import five from '@/assets/5.png'
import six from '@/assets/6.png'
import seven from '@/assets/7.png'
import eight from '@/assets/8.png'

export default function Carousel() {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [touchStart, setTouchStart] = useState(0)
	const [touchEnd, setTouchEnd] = useState(0)
	const carouselRef = useRef<HTMLDivElement>(null)

	const carouselImages = [one, two, three, four, five, six, seven, eight]

	const nextSlide = useCallback(() => {
		setCurrentSlide(prev => (prev === carouselImages.length - 1 ? 0 : prev + 1))
	}, [carouselImages.length])

	const prevSlide = useCallback(() => {
		setCurrentSlide(prev => (prev === 0 ? carouselImages.length - 1 : prev - 1))
	}, [carouselImages.length])

	// Auto-advance carousel
	useEffect(() => {
		const timer = setInterval(nextSlide, 5000)
		return () => clearInterval(timer)
	}, [nextSlide])

	// Touch handlers for swipe
	const handleTouchStart = (e: React.TouchEvent) => {
		setTouchStart(e.targetTouches[0].clientX)
	}

	const handleTouchMove = (e: React.TouchEvent) => {
		setTouchEnd(e.targetTouches[0].clientX)
	}

	const handleTouchEnd = () => {
		if (touchStart - touchEnd > 50) {
			nextSlide() // swipe left
		}

		if (touchStart - touchEnd < -50) {
			prevSlide() // swipe right
		}
	}

	// Mouse drag handlers
	const handleMouseDown = (e: React.MouseEvent) => {
		setTouchStart(e.clientX)
	}

	const handleMouseMove = (e: React.MouseEvent) => {
		if (touchStart !== 0) {
			setTouchEnd(e.clientX)
		}
	}

	const handleMouseUp = () => {
		if (touchStart - touchEnd > 100) {
			nextSlide()
		} else if (touchStart - touchEnd < -100) {
			prevSlide()
		}
		setTouchStart(0)
		setTouchEnd(0)
	}

	return (
		<div className='relative w-full h-full overflow-hidden'>
			{/* Carousel Slides */}
			<div
				ref={carouselRef}
				className='relative w-full h-full'
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
			>
				{carouselImages.map((img, index) => (
					<div
						key={index}
						className={`el-carousel__item absolute inset-0 transition-transform duration-500 ${
							index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
						}`}
						style={{
							transform: `translateX(${(index - currentSlide) * 100}%)`,
						}}
					>
						<div className='carousel-img jump h-full w-full relative'>
							<Image
								src={img}
								alt={`Carousel ${index + 1}`}
								className='object-cover'
								fill
								priority={index === currentSlide}
							/>
						</div>
					</div>
				))}
			</div>

			{/* Indicators */}
			<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex z-20'>
				<ul className='el-carousel__indicators flex gap-2'>
					{carouselImages.map((_, index) => (
						<li
							key={index}
							className={`el-carousel__indicator w-3 h-3 rounded-full cursor-pointer transition-colors ${
								index === currentSlide
									? 'bg-white'
									: 'bg-gray-500 hover:bg-gray-400'
							}`}
							onClick={() => setCurrentSlide(index)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</ul>
			</div>
		</div>
	)
}
