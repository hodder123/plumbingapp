'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactFormModal from '../components/ContactFormModal';
import Header from '../components/Header'; 

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
     <Header onContactClick={() => setShowContactForm(true)} />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bathroom.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          {/* Mobile-optimized heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            Expert Plumbing,<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>HVAC,<br />
            <span className="text-orange-400">& Gas Fitting Services</span><br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">in Kamloops Area</span>
          </h1>
          
          {/* Mobile-optimized subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed px-2">
            Trusted professionals with 30+ years of experience. Quality service, reliable solutions, exceptional results.
          </p>
          
          {/* Mobile-optimized buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              GET A FREE QUOTE
            </button>
            <a 
              href="tel:2508288761"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold transition-all duration-300 text-center w-full sm:w-auto"
            >
              Call (250) 828-8761
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 overflow-hidden mb-12">
        {/* Background with Light Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/background2.jpg')" }}
        >
<div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Our Professional Services
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive solutions for all your plumbing, heating, cooling, and gas fitting needs in Kamloops.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Plumbing Service */}
            <div 
              className="group bg-white/20 backdrop-blur-sm p-8 cursor-pointer transition-all duration-500 hover:bg-white/30 hover:-translate-y-2 border border-white/20"
              onClick={() => window.location.href = '/plumbing'}
            >
              <div className="flex items-start space-x-6">
                <div className="bg-white/20 w-16 h-16 flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300 transform group-hover:scale-110 flex-shrink-0">
                  <Image 
                    src="/images/no1.png" 
                    alt="Plumbing Services" 
                    width={32} 
                    height={32}
                    className="brightness-0 invert"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                    Plumbing Services
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Hot Water Heater Replacements</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Drain & Sewer Inspections</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">New Construction Services</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Bathroom Installations</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Pipe & Waterline Repairs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Emergency Services</span>
                    </div>
                  </div>
                  <div className="mt-4 text-white font-semibold group-hover:text-orange-300 transition-colors duration-300 flex items-center">
                    Learn More 
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Heating Service */}
            <div 
              className="group bg-white/20 backdrop-blur-sm p-8 cursor-pointer transition-all duration-500 hover:bg-white/30 hover:-translate-y-2 border border-white/20"
              onClick={() => window.location.href = '/heating'}
            >
              <div className="flex items-start space-x-6">
                <div className="bg-white/20 w-16 h-16 flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300 transform group-hover:scale-110 flex-shrink-0">
                  <Image 
                    src="/images/no3.png" 
                    alt="Heating Services" 
                    width={32} 
                    height={32}
                    className="brightness-0 invert"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                    Heating Services
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Furnace Installation & Repair</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Heat Pump Systems</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Boiler Maintenance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Ductwork Services</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Preventive Maintenance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Energy Efficiency Upgrades</span>
                    </div>
                  </div>
                  <div className="mt-4 text-white font-semibold group-hover:text-orange-300 transition-colors duration-300 flex items-center">
                    Learn More 
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Cooling Service */}
            <div 
              className="group bg-white/20 backdrop-blur-sm p-8 cursor-pointer transition-all duration-500 hover:bg-white/30 hover:-translate-y-2 border border-white/20"
              onClick={() => window.location.href = '/cooling'}
            >
              <div className="flex items-start space-x-6">
                <div className="bg-white/20 w-16 h-16 flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300 transform group-hover:scale-110 flex-shrink-0">
                  <Image 
                    src="/images/no2.png" 
                    alt="Cooling Services" 
                    width={32} 
                    height={32}
                    className="brightness-0 invert"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                    Cooling Services
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Air Conditioner Installation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">System Maintenance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">HVAC Upgrades</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Smart Thermostats</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Ductwork Cleaning</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Energy Efficiency</span>
                    </div>
                  </div>
                  <div className="mt-4 text-white font-semibold group-hover:text-orange-300 transition-colors duration-300 flex items-center">
                    Learn More 
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Gas Fitting Service */}
            <div 
              className="group bg-white/20 backdrop-blur-sm p-8 cursor-pointer transition-all duration-500 hover:bg-white/30 hover:-translate-y-2 border border-white/20"
              onClick={() => window.location.href = '/gas-fitting'}
            >
              <div className="flex items-start space-x-6">
                <div className="bg-white/20 w-16 h-16 flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300 transform group-hover:scale-110 flex-shrink-0">
                  <Image 
                    src="/images/no4.png" 
                    alt="Gas Fitting Services" 
                    width={32} 
                    height={32}
                    className="brightness-0 invert"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                    Gas Fitting Services
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Gas Line Installation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Gas Water Heaters</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Gas Fireplaces</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">BBQ & Stove Connections</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Outdoor Fire Features</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60"></div>
                      <span className="text-sm">Safety Inspections</span>
                    </div>
                  </div>
                  <div className="mt-4 text-white font-semibold group-hover:text-orange-300 transition-colors duration-300 flex items-center">
                    Learn More 
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg p-8 max-w-4xl mx-auto border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Professional Service in Kamloops?
              </h3>
              <p className="text-lg text-blue-100 mb-8">
                Don&apos;t wait for a small problem to become a big one. Our certified technicians are ready to help.
              </p>
              
              <a 
                href="tel:2508288761" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-xl font-bold transition-all duration-300 inline-flex items-center transform hover:scale-105"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (250) 828-8761
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-16 sm:py-20 bg-gray-50 mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose Advanced Plumbing Kamloops</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At <strong>Advanced Plumbing Kamloops</strong>, we understand that plumbing can feel like a game of Jenga with water! 
              Your home&apos;s plumbing system is a complex maze of pipes, fixtures, and appliances, each waiting for its moment to spring a leak. 
              But fear not! Our skilled team is equipped with all the tools to tackle any plumbing drama.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                title: 'We Care for Your Home',
                icon: (
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                ),
                description: 'We prioritize your home\'s plumbing needs with care, cleanliness and professionalism.'
              },
              {
                title: 'Five Star Service',
                icon: (
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ),
                description: 'Our commitment to excellence ensures top-notch service every time.'
              },
              {
                title: 'Trusted Advisors',
                icon: (
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V16H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
                  </svg>
                ),
                description: 'We provide expert advice you can trust for all your plumbing needs.'
              },
              {
                title: 'Family Owned',
                icon: (
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2M20 22v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7h-3c-.8 0-1.5.7-1.5 1.5v5c0 .8.7 1.5 1.5 1.5H16v7h4M12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5M11 22v-4h-1v-4.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5V18h-1v4h-3"/>
                  </svg>
                ),
                description: 'As a family-owned business, we treat our customers like family.'
              },
              {
                title: 'Quality Workmanship',
                icon: (
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.61 18.99l-9.54-9.54a6.006 6.006 0 0 0 .63-2.71C13.7 3.13 10.57 0 6.86 0S0 3.13 0 6.84s3.13 6.84 6.84 6.84c1.04 0 2.01-.24 2.89-.66L19.29 22.6c.39.39.9.58 1.41.58s1.02-.19 1.41-.58l.49-.49c.79-.78.79-2.05.01-2.83zM6.84 10.53c-2.04 0-3.69-1.65-3.69-3.69s1.65-3.69 3.69-3.69 3.69 1.65 3.69 3.69-1.65 3.69-3.69 3.69z"/>
                  </svg>
                ),
                description: 'Our skilled team delivers high-quality workmanship every time.'
              },
              {
                title: 'Customer Satisfaction',
                icon: (
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                ),
                description: 'Your satisfaction is our priority, and we aim to exceed your expectations.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-gray-900 mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto">
              We also specialize in <Link href="/heating" className="font-bold text-blue-600 hover:underline">Heating</Link>, 
              <Link href="/cooling" className="font-bold text-blue-600 hover:underline"> Cooling</Link>, and 
              <Link href="/gas-fitting" className="font-bold text-blue-600 hover:underline"> Gas Fitting</Link>, 
              ensuring your home is comfortable year-round. After all, your home deserves more than a patch-up job held together by duct tape and hope!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setShowContactForm(true)}  
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 font-bold transition-colors duration-300 w-full sm:w-auto"
              >
                Schedule Now
              </button>
              <span className="text-base sm:text-lg text-gray-600">
                Or Call Us at <a href="tel:2508288761" className="font-bold text-blue-600 hover:underline">(250) 828-8761</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="relative py-16 sm:py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/third.png')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12">
                Proudly Serving The Kamloops Area
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-lg mx-auto lg:mx-0">
                {[
                  'Kamloops, BC', 'Ashcroft, BC', 'Cache Creek, BC', 'Savona, BC',
                  'Logan Lake, BC', 'Merritt, BC', 'Barriere, BC', 'Pritchard, BC',
                  'Chase, BC', 'Sun Peaks, BC'
                ].map((city) => (
                  <div key={city} className="text-white text-base sm:text-lg font-semibold bg-black bg-opacity-30 p-2 sm:p-3 text-center">
                    {city}
                  </div>
                ))}
              </div>
              
              <div className="text-center lg:text-left">
                <a 
                  href="tel:2508288761" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg transition-colors duration-300 inline-block shadow-lg"
                >
                  Call Us Now!
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white shadow-2xl overflow-hidden w-full max-w-xl">
                <Image 
                  src="/images/screenshot.png" 
                  alt="Map of Kamloops Area" 
                  width={627}
                  height={448}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Contact Form Modal */}
      <ContactFormModal 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </>
  );
}