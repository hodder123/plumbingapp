'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ContactFormModal from '@/components/ContactFormModal';
import Header from '@/components/Header';

export default function PlumbingPage() {
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
      id: 'p1',
      title: 'Hot Water Heater Replacements',
      image: '/images/hotwater.jpg',
      description: 'Is your hot water heater struggling to keep up, or has it stopped working entirely? Whether you\'re dealing with fluctuating water temperatures or an aging unit, it may be time for a hot water heater replacement. At Advanced Plumbing, we bring over 30 years of experience to every job, ensuring that your new water heater is installed properly and meets the needs of your household.',
      additionalText: 'Replacing an outdated hot water heater can save you money on your energy bills and improve the overall comfort of your home. Don\'t wait for your water heater to completely break down—early replacement can prevent water damage, save you from higher energy costs, and ensure a steady supply of hot water.',
      features: ['Energy-efficient tankless models', '30+ years of experience', 'Professional installation', 'Cost-saving solutions']
    },
    {
      id: 'p2',
      title: 'Drain and Sewer Camera & Video Inspections',
      image: '/images/sewer.jpg',
      description: 'When you\'re dealing with slow drains or recurring sewer issues, guessing the problem can be costly and time-consuming. With our advanced drain and sewer camera inspections, you won\'t have to. At Advanced Plumbing, we use cutting-edge video technology to inspect your pipes, giving you a clear diagnosis of blockages, cracks, leaks, or even invasive tree roots.',
      additionalText: 'A video inspection is the smart way to catch problems early and avoid expensive sewer line repairs down the road. Whether it\'s a simple clog or a more severe issue, knowing exactly what\'s wrong means we can provide you with the most effective solution, fast.',
      features: ['Advanced video technology', 'Non-invasive inspection', 'Accurate diagnosis', 'Cost-effective solutions']
    },
    {
      id: 'p3',
      title: 'New Construction Services',
      image: '/images/construction.jpg',
      description: 'Building a new home or commercial property? At Advanced Plumbing, we specialize in providing reliable, efficient plumbing services for new construction projects. With over three decades of experience, we understand that proper planning and installation are crucial to the long-term success of your building.',
      additionalText: 'Choosing the right plumbing company for your new construction project is essential to avoid issues down the road, such as leaks, poor water pressure, or drainage problems. At Advanced Plumbing, we take pride in offering top-tier services backed by years of industry experience.',
      features: ['Residential & commercial', 'Code-compliant installation', 'Expert collaboration', 'On-time delivery']
    },
    {
      id: 'p4',
      title: 'New Bathroom Installations',
      image: '/images/bathroominstall.jpg',
      description: 'A bathroom renovation or new installation is a significant investment that adds value and comfort to your home. At Advanced Plumbing, we specialize in transforming your bathroom into a functional and aesthetically pleasing space. Whether you\'re looking to add a luxurious new bathroom or simply update outdated fixtures, our expert team will ensure that all plumbing work is done to the highest standards.',
      additionalText: 'Installing a new bathroom isn\'t just about appearances—it\'s about making sure the plumbing system is designed for efficiency and longevity. By choosing Advanced Plumbing, you\'re partnering with a team that has been perfecting bathroom installations for over 30 years.',
      features: ['Complete installations', 'Modern fixtures', 'Water-saving designs', 'Quality craftsmanship']
    },
    {
      id: 'p5',
      title: 'Broken Pipe and Waterline Repairs',
      image: '/images/broken.jpg',
      description: 'A broken pipe or damaged waterline can cause extensive damage to your property and lead to sky-high water bills if not addressed quickly. At Advanced Plumbing, we specialize in fast, effective pipe repairs, no matter the issue. Whether it\'s a small leak or a major waterline break, our experienced technicians use the latest tools and techniques to locate the problem and fix it before it escalates.',
      additionalText: 'Broken pipes don\'t just waste water—they can also cause structural damage and lead to mold growth if left untreated. Our team is trained to handle all types of pipe issues, from simple fixes to complete waterline replacements.',
      features: ['Emergency repairs', 'Latest repair technology', 'Minimal disruption', 'Long-lasting solutions']
    },
    {
      id: 'p6',
      title: 'Irrigation Repairs',
      image: '/images/irrigation.jpg',
      description: 'Is your irrigation system failing to keep your lawn or garden green? Faulty irrigation can lead to water waste, dry patches, or even plant damage. At Advanced Plumbing, we offer expert irrigation repair services that will restore your system to peak performance. Whether you\'re dealing with clogged sprinkler heads, broken pipes, or malfunctioning valves, our team has the experience to identify the issue and provide timely repairs.',
      additionalText: 'Regular irrigation maintenance is key to avoiding costly repairs and ensuring that your system runs smoothly throughout the year. With over 30 years of experience, Advanced Plumbing understands how to troubleshoot and repair even the most complex irrigation systems.',
      features: ['System diagnostics', 'Water-efficient repairs', 'Seasonal maintenance', 'Landscape protection']
    },
    {
      id: 'p7',
      title: 'Bathtub & Shower Repairs',
      image: '/images/shower.jpg',
      description: 'A leaky shower or malfunctioning bathtub can disrupt your daily routine and lead to significant water waste. At Advanced Plumbing, we offer fast and reliable bathtub and shower repair services to ensure your bathroom is functioning at its best. Whether you\'re experiencing low water pressure, faulty fixtures, or drainage issues, our skilled technicians can diagnose and fix the problem quickly.',
      additionalText: 'From minor leaks to more extensive damage, our team is ready to handle any bathtub or shower repair. We understand that these issues can be inconvenient, which is why we prioritize prompt, effective solutions that minimize disruption to your home.',
      features: ['Quick diagnostics', 'All fixture types', 'Pressure optimization', 'Drainage solutions']
    },
    {
      id: 'p8',
      title: 'Clogged Toilet Repairs',
      image: '/images/toiletclogged.jpg',
      description: 'A clogged toilet is more than just an inconvenience—it can quickly become a messy and unsanitary problem if not addressed. At Advanced Plumbing, we offer professional clogged toilet repair services that resolve the issue quickly and prevent it from recurring. Using advanced tools like augers and hydro-jetting, our experienced plumbers can tackle even the toughest clogs.',
      additionalText: 'Our 30+ years of experience mean that we\'ve seen and fixed every type of toilet problem imaginable. Don\'t let a clogged toilet ruin your day or cause damage to your plumbing system.',
      features: ['Advanced unclogging tools', 'Hydro-jetting service', 'Preventive solutions', 'Emergency availability']
    },
    {
      id: 'p9',
      title: 'Sump Pump Replacements',
      image: '/images/sumpump.jpg',
      description: 'A reliable sump pump is your home\'s first line of defense against flooding, especially in basements or areas prone to heavy rain. If your sump pump is old or not functioning properly, it\'s essential to replace it before the next big storm. At Advanced Plumbing, we specialize in sump pump replacements that keep your home dry and protected.',
      additionalText: 'Replacing an old or malfunctioning sump pump is a wise investment in the safety of your home. At Advanced Plumbing, we use high-quality pumps and offer expert installation services, giving you peace of mind during stormy weather.',
      features: ['Flood protection', 'High-quality pumps', 'Expert installation', 'Storm preparedness']
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Plumbing Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From emergency repairs to new installations, we provide comprehensive plumbing services 
                with the expertise and reliability you can trust.
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
              Don&apos;t let plumbing problems disrupt your life. Contact Advanced Plumbing Kamloops today 
              for fast, reliable service from experienced professionals.
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