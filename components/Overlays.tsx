'use client';

import Icon from '@/components/Icon';
import { closeAppearanceModal, closeArticleReader, closeLoginModal, closeModal, closeQuizBreakdownModal, closeSyllabusModal, closeVatInvoiceModal, dismissToast, handleDiscoverySubmit, handleLoginSubmit, handleSyllabusSubmit, navigateTo, showToast } from '@/lib/ui';

export default function Overlays() {
  return (
    <>

        {/* CONSULTATION / DISCOVERY CALL MODAL */}
        <div id="consultationModal" className="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-charcoal-950/70 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative">
            <button onClick={() => { closeModal() }} className="absolute top-5 right-5 text-gray-400 hover:text-charcoal-900 transition p-2">
              <Icon name="xmark" className="text-lg inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
            </button>

            <div className="text-left mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 bg-brand-50 px-2.5 py-1 rounded-full">
                Get Started
              </span>
              <h3 className="text-2xl font-semibold text-charcoal-900 mt-2">Book Your Discovery Call</h3>
              <p className="text-xs text-gray-600 mt-1">Speak directly with our team to explore your coaching or organisational needs.</p>
            </div>

            <form id="discoveryForm" onSubmit={(event) => { handleDiscoverySubmit(event) }} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-charcoal-900 mb-1">Full Name *</label>
                <input type="text" required placeholder="e.g. Alex Morgan" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-900 mb-1">Email Address *</label>
                <input type="email" required placeholder="alex@company.com" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-900 mb-1">Area of Focus *</label>
                <select id="modalFocusSelect" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-brand-500 outline-none bg-white">
                  <option value="Individual Executive Coaching">Individual Executive Coaching</option>
                  <option value="English for Professional Success">English for Professional Success</option>
                  <option value="Organisational & Team Training">Organisational & Team Training</option>
                  <option value="Leadership Presence Development">Leadership Presence Development</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-900 mb-1">How can we help? (Optional)</label>
                <textarea rows={3} placeholder="Tell us about your current challenge or goals..." className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-brand-500 outline-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3.5 rounded-xl shadow transition duration-200 text-sm">
                Confirm & Schedule Discovery
              </button>
            </form>

            <div id="modalSuccess" className="hidden text-center py-6">
              <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mx-auto text-2xl mb-3">
                <Icon name="check" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
              </div>
              <h4 className="text-lg font-semibold text-charcoal-900">Thank You!</h4>
              <p className="text-xs text-gray-600 mt-1">We have received your discovery request. Sonia Ali or our senior advisor will contact you within 24 hours.</p>
              <button onClick={() => { closeModal() }} className="mt-4 px-5 py-2 bg-charcoal-900 text-white rounded-lg text-xs font-semibold">Close</button>
            </div>

          </div>
        </div>

        {/* LMS STUDENT & CORPORATE LOGIN MODAL */}
        <div id="loginModal" className="hidden fixed inset-0 bg-charcoal-950/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 text-left">
            <button onClick={() => { closeLoginModal() }} className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition cursor-pointer">
              <Icon name="xmark" className="text-lg inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
            </button>

            <div className="flex items-center space-x-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-semibold text-sm">
                S
              </div>
              <div>
                <span className="font-semibold text-sm text-charcoal-900 tracking-tight">START SAH</span>
                <span className="block text-[10px] text-gray-500 -mt-0.5">LearnPress LMS Portal</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-charcoal-900 mb-1">
              Sign in to My Learning
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              Access your live cohort schedule, HD lab recordings, worksheets, and CPD certificates.
            </p>

            <form id="lmsLoginForm" onSubmit={(event) => { handleLoginSubmit(event) }} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Work or Learner Email</label>
                <input type="email" required placeholder="executive@company.com" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 text-sm outline-none" id="loginEmail" value="executive@client.com" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-semibold text-gray-700">Password</label>
                  <a className="text-[11px] text-brand-600 hover:underline">Forgot password?</a>
                </div>
                <input type="password" required placeholder="••••••••" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 text-sm outline-none" id="loginPassword" value="password123" />
              </div>

              <div className="flex items-center justify-between text-xs text-gray-600">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" checked className="rounded text-brand-500 focus:ring-brand-500" />
                  <span>Remember this device</span>
                </label>
                <span className="text-gray-400">SSL 256-bit</span>
              </div>

              <button type="submit" className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3.5 rounded-xl shadow transition duration-200 text-sm flex items-center justify-center cursor-pointer" id="loginSubmitBtn">
                <span>Log In to Dashboard</span>
                <Icon name="arrow-right" className="ml-2 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
              </button>
            </form>

            <div id="loginSuccessState" className="hidden py-6 text-center">
              <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mx-auto text-xl mb-3">
                <Icon name="check" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
              </div>
              <h4 className="font-semibold text-base text-charcoal-900">Welcome Back, Sarah!</h4>
              <p className="text-xs text-gray-500 mt-1 mb-4">Redirecting to your Eduma Student LMS Dashboard...</p>
              <button onClick={() => { closeLoginModal(); navigateTo('dashboard') }} className="w-full bg-charcoal-900 hover:bg-charcoal-800 text-white text-xs font-semibold py-2.5 rounded-xl transition">
                Open Student Dashboard Now
              </button>
            </div>

            <div className="mt-6 pt-5 border-t border-gray-100 text-center text-xs text-gray-500">
              New to Start SAH? 
              <a onClick={() => { closeLoginModal(); navigateTo('homepage'); setTimeout(() => document.getElementById('programmes')?.scrollIntoView({behavior:'smooth'}), 200) }} className="text-brand-600 font-semibold hover:underline">
                Explore Programmes & Enrol
              </a>
            </div>
          </div>
        </div>

        {/* ARTICLE READER MODAL (Insights Page Article Reader) */}
        <div id="articleReaderModal" className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-8 md:p-12 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto border border-gray-100">
            <button onClick={() => { closeArticleReader() }} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-charcoal-900 flex items-center justify-center transition cursor-pointer" aria-label="Close Reader">
              <Icon name="xmark" className="text-lg inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
            </button>

            <div className="flex items-center space-x-3 mb-6">
              <span id="articleCategoryBadge" className="text-xs font-semibold px-3 py-1 bg-brand-50 text-gray-600 rounded-full">Executive Communication</span>
              <span className="text-xs text-gray-400">•</span>
              <span id="articleReadTime" className="text-xs text-gray-500 font-medium"><Icon name="clock" className="mr-1 text-gray-400 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />6 min read</span>
              <span className="text-xs text-gray-400">•</span>
              <span id="articleDate" className="text-xs text-gray-500 font-medium">Published September 2026</span>
            </div>

            <h2 id="articleModalTitle" className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal-900 font-semibold leading-tight mb-6">
              Executive Gravitas: The Subtle Nuances of Communicating in Multinational Boardrooms
            </h2>

            {/* Author Card */}
            <div className="flex items-center space-x-3 pb-6 border-b border-gray-100 mb-8">
              <div className="w-11 h-11 rounded-full bg-emerald-700 text-white font-semibold flex items-center justify-center text-sm ring-2 ring-brand-100">
                SAH
              </div>
              <div>
                <div className="text-xs font-semibold text-charcoal-900">Dr. Sarah Al-Haddad, PhD</div>
                <div className="text-[11px] text-gray-500">Founder & Principal Executive Coach • Start SAH Ltd London</div>
              </div>
            </div>

            {/* Article Rich Content Body */}
            <div id="articleModalBody" className="text-charcoal-700 space-y-6 text-sm md:text-base leading-relaxed">
              {/* Injected via JavaScript */}
            </div>

            {/* Key Takeaways Box */}
            <div className="my-8 p-6 bg-brand-50/70 rounded-2xl border border-brand-200/60">
              <div className="flex items-center space-x-2 text-gray-600 font-semibold text-sm mb-3">
                <Icon name="lightbulb" className="text-brand-500 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                <span>Executive Takeaways for Immediate Application</span>
              </div>
              <ul id="articleTakeawaysList" className="space-y-2 text-xs md:text-sm text-charcoal-700">
                {/* Injected via JavaScript */}
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500 font-medium">Share this insight:</span>
                <button onClick={() => { showToast('Link Copied', 'Article link copied to clipboard!') }} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-brand-50 hover:text-brand-600 text-gray-600 flex items-center justify-center text-xs transition cursor-pointer" title="Copy Link">
                  <Icon name="link" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                </button>
                <button onClick={() => { showToast('LinkedIn Share', 'Opening LinkedIn sharing dialog...') }} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-charcoal-100 hover:text-charcoal-700 text-gray-600 flex items-center justify-center text-xs transition cursor-pointer" title="Share on LinkedIn">
                  <Icon name="linkedin-in" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                </button>
              </div>
              <button onClick={() => { closeArticleReader(); navigateTo('coaching') }} className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center cursor-pointer">
                <span>Explore 1:1 Executive Coaching on this topic</span>
                <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* MEDIA APPEARANCE VIDEO MODAL */}
        <div id="appearanceVideoModal" className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
          <div className="bg-charcoal-950 rounded-3xl max-w-2xl w-full p-6 text-white shadow-2xl relative border border-white/10">
            <button onClick={() => { closeAppearanceModal() }} className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer" aria-label="Close Media">
              <Icon name="xmark" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
            </button>

            <div className="aspect-video bg-charcoal-900 rounded-2xl overflow-hidden relative flex items-center justify-center mb-5 border border-white/5">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-brand-500/90 text-white flex items-center justify-center text-xl mx-auto mb-3 shadow-lg shadow-brand-500/20 animate-pulse cursor-pointer" onClick={() => { showToast('Video Stream Active', 'Playing BBC World Service broadcast master recording...') }}>
                  <Icon name="play" className="ml-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                </div>
                <div id="videoShowTitle" className="font-serif font-semibold text-lg text-white">BBC World Business Report</div>
                <div id="videoTopicTitle" className="text-xs text-gray-400 mt-1">Cross-Cultural Leadership & Nuanced Negotiation in Global Hubs</div>
                <div className="inline-flex items-center text-[10px] text-brand-400 mt-2 bg-brand-500/10 px-2.5 py-1 rounded-full border border-brand-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-ping"></span> Live Master Recording • 1080p HD
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-white/10">
              <span>Speaker: Dr. Sarah Al-Haddad</span>
              <button onClick={() => { showToast('Transcript Downloaded', 'Official BBC broadcast transcript downloaded in PDF format.') }} className="text-brand-400 hover:text-brand-300 font-semibold flex items-center cursor-pointer">
                <Icon name="download" className="mr-1.5 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Download Verbatim Transcript (PDF)
              </button>
            </div>
          </div>
        </div>

        {/* QUIZ BREAKDOWN MODAL (Student LMS Diagnostics Review) */}
        <div id="quizBreakdownModal" className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative my-8 border border-gray-100">
            <button onClick={() => { closeQuizBreakdownModal() }} className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition cursor-pointer">
              <Icon name="xmark" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 bg-brand-50 text-gray-600 rounded-full">Diagnostic Report</span>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full"><Icon name="check-circle" className="mr-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Score: 94 / 100</span>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-2">Executive Speech & Clarity Diagnostic</h3>
            <p className="text-xs text-gray-500 mb-6">Completed on 14 August 2026 • Certified by Lead Speech Diagnostic Coach</p>

            <div className="space-y-4 text-xs text-charcoal-700 mb-6">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="font-semibold text-charcoal-900 mb-1 flex justify-between">
                  <span>1. Articulation & Pace Control under Pressure</span>
                  <span className="text-brand-600 font-semibold">24 / 25 pts</span>
                </div>
                <p className="text-gray-500 leading-relaxed">Exceptional speech cadence. Average presentation cadence clocked at 138 words/minute, within the optimal executive delivery bracket (130–150 wpm).</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="font-semibold text-charcoal-900 mb-1 flex justify-between">
                  <span>2. Strategic Framing (SCQA Model)</span>
                  <span className="text-brand-600 font-semibold">25 / 25 pts</span>
                </div>
                <p className="text-gray-500 leading-relaxed">Flawless demonstration of Situation-Complication-Question-Answer framing in the boardroom executive simulation.</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="font-semibold text-charcoal-900 mb-1 flex justify-between">
                  <span>3. Cross-Cultural Diplomatic Nuance</span>
                  <span className="text-brand-600 font-semibold">22 / 25 pts</span>
                </div>
                <p className="text-gray-500 leading-relaxed">High emotional intelligence in disarming hostile pushback. Recommended refinement: subtle pause buffering before responding to direct challenge.</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="font-semibold text-charcoal-900 mb-1 flex justify-between">
                  <span>4. Non-Verbal Eye Contact & Gravitas</span>
                  <span className="text-brand-600 font-semibold">23 / 25 pts</span>
                </div>
                <p className="text-gray-500 leading-relaxed">Solid posture, deliberate hand gestures without repetitive fidgeting. Eye engagement sustained across multiple camera focal points.</p>
              </div>
            </div>

            <div className="p-4 bg-brand-50/60 rounded-2xl border border-brand-200/60 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-gray-600">Lead Coach Summary</div>
                <div className="text-[11px] text-brand-700">"Ready for C-suite keynote engagements and multinational committee chairs."</div>
              </div>
              <button onClick={() => { showToast('Diagnostic PDF Exported', 'Full 4-page diagnostic report generated with phonetic spectrogram.') }} className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold transition flex items-center shrink-0 cursor-pointer">
                <Icon name="file-arrow-down" className="mr-1.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Export Report
              </button>
            </div>
          </div>
        </div>

        {/* VAT INVOICE MODAL */}
        <div id="vatInvoiceModal" className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full p-8 md:p-10 shadow-2xl relative my-8 border border-gray-100">
            <button onClick={() => { closeVatInvoiceModal() }} className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition cursor-pointer">
              <Icon name="xmark" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
            </button>

            <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
              <div>
                <div className="font-serif text-xl font-semibold text-charcoal-900">START <span className="text-brand-500">SAH</span></div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Start SAH Ltd • London, UK</div>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-gray-600 rounded-full">PAID IN FULL</span>
                <div className="text-[11px] text-gray-400 mt-1">Invoice #SAH-2026-8841</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs mb-6 text-gray-600">
              <div>
                <span className="text-[10px] font-semibold text-gray-400 uppercase block">Billed To:</span>
                <strong className="text-charcoal-900">Sarah Jenkins</strong><br />
                Senior VP, Product Operations<br />
                sarah.jenkins@enterprise.com
              </div>
              <div>
                <span className="text-[10px] font-semibold text-gray-400 uppercase block">Issuer Details:</span>
                <strong className="text-charcoal-900">Start SAH Ltd</strong><br />
                Mayfair Executive Suite, London W1K<br />
                UK VAT Reg: GB 892 4110 32
              </div>
            </div>

            <table className="w-full text-xs text-left mb-6 border-y border-gray-100">
              <thead>
                <tr className="text-gray-400 text-[10px] uppercase border-b border-gray-100">
                  <th className="py-2.5 font-semibold">Item Description</th>
                  <th className="py-2.5 font-semibold text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-charcoal-700">
                <tr>
                  <td className="py-3">
                    <strong>English for Professional Success</strong><br />
                    <span className="text-gray-400 text-[11px]">8-Week Executive Cohort + 1:1 Diagnostic Lab</span>
                  </td>
                  <td className="py-3 text-right font-semibold">£745.83</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-500">Subtotal</td>
                  <td className="py-2 text-right">£745.83</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-500">UK Standard VAT (20.0%)</td>
                  <td className="py-2 text-right">£149.17</td>
                </tr>
                <tr className="font-semibold text-sm text-charcoal-900">
                  <td className="py-3">Total Paid (GBP)</td>
                  <td className="py-3 text-right text-brand-600">£895.00</td>
                </tr>
              </tbody>
            </table>

            <div className="flex items-center justify-between">
              <button onClick={() => { window.print() }} className="px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-charcoal-700 hover:bg-gray-50 transition flex items-center cursor-pointer">
                <Icon name="print" className="mr-2 text-gray-500 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Print Receipt
              </button>
              <button onClick={() => { showToast('Invoice Downloaded', 'Official VAT Tax Invoice PDF downloaded.'); closeVatInvoiceModal() }} className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-sm transition flex items-center cursor-pointer">
                <Icon name="file-arrow-down" className="mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Download Official VAT PDF
              </button>
            </div>
          </div>
        </div>

        {/* SYLLABUS DOWNLOAD MODAL */}
        <div id="syllabusModal" className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative border border-gray-100">
            <button onClick={() => { closeSyllabusModal() }} className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition cursor-pointer">
              <Icon name="xmark" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center text-xl mb-4">
              <Icon name="file-pdf" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
            </div>

            <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-2">Download Programme Syllabus</h3>
            <p className="text-xs text-gray-500 mb-6">Complete week-by-week curriculum, learning outcomes, diagnostic criteria, and accreditation details.</p>

            <form onSubmit={(event) => { handleSyllabusSubmit(event) }} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Corporate or Personal Email</label>
                <input type="email" required placeholder="executive@company.com" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-brand-500 outline-none" value="executive@enterprise.com" />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Select Curriculum Format</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-brand-500 outline-none">
                  <option>English for Professional Success (Full 8-Week Syllabus)</option>
                  <option>Workplace Soft Skills Masterclass (Executive Syllabus)</option>
                  <option>1:1 Executive Coaching Framework & Methodology</option>
                  <option>Complete Start SAH Corporate Prospectus 2026/27</option>
                </select>
              </div>
              <button type="submit" className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl shadow transition text-sm flex items-center justify-center cursor-pointer">
                <Icon name="cloud-arrow-down" className="mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Download Master PDF Now
              </button>
            </form>
          </div>
        </div>

        {/* FLOATING TOAST NOTIFICATION CONTAINER */}
        <div id="toastNotification" className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-charcoal-900 text-white px-5 py-4 rounded-2xl shadow-2xl border border-white/10 flex items-center space-x-3 transition-all duration-300 translate-y-24 opacity-0 pointer-events-none">
          <div className="w-9 h-9 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center text-base shrink-0">
            <Icon name="circle-check" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
          </div>
          <div className="flex-1 min-w-0">
            <div id="toastTitle" className="text-xs font-semibold text-white">Action Completed</div>
            <div id="toastMsg" className="text-[11px] text-gray-300 truncate">Operation executed successfully.</div>
          </div>
          <button onClick={() => { dismissToast() }} className="text-gray-400 hover:text-white text-xs p-1">
            <Icon name="xmark" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
          </button>
        </div>

        {/* Vanilla JavaScript for UI Interactivity */}
    </>
  );
}
