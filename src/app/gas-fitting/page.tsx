'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ContactFormModal from '@/components/ContactFormModal';
import Header from '@/components/Header';

export default function GasFittingPage() {
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
      id: 'g1',
      title: 'Gas Lines',
      image: '/images/gas-lines.jpg',
      description: 'Gas lines are crucial for delivering natural gas to your home or business, powering appliances such as stoves, water heaters, and heating systems. However, over time, gas lines can deteriorate or become damaged due to environmental factors like ground shifts, corrosion, or tree roots. A gas line leak is not only a major safety hazard, potentially leading to fires or explosions, but it can also cause disruptions in your energy supply and inefficiencies in your appliances.',
      additionalText: 'At Advanced Plumbing Kamloops, we are experts in the installation, maintenance, and repair of gas lines. With over 30 years of experience, we ensure that your gas lines are installed to the highest standards, following all safety regulations. Our team conducts thorough inspections to detect any leaks or vulnerabilities in your existing lines and offers prompt, reliable repairs to keep your system safe. Whether you\'re installing a new gas line or need repairs on an existing one, you can trust us to provide quality service with safety as our top priority.',
      features: ['Safety regulation compliance', 'Leak detection services', 'Emergency repairs', 'Professional installations']
    },
    {
      id: 'g2',
      title: 'Gas Water Heaters',
      image: '/images/hotwater.jpg',
      description: 'Gas water heaters are an energy-efficient solution for heating water in your home or business, but like all systems, they can experience issues over time. Problems like pilot light failures, sediment buildup, and inefficient heating can reduce the effectiveness of your water heater, causing higher energy bills and inconsistent hot water. In some cases, you may also experience leaks or pressure issues, which can damage the unit and surrounding areas if left unchecked.',
      additionalText: 'At Advanced Plumbing Kamloops, we provide expert installation, repair, and maintenance services for gas water heaters. Our team understands the intricacies of gas water heating systems and can quickly diagnose and fix any issues, ensuring you have a steady supply of hot water. We also offer energy-efficient upgrade options to help reduce your energy consumption and extend the life of your water heater.',
      features: ['Energy-efficient upgrades', 'Pilot light repairs', 'Sediment removal', 'System diagnostics']
    },
    {
      id: 'g3',
      title: 'Gas Fireplaces',
      image: '/images/gas-fireplace.jpg',
      description: 'Gas fireplaces are a wonderful way to add warmth and ambiance to your home, but like any gas-powered appliance, they can experience issues that require professional attention. Over time, gas valves can wear out, pilot lights may fail, and debris can clog burners, reducing efficiency and safety. In some cases, you may notice inconsistent heating or strange smells, which could indicate a more serious underlying issue.',
      additionalText: 'At Advanced Plumbing Kamloops, we specialize in the installation, repair, and maintenance of gas fireplaces for both indoor and outdoor settings. Our technicians are trained to handle everything from basic maintenance to complex repairs, ensuring your fireplace operates safely and efficiently. We also provide professional installation services, helping you choose the right fireplace for your space and ensuring it is integrated seamlessly with your existing gas lines.',
      features: ['Indoor & outdoor installation', 'Gas valve repairs', 'Burner cleaning', 'Safety inspections']
    },
    {
      id: 'g4',
      title: 'BBQs and Stoves',
      image: '/images/bbq.jpg',
      description: 'Gas-powered BBQs and stoves are a popular choice for homeowners who love cooking with precision and efficiency. However, over time, gas appliances can experience issues like clogged burners, gas leaks, or ignition problems. These issues not only reduce the performance of your appliances but can also pose safety hazards if not addressed. Regular maintenance and timely repairs are key to ensuring your BBQ and stove continue to operate safely and efficiently.',
      additionalText: 'At Advanced Plumbing Kamloops, we provide expert installation and repair services for gas BBQs and stoves. Whether you\'re installing a new outdoor BBQ for the summer or need a repair for your kitchen stove, our team of certified technicians can help. We ensure that your appliances are safely connected to the gas supply and perform thorough inspections to identify any issues, from gas leaks to malfunctioning burners.',
      features: ['Certified technicians', 'Burner repairs', 'Gas leak detection', 'Appliance connections']
    },
    {
      id: 'g5',
      title: 'Outdoor Firepits & Fire Tables',
      image: '/images/outdoor-firepit.jpg',
      description: 'Outdoor firepits are a great way to transform your backyard into a cozy and inviting space for entertaining or relaxing. However, like any gas-powered feature, firepits can face issues such as gas leaks, clogged burners, or ignition problems. Over time, these issues can lead to inefficient burning or even pose safety hazards, especially if the gas lines feeding the firepit are damaged or deteriorating.',
      additionalText: 'At Advanced Plumbing Kamloops, we offer professional installation and maintenance services for outdoor gas firepits and fire tables. Our team ensures that your firepit is installed with precision, following all safety guidelines and local codes. We can also help you with regular maintenance and repairs, ensuring that your outdoor fire feature operates safely and efficiently. Whether you\'re installing a new firepit or need servicing on an existing one, we have the experience and tools to ensure a safe, warm, and enjoyable outdoor experience.',
      features: ['Code-compliant installation', 'Safety guidelines adherence', 'Maintenance services', 'Fire table installation']
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Gas Fitting Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Safe and professional gas fitting services for your home and business. 
                From installations to repairs, we ensure your gas systems operate safely and efficiently.
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
              Don&apos;t compromise on safety when it comes to gas fitting. Contact Advanced Plumbing Kamloops today 
              for professional, reliable gas services from certified technicians.
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