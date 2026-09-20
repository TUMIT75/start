'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import Illustration from '@/components/Illustration';
import Icon from '@/components/Icon';
import { filterProgrammes, filterProgrammesBySearch } from '@/lib/ui';

export default function ProgrammesPage() {
  // Arriving from a development dimension opens the catalogue on that category.
  useEffect(() => {
    const focus = new URLSearchParams(window.location.search).get('focus');
    if (focus) filterProgrammes(focus);
  }, []);

  return (
    <>

          {/* Breadcrumbs */}
          <div className="bg-white border-b border-gray-100 py-3.5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex text-xs font-medium text-gray-500 items-center space-x-2">
                <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-900 font-semibold">Courses</span>
              </nav>
            </div>
          </div>

          {/* Catalog Hero */}
          <section className="py-12 sm:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-gray-500 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60">
                    CPD UK Accredited Catalog
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                    Learning That Moves You Forward
                  </h1>
                  <p className="text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
                    Designed for graduates, professionals, emerging managers, and leaders. Combining interactive group cohorts, practical scenarios, and 1-on-1 personalized feedback.
                  </p>
                </div>
                {/* Quick Search */}
                <div className="w-full md:w-80">
                  <div className="relative">
                    <input type="text" id="courseSearchInput" onKeyUp={(event) => { filterProgrammesBySearch() }} placeholder="Search programmes or skills..." className="w-full pl-9 pr-4 py-3 rounded-full border border-gray-200 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-slate-50/50" />
                    <Icon name="magnifying-glass" className="absolute left-3.5 top-3.5 text-gray-500 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  </div>
                </div>
              </div>

              {/* A note, not a place for artwork: an illustration squeezed to banner
                   height reads as clutter, which is what the feedback asked us to cut. */}
              <div className="mt-8 pt-6 border-t hairline flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Icon name="users" className="text-emerald-600 text-lg shrink-0 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  <div className="text-left">
                    <span className="text-xs font-semibold text-gray-900 block">Small Cohorts & Safe Learning Environments</span>
                    <span className="text-[11px] text-gray-600">Every programme provides interactive live practice with feedback tailored to your real role.</span>
                  </div>
                </div>
                <div className="shrink-0">
                  <span className="text-xs font-semibold text-gray-600 bg-white px-3 py-1.5 rounded-full border border-emerald-200">
                    <Icon name="check-circle" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />CPD Certified
                  </span>
                </div>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-100" id="progFilterTabs">
                <button onClick={() => { filterProgrammes('all') }} className="prog-filter-btn px-4 py-2 rounded-full text-xs font-semibold transition bg-emerald-600 text-white cursor-pointer shadow-xs whitespace-nowrap" data-cat="all">All Programmes (6)</button>
                <button onClick={() => { filterProgrammes('Communication') }} className="prog-filter-btn px-4 py-2 rounded-full text-xs font-semibold transition bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer whitespace-nowrap" data-cat="Communication">Communication & English</button>
                <button onClick={() => { filterProgrammes('Career & Employability') }} className="prog-filter-btn px-4 py-2 rounded-full text-xs font-semibold transition bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer whitespace-nowrap" data-cat="Career & Employability">Career & Employability</button>
                <button onClick={() => { filterProgrammes('Leadership') }} className="prog-filter-btn px-4 py-2 rounded-full text-xs font-semibold transition bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer whitespace-nowrap" data-cat="Leadership">Leadership & Presence</button>
                <button onClick={() => { filterProgrammes('B2B Organisational') }} className="prog-filter-btn px-4 py-2 rounded-full text-xs font-semibold transition bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer whitespace-nowrap" data-cat="B2B Organisational">Workforce & Teams</button>
              </div>
            </div>
          </section>

          {/* Catalog Grid */}
          <section className="py-14 band-off">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="catalogGrid">

                {/* Card 1: English for Professional Success */}
                <div className="programme-card flex flex-col justify-between group" data-category="Communication">
                  <div>
                    <Link href="/courses/english-for-professional-success" className="relative cursor-pointer ill-stage p-4">
                      <Illustration src="/illustrations/new-23-global-reach.svg" alt="Illustration: a professional with a tablet, working across borders" className="ill ill-card group-hover:scale-105 transition duration-500" />
                      <span className="absolute top-3 left-3 bg-gray-900/90 text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Communication</span>
                      <span className="absolute bottom-3 right-3 bg-emerald-600 text-white px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-xs">Featured LMS</span>
                    </Link>
                    <div className="pt-5">
                      <div className="flex items-center space-x-2 mb-2 text-xs text-gray-500">
                        <span className="font-semibold text-gray-900">Sonia Ali (Lead Coach)</span>
                        <span className="ml-auto text-emerald-600 font-bold"><Icon name="star" className="mr-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />5.0 (48)</span>
                      </div>
                      <Link href="/courses/english-for-professional-success" className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition mb-2 cursor-pointer">
                        English for Professional Success
                      </Link>
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        Master high-stakes boardroom articulation, cross-cultural diplomacy, persuasive pitching, and commanding business English.
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t hairline mb-4">
                        <span><Icon name="clock" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />8 Weeks</span>
                        <span><Icon name="folder-open" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />16 Modules</span>
                        <span><Icon name="award" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />24 CPD Hrs</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center justify-between border-t hairline mt-auto">
                    <div className="text-sm font-semibold text-gray-900">£1,450 <span className="text-xs font-normal text-gray-500">/ cohort</span></div>
                    <div className="flex space-x-2">
                      <Link href="/courses/english-for-professional-success" className="px-3.5 py-2 border border-gray-200 text-xs font-semibold text-gray-700 rounded-full hover:border-gray-900 cursor-pointer">Details</Link>
                      <Link href="/start-your-development?focus=English%20for%20Professional%20Success" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-full shadow-xs cursor-pointer">Enrol</Link>
                    </div>
                  </div>
                </div>

                {/* Card 2: Executive Presence & Vocal Resonance */}
                <div className="programme-card flex flex-col justify-between group" data-category="Leadership">
                  <div>
                    <div className="relative ill-stage ill-stage--green p-4">
                      <Illustration src="/illustrations/03-communication.svg" alt="Illustration: two colleagues talking across a table, one speech bubble answering another" className="ill ill-card group-hover:scale-105 transition duration-500" />
                      <span className="absolute top-3 left-3 bg-gray-900/90 text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Leadership</span>
                    </div>
                    <div className="pt-5">
                      <div className="flex items-center space-x-2 mb-2 text-xs text-gray-500">
                        <span className="font-semibold text-gray-900">Sonia Ali (Lead Coach)</span>
                        <span className="ml-auto text-emerald-600 font-bold"><Icon name="star" className="mr-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />4.9 (36)</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition mb-2">
                        Executive Presence & Vocal Resonance
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        Eliminate vocal fatigue, breathlessness under stress, and project unshakeable authority during keynote speaking and board reviews.
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t hairline mb-4">
                        <span><Icon name="clock" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />6 Weeks</span>
                        <span><Icon name="folder-open" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />12 Modules</span>
                        <span><Icon name="award" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />18 CPD Hrs</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center justify-between border-t hairline mt-auto">
                    <div className="text-sm font-semibold text-gray-900">£1,250 <span className="text-xs font-normal text-gray-500">/ cohort</span></div>
                    <div className="flex space-x-2">
                      <Link href="/start-your-development?focus=Executive%20Presence%20%26%20Vocal%20Resonance" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-full shadow-xs cursor-pointer">Enrol</Link>
                    </div>
                  </div>
                </div>

                {/* Card 3: Career Transition & Executive Search */}
                <div className="programme-card flex flex-col justify-between group" data-category="Career & Employability">
                  <div>
                    <div className="relative ill-stage ill-stage--green p-4">
                      <Illustration src="/illustrations/02-career-pathways.svg" alt="Illustration: a professional pausing at a signpost, weighing which direction to take" className="ill ill-card group-hover:scale-105 transition duration-500" />
                      <span className="absolute top-3 left-3 bg-gray-900/90 text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Career</span>
                    </div>
                    <div className="pt-5">
                      <div className="flex items-center space-x-2 mb-2 text-xs text-gray-500">
                        <span className="font-semibold text-gray-900">Start SAH Advisory</span>
                        <span className="ml-auto text-emerald-600 font-bold"><Icon name="star" className="mr-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />5.0 (42)</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition mb-2">
                        Executive Career & Headhunter Mastery
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        C-Suite CV repositioning, executive search engagement, salary negotiation psychology, and competency-based interview drills.
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t hairline mb-4">
                        <span><Icon name="clock" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />4 Weeks</span>
                        <span><Icon name="folder-open" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />8 Modules</span>
                        <span><Icon name="award" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />12 CPD Hrs</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center justify-between border-t hairline mt-auto">
                    <div className="text-sm font-semibold text-gray-900">£950 <span className="text-xs font-normal text-gray-500">/ learner</span></div>
                    <div className="flex space-x-2">
                      <Link href="/start-your-development?focus=Executive%20Career%20%26%20Headhunter%20Mastery" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-full shadow-xs cursor-pointer">Enrol</Link>
                    </div>
                  </div>
                </div>

                {/* Card 4: Boardroom Negotiation & Conflict */}
                <div className="programme-card flex flex-col justify-between group" data-category="Communication">
                  <div>
                    <div className="relative ill-stage ill-stage--green p-4">
                      <Illustration src="/illustrations/16-partnership.svg" alt="Illustration: two colleagues in abaya shaking hands over an agreement" className="ill ill-card group-hover:scale-105 transition duration-500" />
                      <span className="absolute top-3 left-3 bg-gray-900/90 text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Communication</span>
                    </div>
                    <div className="pt-5">
                      <div className="flex items-center space-x-2 mb-2 text-xs text-gray-500">
                        <span className="font-semibold text-gray-900">Sonia Ali & Panel</span>
                        <span className="ml-auto text-emerald-600 font-bold"><Icon name="star" className="mr-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />4.9 (29)</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition mb-2">
                        High-Stakes Negotiation & Diplomatic Influence
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        Master subtle framing, non-defensive responses to hostile pushback, and cross-cultural concession strategies.
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t hairline mb-4">
                        <span><Icon name="clock" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />5 Weeks</span>
                        <span><Icon name="folder-open" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />10 Modules</span>
                        <span><Icon name="award" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />15 CPD Hrs</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center justify-between border-t hairline mt-auto">
                    <div className="text-sm font-semibold text-gray-900">£1,150 <span className="text-xs font-normal text-gray-500">/ cohort</span></div>
                    <div className="flex space-x-2">
                      <Link href="/start-your-development?focus=High-Stakes%20Negotiation" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-full shadow-xs cursor-pointer">Enrol</Link>
                    </div>
                  </div>
                </div>

                {/* Card 5: Soft Skills & Emotional Intelligence */}
                <div className="programme-card flex flex-col justify-between group" data-category="Leadership">
                  <div>
                    <div className="relative ill-stage p-4">
                      <Illustration src="/illustrations/new-25-abaya-notes.svg" alt="Illustration: a professional in abaya taking notes" className="ill ill-card group-hover:scale-105 transition duration-500" />
                      <span className="absolute top-3 left-3 bg-gray-900/90 text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Leadership</span>
                    </div>
                    <div className="pt-5">
                      <div className="flex items-center space-x-2 mb-2 text-xs text-gray-500">
                        <span className="font-semibold text-gray-900">Start SAH Faculty</span>
                        <span className="ml-auto text-emerald-600 font-bold"><Icon name="star" className="mr-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />5.0 (51)</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition mb-2">
                        Workplace Emotional Intelligence & Gravitas
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        Transform relational friction into team velocity. Develop empathic listening, assertive boundary-setting, and calm situational leadership.
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t hairline mb-4">
                        <span><Icon name="clock" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />6 Weeks</span>
                        <span><Icon name="folder-open" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />12 Modules</span>
                        <span><Icon name="award" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />18 CPD Hrs</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center justify-between border-t hairline mt-auto">
                    <div className="text-sm font-semibold text-gray-900">£1,100 <span className="text-xs font-normal text-gray-500">/ cohort</span></div>
                    <div className="flex space-x-2">
                      <Link href="/start-your-development?focus=Workplace%20Emotional%20Intelligence" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-full shadow-xs cursor-pointer">Enrol</Link>
                    </div>
                  </div>
                </div>

                {/* Card 6: Enterprise Workforce Academy (B2B) */}
                <div className="programme-card flex flex-col justify-between group" data-category="B2B Organisational">
                  <div>
                    <div className="relative ill-stage p-4">
                      <Illustration src="/illustrations/new-20-team-systems.svg" alt="Illustration: three colleagues working on a shared system" className="ill ill-card group-hover:scale-105 transition duration-500" />
                      <span className="absolute top-3 left-3 bg-emerald-700 text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Enterprise B2B</span>
                    </div>
                    <div className="pt-5">
                      <div className="flex items-center space-x-2 mb-2 text-xs text-gray-500">
                        <span className="font-semibold text-gray-900">Sonia Ali & Corporate Advisory</span>
                        <span className="ml-auto text-emerald-600 font-bold"><Icon name="star" className="mr-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />5.0 (22)</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition mb-2">
                        Custom Organisational Leadership Academy
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        Full corporate cohort rollout with pre-training diagnostic audit, bespoke modular workshops, and executive stakeholder benchmarking.
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t hairline mb-4">
                        <span><Icon name="clock" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Flexible</span>
                        <span><Icon name="users-gear" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Teams 10-100+</span>
                        <span><Icon name="certificate" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Corporate CPD</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center justify-between border-t hairline mt-auto">
                    <div className="text-sm font-semibold text-gray-900">Custom <span className="text-xs font-normal text-gray-500">/ Proposal</span></div>
                    <div className="flex space-x-2">
                      <Link href="/for-organisations" className="px-3.5 py-2 border border-gray-200 text-xs font-semibold text-gray-700 rounded-full hover:border-gray-900 cursor-pointer">B2B Page</Link>
                      <Link href="/start-your-development?focus=Corporate%20Organisational%20Academy" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-full shadow-xs cursor-pointer">Inquire</Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>


        {/* ========================================================================= */}
        {/* PAGE 6: 1:1 COACHING & MENTORSHIP (Human, Developmental, Welcoming) */}
        {/* ========================================================================= */}
    </>
  );
}
