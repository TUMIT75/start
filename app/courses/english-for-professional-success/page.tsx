'use client';

import Illustration from '@/components/Illustration';
import Icon from '@/components/Icon';
import { downloadSyllabus, openModal, switchCourseTab, toggleFaq, toggleLmsModule, navigateTo } from '@/lib/ui';

export default function CoursePage() {
  return (
    <>


          {/* Course Breadcrumbs & Micro Header */}
          <div className="bg-slate-50 border-b border-gray-200 py-3.5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex text-xs font-medium text-gray-500 items-center space-x-2">
                <a onClick={() => { navigateTo('homepage') }} className="hover:text-brand-600 transition">Home</a>
                <span className="text-gray-300">/</span>
                <a onClick={() => { navigateTo('homepage'); setTimeout(() => document.getElementById('programmes')?.scrollIntoView({behavior:'smooth'}), 100) }} className="hover:text-brand-600 transition">Programmes</a>
                <span className="text-gray-300">/</span>
                <span className="text-charcoal-900 font-semibold truncate">English for Professional Success</span>
              </nav>
            </div>
          </div>

          {/* Course Hero Section */}
          <section className="band-mint pt-12 pb-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00C853_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                <div className="lg:col-span-8 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="bg-brand-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                      LearnPress LMS • Executive Cohort
                    </span>
                    <span className="bg-white text-gray-600 border border-gray-200 text-xs font-semibold px-3 py-1 rounded-full">
                      <Icon name="certificate" className="mr-1.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />CPD UK Certified (24 Hours)
                    </span>
                    <span className="bg-white text-gray-600 border border-gray-200 text-xs font-semibold px-3 py-1 rounded-full">
                      <Icon name="user-group" className="mr-1.5 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Capped at 12 Executives
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight">
                    English for Professional Success
                  </h1>

                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
                    Master high-stakes boardroom articulation, cross-cultural diplomacy, persuasive pitching, and commanding business English with personalized vocal acoustics and 1:1 executive coaching.
                  </p>

                  {/* Course Meta Highlights Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-200 text-xs">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-emerald-600">
                        <Icon name="clock" className="text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </div>
                      <div>
                        <div className="text-gray-500">Duration</div>
                        <div className="font-semibold text-gray-900">8 Weeks (16 Labs)</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-emerald-600">
                        <Icon name="laptop-file" className="text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </div>
                      <div>
                        <div className="text-gray-500">Delivery Mode</div>
                        <div className="font-semibold text-gray-900">Live Virtual & 1:1 Clinics</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-emerald-600">
                        <Icon name="star" className="text-sm text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </div>
                      <div>
                        <div className="text-gray-500">Learner Rating</div>
                        <div className="font-semibold text-gray-900">5.0 ★★★★★ (48)</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-emerald-600">
                        <Icon name="chalkboard-user" className="text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </div>
                      <div>
                        <div className="text-gray-500">Lead Trainer</div>
                        <div className="font-semibold text-gray-900">Sonia Ali</div>
                      </div>
                    </div>
                  </div>

                  {/* Hero Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button onClick={() => { openModal('English for Professional Success') }} className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-brand-500/30 transition duration-200 text-sm flex items-center cursor-pointer">
                      <Icon name="bolt" className="mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Enrol in Next Cohort
                    </button>
                    <button onClick={() => { downloadSyllabus() }} className="bg-white hover:bg-charcoal-700 text-gray-700 border border-gray-200 font-semibold px-5 py-3 rounded-xl transition duration-200 text-sm flex items-center cursor-pointer" id="syllabusBtn">
                      <Icon name="file-arrow-down" className="mr-2 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Download Syllabus PDF
                    </button>
                  </div>
                </div>

                {/* Hero Right Preview Card */}
                <div className="lg:col-span-4 hidden lg:block">
                  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm relative overflow-hidden">
                    <div className="relative rounded-xl mb-4 group cursor-pointer bg-white ill-stage ill-stage--bare p-3" onClick={() => { openModal('English for Professional Success') }}>
                      <Illustration src="/illustrations/new-22-abaya-study.svg" alt="Illustration: a young professional in abaya studying at a laptop on a stack of books" className="ill ill-card group-hover:scale-105 transition duration-500" />
                      <div className="absolute inset-0 bg-white/10 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                          <Icon name="play" className="text-sm ml-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block mb-1">Executive Studio Pass</span>
                      <p className="text-xs text-gray-500">Cohort 14 • Starting October 14 • Only 4 Executive Seats Remaining</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Main Course Content with Sticky LMS Sidebar (2 Columns) */}
          <div className="bg-slate-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* LEFT CONTENT COLUMN (8 cols) */}
                <div className="lg:col-span-8 space-y-8">

                  {/* Eduma Style Course Navigation Tabs */}
                  <div className="bg-white rounded-2xl p-2 border border-gray-200 shadow-sm flex flex-wrap gap-2 text-xs sm:text-sm font-semibold">
                    <button onClick={() => { switchCourseTab('overview') }} id="cTab-overview" className="course-tab-btn flex-1 py-3 px-4 rounded-xl transition bg-brand-500 text-white shadow-sm text-center cursor-pointer">
                      <Icon name="circle-info" className="mr-1.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Overview
                    </button>
                    <button onClick={() => { switchCourseTab('curriculum') }} id="cTab-curriculum" className="course-tab-btn flex-1 py-3 px-4 rounded-xl transition text-charcoal-700 hover:bg-gray-100 text-center cursor-pointer">
                      <Icon name="book-open" className="mr-1.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Curriculum (16 Modules)
                    </button>
                    <button onClick={() => { switchCourseTab('trainer') }} id="cTab-trainer" className="course-tab-btn flex-1 py-3 px-4 rounded-xl transition text-charcoal-700 hover:bg-gray-100 text-center cursor-pointer">
                      <Icon name="user-tie" className="mr-1.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Lead Trainer
                    </button>
                    <button onClick={() => { switchCourseTab('faqs') }} id="cTab-faqs" className="course-tab-btn flex-1 py-3 px-4 rounded-xl transition text-charcoal-700 hover:bg-gray-100 text-center cursor-pointer">
                      <Icon name="comments" className="mr-1.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Testimonials & FAQs
                    </button>
                  </div>

                  {/* TAB 1: OVERVIEW */}
                  <div id="cContent-overview" className="course-tab-pane space-y-8">

                    {/* The Challenge & Desired Outcome Card */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 bg-brand-50 px-2.5 py-1 rounded-full">
                          The Problem We Solve
                        </span>
                        <h3 className="text-2xl font-semibold text-charcoal-900 mt-3">
                          The Silent Barrier to C-Suite Progression
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
                          You have proven technical mastery, strategic vision, and commercial results. Yet in high-stakes multinational boardrooms, linguistic hesitation, second-guessing idiomatic phrasing, or losing control of pacing under pressure costs you critical authority and stakeholder buy-in.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div className="bg-charcoal-100 border border-charcoal-200 rounded-xl p-4">
                          <div className="text-xs font-semibold text-charcoal-700 uppercase tracking-wider flex items-center mb-2">
                            <Icon name="circle-xmark" className="mr-2 text-charcoal-500 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />The Common Frustration
                          </div>
                          <ul className="text-xs text-gray-700 space-y-2">
                            <li>• Apologetic prefaces ("Sorry, just a quick thought...")</li>
                            <li>• Losing command of tone when challenged aggressively</li>
                            <li>• Translating complex technical concepts into verbose monologues</li>
                            <li>• Feeling exhausted after day-long executive negotiations in English</li>
                          </ul>
                        </div>

                        <div className="bg-brand-50/70 border border-brand-200 rounded-xl p-4">
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center mb-2">
                            <Icon name="circle-check" className="mr-2 text-brand-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Your Desired Transformation
                          </div>
                          <ul className="text-xs text-gray-700 space-y-2">
                            <li>• Unshakeable spontaneous articulation without hesitation</li>
                            <li>• The Minto Pyramid & SCQA method for crisp executive brevity</li>
                            <li>• Cultural diplomacy to persuade diverse global stakeholders</li>
                            <li>• Somatic vocal resonance, pacing, and presence under scrutiny</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Who It Is For */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 bg-brand-50 px-2.5 py-1 rounded-full">
                        Target Audience
                      </span>
                      <h3 className="text-2xl font-semibold text-charcoal-900 mt-3 mb-4">
                        Who This Accelerator Is Designed For
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-sm mb-3 shadow-xs">
                            <Icon name="briefcase" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                          </div>
                          <h4 className="font-semibold text-sm text-charcoal-900">C-Suite & VP Executives</h4>
                          <p className="text-xs text-gray-600 mt-1 leading-relaxed">Leading international expansions, cross-border M&A discussions, or global investor relations.</p>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-sm mb-3 shadow-xs">
                            <Icon name="users-gear" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                          </div>
                          <h4 className="font-semibold text-sm text-charcoal-900">Senior Technical Directors</h4>
                          <p className="text-xs text-gray-600 mt-1 leading-relaxed">Transitioning from functional leadership to strategic enterprise representation.</p>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-sm mb-3 shadow-xs">
                            <Icon name="earth-americas" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                          </div>
                          <h4 className="font-semibold text-sm text-charcoal-900">Multinational Consultants</h4>
                          <p className="text-xs text-gray-600 mt-1 leading-relaxed">Advising global clients where nuance, brevity, and diplomatic tact drive contract wins.</p>
                        </div>
                      </div>
                    </div>

                    {/* What You Will Develop (4 Pillar Grid) */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 bg-brand-50 px-2.5 py-1 rounded-full">
                        Competency Outcomes
                      </span>
                      <h3 className="text-2xl font-semibold text-charcoal-900 mt-3 mb-6">
                        Key Skills You Will Master
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex items-start space-x-3.5">
                          <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Icon name="bullhorn" className="text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-charcoal-900">High-Stakes Boardroom Articulation</h4>
                            <p className="text-xs text-gray-600 mt-1 leading-relaxed">Speak in clear, punchy executive cadences. Learn how to open meetings with authority and frame complex agendas concisely.</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3.5">
                          <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Icon name="handshake-simple" className="text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-charcoal-900">Cross-Cultural Diplomatic Nuance</h4>
                            <p className="text-xs text-gray-600 mt-1 leading-relaxed">Navigate indirect vs. direct communication cultures. Soften firm objections without weakening your bargaining leverage.</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3.5">
                          <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Icon name="bolt" className="text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-charcoal-900">Impromptu Debate & Counter-Arguments</h4>
                            <p className="text-xs text-gray-600 mt-1 leading-relaxed">Stop freezing when put on the spot. Master structural formulas (PREP, SCQA) to deliver brilliant answers under pressure.</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3.5">
                          <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Icon name="microphone-lines" className="text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-charcoal-900">Vocal Pacing, Resonance & Gravitas</h4>
                            <p className="text-xs text-gray-600 mt-1 leading-relaxed">Receive private acoustic vocal audits to correct nervous pitch spikes, rush-pacing, and breath dissipation under stress.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* TAB 2: CURRICULUM ACCORDION (LearnPress LMS Format) */}
                  <div id="cContent-curriculum" className="course-tab-pane hidden space-y-4">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 bg-brand-50 px-2.5 py-1 rounded-full">
                            LearnPress LMS Curriculum
                          </span>
                          <h3 className="text-2xl font-semibold text-charcoal-900 mt-2">
                            8-Week Masterclass Architecture
                          </h3>
                        </div>
                        <div className="text-xs text-gray-500">
                          <span className="font-semibold text-charcoal-900">4 Modules</span> • 16 Live Labs • 24 CPD Accredited Hours
                        </div>
                      </div>

                      {/* Module Accordions */}
                      <div className="space-y-3" id="courseAccordionGroup">

                        {/* Module 1 */}
                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                          <button onClick={() => { toggleLmsModule(1) }} className="w-full bg-slate-50 hover:bg-slate-100 p-4 text-left flex items-center justify-between font-semibold text-sm text-charcoal-900 transition">
                            <div className="flex items-center space-x-3">
                              <span className="w-6 h-6 rounded-md bg-brand-500 text-white text-xs flex items-center justify-center font-semibold">1</span>
                              <span>Module 1: Foundations of Executive Voice & Somatic Presence (Weeks 1–2)</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <span className="text-xs text-gray-500 font-normal hidden sm:inline">4 Lessons • 6 CPD Hours</span>
                              <Icon name="chevron-down" className="text-xs text-gray-500 transition-transform duration-200 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                            </div>
                          </button>
                          <div id="modContent-1" className="p-4 bg-white space-y-2.5 border-t border-gray-100 text-xs">
                            <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition">
                              <div className="flex items-center space-x-3">
                                <Icon name="circle-play" className="text-brand-500 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                                <span className="font-semibold text-charcoal-800">1.1 The Anatomy of Executive Gravitas & Somatic Breath</span>
                              </div>
                              <span className="bg-brand-50 text-brand-700 font-semibold px-2 py-0.5 rounded text-[10px]">Preview Available</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition">
                              <div className="flex items-center space-x-3">
                                <Icon name="lock" className="text-gray-500 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                                <span className="font-semibold text-charcoal-800">1.2 Eliminating Apologetic Qualifiers & Hesitation Markers</span>
                              </div>
                              <span className="text-gray-500">Live Lab (90m)</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition">
                              <div className="flex items-center space-x-3">
                                <Icon name="lock" className="text-gray-500 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                                <span className="font-semibold text-charcoal-800">1.3 Pacing Under Stress: Silence Architecture & Cadence Control</span>
                              </div>
                              <span className="text-gray-500">Live Lab (90m)</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition">
                              <div className="flex items-center space-x-3">
                                <Icon name="lock" className="text-gray-500 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                                <span className="font-semibold text-charcoal-800">1.4 Impromptu Speaking Frameworks: PREP & STAR Under Fire</span>
                              </div>
                              <span className="text-gray-500">Practicum Lab</span>
                            </div>
                          </div>
                        </div>

                        {/* Module 2 */}
                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                          <button onClick={() => { toggleLmsModule(2) }} className="w-full bg-slate-50 hover:bg-slate-100 p-4 text-left flex items-center justify-between font-semibold text-sm text-charcoal-900 transition">
                            <div className="flex items-center space-x-3">
                              <span className="w-6 h-6 rounded-md bg-brand-500 text-white text-xs flex items-center justify-center font-semibold">2</span>
                              <span>Module 2: Strategic Brevity & Boardroom-Ready Articulation (Weeks 3–4)</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <span className="text-xs text-gray-500 font-normal hidden sm:inline">4 Lessons • 6 CPD Hours</span>
                              <Icon name="chevron-down" className="text-xs text-gray-500 transition-transform duration-200 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                            </div>
                          </button>
                          <div id="modContent-2" className="p-4 bg-white space-y-2.5 border-t border-gray-100 text-xs hidden">
                            <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition">
                              <div className="flex items-center space-x-3">
                                <Icon name="lock" className="text-gray-500 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                                <span className="font-semibold text-charcoal-800">2.1 The Executive Memo Method: SCQA Framing for C-Suite Briefs</span>
                              </div>
                              <span className="text-gray-500">Live Lab (90m)</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition">
                              <div className="flex items-center space-x-3">
                                <Icon name="lock" className="text-gray-500 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                                <span className="font-semibold text-charcoal-800">2.2 Translating Technical Complexity into Strategic ROI</span>
                              </div>
                              <span className="text-gray-500">Case Study</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition">
                              <div className="flex items-center space-x-3">
                                <Icon name="lock" className="text-gray-500 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                                <span className="font-semibold text-charcoal-800">2.3 Deflecting Aggressive Counter-Arguments with Composure</span>
                              </div>
                              <span className="text-gray-500">Live Lab (90m)</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition">
                              <div className="flex items-center space-x-3">
                                <Icon name="lock" className="text-gray-500 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                                <span className="font-semibold text-charcoal-800">2.4 Live Pitching Studio: 3-Minute Boardroom Simulation</span>
                              </div>
                              <span className="text-gray-500">Cohort Practicum</span>
                            </div>
                          </div>
                        </div>

                        {/* Module 3 */}
                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                          <button onClick={() => { toggleLmsModule(3) }} className="w-full bg-slate-50 hover:bg-slate-100 p-4 text-left flex items-center justify-between font-semibold text-sm text-charcoal-900 transition">
                            <div className="flex items-center space-x-3">
                              <span className="w-6 h-6 rounded-md bg-brand-500 text-white text-xs flex items-center justify-center font-semibold">3</span>
                              <span>Module 3: Cross-Cultural Negotiation & Diplomatic Nuance (Weeks 5–6)</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <span className="text-xs text-gray-500 font-normal hidden sm:inline">4 Lessons • 6 CPD Hours</span>
                              <Icon name="chevron-down" className="text-xs text-gray-500 transition-transform duration-200 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                            </div>
                          </button>
                          <div id="modContent-3" className="p-4 bg-white space-y-2.5 border-t border-gray-100 text-xs hidden">
                            <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition">
                              <div className="flex items-center space-x-3">
                                <Icon name="lock" className="text-gray-500 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                                <span className="font-semibold text-charcoal-800">3.1 High-Context vs. Low-Context Dialects in Multinational Firms</span>
                              </div>
                              <span className="text-gray-500">Live Lab (90m)</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition">
                              <div className="flex items-center space-x-3">
                                <Icon name="lock" className="text-gray-500 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                                <span className="font-semibold text-charcoal-800">3.2 Firm Diplomacy: Softening Disagreement Without Diluting Power</span>
                              </div>
                              <span className="text-gray-500">Roleplay Simulation</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition">
                              <div className="flex items-center space-x-3">
                                <Icon name="lock" className="text-gray-500 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                                <span className="font-semibold text-charcoal-800">3.3 Overcoming Deadlocks: Language of Mutual Concession</span>
                              </div>
                              <span className="text-gray-500">Live Lab (90m)</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition">
                              <div className="flex items-center space-x-3">
                                <Icon name="lock" className="text-gray-500 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                                <span className="font-semibold text-charcoal-800">3.4 Closing Deals in English: Tactical Linguistic Certainty</span>
                              </div>
                              <span className="text-gray-500">Clinic</span>
                            </div>
                          </div>
                        </div>

                        {/* Module 4 */}
                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                          <button onClick={() => { toggleLmsModule(4) }} className="w-full bg-slate-50 hover:bg-slate-100 p-4 text-left flex items-center justify-between font-semibold text-sm text-charcoal-900 transition">
                            <div className="flex items-center space-x-3">
                              <span className="w-6 h-6 rounded-md bg-brand-500 text-white text-xs flex items-center justify-center font-semibold">4</span>
                              <span>Module 4: Capstone Boardroom Simulation & 1:1 Vocal Audit (Weeks 7–8)</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <span className="text-xs text-gray-500 font-normal hidden sm:inline">4 Lessons • 6 CPD Hours</span>
                              <Icon name="chevron-down" className="text-xs text-gray-500 transition-transform duration-200 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                            </div>
                          </button>
                          <div id="modContent-4" className="p-4 bg-white space-y-2.5 border-t border-gray-100 text-xs hidden">
                            <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition">
                              <div className="flex items-center space-x-3">
                                <Icon name="lock" className="text-gray-500 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                                <span className="font-semibold text-charcoal-800">4.1 Simulated Executive Board Address (15-Minute Live Capstone)</span>
                              </div>
                              <span className="text-gray-500">Live Capstone</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition">
                              <div className="flex items-center space-x-3">
                                <Icon name="lock" className="text-gray-500 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                                <span className="font-semibold text-charcoal-800">4.2 Peer Review Studio & 360 Feedback Analysis</span>
                              </div>
                              <span className="text-gray-500">Cohort Studio</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition">
                              <div className="flex items-center space-x-3">
                                <Icon name="user-doctor" className="text-brand-600 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                                <span className="font-semibold text-charcoal-800">4.3 1-on-1 Clinical Acoustic & Linguistic Audit with Sonia Ali</span>
                              </div>
                              <span className="bg-brand-100 text-brand-800 font-semibold px-2 py-0.5 rounded text-[10px]">Private 1:1</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition">
                              <div className="flex items-center space-x-3">
                                <Icon name="award" className="text-emerald-600 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                                <span className="font-semibold text-charcoal-800">4.4 Lifelong Executive Development Blueprint & CPD UK Certification</span>
                              </div>
                              <span className="text-brand-600 font-semibold">Graduation</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* TAB 3: TRAINER PROFILE */}
                  <div id="cContent-trainer" className="course-tab-pane hidden space-y-6">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-4">
                          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 bg-gradient-to-br from-[#FAFAFA] via-[#FAFAFA] to-[#F2F2F2] p-5 flex flex-col justify-between relative">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 bg-white/90 px-2.5 py-1 rounded-full border border-emerald-200">
                                Lead Coach
                              </span>
                              <div className="w-6 h-6 rounded-full bg-emerald-100 text-gray-600 flex items-center justify-center text-xs">
                                <Icon name="seedling" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                              </div>
                            </div>

                            {/* Hand-Drawn Mentorship Canvas SVG */}
                            <div className="my-auto py-2 flex items-center justify-center">
                              <Illustration src="/illustrations/new-19-thobe-desk-work.svg" alt="Illustration: a professional in thobe and ghutra at work on a laptop" className="ill ill-card" />
                            </div>

                            <div className="bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-gray-100 shadow-xs text-center">
                              <div className="text-xs font-semibold text-gray-900">Sonia Ali, MA</div>
                              <div className="text-[11px] text-emerald-700 font-semibold">EMCC Senior Coach</div>
                            </div>
                          </div>
                        </div>

                        <div className="md:col-span-8 space-y-4">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 bg-brand-50 px-2.5 py-1 rounded-full">
                              Lead Programme Director
                            </span>
                            <span className="text-xs font-semibold text-gray-500 bg-slate-100 px-2.5 py-1 rounded-full">
                              EMCC Accredited Senior Coach
                            </span>
                          </div>

                          <h3 className="text-2xl font-semibold text-charcoal-900">
                            Sonia Ali
                          </h3>
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Founder, Start SAH • Executive Speech & Organisational Psychologist
                          </p>

                          <p className="text-sm text-gray-600 leading-relaxed">
                            Sonia has spent more than a decade coaching senior leaders, diplomats, and international founders across London, Dubai, and Singapore. Her unique hybrid methodology bridges neuro-linguistic principles, acoustic resonance coaching, and strategic corporate statecraft.
                          </p>

                          <blockquote className="border-l-4 border-brand-500 pl-4 py-1 text-xs italic text-gray-700 bg-slate-50 rounded-r-xl">
                            "We don't teach dry grammar rules. We develop the unshakeable psychological presence and vocal resonance that makes your ideas impossible to ignore."
                          </blockquote>

                          {/* Video Introduction Preview Card */}
                          <div className="pt-2">
                            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                                  <Icon name="play" className="text-xs ml-0.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                                </div>
                                <div>
                                  <div className="text-xs font-semibold text-charcoal-900">Watch: Sonia Introduces the Course Methodology</div>
                                  <div className="text-[11px] text-gray-500">3-Minute Video Breakdown of Learning Labs</div>
                                </div>
                              </div>
                              <button onClick={() => { openModal('English for Professional Success') }} className="text-xs font-semibold text-brand-600 hover:text-brand-700 cursor-pointer">
                                Watch Preview
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TAB 4: TESTIMONIALS & FAQS */}
                  <div id="cContent-faqs" className="course-tab-pane hidden space-y-6">

                    {/* Verified Alumni Reviews */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 bg-brand-50 px-2.5 py-1 rounded-full">
                        Verified Executive Transformations
                      </span>
                      <h3 className="text-2xl font-semibold text-charcoal-900 mt-2 mb-6">
                        Hear From Previous Cohort Participants
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                          <div>
                            <div className="text-gray-600 text-xs mb-2">★★★★★ 5.0</div>
                            <p className="text-xs text-gray-700 italic leading-relaxed mb-4">
                              "Before this course, I dreaded board meetings in London because English was my second language. Sonia's acoustic feedback and the SCQA method completely changed how I command attention. I was promoted to Regional Managing Director 3 months after graduation."
                            </p>
                          </div>
                          <div className="flex items-center space-x-3 pt-3 border-t border-slate-200">
                            <div className="w-9 h-9 rounded-full bg-emerald-100 border border-emerald-300 text-gray-600 font-semibold text-xs flex items-center justify-center">ER</div>
                            <div>
                              <div className="text-xs font-semibold text-charcoal-900">Elena Rostova</div>
                              <div className="text-[11px] text-gray-500">Managing Director, Global FinTech</div>
                            </div>
                          </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                          <div>
                            <div className="text-gray-600 text-xs mb-2">★★★★★ 5.0</div>
                            <p className="text-xs text-gray-700 italic leading-relaxed mb-4">
                              "The small cohort size (12 people) makes all the difference. You cannot hide—you are in the hot seat every single lab. Sonia's direct, compassionate feedback is the highest-ROI executive coaching I have ever received."
                            </p>
                          </div>
                          <div className="flex items-center space-x-3 pt-3 border-t border-slate-200">
                            <div className="w-9 h-9 rounded-full bg-emerald-100 border border-emerald-300 text-gray-600 font-semibold text-xs flex items-center justify-center">KM</div>
                            <div>
                              <div className="text-xs font-semibold text-charcoal-900">Karim Mansour</div>
                              <div className="text-[11px] text-gray-500">VP Operations, Supply Chain Logistics</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Accordion FAQs */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 bg-brand-50 px-2.5 py-1 rounded-full">
                        Frequently Asked Questions
                      </span>
                      <h3 className="text-2xl font-semibold text-charcoal-900 mt-2 mb-6">
                        Everything You Need to Know
                      </h3>

                      <div className="space-y-3">
                        {/* FAQ 1 */}
                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                          <button onClick={() => { toggleFaq(1) }} className="w-full p-4 text-left font-semibold text-xs sm:text-sm text-charcoal-900 bg-slate-50 hover:bg-slate-100 flex items-center justify-between transition">
                            <span>What is the weekly time commitment required?</span>
                            <Icon name="chevron-down" className="text-xs text-gray-500 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                          </button>
                          <div id="faqAnswer-1" className="p-4 bg-white text-xs text-gray-600 leading-relaxed border-t border-gray-100 hidden">
                            Expect approximately 3.5 to 4 hours per week: one 90-minute live interactive laboratory, one 45-minute asynchronous peer challenge, and brief daily 5-minute vocal acoustics drills.
                          </div>
                        </div>

                        {/* FAQ 2 */}
                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                          <button onClick={() => { toggleFaq(2) }} className="w-full p-4 text-left font-semibold text-xs sm:text-sm text-charcoal-900 bg-slate-50 hover:bg-slate-100 flex items-center justify-between transition">
                            <span>What if I cannot attend a live laboratory due to business travel?</span>
                            <Icon name="chevron-down" className="text-xs text-gray-500 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                          </button>
                          <div id="faqAnswer-2" className="p-4 bg-white text-xs text-gray-600 leading-relaxed border-t border-gray-100 hidden">
                            All sessions are recorded in ultra-HD with searchable AI transcripts and slide annotations. If you miss a session, you submit an asynchronous audio recording of the module assignment to receive written and voice-note feedback from Sonia Ali.
                          </div>
                        </div>

                        {/* FAQ 3 */}
                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                          <button onClick={() => { toggleFaq(3) }} className="w-full p-4 text-left font-semibold text-xs sm:text-sm text-charcoal-900 bg-slate-50 hover:bg-slate-100 flex items-center justify-between transition">
                            <span>How do the 1-on-1 sessions with Sonia Ali work?</span>
                            <Icon name="chevron-down" className="text-xs text-gray-500 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                          </button>
                          <div id="faqAnswer-3" className="p-4 bg-white text-xs text-gray-600 leading-relaxed border-t border-gray-100 hidden">
                            You receive two 45-minute private clinical diagnostic sessions. The first occurs in Week 2 to establish your personal acoustic baseline and linguistic goals. The second takes place in Week 8 for a comprehensive review of your capstone board simulation.
                          </div>
                        </div>

                        {/* FAQ 4 */}
                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                          <button onClick={() => { toggleFaq(4) }} className="w-full p-4 text-left font-semibold text-xs sm:text-sm text-charcoal-900 bg-slate-50 hover:bg-slate-100 flex items-center justify-between transition">
                            <span>Can my organization sponsor or pay via corporate invoice?</span>
                            <Icon name="chevron-down" className="text-xs text-gray-500 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                          </button>
                          <div id="faqAnswer-4" className="p-4 bg-white text-xs text-gray-600 leading-relaxed border-t border-gray-100 hidden">
                            Yes. Over 70% of our participants have their tuition funded by corporate L&D budgets. We provide standard vendor onboarding forms, formal corporate invoices, and post-programme completion certificates.
                          </div>
                        </div>

                        {/* FAQ 5 */}
                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                          <button onClick={() => { toggleFaq(5) }} className="w-full p-4 text-left font-semibold text-xs sm:text-sm text-charcoal-900 bg-slate-50 hover:bg-slate-100 flex items-center justify-between transition">
                            <span>Will I receive an accredited certification upon completion?</span>
                            <Icon name="chevron-down" className="text-xs text-gray-500 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                          </button>
                          <div id="faqAnswer-5" className="p-4 bg-white text-xs text-gray-600 leading-relaxed border-t border-gray-100 hidden">
                            Yes. Upon successful completion of all live labs and the capstone board address, you will receive an official verifiable CPD UK Certificate documenting 24 Accredited Continuing Professional Development Hours.
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                {/* RIGHT COLUMN: STICKY LEARNPRESS LMS SIDEBAR (4 cols) */}
                <div className="lg:col-span-4">
                  <div className="sticky top-28 space-y-6">

                    {/* LearnPress Course Widget Box */}
                    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-bl-full pointer-events-none"></div>

                      {/* Status & Availability Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
                          Cohort 14 • Enrolment Open
                        </span>
                        <span className="text-xs text-gray-600 font-semibold flex items-center">
                          <Icon name="star" className="mr-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />5.0
                        </span>
                      </div>

                      <div className="mb-5">
                        <div className="text-xs text-gray-500 font-medium">Cohort Availability</div>
                        <div className="text-xl font-semibold text-charcoal-900 mt-0.5">
                          Only 4 Seats Left
                        </div>
                        <div className="text-xs text-gray-600 font-semibold mt-1">
                          <Icon name="calendar-check" className="mr-1.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Starts Monday, October 14, 2026
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3 mb-6">
                        <button onClick={() => { openModal('English for Professional Success') }} className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition duration-200 text-sm flex items-center justify-center cursor-pointer">
                          <span>Apply / Enrol in Cohort</span>
                          <Icon name="arrow-right" className="ml-2 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        </button>

                        <button onClick={() => { openModal('Corporate Invoice: English for Professional Success') }} className="w-full bg-slate-100 hover:bg-slate-200 text-charcoal-900 font-semibold py-3 px-6 rounded-xl transition duration-200 text-xs text-center cursor-pointer">
                          Request Corporate Invoice & Quote
                        </button>
                      </div>

                      {/* Course Highlights Checklist */}
                      <div className="border-t border-gray-100 pt-5">
                        <h4 className="text-xs font-semibold text-charcoal-900 uppercase tracking-wider mb-3.5">
                          What This Accelerator Includes:
                        </h4>
                        <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                          <li className="flex items-center"><Icon name="check" className="text-brand-500 mr-2.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />8 Weeks Live Interactive Masterclasses</li>
                          <li className="flex items-center"><Icon name="check" className="text-brand-500 mr-2.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />24 CPD UK Accredited Training Hours</li>
                          <li className="flex items-center"><Icon name="check" className="text-brand-500 mr-2.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />2x Private 1-on-1 Clinics with Sonia Ali</li>
                          <li className="flex items-center"><Icon name="check" className="text-brand-500 mr-2.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Strict Cohort Cap (Max 12 Executives)</li>
                          <li className="flex items-center"><Icon name="check" className="text-brand-500 mr-2.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />HD Class Recordings & Transcripts</li>
                          <li className="flex items-center"><Icon name="check" className="text-brand-500 mr-2.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Executive Articulation Toolkit & Templates</li>
                          <li className="flex items-center"><Icon name="check" className="text-brand-500 mr-2.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Private Alumni Slack Community Access</li>
                          <li className="flex items-center"><Icon name="check" className="text-brand-500 mr-2.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Official CPD UK Verifiable Certificate</li>
                        </ul>
                      </div>

                      {/* Social Proof Guarantee Micro-box */}
                      <div className="mt-6 pt-5 border-t border-gray-100 flex items-center space-x-3 text-left">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-charcoal-800 shrink-0">
                          <Icon name="shield-halved" className="text-brand-600 text-lg inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        </div>
                        <div className="text-[11px] text-gray-500 leading-tight">
                          <span className="font-semibold text-charcoal-900 block">100% Development Guarantee</span>
                          Comprehensive executive transformation or full cohort reassignment.
                        </div>
                      </div>

                    </div>

                    {/* Need Assistance Callout Card */}
                    <div className="bg-emerald-50/60 rounded-2xl p-5 text-gray-700 text-xs border border-emerald-100">
                      <div className="flex items-center space-x-3 mb-2">
                        <Icon name="headset" className="text-brand-400 text-base inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        <span className="font-semibold text-sm">Need Corporate Guidance?</span>
                      </div>
                      <p className="text-gray-500 mb-3 leading-relaxed">
                        Have questions about aligning this cohort with your corporate L&D framework?
                      </p>
                      <a href="mailto:contact@startsah.com" className="text-emerald-700 font-semibold hover:underline flex items-center">
                        <span>contact@startsah.com</span>
                        <Icon name="arrow-up-right-from-square" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>



        {/* ========================================================================= */}
        {/* PAGE 3: ORGANISATIONAL DEVELOPMENT PAGE LAYOUT (Dedicated B2B Landing) */}
        {/* ========================================================================= */}
    </>
  );
}
