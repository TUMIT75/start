'use client';

import Link from 'next/link';
import Illustration from '@/components/Illustration';
import Icon from '@/components/Icon';
import { filterInsightsCategory, forwardAudio, handleInsightsSubscribe, openArticleReader, playAppearanceVideo, rewindAudio, scrubAudioPlayer, setAudioSpeed, toggleDedicatedPodcast } from '@/lib/ui';

export default function InsightsPage() {
  return (
    <>

          {/* Breadcrumbs */}
          <div className="bg-white border-b border-gray-100 py-3.5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex text-xs font-medium text-gray-500 items-center space-x-2">
                <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-900 font-semibold">Insights & Podcast</span>
              </nav>
            </div>
          </div>

          {/* Editorial Header with Generous Whitespace */}
          <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-gray-500 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60 mb-5">
                Evidence-Based Insights & Podcasts
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                Communicate with <span className="text-emerald-600">Authority.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mt-4 mb-8">
                Practical perspectives on executive presence, diplomatic pushback, and cross-cultural leadership—curated by Sonia Ali.
              </p>

              {/* Topic Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2" id="insightsFilterBar">
                <button onClick={() => { filterInsightsCategory('all') }} id="filter-all" className="insight-pill px-4 py-2 rounded-full text-xs font-semibold transition bg-emerald-600 text-white cursor-pointer shadow-sm">
                  All Insights
                </button>
                <button onClick={() => { filterInsightsCategory('research') }} id="filter-research" className="insight-pill px-4 py-2 rounded-full text-xs font-semibold transition bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer">
                  Original Research
                </button>
                <button onClick={() => { filterInsightsCategory('presence') }} id="filter-presence" className="insight-pill px-4 py-2 rounded-full text-xs font-semibold transition bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer">
                  Executive Presence
                </button>
                <button onClick={() => { filterInsightsCategory('communication') }} id="filter-communication" className="insight-pill px-4 py-2 rounded-full text-xs font-semibold transition bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer">
                  Communication Skills
                </button>
                <button onClick={() => { filterInsightsCategory('career') }} id="filter-career" className="insight-pill px-4 py-2 rounded-full text-xs font-semibold transition bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer">
                  Career Strategy
                </button>
                <button onClick={() => { filterInsightsCategory('podcast') }} id="filter-podcast" className="insight-pill px-4 py-2 rounded-full text-xs font-semibold transition bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer">
                  Podcast Episodes
                </button>
              </div>
            </div>
          </section>

          {/* As Featured In Micro-Trust Row */}
          <div className="py-6 bg-slate-50/50 border-b border-gray-150">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold text-center mb-4">Research Cited Across Global Publications & Advisory Boards</p>
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-gray-400 font-semibold text-xs sm:text-sm tracking-wider">
                <span className="hover:text-gray-800 transition">BBC NEWS</span>
                <span className="hover:text-gray-800 transition">FINANCIAL TIMES</span>
                <span className="hover:text-gray-800 transition">THE TIMES</span>
                <span className="hover:text-gray-800 transition">FORBES</span>
                <span className="hover:text-gray-800 transition">BLOOMBERG</span>
                <span className="hover:text-gray-800 transition">CPD UK</span>
              </div>
            </div>
          </div>

          {/* 3 Clean Statistical Cards (Lovable Clean Light Style) */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 bg-emerald-50 px-3 py-1 rounded-full">Quantifiable Outcomes</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-3">The Science Behind Relational Gravitas</h2>
                <p className="text-sm text-gray-500 mt-2">Executive presence is not an innate mystery. It is a measurable communication science.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="pr-6">
                  <div className="text-4xl font-bold text-emerald-600 mb-3 tracking-tight">2.4×</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">Career Velocity</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Professionals combining technical skill with vocal gravitas and diplomatic agility advance 2.4× faster to director appointments.
                  </p>
                </div>
                <div className="pr-6">
                  <div className="text-4xl font-bold text-emerald-600 mb-3 tracking-tight">34%</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">Boardroom Retention</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Stakeholders retain 34% more key proposal metrics when presenters employ deliberate pauses and controlled pacing.
                  </p>
                </div>
                <div className="pr-6">
                  <div className="text-4xl font-bold text-emerald-600 mb-3 tracking-tight">50%</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">Conflict Reduction</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Leaders trained in diplomatic linguistic framing resolve cross-functional deadlocks in half the time without relational tension.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Dedicated Interactive Podcast Player Section */}
          <section className="py-16 sm:py-20 band-off" id="podcastPlayerSection">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                <div>
                  <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-gray-500 bg-emerald-50 px-3 py-1 rounded-full">
                    The Start SAH Executive Podcast
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 tracking-tight">
                    Listen & Calibrate: Audio Masterclasses
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-xl">
                    Tactical discussions breaking down vocal cadence, diplomatic pushback, and cross-cultural communication.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-3">
                  <a href="https://spotify.com" target="_blank" rel="noopener" className="px-4 py-2 border border-gray-200 bg-white rounded-full text-xs font-semibold text-gray-800 hover:border-emerald-500 hover:text-emerald-600 flex items-center shadow-xs transition">
                    <Icon name="spotify" className="text-emerald-500 mr-2 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Spotify
                  </a>
                  <a href="https://apple.com" target="_blank" rel="noopener" className="px-4 py-2 border border-gray-200 bg-white rounded-full text-xs font-semibold text-gray-800 hover:border-emerald-500 hover:text-emerald-600 flex items-center shadow-xs transition">
                    <Icon name="podcast" className="text-emerald-700 mr-2 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Apple Podcasts
                  </a>
                </div>
              </div>

              {/* Custom Audio Player Card */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                  {/* Episode Info (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Featured Episode 28
                      </span>
                      <span className="text-xs text-gray-400 font-medium">34 min • Released this week</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                      How to Disagree with Senior Stakeholders Without Damaging Rapport
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      Host Sonia Ali analyzes the micro-cues of dissent: pausing 3 full seconds before responding, removing uptalk, and framing resistance as risk-mitigation.
                    </p>

                    {/* Audio Wave Visualizer Simulation */}
                    <div className="flex items-center space-x-1 py-2 h-8" id="audioEqualizerBars">
                      <div className="w-1 bg-emerald-400 h-3 rounded-full transition-all duration-200"></div>
                      <div className="w-1 bg-emerald-400 h-6 rounded-full transition-all duration-200"></div>
                      <div className="w-1 bg-emerald-400 h-7 rounded-full transition-all duration-200"></div>
                      <div className="w-1 bg-emerald-400 h-4 rounded-full transition-all duration-200"></div>
                      <div className="w-1 bg-emerald-400 h-6 rounded-full transition-all duration-200"></div>
                      <div className="w-1 bg-emerald-400 h-8 rounded-full transition-all duration-200"></div>
                      <div className="w-1 bg-emerald-400 h-5 rounded-full transition-all duration-200"></div>
                      <div className="w-1 bg-emerald-400 h-3 rounded-full transition-all duration-200"></div>
                      <div className="w-1 bg-emerald-400 h-7 rounded-full transition-all duration-200"></div>
                      <div className="w-1 bg-emerald-400 h-8 rounded-full transition-all duration-200"></div>
                      <div className="w-1 bg-emerald-400 h-5 rounded-full transition-all duration-200"></div>
                      <div className="w-1 bg-emerald-400 h-3 rounded-full transition-all duration-200"></div>
                    </div>

                    {/* Scrubber Bar */}
                    <div className="space-y-1">
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden cursor-pointer" onClick={() => { scrubAudioPlayer(event) }} id="audioScrubTrack">
                        <div id="audioProgressBar" className="bg-emerald-500 h-full w-1/4 rounded-full transition-all duration-300"></div>
                      </div>
                      <div className="flex justify-between text-[11px] text-gray-400 font-mono">
                        <span id="audioCurrentTime">08:32</span>
                        <span id="audioPlayerStateText" className="text-emerald-400 text-[10px]">Audio Stream Ready</span>
                        <span>34:15</span>
                      </div>
                    </div>
                  </div>

                  {/* Player Controls (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-800/60 rounded-2xl border border-slate-700/80 text-center">
                    <div className="flex items-center space-x-6 mb-5">
                      <button onClick={() => { rewindAudio(15) }} className="text-gray-400 hover:text-white transition p-2 cursor-pointer" title="Rewind 15s">
                        <Icon name="rotate-left" className="text-lg inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </button>
                      <button onClick={(event) => { toggleDedicatedPodcast(event.currentTarget) }} id="podcastPlayMasterBtn" className="w-16 h-16 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg transition transform hover:scale-105 cursor-pointer">
                        <Icon name="play" className="text-xl ml-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </button>
                      <button onClick={() => { forwardAudio(30) }} className="text-gray-400 hover:text-white transition p-2 cursor-pointer" title="Fast Forward 30s">
                        <Icon name="rotate-right" className="text-lg inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </button>
                    </div>

                    {/* Speed & Quality Pills */}
                    <div className="flex items-center space-x-3 text-xs">
                      <span className="text-gray-400 text-[11px]">Speed:</span>
                      <button onClick={(event) => { setAudioSpeed(1, event.currentTarget) }} className="audio-speed-btn px-2.5 py-1 rounded-md bg-emerald-600 text-white font-bold text-[11px] cursor-pointer">1.0x</button>
                      <button onClick={(event) => { setAudioSpeed(1.25, event.currentTarget) }} className="audio-speed-btn px-2.5 py-1 rounded-md bg-slate-700 text-gray-300 font-bold text-[11px] hover:bg-slate-600 cursor-pointer">1.25x</button>
                      <button onClick={(event) => { setAudioSpeed(1.5, event.currentTarget) }} className="audio-speed-btn px-2.5 py-1 rounded-md bg-slate-700 text-gray-300 font-bold text-[11px] hover:bg-slate-600 cursor-pointer">1.5x</button>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-4"><Icon name="circle-check" className="text-emerald-400 mr-1.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />CPD Accredited Executive Masterclass Series</p>
                  </div>

                </div>
              </div>

              {/* Recent Keynote & Media Appearances */}
              <div className="mt-12">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Recent Keynote & Media Appearances</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">Interviews, guest panels, and recorded workshops with Sonia Ali.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                  {/* Appearance 1 */}
                  <div className="group">
                    <div className="mb-4 relative ill-stage ill-stage--bare">
                      <Illustration src="/illustrations/new-18-abaya-document.svg" alt="Illustration: a professional in abaya holding a document" className="ill ill-card group-hover:scale-105 transition duration-500" />
                      <button onClick={() => { playAppearanceVideo('On Purpose with Jay Shetty', 'Unlocking Quiet Executive Presence Under Pressure') }} className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg relative z-10 transition cursor-pointer">
                        <Icon name="play" className="ml-1 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </button>
                      <span className="absolute bottom-2.5 right-2.5 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">42:18</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">On Purpose Media</span>
                    <h4 className="font-semibold text-sm text-gray-900 mt-1 group-hover:text-emerald-600 transition">Unlocking Quiet Executive Presence Under Pressure</h4>
                    <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">How analytical leaders lead the room with calm conviction rather than volume.</p>
                  </div>

                  {/* Appearance 2 */}
                  <div className="group">
                    <div className="mb-4 relative ill-stage ill-stage--bare">
                      <Illustration src="/illustrations/new-26-suit-confident.svg" alt="Illustration: a professional in a suit and tie, arms folded" className="ill ill-card group-hover:scale-105 transition duration-500" />
                      <button onClick={() => { playAppearanceVideo('The Diary of a CEO Masterclass', 'The Science of Non-Verbal Gravitas & Executive Presence') }} className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg relative z-10 transition cursor-pointer">
                        <Icon name="play" className="ml-1 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </button>
                      <span className="absolute bottom-2.5 right-2.5 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">55:40</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Executive Masterclass</span>
                    <h4 className="font-semibold text-sm text-gray-900 mt-1 group-hover:text-emerald-600 transition">The Science of Non-Verbal Gravitas & Executive Presence</h4>
                    <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">The micro-behaviours that signal authority in the first 7 seconds of any senior meeting.</p>
                  </div>

                  {/* Appearance 3 */}
                  <div className="group">
                    <div className="mb-4 relative ill-stage ill-stage--bare">
                      <Illustration src="/illustrations/new-21-casual-city-view.svg" alt="Illustration: a professional in smart casual looking out over the city" className="ill ill-card group-hover:scale-105 transition duration-500" />
                      <button onClick={() => { playAppearanceVideo('BBC World Service Business', 'Breaking the Non-Native English Ceiling') }} className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg relative z-10 transition cursor-pointer">
                        <Icon name="play" className="ml-1 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </button>
                      <span className="absolute bottom-2.5 right-2.5 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">28:10</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">BBC Radio 4 Business</span>
                    <h4 className="font-semibold text-sm text-gray-900 mt-1 group-hover:text-emerald-600 transition">Breaking the Non-Native English Ceiling in Global Boardrooms</h4>
                    <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">Why linguistic simplicity and precise pacing build higher trust than complex idioms.</p>
                  </div>

                </div>
              </div>

            </div>
          </section>

          {/* Latest Articles (Clean Lovable Grid) */}
          <section className="py-16 sm:py-24 bg-white" id="insightsArticlesSection">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
                <div>
                  <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-gray-500 bg-emerald-50 px-3 py-1 rounded-full mb-2">Editorial Desk</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Latest Articles & Research Guides</h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">Concise frameworks to sharpen your boardroom communication toolkit.</p>
                </div>
                <span className="text-xs text-gray-600 font-semibold mt-2 sm:mt-0">6 Peer-Reviewed Guides</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="insightsGrid">

                {/* Article 1: Original Research */}
                <div className="insight-card group flex flex-col justify-between" data-category="research">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-gray-500">
                        ORIGINAL RESEARCH
                      </span>
                      <span className="text-xs text-gray-400 font-medium">7 min read</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition mb-3 leading-snug">
                      The One Word That Changes How Senior Stakeholders Hear Your Proposal
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      Why leading with rational justification triggers unconscious cognitive validation, and how to calibrate your opening sentence in C-suite pitches.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">SA</div>
                      <span className="text-xs text-gray-500 font-medium">Sonia Ali</span>
                    </div>
                    <button onClick={() => { openArticleReader(0) }} className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center cursor-pointer">
                      <span>Read Article</span>
                      <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </button>
                  </div>
                </div>

                {/* Article 2: Communication Skills */}
                <div className="insight-card group flex flex-col justify-between" data-category="communication">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold uppercase px-2.5 py-1 rounded-full bg-charcoal-100 text-charcoal-700">
                        COMMUNICATION SKILLS
                      </span>
                      <span className="text-xs text-gray-400 font-medium">9 min read</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition mb-3 leading-snug">
                      How to Be Diplomatically Assertive Without Sounding Aggressive
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      The subtle linguistic border between defensive over-explaining and grounded conviction when navigating hostile cross-departmental reviews.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">SA</div>
                      <span className="text-xs text-gray-500 font-medium">Sonia Ali</span>
                    </div>
                    <button onClick={() => { openArticleReader(1) }} className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center cursor-pointer">
                      <span>Read Article</span>
                      <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </button>
                  </div>
                </div>

                {/* Article 3: Leadership & Presence */}
                <div className="insight-card group flex flex-col justify-between" data-category="presence">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-gray-500">
                        EXECUTIVE PRESENCE
                      </span>
                      <span className="text-xs text-gray-400 font-medium">11 min read</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition mb-3 leading-snug">
                      Psychological Safety at Work: What It Really Means & How to Build It
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      True safety is not an absence of friction—it is the presence of relational clarity where professional dissent does not incur personal penalty.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">SA</div>
                      <span className="text-xs text-gray-500 font-medium">Faculty Desk</span>
                    </div>
                    <button onClick={() => { openArticleReader(2) }} className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center cursor-pointer">
                      <span>Read Article</span>
                      <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </button>
                  </div>
                </div>

                {/* Article 4: Career Strategy */}
                <div className="insight-card group flex flex-col justify-between" data-category="career">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-gray-500">
                        CAREER STRATEGY
                      </span>
                      <span className="text-xs text-gray-400 font-medium">8 min read</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition mb-3 leading-snug">
                      How to Get Credit for High-Value Work (Without Self-Promoting)
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      Practical visibility architecture: how quiet high-performers make their strategic value unmistakable without awkward posturing.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">SA</div>
                      <span className="text-xs text-gray-500 font-medium">Sonia Ali</span>
                    </div>
                    <button onClick={() => { openArticleReader(3) }} className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center cursor-pointer">
                      <span>Read Article</span>
                      <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </button>
                  </div>
                </div>

                {/* Article 5: Career Strategy */}
                <div className="insight-card group flex flex-col justify-between" data-category="career">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-gray-500">
                        CAREER STRATEGY
                      </span>
                      <span className="text-xs text-gray-400 font-medium">10 min read</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition mb-3 leading-snug">
                      I'm Technically Exceptional but Passed Over: Why & How to Fix It
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      The fatal promotion trap: why senior executive roles select for relational composure, vocal clarity, and stakeholder trust rather than raw throughput.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">SA</div>
                      <span className="text-xs text-gray-500 font-medium">Advisory Desk</span>
                    </div>
                    <button onClick={() => { openArticleReader(4) }} className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center cursor-pointer">
                      <span>Read Article</span>
                      <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </button>
                  </div>
                </div>

                {/* Article 6: Executive Presence */}
                <div className="insight-card group flex flex-col justify-between" data-category="presence">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-gray-500">
                        EXECUTIVE PRESENCE
                      </span>
                      <span className="text-xs text-gray-400 font-medium">6 min read</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition mb-3 leading-snug">
                      The Anatomy of a Boardroom Slide Deck: Speaking Less to Persuade More
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      Transforming dense analytical presentations into high-impact executive summaries that guide decision-makers to immediate consensus.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">SA</div>
                      <span className="text-xs text-gray-500 font-medium">Sonia Ali</span>
                    </div>
                    <button onClick={() => { openArticleReader(5) }} className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center cursor-pointer">
                      <span>Read Article</span>
                      <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Executive Newsletter Signup Banner with Airy Spacing */}
          <section className="py-16 sm:py-20 bg-slate-50/50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-gray-500 bg-emerald-50 px-3 py-1 rounded-full mb-3">Weekly Memorandum</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Join 18,000+ Leaders Receiving Weekly Insights</h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto mt-2 mb-6 leading-relaxed">
                Every Sunday morning, Sonia Ali shares one actionable communication tactic and one research breakdown. Direct and concise.
              </p>
              <form onSubmit={(event) => { handleInsightsSubscribe(event) }} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
                <input type="email" id="insightsEmailInput" required placeholder="Enter your work email address" className="flex-1 px-4 py-3 rounded-full border border-gray-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white" />
                <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs px-6 py-3 rounded-full transition shadow-xs cursor-pointer whitespace-nowrap">
                  Subscribe Free
                </button>
              </form>
            </div>
          </section>



        {/* ========================================================================= */}
        {/* PAGE 11: EDUMA THEME & LEARNPRESS STUDENT LEARNING DASHBOARD */}
        {/* ========================================================================= */}
    </>
  );
}
