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
    title: 'LiteRanker',
    subtitle: '',
    desc: 'SEO content operations at scale: briefs, production workflows, editorial standards, and content refresh systems.',
    img: 'https://placehold.co/600x300/1a1a2e/818cf8?text=SEO+dashboard\nfor+LiteRanker&font=montserrat',
    imgAlt: 'SEO content production dashboard for LiteRanker',
    featured: false,
  },
];

const whatWeDo = [
  {
    pain: 'Chasing freelancers for every deliverable',
    capability: 'Content Systems',
    desc: 'Structured LinkedIn and social content that compounds. One team, one standard, one cadence.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    pain: 'Output that looks like 5 companies made it',
    capability: 'Creative Production',
    desc: 'Campaign assets, ad creative, and visual systems that make your brand feel like one brand everywhere.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
  {
    pain: 'Strategy that sounds great but never ships',
    capability: 'SEO & GEO Ops',
    desc: 'Search-first content built for how people find answers today, including AI-assisted discovery channels.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    pain: 'Scaling content without losing quality',
    capability: 'Marketing Ops',
    desc: 'Email, CRM, and automation that connects content to measurable outcomes. Systems that scale with you.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    pain: 'Agency disappears when work needs printing',
    capability: 'Event Collateral',
    desc: 'Signage, booth materials, one-pagers, and presentation packs built for the real world. We do not disappear.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18.75 12h.008v.008h-.008V12zm-8.25 0h.008v.008H10.5V12z" />
      </svg>
    ),
  },
  {
    pain: 'No time to figure out automation',
    capability: 'Workflow Automation',
    desc: 'HubSpot, Klaviyo, Zapier flows designed to be simple enough to maintain, structured enough to scale.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m0 0l4.5 7.795" />
      </svg>
    ),
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
  'WordPress', 'Klaviyo', 'Google Analytics', 'Canva', 'Adobe Creative Suite',
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

          {/* Metrics strip - left side only */}
          <FadeIn delay="fade-delay-4">
            <div className="mt-20 max-w-md">
              <div className="flex flex-wrap gap-10 border-t border-rule pt-10 md:gap-16">
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
            </div>
          </FadeIn>
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

          {/* Tetris layout: 1 large left + 3 stacked right (matching height) */}
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Featured: Programs.com (large) */}
            <FadeIn delay="fade-delay-1">
              <div className="shine-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-rule-dark bg-surface-dark-alt transition-all duration-300 hover:border-accent/30">
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

            {/* 2 smaller cards + View All CTA card - stretch to match left */}
            <div className="flex h-full flex-col gap-6">
              {workItems.slice(1).map((item, i) => (
                <FadeIn key={item.title} delay={`fade-delay-${i + 2}`}>
                  <div className="shine-hover group flex flex-1 overflow-hidden rounded-2xl border border-rule-dark bg-surface-dark-alt transition-all duration-300 hover:border-accent/30">
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

              {/* View all case studies card */}
              <FadeIn delay="fade-delay-4">
                <Link
                  href="/case-studies"
                  className="group flex flex-1 items-center justify-between rounded-2xl border border-rule-dark bg-gradient-to-br from-accent/10 to-purple-500/5 p-6 transition-all duration-300 hover:border-accent/40 hover:from-accent/15 hover:to-purple-500/10"
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

      {/* ══════════ WHAT WE DO (merged problems + capabilities) ══════════ */}
      <section className="relative overflow-hidden border-b border-rule py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface-alt via-surface to-surface-alt opacity-60" />
        <div className="animate-float pointer-events-none absolute left-[-8%] top-[20%] h-[350px] w-[350px] rounded-full bg-gradient-to-br from-indigo-500/[0.05] to-violet-500/[0.03] blur-3xl" />
        <div className="animate-float-reverse pointer-events-none absolute right-[-5%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-purple-500/[0.04] to-blue-500/[0.02] blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                What we do
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Your pain points.{' '}
                <span className="gradient-text">Our solutions.</span>
              </h2>
              <p className="mt-4 text-body">
                We sit in the gap between strategy and production. You bring the
                expertise, we turn it into content, assets, and systems that ship.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((item, i) => (
              <FadeIn key={item.capability} delay={`fade-delay-${(i % 5) + 1}`}>
                <div className="group relative flex h-full flex-col rounded-2xl border border-rule bg-surface p-7 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                  {/* Accent top bar on hover */}
                  <div className="absolute left-0 right-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-accent to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/10 to-purple-500/5 text-accent transition-colors duration-300 group-hover:from-accent group-hover:to-purple-500 group-hover:text-white">
                    {item.icon}
                  </div>

                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-accent">
                    {item.capability}
                  </p>

                  <p className="text-[15px] font-semibold leading-snug text-heading">
                    {item.pain}
                  </p>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>

                  {/* Decorative corner glow */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </FadeIn>
            ))}
          </div>
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
                      <svg className="h-5 w-5 text-accent/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                      </svg>
                      <Image
                        src="https://placehold.co/100x40/transparent/6366f1?text=LiteRanker&font=montserrat"
                        alt="LiteRanker logo"
                        width={100}
                        height={40}
                        unoptimized
                      />
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-heading">SEO Content Operations Partner</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        From keyword research to content production, we combine LiteRanker&rsquo;s technical SEO expertise with our editorial and creative execution.
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
                  {/* +20 more tools card */}
                  <div className="flex items-center justify-center rounded-2xl border border-dashed border-accent/30 bg-accent-subtle p-5 text-sm font-semibold text-accent">
                    +20 more tools
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ LATEST FROM THE BLOG ══════════ */}
      <section className="border-b border-rule bg-surface-alt py-24 lg:py-32">
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
              {/* Left: big text */}
              <div className="lg:col-span-4">
                <h2 className="text-3xl font-bold text-white sm:text-4xl leading-[1.1]">
                  Ready to build a{' '}
                  <span className="gradient-text">reliable engine?</span>
                </h2>
              </div>

              {/* Middle: copy + button */}
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

              {/* Right: tilted breakout image 3:4 - overflows above/below */}
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
