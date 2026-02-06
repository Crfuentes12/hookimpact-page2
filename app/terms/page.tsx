import type { Metadata } from 'next';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
  title: 'Terms of Service | HookImpact',
  description: 'Terms of service for HookImpact. Rules and guidelines for using our website and services.',
};

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-rule pt-28 lg:pt-36">
        <div className="dot-pattern pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 lg:pb-28">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-subtle px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold tracking-wide text-accent">Legal</span>
            </div>
            <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">
              Terms of Service
            </h1>
          </FadeIn>
          <FadeIn delay="fade-delay-1">
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
              Last updated: February 2026
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <div className="space-y-12">
              <div>
                <h2 className="text-xl font-bold">1. Agreement to Terms</h2>
                <p className="mt-4 text-base leading-relaxed text-body">
                  By accessing our website or engaging our services, you agree to these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold">2. Services</h2>
                <p className="mt-4 text-base leading-relaxed text-body">
                  HookImpact provides content, creative, and marketing operations services for B2B teams. The specific scope, deliverables, timelines, and pricing for each engagement are defined in individual service agreements between HookImpact and the client.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold">3. Intellectual Property</h2>
                <p className="mt-4 text-base leading-relaxed text-body">
                  All content on this website, including text, graphics, logos, and design elements, is the property of HookImpact and is protected by intellectual property laws. Work produced for clients is subject to the terms of the individual service agreement.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold">4. Client Responsibilities</h2>
                <p className="mt-4 text-base leading-relaxed text-body">
                  Clients are responsible for providing accurate information, timely feedback, and necessary access to tools and platforms as outlined in the service agreement. Delays caused by client-side availability may affect project timelines.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold">5. Payment Terms</h2>
                <p className="mt-4 text-base leading-relaxed text-body">
                  Payment terms, including amounts, schedules, and methods, are specified in individual service agreements. Unless otherwise agreed, invoices are due within 15 business days of receipt.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold">6. Limitation of Liability</h2>
                <p className="mt-4 text-base leading-relaxed text-body">
                  HookImpact shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold">7. Termination</h2>
                <p className="mt-4 text-base leading-relaxed text-body">
                  Either party may terminate a service agreement with 30 days written notice unless otherwise specified. Upon termination, all completed deliverables will be transferred to the client and any outstanding payments become due.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold">8. Governing Law</h2>
                <p className="mt-4 text-base leading-relaxed text-body">
                  These terms are governed by the laws of Spain. Any disputes arising from these terms or our services shall be resolved in the courts of Valencia, Spain.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold">9. Contact</h2>
                <p className="mt-4 text-base leading-relaxed text-body">
                  For questions about these terms, please contact us at{' '}
                  <a href="mailto:hello@hookimpact.com" className="text-accent hover:text-accent-hover transition-colors">
                    hello@hookimpact.com
                  </a>.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
