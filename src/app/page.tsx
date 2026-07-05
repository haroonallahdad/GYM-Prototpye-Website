"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Activity,
  HeartHandshake,
  Check,
  Mail,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  Sparkles,
  Award,
  Lock,
} from "lucide-react";

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

import Navbar from "@/components/Navbar";
import StatCounter from "@/components/StatCounter";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");
  const [activeZone, setActiveZone] = useState<number>(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [ctaEmail, setCtaEmail] = useState("");
  const [isCtaSubmitted, setIsCtaSubmitted] = useState(false);
  const [isNewsSubmitted, setIsNewsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ctaEmail.trim()) {
      setIsCtaSubmitted(true);
      setCtaEmail("");
    }
  };

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsNewsSubmitted(true);
      setNewsletterEmail("");
    }
  };

  const pricingPlans = [
    {
      name: "Club Pass",
      description: "Full access to elite strength equipment and cardio loft.",
      price: billingPeriod === "monthly" ? 149 : 119,
      features: [
        "24/7 keyless club access",
        "Unlimited Strength Arena access",
        "Unlimited Cardio Loft access",
        "Premium locker rooms & saunas",
        "Complimentary towel service",
        "1x Biometric assessment",
      ],
      cta: "Apply For Club Pass",
      popular: false,
    },
    {
      name: "Performance",
      description: "Our recommended tier integrating advanced muscle recovery.",
      price: billingPeriod === "monthly" ? 249 : 199,
      features: [
        "All Club Pass benefits",
        "Unlimited Recovery Spa access",
        "Guided Cold Plunge sessions",
        "Guided Red Light Therapy sessions",
        "1x Monthly 3D body scan & review",
        "2x Guest passes per month",
        "10% discount at the Fuel Bar",
      ],
      cta: "Apply For Performance",
      popular: true,
    },
    {
      name: "Elite Coaching",
      description: "The ultimate program with dedicated 1-on-1 coaching.",
      price: billingPeriod === "monthly" ? 399 : 319,
      features: [
        "All Performance benefits",
        "4x 1-on-1 coaching sessions /mo",
        "Custom nutrition & meal planning",
        "Priority Recovery Spa reservations",
        "Daily workout laundry service",
        "Unlimited guest privileges",
        "20% discount at the Fuel Bar",
      ],
      cta: "Apply For Elite Coaching",
      popular: false,
    },
  ];

  const zones = [
    {
      title: "Strength Arena",
      description:
        "Engineered for high performance. Equipped with custom-welded Eleiko squat racks, competition plates, dumbbells up to 150 lbs, and state-of-the-art selectorized plate-loaded machines.",
      image: "/images/facility_strength.png",
      tag: "Power & Biomechanics",
    },
    {
      title: "Recovery Spa",
      description:
        "Accelerate cellular repair and fight central nervous system fatigue. Features clinical-grade cold plunges at 42°F, high-output red-light therapy chambers, and premium custom cedar saunas.",
      image: "/images/facility_recovery.png",
      tag: "Contrast & Longevity",
    },
    {
      title: "Cardio Loft",
      description:
        "Experience cardio with high-definition connected screens, overlooking city views. Features woodway curve treadmills, custom assault bikes, and advanced metabolic tracking connectivity.",
      image: "/images/facility_cardio.png",
      tag: "Stamina & Conditioning",
    },
  ];

  const trainers = [
    {
      name: "Marcus Vance",
      role: "Head of Strength & Biomechanics",
      image: "/images/trainer_1.png",
      certs: ["M.S. Sports Science", "CSCS *D"],
      specialty: "Olympic Weightlifting, Hypertrophy",
      bio: "Marcus has spent over 12 years training professional NFL and collegiate athletes, focusing on biomechanics and raw power output.",
    },
    {
      name: "Elena Rostova",
      role: "Director of Performance & Conditioning",
      image: "/images/trainer_2.png",
      certs: ["B.S. Kinesiology", "NASM-PES"],
      specialty: "Metabolic Conditioning, Athletic Movement",
      bio: "Elena specializes in athletic conditioning and high-intensity movement, helping busy executives build durable, lean physiques.",
    },
    {
      name: "Michael Chen",
      role: "Head of Recovery & Mobility",
      image: "/images/trainer_3.png",
      certs: ["Doctor of Physical Therapy", "FMS Level 2"],
      specialty: "Injury Prevention, Joint Articulation",
      bio: "Dr. Chen bridges the gap between intense strength training and long-term joint longevity, managing our recovery methodologies.",
    },
  ];

  // Animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: -80,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
            className="fixed inset-0 z-50 bg-[#080808] flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="space-y-6 flex flex-col items-center text-center">
              {/* Brand Logo and Text */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center space-y-4"
              >
                <div className="relative w-16 h-16">
                  <Image
                    src="/icon.png"
                    alt="TITAN Logo"
                    fill
                    sizes="64px"
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="font-display font-black text-4xl sm:text-5xl tracking-tighter text-white">
                  TITAN<span className="text-brand-accent">.</span>
                </span>
              </motion.div>

              {/* Progress Bar */}
              <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                  onAnimationComplete={() => setIsLoading(false)}
                  className="h-full bg-brand-accent shadow-[0_0_15px_rgba(206,255,0,0.6)]"
                />
              </div>

              {/* Status text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0.5, 0] }}
                transition={{ duration: 1.8, times: [0, 0.2, 0.8, 1] }}
                className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted"
              >
                ENGINES ACTIVE • STANDBY
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      <main className="flex-grow pt-20">
        {/* HERO SECTION */}
        <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-6">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero_bg.png"
              alt="TITAN Premium Gym Interior"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-[0.35]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/75" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/85 via-[#080808]/40 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 md:py-20">
            {/* Hero Copy */}
            <div className="lg:col-span-8 flex flex-col items-start text-left space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-brand-accent-muted px-4 py-1.5 rounded-full border border-brand-accent/20"
              >
                <Sparkles className="w-4 h-4 text-brand-accent" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                  Elite Fitness & Recovery • Beverly Hills, CA
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-white uppercase"
              >
                ELEVATE TO <br />
                <span className="text-brand-accent">ELITE STATUS.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="max-w-2xl font-sans text-lg md:text-xl text-brand-text-muted font-light leading-relaxed"
              >
                Experience the next evolution of performance. TITAN integrates world-class strength training, biomechanically optimized gear, and advanced scientific recovery in an exclusive, low-density environment.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4"
              >
                <a
                  href="#cta"
                  className="px-8 py-4 bg-brand-accent hover:bg-brand-accent-hover text-black text-center font-bold rounded-full shadow-[0_0_30px_rgba(206,255,0,0.3)] hover:shadow-[0_0_35px_rgba(206,255,0,0.5)] transition-all duration-300"
                >
                  Join Today
                </a>
                <a
                  href="#pricing"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white text-center font-semibold rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  Book a Free Tour
                </a>
              </motion.div>
            </div>

            {/* Side Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="lg:col-span-4 glass-panel rounded-3xl p-8 border border-white/10 flex flex-col justify-between space-y-8 relative overflow-hidden"
            >
              {/* Radial gradient background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

              <h3 className="font-display text-sm font-black uppercase tracking-widest text-white/50 border-b border-white/5 pb-4">
                Titan Club Metrics
              </h3>

              <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-brand-text-muted">
                    Elite Members
                  </p>
                  <p className="text-3xl font-display font-black text-white mt-1">
                    <StatCounter value={1200} suffix="+" />
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-brand-text-muted">
                    Expert Coaches
                  </p>
                  <p className="text-3xl font-display font-black text-white mt-1">
                    <StatCounter value={18} />
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-brand-text-muted">
                    Recovery Suites
                  </p>
                  <p className="text-3xl font-display font-black text-white mt-1">
                    <StatCounter value={4} />
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-brand-text-muted">
                    Transformation %
                  </p>
                  <p className="text-3xl font-display font-black text-brand-accent mt-1">
                    <StatCounter value={99} suffix="%" />
                  </p>
                </div>
              </div>

              <div className="bg-brand-accent/5 rounded-2xl p-4 border border-brand-accent/10 flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-brand-accent-muted text-brand-accent">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    Restricted Capacity Cap
                  </p>
                  <p className="text-[11px] text-brand-text-muted mt-0.5 leading-snug">
                    Memberships are capped annually to ensure zero queues for equipment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHY CHOOSE US (BENTO GRID) */}
        <section id="why-choose" className="py-24 md:py-32 max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                The Club Standard
              </span>
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none uppercase text-white">
                WHY LEADERS CHOOSE <br />
                <span className="text-outline text-outline-hover">TITAN ARENA</span>
              </h2>
            </div>
            <p className="max-w-md font-sans text-brand-text-muted font-light text-base md:text-lg leading-relaxed mt-6 md:mt-0">
              We did not build another corporate gym. We engineered a private athletic workspace for those who demand maximum performance and elite results.
            </p>
          </div>

          {/* Bento Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Card 1: Large Card */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 glow-card glow-card-hover rounded-3xl p-8 md:p-12 flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/10 transition-all duration-500 pointer-events-none" />

              <div className="space-y-6">
                <div className="p-3 bg-brand-accent-muted rounded-2xl w-fit text-brand-accent">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-black uppercase text-white tracking-wide leading-tight">
                  Scientific Personal Coaching & Biometrics
                </h3>
                <p className="font-sans text-sm md:text-base text-brand-text-muted font-light leading-relaxed max-w-xl">
                  No guesswork. Our elite trainers hold degrees in Sports Science or Kinesiology. We kickstart your path with comprehensive biomechanical movement screens, metabolic tracking, and targeted muscle activation matrices.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                <span className="px-3.5 py-1.5 bg-white/5 rounded-full text-xs font-semibold text-white/80 border border-white/5">
                  Biomechanics Screen
                </span>
                <span className="px-3.5 py-1.5 bg-white/5 rounded-full text-xs font-semibold text-white/80 border border-white/5">
                  Metabolic Analysis
                </span>
                <span className="px-3.5 py-1.5 bg-white/5 rounded-full text-xs font-semibold text-white/80 border border-white/5">
                  Force Output Diagnostics
                </span>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={itemVariants}
              className="glow-card glow-card-hover rounded-3xl p-8 md:p-10 flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6">
                <div className="p-3 bg-brand-accent-muted rounded-2xl w-fit text-brand-accent">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-black uppercase text-white tracking-wide">
                  Clinical Recovery Spa
                </h3>
                <p className="font-sans text-sm text-brand-text-muted font-light leading-relaxed">
                  Unlock faster gains. Contrast therapy triggers cellular repair. Access custom cold plunges calibrated to 42°F, high-output red-light beds, and deep infrared saunas.
                </p>
              </div>

              <div className="mt-8 flex items-center text-brand-accent text-sm font-bold group-hover:translate-x-2 transition-transform duration-300">
                <span>Explore the recovery suite</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={itemVariants}
              className="glow-card glow-card-hover rounded-3xl p-8 md:p-10 flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6">
                <div className="p-3 bg-brand-accent-muted rounded-2xl w-fit text-brand-accent">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-black uppercase text-white tracking-wide">
                  Exclusive Member Cap
                </h3>
                <p className="font-sans text-sm text-brand-text-muted font-light leading-relaxed">
                  We guarantee an optimal environment. TITAN membership is limited to a strict cap to prevent overcrowding, ensuring you never wait for equipment or space.
                </p>
              </div>

              <div className="mt-8 text-xs font-semibold text-brand-text-muted flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
                <span>Restricted enrollment for 2026</span>
              </div>
            </motion.div>

            {/* Card 4: Large Card */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 glow-card glow-card-hover rounded-3xl p-8 md:p-12 flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/10 transition-all duration-500 pointer-events-none" />

              <div className="space-y-6">
                <div className="p-3 bg-brand-accent-muted rounded-2xl w-fit text-brand-accent">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-black uppercase text-white tracking-wide leading-tight">
                  Five-Star Executive Amenities
                </h3>
                <p className="font-sans text-sm md:text-base text-brand-text-muted font-light leading-relaxed max-w-xl">
                  Step off the deck into absolute comfort. Enjoy clean private rain showers, thick custom Turkish towels, organic Dyson hair care zones, and a complimentary protein shake menu curated for you at the Fuel Bar.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                <span className="px-3.5 py-1.5 bg-white/5 rounded-full text-xs font-semibold text-white/80 border border-white/5">
                  Fuel & Shake Bar
                </span>
                <span className="px-3.5 py-1.5 bg-white/5 rounded-full text-xs font-semibold text-white/80 border border-white/5">
                  Premium Towel & Laundry Service
                </span>
                <span className="px-3.5 py-1.5 bg-white/5 rounded-full text-xs font-semibold text-white/80 border border-white/5">
                  Dyson Beauty Suites
                </span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* FACILITIES INTERACTIVE SHOWCASE */}
        <section id="facilities" className="py-24 md:py-32 bg-zinc-950/40 border-y border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                Architectural design
              </span>
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white">
                THE ZONES OF TITAN
              </h2>
              <p className="font-sans text-brand-text-muted font-light text-base md:text-lg">
                Explore our three architectural spaces built to fuel intensity and accelerate recovery.
              </p>
            </div>

            {/* Zone layout switcher */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Selector Menu */}
              <div className="lg:col-span-4 flex flex-col space-y-3">
                {zones.map((zone, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveZone(idx)}
                    className={`p-6 rounded-2xl text-left border transition-all duration-300 flex flex-col space-y-2 relative overflow-hidden group ${
                      activeZone === idx
                        ? "bg-brand-accent/5 border-brand-accent/30 text-white"
                        : "bg-transparent border-white/5 hover:border-white/20 text-white/50"
                    }`}
                  >
                    {activeZone === idx && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-0 bottom-0 w-[4px] bg-brand-accent"
                      />
                    )}
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent">
                      {zone.tag}
                    </span>
                    <span className="font-display text-xl font-bold tracking-wide">
                      {zone.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Right Showcase Display */}
              <div className="lg:col-span-8">
                <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 group">
                  {/* Dynamic Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={zones[activeZone].image}
                      alt={zones[activeZone].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 800px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>

                  {/* Dynamic Details card overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-left">
                    <motion.div
                      key={activeZone}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-3"
                    >
                      <h3 className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
                        {zones[activeZone].title}
                      </h3>
                      <p className="font-sans text-sm md:text-base text-white/80 font-light leading-relaxed max-w-2xl">
                        {zones[activeZone].description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRANSFORMATION RESULTS SLIDER */}
        <section id="results" className="py-24 md:py-32 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Slider Copy */}
            <div className="lg:col-span-4 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                Case Study Results
              </span>
              <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight leading-none uppercase text-white">
                BIOMETRIC <br />
                <span className="text-brand-accent">TRANSFORMATION</span>
              </h2>
              <p className="font-sans text-brand-text-muted font-light text-base md:text-lg leading-relaxed">
                We combine scientific conditioning blocks with clinical recovery to produce structural physical change. This is the timeline of a 12-week custom program.
              </p>

              <div className="space-y-4 border-t border-white/10 pt-6">
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-white mb-1.5">
                    <span>Average Fat Reduction</span>
                    <span className="text-brand-accent">-8.4%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[84%] h-full bg-brand-accent rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-white mb-1.5">
                    <span>Average Lean Mass Gain</span>
                    <span className="text-brand-accent">+6.2 lbs</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[62%] h-full bg-brand-accent rounded-full" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center space-x-3.5">
                <Award className="w-6 h-6 text-brand-accent flex-shrink-0" />
                <p className="text-xs text-brand-text-muted leading-relaxed">
                  *Results based on average biomechanical scans of 120 members participating in our 2025 Performance program.
                </p>
              </div>
            </div>

            {/* Slider Graphic */}
            <div className="lg:col-span-8 flex justify-center">
              <BeforeAfterSlider />
            </div>
          </div>
        </section>

        {/* MEMBERSHIP PRICING */}
        <section id="pricing" className="py-24 md:py-32 bg-zinc-950/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                Membership Plans
              </span>
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white">
                INVEST IN YOURSELF
              </h2>
              <p className="font-sans text-brand-text-muted font-light text-base md:text-lg">
                Choose the level of performance, coaching, and recovery support you require.
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center bg-brand-card p-1 rounded-full border border-white/5 mt-4">
                <button
                  onClick={() => setBillingPeriod("monthly")}
                  className={`px-6 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                    billingPeriod === "monthly"
                      ? "bg-white text-black shadow-lg"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod("annual")}
                  className={`px-6 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center space-x-1.5 ${
                    billingPeriod === "annual"
                      ? "bg-white text-black shadow-lg"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <span>Annual</span>
                  <span className="px-1.5 py-0.5 bg-brand-accent text-black text-[9px] font-black rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mt-16">
              {pricingPlans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`rounded-3xl p-8 flex flex-col justify-between border relative overflow-hidden transition-all duration-300 ${
                    plan.popular
                      ? "bg-brand-card border-brand-accent/30 shadow-[0_0_40px_rgba(206,255,0,0.06)] md:scale-105 z-10"
                      : "bg-[#0b0b0c] border-white/5"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-5 right-5 px-3 py-1 bg-brand-accent text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div className="space-y-6">
                    <h3 className="font-display text-2xl font-black uppercase tracking-wide text-white">
                      {plan.name}
                    </h3>
                    <p className="font-sans text-xs text-brand-text-muted leading-relaxed">
                      {plan.description}
                    </p>

                    <div className="flex items-baseline space-x-1 border-y border-white/5 py-5">
                      <span className="font-sans text-lg font-light text-brand-text-muted">$</span>
                      <span className="font-display text-5xl font-black text-white tracking-tighter">
                        {plan.price}
                      </span>
                      <span className="font-sans text-sm text-brand-text-muted font-light ml-1">
                        / month
                      </span>
                    </div>

                    <ul className="space-y-3.5 text-left pt-2">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-3">
                          <Check className="w-4.5 h-4.5 text-brand-accent flex-shrink-0 mt-0.5" />
                          <span className="font-sans text-xs md:text-sm text-white/80 font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10">
                    <a
                      href="#cta"
                      className={`w-full block py-4 text-center text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${
                        plan.popular
                          ? "bg-brand-accent hover:bg-brand-accent-hover text-black shadow-lg shadow-brand-accent-glow"
                          : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Corporate/Outreach Note */}
            <p className="text-center text-xs text-brand-text-muted mt-12 max-w-md mx-auto">
              Interested in corporate executive packages? Contact us directly for customized corporate onboarding programs.
            </p>
          </div>
        </section>

        {/* ELITE TRAINER PROFILES */}
        <section id="trainers" className="py-24 md:py-32 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Expert Coaches
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white">
              TITAN PERFORMANCE STAFF
            </h2>
            <p className="font-sans text-brand-text-muted font-light text-base md:text-lg">
              Work alongside trainers holding degrees in sports science and physical therapy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, idx) => (
              <div
                key={idx}
                className="group rounded-3xl overflow-hidden bg-brand-card border border-white/5 hover:border-brand-accent/25 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Portrait */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/20 to-transparent" />
                </div>

                {/* Trainer Details */}
                <div className="p-6 md:p-8 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold tracking-wide text-white">
                      {trainer.name}
                    </h3>
                    <p className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
                      {trainer.role}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {trainer.certs.map((cert, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 bg-white/5 rounded text-[10px] font-semibold text-white/70 border border-white/5"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>

                    <p className="font-sans text-xs text-brand-text-muted font-light leading-relaxed pt-2">
                      {trainer.bio}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-4 flex items-center justify-between text-xs font-semibold text-white/60">
                    <span>Specialty</span>
                    <span className="text-white font-medium">{trainer.specialty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 md:py-32 bg-zinc-950/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                Member Reviews
              </span>
              <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white">
                THE MEMBER EXPERIENCE
              </h2>
              {/* Star Rating Trust Block */}
              <div className="inline-flex items-center space-x-2 bg-brand-card px-4 py-2 rounded-full border border-white/5 mt-2">
                <span className="text-xs font-bold text-white">Google Rating</span>
                <div className="flex items-center text-brand-accent">
                  <Check className="w-3.5 h-3.5 fill-current mr-1" />
                  <span className="text-xs font-black text-white">4.9/5 Stars</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="text-[10px] text-brand-text-muted font-medium">
                  Based on 320+ audits
                </span>
              </div>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section id="faq" className="py-24 md:py-32 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Any Questions?
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white">
              FREQUENTLY ASKED
            </h2>
            <p className="font-sans text-brand-text-muted font-light text-base md:text-lg">
              Find answers to membership onboarding policies, access, and spa usage.
            </p>
          </div>

          <FAQAccordion />
        </section>

        {/* CALL TO ACTION (CTA) CONVERSION */}
        <section id="cta" className="py-24 md:py-32 max-w-7xl mx-auto px-6 relative overflow-hidden">
          {/* Back glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="glow-card rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden bg-[#0b0b0c] text-center max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(206,255,0,0.02)_0%,transparent_70%)]" />

            <div className="max-w-2xl mx-auto space-y-6 relative z-10 flex flex-col items-center">
              <span className="text-xs font-black uppercase tracking-widest text-brand-accent bg-brand-accent-muted px-4 py-1.5 rounded-full border border-brand-accent/20">
                Exclusive Admissions Open
              </span>

              <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
                START YOUR TITAN EVOLUTION
              </h2>

              <p className="font-sans text-brand-text-muted font-light text-sm md:text-base leading-relaxed max-w-lg">
                Enter your details to schedule a private tour and receive a complimentary biometric diagnostic session. Claim your invitation today.
              </p>

              {isCtaSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-brand-accent/5 rounded-2xl border border-brand-accent/20 max-w-md w-full mt-4"
                >
                  <p className="text-sm font-bold text-brand-accent uppercase tracking-wider">
                    Application Received Successfully
                  </p>
                  <p className="text-xs text-brand-text-muted mt-2">
                    Our concierge director will contact you within 24 hours to book your physical consult.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleCtaSubmit} className="flex flex-col sm:flex-row items-stretch gap-3 w-full max-w-md pt-4">
                  <input
                    type="email"
                    value={ctaEmail}
                    onChange={(e) => setCtaEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-grow px-5 py-4 bg-black/60 rounded-full border border-white/10 focus:border-brand-accent text-sm text-white placeholder-white/40 focus:outline-none transition-colors duration-200"
                  />
                  <button
                    type="submit"
                    className="px-6 py-4 bg-brand-accent hover:bg-brand-accent-hover text-black font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 flex items-center justify-center space-x-1"
                  >
                    <span>Request Invitation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-brand-text-muted pt-4 font-semibold uppercase tracking-wider">
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-accent" />
                  <span>No commitments required</span>
                </span>
                <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/20" />
                <span className="flex items-center space-x-1.5">
                  <Lock className="w-4 h-4 text-brand-accent" />
                  <span>100% Encrypted Data Security</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/5 pb-12 mb-8">
          {/* Logo & Info */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-display font-black text-3xl tracking-tighter text-white">
              TITAN<span className="text-brand-accent">.</span>
            </span>
            <p className="font-sans text-xs text-brand-text-muted leading-relaxed max-w-sm font-light">
              TITAN is a high-end athletic facility specializing in bio-mechanically optimized training and clinical recovery spas. Capped membership ensures premium access.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 bg-white/5 hover:bg-brand-accent hover:text-black rounded-full text-white transition-all duration-300">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-brand-accent hover:text-black rounded-full text-white transition-all duration-300">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-brand-accent hover:text-black rounded-full text-white transition-all duration-300">
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-display text-xs font-black uppercase tracking-widest text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-brand-text-muted uppercase tracking-wider">
              <li>
                <a href="#why-choose" className="hover:text-white transition-colors">Why TITAN</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">The Zones</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-white transition-colors">Coaches</a>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-black uppercase tracking-widest text-white">
              Club Location
            </h4>
            <ul className="space-y-3.5 text-xs text-brand-text-muted font-medium">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4.5 h-4.5 text-brand-accent flex-shrink-0 mt-0.5" />
                <span>120 Elite Way, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4.5 h-4.5 text-brand-accent flex-shrink-0" />
                <span>+1 (310) 555-0199</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4.5 h-4.5 text-brand-accent flex-shrink-0" />
                <span>Mon-Fri: 5AM - 10PM | Sat-Sun: 7AM - 8PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-black uppercase tracking-widest text-white">
              The Titan Bulletin
            </h4>
            <p className="font-sans text-xs text-brand-text-muted leading-relaxed font-light">
              Subscribe to receive bi-weekly scientific workout logs and exclusive admissions announcements.
            </p>
            {isNewsSubmitted ? (
              <p className="text-xs font-bold text-brand-accent uppercase tracking-wider">
                Successfully Subscribed
              </p>
            ) : (
              <form onSubmit={handleNewsSubmit} className="flex items-stretch bg-white/5 rounded-full p-1 border border-white/5 focus-within:border-brand-accent transition-colors duration-200">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                  className="flex-grow bg-transparent px-3 text-xs text-white placeholder-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-white hover:bg-brand-accent text-black rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors duration-200"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-text-muted font-medium uppercase tracking-widest space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} TITAN Elite Clubs. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Admission</a>
          </div>
          <p className="text-[10px] text-white/30 lowercase">
            designed as a prototype by <a href="https://techharbor.io" target="_blank" className="hover:text-brand-accent uppercase font-black tracking-normal">Tech Harbor</a>
          </p>
        </div>
      </footer>
    </>
  );
}
