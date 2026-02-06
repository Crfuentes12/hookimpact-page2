import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="dark-section bg-gradient-to-b from-surface-dark to-[#050507]">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-12">
        {/* Giant CTA text */}
        <div className="mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-light mb-6">
            Ready to start?
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl max-w-3xl leading-[1.1]">
            Let&rsquo;s build something<br />
            <span className="gradient-text">that actually ships.</span>
          </h2>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn-glow inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/25"
            >
              Start a conversation
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a
              href="mailto:hello@hookimpact.com"
              className="inline-flex items-center gap-2 rounded-xl border border-rule-dark px-7 py-3.5 text-sm font-semibold text-white/80 transition-all duration-200 hover:border-accent/40 hover:text-white"
            >
              hello@hookimpact.com
            </a>
          </div>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-2 gap-10 border-t border-rule-dark pt-14 md:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted/60 mb-5">
              Company
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/services" className="text-sm text-white/60 transition-colors hover:text-white">
                Services
              </Link>
              <Link href="/about" className="text-sm text-white/60 transition-colors hover:text-white">
                About
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted/60 mb-5">
              Resources
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/case-studies" className="text-sm text-white/60 transition-colors hover:text-white">
                Case Studies
              </Link>
              <Link href="/blog" className="text-sm text-white/60 transition-colors hover:text-white">
                Blog
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted/60 mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="text-sm text-white/60 transition-colors hover:text-white">
                Get in touch
              </Link>
              <a href="mailto:hello@hookimpact.com" className="text-sm text-white/60 transition-colors hover:text-white">
                hello@hookimpact.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted/60 mb-5">
              Legal
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/privacy" className="text-sm text-white/60 transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-white/60 transition-colors hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-rule-dark pt-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <p className="text-[15px] font-bold tracking-tight text-white">
              HookImpact
            </p>
          </div>
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} HookImpact. All rights reserved. Valencia, Spain.
          </p>
        </div>
      </div>
    </footer>
  );
}
