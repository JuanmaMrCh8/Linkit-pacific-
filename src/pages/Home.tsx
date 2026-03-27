import React from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { Hero, AboutSummary } from '@/components/HomeSections';
import { BlogPreview } from '@/components/BlogPreview';
import { ImportProcessTimeline } from '@/components/ImportProcessTimeline';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ImportProcessTimeline />
        <AboutSummary />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
}
