import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="relative h-[520px] w-full overflow-hidden rounded-2xl border border-gray-200/60 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <Spline scene="https://prod.spline.design/8C4WQ8iQSVvYhVey/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Empowering Villages, Intelligently
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            R-EASE helps local communities list skills and tools, barter services, and sell authentic products — building a trusted, self-sustaining rural economy.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#features" className="rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700">Explore Features</a>
            <a href="#marketplace" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">Visit Marketplace</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
