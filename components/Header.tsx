'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Icon from '@/components/Icon';
import { navigateTo, toggleMobileMenu, setNavigator, initStickyHeader, setActiveNav, closeMobileMenu } from '@/lib/ui';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  // Behaviour ported from the prototype still calls navigateTo(); route it
  // through Next so it is a client transition, not a page load.
  useEffect(() => setNavigator((href) => router.push(href)), [router]);
  useEffect(() => initStickyHeader(), []);
  useEffect(() => {
    setActiveNav(pathname);
    closeMobileMenu();
  }, [pathname]);

  return (
    <>
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-150 shadow-xs transition-all duration-200" id="mainHeader">
          <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
            <div className="flex justify-between items-center h-20 gap-4">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 shrink-0 select-none cursor-pointer py-1 group" id="brandLogo" aria-label="Start SAH Homepage">
                <Image src="/logo.svg" alt="Start SAH" width={150} height={56} priority className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105" />
              </Link>

              {/* Desktop Navigation: Ultra Wide & Centered in the middle of the menu */}
              {/* The full bar needs xl to fit without crowding; below that the
                   drawer carries the same items, Login included. */}
              <nav className="hidden xl:flex flex-1 items-center justify-center space-x-4 2xl:space-x-6 text-[13px] 2xl:text-[14px] font-medium text-gray-700 whitespace-nowrap" id="desktopNav">
                {/* No hard-coded active state here: switchPageView owns it, otherwise
                     Home stays highlighted on every other page. */}
                <Link href="/" id="nav-home" className="nav-item hover:text-emerald-600 transition cursor-pointer px-2 py-1">Home</Link>
                <Link href="/about" id="nav-about" className="nav-item hover:text-emerald-600 transition cursor-pointer px-2 py-1">About</Link>

                {/* Training & Development (Dropdown) */}
                <div className="relative group py-2">
                  <button className="nav-item flex items-center space-x-1 hover:text-emerald-600 transition focus:outline-none cursor-pointer px-2 py-1" id="trainingDropdownBtn">
                    <span>Training & Development</span>
                    <Icon name="chevron-down" className="text-[10px] text-gray-400 group-hover:text-emerald-600 group-hover:rotate-180 transition-transform inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  </button>
                  <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-150 py-2 hidden group-hover:block transition duration-200 z-50">
                    <Link href="/programmes?focus=Career%20%26%20Employability" className="block px-4 py-2.5 hover:bg-emerald-50 hover:text-emerald-600 transition">
                      <div className="font-semibold text-gray-900 text-xs">Career & Employability</div>
                      <div className="text-[11px] text-gray-400 mt-0.5">Position strengths & progression</div>
                    </Link>
                    <Link href="/programmes/english-for-professional-success" className="block px-4 py-2.5 hover:bg-emerald-50 hover:text-emerald-600 transition">
                      <div className="font-semibold text-gray-900 text-xs flex items-center justify-between">
                        <span>Professional English</span>
                        <span className="px-1.5 py-0.5 text-[9px] bg-emerald-100 text-emerald-700 font-bold rounded">LMS</span>
                      </div>
                      <div className="text-[11px] text-gray-400 mt-0.5">Cross-cultural executive clarity</div>
                    </Link>
                    <Link href="/programmes?focus=Leadership" className="block px-4 py-2.5 hover:bg-emerald-50 hover:text-emerald-600 transition">
                      <div className="font-semibold text-gray-900 text-xs">Leadership & Presence</div>
                      <div className="text-[11px] text-gray-400 mt-0.5">Authority & authentic influence</div>
                    </Link>
                  </div>
                </div>

                <Link href="/coaching" id="nav-coaching" className="nav-item hover:text-emerald-600 transition cursor-pointer px-2 py-1">Coaching</Link>
                {/* Shortened at narrower widths so the bar never crowds; the brief
                     allows the visible menu to be simplified. */}
                <Link href="/organisational-development" id="nav-organisational" className="nav-item hover:text-emerald-600 transition cursor-pointer px-2 py-1">
                  <span className="2xl:hidden">Organisations</span>
                  <span className="hidden 2xl:inline">Organisational Development</span>
                </Link>
                <Link href="/insights" id="nav-podcast" className="nav-item hover:text-emerald-600 transition cursor-pointer px-2 py-1">
                  <span className="2xl:hidden">Insights</span>
                  <span className="hidden 2xl:inline">Insights / Podcast</span>
                </Link>
                <Link href="/contact" id="nav-contact" className="nav-item hover:text-emerald-600 transition cursor-pointer px-2 py-1">Contact</Link>
              </nav>

              {/* Right CTAs */}
              <div className="hidden xl:flex items-center space-x-3 2xl:space-x-4 shrink-0">
                <Link href="/dashboard" className="text-xs 2xl:text-sm font-semibold text-gray-700 hover:text-emerald-600 flex items-center transition cursor-pointer px-2 py-1 whitespace-nowrap" id="loginLink">
                  <Icon name="user" className="mr-1.5 text-xs 2xl:text-sm text-gray-500 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                  <span>Login / My Learning</span>
                </Link>
                <Link href="/start-your-development" className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs 2xl:text-sm font-semibold px-4 2xl:px-5 py-2.5 rounded-full transition duration-200 flex items-center cursor-pointer whitespace-nowrap" id="headerCtaBtn">
                  <span className="hidden 2xl:inline">Start Your Development</span>
                  <span className="2xl:hidden">Get Started</span>
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button className="xl:hidden p-2 rounded-lg text-gray-700 hover:text-emerald-600 focus:outline-none cursor-pointer" id="mobileMenuBtn" aria-label="Toggle Menu" onClick={() => { toggleMobileMenu() }}>
                <Icon name="bars" className="text-xl inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          <div id="mobileMenu" className="hidden xl:hidden border-t border-gray-100 bg-white px-4 pt-4 pb-6 space-y-3 shadow-lg text-sm">
            <a onClick={() => { navigateTo('homepage'); toggleMobileMenu() }} className="block py-2 text-gray-700 hover:text-emerald-600 font-medium">Home</a>
            <a onClick={() => { navigateTo('about'); toggleMobileMenu() }} className="block py-2 text-gray-700 hover:text-emerald-600 font-medium">About</a>
            <div className="py-1 pl-3 border-l-2 border-emerald-500 my-1 space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Training & Development</span>
              <a onClick={() => { navigateTo('programmes', 'Career & Employability'); toggleMobileMenu() }} className="block py-1 text-xs text-gray-700 hover:text-emerald-600">• Career & Employability</a>
              <a onClick={() => { navigateTo('course'); toggleMobileMenu() }} className="block py-1 text-xs text-gray-700 hover:text-emerald-600">• Professional English (LMS)</a>
              <a onClick={() => { navigateTo('programmes', 'Leadership'); toggleMobileMenu() }} className="block py-1 text-xs text-gray-700 hover:text-emerald-600">• Leadership & Workplace Skills</a>
            </div>
            <a onClick={() => { navigateTo('coaching'); toggleMobileMenu() }} className="block py-2 text-gray-700 hover:text-emerald-600 font-medium">Coaching</a>
            <a onClick={() => { navigateTo('organisational'); toggleMobileMenu() }} className="block py-2 text-gray-700 hover:text-emerald-600 font-medium">Organisational Development</a>
            <a onClick={() => { navigateTo('insights'); toggleMobileMenu() }} className="block py-2 text-gray-700 hover:text-emerald-600 font-medium">Insights / Podcast</a>
            <a onClick={() => { navigateTo('contact'); toggleMobileMenu() }} className="block py-2 text-gray-700 hover:text-emerald-600 font-medium">Contact</a>
            <div className="pt-3 border-t border-gray-100 flex flex-col space-y-2">
              <a onClick={() => { navigateTo('dashboard'); toggleMobileMenu() }} className="text-center py-2.5 text-xs font-bold text-gray-800 bg-gray-50 rounded-xl cursor-pointer flex items-center justify-center">
                <Icon name="user" className="mr-2 text-emerald-600 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Login / My Learning
              </a>
              <button onClick={() => { navigateTo('development'); toggleMobileMenu() }} className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-full text-xs cursor-pointer">
                Start Your Development
              </button>
            </div>
          </div>
        </header>
    </>
  );
}
