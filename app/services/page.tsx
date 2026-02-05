import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
  title: 'Services — HookImpact',
  description:
    'Marketing execution designed to hold up in B2B environments. Content systems, creative production, event collateral, and marketing operations.',
};

const services = [
  {
    number: '01',
    title: 'Content systems for LinkedIn and social',
    body: 'B2B teams often treat social content as a series of isolated posts. That is why it feels random and why it rarely compounds. We build social content systems that are structured, repeatable, and aligned with your positioning. This includes editorial themes, narrative frameworks, and a production cadence that turns what your company already knows into content people can learn from. The deliverables can range from high-signal LinkedIn carousels to insight posts, simplified explainers, and visual assets that make complex ideas easier to understand without diluting your credibility.',
  },
  {
    number: '02',
    title: 'SEO and GEO content operations',
    body: 'We produce SEO-first and GEO-aware content designed for how people search today, including traditional search and AI-assisted discovery. The focus is not simply publishing volume. It is producing pages that match intent, hold attention, and answer the question better than what already exists. We create full content briefs, use AI responsibly to accelerate drafts and research, and apply a strong human layer through editing, structure, and usefulness. We also refresh existing content so it stays competitive and accurate, because in B2B, outdated pages quietly destroy trust.',
  },
  {
    number: '03',
    title: 'Creative production for campaigns and paid media support',
    body: 'Campaign execution breaks when creative production becomes a bottleneck. We support teams that need assets for launch cycles, paid media, lead magnets, outbound sequences, and ongoing demand generation. This includes landing page support, ad creative, visual systems for consistency, and production workflows that reduce turnaround time without sacrificing quality. The goal is to make your marketing output feel like one brand, not a patchwork of styles.',
  },
  {
    number: '04',
    title: 'Event and corporate collateral',
    body: 'Most "digital agencies" disappear the moment the work needs to be printed, installed, or used at a booth. We do not. We produce corporate collateral that is built for real use: signage, booth assets, banners, covers, one-pagers, sales materials, and presentation packs that match the brand and meet production standards. This is where attention to detail matters, because the physical world does not forgive sloppy files or unclear design decisions.',
  },
  {
    number: '05',
    title: 'Marketing operations and automation support',
    body: 'Content becomes far more valuable when it connects to a system. We support the operational layer that turns assets into outcomes, including email campaign support, CRM workflow support, and marketing automation setup where it makes sense. We work inside tools like HubSpot and Klaviyo depending on the client\u2019s stack, and we design automation flows that are simple enough to maintain, but structured enough to scale. The goal is not to add complexity. The goal is to remove friction and make marketing execution more consistent.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── Page header ─── */}
      <section className="border-b border-rule pt-28 lg:pt-36">
        <div className="mx-auto max-w-[72rem] px-6 pb-20 lg:px-8 lg:pb-28">
          <FadeIn>
            <p className="mb-6 text-xs font-medium uppercase tracking-widest text-muted">
              Services
            </p>
            <h1 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
              What we deliver
            </h1>
          </FadeIn>
          <FadeIn delay="fade-delay-1">
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-body">
              HookImpact delivers marketing execution that is designed to hold
              up in B2B environments. That means content that does not
              oversimplify, design that does not look templated, and workflows
              that do not fall apart when a company gets busy. We do not sell a
              single service. We sell a reliable production system that can be
              configured around your needs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Services list ─── */}
      {services.map((service) => (
        <section key={service.number} className="border-b border-rule">
          <div className="mx-auto max-w-[72rem] px-6 py-20 lg:px-8 lg:py-28">
            <FadeIn>
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <span className="text-xs font-medium text-muted">
                    {service.number}
                  </span>
                  <h2 className="mt-3 text-xl font-semibold leading-snug text-heading md:text-2xl">
                    {service.title}
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="max-w-2xl text-lg leading-relaxed text-body">
                    {service.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* ─── How engagement works ─── */}
      <section className="border-b border-rule bg-surface-alt">
        <div className="mx-auto max-w-[72rem] px-6 py-20 lg:px-8 lg:py-28">
          <FadeIn>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  How it works
                </p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-xl font-semibold leading-snug text-heading md:text-2xl">
                  How engagement works
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
                  We typically work in one of two ways: as a monthly retainer
                  where we own a defined scope and cadence, or as a focused
                  project when you need a clean, high-quality delivery for a
                  campaign, a launch, or a specific initiative. In both cases,
                  we start with a short discovery to clarify goals, constraints,
                  and voice. Then we propose an execution plan with a realistic
                  schedule, clear responsibilities, and a quality standard we
                  will hold.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Pricing philosophy ─── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[72rem] px-6 py-20 lg:px-8 lg:py-28">
          <FadeIn>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  Pricing
                </p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-xl font-semibold leading-snug text-heading md:text-2xl">
                  Pricing philosophy
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
                  We do not publish fixed pricing on the site because the
                  difference between &ldquo;two posts per week&rdquo; and
                  &ldquo;a content engine tied to funnel metrics&rdquo; is
                  massive, and the value is not captured by a generic package.
                  After a short call, we provide a clear range and a scope that
                  matches what you actually need. If you want a lightweight
                  starting point, we can begin with a short paid trial project
                  to prove fit and working rhythm.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section>
        <div className="mx-auto max-w-[72rem] px-6 py-24 lg:px-8 lg:py-32">
          <FadeIn>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold leading-snug md:text-3xl">
                Ready to build a reliable marketing engine?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-body">
                Tell us about your goals and constraints. We will respond with a
                clear recommendation.
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
