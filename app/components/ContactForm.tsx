'use client';

import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-rule bg-surface-alt px-8 py-16 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
          <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-lg font-semibold text-heading">Message received.</p>
        <p className="mt-2 text-sm text-muted">
          We&apos;ll be in touch within two business days.
        </p>
      </div>
    );
  }

  const inputClasses =
    'w-full rounded-xl border border-rule bg-surface px-4 py-3 text-sm text-heading outline-none transition-all duration-200 placeholder:text-muted/50 focus:border-accent focus:ring-2 focus:ring-accent/10';
  const labelClasses = 'mb-2 block text-sm font-medium text-heading';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>Name</label>
          <input type="text" id="name" name="name" required className={inputClasses} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>Email</label>
          <input type="email" id="email" name="email" required className={inputClasses} placeholder="you@company.com" />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClasses}>Company</label>
        <input type="text" id="company" name="company" className={inputClasses} placeholder="Company name" />
      </div>

      <div>
        <label htmlFor="need" className={labelClasses}>What do you need?</label>
        <select id="need" name="need" className={inputClasses} defaultValue="">
          <option value="" disabled>Select one</option>
          <option value="content">Content systems (LinkedIn, SEO, editorial)</option>
          <option value="creative">Creative production &amp; campaign assets</option>
          <option value="collateral">Event &amp; corporate collateral</option>
          <option value="operations">Marketing operations &amp; automation</option>
          <option value="full">Full marketing execution support</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>Tell us more</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={`${inputClasses} resize-none`}
          placeholder="What are you building and where do you need help?"
        />
      </div>

      <div>
        <label htmlFor="timeline" className={labelClasses}>Timeline</label>
        <select id="timeline" name="timeline" className={inputClasses} defaultValue="">
          <option value="" disabled>How soon do you need to start?</option>
          <option value="asap">As soon as possible</option>
          <option value="month">Within a month</option>
          <option value="quarter">This quarter</option>
          <option value="exploring">Just exploring</option>
        </select>
      </div>

      <button
        type="submit"
        className="btn-glow inline-flex w-full items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-lg sm:w-auto"
      >
        Send message
        <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </form>
  );
}
