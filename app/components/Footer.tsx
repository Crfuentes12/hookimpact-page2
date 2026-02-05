import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto max-w-[72rem] px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="mb-4 text-lg font-semibold tracking-tight text-heading">
              HookImpact
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Based in Valencia. Built for remote teams. Designed to scale.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium text-heading">Pages</p>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-muted transition-colors hover:text-heading">Home</Link>
              <Link href="/services" className="text-sm text-muted transition-colors hover:text-heading">Services</Link>
              <Link href="/about" className="text-sm text-muted transition-colors hover:text-heading">About</Link>
              <Link href="/contact" className="text-sm text-muted transition-colors hover:text-heading">Contact</Link>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium text-heading">Get in touch</p>
            <a
              href="mailto:hello@hookimpact.com"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              hello@hookimpact.com
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-rule pt-8">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} HookImpact. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
