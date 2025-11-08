import React from 'react';
import { Search, Filter, Hammer, Sprout, Wrench, Users, MapPin } from 'lucide-react';

const categories = [
  { name: 'Agriculture', icon: Sprout, color: 'bg-emerald-50 text-emerald-700 ring-emerald-200' },
  { name: 'Repair', icon: Wrench, color: 'bg-amber-50 text-amber-700 ring-amber-200' },
  { name: 'Construction', icon: Hammer, color: 'bg-sky-50 text-sky-700 ring-sky-200' },
  { name: 'Community', icon: Users, color: 'bg-violet-50 text-violet-700 ring-violet-200' },
];

const listings = [
  {
    title: 'Irrigation Setup & Maintenance',
    user: 'Suman K.',
    village: 'Kheda',
    category: 'Agriculture',
    rate: '4 credits/hr',
    desc: 'Drip and sprinkler installation, seasonal checkups, water-use optimization.'
  },
  {
    title: 'Bicycle & Pump Repairs',
    user: 'Rahul P.',
    village: 'Bhor',
    category: 'Repair',
    rate: '2 credits/hr',
    desc: 'Tyres, chains, hand pumps, basic welding. Quick and reliable.'
  },
  {
    title: 'Eco Bricklaying (Mud + Lime)',
    user: 'Amita R.',
    village: 'Tuljapur',
    category: 'Construction',
    rate: '6 credits/hr',
    desc: 'Sustainable walling, floor finishing, and repairs using local materials.'
  },
];

const SkillsMarketplace = () => {
  return (
    <section id="marketplace" className="relative">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Skills & Tools Marketplace</h2>
        <div className="flex w-full max-w-xl items-center gap-2 sm:w-auto">
          <div className="relative w-full">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search skills, tools, or people"
              className="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-3 text-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Filter className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {categories.map((c) => (
          <span key={c.name} className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 ${c.color}`}>
            {<c.icon className="h-3.5 w-3.5" />} {c.name}
          </span>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((item) => (
          <article key={item.title} className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="mb-2 flex items-start justify-between">
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-emerald-700">{item.title}</h3>
              <span className="rounded-full bg-gray-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">{item.rate}</span>
            </div>
            <p className="text-sm text-gray-600">{item.desc}</p>
            <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-gray-400" />
                <span>{item.user}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span>{item.village}</span>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-700">Request</button>
              <button className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50">View Profile</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillsMarketplace;
