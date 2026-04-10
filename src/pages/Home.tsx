import React from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { Hero, AboutSummary } from '@/components/HomeSections';
import { ImportProcessTimeline } from '@/components/ImportProcessTimeline';
import { FAQ } from '@/components/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ImportProcessTimeline />
        <AboutSummary />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
