import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="dark-section bg-linear-to-b from-[#0c0c14] via-surface-dark to-[#050507]">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        {/* Brand + columns */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/hookimpact-logo-white.png"
              alt="HookImpact logo"
              width={40}
              height={40}
              className="drop-shadow-lg contrast-40"
              unoptimized
            />

            <p className="text-[15px] font-bold tracking-tight text-white/40">
              HookImpact
            </p>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-white/40">
            Content & creative operations for B2B teams that care about consistency and credibility.
          </p>
        </div>


          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
              Company
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/services" className="text-sm text-white/50 transition-colors hover:text-white">
                Services
              </Link>
              <Link href="/about" className="text-sm text-white/50 transition-colors hover:text-white">
                About
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
              Resources
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/case-studies" className="text-sm text-white/50 transition-colors hover:text-white">
                Case Studies
              </Link>
              <Link href="/blog" className="text-sm text-white/50 transition-colors hover:text-white">
                Blog
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="text-sm text-white/50 transition-colors hover:text-white">
                Get in touch
              </Link>
              <a href="mailto:hello@hookimpact.com" className="text-sm text-white/50 transition-colors hover:text-white">
                hello@hookimpact.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
              Legal
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/privacy" className="text-sm text-white/50 transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-white/50 transition-colors hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/6 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} HookImpact. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Valencia, Spain
          </p>
        </div>
      </div>
    </footer>
  );
}
