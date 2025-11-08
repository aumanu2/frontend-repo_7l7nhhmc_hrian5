import React from 'react';
import { Shield, SwapHorizontal, Gauge, TreePine, Camera, FileText } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Trusted Identities',
    desc: 'Community endorsements and verification build transparent trust.',
  },
  {
    icon: SwapHorizontal,
    title: 'Skill & Tool Barter',
    desc: 'List, rent, and exchange skills or tools using credits or cash.',
  },
  {
    icon: TreePine,
    title: 'AI Skill Tree',
    desc: 'Cluster local skills into project-ready teams with readiness scores.',
  },
  {
    icon: Gauge,
    title: 'R-Credit Ledger',
    desc: 'Track earnings and spending with a simple hour-based credit system.',
  },
  {
    icon: Camera,
    title: 'Authenticity Score',
    desc: 'AI vets product stories using photos for trustable rural commerce.',
  },
  {
    icon: FileText,
    title: 'Barter Protocols',
    desc: 'Auto-generate structured agreements to reduce disputes.',
  },
];

const Features = () => {
  return (
    <section id="features" className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Core capabilities</h2>
        <p className="mt-3 text-gray-600">The essentials for a smart, self-sustaining local economy.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-700">
                <Icon size={20} />
              </span>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
