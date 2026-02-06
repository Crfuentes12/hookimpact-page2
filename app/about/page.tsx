import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import FAQAccordion from '../components/FAQAccordion';

export const metadata: Metadata = {
  title: 'About | HookImpact',
  description:
    'A small, distributed team built to ship consistently for companies that care about credibility.',
};

const values = [
  {
    title: 'Repeatable over reinvented',
    desc: 'Good marketing is not constant reinvention. It is building a system that turns real expertise into content people trust.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    title: 'Clarity over volume',
    desc: 'Say fewer things, more clearly. Every asset should support the message, not compete with it.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
      </svg>
    ),
  },
  {
    title: 'Quality as default',
    desc: 'Workflows that make quality the default outcome, not an accident. One standard, consistently applied.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: 'Ship consistently',
    desc: 'The companies that win are the ones that can produce reliably without losing clarity along the way.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-rule pt-28 lg:pt-36">
        <div className="dot-pattern pointer-events-none absolute inset-0 opacity-20" />
        <div className="animate-float pointer-events-none absolute left-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-purple-500/[0.06] to-indigo-500/[0.03] blur-3xl" />
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
              We are a small, distributed team built to ship consistently
              for companies that care about credibility. One standard, clean
              workflows, fast feedback loops, and output that looks intentional.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Background + Image */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <FadeIn>
            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Background
                </p>
                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Built inside B2B environments.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-body lg:text-lg">
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
              <div className="img-float overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://placehold.co/560x380/eef2ff/6366f1?text=Team+collaboration\nphoto+or+workspace\nillustration&font=montserrat"
                  alt="HookImpact team collaboration workspace"
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

      {/* Values */}
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
                <div className="card-hover group rounded-2xl border border-rule bg-surface p-8 transition-colors hover:border-accent/20">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/10 to-purple-500/5 text-accent">
                    {v.icon}
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

      {/* Team */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <FadeIn>
            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <div className="img-angled overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="https://placehold.co/560x380/f4f4f5/52525b?text=Remote+team\nworking+across\ntime+zones&font=montserrat"
                    alt="Distributed team working across time zones"
                    width={560}
                    height={380}
                    className="w-full"
                    unoptimized
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  The team
                </p>
                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Distributed by design.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-body lg:text-lg">
                  Our team is intentionally distributed. That is not a
                  gimmick. It is a practical way to combine different
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

      {/* CTA Stripe */}
      <section className="dark-section relative z-20 overflow-visible bg-gradient-to-r from-[#0c0c14] via-surface-dark to-[#0c0c14]">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-12 lg:py-20">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-bold text-white sm:text-4xl leading-[1.1]">
                  The right fit{' '}
                  <span className="gradient-text">matters.</span>
                </h2>
              </div>

              <div className="lg:col-span-4">
                <p className="text-sm leading-relaxed text-white/70">
                  If you want a team that builds a calm, repeatable marketing
                  engine with high-quality output across channels, we should talk.
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
                    src="https://placehold.co/280x370/eef2ff/6366f1?text=Studio\nworkspace\n3:4+format&font=montserrat"
                    alt="HookImpact studio workspace"
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

      {/* FAQ */}
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
                  Everything you need to know about working with us.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-8">
              <FadeIn delay="fade-delay-1">
                <FAQAccordion
                  items={[
                    {
                      q: 'How big is the team?',
                      a: 'We are a small, distributed studio. That is intentional. It means you work directly with the people doing the work, not with account managers or layers of coordination. We scale capacity through trusted collaborators when needed.',
                    },
                    {
                      q: 'Where are you based?',
                      a: 'The studio is led from Valencia, Spain, with collaborators across different regions. We work across time zones and have built our processes around async communication and clear handoffs.',
                    },
                    {
                      q: 'How does an engagement typically start?',
                      a: 'It starts with a short call to understand your goals, constraints, and current setup. From there, we propose a clear scope, realistic timeline, and a quality standard we commit to. No bloated discovery phases.',
                    },
                    {
                      q: 'Do you work with startups or only established companies?',
                      a: 'Both. What matters is that you have a real product or service, a clear audience, and a need for consistent content and creative output. We work with B2B teams at different stages.',
                    },
                    {
                      q: 'What makes HookImpact different from a traditional agency?',
                      a: 'We are operators, not presenters. We do not pitch 50-slide strategies that never ship. We build systems, produce assets, and maintain quality through a tight feedback loop. Think of us as an embedded execution team.',
                    },
                  ]}
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
