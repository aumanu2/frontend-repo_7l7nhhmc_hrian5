import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import SkillsMarketplace from './components/SkillsMarketplace.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white antialiased">
      {/* Navigation */}
      <Navbar />

      {/* Hero with 3D scene */}
      <section id="home" className="relative">
        <Hero />
      </section>

      {/* Core Features */}
      <section id="features" className="relative">
        <Features />
      </section>

      {/* Skills Marketplace */}
      <section id="marketplace" className="relative">
        <SkillsMarketplace />
      </section>
    </div>
  );
}

export default App;
