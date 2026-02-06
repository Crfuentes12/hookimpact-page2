import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from './components/FadeIn';
import FAQAccordion from './components/FAQAccordion';

export const metadata: Metadata = {
  title: 'HookImpact | Content & Creative Operations Studio',
  description:
    'Content, creative, and operations for B2B teams that need consistency without the chaos.',
};

const workItems = [
  {
    tag: 'Social Content System',
    title: 'Programs.com',
    subtitle: 'Founded by Brian Dean (Backlinko, acquired by Semrush)',
    desc: 'Built the social content engine for a cybersecurity venture. LinkedIn carousels, editorial frameworks, and a tight visual standard at the level the Backlinko audience expects.',
    img: 'https://placehold.co/700x460/1a1a2e/818cf8?text=LinkedIn+carousel\ndesigns+for\nPrograms.com&font=montserrat',
    imgAlt: 'LinkedIn carousel designs created for Programs.com',
  },
  {
    tag: 'Fintech Campaigns',
    title: 'TouchSuite',
    subtitle: '',
    desc: 'Campaign assets, landing pages, and sales enablement for a fintech company scaling demand generation.',
    img: 'https://placehold.co/600x300/1a1a2e/818cf8?text=Campaign+assets\nfor+TouchSuite&font=montserrat',
    imgAlt: 'Campaign landing page and ad creative for TouchSuite',
  },
  {
    tag: 'SEO Content Ops',
    title: 'LiteRanker',
    subtitle: '',
    desc: 'SEO content operations at scale: briefs, production workflows, editorial standards, and content refresh systems.',
    img: 'https://placehold.co/600x300/1a1a2e/818cf8?text=SEO+dashboard\nfor+LiteRanker&font=montserrat',
    imgAlt: 'SEO content production dashboard for LiteRanker',
  },
];

const whatWeDo = [
  {
    title: 'Content Systems',
    desc: 'LinkedIn and social content that compounds. Editorial frameworks, repeatable formats, one cadence.',
    img: 'https://placehold.co/480x280/f0f0ff/6366f1?text=Content+system\neditorial+calendar&font=montserrat',
    imgAlt: 'Content system editorial calendar',
    size: 'large',
  },
  {
    title: 'Creative Production',
    desc: 'Campaign assets, ad creative, visual systems. Your brand, everywhere, looking like one brand.',
    img: 'https://placehold.co/400x240/fef2f2/ef4444?text=Campaign+creative\nassets+showcase&font=montserrat',
    imgAlt: 'Campaign creative assets',
    size: 'small',
  },
  {
    title: 'SEO & GEO Ops',
    desc: 'Search-first content for how people find answers today, including AI-assisted discovery.',
    img: 'https://placehold.co/400x240/f0fdf4/16a34a?text=SEO+analytics\ndashboard&font=montserrat',
    imgAlt: 'SEO analytics dashboard',
    size: 'small',
  },
  {
    title: 'Marketing Ops',
    desc: 'Email, CRM, automation that connects content to outcomes. Systems that scale with you.',
    img: 'https://placehold.co/400x240/fffbeb/f59e0b?text=Marketing+automation\nworkflow&font=montserrat',
    imgAlt: 'Marketing automation workflow',
    size: 'small',
  },
  {
    title: 'Event Collateral',
    desc: 'Signage, booth materials, one-pagers, presentation packs. Built for the real world.',
    img: 'https://placehold.co/400x240/fdf2f8/ec4899?text=Event+booth\ncollateral+design&font=montserrat',
    imgAlt: 'Event booth collateral design',
    size: 'small',
  },
  {
    title: 'Workflow Automation',
    desc: 'HubSpot, Klaviyo, Zapier. Simple enough to maintain, structured enough to scale.',
    img: 'https://placehold.co/480x280/eef2ff/6366f1?text=Automation\nworkflow+builder&font=montserrat',
    imgAlt: 'Automation workflow builder',
    size: 'large',
  },
];

const blogPosts = [
  {
    title: 'Why most B2B content calendars fail (and what to do instead)',
    date: 'Coming soon',
    img: 'https://placehold.co/600x400/eef2ff/6366f1?text=Content+calendar\nstrategy+illustration&font=montserrat',
    imgAlt: 'Content calendar strategy illustration',
  },
  {
    title: 'Content refresh strategies that actually recover lost rankings',
    date: 'Coming soon',
    img: 'https://placehold.co/600x400/f0fdf4/16a34a?text=SEO+rankings\nchart+going+up&font=montserrat',
    imgAlt: 'SEO rankings chart illustration',
  },
  {
    title: 'How to build a visual system your marketing team can actually use',
    date: 'Coming soon',
    img: 'https://placehold.co/600x400/fef2f2/ef4444?text=Design+system\ncomponent+library&font=montserrat',
    imgAlt: 'Design system component library illustration',
  },
  {
    title: 'The real cost of scattered freelancers vs. a dedicated execution partner',
    date: 'Coming soon',
    img: 'https://placehold.co/600x400/fffbeb/f59e0b?text=Team+collaboration\nworkflow+diagram&font=montserrat',
    imgAlt: 'Team collaboration workflow diagram',
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
    a: 'We don\'t publish fixed pricing because the difference between "two posts per week" and "a content engine tied to funnel metrics" is massive. After a short call, we provide a clear range and a scope that matches what you actually need. If you want a lightweight starting point, we can begin with a short paid trial project to prove fit.',
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
        <div className="dot-pattern pointer-events-none absolute inset-0 opacity-30" />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 lg:pt-0 lg:pb-0">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Copy */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-subtle px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-xs font-semibold tracking-wide text-accent">
                    Content & Creative Operations Studio
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay="fade-delay-1">
                <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.5rem]">
                  Your marketing should{' '}
                  <span className="gradient-text">ship consistently,</span> not
                  fall apart every quarter.
                </h1>
              </FadeIn>

              <FadeIn delay="fade-delay-2">
                <p className="mt-7 max-w-lg text-lg leading-relaxed text-body">
                  We build the content, creative, and operational systems that
                  B2B teams need to produce reliably. No chaos, no bottlenecks,
                  no brand inconsistency.
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

              {/* Metrics strip - inline, single row */}
              <FadeIn delay="fade-delay-4">
                <div className="mt-16 flex items-center gap-10 border-t border-rule pt-8 md:gap-14">
                  <div className="whitespace-nowrap">
                    <p className="text-2xl font-bold text-heading sm:text-3xl">50+</p>
                    <p className="mt-1 text-sm text-muted">Projects delivered</p>
                  </div>
                  <div className="whitespace-nowrap">
                    <p className="text-2xl font-bold text-heading sm:text-3xl">B2B</p>
                    <p className="mt-1 text-sm text-muted">SaaS, Fintech, Services</p>
                  </div>
                  <div className="whitespace-nowrap">
                    <p className="text-2xl font-bold text-heading sm:text-3xl">100%</p>
                    <p className="mt-1 text-sm text-muted">Remote studio</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Clean transparent image space */}
            <div className="relative hidden lg:col-span-5 lg:block">
              <FadeIn delay="fade-delay-2">
                <div className="relative">
                  <Image
                    src="https://placehold.co/480x580/transparent/6366f1?text=Your+transparent\nimage+goes+here\n480x580&font=montserrat"
                    alt="HookImpact creative showcase"
                    width={480}
                    height={580}
                    className="relative z-10 w-full"
                    unoptimized
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SELECTED WORK (dark, tetris layout) ══════════ */}
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
              Real projects, real outcomes. Here&rsquo;s a snapshot of what we
              ship for B2B teams.
            </p>
          </FadeIn>

          {/* Tetris layout: 1 large left + 3 stacked right (equal height) */}
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Featured: Programs.com (large) */}
            <FadeIn delay="fade-delay-1" className="flex">
              <div className="shine-hover group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-rule-dark bg-surface-dark-alt transition-all duration-300 hover:border-accent/30">
                <div className="relative flex-1 overflow-hidden">
                  <Image
                    src={workItems[0].img}
                    alt={workItems[0].imgAlt}
                    width={700}
                    height={460}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    unoptimized
                  />
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    {workItems[0].tag}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-white">
                    {workItems[0].title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-accent-light">
                    {workItems[0].subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed">
                    {workItems[0].desc}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* 2 smaller cards + View All CTA card - stretch to fill */}
            <div className="flex flex-col gap-6">
              {workItems.slice(1).map((item, i) => (
                <FadeIn key={item.title} delay={`fade-delay-${i + 2}`} className="flex flex-1">
                  <div className="shine-hover group flex w-full overflow-hidden rounded-2xl border border-rule-dark bg-surface-dark-alt transition-all duration-300 hover:border-accent/30">
                    <div className="relative w-2/5 shrink-0 overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.imgAlt}
                        width={600}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        unoptimized
                      />
                      <span className="absolute left-3 top-3 z-10 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                        {item.tag}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center p-6">
                      <h3 className="text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}

              {/* View all case studies card - flex-1 to fill remaining space */}
              <FadeIn delay="fade-delay-4" className="flex flex-1">
                <Link
                  href="/case-studies"
                  className="group flex w-full items-center justify-between rounded-2xl border border-rule-dark bg-gradient-to-br from-accent/10 to-purple-500/5 p-6 transition-all duration-300 hover:border-accent/40 hover:from-accent/15 hover:to-purple-500/10"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">View all case studies</p>
                    <p className="mt-1 text-xs text-white/50">See detailed breakdowns of our work</p>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent-light transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ WHAT WE DO (disruptive bento with images) ══════════ */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="animate-float pointer-events-none absolute left-[-8%] top-[20%] h-[350px] w-[350px] rounded-full bg-gradient-to-br from-indigo-500/[0.05] to-violet-500/[0.03] blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                What we do
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Everything you need.{' '}
                <span className="gradient-text">Nothing you don&rsquo;t.</span>
              </h2>
              <p className="mt-4 text-body">
                Strategy is worthless without execution. We sit in the gap between
                ideas and production, turning expertise into systems that ship.
              </p>
            </div>
          </FadeIn>

          {/* Bento grid: 2 large + 4 small in asymmetric layout */}
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((item, i) => (
              <FadeIn
                key={item.title}
                delay={`fade-delay-${(i % 5) + 1}`}
                className={item.size === 'large' ? 'sm:col-span-2 lg:col-span-1' : ''}
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-rule bg-surface transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.imgAlt}
                      width={480}
                      height={280}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-heading">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
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
      <section className="border-t border-b border-rule py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Process
                </p>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Simple, repeatable, reliable.
                </h2>
                <p className="mt-4 text-body">
                  No bloated onboarding. No endless discovery. We get to work
                  fast and keep shipping.
                </p>
              </FadeIn>

              <FadeIn delay="fade-delay-1">
                <div className="img-float mt-8 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="https://placehold.co/480x320/f4f4f5/52525b?text=Project+management\nboard+or+workflow\ndiagram&font=montserrat"
                    alt="Project management workflow showing content production pipeline"
                    width={480}
                    height={320}
                    className="w-full"
                    unoptimized
                  />
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <FadeIn key={step.num} delay={`fade-delay-${i + 1}`}>
                    <div className="group rounded-2xl border border-rule bg-surface p-8 transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5">
                      <div className="flex items-start gap-5">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-subtle text-sm font-bold text-accent">
                          {step.num}
                        </span>
                        <div>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TOOLS & TECH ══════════ */}
      <section className="py-24 lg:py-32">
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
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
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
            <div className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-surface-dark via-[#12121a] to-surface-dark p-10 lg:p-14">
              {/* Floating decorative elements */}
              <div className="animate-float pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br from-accent/20 to-purple-500/10 blur-2xl" />
              <div className="animate-float-reverse pointer-events-none absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-gradient-to-tr from-purple-500/15 to-accent/10 blur-2xl" />

              <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-accent-light">
                    Strategic Partnership
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                    HookImpact <span className="text-accent-light">&times;</span> LiteRanker
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

                <div className="flex items-center justify-center gap-8 lg:justify-end">
                  <div className="animate-float flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-purple-500 text-2xl font-bold text-white shadow-2xl shadow-accent/30">
                    HI
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-accent-light/50 to-transparent" />
                    <span className="text-xs text-white/30">+</span>
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-accent-light/50 to-transparent" />
                  </div>
                  <div className="animate-float-reverse">
                    <Image
                      src="https://placehold.co/160x64/transparent/818cf8?text=LiteRanker&font=montserrat"
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

      {/* ══════════ LATEST FROM THE BLOG ══════════ */}
      <section className="border-t border-b border-rule bg-surface-alt py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Latest <span className="gradient-text">Blogs</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.title} delay={`fade-delay-${i + 1}`}>
                <div className="group">
                  <div className="overflow-hidden rounded-3xl">
                    <Image
                      src={post.img}
                      alt={post.imgAlt}
                      width={600}
                      height={400}
                      className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      unoptimized
                    />
                  </div>
                  <p className="mt-4 text-xs text-muted">{post.date}</p>
                  <h3 className="mt-2 text-sm font-semibold leading-snug text-heading">
                    {post.title}
                  </h3>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay="fade-delay-3">
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
              >
                View All
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ CTA BANNER STRIPE ══════════ */}
      <section className="dark-section relative z-20 overflow-visible bg-gradient-to-r from-[#0c0c14] via-surface-dark to-[#0c0c14]">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-12 lg:py-20">
              <div className="lg:col-span-4">
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

              <div className="relative hidden lg:col-span-4 lg:flex lg:justify-end">
                <div className="relative -my-28 z-30">
                  <Image
                    src="https://placehold.co/320x420/eef2ff/6366f1?text=Deliverables\ncollage+photo\nslightly+tilted\n3:4+format&font=montserrat"
                    alt="HookImpact deliverables collage tilted at an angle"
                    width={320}
                    height={420}
                    className="w-[280px] rotate-3 rounded-2xl shadow-2xl shadow-black/40 transition-transform duration-500 hover:rotate-1"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ FAQ ACCORDION ══════════ */}
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
                  Everything you need to know before we start working together.
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
