import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
  title: 'Blog | HookImpact',
  description: 'Insights on content operations, B2B marketing, SEO, and creative production from the HookImpact team.',
};

const posts = [
  {
    tag: 'Content Strategy',
    title: 'Why most B2B content calendars fail (and what to do instead)',
    excerpt: 'The problem is not ideas. The problem is a system that turns those ideas into consistent, published content without burning out your team.',
    date: 'Coming soon',
  },
  {
    tag: 'SEO',
    title: 'Content refresh strategies that actually recover lost rankings',
    excerpt: 'Publishing new pages is only half the game. The companies winning in search are the ones systematically updating what they already have.',
    date: 'Coming soon',
  },
  {
    tag: 'Creative Ops',
    title: 'How to build a visual system your marketing team can actually use',
    excerpt: 'Brand guidelines collect dust. Visual systems get used. The difference is in how you structure templates, components, and production workflows.',
    date: 'Coming soon',
  },
  {
    tag: 'Marketing Ops',
    title: 'The real cost of scattered freelancers vs. a dedicated execution partner',
    excerpt: 'Freelancers are flexible. But at a certain scale, the coordination overhead eats the savings. Here is when it makes sense to switch.',
    date: 'Coming soon',
  },
  {
    tag: 'B2B Marketing',
    title: 'LinkedIn content that builds credibility (not just impressions)',
    excerpt: 'Vanity metrics are easy. Building a reputation that drives inbound conversations takes a different approach to what you publish and how.',
    date: 'Coming soon',
  },
  {
    tag: 'Operations',
    title: 'Setting up a content production workflow from scratch',
    excerpt: 'Briefs, review stages, approval flows, and publishing cadence. A practical guide to building the system before you scale the output.',
    date: 'Coming soon',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-rule pt-28 lg:pt-36">
        <div className="dot-pattern pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 lg:pb-28">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-subtle px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold tracking-wide text-accent">Blog</span>
            </div>
            <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">
              Insights and perspectives
            </h1>
          </FadeIn>
          <FadeIn delay="fade-delay-1">
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
              Practical thinking on content operations, B2B marketing, SEO, and building creative systems that scale.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <FadeIn key={post.title} delay={`fade-delay-${(i % 3) + 1}`}>
                <div className="card-hover group flex h-full flex-col rounded-2xl border border-rule bg-surface p-8 transition-colors hover:border-accent/20">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-accent-subtle px-3 py-1 text-xs font-medium text-accent">
                      {post.tag}
                    </span>
                    <span className="text-xs text-muted">{post.date}</span>
                  </div>
                  <h3 className="text-[15px] font-semibold leading-snug text-heading">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Read article
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay="fade-delay-2">
            <div className="mt-16 rounded-2xl border border-accent/20 bg-accent-subtle p-10 text-center">
              <h3 className="text-xl font-bold">Articles are on the way</h3>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted">
                We are preparing our first batch of articles. Want to be notified when they go live? Drop us a line.
              </p>
              <Link
                href="/contact"
                className="btn-glow mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover"
              >
                Get notified
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
