import React from 'react';
import { Store, Network, Landmark, CheckCircle2 } from 'lucide-react';

const Showcase = () => {
  return (
    <section id="skill-tree" className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Community Readiness Dashboard</h2>
          <p className="mt-3 text-gray-600">
            Visualize skills, tools, and training needs to kickstart local projects. Our AI clusters talent into project teams and highlights missing capabilities.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-emerald-600" size={18}/> Skill clusters with readiness %</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-emerald-600" size={18}/> Suggested training or collaborations</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-emerald-600" size={18}/> Credit flow insights and utilization</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-emerald-50 p-4 text-center">
              <Network className="mx-auto text-emerald-600" />
              <div className="mt-2 text-sm font-medium text-gray-700">Skill Clusters</div>
              <div className="text-2xl font-bold text-gray-900">12</div>
            </div>
            <div className="rounded-xl bg-teal-50 p-4 text-center">
              <Store className="mx-auto text-teal-600" />
              <div className="mt-2 text-sm font-medium text-gray-700">Verified Products</div>
              <div className="text-2xl font-bold text-gray-900">48</div>
            </div>
            <div className="rounded-xl bg-amber-50 p-4 text-center">
              <Landmark className="mx-auto text-amber-600" />
              <div className="mt-2 text-sm font-medium text-gray-700">Credits Circulating</div>
              <div className="text-2xl font-bold text-gray-900">2.1k</div>
            </div>
          </div>
          <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-3/4 rounded-full bg-emerald-600" />
          </div>
          <div className="mt-2 text-right text-xs text-gray-500">Readiness: 75%</div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
