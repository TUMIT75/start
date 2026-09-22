'use client';

import Link from 'next/link';
import Icon from '@/components/Icon';
import { handleContactSubmit } from '@/lib/ui';

export default function ContactPage() {
  return (
    <>

          {/* Breadcrumbs */}
          <div className="bg-white border-b border-gray-100 py-3.5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex text-xs font-medium text-gray-500 items-center space-x-2">
                <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-900 font-semibold">Contact & Advisory</span>
              </nav>
            </div>
          </div>

          <section className="py-16 sm:py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* Contact Info (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-gray-500 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60">
                    Get in Touch
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
                    Connect with Start SAH.
                  </h1>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Whether you are an executive seeking 1:1 coaching or an organisational leader exploring cohort development, our senior advisory team is ready to speak with you.
                  </p>

                  <div className="space-y-4 pt-4 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-start space-x-3.5 p-4 rounded-xl border border-gray-200/80 bg-slate-50/50">
                      <div className="w-9 h-9 rounded-lg bg-emerald-50 text-gray-600 flex items-center justify-center shrink-0 text-sm">
                        <Icon name="location-dot" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </div>
                      <div>
                        <strong className="text-gray-900 block text-xs uppercase tracking-wider font-semibold">London Headquarters</strong>
                        <span className="text-gray-600 text-xs">Berkeley Square, Mayfair, London W1J 6BD, UK</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5 p-4 rounded-xl border border-gray-200/80 bg-slate-50/50">
                      <div className="w-9 h-9 rounded-lg bg-emerald-50 text-gray-600 flex items-center justify-center shrink-0 text-sm">
                        <Icon name="globe" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </div>
                      <div>
                        <strong className="text-gray-900 block text-xs uppercase tracking-wider font-semibold">Global Delivery</strong>
                        <span className="text-gray-600 text-xs">Virtual delivery across UK, Europe, GCC, and North American timezones</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5 p-4 rounded-xl border border-gray-200/80 bg-slate-50/50">
                      <div className="w-9 h-9 rounded-lg bg-emerald-50 text-gray-600 flex items-center justify-center shrink-0 text-sm">
                        <Icon name="envelope" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </div>
                      <div>
                        <strong className="text-gray-900 block text-xs uppercase tracking-wider font-semibold">Executive Inquiries</strong>
                        <span className="text-gray-600 text-xs">contact@startsah.com</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5 p-4 rounded-xl border border-gray-200/80 bg-slate-50/50">
                      <div className="w-9 h-9 rounded-lg bg-emerald-50 text-gray-600 flex items-center justify-center shrink-0 text-sm">
                        <Icon name="phone" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </div>
                      <div>
                        <strong className="text-gray-900 block text-xs uppercase tracking-wider font-semibold">Advisory Desk</strong>
                        <span className="text-gray-600 text-xs">+44 (0) 20 7946 0912 (Mon - Fri, 08:30 - 18:00 GMT)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="bg-slate-50/70 p-6 sm:p-10 rounded-2xl border border-gray-200/80 shadow-xs">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Send an Inquiry to Our Senior Team</h3>

                    <form id="generalContactForm" onSubmit={(event) => { handleContactSubmit(event) }} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Your Name *</label>
                          <input type="text" required placeholder="e.g. Jane Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address *</label>
                          <input type="email" required placeholder="jane@company.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Inquiry Topic</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none text-gray-700">
                          <option value="1:1 Executive Coaching Inquiry">1:1 Executive Coaching Inquiry</option>
                          <option value="English for Professional Success Cohort">English for Professional Success Cohort</option>
                          <option value="Corporate & Team Training Proposal">Corporate & Team Training Proposal</option>
                          <option value="Podcast Guest or Keynote Speaking">Podcast Guest or Keynote Speaking</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Message *</label>
                        <textarea rows={4} required placeholder="Tell us how we can assist your executive development..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"></textarea>
                      </div>

                      <button type="submit" id="contactSubmitBtn" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-6 rounded-full shadow-xs transition duration-200 text-sm cursor-pointer">
                        Send Message
                      </button>
                    </form>

                    <div id="contactSuccessMsg" className="hidden text-center py-8">
                      <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto text-xl mb-3 border border-emerald-200">
                        <Icon name="check" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-base">Message Sent Successfully</h4>
                      <p className="text-xs text-gray-600 mt-1">Thank you. An executive advisor will reply to your inquiry within 24 business hours.</p>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>


        {/* ========================================================================= */}
        {/* PAGE 10: INSIGHTS & EXECUTIVE PODCAST (Lovable AI Clean Design) */}
        {/* ========================================================================= */}
    </>
  );
}
