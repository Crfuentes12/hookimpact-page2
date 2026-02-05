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
      <div className="rounded-sm border border-rule bg-surface-alt px-8 py-12 text-center">
        <p className="mb-2 text-lg font-semibold text-heading">
          Message received.
        </p>
        <p className="text-body">
          We will be in touch within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-heading">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-b border-rule bg-transparent py-3 text-heading outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-heading">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border-b border-rule bg-transparent py-3 text-heading outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-heading">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full border-b border-rule bg-transparent py-3 text-heading outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
          placeholder="Company name"
        />
      </div>

      <div>
        <label htmlFor="need" className="mb-2 block text-sm font-medium text-heading">
          What do you need help with?
        </label>
        <select
          id="need"
          name="need"
          className="w-full border-b border-rule bg-transparent py-3 text-heading outline-none transition-colors focus:border-accent"
          defaultValue=""
        >
          <option value="" disabled>Select one</option>
          <option value="content">Content systems (LinkedIn, SEO, editorial)</option>
          <option value="creative">Creative production and campaign assets</option>
          <option value="collateral">Event and corporate collateral</option>
          <option value="operations">Marketing operations and automation</option>
          <option value="full">Full marketing execution support</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-heading">
          Tell us more
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none border-b border-rule bg-transparent py-3 text-heading outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
          placeholder="What are you building, what is blocking you, and what does success look like?"
        />
      </div>

      <div>
        <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-heading">
          Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          className="w-full border-b border-rule bg-transparent py-3 text-heading outline-none transition-colors focus:border-accent"
          defaultValue=""
        >
          <option value="" disabled>How soon do you need to start?</option>
          <option value="asap">As soon as possible</option>
          <option value="month">Within a month</option>
          <option value="quarter">This quarter</option>
          <option value="exploring">Just exploring</option>
        </select>
      </div>

      <button
        type="submit"
        className="inline-flex items-center border border-accent bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-hover"
      >
        Send message
      </button>
    </form>
  );
}
