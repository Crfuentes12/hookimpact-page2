import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from './components/FadeIn';

export const metadata: Metadata = {
  title: 'HookImpact — Content & Creative Operations Studio',
  description:
    'Content, creative, and operations for B2B teams that need consistency without the chaos.',
};

const capabilities = [
  {
    title: 'Content Systems',
    desc: 'Structured LinkedIn and social content that compounds over time — not random posts that disappear.',
    span: 'md:col-span-2',
    delay: 'fade-delay-1',
    accent: 'from-indigo-500/10 to-purple-500/5',
  },
  {
    title: 'SEO & GEO Ops',
    desc: 'Search-first content built for how people find answers today — including AI-assisted discovery.',
    span: '',
    delay: 'fade-delay-2',
    accent: 'from-violet-500/10 to-indigo-500/5',
  },
  {
    title: 'Creative Production',
    desc: 'Campaign assets, ad creative, and visual systems that make your brand feel like one brand.',
    span: '',
    delay: 'fade-delay-3',
    accent: 'from-blue-500/10 to-indigo-500/5',
  },
  {
    title: 'Event Collateral',
    desc: 'Signage, booth materials, one-pagers, and presentation packs built for the real world.',
    span: '',
    delay: 'fade-delay-4',
    accent: 'from-indigo-500/10 to-blue-500/5',
  },
  {
    title: 'Marketing Ops',
    desc: 'Email, CRM, and automation support that connects your content to measurable outcomes.',
    span: '',
    delay: 'fade-delay-5',
    accent: 'from-purple-500/10 to-violet-500/5',
  },
];

const workItems = [
  {
    tag: 'Social Content',
    title: 'Programs.com',
    desc: 'Translated complex cybersecurity topics into social-first narratives for executive audiences. LinkedIn carousels, visual systems, and tight editorial standards.',
    gradient: 'from-indigo-600 to-violet-600',
  },
  {
    tag: 'Campaign Assets',
    title: 'SaaS & Fintech',
    desc: 'End-to-end campaign systems: landing pages, SEO content, demand gen assets, and brand-consistent creative across every channel.',
    gradient: 'from-violet-600 to-purple-600',
  },
  {
    tag: 'Corporate Collateral',
    title: 'Trade Shows & Events',
    desc: 'Print-ready signage, booth assets, sales materials, and presentation packs designed for corporate environments where detail matters.',
    gradient: 'from-purple-600 to-indigo-600',
  },
];

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We learn your business, voice, constraints, and what success looks like.',
  },
  {
    num: '02',
    title: 'Execution',
    desc: 'We ship content and creative on a defined cadence with a clear quality standard.',
  },
  {
    num: '03',
    title: 'Scale',
    desc: 'We refine the system, expand scope, and build a library that compounds.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* Decorative orbs */}
        <div className="animate-float pointer-events-none absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-indigo-500/[0.07] to-violet-500/[0.04] blur-3xl" />
        <div className="animate-float-reverse pointer-events-none absolute bottom-[5%] left-[-5%] h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-purple-500/[0.06] to-blue-500/[0.03] blur-3xl" />
        {/* Dot pattern */}
        <div className="dot-pattern pointer-events-none absolute inset-0 opacity-30" />

        <div className="relative mx-auto max-w-6xl px-6 py-32 lg:py-0">
          <FadeIn>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-subtle px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold tracking-wide text-accent">
                Content & Creative Operations Studio
              </span>
            </div>
          </FadeIn>

          <FadeIn delay="fade-delay-1">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              We build the marketing engines{' '}
              <span className="gradient-text">B2B teams</span> actually need.
            </h1>
          </FadeIn>

          <FadeIn delay="fade-delay-2">
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-body sm:text-xl">
              Content, creative, and operations — structured to ship
              consistently without the chaos. For SaaS, fintech, and service
              companies that care about credibility.
            </p>
          </FadeIn>

          <FadeIn delay="fade-delay-3">
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-glow inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/20"
              >
                Start a conversation
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-rule px-7 py-3.5 text-sm font-semibold text-heading transition-all duration-200 hover:border-accent/30 hover:bg-accent-subtle"
              >
                See how we work
              </Link>
            </div>
          </FadeIn>

          {/* Metrics strip */}
          <FadeIn delay="fade-delay-4">
            <div className="mt-20 flex flex-wrap gap-10 border-t border-rule pt-10 md:gap-16">
              <div>
                <p className="text-2xl font-bold text-heading sm:text-3xl">50+</p>
                <p className="mt-1 text-sm text-muted">Projects delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-heading sm:text-3xl">B2B</p>
                <p className="mt-1 text-sm text-muted">SaaS, Fintech, Services</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-heading sm:text-3xl">100%</p>
                <p className="mt-1 text-sm text-muted">Remote studio</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ CAPABILITIES BENTO ══════════ */}
      <section className="border-t border-rule bg-surface-alt py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Capabilities
            </p>
            <h2 className="mt-4 max-w-lg text-3xl font-bold sm:text-4xl">
              Everything you need. Nothing you don&rsquo;t.
            </h2>
            <p className="mt-4 max-w-xl text-body">
              We sit in the gap between strategy and production. You bring the
              expertise — we turn it into content, assets, and systems that ship.
            </p>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {capabilities.map((cap) => (
              <FadeIn
                key={cap.title}
                delay={cap.delay}
                className={cap.span}
              >
                <div className={`card-hover bento-accent group h-full rounded-2xl border border-rule bg-surface p-8 transition-colors hover:border-accent/20`}>
                  <div className={`mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${cap.accent}`}>
                    <div className="h-2.5 w-2.5 rounded-sm bg-accent/80" />
                  </div>
                  <h3 className="text-lg font-semibold">{cap.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {cap.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SELECTED WORK (dark) ══════════ */}
      <section className="dark-section bg-surface-dark py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-light">
              Selected work
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Work that gets used.
            </h2>
            <p className="mt-4 max-w-xl">
              We share curated samples relevant to your industry after a short
              call. Here&rsquo;s a snapshot of what we ship.
            </p>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {workItems.map((item, i) => (
              <FadeIn key={item.title} delay={`fade-delay-${i + 1}`}>
                <div className="shine-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-rule-dark bg-surface-dark-alt transition-all duration-300 hover:border-accent/30">
                  {/* Visual header */}
                  <div className={`flex h-44 items-end bg-gradient-to-br ${item.gradient} p-6 opacity-80 transition-opacity group-hover:opacity-100`}>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ HOW WE WORK ══════════ */}
      <section className="border-b border-rule py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Process
            </p>
            <h2 className="mt-4 max-w-lg text-3xl font-bold sm:text-4xl">
              Simple, repeatable, reliable.
            </h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={`fade-delay-${i + 1}`}>
                <div className="group rounded-2xl border border-rule bg-surface p-8 transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-subtle text-sm font-bold text-accent">
                    {step.num}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CREDIBILITY ══════════ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Stop scrambling. Start shipping.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-body">
                When a company works with HookImpact, they stop relying on
                last-minute requests and scattered freelancers. They get an
                execution partner that owns the cadence, maintains brand
                consistency, and delivers assets across channels without turning
                every deliverable into a negotiation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ CTA (dark) ══════════ */}
      <section className="dark-section bg-surface-dark">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-rule-dark bg-gradient-to-br from-surface-dark-alt to-surface-dark p-10 sm:p-16">
              {/* Background glow */}
              <div className="pointer-events-none absolute right-[-20%] top-[-30%] h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />

              <div className="relative">
                <h2 className="max-w-xl text-3xl font-bold sm:text-4xl">
                  Ready to build a marketing engine that works?
                </h2>
                <p className="mt-5 max-w-lg text-lg">
                  Tell us what you&rsquo;re building. We&rsquo;ll respond with a
                  clear plan — even if the answer is that you don&rsquo;t need
                  us.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="btn-glow inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/25"
                  >
                    Get in touch
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <a
                    href="mailto:hello@hookimpact.com"
                    className="inline-flex items-center gap-2 rounded-xl border border-rule-dark px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-accent/30 hover:bg-accent/10"
                  >
                    hello@hookimpact.com
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
