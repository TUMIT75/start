'use client';

import Link from 'next/link';
import Icon from '@/components/Icon';
import { showToast } from '@/lib/ui';

export default function Footer() {
  return (
    <>
        <footer className="bg-[#1A1A1A] text-white pt-16 pb-12 border-t border-emerald-950/60" id="siteFooter">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">

              {/* Col 1: Brand & Identity (4 cols) */}
              <div className="lg:col-span-4 space-y-4">
                <Link href="/" className="flex items-center space-x-3 cursor-pointer group" aria-label="Start SAH Homepage">
                  <img src="/logo-dark.svg" alt="Start SAH Logo" className="h-16 w-auto object-contain transition-transform group-hover:scale-105" />
                </Link>
                <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                  Developing People. Unlocking Potential. Start SAH delivers executive coaching, vocal gravitas, and organisational training aligned with UK CPD standards.
                </p>
                <div className="flex items-center space-x-3 text-gray-400 pt-1">
                  <a href="https://linkedin.com" target="_blank" rel="noopener" className="w-8 h-8 rounded-full bg-white/5 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition"><Icon name="linkedin-in" className="text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /></a>
                  <a href="https://spotify.com" target="_blank" rel="noopener" className="w-8 h-8 rounded-full bg-white/5 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition"><Icon name="spotify" className="text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /></a>
                  <a href="https://youtube.com" target="_blank" rel="noopener" className="w-8 h-8 rounded-full bg-white/5 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition"><Icon name="youtube" className="text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /></a>
                </div>
              </div>

              {/* Col 2: Navigation Links (2 cols) */}
              <div className="lg:col-span-2 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Navigation</h4>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li><Link href="/" className="hover:text-emerald-400 transition">Home</Link></li>
                  <li><Link href="/about" className="hover:text-emerald-400 transition">About Sonia Ali</Link></li>
                  <li><Link href="/courses" className="hover:text-emerald-400 transition">All Courses</Link></li>
                  <li><Link href="/coaching" className="hover:text-emerald-400 transition">1:1 Coaching</Link></li>
                  <li><Link href="/for-organisations" className="hover:text-emerald-400 transition">For Organisations</Link></li>
                  <li><Link href="/insights" className="hover:text-emerald-400 transition">Insights / Podcast</Link></li>
                  <li><Link href="/contact" className="hover:text-emerald-400 transition">Contact</Link></li>
                </ul>
              </div>

              {/* Col 3: Student Learning LMS (3 cols) */}
              <div className="lg:col-span-3 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Student & LMS</h4>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li><Link href="/dashboard" className="hover:text-emerald-400 transition flex items-center font-semibold text-emerald-400"><Icon name="graduation-cap" className="mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Student LMS Dashboard</Link></li>
                  <li><Link href="/courses/english-for-professional-success" className="hover:text-emerald-400 transition">English for Professional Success</Link></li>
                  <li><Link href="/dashboard?focus=dash-certificates" className="hover:text-emerald-400 transition">CPD Certificates</Link></li>
                  <li><Link href="/dashboard?focus=dash-quizzes" className="hover:text-emerald-400 transition">Quizzes & Diagnostics</Link></li>
                  <li><Link href="/dashboard" className="hover:text-emerald-400 transition flex items-center"><Icon name="user" className="mr-1.5 text-gray-500 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />Learner Login (Direct)</Link></li>
                </ul>
              </div>

              {/* Col 4: Contact & Accreditation (3 cols) */}
              <div className="lg:col-span-3 space-y-3 text-xs text-gray-400">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Contact & Standards</h4>
                <p><Icon name="location-dot" className="text-emerald-500 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />London, United Kingdom • Global Virtual Delivery</p>
                <p><Icon name="envelope" className="text-emerald-500 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />contact@startsah.com</p>
                <p><Icon name="phone" className="text-emerald-500 mr-2 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />+44 (0) 20 7946 0912</p>
                <div className="pt-3 border-t border-white/10">
                  <span className="text-[11px] text-gray-500 font-semibold block mb-1">Accredited By:</span>
                  <div className="flex items-center space-x-2 text-gray-300 text-[11px]">
                    <span className="bg-white/5 px-2 py-1 rounded border border-white/10">CPD UK Certified</span>
                    <span className="bg-white/5 px-2 py-1 rounded border border-white/10">EMCC Global</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Sub-Footer */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-3 sm:space-y-0">
              <div>
                © 2025 Start SAH. All rights reserved. Developing People. Unlocking Potential.
              </div>
              <div className="flex space-x-6">
                <a onClick={() => { showToast('Privacy Policy', 'This page is still to be written.') }} className="hover:text-gray-300 transition">Privacy Policy</a>
                <a onClick={() => { showToast('Terms of Service', 'This page is still to be written.') }} className="hover:text-gray-300 transition">Terms of Service</a>
                <a onClick={() => { showToast('Cookie Settings', 'This page is still to be written.') }} className="hover:text-gray-300 transition">Cookie Settings</a>
              </div>
            </div>
          </div>
        </footer>
    </>
  );
}
