'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import Icon from '@/components/Icon';
import { downloadSyllabus, restartQuiz, renderQuizStep } from '@/lib/ui';

export default function ResourcesPage() {
  // The diagnostic paints its first question once the markup is on the page.
  useEffect(() => renderQuizStep(), []);

  return (
    <>

          {/* Breadcrumbs */}
          <div className="bg-white border-b border-gray-100 py-3.5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex text-xs font-medium text-gray-500 items-center space-x-2">
                <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-900 font-semibold">Speech Assessment & Resources</span>
              </nav>
            </div>
          </div>

          {/* Quiz & Resources Hero */}
          <section className="py-14 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
              <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-gray-500 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60">
                Interactive Capability Assessment
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mt-3 tracking-tight">
                Executive Speech & Articulation Diagnostics
              </h1>
              <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
                Take our proprietary 2-minute diagnostic assessment to identify your key vocal strengths and discover which development pillar will elevate your impact.
              </p>
            </div>
          </section>

          {/* Interactive 2-Minute Diagnostic Quiz */}
          <section className="py-12 band-mint">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200/80 shadow-xs">

                <div id="quizContainer">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider" id="quizStepIndicator">Question 1 of 4</span>
                    <span className="text-xs font-semibold text-gray-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">Speech Diagnostic</span>
                  </div>

                  <div id="quizQuestionBox" className="space-y-6">
                    {/* Rendered via JS */}
                  </div>
                </div>

                <div id="quizResultBox" className="hidden text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold mb-4 border border-emerald-200/60">
                    <Icon name="award" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Your Communication Profile</h3>
                  <p className="text-xs text-gray-600 mt-2 max-w-md mx-auto" id="quizResultSummary">
                    Analysis complete: You possess strong analytical content, but your vocal pitch modulation and pacing under high-stakes interrogation can be elevated.
                  </p>
                  <div className="mt-6 p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/80 max-w-md mx-auto text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">Recommended Pathway:</span>
                    <h4 className="text-base font-bold text-gray-900 mt-1" id="quizRecommendedCourse">English for Professional Success & Vocal Gravitas</h4>
                    <p className="text-xs text-gray-600 mt-1">Focusing on acoustic breath support, pausing technique, and boardroom persuasion.</p>
                  </div>
                  <div className="mt-8 flex justify-center space-x-4">
                    <Link href="/start-your-development?focus=English%20for%20Professional%20Success" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full shadow-xs text-xs cursor-pointer">
                      Start Recommended Development
                    </Link>
                    <button onClick={() => { restartQuiz() }} className="px-5 py-3 border border-gray-200 text-gray-700 font-semibold rounded-full text-xs hover:border-gray-900 cursor-pointer">
                      Retake Assessment
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Downloadable Playbooks Grid */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center tracking-tight">Complimentary Executive Playbooks</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl border border-gray-200/80 bg-slate-50/50 hover:bg-white hover:border-gray-300 transition duration-200">
                  <Icon name="file-pdf" className="text-emerald-600 text-3xl mb-4 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  <h4 className="font-bold text-gray-900 text-base mb-2">The Boardroom Articulation Guide</h4>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">12 verbal formulas to defuse aggressive questioning and reframe debate in executive committees.</p>
                  <button onClick={() => { downloadSyllabus() }} className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center cursor-pointer">
                    Download PDF (Free) <Icon name="download" className="ml-1.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  </button>
                </div>

                <div className="p-6 rounded-2xl border border-gray-200/80 bg-slate-50/50 hover:bg-white hover:border-gray-300 transition duration-200">
                  <Icon name="file-pdf" className="text-emerald-600 text-3xl mb-4 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  <h4 className="font-bold text-gray-900 text-base mb-2">The 2025 Executive Interview Blueprint</h4>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">How top headhunters assess executive readiness, psychological safety, and strategic gravitas.</p>
                  <button onClick={() => { downloadSyllabus() }} className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center cursor-pointer">
                    Download PDF (Free) <Icon name="download" className="ml-1.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  </button>
                </div>

                <div className="p-6 rounded-2xl border border-gray-200/80 bg-slate-50/50 hover:bg-white hover:border-gray-300 transition duration-200">
                  <Icon name="headphones" className="text-emerald-600 text-3xl mb-4 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  <h4 className="font-bold text-gray-900 text-base mb-2">Vocal Resonance Warm-Up Drills</h4>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">5-minute acoustic exercise MP3 to ground your vocal cords before high-stakes presentations.</p>
                  <button onClick={() => { downloadSyllabus() }} className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center cursor-pointer">
                    Listen & Download (Free) <Icon name="download" className="ml-1.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          </section>


        {/* ========================================================================= */}
        {/* PAGE 9: CONTACT US & HEADQUARTERS (Lovable Clean Light Style) */}
        {/* ========================================================================= */}
    </>
  );
}
