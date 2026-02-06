import type { Metadata } from 'next';
import FadeIn from '../components/FadeIn';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — HookImpact',
  description:
    'Tell us what you are trying to achieve. We reply within two business days.',
};

export default function ContactPage() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="relative overflow-hidden border-b border-rule pt-28 lg:pt-36">
        <div className="dot-pattern pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 lg:pb-28">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-subtle px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold tracking-wide text-accent">Contact</span>
            </div>
            <h1 className="max-w-2xl text-4xl font-bold sm:text-5xl">
              Let&rsquo;s talk about what you need.
            </h1>
          </FadeIn>
          <FadeIn delay="fade-delay-1">
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
              Tell us what you&rsquo;re building, what&rsquo;s blocking
              execution, and where you want to go. If it&rsquo;s a fit,
              we&rsquo;ll propose a clear starting scope.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Form section ─── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <FadeIn>
                <div className="space-y-8">
                  <div className="rounded-2xl border border-rule bg-surface-alt p-6">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent-subtle">
                      <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-heading">Response time</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      We reply within two business days. Flag time-sensitive
                      projects and we&rsquo;ll be direct about capacity.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-rule bg-surface-alt p-6">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent-subtle">
                      <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-heading">Email directly</p>
                    <a
                      href="mailto:hello@hookimpact.com"
                      className="mt-1.5 block text-sm text-accent transition-colors hover:text-accent-hover"
                    >
                      hello@hookimpact.com
                    </a>
                  </div>

                  <div className="rounded-2xl border border-rule bg-surface-alt p-6">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent-subtle">
                      <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-heading">Prefer a call?</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      Mention it in your message and we&rsquo;ll send a
                      scheduling link.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <FadeIn delay="fade-delay-1">
                <div className="rounded-2xl border border-rule bg-surface-alt p-8 sm:p-10">
                  <p className="mb-8 text-sm leading-relaxed text-muted">
                    Include any examples, brand guidelines, or assets you want
                    us to match. The more context upfront, the faster we can
                    give you a serious answer.
                  </p>
                  <ContactForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Closing ─── */}
      <section className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <FadeIn>
            <p className="text-center text-sm text-muted">
              We prefer simple, professional communication and clear
              expectations. If that&rsquo;s how you work too, you&rsquo;ll like
              the process.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
