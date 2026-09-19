'use client';

import Link from 'next/link';
import Icon from '@/components/Icon';
import { handleDevelopmentSubmit, resetDevelopmentForm } from '@/lib/ui';

export default function StartYourDevelopmentPage() {
  return (
    <>

          {/* Breadcrumbs */}
          <div className="bg-white border-b border-gray-100 py-3.5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex text-xs font-medium text-gray-500 items-center space-x-2">
                <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
                <span className="text-gray-300">/</span>
                <span className="text-emerald-700 font-semibold">Start Your Development</span>
                <span className="text-gray-300">/</span>
                <span className="text-gray-900 font-semibold">Executive Intake</span>
              </nav>
            </div>
          </div>

          {/* Development Header Banner */}
          <section className="py-10 sm:py-14 bg-white border-b border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="inline-flex items-center space-x-1.5 bg-emerald-50 border border-emerald-200/60 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Admissions & Intake</span>
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Start Your Development
              </h1>
              <p className="text-sm sm:text-base text-gray-500 mt-2 max-w-xl mx-auto">
                Complete the short intake below to arrange your confidential diagnostic consultation with our executive team.
              </p>
            </div>
          </section>

          {/* Main Intake Form Section */}
          <section className="py-10 bg-slate-50/60">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Main Intake Form (8 cols) */}
                <div className="lg:col-span-8">
                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200/80 shadow-xs">

                    {/* Form Container (Clean WP-Form Friendly Layout) */}
                    <form id="devIntakeForm" onSubmit={(event) => { handleDevelopmentSubmit(event) }} className="space-y-5">

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Development Track Selector */}
                        <div>
                          <label htmlFor="devTrack" className="block text-xs font-semibold text-gray-700 mb-1.5">
                            Development Track <span className="text-emerald-600">*</span>
                          </label>
                          <select id="devTrack" name="devTrack" required className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition">
                            <option value="Individual Executive">Individual Executive (1:1 Coaching)</option>
                            <option value="Professional English">Professional English & Speech (CPD Cohort)</option>
                            <option value="Career Acceleration">Career Acceleration & Boardroom Presence</option>
                            <option value="Corporate Team">Corporate & Organisational Training</option>
                          </select>
                        </div>

                        {/* Programme of Focus Selector */}
                        <div>
                          <label htmlFor="devFocusSelect" className="block text-xs font-semibold text-gray-700 mb-1.5">
                            Programme of Focus <span className="text-emerald-600">*</span>
                          </label>
                          <select id="devFocusSelect" name="devFocus" required className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition">
                            <option value="English for Professional Success">English for Professional Success (8-Week CPD)</option>
                            <option value="1:1 Executive Coaching with Sonia Ali">1:1 Executive Coaching with Sonia Ali</option>
                            <option value="Executive Presence & Vocal Resonance">Executive Presence & Vocal Resonance</option>
                            <option value="Executive Career & Headhunter Mastery">Executive Career & Headhunter Mastery</option>
                            <option value="High-Stakes Negotiation & Influence">High-Stakes Boardroom Negotiation</option>
                            <option value="Custom Organisational Training">Custom Corporate Academy</option>
                          </select>
                        </div>
                      </div>

                      {/* Candidate Details (WP-form inputs) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="devName" className="block text-xs font-semibold text-gray-700 mb-1.5">
                            Full Name <span className="text-emerald-600">*</span>
                          </label>
                          <input type="text" id="devName" name="devName" required placeholder="e.g. Dr. Marcus Vance" className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition" />
                        </div>
                        <div>
                          <label htmlFor="devEmail" className="block text-xs font-semibold text-gray-700 mb-1.5">
                            Work Email <span className="text-emerald-600">*</span>
                          </label>
                          <input type="email" id="devEmail" name="devEmail" required placeholder="marcus@company.com" className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="devPhone" className="block text-xs font-semibold text-gray-700 mb-1.5">
                            Phone Number <span className="text-emerald-600">*</span>
                          </label>
                          <input type="tel" id="devPhone" name="devPhone" required placeholder="+44 20 7946 0912" className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition" />
                        </div>
                        <div>
                          <label htmlFor="devTitle" className="block text-xs font-semibold text-gray-700 mb-1.5">
                            Current Title & Company
                          </label>
                          <input type="text" id="devTitle" name="devTitle" placeholder="e.g. Director of Operations, FinTech UK" className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="devStartPreference" className="block text-xs font-semibold text-gray-700 mb-1.5">
                            Preferred Cohort Timing
                          </label>
                          <select id="devStartPreference" name="devStartPreference" className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition">
                            <option value="Next Upcoming Cohort">Next Upcoming Cohort (Immediate)</option>
                            <option value="Following Month">Following Month</option>
                            <option value="Flexible Schedule">Flexible / 1:1 Schedule</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="devFunding" className="block text-xs font-semibold text-gray-700 mb-1.5">
                            Sponsorship Pathway
                          </label>
                          <select id="devFunding" name="devFunding" className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition">
                            <option value="Self-Funded">Self-Funded (Split payment available)</option>
                            <option value="Company Sponsored">Company Sponsored (Direct Invoice / PO)</option>
                            <option value="Corporate Cohort">Corporate Cohort Proposal</option>
                          </select>
                        </div>
                      </div>

                      {/* Learning Goals */}
                      <div>
                        <label htmlFor="devGoals" className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Primary Goals or Challenges (Optional)
                        </label>
                        <textarea id="devGoals" name="devGoals" rows={3} placeholder="Briefly outline your communication, speech, or leadership focus areas..." className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition"></textarea>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button type="submit" id="devSubmitBtn" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg shadow-xs transition duration-200 text-sm flex items-center justify-center cursor-pointer">
                          <span>Submit Application & Schedule Consultation</span>
                          <Icon name="arrow-right" className="ml-2 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        </button>
                        <p className="text-center text-[11px] text-gray-400 mt-2">
                          <Icon name="shield-halved" className="text-emerald-600 mr-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Strictly confidential under EMCC Global ethical standards.
                        </p>
                      </div>
                    </form>

                    {/* Success State (Clean, Classy Card) */}
                    <div id="devVoucherState" className="hidden text-left py-2">
                      <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-6 sm:p-8">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-lg">
                            <Icon name="check" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">Application Submitted</h3>
                            <p className="text-xs text-gray-500">Admissions Reference: <span className="font-mono font-bold text-emerald-700" id="voucherRefCode">SAH-2026-9182</span></p>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                          Thank you, <strong id="voucherName">Marcus</strong>. Your profile for <strong id="voucherFocus">English for Professional Success</strong> has been received. Our executive admissions team will contact you within 24 hours to arrange your diagnostic consultation.
                        </p>

                        <div className="flex flex-wrap items-center gap-3">
                          <Link href="/dashboard" className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition cursor-pointer">
                            <span>View Learner Dashboard</span>
                          </Link>
                          <button onClick={() => { resetDevelopmentForm() }} className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold px-4 py-2.5 rounded-lg transition cursor-pointer">
                            <span>Submit Another Application</span>
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Right Sidebar Summary Card (4 cols) */}
                <div className="lg:col-span-4 space-y-5">

                  {/* Summary Box */}
                  <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200/80 shadow-xs text-left">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                      <h3 className="font-bold text-gray-900 text-sm">Programme Overview</h3>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">Active Intake</span>
                    </div>

                    <div className="space-y-3 text-xs text-gray-600">
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase block mb-0.5">Selected Track</span>
                        <span className="font-bold text-gray-900 text-sm" id="summaryFocusName">English for Professional Success</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase block mb-0.5">Faculty Lead</span>
                        <span className="font-medium text-gray-800">Sonia Ali (EMCC Senior Coach)</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase block mb-0.5">Format</span>
                        <span className="text-gray-800">8 Weeks Virtual Live Cohort + 1:1 Speech Clinic</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase block mb-0.5">Accreditation</span>
                        <span className="inline-flex items-center text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-xs">
                          <Icon name="award" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> CPD UK Certified (24 Hrs)
                        </span>
                      </div>
                    </div>

                    {/* Assistance */}
                    <div className="mt-5 pt-4 border-t border-gray-100 text-xs">
                      <span className="font-bold text-gray-900 block mb-1">Direct Admissions Inquiries</span>
                      <p className="text-gray-500 mb-2">Prefer to speak with an admissions advisor first?</p>
                      <a href="tel:+442079460912" className="font-bold text-emerald-700 hover:underline flex items-center">
                        <Icon name="phone" className="mr-1.5 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> +44 (0) 20 7946 0912
                      </a>
                    </div>
                  </div>

                  {/* Guarantee Box */}
                  <div className="bg-white rounded-xl p-5 border border-gray-200/80 shadow-xs text-left">
                    <div className="flex items-center space-x-2 text-emerald-700 font-bold text-xs mb-2">
                      <Icon name="shield-halved" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      <span>Confidential Consultation</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      All consultations include a complimentary speech diagnostic review with personalized recommendations.
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </section>


        {/* ========================================================================= */}
        {/* PAGE 8: FREE RESOURCES & 2-MINUTE SPEECH DIAGNOSTIC QUIZ */}
        {/* ========================================================================= */}
    </>
  );
}
