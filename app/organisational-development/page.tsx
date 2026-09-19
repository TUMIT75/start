'use client';

import Illustration from '@/components/Illustration';
import Icon from '@/components/Icon';
import { downloadCorporateBrochure, handleB2BSubmit, populateB2BNeed, resetB2BForm, navigateTo } from '@/lib/ui';

export default function OrganisationalPage() {
  return (
    <>


          {/* B2B Hero Section (Human, Developmental, High-Contrast Light Theme) */}
          <section className="bg-gradient-to-b from-white via-slate-50/50 to-white text-gray-900 pt-16 pb-20 relative overflow-hidden border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
                      Workforce & Organisational Capability
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    Developing Your People. <br /><span className="text-emerald-600">Unlocking Team Potential.</span>
                  </h1>

                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                    We help organisations cultivate confident communicators, collaborative teams, and supportive managers through highly practical, experiential development programmes.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a onClick={() => { document.getElementById('b2bLeadSection')?.scrollIntoView({behavior:'smooth'}) }} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-3.5 rounded-full shadow-xs transition duration-200 text-sm flex items-center cursor-pointer">
                      <span>Discuss Your Team's Needs</span>
                      <Icon name="arrow-down" className="ml-2 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </a>
                    <button onClick={() => { downloadCorporateBrochure() }} className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-bold px-6 py-3.5 rounded-full transition duration-200 text-sm flex items-center cursor-pointer shadow-2xs" id="corpBrochureBtn">
                      <Icon name="file-pdf" className="mr-2 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Download Solutions Guide
                    </button>
                  </div>

                  {/* Enterprise Trust Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">94%</div>
                      <div className="text-xs text-gray-500 mt-1">Reported Better Team Collaboration</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">100%</div>
                      <div className="text-xs text-gray-500 mt-1">CPD UK Certified Outcomes</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">3.4x</div>
                      <div className="text-xs text-gray-500 mt-1">Retention of Emerging Talent</div>
                    </div>
                  </div>
                </div>

                {/* Right: the illustration leads, the supporting detail sits under it */}
                <div className="lg:col-span-5">
                  <div className="max-w-lg mx-auto">
                    <div className="ill-stage ill-stage--green">
                      <Illustration src="/illustrations/06-teamwork.png" alt="Illustration: three colleagues working together around one laptop" className="ill ill-lg" />
                    </div>

                    <div className="mt-8">
                      <span className="text-xs uppercase font-bold tracking-widest text-emerald-700 block mb-2">Tailored to your team</span>
                      <h3 className="text-xl font-bold text-gray-900 tracking-tight">Interactive, practical and actionable</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mt-3">
                        No passive slide decks. We engage your employees and managers in real workplace scenarios, constructive peer sparring, and communication habits that stick.
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-5 mt-5 border-t hairline text-xs">
                      <span className="text-gray-700 font-semibold flex items-center">
                        <Icon name="users" className="mr-1.5 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Cohorts: 8 &ndash; 30+ people
                      </span>
                      <span className="text-emerald-700 font-bold">Virtual or in-person</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* 6 Core B2B Services Grid */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                  Corporate Solutions
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 mt-3 tracking-tight">
                  Comprehensive Organisational Development Solutions
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mt-2">
                  Tailored capability building designed to eliminate workplace silos, empower mid-level managers, and elevate executive gravitas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* B2B Service 1 */}
                <div className="bg-slate-50 hover:bg-white p-7 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl mb-5 shadow-sm group-hover:scale-105 transition">
                      <Icon name="magnifying-glass-chart" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      1. Training Needs Analysis (TNA)
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Rigorous capability audits, stakeholder interviews, and behavioral assessments to pinpoint exact organizational skill deficits before spending a single training dollar.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1.5">
                      <li className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Executive stakeholder 360 interviews</li>
                      <li className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Quantitative capability gap matrix</li>
                      <li className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Customized developmental roadmap</li>
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-gray-200/60 mt-6">
                    <button onClick={() => { populateB2BNeed('Training Needs Analysis (TNA)') }} className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center cursor-pointer">
                      <span>Enquire about TNA</span>
                      <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </button>
                  </div>
                </div>

                {/* B2B Service 2 */}
                <div className="bg-slate-50 hover:bg-white p-7 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl mb-5 shadow-sm group-hover:scale-105 transition">
                      <Icon name="comments" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      2. Executive & Workplace Communication
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Upskilling international workforce cohorts in crisp English business communication, diplomatic friction management, and structured meeting efficiency.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1.5">
                      <li className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Eliminating communication silos</li>
                      <li className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />High-stakes client presentation labs</li>
                      <li className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Email brevity & corporate memo mastery</li>
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-gray-200/60 mt-6">
                    <button onClick={() => { populateB2BNeed('Executive & Workplace Communication') }} className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center cursor-pointer">
                      <span>Enquire about Communication</span>
                      <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </button>
                  </div>
                </div>

                {/* B2B Service 3 */}
                <div className="bg-slate-50 hover:bg-white p-7 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl mb-5 shadow-sm group-hover:scale-105 transition">
                      <Icon name="user-shield" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      3. Soft Skills, Gravitas & Presence
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Developing emotional intelligence, active listening, conflict de-escalation, and non-verbal somatic presence that commands trust in high-stakes settings.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1.5">
                      <li className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Psychological safety foundations</li>
                      <li className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Handling tough stakeholder pushback</li>
                      <li className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Vocal composure under crisis</li>
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-gray-200/60 mt-6">
                    <button onClick={() => { populateB2BNeed('Soft Skills, Gravitas & Presence') }} className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center cursor-pointer">
                      <span>Enquire about Presence</span>
                      <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </button>
                  </div>
                </div>

                {/* B2B Service 4 */}
                <div className="bg-slate-50 hover:bg-white p-7 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl mb-5 shadow-sm group-hover:scale-105 transition">
                      <Icon name="sitemap" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      4. Human-Centric Leadership Academies
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Modular 3 to 6-month leadership incubators equipping first-time managers and directors with strategic accountability, coaching posture, and authentic presence.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1.5">
                      <li className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Leading through cross-cultural change</li>
                      <li className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Empowering accountability without micromanaging</li>
                      <li className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Cohort peer mentoring boards</li>
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-gray-200/60 mt-6">
                    <button onClick={() => { populateB2BNeed('Leadership Academies') }} className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center cursor-pointer">
                      <span>Enquire about Academies</span>
                      <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </button>
                  </div>
                </div>

                {/* B2B Service 5 */}
                <div className="bg-slate-50 hover:bg-white p-7 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl mb-5 shadow-sm group-hover:scale-105 transition">
                      <Icon name="compass-drafting" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      5. Bespoke Corporate Programmes & Retreats
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Customized intensives engineered to address specific departmental transitions, mergers, culture shifts, or annual executive strategy summits.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1.5">
                      <li className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Full custom curriculum aligned to enterprise OKRs</li>
                      <li className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Blended on-site retreats or virtual delivery</li>
                      <li className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Individual executive follow-up clinics</li>
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-gray-200/60 mt-6">
                    <button onClick={() => { populateB2BNeed('Bespoke Corporate Programmes') }} className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center cursor-pointer">
                      <span>Enquire about Custom Retreats</span>
                      <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </button>
                  </div>
                </div>

                {/* B2B Service 6 */}
                <div className="bg-slate-50 hover:bg-white p-7 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl mb-5 shadow-sm group-hover:scale-105 transition">
                      <Icon name="chalkboard-user" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      6. Train the Trainer (TOT)
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      License and train your internal HR leaders, subject matter champions, and senior directors to deliver experiential, high-impact learning workshops sustainably.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1.5">
                      <li className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Experiential adult learning frameworks</li>
                      <li className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Facilitation confidence & audience engagement</li>
                      <li className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Internal facilitator certification</li>
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-gray-200/60 mt-6">
                    <button onClick={() => { populateB2BNeed('Train the Trainer (TOT)') }} className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center cursor-pointer">
                      <span>Enquire about TOT</span>
                      <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* The 5-Stage B2B Enterprise Impact Process */}
          <section className="py-20 bg-slate-50 border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full shadow-sm">
                  Our Enterprise Methodology
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
                  The 5-Stage Diagnostic & Delivery Process
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mt-2">
                  How we partner with corporate stakeholders to engineer measurable behavioral changes that directly impact organizational KPIs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative">
                  <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center mb-4 shadow-sm">
                    01
                  </div>
                  <h4 className="font-extrabold text-sm text-gray-900 mb-2">Discovery & Strategic Alignment</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    We align with C-Suite and HR heads to understand strategic growth targets, team friction points, and culture priorities.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative">
                  <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center mb-4 shadow-sm">
                    02
                  </div>
                  <h4 className="font-extrabold text-sm text-gray-900 mb-2">Diagnostic TNA Assessment</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Conducting quantitative skills audits and confidential cohort interviews to establish true baseline capability scores.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative">
                  <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center mb-4 shadow-sm">
                    03
                  </div>
                  <h4 className="font-extrabold text-sm text-gray-900 mb-2">Bespoke Architecture</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Engineering a tailored syllabus incorporating your company's actual real-world case studies, templates, and corporate dialects.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative">
                  <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center mb-4 shadow-sm">
                    04
                  </div>
                  <h4 className="font-extrabold text-sm text-gray-900 mb-2">Experiential Blended Delivery</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    High-immersion live labs, peer simulation studios, and 1:1 acoustic/coaching checkpoints led by Sonia Ali and senior faculty.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative">
                  <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center mb-4 shadow-sm">
                    05
                  </div>
                  <h4 className="font-extrabold text-sm text-gray-900 mb-2">ROI Measurement & Reporting</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Delivering executive board reports with post-training capability audits, participant feedback, and measurable business impact.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* B2B LEAD FORM SECTION */}
          <section className="py-20 bg-white" id="b2bLeadSection">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 text-white relative overflow-hidden">

                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-700">
                    Corporate Consultation
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3.5 tracking-tight">
                    Discuss Your Training Needs
                  </h2>
                  <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
                    Schedule a confidential discovery consultation with Sonia Ali to assess your organisation's capability gaps, discuss custom cohorts, or receive a formal corporate proposal.
                  </p>
                </div>

                <form id="b2bForm" onSubmit={(event) => { handleB2BSubmit(event) }} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-200 mb-1.5">Full Name *</label>
                      <input type="text" required placeholder="e.g. Sarah Jenkins" className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" id="b2bName" />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-200 mb-1.5">Corporate Work Email *</label>
                      <input type="email" required placeholder="s.jenkins@company.com" className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" id="b2bEmail" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-200 mb-1.5">Organisation / Company Name *</label>
                      <input type="text" required placeholder="e.g. Deloitte, Standard Chartered, Scale-up Ltd" className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" id="b2bCompany" />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-200 mb-1.5">Your Job Title / Department *</label>
                      <input type="text" required placeholder="e.g. Head of People / VP Human Resources" className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" id="b2bRole" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-200 mb-1.5">Team / Organisation Size</label>
                      <select className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none" id="b2bSize">
                        <option value="10-50 Employees">10 - 50 Employees</option>
                        <option value="50-200 Employees" selected>50 - 200 Employees</option>
                        <option value="200-1000 Employees">200 - 1,000 Employees</option>
                        <option value="1000+ Enterprise">1,000+ Global Enterprise</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-200 mb-1.5">Estimated Timeline</label>
                      <select className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none" id="b2bTimeline">
                        <option value="Immediate (This Quarter)">Immediate (This Quarter)</option>
                        <option value="Next Quarter">Next Quarter</option>
                        <option value="Annual Planning / FY27">Annual L&D Planning / Next FY</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-200 mb-2">Priority Focus Areas (Select All That Apply):</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-gray-200">
                      <label className="flex items-center space-x-2 bg-slate-800/90 p-2.5 rounded-xl border border-slate-700 hover:border-emerald-500 cursor-pointer">
                        <input type="checkbox" name="focus" value="TNA Audit" className="rounded accent-emerald-500 text-emerald-600 focus:ring-emerald-500" checked id="chk-tna" />
                        <span className="text-gray-100 font-medium">Training Needs Analysis</span>
                      </label>
                      <label className="flex items-center space-x-2 bg-slate-800/90 p-2.5 rounded-xl border border-slate-700 hover:border-emerald-500 cursor-pointer">
                        <input type="checkbox" name="focus" value="Communication" className="rounded accent-emerald-500 text-emerald-600 focus:ring-emerald-500" checked id="chk-comm" />
                        <span className="text-gray-100 font-medium">Workplace Communication</span>
                      </label>
                      <label className="flex items-center space-x-2 bg-slate-800/90 p-2.5 rounded-xl border border-slate-700 hover:border-emerald-500 cursor-pointer">
                        <input type="checkbox" name="focus" value="Soft Skills" className="rounded accent-emerald-500 text-emerald-600 focus:ring-emerald-500" id="chk-soft" />
                        <span className="text-gray-100 font-medium">Gravitas & Soft Skills</span>
                      </label>
                      <label className="flex items-center space-x-2 bg-slate-800/90 p-2.5 rounded-xl border border-slate-700 hover:border-emerald-500 cursor-pointer">
                        <input type="checkbox" name="focus" value="Leadership Academy" className="rounded accent-emerald-500 text-emerald-600 focus:ring-emerald-500" id="chk-lead" />
                        <span className="text-gray-100 font-medium">Leadership Academies</span>
                      </label>
                      <label className="flex items-center space-x-2 bg-slate-800/90 p-2.5 rounded-xl border border-slate-700 hover:border-emerald-500 cursor-pointer">
                        <input type="checkbox" name="focus" value="Bespoke Programme" className="rounded accent-emerald-500 text-emerald-600 focus:ring-emerald-500" id="chk-bespoke" />
                        <span className="text-gray-100 font-medium">Bespoke Programmes</span>
                      </label>
                      <label className="flex items-center space-x-2 bg-slate-800/90 p-2.5 rounded-xl border border-slate-700 hover:border-emerald-500 cursor-pointer">
                        <input type="checkbox" name="focus" value="Train the Trainer" className="rounded accent-emerald-500 text-emerald-600 focus:ring-emerald-500" id="chk-tot" />
                        <span className="text-gray-100 font-medium">Train the Trainer (TOT)</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-200 mb-1.5">Specific Challenges or Objectives</label>
                    <textarea rows={3} placeholder="Tell us briefly about the capability gaps you are solving, target group, or custom cohort size..." className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-emerald-500 outline-none" id="b2bMessage"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-emerald-600/30 transition duration-200 text-sm cursor-pointer" id="b2bSubmitBtn">
                    Submit Request for Corporate Consultation & Proposal
                  </button>
                </form>

                {/* Success Message */}
                <div id="b2bSuccessMsg" className="hidden text-center py-10">
                  <div className="w-16 h-16 bg-brand-500/20 text-brand-400 rounded-full flex items-center justify-center mx-auto text-3xl mb-4 border border-brand-500">
                    <Icon name="check" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Proposal Request Received</h3>
                  <p className="text-gray-300 text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
                    Thank you for considering Start SAH for your organizational development. Sonia Ali or our enterprise partnership director will review your brief and contact you within 24 hours with an initial capability assessment plan.
                  </p>
                  <div className="mt-6 flex justify-center space-x-3">
                    <button onClick={() => { resetB2BForm() }} className="px-5 py-2.5 bg-charcoal-800 text-gray-200 rounded-xl text-xs font-bold hover:bg-charcoal-700">
                      Submit Another Request
                    </button>
                    <button onClick={() => { navigateTo('homepage') }} className="px-5 py-2.5 bg-brand-500 text-white rounded-xl text-xs font-bold hover:bg-brand-600">
                      Return to Homepage
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </section>



        {/* ========================================================================= */}
        {/* PAGE 4: ABOUT US & FOUNDER (Sonia Ali & Start SAH Methodology) */}
        {/* ========================================================================= */}
    </>
  );
}
