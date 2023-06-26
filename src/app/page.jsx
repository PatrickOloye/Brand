import Image from 'next/image';
import Hero from '@/components/hero/Hero';
import SubHero from '@/components/subhero/SubHero';
import MidSub from '@/components/midsub/MidSub';
import Card from '@/components/homecards/Cards';
import Features from '@/components/feature/Feature';
import Stuff from '@/components/stuff/Stuff';
import Half from '@/components/landinghalf/Half';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden w-full bg-white">
      <Hero />
      <Features />
      <Stuff />
      <SubHero />
      <Card />
      <MidSub />
      <Half />
    </main>
  );
}
