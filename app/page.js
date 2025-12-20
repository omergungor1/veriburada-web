import Hero from './components/home/Hero';
import Stats from './components/home/Stats';
import Features from './components/home/Features';
import HowItWorks from './components/home/HowItWorks';
import UseCases from './components/home/UseCases';
import DataFields from './components/home/DataFields';
import PricingPreview from './components/home/PricingPreview';
import Testimonials from './components/home/Testimonials';
import FAQ from './components/home/FAQ';

export const metadata = {
  title: 'Veriburada',
  description: 'Google Haritalardaki işletme profil verilerini 1 gün içinde teslim ediyoruz. 1.7M+ konum, telefon numarası ve iletişim bilgileri.',
  keywords: 'google maps veri, işletme verileri, lead generation, veri çıkarma, google maps scraping',
  openGraph: {
    title: 'Veriburada',
    description: 'Google Haritalardaki işletme profil verilerini 1 gün içinde teslim ediyoruz.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <UseCases />
      <DataFields />
      <PricingPreview />
      <Testimonials />
      <FAQ />
    </>
  );
}
