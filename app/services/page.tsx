import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import FAQAccordion from '../components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Services | HookImpact',
  description:
    'Marketing execution designed to hold up in B2B environments. Content systems, creative production, event collateral, and marketing operations.',
};

const services = [
  {
    num: '01',
    title: 'Content systems for LinkedIn and social',
    body: 'B2B teams often treat social content as a series of isolated posts. That is why it feels random and why it rarely compounds. We build social content systems that are structured, repeatable, and aligned with your positioning. This includes editorial themes, narrative frameworks, and a production cadence that turns what your company already knows into content people can learn from. The deliverables can range from high-signal LinkedIn carousels to insight posts, simplified explainers, and visual assets that make complex ideas easier to understand without diluting your credibility.',
    accent: 'from-indigo-500 to-violet-500',
  },
  {
    num: '02',
    title: 'SEO and GEO content operations',
    body: 'We produce SEO-first and GEO-aware content designed for how people search today, including traditional search and AI-assisted discovery. The focus is not simply publishing volume. It is producing pages that match intent, hold attention, and answer the question better than what already exists. We create full content briefs, use AI responsibly to accelerate drafts and research, and apply a strong human layer through editing, structure, and usefulness. We also refresh existing content so it stays competitive and accurate, because in B2B, outdated pages quietly destroy trust.',
    accent: 'from-violet-500 to-purple-500',
  },
  {
    num: '03',
    title: 'Creative production for campaigns and paid media',
    body: 'Campaign execution breaks when creative production becomes a bottleneck. We support teams that need assets for launch cycles, paid media, lead magnets, outbound sequences, and ongoing demand generation. This includes landing page support, ad creative, visual systems for consistency, and production workflows that reduce turnaround time without sacrificing quality. The goal is to make your marketing output feel like one brand, not a patchwork of styles.',
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    num: '04',
    title: 'Event and corporate collateral',
    body: 'Most "digital agencies" disappear the moment the work needs to be printed, installed, or used at a booth. We do not. We produce corporate collateral that is built for real use: signage, booth assets, banners, covers, one-pagers, sales materials, and presentation packs that match the brand and meet production standards. This is where attention to detail matters, because the physical world does not forgive sloppy files or unclear design decisions.',
    accent: 'from-indigo-500 to-blue-500',
  },
  {
    num: '05',
    title: 'Marketing operations and automation support',
    body: 'Content becomes far more valuable when it connects to a system. We support the operational layer that turns assets into outcomes, including email campaign support, CRM workflow support, and marketing automation setup where it makes sense. We work inside tools like HubSpot and Klaviyo depending on the client\'s stack, and we design automation flows that are simple enough to maintain, but structured enough to scale. The goal is not to add complexity. The goal is to remove friction and make marketing execution more consistent.',
    accent: 'from-purple-500 to-violet-500',
  },
];

const tools = [
  'HubSpot', 'Semrush', 'Ahrefs', 'Figma', 'Notion', 'Webflow',
  'WordPress', 'Klaviyo', 'Google Analytics', 'Canva', 'Adobe Creative Suite',
];

const faqs = [
  {
    q: 'How does an engagement typically work?',
    a: 'We work in two modes: a monthly retainer where we own a defined scope and cadence, or a focused project for a campaign, launch, or specific initiative. Both start with a short discovery to clarify goals, constraints, and voice. Then we propose an execution plan with a realistic schedule, clear responsibilities, and a quality standard we hold.',
  },
  {
    q: 'How does pricing work?',
    a: 'We don\'t publish fixed pricing because the difference between "two posts per week" and "a content engine tied to funnel metrics" is massive. After a short call, we provide a clear range and a scope that matches what you actually need. If you want a lightweight starting point, we can begin with a short paid trial project to prove fit and working rhythm.',
  },
  {
    q: 'What does a starter engagement look like?',
    a: 'A starter engagement focuses on building a clean content cadence for one primary channel, typically LinkedIn, with a small set of repeatable formats. The purpose is to establish voice, consistency, and a working rhythm, then expand once the system is stable.',
  },
  {
    q: 'What about a full operations engagement?',
    a: 'A full engagement includes multi-channel content production, campaign support, landing page and creative production, and ongoing operational work in email and CRM systems. The purpose is to reduce internal burden and create a reliable engine that can scale.',
  },
  {
    q: 'Do you use AI in your work?',
    a: 'Yes, responsibly. We use AI to accelerate research, drafting, and ideation. But every deliverable goes through a strong human editorial layer for quality, accuracy, and brand voice. AI is a tool in the process, not the process itself.',
  },
  {
    q: 'Can you work with our existing brand guidelines?',
    a: 'Absolutely. We design within your existing brand system or help build one if you need it. Our goal is to make your marketing output feel like one brand across every channel and touchpoint.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-rule pt-28 lg:pt-36">
        <div className="dot-pattern pointer-events-none absolute inset-0 opacity-20" />
        <div className="animate-float pointer-events-none absolute right-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-indigo-500/[0.06] to-violet-500/[0.03] blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 lg:pb-28">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-subtle px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold tracking-wide text-accent">Services</span>
            </div>
            <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">
              Marketing execution that actually holds up.
            </h1>
          </FadeIn>
          <FadeIn delay="fade-delay-1">
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
              Content that does not oversimplify. Design that does not look
              templated. Workflows that do not fall apart when you get busy.
              Built for B2B teams that care about credibility.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      {services.map((service) => (
        <section key={service.num} className="border-b border-rule">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
            <FadeIn>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} text-sm font-bold text-white`}>
                    {service.num}
                  </div>
                  <h2 className="text-xl font-bold leading-snug sm:text-2xl">
                    {service.title}
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="max-w-2xl text-base leading-relaxed text-body lg:text-lg">
                    {service.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* Tools & Technology */}
      <section className="border-b border-rule bg-surface-alt py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Tools & Technology
                </p>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  We work inside your stack.
                </h2>
                <p className="mt-4 text-body">
                  No new platforms to learn, no migration headaches. We plug into the tools your team already uses and make them work harder.
                </p>

                {/* LiteRanker partnership - enhanced */}
                <div className="mt-10 overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent-subtle to-purple-500/[0.04]">
                  <div className="border-b border-accent/10 bg-accent/[0.04] px-6 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">Strategic Partnership</p>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-purple-500 text-white font-bold text-sm shadow-lg shadow-accent/20">
                        HI
                      </div>
                      <svg className="h-5 w-5 text-accent/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                      </svg>
                      <Image
                        src="https://placehold.co/100x40/transparent/6366f1?text=LiteRanker&font=montserrat"
                        alt="LiteRanker logo"
                        width={100}
                        height={40}
                        className="shrink-0"
                        unoptimized
                      />
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-heading">SEO Content Operations Partner</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        Our strategic partnership with LiteRanker powers our SEO content operations. From keyword research to content production, we combine their technical SEO expertise with our editorial and creative execution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {tools.map((tool) => (
                    <div
                      key={tool}
                      className="flex items-center justify-center rounded-2xl border border-rule bg-surface p-5 text-sm font-medium text-muted transition-all duration-200 hover:border-accent/20 hover:text-heading"
                    >
                      {tool}
                    </div>
                  ))}
                  <div className="flex items-center justify-center rounded-2xl border border-dashed border-accent/30 bg-accent-subtle p-5 text-sm font-semibold text-accent">
                    +20 more tools
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <FadeIn>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  FAQ
                </p>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Common questions
                </h2>
                <p className="mt-4 text-body">
                  What you need to know about working with us.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-8">
              <FadeIn delay="fade-delay-1">
                <FAQAccordion items={faqs} />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-rule py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to build a reliable engine?
              </h2>
              <p className="mt-5 text-lg text-body">
                Tell us about your goals and constraints. We will respond
                with a clear recommendation.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="btn-glow inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/20"
                >
                  Get in touch
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
