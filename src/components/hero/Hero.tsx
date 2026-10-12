import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge, Container } from "@/components/common/primitives";
import { ChatMockup } from "@/components/product-ui/mockups";
import { floatingFeatures } from "@/data/site";
import { LiveRobot } from "./LiveRobot";
import { AnimatedBookBackground } from "./AnimatedBookBackground";
import { useState, useEffect } from "react";

export function Hero() {
  const reduce = useReducedMotion();
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featurePills = [
    "Voice AI Tutor",
    "Handwritten Answer Grading",
    "UPSC Interview Panel",
    "Personalized Revision",
  ];

  return (
    <section id="top" className="relative pb-0 pt-32 sm:pt-36 lg:min-h-0 lg:pb-8">
      {/* Background wrapper to contain overflow without clipping the mockup */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Magical Holographic Book Background */}
        <AnimatedBookBackground />

        {/* Background grids and glowing lights */}
        <div className="hero-grid absolute inset-0 opacity-60 pointer-events-none" />
        <div className="hero-glow absolute left-1/2 top-10 h-[520px] w-[860px] max-w-[100vw] -translate-x-1/2 pointer-events-none" />
      </div>

      {/* Fixed Chatbot Mascot */}
      <LiveRobot scrolled={scrolled} />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-xs backdrop-blur-md">
              <Zap className="h-3.5 w-3.5" /> Next-Generation AI Learning Ecosystem
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: reduce ? 1 : 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: reduce ? 0 : 0.5, duration: 0.8 }}
            className="mt-6 font-display text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-[84px] lg:leading-[1.02]"
          >
            Meet <span className="gradient-text-primary">Rovian</span>
          </motion.h1>

          <p className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground/90 sm:text-3xl lg:text-4xl">
            Your AI-Powered Learning Companion.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Learn concepts, clear doubts with live voice AI, practice adaptive MCQs, grade
            handwritten answers, generate syllabus lessons, and master competitive exams—all in one
            connected experience.
          </p>

          {/* CTA Group */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row items-center">
            <Button
              size="lg"
              className="h-12 w-full sm:w-auto px-7 text-base font-semibold shadow-glow hover:shadow-primary/40 transition-all cursor-pointer"
              onClick={() => go("ai-chat")}
            >
              Start Learning Free <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full sm:w-auto px-6 text-base font-medium border-border/90 bg-card/60 backdrop-blur-sm hover:bg-muted cursor-pointer"
              onClick={() => go("platform")}
            >
              Explore Platform <ArrowDown className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {/* Feature Highlights Pills */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: reduce ? 0 : 0.3 },
              },
            }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-medium"
          >
            {featurePills.map((pill) => (
              <motion.span
                key={pill}
                variants={{
                  hidden: { opacity: 0, y: reduce ? 0 : 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={reduce ? {} : { y: -2, scale: 1.02 }}
                className="inline-flex items-center gap-2.5 rounded-full bg-white/90 dark:bg-slate-800/90 px-4 py-1.5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/40 transition-all cursor-default text-slate-700 dark:text-slate-200 font-semibold backdrop-blur-sm group"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
                </div>
                <span className="group-hover:text-primary transition-colors">{pill}</span>
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Hero Interactive Mockup Showcase */}
        <div className="relative mx-auto mt-14 max-w-3xl px-0 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ChatMockup hero />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
