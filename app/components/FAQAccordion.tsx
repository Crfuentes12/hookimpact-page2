'use client';

import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-rule">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-5 text-left"
          >
            <span className="text-[15px] font-semibold text-heading pr-4">
              {item.q}
            </span>
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-rule text-heading transition-transform duration-200 ${
                openIndex === i ? 'rotate-45 bg-accent border-accent text-white' : ''
              }`}
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          <div
            style={{
              display: 'grid',
              gridTemplateRows: openIndex === i ? '1fr' : '0fr',
              transition: 'grid-template-rows 150ms ease',
            }}
          >
            <div className="overflow-hidden">
              <p className="pb-5 text-sm leading-relaxed text-muted">
                {item.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
