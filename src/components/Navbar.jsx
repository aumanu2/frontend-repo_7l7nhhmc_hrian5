import React from 'react';
import { Menu, X, Rocket, User } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <Rocket size={18} />
          </span>
          <span className="text-lg">R-EASE</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">Features</a>
          <a href="#skill-tree" className="text-sm font-medium text-gray-600 hover:text-gray-900">Skill Tree</a>
          <a href="#marketplace" className="text-sm font-medium text-gray-600 hover:text-gray-900">Marketplace</a>
          <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900">About</a>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Join Community</button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
            <User size={16} /> Login
          </button>
        </div>
        <button
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center rounded-lg p-2 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gray-200/60 bg-white p-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#features" className="text-sm font-medium text-gray-700">Features</a>
            <a href="#skill-tree" className="text-sm font-medium text-gray-700">Skill Tree</a>
            <a href="#marketplace" className="text-sm font-medium text-gray-700">Marketplace</a>
            <a href="#about" className="text-sm font-medium text-gray-700">About</a>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Join</button>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                <User size={16} /> Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
