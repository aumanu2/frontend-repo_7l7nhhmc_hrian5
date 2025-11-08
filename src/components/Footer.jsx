import React from 'react';

const Footer = () => {
  return (
    <footer id="about" className="mt-16 border-t border-gray-200/60 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">About R-EASE</h4>
            <p className="mt-2 text-sm text-gray-600">A platform to digitize rural economies through trust, barter, and authentic commerce.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">For Villagers</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>List Skills & Tools</li>
              <li>Earn R-Credits</li>
              <li>Get Endorsements</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">For Buyers</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>Verified Products</li>
              <li>Authenticity Score</li>
              <li>Origin QR Codes</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>hello@r-ease.org</li>
              <li>+91 99999 99999</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-gray-200/60 pt-6 text-sm text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} R-EASE. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
