import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedExperiences from '@/components/home/FeaturedExperiences';
import CategoryExplorer from '@/components/home/CategoryExplorer';
import WhyAlkanz from '@/components/home/WhyAlkanz';
import DestinationsSection from '@/components/home/DestinationsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col w-full">
        <Hero />
        <FeaturedExperiences />
        <CategoryExplorer />
        <WhyAlkanz />
        <DestinationsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
