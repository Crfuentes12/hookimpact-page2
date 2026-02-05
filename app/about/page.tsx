import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
  title: 'About — HookImpact',
  description:
    'A small, distributed team built to ship consistently for companies that care about credibility.',
};

const values = [
  {
    title: 'Repeatable over reinvented',
    desc: 'Good marketing is not constant reinvention. It is building a system that turns real expertise into content people trust.',
  },
  {
    title: 'Clarity over volume',
    desc: 'Say fewer things, more clearly. Every asset should support the message, not compete with it.',
  },
  {
    title: 'Quality as default',
    desc: 'Workflows that make quality the default outcome, not an accident. One standard, consistently applied.',
  },
  {
    title: 'Ship consistently',
    desc: 'The companies that win are the ones that can produce reliably without losing clarity along the way.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="relative overflow-hidden border-b border-rule pt-28 lg:pt-36">
        <div className="dot-pattern pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 lg:pb-28">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-subtle px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold tracking-wide text-accent">About</span>
            </div>
            <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">
              A studio, not an agency.
            </h1>
          </FadeIn>
          <FadeIn delay="fade-delay-1">
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
              We&rsquo;re a small, distributed team built to ship consistently
              for companies that care about credibility. One standard, clean
              workflows, fast feedback loops, and output that looks intentional.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Background ─── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <FadeIn>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Background
                </p>
              </div>
              <div className="lg:col-span-8">
                <p className="max-w-2xl text-lg leading-relaxed text-body">
                  HookImpact comes from years inside B2B environments where
                  marketing is expected to be clear, professional, and
                  measurable. Translating technical topics into content that
                  educates without sounding generic. Producing creative that
                  supports demand generation. Delivering collateral that gets
                  used in real corporate settings. The pattern is always the
                  same: the companies that win are the ones that ship
                  consistently without losing clarity or quality.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="border-b border-rule bg-surface-alt py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Principles
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              What we believe
            </h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={`fade-delay-${i + 1}`}>
                <div className="rounded-2xl border border-rule bg-surface p-8 transition-all duration-300 hover:border-accent/20 hover:shadow-sm">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-accent-subtle">
                    <div className="h-2 w-2 rounded-sm bg-accent" />
                  </div>
                  <h3 className="text-[15px] font-semibold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {v.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <FadeIn>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  The team
                </p>
              </div>
              <div className="lg:col-span-8">
                <p className="max-w-2xl text-lg leading-relaxed text-body">
                  Our team is intentionally distributed. That&rsquo;s not a
                  gimmick — it&rsquo;s a practical way to combine different
                  strengths while maintaining one creative direction. The studio
                  is led from Valencia, with trusted collaborators across
                  different regions who support execution in design, content, and
                  production. This structure lets us move quickly, keep costs
                  sane, and deliver across time zones while maintaining a tight
                  standard through centralized review and quality control.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Closing CTA ─── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                The right fit matters.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-body">
                If you want a team that can help you build a calm, repeatable
                marketing engine with high-quality output across channels — we
                should talk.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="btn-glow inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/20"
                >
                  Start a conversation
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
