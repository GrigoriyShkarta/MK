'use client'

import { useState } from 'react'

export default function FAQ() {
	// Состояние для отслеживания открытых вопросов
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	// Функция для переключения состояния вопроса
	const toggleQuestion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section className='bg-[url(../assets/bg.jpeg)] bg-cover bg-center py-12'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold mb-6 text-white'>ЧАСТІ ЗАПИТАННЯ</h2>
				<div className='space-y-4'>
					{faqData.map((item, index) => (
						<div key={index} className='rounded-lg overflow-hidden'>
							<button
								onClick={() => toggleQuestion(index)}
								className='flex justify-between items-center w-full p-4 text-left text-xl font-semibold focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50 bg-black/80 hover:bg-black/90 transition-colors duration-200 cursor-pointer'
							>
								<span className='text-white'>{item.question}</span>
								<svg
									className={`w-6 h-6 text-white transition-transform duration-200 ${
										openIndex === index ? 'transform rotate-180' : ''
									}`}
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M19 9l-7 7-7-7'
									/>
								</svg>
							</button>
							<div
								className={`transition-all duration-300 ease-in-out overflow-hidden ${
									openIndex === index
										? 'max-h-96 opacity-100'
										: 'max-h-0 opacity-0'
								}`}
							>
								<div className='px-4 pb-4 text-gray-200 bg-black/70'>
									{item.answer}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

// Данные для вопросов и ответов
const faqData = [
	{
		question: '❓ Чи підходить майстер-клас для новачків?',
		answer:
			'Майстер-клас не рекомендований тим, хто тільки починає займатися вокалом, оскільки він містить глибоку теоретичну інформацію та вимагає базових навичок контролю голосу.',
	},
	{
		question: '❓ Чи можна навчитися екстрим-вокалу без шкоди для голосу?',
		answer:
			'Так, абсолютно! Навчання побудоване на науково обґрунтованих методах, що дозволяють захищати зв’язки та уникати травм.',
	},
	{
		question: '❓ Що робити, якщо не вийшло освоїти техніку з першого разу?',
		answer:
			'Після майстер-класу ви матимете ще 7 днів підтримки в Telegram, де я буду відповідати на запитання, коригувати ваші спроби та давати рекомендації. Також важливо прокачувати навички контролю голосового апарату – найчастіше проблеми виникають саме через нестачу контролю. На майстер-класі я допоможу вам зрозуміти, які аспекти потрібно допрацювати, щоб досягти успішного результату. У вас також залишаться всі матеріали для самостійної практики, а якщо буде потрібно – ми можемо продовжити роботу на індивідуальних чи групових заняттях.',
	},
	{
		question: '❓ Чи можна подарувати ваш майстер-клас?',
		answer:
			'Так, це чудова ідея для подарунка! 🎁 Ви оплачуєте майстер-клас, повідомляєте мені ім’я та прізвище людини, якій робите подарунок, і я створюю електронний подарунковий сертифікат.',
	},
	{
		question: '❓ Як записатися?',
		answer:
			'Напишіть мені в Telegram або Instagram: @yana_vocalcoach, і ми обговоримо всі деталі та оберемо зручний час.',
	},
]
