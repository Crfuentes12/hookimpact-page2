import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from './components/FadeIn';

export const metadata: Metadata = {
  title: 'HookImpact — Content & Creative Operations Studio',
  description:
    'HookImpact is a content and creative operations studio for B2B teams that need consistency, clarity, and output.',
};

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="flex min-h-[90vh] items-center border-b border-rule">
        <div className="mx-auto max-w-[72rem] px-6 py-32 lg:px-8 lg:py-40">
          <FadeIn>
            <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              HookImpact is a content and creative operations studio for B2B
              teams that need consistency, clarity, and output.
            </h1>
          </FadeIn>
          <FadeIn delay="fade-delay-1">
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-body">
              Most companies do not struggle because they lack ideas. They
              struggle because execution is fragmented. One person writes,
              someone else designs, someone else posts, nobody owns the standard,
              and momentum breaks the moment priorities shift. HookImpact fixes
              that. We help SaaS, fintech, and service businesses turn complex
              products and messy internal knowledge into clear content, credible
              visuals, and marketing assets that ship on schedule and hold up
              under scrutiny.
            </p>
          </FadeIn>
          <FadeIn delay="fade-delay-2">
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center border border-accent bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-hover"
              >
                Start a conversation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Subheadline ─── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[72rem] px-6 py-20 lg:px-8 lg:py-28">
          <FadeIn>
            <p className="max-w-2xl text-2xl font-semibold leading-snug text-heading md:text-3xl">
              We build repeatable systems that produce high quality work without
              chaos.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Intro ─── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[72rem] px-6 py-20 lg:px-8 lg:py-28">
          <FadeIn>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  What we do
                </p>
              </div>
              <div className="lg:col-span-8">
                <p className="max-w-2xl text-lg leading-relaxed text-body">
                  Our work sits in the gap between strategy and production. We
                  translate technical or complex topics into content that people
                  actually understand, design assets that look corporate and
                  intentional, and support the operational layer that keeps
                  campaigns moving. Sometimes that means building a content
                  engine for LinkedIn and SEO. Sometimes it means creating real
                  event collateral that gets printed and used on-site. Sometimes
                  it means supporting webinars, decks, email campaigns, and
                  automation flows so content is not just posted, but connected
                  to a funnel.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Credibility ─── */}
      <section className="border-b border-rule bg-surface-alt">
        <div className="mx-auto max-w-[72rem] px-6 py-20 lg:px-8 lg:py-28">
          <FadeIn>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  Track record
                </p>
              </div>
              <div className="lg:col-span-8">
                <p className="max-w-2xl text-lg leading-relaxed text-body">
                  We have done this in real environments where quality matters.
                  For Programs.com, a venture built by Brian Dean, we helped
                  translate long-form, technical cybersecurity content into
                  social-first narratives designed for executives and marketing
                  audiences, combining strong copywriting with visual execution
                  and a tight editorial standard. For SaaS and fintech teams, we
                  have built campaign assets, landing pages, SEO-driven content
                  systems, and event collateral used in trade shows, booths, and
                  corporate environments. This is not &ldquo;content for
                  content&rsquo;s sake.&rdquo; It is work designed to be used, to
                  scale, and to support real business goals.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── What you get ─── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[72rem] px-6 py-20 lg:px-8 lg:py-28">
          <FadeIn>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  The outcome
                </p>
              </div>
              <div className="lg:col-span-8">
                <p className="max-w-2xl text-lg leading-relaxed text-body">
                  When a company works with HookImpact, they stop relying on
                  last-minute requests and scattered freelancers. They get an
                  execution partner that can own a content cadence, maintain
                  brand consistency, and deliver assets across channels without
                  turning every deliverable into a negotiation. The goal is
                  simple: a steady pipeline of marketing output that feels
                  coherent, polished, and aligned with your positioning.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Selected Work ─── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[72rem] px-6 py-20 lg:px-8 lg:py-28">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Selected work
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
              Below are a few examples of the kind of output we ship. If you
              want more, we share curated samples relevant to your industry
              after a short call, because context matters and we do not believe
              in generic portfolios.
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 gap-px bg-rule md:grid-cols-3">
            {/* Card 1 */}
            <FadeIn className="bg-surface p-8 md:p-10" delay="fade-delay-1">
              <div className="mb-8 flex aspect-[4/3] items-center justify-center bg-surface-alt">
                <span className="text-xs font-medium uppercase tracking-widest text-muted">
                  Social content system
                </span>
              </div>
              <p className="text-sm font-medium text-heading">
                Programs.com — LinkedIn Carousels
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Technical cybersecurity topics translated into social-first
                narratives with strong visual execution and editorial
                consistency.
              </p>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn className="bg-surface p-8 md:p-10" delay="fade-delay-2">
              <div className="mb-8 flex aspect-[4/3] items-center justify-center bg-surface-alt">
                <span className="text-xs font-medium uppercase tracking-widest text-muted">
                  Event collateral
                </span>
              </div>
              <p className="text-sm font-medium text-heading">
                Trade Show & Corporate Materials
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Signage, booth assets, one-pagers, and presentation packs
                designed for print production and on-site use.
              </p>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn className="bg-surface p-8 md:p-10" delay="fade-delay-3">
              <div className="mb-8 flex aspect-[4/3] items-center justify-center bg-surface-alt">
                <span className="text-xs font-medium uppercase tracking-widest text-muted">
                  Content operations
                </span>
              </div>
              <p className="text-sm font-medium text-heading">
                SEO & Campaign Asset Systems
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                End-to-end content systems connecting SEO, landing pages, and
                demand generation assets into a coherent pipeline.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section>
        <div className="mx-auto max-w-[72rem] px-6 py-24 lg:px-8 lg:py-32">
          <FadeIn>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold leading-snug md:text-3xl">
                Let&rsquo;s talk about what you need.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-body">
                If you need a team that can ship content and creative reliably,
                with a clean process and a corporate standard, tell us what you
                are building and where you want to go. We will respond with a
                clear plan and a realistic recommendation, even if the answer is
                that you do not need us.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center border border-accent bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-hover"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
