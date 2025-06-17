'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContactFormModal from '@/components/ContactFormModal';
import Header from '@/components/Header';

export default function AboutPage() {
  const [showContactForm, setShowContactForm] = useState(false);

  const aboutSections = [
    {
      title: 'Our Story',
      image: '/images/aboutus.jpg',
      content: 'With over 30 years of experience, Advanced Plumbing was founded in 2004 by Mark Hodder as a family-run business. Dedicated to serving the local community, we also operate Hodder.ca for construction services and Urabus.ca for buying and reconstructing camping vans. Our commitment to quality and customer satisfaction drives everything we do across all our businesses.',
      reverse: false
    },
    {
      title: 'Community Connections',
      image: '/images/community.jpg',
      content: 'We are proud to be part of the Kamloops community. Over the years, we have participated in local events, supported charitable initiatives, and built lasting relationships with our clients and neighbors. Our commitment to giving back ensures that we not only serve our customers but also contribute to the well-being of our community.',
      reverse: true
    },
    {
      title: 'Expertise You Can Trust',
      image: '/images/expertise.jpg',
      content: 'Our team is equipped with state-of-the-art tools and technology, allowing us to efficiently handle a wide range of plumbing challenges. With the experience of serving our community for more than 30 years, we are confident that whether you need routine maintenance, emergency repairs, or complete installations, we have the expertise to get the job done right.',
      reverse: false
    },
    {
      title: 'Sustainability Matters',
      image: '/images/sustain.jpg',
      content: 'At Advanced Plumbing Kamloops, we are committed to environmentally-friendly practices. We offer solutions that promote energy efficiency and water conservation, helping you save money while reducing your environmental footprint. Our team is knowledgeable about eco-friendly products and practices, ensuring you make informed choices for your plumbing needs.',
      reverse: true
    },
    {
      title: 'Fully Licensed and Insured',
      image: '/images/licensed.jpg',
      content: 'We take pride in being a fully licensed and insured plumbing service. This means you can trust that we meet all local and national regulations, ensuring your peace of mind when choosing us for your plumbing needs. Our dedication to quality and safety is unwavering, and we stand behind our work with confidence.',
      reverse: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
       <Header onContactClick={() => setShowContactForm(true)} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24 pt-32 mb-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Advanced Plumbing
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Over 30 years of trusted service in Kamloops. Family-owned, community-focused, 
            and committed to excellence in every project.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
            <a
              href="tel:2508288761"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 font-semibold text-lg transition-all duration-300"
            >
              Call (250) 828-8761
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 -mt-12 relative z-10 mb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white shadow-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600">Star Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-20 mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-24">
            {aboutSections.map((section, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-16 ${
                  section.reverse ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative overflow-hidden shadow-2xl group">
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={600}
                      height={400}
                      className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-16 bg-gradient-to-b from-blue-600 to-orange-500"></div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6 pl-8">
                      {section.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed pl-8">
                    {section.content}
                  </p>
                  
                  <div className="pl-8 pt-4">
                    <button
                      onClick={() => setShowContactForm(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      Learn More
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-20 mb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and ensure we deliver exceptional service to every customer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Quality', 
                icon: (
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ), 
                description: 'We never compromise on the quality of our work or materials.' 
              },
              { 
                title: 'Reliability', 
                icon: (
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                ), 
                description: 'You can count on us to be there when you need us most.' 
              },
              { 
                title: 'Integrity', 
                icon: (
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V16H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
                  </svg>
                ), 
                description: 'Honest, transparent communication in every interaction.' 
              },
              { 
                title: 'Innovation', 
                icon: (
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9,21C9,21.5 9.4,22 10,22H14C14.6,22 15,21.5 15,21V20H9V21M12,2C8.1,2 5,5.1 5,9C5,11.4 6.2,13.5 8,14.7V17C8,17.5 8.4,18 9,18H15C15.6,18 16,17.5 16,17V14.7C17.8,13.4 19,11.3 19,9C19,5.1 15.9,2 12,2Z"/>
                  </svg>
                ), 
                description: 'Using the latest technology and best practices in the industry.' 
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-gray-900 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers who trust Advanced Plumbing Kamloops 
            for all their plumbing, heating, cooling, and gas fitting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
              Schedule Service
            </button>
          </div>
        </div>
      </section>

      {/* Reusable Contact Form Modal */}
      <ContactFormModal 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </div>
  );
};