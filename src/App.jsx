import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SkillsMarketplace from './components/SkillsMarketplace';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-7xl space-y-12 px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <Hero />
        <Features />
        <SkillsMarketplace />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
