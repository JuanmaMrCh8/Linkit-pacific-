import React from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { Hero, TrustIndicators } from '@/components/HomeSections';
import { BlogPreview } from '@/components/BlogPreview';
import { ImportProcessTimeline } from '@/components/ImportProcessTimeline';
import { TrackingWidget } from '@/components/TrackingWidget';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 mb-20">
          <TrackingWidget />
        </div>
        <ImportProcessTimeline />
        <TrustIndicators />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
}
