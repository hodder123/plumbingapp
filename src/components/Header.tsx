'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  onContactClick?: () => void;
}

const Header = ({ onContactClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Plumbing', 
      href: '/plumbing',
      dropdown: [
        { name: 'Hot Water Heater Replacements', href: '/plumbing#p1' },
        { name: 'Drain and Sewer Camera & Video Inspections', href: '/plumbing#p2' },
        { name: 'New Construction Services', href: '/plumbing#p3' },
        { name: 'New Bathroom Installations', href: '/plumbing#p4' },
        { name: 'Broken Pipe and Waterline Repairs', href: '/plumbing#p5' },
        { name: 'Irrigation Repairs', href: '/plumbing#p6' },
        { name: 'Bathtub & Shower Repairs', href: '/plumbing#p7' },
        { name: 'Clogged Toilet Repairs', href: '/plumbing#p8' },
        { name: 'Sump Pump Replacements', href: '/plumbing#p9' },
      ]
    },
    { 
      name: 'Cooling', 
      href: '/cooling',
      dropdown: [
        { name: 'Air Conditioners', href: '/cooling#c1' },
        { name: 'Maintenance', href: '/cooling#c2' },
        { name: 'Upgrades', href: '/cooling#c3' },
        { name: 'Thermostats', href: '/cooling#c4' },
        { name: 'Ducting', href: '/cooling#c5' },
      ]
    },
    { 
      name: 'Heating', 
      href: '/heating',
      dropdown: [
        { name: 'Heating Systems', href: '/heating#h1' },
        { name: 'Furnaces', href: '/heating#h2' },
        { name: 'Boilers', href: '/heating#h3' },
        { name: 'Maintenance', href: '/heating#h4' },
      ]
    },
    { 
      name: 'Gas Fitting', 
      href: '/gas-fitting',
      dropdown: [
        { name: 'Gas Lines', href: '/gas-fitting#g1' },
        { name: 'Gas Water Heaters', href: '/gas-fitting#g2' },
        { name: 'Gas Fireplaces', href: '/gas-fitting#g3' },
        { name: 'BBQs and Stoves', href: '/gas-fitting#g4' },
        { name: 'Outdoor Firepits & Fire Tables', href: '/gas-fitting#g5' },
      ]
    },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' }, // Added Blog link
    { name: 'Contact Us', href: '#', isContactButton: true },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <>
      <header className="bg-white fixed top-0 w-full z-[1000] border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo Section */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="Advanced Plumbing Kamloops"
                width={60}
                height={60}
                className="w-[60px] h-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="ml-3 hidden lg:block">
              <h1 className="font-bold text-xl text-gray-900 leading-tight">
                Advanced Plumbing
              </h1>
              <p className="text-sm text-blue-600 font-medium -mt-1">
                Kamloops
              </p>
            </div>
          </Link>

          {/* Spacer for better distribution */}
          <div className="flex-1"></div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex list-none m-0 p-0 gap-1">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  {item.isContactButton ? (
                    <button
                      onClick={onContactClick}
                      className={`flex items-center px-4 py-3 font-medium transition-all duration-200 whitespace-nowrap relative text-gray-700 hover:text-blue-600`}
                    >
                      <span>{item.name}</span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-3 font-medium transition-all duration-200 whitespace-nowrap relative ${
                        isActive(item.href)
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.dropdown && (
                        <svg 
                          className="w-3 h-3 ml-2 transition-transform duration-200 group-hover:rotate-180" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                      {/* Active indicator */}
                      {isActive(item.href) && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-600"></div>
                      )}
                    </Link>
                  )}
                  
                  {/* Desktop Dropdown Menu */}
                  {item.dropdown && (
                    <div className="absolute top-full left-0 w-72 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[1000]">
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block py-3 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 border-l-2 border-transparent hover:border-blue-500"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center space-y-1 border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 transform ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 transform ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[999] transition-opacity duration-300">
          <div className="absolute top-20 left-0 right-0 bg-white max-h-[80vh] overflow-y-auto shadow-2xl border-t border-gray-100">
            {/* Emergency Contact - Mobile */}
            <div className="bg-orange-50 p-4 border-b border-orange-200">
              <div className="flex items-center justify-center">
                <div className="flex items-center text-orange-600 mr-3">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm font-semibold">Emergency:</span>
                </div>
                <a 
                  href="tel:2508288761" 
                  className="text-orange-600 font-bold"
                >
                  (250) 828-8761
                </a>
              </div>
            </div>

            <nav className="py-4">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center justify-between px-4 py-3">
                    {item.isContactButton ? (
                      <button
                        onClick={() => {
                          onContactClick?.();
                          setIsMenuOpen(false);
                        }}
                        className="font-medium text-lg transition-colors duration-200 text-gray-700"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`font-medium text-lg transition-colors duration-200 ${
                          isActive(item.href) ? 'text-blue-600' : 'text-gray-700'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                    {item.dropdown && (
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="text-gray-400 hover:text-gray-600 p-2"
                      >
                        <svg 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="bg-gray-50 px-4 pb-3">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block py-2 px-4 text-gray-600 hover:text-blue-600 transition-colors duration-200 border-l-2 border-gray-200 hover:border-blue-500"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;