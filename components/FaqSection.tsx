"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "Will my phone photos and WhatsApp data be deleted during repair?",
    a: "No, absolutely not. For hardware repairs like screen/folder replacement, battery changes, camera, charging jack, or outer glass replacement, your device storage is never wiped. Your photos, contacts, WhatsApp messages, and banking applications remain 100% safe and intact.",
  },
  {
    q: "How long does a screen or folder replacement take?",
    a: "Most screen replacements for Apple, Samsung, Vivo, Oppo, OnePlus, and Xiaomi are completed within 30 to 45 minutes right in front of you. You can sit comfortably at our counter in Puran Market and watch the entire replacement process.",
  },
  {
    q: "Do you offer warranty on repair parts?",
    a: "Yes! All our premium folder and display replacements carry up to 6 Months testing warranty covering any touch response defect or glitch without physical drop damage. Replacement batteries also come with direct swap replacement warranty.",
  },
  {
    q: "What is OCA Glass Replacement and can my phone use it?",
    a: "If only the top glass of your phone is cracked but your screen display inside shows clean picture with fully responsive touch, you don't need a whole new folder! With our industrial OCA vacuum lamination machine, we remove only the shattered glass and fuse a brand new Gorilla glass on top. This keeps your 100% original factory display intact and saves you 50% to 70% of the cost.",
  },
  {
    q: "Do you offer exchange and buyback for old smartphones?",
    a: "Yes, bring your old Android or iPhone to our shop for a free instant valuation. You can exchange it on the spot against any brand new smartphone or certified pre-owned model with instant cash adjustment.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-3.5">
      {faqs.map((f, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="bg-[#151d30] border border-white/10 rounded-2xl overflow-hidden transition-colors hover:border-white/20"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white cursor-pointer"
            >
              <span>{f.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-blue-400" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
