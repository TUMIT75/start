'use client';

import Link from 'next/link';
import Illustration from '@/components/Illustration';
import Icon from '@/components/Icon';
import { handleLeadMagnetSubmit, navigateTo } from '@/lib/ui';

export default function HomePage() {
  return (
    <>


        {/* 2. HERO SECTION (Clean Lovable Minimalist Design) */}
        <section className="relative bg-white pt-14 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full">
                  Human potential, made possible
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
                  Developing People.<br />
                  <span className="text-emerald-600">Unlocking Potential.</span>
                </h1>

                <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
                  Move beyond the barriers holding you back. Through purposeful coaching and practical development, we help individuals and organisations build confidence, capability and lasting momentum.
                </p>

                {/* Dual CTAs: Clean Pill Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                  <Link href="/start-your-development" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-7 py-3.5 rounded-full shadow-sm hover:shadow transition duration-200 flex items-center justify-center cursor-pointer" id="heroPrimaryCta">
                    <span>Start Your Development</span>
                    <Icon name="arrow-right" className="ml-2.5 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  </Link>
                  <Link href="/programmes" className="border border-gray-300 hover:border-gray-900 text-gray-800 font-semibold px-7 py-3.5 rounded-full transition duration-200 text-center flex items-center justify-center cursor-pointer" id="heroSecondaryCta">
                    Explore Training & Coaching
                  </Link>
                </div>

                {/* Trust Badges Under Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-gray-500 font-medium">
                  <div className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Practical & personal</div>
                  <div className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Human-centred</div>
                  <div className="flex items-center"><Icon name="check" className="text-emerald-600 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Results-focused</div>
                </div>
              </div>

              {/* Right Side Visual: one large illustration, unframed, with room around it */}
              <div className="lg:col-span-5 relative">
                <div className="ill-stage ill-stage--green mx-auto max-w-xl lg:max-w-none">
                  <Illustration src="/illustrations/topic-human-development.png" alt="Illustration: a mentor in thobe and ghutra reaching down to help a colleague up onto the next step" className="ill ill-xl" />
                </div>
              </div>

            </div>

            {/* Fluid Section Transition Wave (Connecting Hero directly to Pathways) */}
            <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3 text-xs font-semibold text-gray-600">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Accredited 1-on-1 Coaching • Signature Academies • Custom Workforce Solutions</span>
              </div>
              <div className="flex items-center space-x-6 text-xs font-bold text-emerald-700">
                <span className="flex items-center"><Icon name="check" className="mr-1.5 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> No Generic Lectures</span>
                <span className="flex items-center"><Icon name="check" className="mr-1.5 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Real Rehearsal</span>
                <span className="flex items-center"><Icon name="check" className="mr-1.5 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> UK & GCC Recognition</span>
              </div>
            </div>

          </div>
        </section>{/* ========================================================================= */}
        {/* 2.5 5 SIGNATURE DEVELOPMENT DIMENSIONS (TeachFlex Fluid Flow & Large-Scale Art) */}
        {/* ========================================================================= */}
        <section className="py-24 bg-gradient-to-b from-[#FAFAFA] via-[#FAFAFA] to-white relative overflow-hidden border-b border-gray-200/80">


          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Section Header with Bold Startsah Character */}
            <div className="max-w-3xl mb-16 text-left">
              <div className="inline-flex items-center space-x-2 bg-emerald-100/70 border border-emerald-200 px-3.5 py-1.5 rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800">
                  Core Development Architecture
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E2E2E] tracking-tight leading-tight">
                Five dimensions of real growth. <br /><span className="text-emerald-600">Grounded in human reality.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                Growth isn't a checklist or a theoretical lecture. It's about overcoming roadblocks, communicating with clarity, mentoring others, and building collective momentum. Explore our five interconnected developmental pathways.
              </p>
            </div>

            {/* FLOWING DEVELOPMENT PATHWAYS (Organic, Expansive TeachFlex Layout) */}
            <div className="space-y-16 lg:space-y-24">

              {/* =================================================================== */}
              {/* DIMENSION 1: CAREER & EMPLOYABILITY (Metaphor: Person considering pathways) */}
              {/* =================================================================== */}
              <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

                  {/* Left: Large Prominent Visual Storytelling (Person Considering Different Pathways) */}
                  <div className="lg:col-span-6 order-2 lg:order-1">
                    <div className="ill-stage">
                      <Illustration src="/illustrations/topic-career-employability.png" alt="Illustration: a professional in thobe and ghutra at a crossroads, weighing employment, specialisation, entrepreneurship and leadership" className="ill w-full h-auto" />
                    </div>
                  </div>

                  {/* Right: Context, Methodology & Outcomes */}
                  <div className="lg:col-span-6 space-y-5 order-1 lg:order-2 text-left">
                    <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold text-emerald-800 border border-emerald-200">
                      <span>Dimension 01</span>
                      <span>•</span>
                      <span>Direction & Clarity</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2E2E2E] tracking-tight">
                      Career & Employability
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Navigating transitions, choosing between specialization and leadership, and turning ambition into tangible professional progression. We help you map your distinct trajectory with market-grounded precision.
                    </p>

                    {/* Core Pillars List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="flex items-start space-x-2.5 bg-[#FAFAFA] p-3 rounded-xl border border-gray-100">
                        <Icon name="compass" className="text-emerald-600 text-sm mt-0.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-gray-900">Trajectory Mapping</div>
                          <div className="text-[11px] text-gray-500">Uncover your true career leverage</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2.5 bg-[#FAFAFA] p-3 rounded-xl border border-gray-100">
                        <Icon name="file-contract" className="text-emerald-600 text-sm mt-0.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-gray-900">Executive Narrative</div>
                          <div className="text-[11px] text-gray-500">CV, LinkedIn & Board profile alignment</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 flex items-center space-x-4">
                      <Link href="/programmes?focus=Career%20%26%20Employability" className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 group">
                        <span>Explore Career Coaching & Academies</span>
                        <Icon name="arrow-right" className="ml-2 text-xs group-hover:translate-x-1 transition duration-200 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>

              {/* =================================================================== */}
              {/* DIMENSION 2: COMMUNICATION (Metaphor: Two people interacting) */}
              {/* Confident Palette: Rich Charcoal Band with Radiant Emerald & White */}
              {/* =================================================================== */}
              <div className="on-ink relative bg-[#2E2E2E] text-white rounded-[2.5rem] px-8 sm:px-14 py-14 sm:py-16 overflow-hidden">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

                  {/* Left: Text & Methodology */}
                  <div className="lg:col-span-6 space-y-5 text-left">
                    <div className="inline-flex items-center space-x-2 bg-charcoal-800/60 border border-charcoal-700 px-3 py-1 rounded-full text-xs font-bold text-emerald-300">
                      <span>Dimension 02</span>
                      <span>•</span>
                      <span>Active Connection</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Communication & Professional English
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed">
                      Beyond grammar: speaking with authority, navigating difficult boardroom conversations, and articulating complex ideas across cultural and linguistic boundaries.
                    </p>

                    {/* Core Pillars List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="flex items-start space-x-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                        <Icon name="comments" className="text-emerald-400 text-sm mt-0.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-white">Boardroom Rehearsal</div>
                          <div className="text-[11px] text-gray-400">High-stakes simulation & debate</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                        <Icon name="globe" className="text-emerald-400 text-sm mt-0.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-white">Global Business Fluency</div>
                          <div className="text-[11px] text-gray-400">Cross-cultural executive tone</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 flex items-center space-x-4">
                      <Link href="/programmes?focus=Communication" className="inline-flex items-center text-sm font-bold text-emerald-300 hover:text-emerald-200 group">
                        <span>View Communication Programmes</span>
                        <Icon name="arrow-right" className="ml-2 text-xs group-hover:translate-x-1 transition duration-200 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Large Prominent Visual Storytelling (Two People Interacting) */}
                  <div className="lg:col-span-6">
                    <div className="ill-stage ill-stage--bare">
                      <Illustration src="/illustrations/topic-communication-english.png" alt="Illustration: two colleagues in conversation, one speech bubble answering another" className="ill w-full h-auto" />
                    </div>
                  </div>

                </div>
              </div>

              {/* =================================================================== */}
              {/* DIMENSION 3: PERSONAL DEVELOPMENT (Metaphor: Overcoming obstacle/progressing) */}
              {/* =================================================================== */}
              <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

                  {/* Left: Large Prominent Visual Storytelling (Overcoming Obstacle / Progressing) */}
                  <div className="lg:col-span-6 order-2 lg:order-1">
                    <div className="ill-stage">
                      <Illustration src="/illustrations/topic-personal-development.png" alt="Illustration: a professional with a briefcase stepping up towards growth" className="ill w-full h-auto" />
                    </div>
                  </div>

                  {/* Right: Content & Outcomes */}
                  <div className="lg:col-span-6 space-y-5 order-1 lg:order-2 text-left">
                    <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold text-emerald-800 border border-emerald-200">
                      <span>Dimension 03</span>
                      <span>•</span>
                      <span>Self-Mastery & Presence</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2E2E2E] tracking-tight">
                      Personal Development & Executive Presence
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Breakthrough the invisible ceilings of imposter syndrome, decision paralysis, and emotional overwhelm. Cultivate grounded self-belief and a commanding presence that holds the room.
                    </p>

                    {/* Core Pillars List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="flex items-start space-x-2.5 bg-[#FAFAFA] p-3 rounded-xl border border-gray-100">
                        <Icon name="mountain" className="text-emerald-600 text-sm mt-0.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-gray-900">Barrier Dismantling</div>
                          <div className="text-[11px] text-gray-500">Transform internal friction into momentum</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2.5 bg-[#FAFAFA] p-3 rounded-xl border border-gray-100">
                        <Icon name="shield-halved" className="text-emerald-600 text-sm mt-0.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-gray-900">Gravitas & Presence</div>
                          <div className="text-[11px] text-gray-500">Composed authority in high-stakes environments</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 flex items-center space-x-4">
                      <Link href="/coaching" className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 group">
                        <span>Explore Personal Development Coaching</span>
                        <Icon name="arrow-right" className="ml-2 text-xs group-hover:translate-x-1 transition duration-200 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>

              {/* =================================================================== */}
              {/* DIMENSION 4: LEADERSHIP & INFLUENCE (Metaphor: Helping others progress) */}
              {/* =================================================================== */}
              <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

                  {/* Left: Text & Methodology */}
                  <div className="lg:col-span-6 space-y-5 text-left">
                    <div className="inline-flex items-center space-x-2 bg-emerald-100/80 px-3 py-1 rounded-full text-xs font-bold text-emerald-800 border border-emerald-300">
                      <span>Dimension 04</span>
                      <span>•</span>
                      <span>Multiplication of Others</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2E2E2E] tracking-tight">
                      Leadership & Influence
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      True leadership isn't about control; it's about lifting others onto higher tiers of capability. Shift from doing the work to coaching your team toward autonomous excellence.
                    </p>

                    {/* Core Pillars List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="flex items-start space-x-2.5 bg-white p-3 rounded-xl border border-emerald-100 shadow-2xs">
                        <Icon name="hands-holding" className="text-emerald-600 text-sm mt-0.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-gray-900">Coaching-Style Leadership</div>
                          <div className="text-[11px] text-gray-500">Ask powerful questions instead of prescribing</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2.5 bg-white p-3 rounded-xl border border-emerald-100 shadow-2xs">
                        <Icon name="award" className="text-emerald-600 text-sm mt-0.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-gray-900">Talent Elevation</div>
                          <div className="text-[11px] text-gray-500">Succession readiness and peer empowerment</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 flex items-center space-x-4">
                      <Link href="/programmes?focus=Leadership" className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 group">
                        <span>Explore Leadership Modules</span>
                        <Icon name="arrow-right" className="ml-2 text-xs group-hover:translate-x-1 transition duration-200 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Large Prominent Visual Storytelling (Helping Others Progress) */}
                  <div className="lg:col-span-6">
                    <div className="ill-stage">
                      <Illustration src="/illustrations/topic-leadership-workplace.png" alt="Illustration: a leader in thobe and ghutra setting the direction for two colleagues" className="ill w-full h-auto" />
                    </div>
                  </div>

                </div>
              </div>

              {/* =================================================================== */}
              {/* DIMENSION 5: ORGANISATIONAL DEVELOPMENT (Metaphor: Shared Goal) */}
              {/* =================================================================== */}
              <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

                  {/* Left: Large Prominent Visual Storytelling (People Working Toward Shared Goal) */}
                  <div className="lg:col-span-6 order-2 lg:order-1">
                    <div className="ill-stage">
                      <Illustration src="/illustrations/topic-organisational-development.png" alt="Illustration: three colleagues bringing the pieces of an organisation together" className="ill w-full h-auto" />
                    </div>
                  </div>

                  {/* Right: Content & Outcomes */}
                  <div className="lg:col-span-6 space-y-5 order-1 lg:order-2 text-left">
                    <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold text-emerald-800 border border-emerald-200">
                      <span>Dimension 05</span>
                      <span>•</span>
                      <span>Systemic Team Alignment</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2E2E2E] tracking-tight">
                      Organisational Development
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      When people pull in unison toward a shared vision, collective output compounds exponentially. We design cohort-based frameworks, team communication rituals, and manager coaching circles that transform organisational culture.
                    </p>

                    {/* Core Pillars List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="flex items-start space-x-2.5 bg-[#FAFAFA] p-3 rounded-xl border border-gray-100">
                        <Icon name="people-group" className="text-emerald-600 text-sm mt-0.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-gray-900">Cohort Academies</div>
                          <div className="text-[11px] text-gray-500">Shared language and cross-functional synergy</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2.5 bg-[#FAFAFA] p-3 rounded-xl border border-gray-100">
                        <Icon name="bullseye" className="text-emerald-600 text-sm mt-0.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-gray-900">Cultural Cohesion</div>
                          <div className="text-[11px] text-gray-500">Accountability, empathy, and psychological safety</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 flex items-center space-x-4">
                      <button onClick={() => { navigateTo('organisational') }} className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 group">
                        <span>Explore Organisational Capabilities</span>
                        <Icon name="arrow-right" className="ml-2 text-xs group-hover:translate-x-1 transition duration-200 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. THE STARTING POINT ("Why People Seek Development" - Fluid Flow Layout) */}
        {/* ========================================================================= */}
        <section className="py-24 bg-white relative overflow-hidden border-b border-gray-100" id="challenges">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Section Header */}
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center space-x-2 bg-emerald-100/70 border border-emerald-300/60 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>The Growth Catalyst</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Why people seek development
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mt-3 font-normal leading-relaxed">
                Growth rarely begins from comfort. It starts in that pivotal moment you recognise the gap between your current role and your untapped potential.
              </p>
            </div>

            {/* Fluid 2-Column Storytelling Canvas (Replacing separate isolated boxes) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left: the inflection point, drawn large and left unframed */}
              <div className="lg:col-span-6">
                <div className="ill-stage">
                  <Illustration src="/illustrations/20-vision-direction.png" alt="Illustration: a professional in thobe and ghutra sighting the route to a flag on the summit" className="ill ill-lg" />
                </div>

                <p className="mt-8 text-sm text-gray-600 border-t hairline pt-5">
                  Every breakthrough starts with deciding not to settle.
                </p>
              </div>

              {/* Right: Flowing Interactive Catalyst Milestones (Connected by vertical flowing line) */}
              <div className="lg:col-span-6 relative">
                {/* Flowing connecting guide line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-300 to-transparent"></div>

                <div className="space-y-6">

                  {/* Milestone 1: Career Stagnation */}
                  <div className="relative pl-14 group">
                    <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-emerald-600 group-hover:scale-125 transition duration-200"></div>
                    <Link href="/programmes?focus=Career%20%26%20Employability" className="bg-slate-50/80 hover:bg-emerald-50/40 p-5 rounded-2xl border border-gray-200/80 hover:border-emerald-300 transition duration-200 cursor-pointer">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-800 transition">Career Stagnation</h3>
                        <span className="text-xs font-bold text-emerald-700 flex items-center">
                          Clarify Direction <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        You have high competence and proven delivery, but your next promotion or career pivot feels blocked by unwritten rules and opaque trajectories.
                      </p>
                    </Link>
                  </div>

                  {/* Milestone 2: Communication Barriers */}
                  <div className="relative pl-14 group">
                    <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-emerald-600 group-hover:scale-125 transition duration-200"></div>
                    <Link href="/programmes/english-for-professional-success" className="bg-slate-50/80 hover:bg-emerald-50/40 p-5 rounded-2xl border border-gray-200/80 hover:border-emerald-300 transition duration-200 cursor-pointer">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-800 transition">Communication Barriers</h3>
                        <span className="text-xs font-bold text-emerald-700 flex items-center">
                          Master Expression <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Complex ideas deserve effortless delivery. Overcome hesitation in English, boardroom pressure, and multi-stakeholder debate.
                      </p>
                    </Link>
                  </div>

                  {/* Milestone 3: Workplace Confidence */}
                  <div className="relative pl-14 group">
                    <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-emerald-600 group-hover:scale-125 transition duration-200"></div>
                    <Link href="/coaching" className="bg-slate-50/80 hover:bg-emerald-50/40 p-5 rounded-2xl border border-gray-200/80 hover:border-emerald-300 transition duration-200 cursor-pointer">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-800 transition">Workplace Confidence</h3>
                        <span className="text-xs font-bold text-emerald-700 flex items-center">
                          Build Conviction <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Imposter syndrome and self-doubt limit contribution and visibility. Reframe negative mental loops into calm executive authority.
                      </p>
                    </Link>
                  </div>

                  {/* Milestone 4: Emerging Leadership */}
                  <div className="relative pl-14 group">
                    <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-emerald-600 group-hover:scale-125 transition duration-200"></div>
                    <Link href="/programmes?focus=Leadership" className="bg-slate-50/80 hover:bg-emerald-50/40 p-5 rounded-2xl border border-gray-200/80 hover:border-emerald-300 transition duration-200 cursor-pointer">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-800 transition">Emerging Leadership</h3>
                        <span className="text-xs font-bold text-emerald-700 flex items-center">
                          Lead With Impact <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Transitioning from individual contributor to leader requires sound emotional intelligence, team alignment, and clear delegation.
                      </p>
                    </Link>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. GET TO KNOW STARTSAH CLOSER (TeachFlex Signature Asymmetrical Bento Grid) */}
        {/* ========================================================================= */}
        <section className="py-24 bg-[#242424] text-white relative overflow-hidden" id="pillars">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center space-x-2 bg-charcoal-900/90 border border-emerald-700/80 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Get To Know Start SAH Closer</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Development built around real life.
                </h2>
              </div>
              <p className="text-base sm:text-lg text-emerald-100/80 max-w-md leading-relaxed">
                Whether you are navigating high-stakes change, leading others, or strengthening a whole workforce, our programmes turn insight into practical, daily progress.
              </p>
            </div>

            {/* TeachFlex-Style Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

              {/* Large Showcase Feature Panel (7 cols): Collaborative Workshop Art */}
              <div className="lg:col-span-7 bg-charcoal-900/60 rounded-3xl p-8 sm:p-10 border border-charcoal-700 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-charcoal-800/80 px-3.5 py-1.5 rounded-full border border-emerald-700/80">
                      The Startsah Method
                    </span>
                    <span className="text-xs text-emerald-300 font-semibold">Vision 2030 & Global Standards</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                    Hands-on capability building without generic corporate fluff.
                  </h3>
                  <p className="text-emerald-100/75 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
                    We bridge academic rigor and real-world execution. Every cohort and 1-on-1 advisory session blends diagnostic self-reflection with active rehearsal and scenario simulation.
                  </p>
                </div>

                {/* Large-Scale Hand-Drawn Workshop SVG Illustration */}
                <div className="on-ink ill-stage ill-stage--bare mt-4">
                  <Illustration src="/illustrations/topic-training-development.png" alt="Illustration: a trainer in thobe and ghutra presenting results to a seated group" className="ill w-full h-auto" />
                </div>
              </div>

              {/* Right Side Bento Stack (5 cols): High-Impact Metric & Accreditation Cards */}
              <div className="lg:col-span-5 flex flex-col gap-6">

                {/* Card A: 94% Measurable Growth Metric */}
                <div className="bg-gradient-to-br from-[#2E2E2E] to-[#242424] rounded-3xl p-7 border border-emerald-700/80 shadow-lg flex items-center justify-between">
                  <div>
                    <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 tracking-tight">94%</div>
                    <div className="text-base font-bold text-white mt-1">Promotion & Placement Confidence</div>
                    <p className="text-xs sm:text-sm text-emerald-200/70 mt-1 leading-relaxed">
                      Participants report measurable self-assurance, vocal presence, and career momentum within 8 weeks.
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-charcoal-800/60 border border-charcoal-700 flex items-center justify-center text-emerald-400 text-2xl shrink-0 ml-4">
                    <Icon name="chart-line" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  </div>
                </div>

                {/* Card B: Dual Accreditation & Standards */}
                <div className="bg-gradient-to-br from-[#2E2E2E] to-[#242424] rounded-3xl p-7 border border-emerald-700/80 shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-charcoal-900 px-3 py-1 rounded-full border border-charcoal-700">
                      Rigorous Frameworks
                    </span>
                    <span className="text-xs text-emerald-300 font-semibold">EMCC & CPD Certified</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Accredited by Global Bodies</h4>
                  <p className="text-xs sm:text-sm text-emerald-200/75 leading-relaxed mb-4">
                    All coaching hours, modules, and diagnostic rubrics align with EMCC Global Code of Ethics and internationally recognized CPD standards.
                  </p>
                  <div className="flex items-center gap-3 pt-3 border-t border-charcoal-700 text-xs font-bold text-emerald-300">
                    <span className="flex items-center"><Icon name="check" className="mr-1.5 text-emerald-400 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Evidence-Based</span>
                    <span className="flex items-center"><Icon name="check" className="mr-1.5 text-emerald-400 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Confidential</span>
                    <span className="flex items-center"><Icon name="check" className="mr-1.5 text-emerald-400 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Culturally Nuanced</span>
                  </div>
                </div>

                {/* Card C: Direct Pathway Selector Action */}
                <Link href="/programmes" className="bg-emerald-600 hover:bg-emerald-500 transition duration-300 rounded-3xl p-7 text-white shadow-xl cursor-pointer flex items-center justify-between group">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-100 block mb-1">Interactive Catalog</span>
                    <div className="text-xl font-extrabold text-white">Find your developmental fit</div>
                    <div className="text-xs text-emerald-100/90 mt-1">6 Curriculums • 1-on-1 Coaching • Team Academies</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white text-emerald-800 flex items-center justify-center font-bold shadow group-hover:translate-x-1 transition duration-200 shrink-0 ml-4">
                    <Icon name="arrow-right" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  </div>
                </Link>

              </div>

            </div>

          </div>
        </section>

        {/* 5. FEATURED PROGRAMMES (Clean Lovable 3-Card Grid) */}
        <section className="py-20 bg-slate-50/60 border-t border-gray-100" id="programmes">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                  Featured Programmes
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 tracking-tight">
                  Learning that moves you forward
                </h2>
                <p className="text-base text-gray-600 mt-2 max-w-xl">
                  Practical, expert-led development designed for the moments that matter.
                </p>
              </div>
              <div>
                <Link href="/programmes" className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 cursor-pointer">
                  <span>View all programmes</span>
                  <Icon name="arrow-right" className="ml-2 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                </Link>
              </div>
            </div>

            {/* 3 Clean Course Cards with TeachFlex Hand-Drawn Storytelling Art */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Course 1: English for Professional Success */}
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 hover:border-emerald-400 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between group">
                <div>
                  {/* Hand-Drawn Illustration Banner */}
                  <Link href="/programmes/english-for-professional-success" className="relative aspect-[16/10] bg-gradient-to-br from-[#FAFAFA] to-[#FAFAFA] p-4 flex items-center justify-center border-b border-gray-100 cursor-pointer">
                    <Illustration src="/illustrations/19-global-english.png" alt="Illustration: a professional at a laptop sending work out into the wider world" className="ill w-full h-auto object-contain" />

                    <span className="absolute top-4 left-4 bg-[#242424] text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-charcoal-700">
                      Communication
                    </span>
                  </Link>

                  <div className="p-6">
                    <Link href="/programmes/english-for-professional-success" className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition mb-2 cursor-pointer">
                      English for Professional Success
                    </Link>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Speak with nuanced clarity, contribute effortlessly in executive meetings, and overcome hesitations in English.
                    </p>

                    <div className="flex items-center text-xs text-gray-500 py-3 border-y border-gray-100 mb-2">
                      <span><Icon name="clock" className="mr-1.5 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />6 weeks</span>
                      <span className="mx-3 text-gray-300">•</span>
                      <span><Icon name="folder-open" className="mr-1.5 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />12 lessons</span>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-600">Enrolment open</span>
                  <Link href="/programmes/english-for-professional-success" className="text-xs font-bold text-gray-900 hover:text-emerald-600 flex items-center cursor-pointer">
                    <span>Explore Curriculum</span>
                    <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  </Link>
                </div>
              </div>

              {/* Course 2: Executive & Soft Skills Coaching */}
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 hover:border-emerald-400 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between group">
                <div>
                  {/* Hand-Drawn Illustration Banner */}
                  <Link href="/coaching" className="relative aspect-[16/10] bg-gradient-to-br from-[#FAFAFA] to-[#FAFAFA] p-4 flex items-center justify-center border-b border-gray-100 cursor-pointer">
                    <Illustration src="/illustrations/07-coaching-mentoring.png" alt="Illustration: a mentor in thobe and ghutra guiding a colleague at her laptop" className="ill w-full h-auto object-contain" />

                    <span className="absolute top-4 left-4 bg-[#242424] text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-charcoal-700">
                      1-on-1 Coaching
                    </span>
                  </Link>

                  <div className="p-6">
                    <Link href="/coaching" className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition mb-2 cursor-pointer">
                      Executive & Soft Skills Coaching
                    </Link>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      A structured, confidential coaching journey to sharpen strategic capability, presence, and career trajectory.
                    </p>

                    <div className="flex items-center text-xs text-gray-500 py-3 border-y border-gray-100 mb-2">
                      <span><Icon name="clock" className="mr-1.5 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />8 weeks</span>
                      <span className="mx-3 text-gray-300">•</span>
                      <span><Icon name="user-group" className="mr-1.5 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />1:1 sessions</span>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500">By application</span>
                  <Link href="/coaching" className="text-xs font-bold text-gray-900 hover:text-emerald-600 flex items-center cursor-pointer">
                    <span>Learn More</span>
                    <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  </Link>
                </div>
              </div>

              {/* Course 3: Leadership & Presence Development */}
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 hover:border-emerald-400 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between group">
                <div>
                  {/* Hand-Drawn Illustration Banner */}
                  <Link href="/programmes?focus=Leadership" className="relative aspect-[16/10] bg-gradient-to-br from-[#FAFAFA] to-[#FAFAFA] p-4 flex items-center justify-center border-b border-gray-100 cursor-pointer">
                    <Illustration src="/illustrations/14-idea-leadership.png" alt="Illustration: a professional holding up a lit idea" className="ill w-full h-auto object-contain" />

                    <span className="absolute top-4 left-4 bg-[#242424] text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-charcoal-700">
                      Leadership
                    </span>
                  </Link>

                  <div className="p-6">
                    <Link href="/programmes?focus=Leadership" className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition mb-2 cursor-pointer">
                      Leadership & Presence Development
                    </Link>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Lead conversations, decisions, and teams with emotional intelligence, purpose, and authentic executive gravity.
                    </p>

                    <div className="flex items-center text-xs text-gray-500 py-3 border-y border-gray-100 mb-2">
                      <span><Icon name="clock" className="mr-1.5 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />5 weeks</span>
                      <span className="mx-3 text-gray-300">•</span>
                      <span><Icon name="folder-open" className="mr-1.5 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />10 lessons</span>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500">Next cohort soon</span>
                  <Link href="/programmes?focus=Leadership" className="text-xs font-bold text-gray-900 hover:text-emerald-600 flex items-center cursor-pointer">
                    <span>Learn More</span>
                    <Icon name="arrow-right" className="ml-1.5 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. MEET YOUR COACH (Hand-Drawn Mentorship Canvas - No Identifiable Faces) */}
        {/* ========================================================================= */}
        <section className="py-24 bg-white" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left: Prominent Hand-Drawn Mentorship & Coaching Scene (TeachFlex Style) */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md">

                  {/* Organic Hand-Drawn Decorative Backdrop */}
                  <div className="absolute -top-4 -left-4 w-full h-full rounded-[2.5rem] bg-emerald-50/70 border-2 border-dashed border-emerald-300/80 -z-0"></div>

                  {/* Grand Hand-Drawn Mentorship Artwork Canvas */}
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-2 border-white bg-gradient-to-b from-[#FAFAFA] via-[#FAFAFA] to-[#F2F2F2] p-6 flex flex-col justify-between z-10">

                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full border border-emerald-200">
                        Lead Coach • EMCC Practitioner
                      </span>
                      <span className="text-xs text-emerald-700 font-bold">12+ Years Experience</span>
                    </div>

                    {/* Large TeachFlex Coach & Mentee Interactive Dialogue SVG */}
                    <div className="my-auto py-2 flex items-center justify-center">
                      <Illustration src="/illustrations/topic-coaching-mentoring-topic.png" alt="Illustration: a coach and a colleague working an idea through together" className="ill w-full h-auto" />
                    </div>

                    {/* Clean Overlay Badge */}
                    <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-md border border-gray-100 text-left flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">Founder & Lead Coach</span>
                        <div className="text-base font-bold text-gray-900 mt-0.5">Sonia Ali</div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded-full border border-emerald-200/60">EMCC & CPD</span>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              {/* Right: Dark Forest Green Card */}
              <div className="lg:col-span-7 bg-[#242424] p-8 sm:p-12 rounded-3xl text-white shadow-xl relative overflow-hidden">

                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-4">
                  Meet Your Coach
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug mb-6">
                  “Potential grows when people feel seen, supported and challenged.”
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                  <p>
                    With over a decade of experience supporting graduates, professionals, managers, and senior leaders, Sonia Ali founded Start SAH to offer genuine developmental coaching that respects where you are starting from.
                  </p>
                  <p>
                    Whether you are preparing for your first step up, finding your professional voice in English, or navigating high-stakes team dynamics—every programme combines empathetic human insight with practical tools you can apply immediately.
                  </p>
                </div>

                <div className="pt-8 flex flex-wrap gap-4 items-center">
                  <Link href="/about" className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow transition duration-200 inline-flex items-center cursor-pointer">
                    <span>Meet Your Coach / Trainer</span>
                    <Icon name="arrow-right" className="ml-2 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  </Link>
                  <Link href="/coaching" className="border border-emerald-700/80 hover:border-emerald-400 text-emerald-200 font-semibold px-6 py-3.5 rounded-full text-sm transition duration-200 inline-flex items-center cursor-pointer">
                    <span>How 1-on-1 Coaching Works</span>
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 7. DUAL PATHWAYS (With Hand-Drawn Progression Vignettes) */}
        <section className="py-20 bg-slate-50/60 border-y border-gray-100" id="coaching">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Tailored Pathways</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 tracking-tight">Two distinct ways to grow with Start SAH</h2>
              <p className="text-base text-gray-600 mt-2">Whether you are an individual shaping your career or an organisation building human capability.</p>
            </div>

            {/* Dual Clean Cards with Hand-Drawn Character Illustrations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Left: For Individuals (Mint Card with Hand-Drawn Person Progressing) */}
              <div className="bg-[#FAFAFA] border border-emerald-200/80 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between group hover:shadow-md transition duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-white px-3 py-1 rounded-full border border-emerald-200">
                      For Individuals
                    </span>
                    <span className="text-xs font-semibold text-emerald-600">Graduates • Professionals • Leaders</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2 mb-3">
                    Where are you now?<br />Where do you want to be?
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Clarify your next step, build genuine communication confidence, and master the skills that unlock your progression.
                  </p>

                  {/* Hand-drawn Illustration: Individual ascending pathway */}
                  <div className="ill-stage mb-8">
                    <Illustration src="/illustrations/02-career-pathways.png" alt="Illustration: a professional pausing at a signpost, weighing which direction to take" className="ill w-full h-auto max-h-44" />
                  </div>
                </div>

                <div>
                  <Link href="/coaching" className="w-full sm:w-auto bg-white hover:bg-emerald-600 text-gray-900 hover:text-white border border-gray-200 font-semibold py-3.5 px-8 rounded-full shadow-sm transition duration-200 text-center inline-flex items-center justify-center cursor-pointer text-sm">
                    <span>Explore Individual Coaching</span>
                    <Icon name="arrow-right" className="ml-2 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  </Link>
                </div>
              </div>

              {/* Right: For Organisations (Dark Forest Green Card with Collaborative Team Illustration) */}
              <div className="bg-[#242424] text-white rounded-3xl p-8 sm:p-10 shadow-md flex flex-col justify-between group hover:shadow-xl transition duration-300" id="organisational">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-charcoal-900/80 px-3 py-1 rounded-full border border-charcoal-700">
                      For Organisations
                    </span>
                    <span className="text-xs font-semibold text-emerald-300">Teams • Managers • Workforces</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-3">
                    Develop your workforce, teams<br />& leadership.
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Create tailored learning that responds to your people, culture, and strategic goals with CPD-accredited programmes.
                  </p>

                  {/* Hand-drawn Illustration: Collaborative Team around Table */}
                  <div className="on-ink ill-stage ill-stage--bare mb-8">
                    <Illustration src="/illustrations/topic-teamwork-culture.png" alt="Illustration: a team working side by side around a shared table" className="ill w-full h-auto max-h-44" />
                  </div>
                </div>

                <div>
                  <Link href="/organisational-development" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3.5 px-8 rounded-full shadow transition duration-200 text-center inline-flex items-center justify-center cursor-pointer text-sm">
                    <span>Discuss Your Training Needs</span>
                    <Icon name="arrow-right" className="ml-2 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 8. LEAD MAGNET / COMMUNITY OPT-IN (With Hand-Drawn Workbook Vignette) */}
        <section className="py-20 bg-white" id="leadMagnetSection">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-sm text-center bg-slate-50/50 relative overflow-hidden">

              <div className="max-w-2xl mx-auto relative z-10">
                {/* Hand-drawn Sprout & Booklet Vignette */}
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-2xl border border-emerald-100 shadow-xs flex items-center justify-center">
                  <Icon name="seedling" className="text-emerald-600 text-3xl inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                </div>

                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                  Free Development Resource
                </span>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2 tracking-tight">
                  Unlock Your Growth Potential
                </h2>

                <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
                  Get our practical 5-step development workbook plus an invitation to our next interactive masterclass.
                </p>

                {/* Clean Inline Form */}
                <form id="leadMagnetForm" onSubmit={(event) => { handleLeadMagnetSubmit(event) }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
                  <input type="email" required placeholder="Enter your email address" className="w-full px-5 py-3.5 rounded-full border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm outline-none transition bg-white" id="leadEmail" />
                  <button type="submit" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-7 py-3.5 rounded-full shadow-sm hover:shadow transition duration-200 whitespace-nowrap text-sm cursor-pointer" id="leadSubmitBtn">
                    Send My Guide
                  </button>
                </form>

                <div id="leadSuccessMsg" className="hidden mt-4 p-3 bg-emerald-50 text-emerald-800 rounded-2xl text-xs font-medium border border-emerald-200">
                  <Icon name="check" className="mr-1.5 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Thank you! Your development guide has been sent to your email.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 9. TRANSFORMATION STORIES (Real growth. Meaningful outcomes .) */}
        <section className="py-20 bg-slate-50/60 border-y border-gray-100" id="testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-left mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Transformation Stories
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 tracking-tight">
                Real growth. Meaningful outcomes.
              </h2>
            </div>

            {/* 3 Clean White Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Story 1 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-200/80 hover:border-emerald-300 shadow-sm transition duration-200 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex text-emerald-500 text-xs">
                    <Icon name="star" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><Icon name="star" className="ml-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><Icon name="star" className="ml-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><Icon name="star" className="ml-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><Icon name="star" className="ml-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed font-normal">
                    "Working with Sonia completely transformed how I present in board meetings. My confidence and clarity shifted within weeks."
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100 mt-6">
                  <div className="font-bold text-gray-900 text-sm">Karim M.</div>
                  <div className="text-xs text-gray-500 mt-0.5">VP of Technology, London</div>
                </div>
              </div>

              {/* Story 2 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-200/80 hover:border-emerald-300 shadow-sm transition duration-200 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex text-emerald-500 text-xs">
                    <Icon name="star" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><Icon name="star" className="ml-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><Icon name="star" className="ml-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><Icon name="star" className="ml-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><Icon name="star" className="ml-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed font-normal">
                    "The Professional English cohort gave me the nuance and credibility to lead multi-country negotiations without hesitating."
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100 mt-6">
                  <div className="font-bold text-gray-900 text-sm">Elena R.</div>
                  <div className="text-xs text-gray-500 mt-0.5">Global Operations Director, Zurich</div>
                </div>
              </div>

              {/* Story 3 */}
              <div className="bg-white rounded-2xl p-7 border border-gray-200/80 hover:border-emerald-300 shadow-sm transition duration-200 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex text-emerald-500 text-xs">
                    <Icon name="star" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><Icon name="star" className="ml-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><Icon name="star" className="ml-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><Icon name="star" className="ml-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><Icon name="star" className="ml-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed font-normal">
                    "Start SAH designed a bespoke leadership academy for our managers. Cross-team psychological safety and retention skyrocketed."
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100 mt-6">
                  <div className="font-bold text-gray-900 text-sm">Marcus L.</div>
                  <div className="text-xs text-gray-500 mt-0.5">Scale-Up Managing Director</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 10. IDEAS FOR GROWTH / INSIGHTS & CONVERSATIONS */}
        <section className="py-20 bg-white" id="podcast">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                  Ideas For Growth
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 tracking-tight">
                  Insights & conversations
                </h2>
              </div>
              <div>
                <Link href="/insights" className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 cursor-pointer">
                  <span>Browse all insights</span>
                  <Icon name="arrow-right" className="ml-2 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                </Link>
              </div>
            </div>

            {/* 3 Clean Insight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Insight 1 (Article) */}
              <Link href="/insights" className="bg-white rounded-2xl p-7 border border-gray-200/80 hover:border-emerald-300 shadow-sm transition duration-200 flex flex-col justify-between group cursor-pointer">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">Article</span>
                    <span className="text-xs text-gray-400">5 min read</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-600 transition mb-2">
                    The Art of Speaking Less to Communicate More
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Why succinct articulation builds higher executive credibility than lengthy presentations.
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-600 group-hover:underline">Read Article</span>
                  <Icon name="arrow-right" className="text-xs text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                </div>
              </Link>

              {/* Insight 2 (Podcast) */}
              <Link href="/insights" className="bg-white rounded-2xl p-7 border border-gray-200/80 hover:border-emerald-300 shadow-sm transition duration-200 flex flex-col justify-between group cursor-pointer">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">Podcast • Ep. 24</span>
                    <span className="text-xs text-gray-400">28 min</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-600 transition mb-2">
                    Overcoming The Silent Wall of Imposter Syndrome
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Actionable techniques to step into bigger rooms without doubting your right to be there.
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-600 group-hover:underline">Listen Episode</span>
                  <Icon name="play" className="text-xs text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                </div>
              </Link>

              {/* Insight 3 (Article) */}
              <Link href="/insights" className="bg-white rounded-2xl p-7 border border-gray-200/80 hover:border-emerald-300 shadow-sm transition duration-200 flex flex-col justify-between group cursor-pointer">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">Article</span>
                    <span className="text-xs text-gray-400">7 min read</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-600 transition mb-2">
                    Navigating Culture and Hierarchy in Global Teams
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    How cross-border leaders build trust across diverse organizational dynamics.
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-600 group-hover:underline">Read Article</span>
                  <Icon name="arrow-right" className="text-xs text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* 11. PRE-FOOTER CALL TO ACTION BANNER (Dark Forest Green with Hand-Drawn Progression Element) */}
        <section className="py-20 bg-[#242424] text-center text-white relative overflow-hidden">

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Hand-drawn Duo Stepping Forward Illustration */}
            <div className="flex justify-center mb-6">
              <Illustration src="/illustrations/18-next-step.png" alt="Illustration: a professional stepping up onto the next block towards the one after it" className="ill w-full h-auto max-h-36" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Your Development Starts Here.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed mb-8">
              Choose the pathway that fits where you are today—or start a conversation and we will shape it together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/programmes" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-3.5 rounded-full shadow transition duration-200 cursor-pointer text-sm">
                Explore Programmes
              </Link>
              <Link href="/contact" className="w-full sm:w-auto border border-emerald-700/80 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition duration-200 cursor-pointer text-sm">
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </section>



        {/* ========================================================================= */}
        {/* PAGE 2: PROGRAMME / COURSE SINGLE PAGE TEMPLATE (LearnPress LMS Standard) */}
        {/* ========================================================================= */}
    </>
  );
}
