'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ContactFormModal from '@/components/ContactFormModal';
import Header from '@/components/Header';

export default function HeatingPage() {
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
      id: 'h1',
      title: 'Heating Systems',
      image: '/images/systems.jpg',
      description: 'Heating systems are crucial for maintaining a warm and comfortable environment, especially during the cold winter months. Over time, heating systems such as furnaces, heat pumps, and radiant heating can encounter issues like clogged filters, wear and tear on components, or thermostat malfunctions. These problems can cause your heating system to operate inefficiently, resulting in higher energy bills and uneven heating throughout your home.',
      additionalText: 'At Advanced Plumbing Kamloops, we specialize in the installation, repair, and maintenance of various heating systems. With over 30 years of experience, we provide customized heating solutions tailored to your home\'s specific needs. Whether you\'re upgrading an outdated system or looking for routine maintenance, our expert technicians are equipped to handle it all.',
      features: ['30+ years of experience', 'Custom heating solutions', 'Professional installation', 'System maintenance']
    },
    {
      id: 'h2',
      title: 'Furnaces',
      image: '/images/furnacee.jpg',
      description: 'Furnaces are one of the most common heating systems used in homes, providing reliable warmth during the winter. However, they can develop problems like inconsistent heating, pilot light issues, or even airflow blockages that affect their performance. An aging or poorly maintained furnace may struggle to heat your home efficiently, leading to higher energy bills and potential safety hazards.',
      additionalText: 'At Advanced Plumbing Kamloops, we offer comprehensive furnace services, from installation to regular maintenance and repairs. Whether you\'re looking to install a high-efficiency furnace or need quick repairs, our experienced team is here to help. We understand the importance of having a dependable furnace, especially during the coldest months.',
      features: ['High-efficiency models', 'Quick repairs', 'Installation services', 'Safety inspections']
    },
    {
      id: 'h3',
      title: 'Boilers',
      image: '/images/boilerr.jpg',
      description: 'Boilers are a popular choice for homes that require consistent, efficient heating. However, over time, issues like pressure problems, leaking pipes, and inefficient performance can arise. These problems can result in uneven heating or higher energy costs, leaving your home less comfortable than it should be. A well-maintained boiler can offer years of efficient service, but it requires regular inspections to prevent potential breakdowns.',
      additionalText: 'At Advanced Plumbing Kamloops, we provide professional boiler installation, maintenance, and repair services to ensure your system operates at peak efficiency. Our team helps you choose the right size and type of boiler for your home, ensuring it meets your heating needs without wasting energy.',
      features: ['Professional installation', 'System sizing', 'Efficiency optimization', 'Regular inspections']
    },
    {
      id: 'h4',
      title: 'Maintenance Services',
      image: '/images/maintenance.jpg',
      description: 'Routine maintenance is essential to ensure your heating system operates efficiently and reliably throughout the year. Neglecting regular maintenance can lead to issues such as clogged filters, dirty burners, and worn-out components, which can reduce the system\'s efficiency and lead to costly breakdowns. Regular inspections and tune-ups help to identify potential problems early and keep your system in optimal working condition.',
      additionalText: 'At Advanced Plumbing Kamloops, we offer comprehensive maintenance services for all types of heating systems. Our experienced technicians perform thorough inspections, cleanings, and adjustments to ensure that your system runs smoothly and efficiently. By scheduling regular maintenance with us, you can prevent unexpected breakdowns and improve your system\'s performance.',
      features: ['Thorough inspections', 'System cleanings', 'Performance optimization', 'Preventive care']
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Heating Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay warm and comfortable all winter long with our expert heating solutions. 
                From furnace repairs to boiler installations, we provide reliable heating services you can trust.
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
              Don&apos;t let heating problems leave you in the cold. Contact Advanced Plumbing Kamloops today 
              for fast, reliable heating service from experienced professionals.
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