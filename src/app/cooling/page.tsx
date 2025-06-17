'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ContactFormModal from '@/components/ContactFormModal';
import Header from '@/components/Header';

export default function CoolingPage() {
  const [showContactForm, setShowContactForm] = useState(false);

  // Handle anchor link scrolling with offset for fixed header
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash) as HTMLElement;
        if (element) {
          const headerHeight = 120; // Increased offset to show the heading properly
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Handle initial load with hash
    handleHashChange();

    // Handle hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const services = [
    {
      id: 'c1',
      title: 'Air Conditioners',
      image: '/images/AC.jpg',
      description: 'Air conditioners are essential for maintaining a comfortable home during the summer, but they can face a variety of issues over time. One of the most common problems is a refrigerant leak, which can cause your AC to lose its cooling efficiency. Without enough refrigerant, the system struggles to cool your space, leading to higher energy consumption and possible damage to the compressor.',
      additionalText: 'At Advanced Plumbing Kamloops, we\'ve been solving air conditioning issues for over 30 years. Our team of experienced HVAC technicians is ready to diagnose and repair any AC problems, ensuring that your home stays cool and energy-efficient. Whether you\'re dealing with refrigerant leaks, electrical malfunctions, or simply need a system tune-up, we\'re here to help.',
      features: ['30+ years of experience', 'Refrigerant leak repairs', 'System diagnostics', 'Energy-efficient solutions']
    },
    {
      id: 'c2',
      title: 'Maintenance',
      image: '/images/maintenance.jpg',
      description: 'Without regular maintenance, even the best cooling systems can lose efficiency and develop serious issues. Filters can become clogged with dust and debris, reducing airflow and causing the system to overwork itself to cool your space. Over time, this can lead to higher energy bills, increased wear and tear on components, and a greater chance of system breakdowns.',
      additionalText: 'At Advanced Plumbing Kamloops, we understand the importance of regular HVAC maintenance to extend the life of your cooling system. Our comprehensive maintenance services are designed to keep your system in top condition year-round. We handle everything from routine inspections and cleaning to detailed diagnostics.',
      features: ['Comprehensive inspections', 'System cleaning', 'Preventive maintenance', 'Year-round service']
    },
    {
      id: 'c3',
      title: 'Upgrades',
      image: '/images/upgrade.jpg',
      description: 'As cooling systems age, they often become less efficient and require more frequent repairs. Outdated systems may struggle to keep up with modern energy standards, resulting in higher utility bills and uneven cooling throughout your home. You may also experience frequent breakdowns and increasing maintenance costs, which can become a financial burden over time.',
      additionalText: 'At Advanced Plumbing Kamloops, we specialize in upgrading your existing cooling system to the latest energy-efficient models. Our experienced team can assess your current system and recommend the best options for improving your home\'s cooling performance. With over 30 years of experience in the HVAC industry, we ensure that each upgrade is tailored to meet your specific needs and budget.',
      features: ['Energy-efficient models', 'System assessments', 'Custom recommendations', 'Professional installation']
    },
    {
      id: 'c4',
      title: 'Thermostats',
      image: '/images/thermostat.jpg',
      description: 'A malfunctioning thermostat can cause significant problems with your cooling system, from inaccurate temperature readings to short cycling, where the system turns on and off too frequently. These issues can lead to inconsistent cooling, wasted energy, and increased wear on your HVAC system.',
      additionalText: 'At Advanced Plumbing Kamloops, we are proud to be professional certified installers of Google Nest Pro thermostats. Whether you\'re looking to fix a faulty thermostat or upgrade to a smart model like the Google Nest, our team has the expertise to ensure a smooth and professional installation.',
      features: ['Google Nest Pro certified', 'Smart thermostat installation', 'Remote control access', 'Energy savings tracking']
    },
    {
      id: 'c5',
      title: 'Ducting',
      image: '/images/ducting.jpg',
      description: 'The ductwork in your home is critical for distributing cool air throughout your living spaces, but over time, it can develop leaks, become clogged with dust, or suffer from poor design. These issues can lead to uneven cooling, higher energy bills, and reduced system efficiency.',
      additionalText: 'At Advanced Plumbing Kamloops, we provide expert ducting services to ensure your cooling system operates at peak efficiency. Our technicians are skilled in both duct installation and repair, helping to seal leaks, improve airflow, and enhance overall system performance.',
      features: ['Leak sealing', 'Airflow optimization', 'Installation & repair', 'Performance enhancement']
    }
  ];

  return (
    <>
      {/* Header with contact functionality */}
      <Header onContactClick={() => setShowContactForm(true)} />
      
      <div className="min-h-screen bg-gray-50 pt-20 mb-12">
        {/* Services Section */}
        <section className="py-16 mb-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Cooling Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Keep your home comfortable year-round with our expert cooling solutions. 
                From maintenance to installations, we provide reliable HVAC services you can trust.
              </p>
            </div>

            <div className="space-y-20">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
                      <p className="text-gray-700 leading-relaxed">{service.additionalText}</p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons - Made Sharp */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button 
                        onClick={() => setShowContactForm(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 transition-colors duration-300"
                      >
                        Contact Us
                      </button>
                      <a 
                        href="tel:2508288761" 
                        className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 px-6 transition-colors duration-300 text-center"
                      >
                        Call (250) 828-8761
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Don&apos;t let cooling problems disrupt your comfort. Contact Advanced Plumbing Kamloops today 
              for fast, reliable HVAC service from experienced professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:2508288761" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 text-lg transition-colors duration-300"
              >
                Call (250) 828-8761
              </a>
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 text-lg transition-all duration-300"
              >
                Schedule Now
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Reusable Contact Form Modal */}
      <ContactFormModal 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </>
  );
};