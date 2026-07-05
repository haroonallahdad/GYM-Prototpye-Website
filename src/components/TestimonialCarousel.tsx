"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "TITAN is not just a gym; it is a high-performance sanctuary. The combination of Olympic-grade coaching and scientific recovery tools like the red-light chamber is unmatched in the country.",
    author: "Sarah Jenkins",
    role: "Managing Director, SV Tech Partners",
    rating: 5,
  },
  {
    id: 2,
    quote: "The trainers here treat you like a professional athlete. They analyze your biomechanics, fix structural weaknesses, and build real power. My mobility has never been better.",
    author: "David Carter",
    role: "Former D1 Collegiate Athlete",
    rating: 5,
  },
  {
    id: 3,
    quote: "I switched from Equinox, and the difference is night and day. TITAN has a completely different energy—minimalistic, focused, and clean, with premium equipment and zero crowds.",
    author: "Marcus Vance",
    role: "Founder, Capital Ventures",
    rating: 5,
  },
  {
    id: 4,
    quote: "The recovery suite is essential for my routine. Going straight from high-intensity squats into the cold plunge and red-light spa allows me to train hard 5 days a week without fatigue.",
    author: "Elena Rostova",
    role: "VP of Product, Apex Digital",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      {/* Background Quote Mark Decor */}
      <div className="absolute -top-10 -left-6 md:-left-12 opacity-5 text-brand-accent pointer-events-none select-none">
        <Quote className="w-32 h-32 fill-current" />
      </div>

      <div className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col items-center text-center px-6 md:px-12"
          >
            {/* Stars */}
            <div className="flex items-center space-x-1 mb-6 text-brand-accent">
              {[...Array(testimonials[index].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="font-sans text-xl md:text-2xl font-light italic leading-relaxed text-white/90 max-w-3xl mb-8">
              "{testimonials[index].quote}"
            </p>

            {/* Member Details */}
            <div>
              <h4 className="font-display text-lg font-bold text-white tracking-wide">
                {testimonials[index].author}
              </h4>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent mt-0.5">
                {testimonials[index].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center space-x-6 mt-8">
        <button
          onClick={prevTestimonial}
          className="p-3 rounded-full border border-white/10 hover:border-brand-accent hover:bg-brand-accent/5 text-white hover:text-brand-accent transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Indicator dots */}
        <div className="flex items-center space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "bg-brand-accent w-6" : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className="p-3 rounded-full border border-white/10 hover:border-brand-accent hover:bg-brand-accent/5 text-white hover:text-brand-accent transition-all duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
