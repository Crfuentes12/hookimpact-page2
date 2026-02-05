import type { Metadata } from 'next';
import FadeIn from '../components/FadeIn';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — HookImpact',
  description:
    'Tell us what you are trying to achieve. We reply within two business days.',
};

export default function ContactPage() {
  return (
    <>
      {/* ─── Page header ─── */}
      <section className="border-b border-rule pt-28 lg:pt-36">
        <div className="mx-auto max-w-[72rem] px-6 pb-20 lg:px-8 lg:pb-28">
          <FadeIn>
            <p className="mb-6 text-xs font-medium uppercase tracking-widest text-muted">
              Contact
            </p>
            <h1 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
              Tell us what you are building.
            </h1>
          </FadeIn>
          <FadeIn delay="fade-delay-1">
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-body">
              Tell us what you are trying to achieve, what you are selling, and
              what is currently blocking your marketing execution. If it is a
              fit, we will propose a clear starting scope and a working rhythm
              that makes sense. If it is not a fit, we will tell you quickly and
              point you toward a better path.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Form section ─── */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[72rem] px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <FadeIn>
                <div className="space-y-10">
                  <div>
                    <p className="text-sm font-medium text-heading">
                      Response time
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      We reply within two business days. If your project is
                      time-sensitive, say so, and we will be direct about
                      whether we can realistically deliver.
                    </p>
                  </div>

                  <div className="border-t border-rule pt-10">
                    <p className="text-sm font-medium text-heading">
                      Email directly
                    </p>
                    <a
                      href="mailto:hello@hookimpact.com"
                      className="mt-2 block text-sm text-accent transition-colors hover:text-accent-hover"
                    >
                      hello@hookimpact.com
                    </a>
                  </div>

                  <div className="border-t border-rule pt-10">
                    <p className="text-sm font-medium text-heading">
                      Prefer a call?
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Mention it in your message and we will send a scheduling
                      link with available times.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <FadeIn delay="fade-delay-1">
                <p className="mb-10 text-sm leading-relaxed text-muted">
                  Use the form below or email us directly. If you already have
                  examples of content, brand guidelines, or assets you want us
                  to match, include them. The more context you share upfront,
                  the faster we can give you a serious answer.
                </p>
                <ContactForm />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Closing ─── */}
      <section>
        <div className="mx-auto max-w-[72rem] px-6 py-16 lg:px-8 lg:py-20">
          <FadeIn>
            <p className="max-w-xl text-sm leading-relaxed text-muted">
              We prefer simple, professional communication and clear
              expectations. If that is how you work too, you will like the
              process.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
