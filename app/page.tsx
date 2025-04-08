import AboutMasterclass from '@/sections/AboutMasterClass'
import Benefits from '@/sections/Benefits'
import CTA from '@/sections/CTA'
import FAQ from '@/sections/FAQ'
import Footer from '@/sections/Footer'
import Header from '@/sections/Header'
import MasterclassContent from '@/sections/MasterClassContent'
import Outcomes from '@/sections/Outcomes'
import Results from '@/sections/Results'
import Testimonials from '@/sections/Testimonials'

export default function Home() {
	return (
		<div>
			<Header />
			<AboutMasterclass />
			<Benefits />
			<Outcomes />
			<MasterclassContent />
			<Testimonials />
			<Results />
			<FAQ />
			<CTA />
			<Footer />
		</div>
	)
}
