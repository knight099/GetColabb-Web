import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Screens from '@/components/Screens';
import Roles from '@/components/Roles';
import Trust from '@/components/Trust';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Screens />
        <Roles />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
