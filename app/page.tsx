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

const capabilities = [
  {
    title: 'Content Systems',
    desc: 'Structured LinkedIn and social content that compounds over time. Not random posts that disappear.',
    span: 'md:col-span-2',
    delay: 'fade-delay-1',
    accent: 'from-indigo-500/10 to-purple-500/5',
    img: 'https://placehold.co/600x300/eef2ff/6366f1?text=Content+calendar+UI\nshowing+scheduled+posts&font=montserrat',
    imgAlt: 'Content calendar UI showing scheduled LinkedIn and social posts',
  },
  {
    title: 'SEO & GEO Ops',
    desc: 'Search-first content built for how people find answers today, including AI-assisted discovery.',
    span: '',
    delay: 'fade-delay-2',
    accent: 'from-violet-500/10 to-indigo-500/5',
    img: '',
    imgAlt: '',
  },
  {
    title: 'Creative Production',
    desc: 'Campaign assets, ad creative, and visual systems that make your brand feel like one brand.',
    span: '',
    delay: 'fade-delay-3',
    accent: 'from-blue-500/10 to-indigo-500/5',
    img: '',
    imgAlt: '',
  },
  {
    title: 'Event Collateral',
    desc: 'Signage, booth materials, one-pagers, and presentation packs built for the real world.',
    span: 'md:col-span-2',
    delay: 'fade-delay-4',
    accent: 'from-indigo-500/10 to-blue-500/5',
    img: 'https://placehold.co/600x300/f4f4f5/52525b?text=Booth+setup+photo\nwith+branded+signage&font=montserrat',
    imgAlt: 'Trade show booth setup with branded signage and collateral',
  },
  {
    title: 'Marketing Ops',
    desc: 'Email, CRM, and automation support that connects your content to measurable outcomes.',
    span: '',
    delay: 'fade-delay-5',
    accent: 'from-purple-500/10 to-violet-500/5',
    img: '',
    imgAlt: '',
  },
];

const problems = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    problem: 'Tired of chasing freelancers for every single deliverable?',
    solution: 'One team, one standard, one cadence. We own the execution so you can focus on strategy.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    problem: 'Your marketing output looks like 5 different companies made it?',
    solution: 'We build visual systems and templates that keep every touchpoint on-brand, always.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    problem: 'Content strategy that sounds great on paper but never gets executed?',
    solution: 'We close the gap between strategy and production. You set the direction, we make it happen.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    problem: 'Scaling content production without losing quality?',
    solution: 'We build systems with clear briefs, review stages, and editorial standards that scale with you.',
  },
];

const workItems = [
  {
    tag: 'Social Content System',
    title: 'Programs.com',
    subtitle: 'Founded by Brian Dean (Backlinko, acquired by Semrush)',
    desc: 'Built the social content engine for a cybersecurity venture. LinkedIn carousels, editorial frameworks, and a tight visual standard at the level the Backlinko audience expects.',
    img: 'https://placehold.co/700x460/1a1a2e/818cf8?text=LinkedIn+carousel\ndesigns+for\nPrograms.com&font=montserrat',
    imgAlt: 'LinkedIn carousel designs created for Programs.com',
    featured: true,
  },
  {
    tag: 'Fintech Campaigns',
    title: 'TouchSuite',
    subtitle: '',
    desc: 'Campaign assets, landing pages, and sales enablement for a fintech company scaling demand generation.',
    img: 'https://placehold.co/600x300/1a1a2e/818cf8?text=Campaign+assets\nfor+TouchSuite&font=montserrat',
    imgAlt: 'Campaign landing page and ad creative for TouchSuite',
    featured: false,
  },
  {
    tag: 'SEO Content Ops',
    title: 'Literanker',
    subtitle: '',
    desc: 'SEO content operations at scale: briefs, production workflows, editorial standards, and content refresh systems.',
    img: 'https://placehold.co/600x300/1a1a2e/818cf8?text=SEO+dashboard\nfor+Literanker&font=montserrat',
    imgAlt: 'SEO content production dashboard for Literanker',
    featured: false,
  },
];

const blogPosts = [
  {
    tag: 'Content Strategy',
    title: 'Why most B2B content calendars fail (and what to do instead)',
    date: 'Coming soon',
  },
  {
    tag: 'SEO',
    title: 'Content refresh strategies that actually recover lost rankings',
    date: 'Coming soon',
  },
  {
    tag: 'Creative Ops',
    title: 'How to build a visual system your marketing team can actually use',
    date: 'Coming soon',
  },
];

const tools = [
  'HubSpot', 'Semrush', 'Ahrefs', 'Figma', 'Notion', 'Webflow', 'WordPress', 'Klaviyo', 'Google Analytics', 'Canva',
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

        <div className="relative mx-auto max-w-6xl px-6 py-32 lg:py-0">
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
            </div>

            {/* Right: Hero image composition */}
            <div className="relative hidden lg:col-span-5 lg:block">
              <FadeIn delay="fade-delay-2">
                <div className="relative">
                  <div className="img-angled overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src="https://placehold.co/560x400/eef2ff/6366f1?text=Angled+laptop+mockup\nshowing+content\ncalendar+dashboard&font=montserrat"
                      alt="Angled laptop mockup showing content calendar and analytics dashboard"
                      width={560}
                      height={400}
                      className="w-full"
                      unoptimized
                    />
                  </div>
                  <div className="img-angled-reverse absolute -bottom-8 -left-12 z-10 overflow-hidden rounded-xl shadow-xl">
                    <Image
                      src="https://placehold.co/220x160/f4f4f5/6366f1?text=LinkedIn+post\npreview+overlay&font=montserrat"
                      alt="LinkedIn post preview overlay"
                      width={220}
                      height={160}
                      className="w-full"
                      unoptimized
                    />
                  </div>
                  <div className="absolute -right-4 -top-4 z-10 rounded-xl bg-accent px-4 py-2 shadow-lg">
                    <p className="text-xs font-bold text-white">50+ Projects</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

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

      {/* ══════════ PROBLEM / SOLUTION BENTO ══════════ */}
      <section className="border-y border-rule bg-surface-alt py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Sound familiar?
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-bold sm:text-4xl">
              The problems we solve every day.
            </h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {problems.map((item, i) => (
              <FadeIn key={i} delay={`fade-delay-${(i % 4) + 1}`}>
                <div className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-rule bg-surface p-8 transition-colors hover:border-accent/20">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/10 to-purple-500/5 text-accent">
                    {item.icon}
                  </div>
                  <p className="text-[15px] font-semibold text-heading leading-snug">
                    {item.problem}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.solution}
                  </p>
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CAPABILITIES BENTO ══════════ */}
      <section className="py-24 lg:py-32">
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
              expertise. We turn it into content, assets, and systems that ship.
            </p>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {capabilities.map((cap) => (
              <FadeIn key={cap.title} delay={cap.delay} className={cap.span}>
                <div className="card-hover bento-accent group flex h-full flex-col rounded-2xl border border-rule bg-surface p-8 transition-colors hover:border-accent/20">
                  <div className={`mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${cap.accent}`}>
                    <div className="h-2.5 w-2.5 rounded-sm bg-accent/80" />
                  </div>
                  <h3 className="text-lg font-semibold">{cap.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {cap.desc}
                  </p>
                  {cap.img && (
                    <div className="mt-6 overflow-hidden rounded-xl">
                      <Image
                        src={cap.img}
                        alt={cap.imgAlt}
                        width={600}
                        height={300}
                        className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                        unoptimized
                      />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
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

          {/* Tetris layout: 1 large + 2 smaller stacked */}
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Featured: Programs.com (large) */}
            <FadeIn delay="fade-delay-1">
              <div className="shine-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-rule-dark bg-surface-dark-alt transition-all duration-300 hover:border-accent/30">
                <div className="relative overflow-hidden">
                  <Image
                    src={workItems[0].img}
                    alt={workItems[0].imgAlt}
                    width={700}
                    height={460}
                    className="w-full transition-transform duration-500 group-hover:scale-[1.04]"
                    unoptimized
                  />
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    {workItems[0].tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
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

            {/* 2 smaller cards stacked */}
            <div className="flex flex-col gap-6">
              {workItems.slice(1).map((item, i) => (
                <FadeIn key={item.title} delay={`fade-delay-${i + 2}`}>
                  <div className="shine-hover group flex h-full overflow-hidden rounded-2xl border border-rule-dark bg-surface-dark-alt transition-all duration-300 hover:border-accent/30">
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
            </div>
          </div>

          {/* View all case studies */}
          <FadeIn delay="fade-delay-3">
            <div className="mt-12 text-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-xl border border-rule-dark px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-accent/40 hover:bg-accent/10"
              >
                View all case studies
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ HOW WE WORK ══════════ */}
      <section className="border-b border-rule py-24 lg:py-32">
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
      <section className="border-b border-rule py-24 lg:py-32">
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
                  We integrate with the tools your team already uses. No new platforms to learn, no migration headaches.
                </p>

                {/* Literanker partnership */}
                <div className="mt-10 flex items-center gap-6 rounded-2xl border border-accent/20 bg-accent-subtle p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white font-bold text-sm">
                      HI
                    </div>
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    <Image
                      src="https://placehold.co/100x40/transparent/6366f1?text=Literanker&font=montserrat"
                      alt="Literanker logo"
                      width={100}
                      height={40}
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-heading">SEO Partner</p>
                    <p className="text-xs text-muted">Strategic SEO content operations powered by our partnership with Literanker.</p>
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

      {/* ══════════ LATEST FROM THE BLOG ══════════ */}
      <section className="border-t border-rule bg-surface-alt py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Blog
                </p>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Latest thinking
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden text-sm font-medium text-accent transition-colors hover:text-accent-hover md:inline-flex items-center gap-1"
              >
                View all
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.title} delay={`fade-delay-${i + 1}`}>
                <div className="card-hover group flex h-full flex-col rounded-2xl border border-rule bg-surface p-7 transition-colors hover:border-accent/20">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-accent-subtle px-3 py-1 text-xs font-medium text-accent">
                      {post.tag}
                    </span>
                    <span className="text-xs text-muted">{post.date}</span>
                  </div>
                  <h3 className="text-[15px] font-semibold leading-snug text-heading">
                    {post.title}
                  </h3>
                  <div className="mt-auto pt-5 flex items-center gap-2 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Read article
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ DISRUPTIVE CTA BANNER ══════════ */}
      <section className="dark-section relative bg-surface-dark overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
          <FadeIn>
            <div className="relative rounded-3xl border border-rule-dark bg-gradient-to-br from-surface-dark-alt to-surface-dark p-10 sm:p-16 overflow-visible">
              {/* Decorative glow */}
              <div className="pointer-events-none absolute right-[-20%] top-[-30%] h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />

              <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                <div>
                  <h2 className="max-w-xl text-3xl font-bold sm:text-4xl">
                    Ready to build a marketing engine that works?
                  </h2>
                  <p className="mt-5 max-w-lg text-lg">
                    Tell us what you&rsquo;re building. We&rsquo;ll respond
                    with a clear plan, even if the answer is that you
                    don&rsquo;t need us.
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

                {/* Breakout image */}
                <div className="relative hidden lg:block">
                  <div className="img-breakout absolute -right-8 -top-32 bottom-[-4rem]">
                    <Image
                      src="https://placehold.co/440x520/eef2ff/6366f1?text=Breakout+image\nshowing+HookImpact\ndeliverables+collage\non+transparent+bg&font=montserrat"
                      alt="HookImpact deliverables collage breaking out of the CTA banner"
                      width={440}
                      height={520}
                      className="h-full w-auto object-contain drop-shadow-2xl"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
