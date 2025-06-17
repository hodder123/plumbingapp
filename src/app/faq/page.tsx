'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ContactFormModal from '@/components/ContactFormModal';

const FAQPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>('general');

  const faqSections = [
    {
      id: 'general',
      title: 'General Plumbing Questions',
      icon: '🔧',
      faqs: [
        {
          question: 'What areas do you serve in the Kamloops and Okanagan region?',
          answer: 'We proudly serve Kamloops, Sun Peaks, Barriere, Chase, Ashcroft, Cache Creek, Merritt, and surrounding communities in the Thompson-Nicola region. We also extend our services to parts of the North Okanagan including Vernon and Salmon Arm.'
        },
        {
          question: 'Do you offer emergency plumbing services in Kamloops?',
          answer: 'Yes! We provide emergency plumbing services throughout Kamloops and surrounding areas. Whether it\'s a burst pipe or a flooded basement on Sunday, call (250) 828-8761 for immediate assistance.'
        },
        {
          question: 'How quickly can you respond to emergency calls in Kamloops?',
          answer: 'For emergency calls within Kamloops city limits, we typically arrive within 30-60 minutes. For outlying areas like Sun Peaks or Chase, response times may be 60-90 minutes depending on location and weather conditions.'
        },
        {
          question: 'Are you licensed and insured in British Columbia?',
          answer: 'Absolutely! We are fully licensed by Technical Safety BC for plumbing and gas fitting work. We carry comprehensive liability insurance and all our technicians are certified professionals with years of experience in the Kamloops area.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, all major credit cards (Visa, MasterCard, American Express), e-transfer, and cheques. We also offer financing options for larger projects through our approved partners.'
        }
      ]
    },
    {
      id: 'winter',
      title: 'Winter & Cold Weather Issues',
      icon: '❄️',
      faqs: [
        {
          question: 'How do I prevent my pipes from freezing during Kamloops winters?',
          answer: 'Kamloops winters can reach -30°C, so pipe protection is crucial. Keep your home heated to at least 15°C, insulate pipes in crawl spaces and basements, let faucets drip during extreme cold snaps, and seal any air leaks near plumbing. We offer winterization services for seasonal properties.'
        },
        {
          question: 'What should I do if my pipes freeze in my Kamloops home?',
          answer: 'Turn off your main water supply immediately, open faucets to relieve pressure, and never use open flames to thaw pipes. Call us at (250) 828-8761 - we have specialized thawing equipment and can safely restore your water flow without damaging pipes.'
        },
        {
          question: 'Do you service seasonal cabins and vacation properties around Kamloops?',
          answer: 'Yes! We specialize in seasonal property maintenance around Sun Peaks, Lac du Bois, and other recreational areas. We offer winterization services, spring startup, and emergency repairs for cabins and vacation homes.'
        },
        {
          question: 'Why does my water pressure drop in winter?',
          answer: 'Winter water pressure issues in Kamloops are often caused by partially frozen pipes, mineral buildup in older homes, or municipal supply variations. We can diagnose the exact cause and provide solutions to restore proper pressure.'
        }
      ]
    },
    {
      id: 'water',
      title: 'Water Quality & Systems',
      icon: '💧',
      faqs: [
        {
          question: 'Is Kamloops tap water safe to drink?',
          answer: 'Yes, Kamloops municipal water meets all Health Canada standards. However, some residents prefer additional filtration due to mineral content and taste preferences. We install whole-house filtration systems, UV sterilizers, and water softeners tailored to local water conditions.'
        },
        {
          question: 'Why does my water taste different in Kamloops compared to other cities?',
          answer: 'Kamloops water comes from the Thompson River and underground sources, giving it a unique mineral profile. The taste can vary seasonally due to source changes and treatment processes. We can test your water and recommend appropriate filtration if desired.'
        },
        {
          question: 'Do I need a water softener in Kamloops?',
          answer: 'Kamloops has moderately hard water (150-300 ppm), which can cause scale buildup in appliances and plumbing. A water softener can extend appliance life, reduce soap usage, and improve water feel. We offer free water testing to determine if softening would benefit your home.'
        },
        {
          question: 'How often should I replace my water heater in the Kamloops climate?',
          answer: 'In Kamloops\' climate, tank water heaters typically last 8-12 years due to mineral content and temperature variations. Tankless units can last 15-20 years with proper maintenance. We recommend annual inspections to maximize lifespan and efficiency.'
        },
        {
          question: 'What size water heater do I need for my Kamloops home?',
          answer: 'For Kamloops homes: 40-50 gallons for 1-2 people, 50-60 gallons for 3-4 people, and 60-80 gallons for larger families. Tankless units are sized by flow rate (GPM). We consider your home size, usage patterns, and local water temperature in our recommendations.'
        }
      ]
    },
    {
      id: 'heating',
      title: 'Heating & HVAC',
      icon: '🔥',
      faqs: [
        {
          question: 'What type of heating system works best in Kamloops\' climate?',
          answer: 'For Kamloops\' semi-arid climate with cold winters, we recommend high-efficiency gas furnaces, heat pumps (for newer homes), or combination systems. Natural gas is readily available and cost-effective. We can assess your home and recommend the most efficient option.'
        },
        {
          question: 'How often should I service my furnace in Kamloops?',
          answer: 'We recommend annual furnace maintenance before each heating season (typically September/October). Kamloops\' dusty conditions and temperature swings require regular filter changes every 1-3 months and professional cleaning to maintain efficiency and safety.'
        },
        {
          question: 'Do heat pumps work effectively in Kamloops winters?',
          answer: 'Modern cold-climate heat pumps work well in Kamloops, maintaining efficiency down to -25°C. However, backup heating is recommended for extreme cold snaps. We install and service both air-source and ground-source heat pump systems.'
        },
        {
          question: 'Why is my heating bill so high in Kamloops?',
          answer: 'High heating bills in Kamloops often result from poor insulation, air leaks, inefficient equipment, or thermostat issues. Kamloops\' wide temperature swings stress heating systems. We offer energy audits and can recommend upgrades to reduce costs.'
        },
        {
          question: 'What rebates are available for heating upgrades in BC?',
          answer: 'BC and federal rebates include up to $5,000 for heat pumps, up to $1,000 for high-efficiency furnaces, and additional incentives for insulation and smart thermostats. We help navigate available programs and ensure you get maximum rebates.'
        }
      ]
    },
    {
      id: 'gas',
      title: 'Gas Fitting & Safety',
      icon: '🔥',
      faqs: [
        {
          question: 'Who can legally work on gas lines in Kamloops?',
          answer: 'Only licensed gas fitters certified by Technical Safety BC can legally work on gas lines in Kamloops. All our gas technicians are fully licensed and experienced with local gas systems, codes, and safety requirements.'
        },
        {
          question: 'How do I know if I have a gas leak in my Kamloops home?',
          answer: 'Signs include: rotten egg smell, hissing sounds near gas appliances, dead vegetation near gas lines, or dirt blowing from underground. If you suspect a leak, leave immediately, don\'t use electrical switches, and call FortisBC gas emergency line: 1-800-663-9911, then call us for repairs.'
        },
        {
          question: 'Can you install a gas line for my BBQ or fire pit in Kamloops?',
          answer: 'Yes! We install gas lines for BBQs, fire pits, outdoor heaters, and other appliances throughout Kamloops. All installations meet BC safety codes and include proper permits and inspections through Technical Safety BC.'
        },
        {
          question: 'How often should gas appliances be inspected in Kamloops?',
          answer: 'We recommend annual inspections for gas furnaces, water heaters, and fireplaces. Kamloops\' temperature extremes and dusty conditions can affect gas appliance performance and safety. Regular maintenance prevents costly repairs and ensures safe operation.'
        },
        {
          question: 'Do you service gas fireplaces and inserts in Kamloops?',
          answer: 'Absolutely! We service, repair, and install gas fireplaces, inserts, and direct-vent units throughout Kamloops. We handle everything from routine maintenance to complete installations, including venting and gas line connections.'
        }
      ]
    },
    {
      id: 'emergency',
      title: 'Emergency Services',
      icon: '🚨',
      faqs: [
        {
          question: 'What constitutes a plumbing emergency in Kamloops?',
          answer: 'Plumbing emergencies include: burst pipes, sewage backups, no hot water in winter, gas leaks, flooding, frozen pipes, and complete water loss. We prioritize these calls and provide rapid response throughout the Kamloops area.'
        },
        {
          question: 'Do you charge extra for emergency calls in Kamloops?',
          answer: 'Emergency service calls have a premium rate after hours, weekends, and holidays. However, the emergency fee is often waived if you proceed with repairs. We provide upfront pricing so there are no surprises.'
        },
        {
          question: 'Can you help with insurance claims for water damage in Kamloops?',
          answer: 'Yes! We work directly with insurance companies and provide detailed documentation, photos, and reports needed for claims. We can also provide emergency mitigation services to prevent further damage while claims are processed.'
        },
        {
          question: 'What should I do while waiting for emergency service in Kamloops?',
          answer: 'Turn off the main water supply if there\'s flooding, shut off electricity to affected areas if there\'s water present, document damage with photos, and try to contain water flow. We\'ll provide specific guidance when you call (250) 828-8761.'
        }
      ]
    }
  ];

  const quickAnswers = [
    {
      question: 'Service Areas',
      answer: 'Kamloops, Sun Peaks, Barriere, Chase, Ashcroft, Cache Creek, Merritt, Vernon, Salmon Arm'
    },
    {
      question: 'Emergency Line',
      answer: '(250) 828-8761 - Call for Availibility'
    },
    {
      question: 'Response Time',
      answer: '1-2 Hours in Kamloops, 2-3 Hours surrounding areas'
    },
    {
      question: 'Licensed & Insured',
      answer: 'Yes - Technical Safety BC licensed, fully insured'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get answers to common plumbing, heating, and gas fitting questions for Kamloops and Okanagan residents
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-orange-500 text-white px-8 py-3 font-semibold hover:bg-orange-600 transition-colors"
              >
                Ask a Question
              </button>
              <a 
                href="tel:2508288761" 
                className="bg-white text-blue-600 px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
              >
                Call (250) 828-8761
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Answers Bar */}
      <div className="bg-gray-50 py-8 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Answers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickAnswers.map((item, index) => (
              <div key={index} className="bg-white p-4 shadow text-center">
                <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-sm text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* FAQ Navigation */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {faqSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                className={`flex items-center px-6 py-3 font-semibold transition-colors ${
                  openSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqSections.map((section) => (
            <div
              key={section.id}
              className={`transition-all duration-300 ${
                openSection === section.id ? 'block' : 'hidden'
              }`}
            >
              <div className="bg-white border border-gray-200 shadow-lg">
                <div className="bg-gray-50 px-6 py-4 border-b">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                    <span className="mr-3 text-3xl">{section.icon}</span>
                    {section.title}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {section.faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {faq.question}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Areas Section */}
        <div className="mt-16 bg-blue-50 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Serving Kamloops & Surrounding Communities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              'Kamloops', 'Sun Peaks', 'Barriere', 'Chase', 'Ashcroft', 'Cache Creek',
              'Merritt', 'Vernon', 'Salmon Arm', 'Logan Lake', 'Savona', 'Clearwater'
            ].map((city) => (
              <div key={city} className="bg-white p-3 shadow text-gray-700 font-medium">
                {city}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            Can&apos;t find your community? <button 
              onClick={() => setIsContactModalOpen(true)}
              className="text-blue-600 hover:text-blue-800 font-semibold underline"
            >
              Contact us
            </button> to check if we service your area.
          </p>
        </div>

        {/* Emergency Section */}
        <div className="mt-16 bg-orange-50 border-l-4 border-orange-500 p-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-orange-800 mb-2">
                Plumbing Emergency in Kamloops?
              </h3>
              <p className="text-orange-700 mb-4">
                Don&apos;t wait! Burst pipes, gas leaks, and sewage backups require immediate attention. 
                Our team is available throughout Kamloops and surrounding areas.
              </p>
              <a 
                href="tel:2508288761" 
                className="bg-orange-500 text-white px-6 py-3 font-semibold hover:bg-orange-600 transition-colors inline-block"
              >
                Call Emergency Line: (250) 828-8761
              </a>
            </div>
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center bg-gray-50 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Our friendly Kamloops team is here to help with any plumbing, heating, or gas fitting questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-blue-600 text-white px-8 py-3 font-semibold hover:bg-blue-700 transition-colors"
            >
              Ask Your Question
            </button>
            <Link 
              href="/blog" 
              className="bg-gray-600 text-white px-8 py-3 font-semibold hover:bg-gray-700 transition-colors"
            >
              Read Our Blogs
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default FAQPage;