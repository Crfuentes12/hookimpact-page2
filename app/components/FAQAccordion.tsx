'use client';

import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-rule rounded-2xl border border-rule bg-surface">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-8 py-6 text-left transition-colors hover:bg-surface-alt"
          >
            <span className="text-[15px] font-semibold text-heading pr-4">
              {item.q}
            </span>
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-rule text-heading transition-all duration-300 ${
                openIndex === i ? 'rotate-45 bg-accent border-accent text-white' : ''
              }`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-400 ease-out ${
              openIndex === i ? 'max-h-96 pb-6' : 'max-h-0'
            }`}
          >
            <p className="px-8 text-sm leading-relaxed text-muted">
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
