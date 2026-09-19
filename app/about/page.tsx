'use client';

import Link from 'next/link';
import Illustration from '@/components/Illustration';
import Icon from '@/components/Icon';

export default function AboutPage() {
  return (
    <>

          {/* Breadcrumbs */}
          <div className="bg-white border-b border-gray-100 py-3.5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex text-xs font-medium text-gray-500 items-center space-x-2">
                <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-900 font-semibold">About Start SAH & Sonia Ali</span>
              </nav>
            </div>
          </div>

          {/* About Hero (Mixing Photography with Hand-Drawn Elements) */}
          <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
            {/* Subtle organic background doodle accents */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60">
                    Our Story & Human Philosophy
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    Developing People. Unlocking Potential. <span className="text-emerald-600">At Every Stage.</span>
                  </h1>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Start SAH was founded on a simple conviction: meaningful growth doesn't come from rigid corporate lectures. It comes when people feel genuinely seen, psychologically safe, and practically equipped to overcome daily challenges.
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We work with graduates taking their first career steps, professionals refining their voice in international teams, and emerging managers learning to lead with empathy and calm authority.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-3xl font-extrabold text-gray-900">14+</span>
                      <span className="block text-xs font-medium text-gray-500 mt-1">Years Mentoring & Coaching</span>
                    </div>
                    <div>
                      <span className="text-3xl font-extrabold text-emerald-600">1,200+</span>
                      <span className="block text-xs font-medium text-gray-500 mt-1">People & Teams Supported</span>
                    </div>
                    <div>
                      <span className="text-3xl font-extrabold text-gray-900">100%</span>
                      <span className="block text-xs font-medium text-gray-500 mt-1">CPD UK & EMCC Aligned</span>
                    </div>
                  </div>
                </div>

                {/* Right: one large illustration, with a single caption under it
                     rather than three overlapping floating badges. */}
                <div className="lg:col-span-5">
                  <div className="max-w-lg mx-auto">
                    <div className="ill-stage ill-stage--green">
                      <Illustration src="/illustrations/07-coaching-mentoring.png" alt="Illustration: a mentor in thobe and ghutra guiding a colleague at her laptop" className="ill ill-lg" />
                    </div>
                    <div className="mt-6 flex items-center justify-between gap-4 border-t hairline pt-5">
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Sonia Ali, MA</h4>
                        <p className="text-xs text-gray-600 mt-0.5">Founder &amp; Lead Coach &bull; EMCC Senior Practitioner</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 whitespace-nowrap">12+ years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Methodology: one large illustration carries the idea, the four stages
               read as a plain numbered list rather than four small boxed cards. */}
          <section className="py-20 lg:py-28 band-off border-y hairline">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                <div className="lg:col-span-5">
                  <div className="ill-stage ill-stage--bare">
                    <Illustration src="/illustrations/10-career-progression.png" alt="Illustration: a professional with a briefcase stepping up onto rising blocks" className="ill ill-lg" />
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">How Progression Happens</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">The four stages of human progression</h2>
                  <p className="text-gray-600 mt-3 leading-relaxed max-w-xl">A thoughtful, proven cycle designed to take you from uncertain hesitation to lasting capability.</p>
                  <div className="rule-green mt-6"></div>

                  <ol className="mt-10 space-y-8">
                    <li className="flex gap-5">
                      <span className="shrink-0 text-2xl font-extrabold text-emerald-600 leading-none w-10">01</span>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">Clarify the gap</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mt-1 max-w-lg">Understanding where you are, pinpointing the specific communication or mindset roadblocks holding you back.</p>
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <span className="shrink-0 text-2xl font-extrabold text-emerald-600 leading-none w-10">02</span>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">Find your voice</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mt-1 max-w-lg">Developing calm vocal control, clear phrasing, and unlearning the fear of speaking up in demanding rooms.</p>
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <span className="shrink-0 text-2xl font-extrabold text-emerald-600 leading-none w-10">03</span>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">Practise it for real</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mt-1 max-w-lg">Real scenarios, role-plays, and constructive feedback in a safe space with zero judgment and instant coaching.</p>
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <span className="shrink-0 text-2xl font-extrabold text-emerald-600 leading-none w-10">04</span>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">Make the progress stick</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mt-1 max-w-lg">Embodying new habits naturally, stepping forward with genuine self-assurance, and sustaining long-term momentum.</p>
                      </div>
                    </li>
                  </ol>
                </div>

              </div>

              <div className="mt-12 text-center flex flex-wrap justify-center gap-4">
                <Link href="/programmes" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3.5 rounded-full shadow-xs transition text-sm cursor-pointer">
                  <span>Explore All Programmes</span>
                  <Icon name="arrow-right" className="ml-2 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                </Link>
                <Link href="/coaching" className="border border-gray-200 hover:border-gray-900 text-gray-800 font-semibold px-7 py-3.5 rounded-full transition text-sm cursor-pointer">
                  <span>Discuss 1-on-1 Coaching</span>
                </Link>
              </div>
            </div>
          </section>


        {/* ========================================================================= */}
        {/* PAGE 5: ALL PROGRAMMES & COURSE DIRECTORY (Clean Lovable LMS Catalog) */}
        {/* ========================================================================= */}
    </>
  );
}
