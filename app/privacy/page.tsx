import type { Metadata } from 'next';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
  title: 'Privacy Policy | HookImpact',
  description: 'Privacy policy for HookImpact. How we collect, use, and protect your data.',
};

export default function PrivacyPage() {
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
              Privacy Policy
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
                <h2 className="text-xl font-bold">1. Information We Collect</h2>
                <p className="mt-4 text-base leading-relaxed text-body">
                  We collect information you provide directly when you fill out our contact form, including your name, email address, company name, and message content. We also collect basic analytics data about how visitors interact with our website, including page views and referring sources.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold">2. How We Use Your Information</h2>
                <p className="mt-4 text-base leading-relaxed text-body">
                  We use the information we collect to respond to your inquiries, provide our services, improve our website experience, and communicate about relevant updates. We do not sell, rent, or share your personal information with third parties for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold">3. Data Storage and Security</h2>
                <p className="mt-4 text-base leading-relaxed text-body">
                  Your data is stored securely using industry-standard practices. We use encrypted connections (HTTPS) for all data transmission. We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold">4. Cookies and Tracking</h2>
                <p className="mt-4 text-base leading-relaxed text-body">
                  Our website may use essential cookies to ensure basic functionality. We may also use analytics tools to understand website usage patterns. You can control cookie preferences through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold">5. Third-Party Services</h2>
                <p className="mt-4 text-base leading-relaxed text-body">
                  We may use third-party services for analytics, hosting, and communication. These services have their own privacy policies and we encourage you to review them. We only work with providers that maintain appropriate data protection standards.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold">6. Your Rights</h2>
                <p className="mt-4 text-base leading-relaxed text-body">
                  You have the right to access, correct, or delete your personal data. You may also request a copy of the data we hold about you. To exercise any of these rights, please contact us at hello@hookimpact.com.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold">7. Changes to This Policy</h2>
                <p className="mt-4 text-base leading-relaxed text-body">
                  We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold">8. Contact</h2>
                <p className="mt-4 text-base leading-relaxed text-body">
                  If you have any questions about this privacy policy, please contact us at{' '}
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
