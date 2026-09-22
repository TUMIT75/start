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

              {/* Seven items, no dropdown, exactly as the 20 September mock-up
                   sets them out. Login is no longer in the bar; the footer
                   carries it, which is where the mock-up puts it too. */}
              <nav className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-8 text-sm font-medium text-gray-700 whitespace-nowrap" id="desktopNav">
                <Link href="/" id="nav-home" className="nav-item hover:text-emerald-700 transition py-1">Home</Link>
                <Link href="/about" id="nav-about" className="nav-item hover:text-emerald-700 transition py-1">About</Link>
                <Link href="/coaching" id="nav-coaching" className="nav-item hover:text-emerald-700 transition py-1">Coaching</Link>
                <Link href="/courses" id="nav-courses" className="nav-item hover:text-emerald-700 transition py-1">Courses</Link>
                <Link href="/for-organisations" id="nav-organisations" className="nav-item hover:text-emerald-700 transition py-1">For Organisations</Link>
                <Link href="/resources" id="nav-resources" className="nav-item hover:text-emerald-700 transition py-1">Resources</Link>
                <Link href="/contact" id="nav-contact" className="nav-item hover:text-emerald-700 transition py-1">Contact</Link>
              </nav>

              <div className="hidden lg:flex items-center shrink-0">
                <Link href="/start-your-development" className="bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold pl-5 pr-4 py-2.5 rounded-full transition inline-flex items-center gap-2 whitespace-nowrap" id="headerCtaBtn">
                  Get Started
                  <Icon name="arrow-right" className="text-xs inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-emerald-700 focus:outline-none cursor-pointer" id="mobileMenuBtn" aria-label="Toggle Menu" onClick={() => { toggleMobileMenu() }}>
                <Icon name="bars" className="text-xl inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          <div id="mobileMenu" className="hidden lg:hidden border-t border-gray-100 bg-white px-4 pt-4 pb-6 space-y-1 shadow-lg text-sm">
            <Link href="/" onClick={() => toggleMobileMenu()} className="block py-2.5 text-gray-700 hover:text-emerald-700 font-medium">Home</Link>
            <Link href="/about" onClick={() => toggleMobileMenu()} className="block py-2.5 text-gray-700 hover:text-emerald-700 font-medium">About</Link>
            <Link href="/coaching" onClick={() => toggleMobileMenu()} className="block py-2.5 text-gray-700 hover:text-emerald-700 font-medium">Coaching</Link>
            <Link href="/courses" onClick={() => toggleMobileMenu()} className="block py-2.5 text-gray-700 hover:text-emerald-700 font-medium">Courses</Link>
            <Link href="/for-organisations" onClick={() => toggleMobileMenu()} className="block py-2.5 text-gray-700 hover:text-emerald-700 font-medium">For Organisations</Link>
            <Link href="/resources" onClick={() => toggleMobileMenu()} className="block py-2.5 text-gray-700 hover:text-emerald-700 font-medium">Resources</Link>
            <Link href="/contact" onClick={() => toggleMobileMenu()} className="block py-2.5 text-gray-700 hover:text-emerald-700 font-medium">Contact</Link>
            <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-2">
              <Link href="/dashboard" onClick={() => toggleMobileMenu()} className="text-center py-2.5 text-xs font-semibold text-gray-800 bg-gray-50 rounded-xl flex items-center justify-center">
                <Icon name="user" className="mr-2 text-emerald-700 inline-block h-[1em] w-[1em] align-[-0.125em] shrink-0" /> Login / My Learning
              </Link>
              <Link href="/start-your-development" onClick={() => toggleMobileMenu()} className="w-full text-center bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 rounded-full text-sm">
                Get Started
              </Link>
            </div>
          </div>
        </header>
    </>
  );
}
