import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
  title: 'Case Studies — HookImpact',
  description:
    'Detailed case studies showing how we build content systems, campaign assets, SEO operations, and event collateral for B2B teams.',
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="relative overflow-hidden border-b border-rule pt-28 lg:pt-36">
        <div className="dot-pattern pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 lg:pb-28">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-subtle px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold tracking-wide text-accent">Case Studies</span>
            </div>
            <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">
              Real projects. Real outcomes.
            </h1>
          </FadeIn>
          <FadeIn delay="fade-delay-1">
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
              We don&rsquo;t believe in generic portfolios. These are detailed
              breakdowns of how we helped B2B teams build systems, ship assets,
              and maintain quality at scale.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ CASE STUDY 1: Programs.com ══════════ */}
      <section className="border-b border-rule py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          {/* Hero image — full width banner */}
          <FadeIn>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://placehold.co/1200x500/1a1a2e/818cf8?text=Wide+banner+image+here\nshowing+Programs.com+LinkedIn+carousel+spread\nwith+multiple+slide+designs+side+by+side&font=montserrat"
                alt="Wide banner showing Programs.com LinkedIn carousel spread with multiple slide designs"
                width={1200}
                height={500}
                className="w-full"
                unoptimized
              />
            </div>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
            {/* Left: Project info */}
            <div className="lg:col-span-4">
              <FadeIn>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">Client</p>
                    <h2 className="mt-2 text-3xl font-bold">Programs.com</h2>
                  </div>
                  <div className="space-y-3 border-t border-rule pt-6">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted">Founded by</p>
                      <p className="mt-1 text-sm font-semibold text-heading">Brian Dean</p>
                      <p className="text-xs text-muted">Founder of Backlinko (acquired by Semrush)</p>
                    </div>
                    <div className="pt-2">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted">Industry</p>
                      <p className="mt-1 text-sm text-heading">Cybersecurity Education</p>
                    </div>
                    <div className="pt-2">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted">Services</p>
                      <p className="mt-1 text-sm text-heading">Social Content System, Visual Design, Editorial Strategy</p>
                    </div>
                  </div>
                  {/* Logos */}
                  <div className="flex flex-wrap items-center gap-4 border-t border-rule pt-6">
                    <Image
                      src="https://placehold.co/100x32/f4f4f5/52525b?text=Programs.com&font=montserrat"
                      alt="Programs.com logo"
                      width={100}
                      height={32}
                      unoptimized
                    />
                    <Image
                      src="https://placehold.co/100x32/f4f4f5/52525b?text=Backlinko&font=montserrat"
                      alt="Backlinko logo"
                      width={100}
                      height={32}
                      unoptimized
                    />
                    <Image
                      src="https://placehold.co/100x32/f4f4f5/52525b?text=Semrush&font=montserrat"
                      alt="Semrush logo"
                      width={100}
                      height={32}
                      unoptimized
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Story */}
            <div className="lg:col-span-8">
              <FadeIn delay="fade-delay-1">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold">The Challenge</h3>
                    <p className="mt-3 text-base leading-relaxed text-body">
                      Programs.com needed to translate complex, technical
                      cybersecurity certification content into social-first
                      narratives that resonated with executives and marketing
                      audiences. The topics were dense, the audience was
                      senior-level, and the standard had to match the credibility
                      of Brian Dean&rsquo;s existing brand. Random freelancers and
                      generic content mills were not an option.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">What We Built</h3>
                    <p className="mt-3 text-base leading-relaxed text-body">
                      We designed and operated a complete social content system:
                      editorial themes, narrative frameworks, a visual design
                      language for LinkedIn carousels, and a production cadence
                      that shipped consistent, high-signal content week after
                      week. Every piece was written with a strong point of view,
                      designed with a tight visual standard, and edited to match
                      the level of quality the Backlinko audience expects.
                    </p>
                  </div>

                  {/* Detail images — alternating layout */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="img-float overflow-hidden rounded-xl shadow-md">
                      <Image
                        src="https://placehold.co/500x350/eef2ff/6366f1?text=LinkedIn+carousel\nslide+1+close-up\nfor+Programs.com&font=montserrat"
                        alt="Close-up of LinkedIn carousel slide design for Programs.com"
                        width={500}
                        height={350}
                        className="w-full"
                        unoptimized
                      />
                    </div>
                    <div className="img-float overflow-hidden rounded-xl shadow-md">
                      <Image
                        src="https://placehold.co/500x350/eef2ff/6366f1?text=Carousel+slide+2\ndata+visualization\nfor+cybersecurity+topic&font=montserrat"
                        alt="Carousel slide showing data visualization for cybersecurity topic"
                        width={500}
                        height={350}
                        className="w-full"
                        unoptimized
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">The Impact</h3>
                    <p className="mt-3 text-base leading-relaxed text-body">
                      Programs.com established a consistent, recognizable social
                      presence that educated senior audiences without
                      oversimplifying. The content system we built became the
                      engine — repeatable, scalable, and tied to a clear
                      editorial standard that the internal team could maintain and
                      expand.
                    </p>
                  </div>

                  {/* Full-width detail image */}
                  <div className="img-angled overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src="https://placehold.co/800x400/f4f4f5/52525b?text=Angled+image+here\nshowing+full+carousel+spread\nwith+6-8+slides+visible&font=montserrat"
                      alt="Full carousel spread showing 6-8 LinkedIn slides for Programs.com"
                      width={800}
                      height={400}
                      className="w-full"
                      unoptimized
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CASE STUDY 2: TouchSuite ══════════ */}
      <section className="border-b border-rule bg-surface-alt py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
            {/* Left: Image composition */}
            <div className="lg:col-span-6">
              <FadeIn>
                <div className="relative">
                  <div className="img-angled-reverse overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src="https://placehold.co/600x420/1a1a2e/818cf8?text=TouchSuite+landing+page\nmockup+on+laptop\nshowing+hero+section&font=montserrat"
                      alt="TouchSuite landing page mockup showing the hero section on a laptop screen"
                      width={600}
                      height={420}
                      className="w-full"
                      unoptimized
                    />
                  </div>
                  {/* Overlapping smaller image */}
                  <div className="absolute -bottom-6 -right-6 z-10 overflow-hidden rounded-xl shadow-xl">
                    <Image
                      src="https://placehold.co/240x180/eef2ff/6366f1?text=Ad+creative\nvariation+preview&font=montserrat"
                      alt="Ad creative variation preview for TouchSuite campaigns"
                      width={240}
                      height={180}
                      className="w-full"
                      unoptimized
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-6">
              <FadeIn delay="fade-delay-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">Case Study</p>
                <h2 className="mt-2 text-3xl font-bold">TouchSuite</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-accent-subtle px-3 py-1 text-xs font-medium text-accent">Fintech</span>
                  <span className="rounded-full bg-accent-subtle px-3 py-1 text-xs font-medium text-accent">Campaign Assets</span>
                  <span className="rounded-full bg-accent-subtle px-3 py-1 text-xs font-medium text-accent">Landing Pages</span>
                </div>
              </FadeIn>

              <FadeIn delay="fade-delay-2">
                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold">The Challenge</h3>
                    <p className="mt-2 text-base leading-relaxed text-body">
                      TouchSuite needed to scale their demand generation with
                      consistent, professional campaign assets — but their
                      marketing output looked fragmented. Different designers,
                      different styles, and no unified system. The sales team
                      was asking for materials that didn&rsquo;t exist, and
                      launches kept getting delayed by creative bottlenecks.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">What We Delivered</h3>
                    <p className="mt-2 text-base leading-relaxed text-body">
                      We built a complete campaign asset system: landing pages
                      optimized for conversion, ad creative variations for paid
                      media, sales one-pagers, email templates, and a visual
                      design system that ensured every touchpoint looked like
                      one brand. Turnaround times dropped and the sales team
                      finally had materials they could use confidently.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Extra images row */}
          <FadeIn delay="fade-delay-2">
            <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="img-float overflow-hidden rounded-xl shadow-md">
                <Image
                  src="https://placehold.co/400x280/f4f4f5/52525b?text=TouchSuite\nemail+template\ndesign+preview&font=montserrat"
                  alt="Email template design preview for TouchSuite"
                  width={400}
                  height={280}
                  className="w-full"
                  unoptimized
                />
              </div>
              <div className="img-float overflow-hidden rounded-xl shadow-md">
                <Image
                  src="https://placehold.co/400x280/f4f4f5/52525b?text=Sales+one-pager\nfront+side\nwith+key+features&font=montserrat"
                  alt="Sales one-pager front side showing key features for TouchSuite"
                  width={400}
                  height={280}
                  className="w-full"
                  unoptimized
                />
              </div>
              <div className="img-float overflow-hidden rounded-xl shadow-md">
                <Image
                  src="https://placehold.co/400x280/f4f4f5/52525b?text=Paid+media\nad+creative+set\nmultiple+variations&font=montserrat"
                  alt="Paid media ad creative set with multiple variations for TouchSuite"
                  width={400}
                  height={280}
                  className="w-full"
                  unoptimized
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ CASE STUDY 3: Literanker ══════════ */}
      <section className="border-b border-rule py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
            {/* Left: Content */}
            <div className="lg:col-span-6">
              <FadeIn>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">Case Study</p>
                <h2 className="mt-2 text-3xl font-bold">Literanker</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-accent-subtle px-3 py-1 text-xs font-medium text-accent">SEO Content</span>
                  <span className="rounded-full bg-accent-subtle px-3 py-1 text-xs font-medium text-accent">Content Operations</span>
                  <span className="rounded-full bg-accent-subtle px-3 py-1 text-xs font-medium text-accent">Editorial Systems</span>
                </div>
              </FadeIn>

              <FadeIn delay="fade-delay-1">
                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold">The Challenge</h3>
                    <p className="mt-2 text-base leading-relaxed text-body">
                      Literanker needed to scale SEO content production without
                      sacrificing quality. Their existing process was manual,
                      inconsistent, and couldn&rsquo;t keep up with the volume
                      required to compete in their market. Content briefs were
                      ad hoc, editorial standards varied by writer, and
                      published pages weren&rsquo;t being refreshed as search
                      intent evolved.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">What We Built</h3>
                    <p className="mt-2 text-base leading-relaxed text-body">
                      We designed a complete content operations system:
                      structured briefs with intent mapping, a production
                      workflow with clear review stages, editorial guidelines
                      that maintained consistency across writers, and a content
                      refresh cadence that kept existing pages competitive. AI
                      was used responsibly to accelerate research and drafting,
                      with a strong human editorial layer.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">The Impact</h3>
                    <p className="mt-2 text-base leading-relaxed text-body">
                      Literanker went from ad-hoc content production to a
                      systematic engine. Output increased while maintaining
                      editorial quality, existing content was refreshed to
                      recover lost rankings, and the team had a repeatable
                      process they could scale independently.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Image composition */}
            <div className="lg:col-span-6">
              <FadeIn delay="fade-delay-2">
                <div className="relative">
                  <div className="img-angled overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src="https://placehold.co/600x420/eef2ff/6366f1?text=SEO+content+dashboard\nshowing+keyword+rankings\nand+content+pipeline&font=montserrat"
                      alt="SEO content dashboard showing keyword rankings and content pipeline for Literanker"
                      width={600}
                      height={420}
                      className="w-full"
                      unoptimized
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 z-10 overflow-hidden rounded-xl shadow-xl">
                    <Image
                      src="https://placehold.co/240x180/f4f4f5/52525b?text=Content+brief\ntemplate+preview&font=montserrat"
                      alt="Content brief template preview for Literanker SEO system"
                      width={240}
                      height={180}
                      className="w-full"
                      unoptimized
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CASE STUDY 4: Continuum ══════════ */}
      <section className="dark-section border-b border-rule-dark bg-surface-dark py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          {/* Full-width hero image */}
          <FadeIn>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://placehold.co/1200x500/27272a/818cf8?text=Wide+banner+image+here\nshowing+Continuum+event+booth+setup\nwith+branded+signage+and+banners&font=montserrat"
                alt="Wide banner showing Continuum event booth setup with branded signage and banners"
                width={1200}
                height={500}
                className="w-full"
                unoptimized
              />
            </div>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <FadeIn delay="fade-delay-1">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent-light">Case Study</p>
                    <h2 className="mt-2 text-3xl font-bold text-white">Continuum</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-rule-dark bg-white/5 px-3 py-1 text-xs font-medium text-white">Events</span>
                    <span className="rounded-full border border-rule-dark bg-white/5 px-3 py-1 text-xs font-medium text-white">Corporate Collateral</span>
                    <span className="rounded-full border border-rule-dark bg-white/5 px-3 py-1 text-xs font-medium text-white">Print Production</span>
                  </div>
                  <div className="border-t border-rule-dark pt-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">Scope</p>
                    <p className="mt-1 text-sm text-white/80">
                      Booth design, signage, banners, one-pagers, presentation
                      decks, sales materials
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-8">
              <FadeIn delay="fade-delay-2">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-white">The Challenge</h3>
                    <p className="mt-3 text-base leading-relaxed">
                      Continuum needed professional event collateral for multiple
                      trade shows and corporate events, but their existing
                      materials were inconsistent and didn&rsquo;t meet the
                      production standards required for large-format printing and
                      professional booth installations. The brand needed to look
                      established, cohesive, and credible in rooms full of
                      competitors with polished setups.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">What We Delivered</h3>
                    <p className="mt-3 text-base leading-relaxed">
                      We designed and produced the full suite: booth graphics
                      with proper bleed and resolution for large-format output,
                      retractable banner designs, branded signage systems,
                      one-pagers for different audiences, presentation decks for
                      on-site meetings, and sales leave-behinds. Every piece was
                      print-ready, brand-consistent, and designed to work as a
                      system rather than isolated assets.
                    </p>
                  </div>

                  {/* Detail images */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="img-float overflow-hidden rounded-xl shadow-lg">
                      <Image
                        src="https://placehold.co/500x350/18181b/818cf8?text=Booth+graphic\ndesign+close-up\nfor+Continuum&font=montserrat"
                        alt="Close-up of booth graphic design for Continuum trade show"
                        width={500}
                        height={350}
                        className="w-full"
                        unoptimized
                      />
                    </div>
                    <div className="img-float overflow-hidden rounded-xl shadow-lg">
                      <Image
                        src="https://placehold.co/500x350/18181b/818cf8?text=Retractable+banner\nand+one-pager\nprint+mockup&font=montserrat"
                        alt="Retractable banner and one-pager print mockup for Continuum events"
                        width={500}
                        height={350}
                        className="w-full"
                        unoptimized
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">The Impact</h3>
                    <p className="mt-3 text-base leading-relaxed">
                      Continuum showed up to events looking established and
                      intentional. The collateral system we built was reusable
                      across multiple events with minimal adaptation, saving
                      time and budget while maintaining a premium, cohesive
                      brand presence that stood out on the show floor.
                    </p>
                  </div>

                  {/* Wide angled image */}
                  <div className="img-angled-reverse overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src="https://placehold.co/800x400/27272a/818cf8?text=Angled+image+here\nshowing+full+event+setup\nwith+all+collateral+pieces+visible&font=montserrat"
                      alt="Full event setup showing all Continuum collateral pieces in place"
                      width={800}
                      height={400}
                      className="w-full"
                      unoptimized
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Want to see work relevant to your industry?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-body">
                We share curated samples after a short call, because context
                matters. Tell us what you&rsquo;re building and we&rsquo;ll show
                you exactly what applies.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
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
                  See our services
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
