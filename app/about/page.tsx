import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
  title: 'About — HookImpact',
  description:
    'A small, distributed team built to ship consistently for companies that care about credibility.',
};

export default function AboutPage() {
  return (
    <>
      {/* ─── Page header ─── */}
      <section className="border-b border-rule pt-28 lg:pt-36">
        <div className="mx-auto max-w-[72rem] px-6 pb-20 lg:px-8 lg:pb-28">
          <FadeIn>
            <p className="mb-6 text-xs font-medium uppercase tracking-widest text-muted">
              About
            </p>
            <h1 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
              A studio, not an agency.
            </h1>
          </FadeIn>
          <FadeIn delay="fade-delay-1">
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-body">
              HookImpact is a small, distributed team built to ship consistently
              for companies that care about credibility. We are not a freelancer
              marketplace and we are not a bloated agency. We operate like a
              studio: one standard, clean workflows, fast feedback loops, and
              output that looks intentional.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Founder story ─── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[72rem] px-6 py-20 lg:px-8 lg:py-28">
          <FadeIn>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  Background
                </p>
              </div>
              <div className="lg:col-span-8">
                <p className="max-w-2xl text-lg leading-relaxed text-body">
                  The core of HookImpact comes from years of doing the work
                  inside B2B environments where marketing is expected to be
                  clear, professional, and measurable. That includes translating
                  technical topics into content that educates without sounding
                  generic, producing creative assets that support demand
                  generation, and delivering collateral that gets used in real
                  corporate settings. We have supported venture-backed teams and
                  established businesses alike, and the pattern is always the
                  same: the companies that win are the ones that can ship
                  consistently without losing clarity or quality.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── What we believe ─── */}
      <section className="border-b border-rule bg-surface-alt">
        <div className="mx-auto max-w-[72rem] px-6 py-20 lg:px-8 lg:py-28">
          <FadeIn>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  Principles
                </p>
              </div>
              <div className="lg:col-span-8">
                <p className="max-w-2xl text-lg leading-relaxed text-body">
                  We believe good marketing is not about constant reinvention.
                  It is about building a repeatable system that turns real
                  expertise into content and assets people trust. It is about
                  saying fewer things, more clearly. It is about design that
                  supports the message instead of competing with it. It is about
                  workflows that make quality the default, not an accident.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── The team ─── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[72rem] px-6 py-20 lg:px-8 lg:py-28">
          <FadeIn>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  The team
                </p>
              </div>
              <div className="lg:col-span-8">
                <p className="max-w-2xl text-lg leading-relaxed text-body">
                  Our team is intentionally distributed. That is not a gimmick.
                  It is a practical way to combine different strengths while
                  maintaining one creative direction. The studio is led from
                  Valencia, with trusted collaborators across different regions
                  who support execution in design, content, and production. This
                  structure lets us move quickly, keep costs sane, and deliver
                  across time zones while still maintaining a tight standard
                  through centralized review and quality control.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Closing ─── */}
      <section>
        <div className="mx-auto max-w-[72rem] px-6 py-24 lg:px-8 lg:py-32">
          <FadeIn>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold leading-snug md:text-3xl">
                The right fit matters.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-body">
                If you are looking for a partner that can &ldquo;just post
                more,&rdquo; we are not the right fit. If you want a team that
                can help you build a calm, repeatable marketing engine with
                high-quality output across channels, we should talk.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center border border-accent bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-hover"
                >
                  Start a conversation
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
