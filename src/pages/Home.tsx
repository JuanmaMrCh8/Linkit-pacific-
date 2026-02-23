import React from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { ServicesOverview, TrustIndicators, AboutSection } from '@/components/HomeSections';
import { BlogPreview } from '@/components/BlogPreview';
import { ImportProcessTimeline } from '@/components/ImportProcessTimeline';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ImportProcessTimeline />
        <ServicesOverview />
        <AboutSection />
        <TrustIndicators />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
}
