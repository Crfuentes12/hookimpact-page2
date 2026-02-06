import type { Metadata } from 'next';
import Image from 'next/image';
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
    img: 'https://placehold.co/600x300/eef2ff/6366f1?text=Content+calendar+UI\nshowing+scheduled+posts&font=montserrat',
    imgAlt: 'Content calendar UI showing scheduled LinkedIn and social posts',
  },
  {
    title: 'SEO & GEO Ops',
    desc: 'Search-first content built for how people find answers today — including AI-assisted discovery.',
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

const workItems = [
  {
    tag: 'Social Content System',
    title: 'Programs.com',
    desc: 'Built the social content engine for Brian Dean\u2019s cybersecurity venture — LinkedIn carousels, editorial frameworks, and a tight visual standard.',
    img: 'https://placehold.co/600x400/1a1a2e/818cf8?text=LinkedIn+carousel\ndesigns+for\nPrograms.com&font=montserrat',
    imgAlt: 'LinkedIn carousel designs created for Programs.com',
  },
  {
    tag: 'Fintech Campaigns',
    title: 'TouchSuite',
    desc: 'Campaign assets, landing pages, and sales enablement materials for a fintech company scaling its demand generation.',
    img: 'https://placehold.co/600x400/1a1a2e/818cf8?text=Campaign+landing+page\nand+ad+creative\nfor+TouchSuite&font=montserrat',
    imgAlt: 'Campaign landing page and ad creative for TouchSuite',
  },
  {
    tag: 'SEO Content Ops',
    title: 'Literanker',
    desc: 'SEO content operations at scale — briefs, production workflows, editorial standards, and content refresh systems.',
    img: 'https://placehold.co/600x400/1a1a2e/818cf8?text=SEO+content+dashboard\nand+analytics\nfor+Literanker&font=montserrat',
    imgAlt: 'SEO content production dashboard and analytics for Literanker',
  },
  {
    tag: 'Event & Corporate',
    title: 'Continuum',
    desc: 'Full event collateral — booth graphics, signage, presentation decks, and one-pagers for multiple trade shows.',
    img: 'https://placehold.co/600x400/1a1a2e/818cf8?text=Event+booth+design\nand+printed+collateral\nfor+Continuum&font=montserrat',
    imgAlt: 'Event booth design and printed collateral for Continuum',
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
                  We build the marketing engines{' '}
                  <span className="gradient-text">B2B teams</span> actually
                  need.
                </h1>
              </FadeIn>

              <FadeIn delay="fade-delay-2">
                <p className="mt-7 max-w-lg text-lg leading-relaxed text-body">
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
            </div>

            {/* Right: Hero image composition */}
            <div className="relative hidden lg:col-span-5 lg:block">
              <FadeIn delay="fade-delay-2">
                <div className="relative">
                  {/* Main angled image */}
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
                  {/* Overlapping smaller image */}
                  <div className="img-angled-reverse absolute -bottom-8 -left-12 z-10 overflow-hidden rounded-xl shadow-xl">
                    <Image
                      src="https://placehold.co/220x160/f4f4f5/6366f1?text=LinkedIn+post\npreview+overlay&font=montserrat"
                      alt="LinkedIn post preview overlay — transparent mockup"
                      width={220}
                      height={160}
                      className="w-full"
                      unoptimized
                    />
                  </div>
                  {/* Small accent badge */}
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

      {/* ══════════ AUTHORITY / BRIAN DEAN ══════════ */}
      <section className="border-y border-rule bg-surface-alt">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <FadeIn>
            <div className="flex flex-col items-center gap-8 text-center">
              <p className="max-w-2xl text-sm leading-relaxed text-muted">
                We helped build the content engine behind{' '}
                <span className="font-semibold text-heading">Programs.com</span>
                {' '}— a venture by{' '}
                <span className="font-semibold text-heading">Brian Dean</span>,
                founder of Backlinko (acquired by Semrush).
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                <div className="logo-grayscale">
                  <Image
                    src="https://placehold.co/140x40/transparent/09090b?text=Programs.com&font=montserrat"
                    alt="Programs.com logo"
                    width={140}
                    height={40}
                    unoptimized
                  />
                </div>
                <div className="logo-grayscale">
                  <Image
                    src="https://placehold.co/140x40/transparent/09090b?text=Backlinko&font=montserrat"
                    alt="Backlinko logo"
                    width={140}
                    height={40}
                    unoptimized
                  />
                </div>
                <div className="logo-grayscale">
                  <Image
                    src="https://placehold.co/140x40/transparent/09090b?text=Semrush&font=montserrat"
                    alt="Semrush logo"
                    width={140}
                    height={40}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </FadeIn>
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
              expertise — we turn it into content, assets, and systems that ship.
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
              Real projects, real outcomes. Here&rsquo;s a snapshot of what we
              ship for B2B teams.
            </p>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {workItems.map((item, i) => (
              <FadeIn key={item.title} delay={`fade-delay-${i + 1}`}>
                <div className="shine-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-rule-dark bg-surface-dark-alt transition-all duration-300 hover:border-accent/30">
                  {/* Image area */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.imgAlt}
                      width={600}
                      height={400}
                      className="w-full transition-transform duration-500 group-hover:scale-[1.04]"
                      unoptimized
                    />
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-white">
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

              {/* Process image */}
              <FadeIn delay="fade-delay-1">
                <div className="img-float mt-8 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="https://placehold.co/480x320/f4f4f5/52525b?text=Transparent+image+here\nshowing+project+management\nboard+or+workflow+diagram&font=montserrat"
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

      {/* ══════════ CREDIBILITY + BANNER IMAGE ══════════ */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Stop scrambling. Start shipping.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-body">
                  When a company works with HookImpact, they stop relying on
                  last-minute requests and scattered freelancers. They get an
                  execution partner that owns the cadence, maintains brand
                  consistency, and delivers across channels.
                </p>
              </div>
              <div className="img-float overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://placehold.co/560x380/eef2ff/6366f1?text=Banner+image+here\nshowing+collateral+spread\nor+brand+asset+collection&font=montserrat"
                  alt="Collateral spread showing brand asset collection and marketing materials"
                  width={560}
                  height={380}
                  className="w-full"
                  unoptimized
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ CTA (dark) ══════════ */}
      <section className="dark-section bg-surface-dark">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-rule-dark bg-gradient-to-br from-surface-dark-alt to-surface-dark p-10 sm:p-16">
              <div className="pointer-events-none absolute right-[-20%] top-[-30%] h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
              <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                <div>
                  <h2 className="max-w-xl text-3xl font-bold sm:text-4xl">
                    Ready to build a marketing engine that works?
                  </h2>
                  <p className="mt-5 max-w-lg text-lg">
                    Tell us what you&rsquo;re building. We&rsquo;ll respond
                    with a clear plan — even if the answer is that you
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
                {/* CTA image */}
                <div className="img-angled hidden overflow-hidden rounded-2xl shadow-2xl lg:block">
                  <Image
                    src="https://placehold.co/480x340/1a1a2e/818cf8?text=Angled+mockup+here\nshowing+HookImpact\ndeliverables+preview&font=montserrat"
                    alt="Angled mockup showing HookImpact deliverables and content output preview"
                    width={480}
                    height={340}
                    className="w-full"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
