import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Showcase from './components/Showcase.jsx';
import SkillsMarketplace from './components/SkillsMarketplace.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white antialiased">
      <Navbar />

      <section id="home" className="relative">
        <Hero />
      </section>

      <section id="features" className="relative">
        <Features />
      </section>

      <section id="readiness" className="relative">
        <Showcase />
      </section>

      <section id="marketplace" className="relative">
        <SkillsMarketplace />
      </section>

      <Footer />
    </div>
  );
}

export default App;
