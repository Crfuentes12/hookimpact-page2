'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-rule/50'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-heading text-[15px] font-bold tracking-tight"
          >
            HookImpact
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3.5 py-2 text-[13px] transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-heading font-medium bg-accent-subtle'
                    : 'text-muted hover:text-heading hover:bg-surface-alt'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 btn-glow rounded-full bg-accent px-5 py-2 text-[13px] font-medium text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
            >
              Let&rsquo;s Talk
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-10 flex h-9 w-9 items-center justify-center rounded-lg text-heading transition-colors hover:bg-surface-alt md:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex w-4 flex-col items-end gap-[5px]">
              <span
                className={`block h-[1.5px] bg-current transition-all duration-300 ease-out ${
                  isOpen ? 'w-4 translate-y-[3.25px] rotate-45' : 'w-4'
                }`}
              />
              <span
                className={`block h-[1.5px] bg-current transition-all duration-300 ease-out ${
                  isOpen ? 'w-4 -translate-y-[3.25px] -rotate-45' : 'w-3'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white/95 backdrop-blur-xl transition-all duration-400 ease-out md:hidden ${
          isOpen ? 'max-h-96 border-b border-rule' : 'max-h-0'
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-xl px-4 py-3 text-sm transition-colors ${
                pathname === link.href
                  ? 'bg-accent-subtle text-heading font-medium'
                  : 'text-body hover:bg-surface-alt'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 rounded-xl bg-accent px-4 py-3 text-center text-sm font-medium text-white"
          >
            Let&rsquo;s Talk
          </Link>
        </div>
      </div>
    </nav>
  );
}
