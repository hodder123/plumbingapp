import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="Advanced Plumbing Kamloops Logo"
                width={100}
                height={100}
                className="mx-auto lg:mx-0 mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Advanced Plumbing Kamloops
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your trusted partner for over 30 years, providing exceptional plumbing, 
                HVAC, and gas fitting services throughout Kamloops and surrounding areas.
              </p>
            </div>
            
            {/* Certification Badge */}
            <div className="bg-blue-600 text-white p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Image
                  src="/images/certificate.png"
                  alt="Certificate"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span className="text-sm font-semibold">Licensed & Insured</span>
              </div>
              <p className="text-xs text-blue-100">TSBC Contractor #LGA0092814</p>
            </div>
          </div>

          {/* Services */}
          <div className="text-center lg:text-left">
            <h4 className="text-xl font-bold text-gray-900 mb-6 relative">
              Our Services
              <div className="absolute bottom-0 left-0 lg:left-0 right-0 lg:right-auto w-16 h-0.5 bg-orange-500 mx-auto lg:mx-0"></div>
            </h4>
            <nav className="space-y-3">
              {[
                { href: '/plumbing', label: 'Plumbing Services' },
                { href: '/heating', label: 'Heating Systems' },
                { href: '/cooling', label: 'Cooling & HVAC' },
                { href: '/gas-fitting', label: 'Gas Fitting' },
                { href: '/about', label: 'About Us' },
                { href: '/blog', label: 'Blog' },
                { href: '/faq', label: 'FAQ' }
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="block text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm group"
                >
                  <span className="border-b border-transparent group-hover:border-blue-600 transition-all duration-300">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h4 className="text-xl font-bold text-gray-900 mb-6 relative">
              Contact Information
              <div className="absolute bottom-0 left-0 lg:left-0 right-0 lg:right-auto w-16 h-0.5 bg-orange-500 mx-auto lg:mx-0"></div>
            </h4>
            
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start justify-center lg:justify-start">
                <Image
                  src="/images/location.png"
                  alt="Location"
                  width={24}
                  height={24}
                  className="mr-3 mt-1"
                />
                <div className="text-left">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    419 Mt. Paul Way<br />
                    Kamloops, V2H 1A7, BC
                  </p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-center justify-center lg:justify-start">
                <Image
                  src="/images/phone.png"
                  alt="Phone"
                  width={24}
                  height={24}
                  className="mr-3"
                />
                <div>
                  <a 
                    href="tel:2508288761" 
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm font-medium"
                  >
                    (250) 828-8761
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-center justify-center lg:justify-start">
                <Image
                  src="/images/email.png"
                  alt="Email"
                  width={24}
                  height={24}
                  className="mr-3"
                />
                <div>
                  <a 
                    href="mailto:info@advancedplumbingkamloops.ca" 
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm break-all"
                  >
                    info@advancedplumbingkamloops.ca
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact & Social */}
          <div className="text-center lg:text-left">
            <h4 className="text-xl font-bold text-gray-900 mb-6 relative">
              Get In Touch
              <div className="absolute bottom-0 left-0 lg:left-0 right-0 lg:right-auto w-16 h-0.5 bg-orange-500 mx-auto lg:mx-0"></div>
            </h4>
            
            {/* Emergency CTA */}
            <div className="bg-orange-500 text-white p-6 mb-6">
              <h5 className="font-bold mb-2">Emergency Services</h5>
              <p className="text-orange-100 text-sm mb-4">Need immediate assistance?</p>
              <a 
                href="tel:2508288761"
                className="bg-white text-orange-600 px-4 py-2 font-semibold text-sm hover:bg-gray-100 transition-colors duration-300 inline-block"
              >
                Call Now
              </a>
            </div>
            
            {/* Social Media */}
            <div>
              <h5 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h5>
              <div className="flex justify-center lg:justify-start space-x-4">
                {[
                  { href: 'https://www.facebook.com/kamloopsplumbing/services/', icon: '/images/facebook.png', name: 'Facebook' },
                  { href: '#', icon: '/images/twitter.png', name: 'Twitter' },
                  { href: '#', icon: '/images/instagram.png', name: 'Instagram' }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-75 transition-opacity duration-300"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 Advanced Plumbing Kamloops. All rights reserved.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <span>Proudly serving Kamloops for 30+ years</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 animate-pulse"></div>
                <span className="text-green-600 font-medium">Call for Availability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;