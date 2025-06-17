'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ContactFormModal from '@/components/ContactFormModal';
import Header from '@/components/Header';

const blogPosts = [
  {
    slug: 'spring-plumbing-checklist-2025-kamloops',
    title: '2025 Spring Plumbing Checklist for Kamloops Homeowners',
    excerpt: 'Get your plumbing ready for spring with this comprehensive checklist. Prevent issues and ensure optimal performance after winter.',
    date: '2025-05-15',
    category: 'Plumbing',
    readTime: '6 min read',
    featured: true
  },
  {
    slug: 'heat-pump-installation-kamloops-2025',
    title: 'Heat Pump Installation Guide: Kamloops 2025 Rebates & Benefits',
    excerpt: 'Discover the latest heat pump technology and government rebates available for Kamloops homeowners in 2025.',
    date: '2025-04-20',
    category: 'Heating',
    readTime: '8 min read',
    featured: true
  },
  {
    slug: 'water-heater-efficiency-upgrade-2025',
    title: 'Water Heater Efficiency: 2025 Upgrade Options for Kamloops Homes',
    excerpt: 'Explore the latest energy-efficient water heater technologies and how they can save money on your utility bills.',
    date: '2025-03-10',
    category: 'Plumbing',
    readTime: '5 min read',
    featured: false
  },
  {
    slug: 'winter-plumbing-tips-kamloops',
    title: 'Essential Winter Plumbing Tips for Kamloops Homeowners',
    excerpt: 'Protect your pipes from freezing temperatures and prevent costly winter plumbing emergencies with these expert tips.',
    date: '2024-11-15',
    category: 'Plumbing',
    readTime: '5 min read',
    featured: false
  },
  {
    slug: 'furnace-maintenance-kamloops-winter',
    title: 'Complete Furnace Maintenance Guide for Kamloops Winter',
    excerpt: 'Keep your heating system running efficiently all winter long with this comprehensive maintenance checklist.',
    date: '2024-10-28',
    category: 'Heating',
    readTime: '7 min read',
    featured: false
  },
  {
    slug: 'gas-line-safety-kamloops-homes',
    title: 'Gas Line Safety: What Every Kamloops Homeowner Should Know',
    excerpt: 'Learn the critical safety signs and maintenance tips for gas lines in your Kamloops home.',
    date: '2024-10-15',
    category: 'Gas Fitting',
    readTime: '6 min read',
    featured: false
  },
  {
    slug: 'thermostat-upgrade-energy-savings',
    title: 'Smart Thermostat Installation: Save Money on Kamloops Energy Bills',
    excerpt: 'Discover how upgrading your thermostat can reduce energy costs and improve comfort in your Kamloops home.',
    date: '2024-09-30',
    category: 'HVAC',
    readTime: '4 min read',
    featured: false
  },
  {
    slug: 'drain-cleaning-maintenance-kamloops',
    title: 'Professional Drain Cleaning vs DIY: What Kamloops Homeowners Need to Know',
    excerpt: 'When to tackle drain issues yourself and when to call professionals for safe, effective drain cleaning.',
    date: '2024-08-22',
    category: 'Plumbing',
    readTime: '5 min read',
    featured: false
  },
  {
    slug: 'summer-ac-maintenance-kamloops',
    title: 'Beat the Heat: Summer AC Maintenance for Kamloops Homes',
    excerpt: 'Essential air conditioning maintenance tips to keep your home cool during Kamloops summer months.',
    date: '2024-06-10',
    category: 'Cooling',
    readTime: '5 min read',
    featured: false
  },
  {
    slug: 'gas-fireplace-spring-startup-kamloops',
    title: 'Gas Fireplace Spring Startup: Safety and Maintenance Guide',
    excerpt: 'Safely prepare your gas fireplace for the warmer months with proper shutdown and maintenance procedures.',
    date: '2024-05-18',
    category: 'Gas Fitting',
    readTime: '4 min read',
    featured: false
  }
];

export default function BlogPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    
    <div className="min-h-screen bg-white pt-20">
        <Header onContactClick={() => setIsContactModalOpen(true)} />
        
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Expert Plumbing & HVAC Tips
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl">
            Professional advice for Kamloops homeowners on plumbing, heating, cooling, and gas fitting from your trusted local experts.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.slug} className="bg-white border border-gray-200 shadow hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section with Contact Button */}
        <section className="mt-16 bg-blue-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Professional Help?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            While our blog provides helpful tips, some issues require professional expertise. 
            Contact our Kamloops team for reliable plumbing, heating, cooling, and gas fitting services.
          </p>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="bg-blue-600 text-white px-8 py-3 font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Professional Help
          </button>
        </section>
      </div>

      {/* Contact Modal */}
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}