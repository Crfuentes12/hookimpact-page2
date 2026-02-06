import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-[15px] font-bold tracking-tight text-heading">
              HookImpact
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Content and creative operations studio based in Valencia.
              Built for remote B2B teams. Designed to scale.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted/70 mb-4">
              Navigate
            </p>
            <div className="flex flex-col gap-2.5">
              <Link href="/" className="text-sm text-body transition-colors hover:text-accent">Home</Link>
              <Link href="/services" className="text-sm text-body transition-colors hover:text-accent">Services</Link>
              <Link href="/case-studies" className="text-sm text-body transition-colors hover:text-accent">Case Studies</Link>
              <Link href="/about" className="text-sm text-body transition-colors hover:text-accent">About</Link>
              <Link href="/contact" className="text-sm text-body transition-colors hover:text-accent">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted/70 mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:hello@hookimpact.com"
                className="text-sm text-body transition-colors hover:text-accent"
              >
                hello@hookimpact.com
              </a>
              <Link href="/contact" className="text-sm text-body transition-colors hover:text-accent">
                Book a call
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-rule pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} HookImpact. All rights reserved.
          </p>
          <p className="text-xs text-muted/60">
            Valencia, Spain
          </p>
        </div>
      </div>
    </footer>
  );
}
