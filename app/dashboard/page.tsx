'use client';

import Link from 'next/link';
import Illustration from '@/components/Illustration';
import Icon from '@/components/Icon';
import { addToCalendar, downloadCourseSyllabus, downloadOfficialPdf, downloadVatInvoice, filterDashboardCourses, handleStudentProfileSave, joinCohortZoom, playReplayVideo, shareCertificateLinkedIn, switchStudentDashboardTab, toggleCoachVoiceNote, viewQuizBreakdown } from '@/lib/ui';

export default function DashboardPage() {
  return (
    <>

          {/* Breadcrumbs */}
          <div className="bg-white border-b border-gray-150 py-3.5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex text-xs font-medium text-gray-500 items-center space-x-2">
                <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-500">My Account</span>
                <span className="text-gray-300">/</span>
                <span className="text-gray-900 font-semibold">Student Learning Dashboard (LearnPress LMS)</span>
              </nav>
            </div>
          </div>

          {/* Eduma Profile Header Banner (Clean Lovable Minimalist Layout) */}
          <div className="bg-white border-b border-gray-150">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                {/* Student Avatar & Credentials */}
                <div className="flex items-center space-x-5">
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-emerald-700 to-emerald-500 text-white flex items-center justify-center text-2xl sm:text-3xl font-semibold shadow-sm border border-emerald-600/30">
                      MV
                    </div>
                    <span className="absolute bottom-0 right-0 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full" title="Active Online"></span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">Marcus Vance</h1>
                      <span className="bg-emerald-50 text-gray-500 border border-emerald-200/80 text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        CPD Verified Learner
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">
                      Senior Director of Operations • FinTech Global UK
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mt-2">
                      <span><Icon name="id-badge" className="mr-1 text-gray-500 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Learner ID: #SAH-8829</span>
                      <span>•</span>
                      <span><Icon name="calendar" className="mr-1 text-gray-500 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Enrolled: Oct 2025</span>
                      <span>•</span>
                      <span><Icon name="graduation-cap" className="mr-1 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Executive English Cohort</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <Link href="/courses/english-for-professional-success" className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-xs transition flex items-center cursor-pointer">
                    <Icon name="circle-play" className="mr-2 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    <span>Resume Active Lesson</span>
                  </Link>
                  <button onClick={() => { switchStudentDashboardTab('dash-certificates') }} className="border border-gray-200 hover:border-gray-300 text-gray-800 text-xs font-semibold px-4 py-2.5 rounded-full transition flex items-center bg-white cursor-pointer">
                    <Icon name="award" className="mr-2 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    <span>My Certificates (2)</span>
                  </button>
                </div>

              </div>

              {/* 4 Clean Metric Cards (Lovable AI Style) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100">
                <div className="bg-slate-50/60 p-5 rounded-2xl border border-gray-200/80">
                  <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Enrolled Programmes</span>
                  <div className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-1">3</div>
                  <span className="text-[11px] text-emerald-600 font-semibold">1 Active Cohort</span>
                </div>
                <div className="bg-slate-50/60 p-5 rounded-2xl border border-gray-200/80">
                  <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Active Progress</span>
                  <div className="text-2xl sm:text-3xl font-semibold text-emerald-600 mt-1">64%</div>
                  <span className="text-[11px] text-gray-500 font-semibold">14 of 22 Lessons Completed</span>
                </div>
                <div className="bg-slate-50/60 p-5 rounded-2xl border border-gray-200/80">
                  <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Completed & Passed</span>
                  <div className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-1">2</div>
                  <span className="text-[11px] text-emerald-600 font-semibold">Average Grade: 94%</span>
                </div>
                <div className="bg-slate-50/60 p-5 rounded-2xl border border-gray-200/80">
                  <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">CPD Certificates</span>
                  <div className="text-2xl sm:text-3xl font-semibold text-emerald-600 mt-1">2</div>
                  <span className="text-[11px] text-gray-500 font-semibold">UK Standards Accredited</span>
                </div>
              </div>

            </div>
          </div>

          {/* Eduma Theme Tab Navigation Bar */}
          <div className="bg-white border-b border-gray-150 sticky top-16 sm:top-20 z-20 shadow-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar">
              <div className="flex space-x-1 sm:space-x-4 text-xs sm:text-sm font-semibold whitespace-nowrap py-1">
                <button onClick={() => { switchStudentDashboardTab('dash-overview') }} id="tabBtn-dash-overview" className="student-dash-tab-btn px-4 py-3 border-b-2 border-emerald-600 text-emerald-700 font-semibold transition flex items-center cursor-pointer">
                  <Icon name="chart-pie" className="mr-2 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Dashboard Overview
                </button>
                <button onClick={() => { switchStudentDashboardTab('dash-courses') }} id="tabBtn-dash-courses" className="student-dash-tab-btn px-4 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 transition flex items-center cursor-pointer">
                  <Icon name="book-open" className="mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> My Enrolled Courses (3)
                </button>
                <button onClick={() => { switchStudentDashboardTab('dash-quizzes') }} id="tabBtn-dash-quizzes" className="student-dash-tab-btn px-4 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 transition flex items-center cursor-pointer">
                  <Icon name="list-check" className="mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Quizzes & Diagnostics (2)
                </button>
                <button onClick={() => { switchStudentDashboardTab('dash-certificates') }} id="tabBtn-dash-certificates" className="student-dash-tab-btn px-4 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 transition flex items-center cursor-pointer">
                  <Icon name="certificate" className="mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> CPD Certificates (2)
                </button>
                <button onClick={() => { switchStudentDashboardTab('dash-live') }} id="tabBtn-dash-live" className="student-dash-tab-btn px-4 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 transition flex items-center cursor-pointer">
                  <Icon name="video" className="mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Live Cohorts with Sonia
                </button>
                <button onClick={() => { switchStudentDashboardTab('dash-invoices') }} id="tabBtn-dash-invoices" className="student-dash-tab-btn px-4 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 transition flex items-center cursor-pointer">
                  <Icon name="receipt" className="mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Orders & Invoices
                </button>
                <button onClick={() => { switchStudentDashboardTab('dash-settings') }} id="tabBtn-dash-settings" className="student-dash-tab-btn px-4 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 transition flex items-center cursor-pointer">
                  <Icon name="gear" className="mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Profile Settings
                </button>
              </div>
            </div>
          </div>

          {/* Tab Contents Container with Generous Whitespace */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            {/* TAB 1: OVERVIEW */}
            <div id="dashPane-dash-overview" className="student-dash-pane space-y-8">

              {/* Currently Active Course Banner (Clean Lovable Box) */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/90 shadow-xs">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-gray-100">
                  <div>
                    <span className="text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-gray-500 border border-emerald-200/60">
                      Current Active Programme
                    </span>
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-3">
                      English for Professional Success: Cross-Cultural Leadership
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Module 3: High-Stakes Stakeholder Diplomacy • Lesson 3.2: Strategic Linguistic Framing
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-3">
                    <Link href="/courses/english-for-professional-success" className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-5 py-2.5 rounded-full shadow-xs transition flex items-center cursor-pointer">
                      <span>Resume Lesson 3.2</span>
                      <Icon name="arrow-right" className="ml-2 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </Link>
                    <button onClick={() => { downloadCourseSyllabus() }} className="border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold text-xs px-4 py-2.5 rounded-full transition flex items-center bg-white cursor-pointer" title="Download Course Syllabus PDF">
                      <Icon name="download" className="mr-1.5 text-gray-500 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Syllabus
                    </button>
                  </div>
                </div>

                {/* Progress Bar & Milestone Status */}
                <div className="pt-6">
                  <div className="flex items-center justify-between text-xs font-semibold mb-2">
                    <span className="text-gray-800">Overall Course Completion: 64%</span>
                    <span className="text-emerald-600 font-semibold">14 of 22 Lessons Finished</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[64%] rounded-full transition-all duration-500"></div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-gray-500 mt-3 font-medium">
                    <span><Icon name="check" className="text-emerald-500 mr-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Pass Requirement: 80% on All Module Quizzes</span>
                    <span><Icon name="clock" className="mr-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Estimated remaining study time: ~4 hours</span>
                    <span><Icon name="shield-halved" className="text-emerald-600 mr-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />CPD UK Certificate unlocked at 100%</span>
                  </div>
                </div>
              </div>

              {/* 2-Column Grid: Upcoming Live Call & Recent Feedback from Sonia */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Upcoming Cohort Call (7 cols) */}
                <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/90 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold uppercase px-3 py-1 rounded-full bg-emerald-50 text-gray-500 flex items-center border border-emerald-200">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse mr-2"></span>
                        Next Live Masterclass
                      </span>
                      <span className="text-xs font-semibold text-gray-500 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-150">Thursday, 18:00 GMT</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                      Executive Hot-Seat Practice: Pitching to Hostile & Sceptical Stakeholders
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                      Join Sonia Ali and your cohort for live verbal simulation. Breakout verbal drills followed by live individual feedback.
                    </p>
                    <div className="mt-4 p-4 bg-slate-50/60 rounded-xl border border-gray-200 text-xs text-gray-800 space-y-1">
                      <div className="font-semibold text-gray-900">Pre-Session Preparation:</div>
                      <div className="text-gray-500">• Review Module 3, Lesson 3.1 Framework on 3-second strategic pauses.</div>
                      <div className="text-gray-500">• Prepare your 90-second proposal defense summary.</div>
                    </div>
                  </div>
                  <div className="pt-6 mt-6 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    <button onClick={() => { joinCohortZoom() }} className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-5 py-2.5 rounded-full shadow-xs transition flex items-center cursor-pointer">
                      <Icon name="video" className="mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Join Live Zoom Room
                    </button>
                    <button onClick={() => { addToCalendar() }} className="border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold text-xs px-4 py-2.5 rounded-full transition flex items-center bg-white cursor-pointer">
                      <Icon name="calendar-plus" className="mr-1.5 text-gray-500 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Add to Calendar
                    </button>
                  </div>
                </div>

                {/* Private Voice Note Feedback from Sonia Ali (5 cols) */}
                <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/90 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-gray-600 flex items-center justify-center font-semibold text-sm">
                        SA
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900">Sonia Ali (Lead Coach)</h4>
                        <span className="text-[11px] text-gray-500">Audio Feedback on Assignment #3</span>
                      </div>
                    </div>
                    <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 mb-4">
                      <p className="text-xs text-gray-800 leading-relaxed italic">
                        "Marcus, your pacing in the opening 40 seconds was remarkably grounded. Eliminating that upward inflection transformed the statement from a suggestion into an executive decision. Listen to my 45-second coaching note below."
                      </p>
                    </div>

                    {/* Interactive Voice Note Audio Player */}
                    <div className="bg-slate-900 rounded-xl p-4 text-white flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button onClick={(event) => { toggleCoachVoiceNote(event.currentTarget) }} id="coachAudioBtn" className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center hover:bg-emerald-800 transition cursor-pointer">
                          <Icon name="play" className="ml-0.5 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        </button>
                        <div>
                          <span className="text-xs font-semibold block">Sonia's Coaching Note</span>
                          <span className="text-[10px] text-gray-500 font-mono" id="coachAudioTime">0:00 / 0:48</span>
                        </div>
                      </div>
                      <div className="w-24 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div id="coachProgressBar" className="bg-emerald-400 h-full w-0 transition-all duration-200"></div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 text-right">
                    <button onClick={() => { switchStudentDashboardTab('dash-live') }} className="text-xs font-semibold text-emerald-600 hover:text-emerald-700">
                      View All 4 Feedback Logs <Icon name="arrow-right" className="ml-1 text-[10px] inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* TAB 2: MY ENROLLED COURSES */}
            <div id="dashPane-dash-courses" className="student-dash-pane hidden space-y-6">

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-150">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Enrolled LearnPress Courses</h2>
                  <p className="text-xs text-gray-500">Access your active learning materials, quizzes, and completed certifications.</p>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <button onClick={(event) => { filterDashboardCourses('all', event.currentTarget) }} className="course-filter-btn px-3 py-1.5 rounded-full font-semibold bg-emerald-700 text-white cursor-pointer shadow-xs">All (3)</button>
                  <button onClick={(event) => { filterDashboardCourses('active', event.currentTarget) }} className="course-filter-btn px-3 py-1.5 rounded-full font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer">In Progress (1)</button>
                  <button onClick={(event) => { filterDashboardCourses('completed', event.currentTarget) }} className="course-filter-btn px-3 py-1.5 rounded-full font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer">Finished (2)</button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="dashboardCoursesList">

                {/* Course 1: In Progress */}
                <div className="dash-course-card flex flex-col justify-between" data-status="active">
                  <div>
                    <div className="relative ill-stage p-3">
                      <Illustration src="/illustrations/new-15-thobe-window-work.svg" alt="Illustration: a professional in thobe and ghutra working at a laptop by a city window" className="ill ill-card" />
                      <span className="absolute top-3 left-3 bg-emerald-700 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase">
                        In Progress
                      </span>
                      <span className="absolute bottom-3 right-3 bg-black/80 text-white text-[11px] font-semibold px-2 py-0.5 rounded">
                        64% Complete
                      </span>
                    </div>
                    <div className="p-6">
                      <span className="text-[11px] font-semibold uppercase text-gray-500">Executive Communication</span>
                      <h3 className="text-base font-semibold text-gray-900 mt-1 mb-2">English for Professional Success</h3>
                      <p className="text-xs text-gray-500 leading-relaxed mb-4">Master boardroom persuasion, cross-cultural diplomacy, and strategic vocabulary.</p>
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-2">
                        <div className="bg-emerald-500 h-full w-[64%]"></div>
                      </div>
                      <div className="flex justify-between text-[11px] text-gray-500">
                        <span>14 / 22 Lessons</span>
                        <span className="text-emerald-600 font-semibold">Passing Grade: 80%</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <Link href="/courses/english-for-professional-success" className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs py-2.5 rounded-full transition flex items-center justify-center cursor-pointer shadow-xs">
                      <span>Continue Learning</span>
                      <Icon name="arrow-right" className="ml-2 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                    </Link>
                  </div>
                </div>

                {/* Course 2: Completed */}
                <div className="dash-course-card flex flex-col justify-between" data-status="completed">
                  <div>
                    <div className="relative ill-stage p-3">
                      <Illustration src="/illustrations/new-29-abaya-career-path.svg" alt="Illustration: a young professional in abaya setting out along a winding path" className="ill ill-card" />
                      <span className="absolute top-3 left-3 bg-emerald-700 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase">
                        Completed (Grade: 96%)
                      </span>
                      <span className="absolute bottom-3 right-3 bg-emerald-700 text-white text-[11px] font-semibold px-2 py-0.5 rounded">
                        <Icon name="award" className="mr-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />CPD Ready
                      </span>
                    </div>
                    <div className="p-6">
                      <span className="text-[11px] font-semibold uppercase text-gray-500">Presence & Voice</span>
                      <h3 className="text-base font-semibold text-gray-900 mt-1 mb-2">Workplace Gravitas & Vocal Presence</h3>
                      <p className="text-xs text-gray-500 leading-relaxed mb-4">Eliminating upward inflection, managing boardroom silence, and physiological authority.</p>
                      <div className="w-full bg-emerald-100 h-2 rounded-full overflow-hidden mb-2">
                        <div className="bg-emerald-500 h-full w-full"></div>
                      </div>
                      <div className="flex justify-between text-[11px] text-gray-500">
                        <span>18 / 18 Lessons Finished</span>
                        <span className="text-emerald-600 font-semibold">Passed with Distinction</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0 flex gap-2">
                    <Link href="/courses/english-for-professional-success" className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold text-xs py-2 rounded-full transition text-center cursor-pointer">
                      Review Lessons
                    </Link>
                    <button onClick={() => { switchStudentDashboardTab('dash-certificates') }} className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-4 py-2 rounded-full transition flex items-center cursor-pointer">
                      <Icon name="award" className="mr-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Certificate
                    </button>
                  </div>
                </div>

                {/* Course 3: Completed */}
                <div className="dash-course-card flex flex-col justify-between" data-status="completed">
                  <div>
                    <div className="relative ill-stage p-3">
                      <Illustration src="/illustrations/new-27-casual-armchair-work.svg" alt="Illustration: a young professional in smart casual working from an armchair" className="ill ill-card" />
                      <span className="absolute top-3 left-3 bg-emerald-700 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase">
                        Completed (Grade: 92%)
                      </span>
                      <span className="absolute bottom-3 right-3 bg-emerald-700 text-white text-[11px] font-semibold px-2 py-0.5 rounded">
                        <Icon name="award" className="mr-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />CPD Ready
                      </span>
                    </div>
                    <div className="p-6">
                      <span className="text-[11px] font-semibold uppercase text-gray-500">Career Architecture</span>
                      <h3 className="text-base font-semibold text-gray-900 mt-1 mb-2">Executive Speech & Stakeholder Influence</h3>
                      <p className="text-xs text-gray-500 leading-relaxed mb-4">Strategic positioning, salary renegotiation dynamics, and director-level visibility.</p>
                      <div className="w-full bg-emerald-100 h-2 rounded-full overflow-hidden mb-2">
                        <div className="bg-emerald-500 h-full w-full"></div>
                      </div>
                      <div className="flex justify-between text-[11px] text-gray-500">
                        <span>12 / 12 Lessons Finished</span>
                        <span className="text-emerald-600 font-semibold">Passed</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0 flex gap-2">
                    <Link href="/courses/english-for-professional-success" className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold text-xs py-2 rounded-full transition text-center cursor-pointer">
                      Review Lessons
                    </Link>
                    <button onClick={() => { switchStudentDashboardTab('dash-certificates') }} className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-4 py-2 rounded-full transition flex items-center cursor-pointer">
                      <Icon name="award" className="mr-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Certificate
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* TAB 3: QUIZZES & DIAGNOSTICS */}
            <div id="dashPane-dash-quizzes" className="student-dash-pane hidden space-y-6">
              <div className="pb-2 border-b border-gray-150">
                <h2 className="text-xl font-semibold text-gray-900">LearnPress Quizzes & Diagnostics Log</h2>
                <p className="text-xs text-gray-500">View graded assignments, diagnostic scores, and passing benchmark status.</p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50/70 text-gray-800 border-b border-gray-200 uppercase font-semibold text-[11px] tracking-wider">
                      <tr>
                        <th className="py-4 px-6">Quiz / Assessment Name</th>
                        <th className="py-4 px-6">Course</th>
                        <th className="py-4 px-6">Score</th>
                        <th className="py-4 px-6">Passing Mark</th>
                        <th className="py-4 px-6">Status</th>
                        <th className="py-4 px-6 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-600">
                      <tr className="hover:bg-slate-50/50 transition">
                        <td className="py-4 px-6 font-semibold text-gray-900">
                          Boardroom Articulation & Diplomatic Phrasing
                        </td>
                        <td className="py-4 px-6">English for Professional Success</td>
                        <td className="py-4 px-6 font-mono font-semibold text-emerald-600">94 / 100</td>
                        <td className="py-4 px-6 font-mono">80 / 100</td>
                        <td className="py-4 px-6">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-gray-500 font-semibold text-[10px] uppercase border border-emerald-200/60">Passed</span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button onClick={() => { viewQuizBreakdown(1) }} className="text-emerald-600 hover:text-emerald-700 font-semibold cursor-pointer">
                            Review Questions
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition">
                        <td className="py-4 px-6 font-semibold text-gray-900">
                          Vocal Cadence & Strategic Pause Acoustic Test
                        </td>
                        <td className="py-4 px-6">Workplace Gravitas</td>
                        <td className="py-4 px-6 font-mono font-semibold text-emerald-600">96 / 100</td>
                        <td className="py-4 px-6 font-mono">80 / 100</td>
                        <td className="py-4 px-6">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-gray-500 font-semibold text-[10px] uppercase border border-emerald-200/60">Passed</span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button onClick={() => { viewQuizBreakdown(2) }} className="text-emerald-600 hover:text-emerald-700 font-semibold cursor-pointer">
                            Review Questions
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition">
                        <td className="py-4 px-6 font-semibold text-gray-900">
                          C-Suite Stakeholder Objections Simulation
                        </td>
                        <td className="py-4 px-6">English for Professional Success</td>
                        <td className="py-4 px-6 font-mono font-semibold text-emerald-600">Pending Review</td>
                        <td className="py-4 px-6 font-mono">80 / 100</td>
                        <td className="py-4 px-6">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-gray-500 font-semibold text-[10px] uppercase border border-emerald-200">Submitted</span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <span className="text-gray-500">Under Review</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* TAB 4: CPD CERTIFICATES */}
            <div id="dashPane-dash-certificates" className="student-dash-pane hidden space-y-6">
              <div className="pb-2 border-b border-gray-150">
                <h2 className="text-xl font-semibold text-gray-900">Verified CPD UK Accreditations</h2>
                <p className="text-xs text-gray-500">Official, verifiable credentials issued by Start SAH under UK CPD Accreditation Standards.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Certificate Card 1 */}
                <div className="bg-white rounded-2xl border border-emerald-200 p-8 shadow-xs relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-emerald-50 pointer-events-none"></div>
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-semibold text-sm">
                          <Icon name="award" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        </div>
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 block">The CPD Certification Service</span>
                          <span className="text-xs text-gray-500 font-mono">Provider #78291</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold bg-emerald-50 text-gray-500 px-2.5 py-1 rounded-full uppercase border border-emerald-200/60">
                        Verified Active
                      </span>
                    </div>

                    <div className="text-center py-4 border-y border-emerald-200 my-4">
                      <p className="text-[11px] uppercase tracking-wider text-gray-500">This is to certify that</p>
                      <h3 className="text-2xl font-serif font-semibold text-gray-900 mt-1 mb-1">Marcus Vance</h3>
                      <p className="text-xs text-gray-600">has successfully completed all competencies and assessments for:</p>
                      <h4 className="text-base font-semibold text-emerald-700 mt-1">Workplace Gravitas & Vocal Presence</h4>
                      <p className="text-[11px] text-gray-500 mt-1">Awarded 24 CPD Continuing Professional Development Credits</p>
                    </div>

                    <div className="flex justify-between items-center text-[11px] text-gray-500 pt-2 font-mono">
                      <span>Certificate ID: #CPD-UK-2026-84920</span>
                      <span>Issued: 14 January 2026</span>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-3">
                    <button onClick={() => { downloadOfficialPdf('CPD-UK-2026-84920') }} className="flex-1 bg-gray-900 hover:bg-black text-white font-semibold text-xs py-2.5 rounded-full transition flex items-center justify-center cursor-pointer shadow-xs">
                      <Icon name="file-pdf" className="mr-2 text-charcoal-500 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      <span>Download Verified PDF</span>
                    </button>
                    <button onClick={() => { shareCertificateLinkedIn() }} className="border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold text-xs px-4 py-2.5 rounded-full transition flex items-center bg-white cursor-pointer" title="Add to LinkedIn Profile">
                      <Icon name="linkedin" className="text-charcoal-700 mr-1.5 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Share
                    </button>
                  </div>
                </div>

                {/* Certificate Card 2 */}
                <div className="bg-white rounded-2xl border border-emerald-200 p-8 shadow-xs relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-emerald-50 pointer-events-none"></div>
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-semibold text-sm">
                          <Icon name="award" className="inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                        </div>
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 block">The CPD Certification Service</span>
                          <span className="text-xs text-gray-500 font-mono">Provider #78291</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold bg-emerald-50 text-gray-500 px-2.5 py-1 rounded-full uppercase border border-emerald-200/60">
                        Verified Active
                      </span>
                    </div>

                    <div className="text-center py-4 border-y border-emerald-200 my-4">
                      <p className="text-[11px] uppercase tracking-wider text-gray-500">This is to certify that</p>
                      <h3 className="text-2xl font-serif font-semibold text-gray-900 mt-1 mb-1">Marcus Vance</h3>
                      <p className="text-xs text-gray-600">has successfully completed all competencies and assessments for:</p>
                      <h4 className="text-base font-semibold text-emerald-700 mt-1">Executive Speech & Stakeholder Influence</h4>
                      <p className="text-[11px] text-gray-500 mt-1">Awarded 18 CPD Continuing Professional Development Credits</p>
                    </div>

                    <div className="flex justify-between items-center text-[11px] text-gray-500 pt-2 font-mono">
                      <span>Certificate ID: #CPD-UK-2025-72819</span>
                      <span>Issued: 02 December 2025</span>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-3">
                    <button onClick={() => { downloadOfficialPdf('CPD-UK-2025-72819') }} className="flex-1 bg-gray-900 hover:bg-black text-white font-semibold text-xs py-2.5 rounded-full transition flex items-center justify-center cursor-pointer shadow-xs">
                      <Icon name="file-pdf" className="mr-2 text-charcoal-500 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                      <span>Download Verified PDF</span>
                    </button>
                    <button onClick={() => { shareCertificateLinkedIn() }} className="border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold text-xs px-4 py-2.5 rounded-full transition flex items-center bg-white cursor-pointer" title="Add to LinkedIn Profile">
                      <Icon name="linkedin" className="text-charcoal-700 mr-1.5 text-sm inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Share
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* TAB 5: LIVE COHORTS & MASTERCLASSES */}
            <div id="dashPane-dash-live" className="student-dash-pane hidden space-y-6">
              <div className="pb-2 border-b border-gray-150">
                <h2 className="text-xl font-semibold text-gray-900">Live Cohort Coaching Calls with Sonia Ali</h2>
                <p className="text-xs text-gray-500">Upcoming Zoom interactive masterclasses and past recording archives.</p>
              </div>

              <div className="space-y-4">
                {/* Live Session 1 (Upcoming) */}
                <div className="bg-white rounded-2xl p-6 border border-emerald-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="bg-emerald-50 text-gray-500 font-semibold text-[10px] px-2.5 py-0.5 rounded-full uppercase border border-emerald-200">Next Live Call</span>
                      <span className="text-xs text-gray-500 font-semibold">Thursday, 18:00 - 19:30 GMT</span>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900">Executive Hot-Seat Practice: Pitching to Hostile Stakeholders</h3>
                    <p className="text-xs text-gray-600">Breakout verbal drills followed by live individual critiques from Sonia Ali.</p>
                  </div>
                  <div className="shrink-0 flex items-center gap-3">
                    <button onClick={() => { joinCohortZoom() }} className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-5 py-2.5 rounded-full transition cursor-pointer shadow-xs">
                      <Icon name="video" className="mr-1.5 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Join Zoom Call
                    </button>
                  </div>
                </div>

                {/* Live Session 2 (Past Replay) */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="bg-gray-100 text-gray-700 font-semibold text-[10px] px-2.5 py-0.5 rounded-full uppercase">Recording Ready</span>
                      <span className="text-xs text-gray-500">Held 2 Weeks Ago</span>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900">Vocal Cadence & Strategic Pause Acoustic Feedback Review</h3>
                    <p className="text-xs text-gray-600">Cohort review of submitted audio recordings and pitch deconstructions.</p>
                  </div>
                  <div className="shrink-0 flex items-center gap-3">
                    <button onClick={() => { playReplayVideo('Cohort Call 3 Replay') }} className="border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold text-xs px-4 py-2.5 rounded-full transition cursor-pointer flex items-center">
                      <Icon name="play" className="mr-1.5 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Watch Replay (82 min)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* TAB 6: ORDERS & INVOICES */}
            <div id="dashPane-dash-invoices" className="student-dash-pane hidden space-y-6">
              <div className="pb-2 border-b border-gray-150">
                <h2 className="text-xl font-semibold text-gray-900">Orders & Invoices (LearnPress Billing)</h2>
                <p className="text-xs text-gray-500">Download official VAT receipts and transaction records for corporate expense filing.</p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50/70 text-gray-800 border-b border-gray-200 uppercase font-semibold text-[11px] tracking-wider">
                      <tr>
                        <th className="py-4 px-6">Order ID</th>
                        <th className="py-4 px-6">Programme / Item</th>
                        <th className="py-4 px-6">Date</th>
                        <th className="py-4 px-6">Amount</th>
                        <th className="py-4 px-6">Status</th>
                        <th className="py-4 px-6 text-right">Invoice</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-600">
                      <tr className="hover:bg-slate-50/50 transition">
                        <td className="py-4 px-6 font-mono font-semibold text-gray-900">#SAH-10492</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">English for Professional Success (Corporate Cohort)</td>
                        <td className="py-4 px-6">02 Oct 2025</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">£1,450.00</td>
                        <td className="py-4 px-6">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-gray-500 font-semibold text-[10px] uppercase border border-emerald-200/60">Paid</span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button onClick={() => { downloadVatInvoice('SAH-10492') }} className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center justify-end ml-auto cursor-pointer">
                            <Icon name="file-invoice" className="mr-1 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Download PDF
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition">
                        <td className="py-4 px-6 font-mono font-semibold text-gray-900">#SAH-09312</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">Workplace Gravitas & Vocal Presence Accelerator</td>
                        <td className="py-4 px-6">15 Jul 2025</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">£850.00</td>
                        <td className="py-4 px-6">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-gray-500 font-semibold text-[10px] uppercase border border-emerald-200/60">Paid</span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button onClick={() => { downloadVatInvoice('SAH-09312') }} className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center justify-end ml-auto cursor-pointer">
                            <Icon name="file-invoice" className="mr-1 text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Download PDF
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* TAB 7: PROFILE SETTINGS */}
            <div id="dashPane-dash-settings" className="student-dash-pane hidden space-y-6">
              <div className="pb-2 border-b border-gray-150">
                <h2 className="text-xl font-semibold text-gray-900">Student Profile & Preferences</h2>
                <p className="text-xs text-gray-500">Manage your learner identity, CPD certificate name spelling, and notification frequency.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200/90 shadow-xs max-w-3xl">
                <form onSubmit={(event) => { handleStudentProfileSave(event) }} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-gray-800 uppercase mb-2">First Name</label>
                      <input type="text" value="Marcus" required className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-800 uppercase mb-2">Last Name</label>
                      <input type="text" value="Vance" required className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-gray-800 uppercase mb-2">Work Email Address</label>
                      <input type="email" value="m.vance@fintechglobal.co.uk" required className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-800 uppercase mb-2">Professional Title</label>
                      <input type="text" value="Senior Director of Operations" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-800 uppercase mb-2">Organisation / Company</label>
                    <input type="text" value="FinTech Global UK" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-800 uppercase mb-2">CPD Certificate Name Display</label>
                    <input type="text" value="Marcus Vance, BSc (Hons), MBA" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                    <span className="text-[11px] text-gray-500 mt-1 block">Exact wording that will be printed on future CPD certificates.</span>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                    <button type="submit" id="profileSaveBtn" className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-6 py-2.5 rounded-full shadow-xs transition cursor-pointer">
                      Save Profile Changes
                    </button>
                    <span id="profileSaveMsg" className="hidden text-xs text-gray-600 font-semibold">
                      <Icon name="circle-check" className="mr-1 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Changes successfully saved!
                    </span>
                  </div>
                </form>
              </div>
            </div>

          </div>



        {/* ========================================================================= */}
        {/* 11. GLOBAL SITE-WIDE FOOTER (Clean Lovable Minimalist Design) */}
        {/* ========================================================================= */}
    </>
  );
}
