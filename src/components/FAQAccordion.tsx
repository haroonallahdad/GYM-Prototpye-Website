"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is included in the elite membership tiers?",
    answer: "All membership tiers grant full access to the Strength Arena, Cardio Loft, and the luxury Recovery Spa (featuring our custom cold plunges, infrared saunas, and red-light therapy chambers). Premium tiers include dedicated monthly 1-on-1 performance coaching sessions, advanced 3D body scans, and complimentary laundry services.",
  },
  {
    question: "How do I schedule personal training and recovery sessions?",
    answer: "All scheduling is handled through the TITAN member mobile app. You can book personal training sessions, secure a recovery suite reservation, or sign up for classes up to 7 days in advance.",
  },
  {
    question: "Do you offer guest passes or trial days?",
    answer: "To maintain an exclusive, uncrowded, and premium training environment, we do not sell public guest passes. However, prospective members can apply online for a private 1-day guided club trial, which includes a facility tour and a recovery session.",
  },
  {
    question: "What is your cancellation or membership freeze policy?",
    answer: "Memberships can be frozen free of charge for up to 3 months per year. Cancellations require a simple 14-day notice before your next billing date. You can request freezes or cancellations directly through the in-app portal or by talking to our front desk.",
  },
  {
    question: "What makes the Recovery Spa different from typical gym amenities?",
    answer: "Our Recovery Spa isn't just a locker-room sauna. It is a biohacking and physical recovery suite featuring clinical-grade cold plunges at 42°F, high-density red-light therapy panels, hyperbaric oxygen chambers, and compression therapy loungers designed to accelerate tissue repair and combat central nervous system fatigue.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto divide-y divide-white/5">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-5">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left font-display text-lg font-bold text-white hover:text-brand-accent transition-colors duration-200 group"
            >
              <span>{faq.question}</span>
              <span className="ml-4 flex-shrink-0 p-1.5 rounded-full bg-white/5 group-hover:bg-brand-accent/10 group-hover:text-brand-accent text-white/60 transition-colors duration-200">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 font-sans text-sm md:text-base leading-relaxed text-brand-text-muted">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
