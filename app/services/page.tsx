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
    title: 'Content Systems',
    subtitle: 'LinkedIn & Social',
    desc: 'Structured, repeatable social content that compounds. Editorial themes, narrative frameworks, and a production cadence aligned with your positioning.',
    img: '/content-system-feature.png',
    imgAlt: 'Content system editorial calendar',
    accent: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'SEO & GEO Ops',
    subtitle: 'Search & Discovery',
    desc: 'SEO-first and GEO-aware content for how people search today. Full briefs, AI-accelerated drafts, strong human editing, and content refresh systems.',
    img: '/seo-feature.png',
    imgAlt: 'SEO analytics dashboard',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Creative Production',
    subtitle: 'Campaigns & Paid Media',
    desc: 'Landing pages, ad creative, lead magnets, and visual systems. Your marketing output looking like one brand, not a patchwork of styles.',
    img: '/creative-production-feature.png',
    imgAlt: 'Campaign creative assets showcase',
    accent: 'from-rose-500 to-pink-500',
  },
  {
    title: 'Event Collateral',
    subtitle: 'Print & Physical',
    desc: 'Signage, booth assets, banners, one-pagers, sales materials, and presentation packs that match the brand and meet production standards.',
    img: '/collateral-feature.png',
    imgAlt: 'Event booth and corporate collateral',
    accent: 'from-pink-500 to-fuchsia-500',
  },
  {
    title: 'Marketing Ops',
    subtitle: 'Email, CRM & Automation',
    desc: 'Email campaigns, CRM workflows, and automation flows in HubSpot and Klaviyo. Simple to maintain, structured to scale.',
    img: '/marketing-ops-feature.png',
    imgAlt: 'Marketing automation workflow builder',
    accent: 'from-amber-500 to-orange-500',
  },
];

const featuredWork = [
  {
    title: 'Programs.com',
    tag: 'Social Content System',
    desc: 'Built the content engine for a Brian Dean (Backlinko) cybersecurity venture.',
    img: '/programs-feature.png',
    imgAlt: 'Programs.com content system',
  },
  {
    title: 'TouchSuite',
    tag: 'Fintech Campaigns',
    desc: 'Campaign assets and demand generation for a scaling fintech company.',
    img: '/touchsuite-feature.png',
    imgAlt: 'TouchSuite campaign assets',
  },
  {
    title: 'LiteRanker',
    tag: 'SEO Content Ops',
    desc: 'End-to-end SEO content operations at scale for a technical SEO platform.',
    img: '/literanker-feature.png',
    imgAlt: 'LiteRanker SEO operations',
  },
];

const tools = [
  'HubSpot', 'Semrush', 'Ahrefs', 'Figma', 'Notion', 'Webflow',
  'WordPress', 'Klaviyo', 'Google Analytics', 'Canva', 'Adobe',
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
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-rule pt-28 lg:pt-36">
        <div className="dot-pattern pointer-events-none absolute inset-0 opacity-20" />
        <div className="animate-float pointer-events-none absolute right-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-indigo-500/[0.06] to-violet-500/[0.03] blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 lg:pb-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <FadeIn>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-subtle px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-xs font-semibold tracking-wide text-accent">Services</span>
                </div>
                <h1 className="max-w-xl text-4xl font-bold sm:text-5xl">
                  Marketing execution that actually{' '}
                  <span className="gradient-text">holds up.</span>
                </h1>
              </FadeIn>
              <FadeIn delay="fade-delay-1">
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-body">
                  Content that does not oversimplify. Design that does not look
                  templated. Workflows that do not fall apart when you get busy.
                </p>
              </FadeIn>
              <FadeIn delay="fade-delay-2">
                <div className="mt-8 flex flex-wrap gap-4">
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
                    href="/case-studies"
                    className="inline-flex items-center gap-2 rounded-xl border border-rule px-7 py-3.5 text-sm font-semibold text-heading transition-all duration-200 hover:border-accent/30 hover:bg-accent-subtle"
                  >
                    See our work
                  </Link>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay="fade-delay-2">
              <div className="relative hidden lg:block">
                <Image
                  src="/services-hero.png"
                  alt="HookImpact creative production process"
                  width={520}
                  height={380}
                  className="w-full rounded-2xl"
                  unoptimized
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid - modular cards with images */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Our capabilities
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                What we build for teams like yours.
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={`fade-delay-${(i % 3) + 1}`}>
                <div className={`group grid grid-cols-1 overflow-hidden rounded-3xl border border-rule bg-surface transition-all duration-300 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  {/* Image side */}
                  <div className={`relative h-64 overflow-hidden lg:h-auto ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={service.img}
                      alt={service.imgAlt}
                      width={560}
                      height={340}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      unoptimized
                    />
                    <div className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${service.accent} px-3 py-1`}>
                      <span className="text-[11px] font-semibold text-white">{service.subtitle}</span>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`flex flex-col justify-center p-8 lg:p-10 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-2xl font-bold text-heading">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted lg:text-base lg:leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Mini Section */}
      <section className="dark-section bg-surface-dark py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-light">
                  Selected work
                </p>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  See it in action.
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="hidden items-center gap-2 text-sm font-semibold text-accent-light transition-colors hover:text-white sm:inline-flex"
              >
                View all case studies
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWork.map((item, i) => (
              <FadeIn key={item.title} delay={`fade-delay-${i + 1}`}>
                <div className="shine-hover group overflow-hidden rounded-2xl border border-rule-dark bg-surface-dark-alt transition-all duration-300 hover:border-accent/30">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.imgAlt}
                      width={400}
                      height={260}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      unoptimized
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay="fade-delay-3">
            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent-light"
              >
                View all case studies
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tools & Technology */}
      <section className="border-b border-rule py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Tools & Technology
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                We work inside your stack.
              </h2>
              <p className="mt-4 mx-auto max-w-lg text-body">
                No new platforms to learn, no migration headaches. We plug into
                the tools your team already uses.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay="fade-delay-1">
            <div className="mx-auto max-w-3xl grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
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
          </FadeIn>

          {/* LiteRanker partnership - floating visual */}
          <FadeIn delay="fade-delay-2">
            <div className="relative mt-16 overflow-hidden rounded-3xl bg-linear-to-br from-surface-dark via-[#12121a] to-surface-dark p-10 lg:p-14">
              {/* Floating decorative elements */}
              <div className="animate-float pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-linear-to-br from-accent/20 to-purple-500/10 blur-2xl" />
              <div className="animate-float-reverse pointer-events-none absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-linear-to-tr from-purple-500/15 to-accent/10 blur-2xl" />

              <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-accent-light">
                    Strategic Partnership
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                    <span className="mt-3 text-2xl font-bold text-white sm:text-3xl"> HookImpact</span> <span className="text-accent-light">&times;</span> <span className="mt-3 text-2xl font-bold text-white sm:text-3xl">LiteRanker</span>
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    From keyword research to content production, we combine
                    LiteRanker&rsquo;s technical SEO expertise with our editorial
                    and creative execution. Together, we deliver end-to-end SEO
                    content operations for B2B teams.
                  </p>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-light transition-colors hover:text-white"
                  >
                    Learn more
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>

                <div className="animate-float flex items-center justify-center gap-8 lg:justify-end">
                    <Image
                      src="/hookimpact-logo-white.png"
                      alt="LiteRanker logo"
                      width={90}
                      height={64}
                      className="drop-shadow-lg"
                      unoptimized
                    />
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-lg text-white/30">+</span>
                  </div>
                  <div className="animate-float-reverse">
                    <Image
                      src="/literanker-logo-white-fill.svg"
                      alt="LiteRanker logo"
                      width={160}
                      height={64}
                      className="drop-shadow-lg"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Stripe */}
      <section className="dark-section relative z-20 overflow-visible bg-gradient-to-r from-[#0c0c14] via-surface-dark to-[#0c0c14]">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-12 lg:py-20">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-bold text-white sm:text-4xl leading-[1.1]">
                  Ready to build a{' '}
                  <span className="gradient-text">reliable engine?</span>
                </h2>
              </div>

              <div className="lg:col-span-4">
                <p className="text-sm leading-relaxed text-white/70">
                  Tell us about your goals and constraints. We will respond with
                  a clear recommendation and an honest answer, no fluff.
                </p>
                <Link
                  href="/contact"
                  className="btn-glow mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-purple-500 px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:shadow-xl hover:shadow-accent/25"
                >
                  Let&rsquo;s Talk Now
                </Link>
              </div>

              <div className="relative hidden lg:col-span-3 lg:flex lg:justify-end">
                <div className="relative -my-28 z-30">
                  <Image
                    src="/cta-feature.png"
                    alt="HookImpact deliverables collage"
                    width={280}
                    height={370}
                    className="w-[240px] rotate-3 rounded-2xl shadow-2xl shadow-black/40 transition-transform duration-500 hover:rotate-1"
                    unoptimized
                  />
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
    </>
  );
}
