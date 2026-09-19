'use client';

import Link from 'next/link';
import Illustration from '@/components/Illustration';
import Icon from '@/components/Icon';

export default function CoachingPage() {
  return (
    <>

          {/* Breadcrumbs */}
          <div className="bg-white border-b border-gray-100 py-3.5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex text-xs font-medium text-gray-500 items-center space-x-2">
                <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-900 font-semibold">1-on-1 Coaching & Mentorship</span>
              </nav>
            </div>
          </div>

          {/* 1:1 Coaching Hero */}
          <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60">
                    Personalised Growth
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    One-on-One Mentorship Tailored to <span className="text-emerald-600">Your Progression</span>.
                  </h1>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Whether you are a graduate entering a competitive environment, a professional seeking to speak up with clarity, or an emerging leader taking on a team—our 1-on-1 coaching gives you the exact focus and practical sparring you need.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center space-x-3 text-sm text-gray-700 font-medium">
                      <Icon name="circle-check" className="text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      <span>A supportive, non-judgmental space to identify your strengths and blind spots</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-700 font-medium">
                      <Icon name="circle-check" className="text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      <span>Practical rehearsal for real upcoming conversations, interviews, or team briefings</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-700 font-medium">
                      <Icon name="circle-check" className="text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      <span>Direct guidance from Sonia Ali with actionable takeaways between every session</span>
                    </div>
                  </div>
                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link href="/start-your-development?focus=1%3A1%20Coaching%20with%20Sonia%20Ali" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3.5 rounded-full shadow-xs transition text-sm cursor-pointer">
                      Book a 1-on-1 Discovery Chat
                    </Link>
                    <Link href="/resources" className="border border-gray-200 hover:border-gray-900 text-gray-800 font-semibold px-6 py-3.5 rounded-full transition text-sm cursor-pointer">
                      Take Free Speech Diagnostic
                    </Link>
                  </div>
                </div>

                {/* Right: one large illustration, with the practical detail beneath it */}
                <div className="lg:col-span-5">
                  <div className="max-w-lg mx-auto">
                    <div className="ill-stage ill-stage--green">
                      <Illustration src="/illustrations/05-new-ideas.svg" alt="Illustration: a professional at a laptop reaching up towards a lit idea" className="ill ill-lg" />
                    </div>

                    <div className="mt-8">
                      <span className="text-xs uppercase font-bold tracking-widest text-emerald-700 block mb-2">Human-centred approach</span>
                      <h3 className="text-xl font-bold text-gray-900 tracking-tight">Support built around you</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mt-3">
                        No cookie-cutter scripts. We look at your exact context, your workplace dynamics, and your natural style &mdash; helping you overcome nerves and develop genuine, lasting confidence.
                      </p>
                    </div>

                    <dl className="grid grid-cols-2 gap-6 pt-5 mt-5 border-t hairline">
                      <div>
                        <dt className="text-base font-extrabold text-gray-900">45 &ndash; 60 min</dt>
                        <dd className="text-xs text-gray-500 font-medium mt-0.5">Focused sessions</dd>
                      </div>
                      <div>
                        <dt className="text-base font-extrabold text-emerald-700">100% custom</dt>
                        <dd className="text-xs text-gray-500 font-medium mt-0.5">Built around your role</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who this is for ==================================================== */}
          <section className="py-20 lg:py-28 band-off border-y hairline">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Who this is for</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">Coaching meets you where you are</h2>
                <div className="rule-green mt-6"></div>
                <p className="text-gray-600 mt-6 leading-relaxed">
                  The same conversation looks different at every career stage. What stays constant is starting from where you actually are, not from a syllabus.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 mt-16">
                <div>
                  <span className="text-2xl font-extrabold text-emerald-600">01</span>
                  <h3 className="font-bold text-gray-900 text-lg mt-3">Graduates</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-2">Entering the workplace, translating study into professional language, and getting through interviews without shrinking.</p>
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-emerald-600">02</span>
                  <h3 className="font-bold text-gray-900 text-lg mt-3">Professionals</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-2">Doing strong work that is not landing, and needing the vocabulary and presence to make it visible.</p>
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-emerald-600">03</span>
                  <h3 className="font-bold text-gray-900 text-lg mt-3">Emerging leaders</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-2">Stepping into a first team, learning to delegate, and handling the conversations that come with it.</p>
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-emerald-600">04</span>
                  <h3 className="font-bold text-gray-900 text-lg mt-3">Senior managers</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-2">Holding the room in board settings, in a second language, across cultures, under real pressure.</p>
                </div>
              </div>
            </div>
          </section>

          {/* How the coaching runs ============================================= */}
          <section className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                <div className="lg:col-span-7 order-2 lg:order-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">How it runs</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">A working session, not a lecture</h2>
                  <div className="rule-green mt-6"></div>

                  <ol className="mt-10 space-y-8">
                    <li className="flex gap-5">
                      <span className="shrink-0 text-2xl font-extrabold text-emerald-600 leading-none w-10">01</span>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">Discovery chat</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mt-1 max-w-lg">A free 20-minute conversation to understand your situation and agree whether coaching is the right answer at all.</p>
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <span className="shrink-0 text-2xl font-extrabold text-emerald-600 leading-none w-10">02</span>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">Set the target</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mt-1 max-w-lg">We name the specific outcome &mdash; the presentation, the interview, the team you are about to lead &mdash; and what changing it would be worth.</p>
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <span className="shrink-0 text-2xl font-extrabold text-emerald-600 leading-none w-10">03</span>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">Rehearse it for real</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mt-1 max-w-lg">You practise the actual conversation, with feedback in the moment, until it stops feeling like a performance.</p>
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <span className="shrink-0 text-2xl font-extrabold text-emerald-600 leading-none w-10">04</span>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">Review what happened</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mt-1 max-w-lg">After the real event we look at what worked, what did not, and what to carry into the next one.</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="lg:col-span-5 order-1 lg:order-2">
                  <div className="ill-stage">
                    <Illustration src="/illustrations/11-time-focus.svg" alt="Illustration: a professional working to time at a laptop beside a clock" className="ill ill-lg" />
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* What you develop ================================================== */}
          <section className="on-ink py-20 lg:py-28 band-ink">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                <div className="lg:col-span-5">
                  <div className="ill-stage ill-stage--bare">
                    <Illustration src="/illustrations/14-idea-leadership.svg" alt="Illustration: a professional holding up a lit idea" className="ill ill-lg" />
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">What you develop</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">Capability you can use on Monday</h2>
                  <div className="rule-green mt-6"></div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mt-10">
                    <div>
                      <h3 className="font-bold text-white text-base">Speaking with authority</h3>
                      <p className="text-sm text-gray-300 leading-relaxed mt-1.5">Pace, pause and phrasing that hold a room without raising your voice.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Difficult conversations</h3>
                      <p className="text-sm text-gray-300 leading-relaxed mt-1.5">Disagreeing upward, giving feedback, and staying composed when pushed.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Professional English</h3>
                      <p className="text-sm text-gray-300 leading-relaxed mt-1.5">The register, idiom and directness that international workplaces expect.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Self-awareness</h3>
                      <p className="text-sm text-gray-300 leading-relaxed mt-1.5">Recognising your own patterns early enough to choose a different one.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Career direction</h3>
                      <p className="text-sm text-gray-300 leading-relaxed mt-1.5">Naming what you are actually working towards, and what to say no to.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Leading others</h3>
                      <p className="text-sm text-gray-300 leading-relaxed mt-1.5">Delegating, coaching your own team, and holding people to a standard kindly.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Formats =========================================================== */}
          <section className="py-20 lg:py-28 band-off border-y hairline">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Formats</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">Three ways to work together</h2>
                <div className="rule-green mt-6"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 mt-16">
                <div className="border-t-2 border-charcoal-800 pt-6">
                  <h3 className="font-extrabold text-gray-900 text-xl">Single session</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-3">One 60-minute session ahead of a specific event &mdash; an interview, a panel, a board presentation.</p>
                  <ul className="mt-6 space-y-2.5 text-sm text-gray-700">
                    <li className="flex gap-2.5"><Icon name="check" className="text-emerald-600 mt-1 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><span>Online or in person</span></li>
                    <li className="flex gap-2.5"><Icon name="check" className="text-emerald-600 mt-1 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><span>Written summary afterwards</span></li>
                    <li className="flex gap-2.5"><Icon name="check" className="text-emerald-600 mt-1 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><span>No commitment beyond it</span></li>
                  </ul>
                  <p className="mt-6 text-sm font-bold text-gray-900">&pound;180 <span className="font-medium text-gray-500">per session</span></p>
                </div>

                <div className="border-t-2 border-emerald-600 pt-6">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">Most chosen</span>
                  <h3 className="font-extrabold text-gray-900 text-xl mt-1">Six-session programme</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-3">Fortnightly sessions over three months, built around one goal you want to have reached by the end.</p>
                  <ul className="mt-6 space-y-2.5 text-sm text-gray-700">
                    <li className="flex gap-2.5"><Icon name="check" className="text-emerald-600 mt-1 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><span>Agreed outcome and review points</span></li>
                    <li className="flex gap-2.5"><Icon name="check" className="text-emerald-600 mt-1 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><span>Practice tasks between sessions</span></li>
                    <li className="flex gap-2.5"><Icon name="check" className="text-emerald-600 mt-1 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><span>Email support throughout</span></li>
                  </ul>
                  <p className="mt-6 text-sm font-bold text-gray-900">&pound;950 <span className="font-medium text-gray-500">per programme</span></p>
                </div>

                <div className="border-t-2 border-charcoal-800 pt-6">
                  <h3 className="font-extrabold text-gray-900 text-xl">Sponsored by your employer</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-3">Coaching arranged and paid for by your organisation, for one person or a small group of managers.</p>
                  <ul className="mt-6 space-y-2.5 text-sm text-gray-700">
                    <li className="flex gap-2.5"><Icon name="check" className="text-emerald-600 mt-1 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><span>Objectives agreed with HR</span></li>
                    <li className="flex gap-2.5"><Icon name="check" className="text-emerald-600 mt-1 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><span>Progress reported without breaking confidence</span></li>
                    <li className="flex gap-2.5"><Icon name="check" className="text-emerald-600 mt-1 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /><span>Invoiced to the organisation</span></li>
                  </ul>
                  <p className="mt-6 text-sm font-bold text-gray-900">On enquiry</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs ============================================================== */}
          <section className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                <div className="lg:col-span-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Common questions</span>
                  <h2 className="text-3xl font-extrabold text-gray-900 mt-3 tracking-tight">Before you book</h2>
                  <div className="rule-green mt-6"></div>
                  <p className="text-sm text-gray-600 leading-relaxed mt-6">
                    If your question is not here, the discovery chat is free and there is no obligation at the end of it.
                  </p>
                </div>

                <div className="lg:col-span-8 divide-y divide-charcoal-200">
                  <div className="py-6">
                    <h3 className="font-bold text-gray-900">Is coaching only for people with a problem?</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-2">No. Most people arrive because something specific is coming up &mdash; a promotion, a move abroad, a first management role &mdash; and they want to meet it well rather than recover from it afterwards.</p>
                  </div>
                  <div className="py-6">
                    <h3 className="font-bold text-gray-900">Does my English need to be at a certain level?</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-2">If you can hold a working conversation, you are ready. Coaching works on how you use the English you already have under pressure, which is usually the real gap.</p>
                  </div>
                  <div className="py-6">
                    <h3 className="font-bold text-gray-900">Is it online or face to face?</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-2">Either. Most sessions run online, which suits people working across time zones. In-person sessions are available in Saudi Arabia and the UK by arrangement.</p>
                  </div>
                  <div className="py-6">
                    <h3 className="font-bold text-gray-900">What if my employer is paying?</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-2">We agree the objectives with whoever is sponsoring it, then report on progress against those objectives only. What is said in the sessions stays in the sessions.</p>
                  </div>
                  <div className="py-6">
                    <h3 className="font-bold text-gray-900">Can we work in Arabic?</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-2">Sessions run in English, which is usually the point. Arabic-language programmes are on the roadmap &mdash; ask and we will tell you where that has got to.</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Closing CTA ======================================================= */}
          <section className="py-20 lg:py-28 band-off border-t hairline">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Start with a conversation</h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Twenty minutes, no cost, and an honest answer about whether coaching is what you need.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <Link href="/start-your-development?focus=1%3A1%20Coaching%20with%20Sonia%20Ali" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3.5 rounded-full transition text-sm cursor-pointer">
                  Book a discovery chat
                </Link>
                <Link href="/organisational-development" className="border border-charcoal-300 hover:border-charcoal-800 text-gray-800 font-semibold px-7 py-3.5 rounded-full transition text-sm cursor-pointer">
                  Coaching for our team
                </Link>
              </div>
            </div>
          </section>



        {/* ========================================================================= */}
        {/* PAGE 7: START YOUR DEVELOPMENT (Lovable Clean Light Style) */}
        {/* ========================================================================= */}
    </>
  );
}
