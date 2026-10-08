import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import rovianBg from "@/assets/rovian-bg.jpg";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  GraduationCap,
  RefreshCw,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnalyticsMockup } from "@/components/product-ui/mockups";
import { Container, Reveal, Section, SectionHeading } from "@/components/common/primitives";
import { exams, faqs, trustFeatures } from "@/data/site";
import { cn } from "@/lib/utils";

export function ExamUniverseSection() {
  const [active, setActive] = useState<keyof typeof exams>("NEET");

  return (
    <Section id="exams" className="relative overflow-hidden py-24 sm:py-32 bg-slate-50">
      {/* Soft Light Background Image with blur and gradient overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&q=80&w=2000')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-white/80 to-blue-50/50 backdrop-blur-[2px]" />
      
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Exam Universe"
            title="Prepare for the exam that matters to you."
            copy="Switch your learning context without leaving the ecosystem. Your practice questions, AI tutor, and mock exams adapt to your syllabus."
            center
          />
        </Reveal>

        {/* Exam Selection Pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {(Object.keys(exams) as Array<keyof typeof exams>).map((x) => (
            <Button
              key={x}
              variant={active === x ? "default" : "outline"}
              className={cn(
                "rounded-full px-5 text-xs font-bold transition-all cursor-pointer",
                active === x
                  ? "shadow-glow bg-primary text-primary-foreground"
                  : "bg-card/80 border-border/80 hover:bg-muted"
              )}
              onClick={() => setActive(x)}
            >
              {x}
            </Button>
          ))}
        </div>

        {/* Selected Exam Card */}
        <Reveal className="mx-auto mt-8 max-w-4xl">
          <motion.div 
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="grid gap-8 rounded-2xl border border-border/80 bg-card p-6 shadow-product sm:p-8 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                <Zap className="h-3 w-3" /> {active} ACCELERATOR
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                A focused path for {active}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Practice in realistic timed conditions, review chapter-wise weaknesses, and let Rovian automatically surface the exact concepts you need to revise next.
              </p>
            </div>

            <motion.div
              key={active}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-3"
            >
              {exams[active].map((x, i) => (
                <div
                  key={x}
                  className="flex items-center gap-3.5 rounded-xl border border-border/70 bg-background/80 p-4 shadow-xs"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                    0{i + 1}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{x}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Reveal>

        {/* School Boards Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 text-xs text-muted-foreground">
          <span className="font-semibold text-foreground mr-1">School Boards Supported:</span>
          {["CBSE", "TAMIL NADU STATE BOARD", "ICSE", "CAIE"].map((x) => (
            <span
              key={x}
              className="rounded-lg border border-border/80 bg-card px-3.5 py-1.5 font-semibold text-foreground shadow-2xs"
            >
              {x}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}

const loop = ["LEARN", "PRACTICE", "ANALYZE", "IDENTIFY WEAKNESS", "REVISE", "IMPROVE"];

export function IntelligenceSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % loop.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section className="relative overflow-hidden bg-transparent py-24 sm:py-32">
      {/* Background Dark Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, transparent 70%), linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)", backgroundSize: "100% 100%, 40px 40px, 40px 40px" }}
      />
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="LEARNING INTELLIGENCE"
            title={
              <span>
                Rovian learns <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">how you learn.</span>
              </span>
            }
            copy="Every question, practice attempt, and voice session builds a rich intelligence graph of what you know—and where you should focus next."
            center

          />
        </Reveal>

        {/* Side-by-side Layout: Table (Left), Rotation Diagram (Right) */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center max-w-7xl mx-auto">
          
          {/* Left Column: Table/Analytics */}
          <Reveal className="w-full">
            <AnalyticsMockup />
          </Reveal>

          {/* Right Column: Animated Slideshow */}
          <div 
            className="flex flex-col justify-center items-center w-full relative h-[400px] lg:translate-x-12"
          >
            {/* Abstract Background Globe (CSS representation) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
              <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-full bg-gradient-to-tr from-pink-500/30 via-rose-400/30 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-full border-[1px] border-pink-400/40 rotate-45 border-dashed opacity-50" />
            </div>

            {/* Glowing Slide Container */}
            <div className="relative w-full max-w-[280px] sm:max-w-sm h-48 sm:h-56 flex items-center justify-center mt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-indigo-400/40 bg-gradient-to-br from-pink-200/90 via-purple-100/90 to-indigo-200/90 backdrop-blur-3xl shadow-[0_10px_50px_rgba(244,63,94,0.15)] border-rose-200 p-8 text-center"
                >
                  <span className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.8)] mb-4 sm:mb-6" />
                  <h4 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-500 tracking-widest uppercase drop-shadow-sm">
                    {loop[activeSlide]}
                  </h4>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
              {loop.map((_, i) => (
                <button 
                  key={i}
                  type="button"
                  onClick={() => setActiveSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                    i === activeSlide ? "w-8 bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]" : "w-2 bg-slate-400/60 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
          
        </div>
      </Container>
    </Section>
  );
}

const revision = [
  { t: "Wrong Answer", d: "Mistake captured automatically", i: CircleAlert, color: "text-destructive" },
  { t: "Weak Concept Identified", d: "Concept tagged in knowledge graph", i: BrainCircuit, color: "text-warning" },
  { t: "Saved to Revision", d: "Scheduled into your spaced deck", i: BookOpen, color: "text-primary" },
  { t: "Resurfaced Later", d: "Prompted right before memory fades", i: RefreshCw, color: "text-purple-100" },
  { t: "Mastery Achieved", d: "Verified with follow-up practice", i: Check, color: "text-success" },
];

export function SpacedRepetitionSection() {
  return (
    <Section className="py-24 sm:py-32 relative bg-transparent">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-300/10 via-rose-300/5 to-transparent pointer-events-none" />
      
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Spaced Repetition"
            title="Your mistakes become your revision plan."
            copy="Rovian turns missed concepts into timely, bite-sized practice sessions so knowledge sticks for the long run."
            
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {revision.map((x, i) => (
            <Reveal key={x.t} delay={i * 0.07}>
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-xl p-5 shadow-xs transition-all duration-300 hover:scale-[1.2] hover:z-10 hover:border-rose-300 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 border border-slate-200">
                      <x.i className={cn("h-5 w-5", x.color)} />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500">0{i + 1}</span>
                  </div>
                  <h4 className="mt-5 font-display text-sm font-bold text-slate-700 group-hover:text-rose-500 transition-colors">
                    {x.t}
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{x.d}</p>
                </div>
                {i < revision.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden h-4 w-4 text-rose-400 lg:block group-hover:scale-100 transition-transform" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function StudentTeacherSection() {
  return (
    <Section 
      className="py-0 text-slate-900 overflow-hidden bg-cover bg-center bg-no-repeat relative"
      
    >
      <div className="grid lg:grid-cols-2">
        {/* Student Column */}
        <div className="border-b border-inverse-border p-8 sm:p-14 lg:border-b-0 lg:border-r lg:p-20">
          <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-tutor-accent/20 text-purple-100 shadow-[0_0_30px_rgba(45,212,191,0.4)] border border-tutor-accent/30">
            <div className="absolute inset-0 rounded-2xl bg-tutor-accent/30 blur-xl animate-pulse" />
            <GraduationCap className="relative z-10 h-6 w-6 drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-purple-100">
            For Students & Aspirants
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl text-slate-900">
            Own your personalized learning loop.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Study with an always-available voice tutor, test your speed in live multiplayer quiz rooms, and turn every test into actionable revision.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {["Live AI Voice Tutor", "Multiplayer Quiz Rooms", "Instant Handwritten Grading", "Adaptive Weakness Analytics"].map(
              (x) => (
                <div
                  key={x}
                  className="group relative overflow-hidden rounded-xl border-2 border-tutor-accent/80 bg-gradient-to-br from-tutor-accent/20 to-white/60 backdrop-blur-md p-4 text-xs font-bold text-slate-900 shadow-[0_0_25px_rgba(45,212,191,0.3)] hover:shadow-[0_0_40px_rgba(45,212,191,0.6)] hover:border-tutor-accent hover:scale-[1.05] hover:z-10 transition-all duration-300 flex items-center"
                >
                  <span className="text-purple-100 mr-2 text-lg leading-none group-hover:drop-shadow-[0_0_8px_rgba(45,212,191,1)]">✓</span>
                  <span className="tracking-wide">{x}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Teacher / Institution Column */}
        <div className="p-8 sm:p-14 lg:p-20 text-slate-900">
          <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-teacher-accent/20 text-teacher-accent shadow-[0_0_30px_rgba(250,204,21,0.4)] border border-teacher-accent/30">
            <div className="absolute inset-0 rounded-2xl bg-teacher-accent/30 blur-xl animate-pulse" />
            <Users className="relative z-10 h-6 w-6 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-teacher-accent">
            For Teachers & Institutions
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl text-slate-900">
            See where every learner stands.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Host live classroom quizzes, track individual learning gaps across batches, and assign curriculum-aligned AI practice.
          </p>
          <div className="mt-8 space-y-3">
            {[
              "Manage classroom rosters & batch performance",
              "Create, schedule & host live multiplayer quiz rooms",
              "Spot struggling students before exam results arrive",
              "Automated descriptive answer evaluations",
            ].map((x) => (
              <p key={x} className="flex items-center gap-3 text-xs font-medium text-slate-600">
                <Check className="h-4 w-4 text-teacher-accent shrink-0" />
                {x}
              </p>
            ))}
          </div>
          <Button className="mt-8 bg-teacher-accent font-bold text-slate-950 hover:bg-teacher-accent/90 cursor-pointer shadow-md">
            For Institutions & Schools <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Section>
  );
}

const howItWorksSteps = [
  {
    num: "01",
    title: "Choose",
    description: "Pick your board, exam, subject or goal.",
    gradient: "from-sky-400 to-blue-500",
    shadow: "shadow-sky-500/50",
  },
  {
    num: "02",
    title: "Learn",
    description: "Use AI Chat, AI Tutor and AI Content.",
    gradient: "from-purple-500 to-indigo-600",
    shadow: "shadow-purple-500/50",
  },
  {
    num: "03",
    title: "Practice",
    description: "Work through MCQs, answers, PYQs and interviews.",
    gradient: "from-blue-600 to-indigo-800",
    shadow: "shadow-blue-600/50",
  },
  {
    num: "04",
    title: "Improve",
    description: "Use analytics and revision to keep moving.",
    gradient: "from-pink-500 to-orange-400",
    shadow: "shadow-pink-500/50",
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(2); // Default to the 3rd card ("Practice")

  return (
    <Section id="how-it-works" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 sm:py-32 text-foreground border-t border-slate-200">
      {/* Stronger colorful ambient lighting */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-400/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-[500px] w-[500px] rounded-full bg-purple-400/25 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400/15 blur-[100px]" />

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            {/* Headline */}
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              A smarter loop for<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">every learner.</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-slate-500 leading-relaxed font-normal">
              The product is simple on purpose: start where you are, then keep getting a little better.
            </p>
          </div>
        </Reveal>

        {/* 3D Coverflow Slider */}
        <div className="relative mt-20 h-[400px] w-full flex items-center justify-center" style={{ perspective: 1200 }}>
          
          {/* Navigation Arrows */}
          <button 
            className="absolute left-0 sm:left-10 z-30 grid h-12 w-12 place-items-center rounded-full bg-white/600 backdrop-blur-md shadow-md text-slate-500 hover:text-slate-700 hover:scale-110 transition-all cursor-pointer"
            onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button 
            className="absolute right-0 sm:right-10 z-30 grid h-12 w-12 place-items-center rounded-full bg-white/600 backdrop-blur-md shadow-md text-slate-500 hover:text-slate-700 hover:scale-110 transition-all cursor-pointer"
            onClick={() => setActiveStep(prev => Math.min(howItWorksSteps.length - 1, prev + 1))}
            disabled={activeStep === howItWorksSteps.length - 1}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Cards */}
          <div className="relative flex w-full max-w-5xl justify-center items-center h-full" style={{ transformStyle: 'preserve-3d' }}>
            <AnimatePresence>
              {howItWorksSteps.map((step, i) => {
                const isActive = i === activeStep;
                const offset = i - activeStep;
                const absOffset = Math.abs(offset);
                
                // Calculate 3D transforms based on distance from active step
                const scale = isActive ? 1.1 : Math.max(0.7, 1 - absOffset * 0.15);
                const x = offset * 220; // Distance between cards
                const rotateY = offset === 0 ? 0 : offset > 0 ? -25 : 25; // Tilt inwards
                const zIndex = 10 - absOffset;
                const opacity = isActive ? 1 : Math.max(0.3, 1 - absOffset * 0.3);

                return (
                  <motion.div
                    key={step.num}
                    initial={false}
                    animate={{ 
                      x, 
                      scale, 
                      rotateY, 
                      opacity, 
                      zIndex 
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={`absolute flex flex-col justify-between w-[260px] h-[340px] rounded-[2rem] p-8 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_40px_70px_-10px_rgba(0,0,0,0.3)] ${step.shadow} transition-all duration-300 cursor-pointer bg-gradient-to-br ${step.gradient}`}
                    onClick={() => setActiveStep(i)}
                  >
                    {/* Badge */}
                    <div className="flex items-center justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-slate-900 font-bold font-mono text-sm shadow-[inset_0_0_10px_rgba(255,255,255,0.2)] backdrop-blur-md">
                        {step.num}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-8 text-slate-900">
                      <h3 className="font-display text-3xl font-bold tracking-tight mb-3 drop-shadow-sm">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-900/90 leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>

                    {/* Optional Button for Active Slide */}
                    {isActive && i === 2 && (
                      <div className="mt-6">
                        <Button className="w-full bg-white text-blue-700 hover:bg-slate-50 font-bold shadow-lg">
                          Get Started
                        </Button>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Bottom Track / Pagination */}
          <div className="absolute -bottom-8 flex items-center justify-center gap-2">
            {howItWorksSteps.map((_, i) => (
              <button
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeStep ? "w-8 bg-blue-600" : "w-2 bg-blue-200 hover:bg-blue-300"
                }`}
                onClick={() => setActiveStep(i)}
              />
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}

const tiers = [
  {
    name: "Starter",
    tagline: "Explore core AI learning and practice.",
    features: ["AI Chat with curriculum context", "Daily objective practice MCQs", "Standard topic summaries", "Basic accuracy stats"],
  },
  {
    name: "Pro Learner",
    tagline: "The complete AI companion for active students.",
    highlight: true,
    features: ["Unlimited Live AI Voice Tutor", "Handwritten answer grading", "Personalized Spaced Repetition", "Video & Audio lesson generator", "Exam universe simulators (NEET/JEE)"],
  },
  {
    name: "Institution",
    tagline: "For coaching centers, schools and educators.",
    features: ["Batch roster management", "Live classroom quiz rooms", "Detailed student gap heatmaps", "Custom institutional branding"],
  },
];

function AnimatedPricingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* High-Tech Perspective Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] opacity-30" 
      />
      
      {/* Horizontal Laser Sweep */}
      <motion.div
        animate={{ y: [-100, 1200] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-tutor-accent to-transparent opacity-80 shadow-[0_0_20px_3px_rgba(45,212,191,0.6)]"
      />
      
      {/* Vertical Laser Sweep */}
      <motion.div
        animate={{ x: [-200, 2000] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2, repeatDelay: 2 }}
        className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50 shadow-[0_0_20px_3px_rgba(59,130,246,0.6)]"
      />

      {/* Grid Pulse Points (Data Nodes) */}
      {[...Array(8)].map((_, i) => {
        // Deterministic positioning to avoid hydration mismatches, simulating grid intersections
        const positions = [
          { top: '20%', left: '15%' }, { top: '35%', left: '80%' },
          { top: '50%', left: '25%' }, { top: '70%', left: '85%' },
          { top: '15%', left: '70%' }, { top: '65%', left: '10%' },
          { top: '80%', left: '40%' }, { top: '40%', left: '60%' }
        ];
        return (
          <motion.div
            key={i}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
            transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.5 }}
            className="absolute h-1.5 w-1.5 rounded-full bg-tutor-accent shadow-[0_0_12px_2px_rgba(45,212,191,0.9)]"
            style={{
              top: positions[i % positions.length]!.top,
              left: positions[i % positions.length]!.left,
            }}
          />
        );
      })}
    </div>
  );
}

export function PricingSection() {
  return (
    <Section id="pricing" className="relative overflow-hidden bg-transparent py-24 sm:py-32">
      <AnimatedPricingBackground />
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing Plans"
            title="A plan for every learning journey."
            copy="Tiered plans crafted for self-studying learners, competitive exam aspirants, and institutions."
            center
            
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-center">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1}>
              <div
                className={cn(
                  "relative flex flex-col justify-between rounded-3xl border p-8 transition-all duration-500",
                  tier.highlight
                    ? "h-full md:min-h-[500px] border-2 border-tutor-accent/60 bg-[#0B1021] text-slate-900 shadow-[0_0_30px_rgba(45,212,191,0.15)] hover:shadow-[0_0_50px_rgba(45,212,191,0.3)] hover:border-tutor-accent hover:-translate-y-2 z-10"
                    : "h-full md:min-h-[460px] border-slate-800 bg-[#0F1629]/80 backdrop-blur-xl shadow-none hover:border-slate-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] hover:-translate-y-1"
                )}
              >
                <div>
                  {tier.highlight && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-tutor-accent px-4 py-1 text-[11px] font-extrabold uppercase tracking-widest text-slate-900 shadow-[0_0_15px_rgba(45,212,191,0.6)]">
                      Most Popular
                    </span>
                  )}
                  <h3 className={cn("font-display text-xl font-semibold tracking-tight", tier.highlight ? "text-slate-900" : "text-slate-700")}>
                    {tier.name}
                  </h3>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className={cn(
                      "font-display text-3xl sm:text-4xl font-extrabold tracking-tight", 
                      tier.highlight ? "text-purple-100 drop-shadow-[0_0_10px_rgba(45,212,191,0.4)]" : "text-slate-900"
                    )}>
                      Coming Soon
                    </span>
                  </div>
                  <p className={cn("mt-3 text-sm leading-relaxed", tier.highlight ? "text-slate-600" : "text-slate-500")}>
                    {tier.tagline}
                  </p>
                  
                  <div className={cn("mt-8 space-y-3 pt-6 border-t", tier.highlight ? "border-slate-200" : "border-slate-800")}>
                    {tier.features.map((f) => (
                      <p key={f} className="flex items-start gap-3 text-sm font-medium">
                        <Check className={cn("h-5 w-5 shrink-0 mt-0.5", tier.highlight ? "text-purple-100" : "text-blue-500")} />
                        <span className={tier.highlight ? "text-slate-700 leading-relaxed" : "text-slate-600 leading-relaxed"}>{f}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <Button
                  variant={tier.highlight ? "default" : "outline"}
                  className={cn(
                    "mt-10 w-full font-bold cursor-pointer rounded-xl h-12 transition-all",
                    tier.highlight ? "bg-tutor-accent hover:bg-teal-300 text-slate-900 border-none shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)]" : "bg-transparent border-slate-700 text-slate-600 hover:bg-slate-800 hover:text-slate-900"
                  )}
                >
                  Notify Me When Live
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function SoftMeshBackground({ activeSlide }: { activeSlide: number }) {
  // Define 4 soft, ambient colors for each theme index
  const orbColors = [
    // 0: Gold (AI-Powered)
    ["bg-amber-300/40", "bg-yellow-200/40", "bg-orange-200/40", "bg-amber-100/50"],
    // 1: Emerald (Personalized)
    ["bg-emerald-300/40", "bg-teal-200/40", "bg-green-200/40", "bg-emerald-100/50"],
    // 2: Sapphire (Performance)
    ["bg-blue-300/40", "bg-indigo-200/40", "bg-sky-200/40", "bg-blue-100/50"],
    // 3: Amethyst (Teacher Tools)
    ["bg-purple-300/40", "bg-fuchsia-200/40", "bg-violet-200/40", "bg-purple-100/50"],
    // 4: Ruby (Exam Prep)
    ["bg-rose-300/40", "bg-red-200/40", "bg-pink-200/40", "bg-rose-100/50"],
    // 5: Diamond (Multi-Board)
    ["bg-cyan-300/40", "bg-sky-200/40", "bg-teal-200/40", "bg-cyan-100/50"],
  ];

  const currentColors = orbColors[activeSlide % orbColors.length]!;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-slate-50 z-0">
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[120px] transition-colors duration-1000 ease-in-out ${currentColors[0]}`}
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 50, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className={`absolute top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full blur-[120px] transition-colors duration-1000 ease-in-out ${currentColors[1]}`}
      />
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className={`absolute -bottom-[20%] left-[10%] w-[70%] h-[60%] rounded-full blur-[140px] transition-colors duration-1000 ease-in-out ${currentColors[2]}`}
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className={`absolute -bottom-[10%] -right-[10%] w-[55%] h-[55%] rounded-full blur-[120px] transition-colors duration-1000 ease-in-out ${currentColors[3]}`}
      />
      {/* Light glass overlay to smooth it out perfectly */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
    </div>
  );
}

export function TrustSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % trustFeatures.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Updated to include both a strong dark drop shadow for 3D depth + a soft colored ambient glow
  const royalThemes = [
    { bg: "from-amber-400 to-amber-600", shadow: "shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3),_0_0_40px_rgba(245,158,11,0.4)]", text: "text-amber-50" },       // Gold
    { bg: "from-emerald-400 to-teal-600", shadow: "shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3),_0_0_40px_rgba(16,185,129,0.4)]", text: "text-emerald-50" },     // Emerald
    { bg: "from-blue-500 to-indigo-700", shadow: "shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3),_0_0_40px_rgba(59,130,246,0.4)]", text: "text-blue-50" },         // Sapphire
    { bg: "from-purple-500 to-fuchsia-700", shadow: "shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3),_0_0_40px_rgba(168,85,247,0.4)]", text: "text-purple-50" },    // Amethyst
    { bg: "from-rose-500 to-red-700", shadow: "shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3),_0_0_40px_rgba(244,63,94,0.4)]", text: "text-rose-50" },             // Ruby
    { bg: "from-cyan-400 to-blue-600", shadow: "shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3),_0_0_40px_rgba(6,182,212,0.4)]", text: "text-cyan-50" },           // Diamond
  ];

  const currentFeature = trustFeatures[activeSlide % trustFeatures.length]!;
  const royalTheme = royalThemes[activeSlide % royalThemes.length]!;

  return (
    <Section className="relative py-32 overflow-hidden bg-slate-50">
      <SoftMeshBackground activeSlide={activeSlide} />
      
      <Container className="relative z-10">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center w-full mx-auto">
          
          {/* Left Column: Text & Indicators */}
          <div className="text-left flex flex-col justify-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-xs backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Enterprise Architecture
              </span>
              <h2 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.1] text-slate-900 drop-shadow-sm">
                The capabilities behind connected learning.
              </h2>
              <p className="mt-6 text-base leading-relaxed sm:text-lg text-slate-600 text-justify">
                A resilient foundation engineered for high-accuracy curriculum alignment, voice fluency, and institutional tracking. 
                Our infrastructure scales seamlessly to provide educators and learners with enterprise-grade tools that deeply integrate into every step of the educational journey.
              </p>
            </Reveal>

            {/* Slide Indicators */}
            <div className="mt-10 flex items-center justify-start gap-3">
              {trustFeatures.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                    i === activeSlide 
                      ? `w-10 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)]` 
                      : `w-2.5 bg-slate-300 hover:bg-slate-400`
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Circular Slideshow */}
          <div className="w-full flex flex-col items-center justify-center relative min-h-[440px] lg:min-h-[500px]">
            {/* Animated Elegant Sparkles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5],
                    y: [0, -100 + Math.random() * -100],
                    x: [0, (Math.random() - 0.5) * 200]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.9)]"
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                className={`relative z-10 flex flex-col items-center justify-center w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-br ${royalTheme.bg} ${royalTheme.shadow} p-10 text-center border-[6px] border-white/60 backdrop-blur-3xl`}
              >
                {/* Inner ring for elegance */}
                <div className="absolute inset-3 rounded-full border border-white/30 pointer-events-none" />
                
                <div className="grid h-16 w-16 sm:h-20 sm:w-20 place-items-center rounded-full bg-white/20 text-white shadow-inner mb-6 backdrop-blur-md">
                  {(() => {
                    const Icon = currentFeature.icon;
                    return <Icon className="h-8 w-8 sm:h-10 sm:w-10" />;
                  })()}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-wide drop-shadow-md">
                  {currentFeature.title}
                </h3>
                <p className={`text-sm sm:text-base ${royalTheme.text} leading-relaxed font-medium drop-shadow-sm px-4`}>
                  {currentFeature.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </Container>
    </Section>
  );
}

export function FAQSection() {
  // Start with null so nothing is open initially, or start with 0 and let it disappear
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Auto-dismiss the answer box after 10 seconds
  useEffect(() => {
    if (activeFaq === null) return;
    const timer = setTimeout(() => {
      setActiveFaq(null);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [activeFaq]);

  return (
    <Section id="resources" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Immersive Rovian AI Background Image */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-screen pointer-events-none transition-opacity duration-1000"
        style={{ backgroundImage: `url(${rovianBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      
      {/* Giant ROVIAN watermark */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0 opacity-[0.02] mix-blend-overlay">
        <h1 className="font-display font-black text-[25vw] text-slate-900 tracking-tighter whitespace-nowrap">
          ROVIAN
        </h1>
      </div>

      {/* Deep Neon Glows */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-tutor-accent/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Subtle Digital Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e50a_1px,transparent_1px),linear-gradient(to_bottom,#4f46e50a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <Container className="relative z-10 flex flex-col w-full max-w-6xl mx-auto">
        
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions."
            copy="Everything you need to know about Rovian's learning tools, exams, and educator support."
            
          />
        </Reveal>
        
        <div className="mt-16 flex flex-col gap-4 relative lg:pb-[100px]">
          {/* Glowing connecting line for active indicator */}
          <div className="absolute left-[3px] top-6 bottom-4 lg:bottom-[100px] w-[2px] bg-slate-100 rounded-full hidden sm:block" />
          
          {faqs.map(([q, a], i) => (
            <motion.div 
              key={i} 
              className="relative w-full lg:w-[45%]"
              animate={{
                x: [
                  0, 
                  (i % 2 === 0 ? 1 : -1) * 15, 
                  (i % 2 === 0 ? -1 : 1) * 25, 
                  (i % 2 === 0 ? 1 : -1) * 10, 
                  0
                ],
                y: [
                  0, 
                  (i % 3 === 0 ? 1 : -1) * 6, 
                  0
                ]
              }}
              transition={{ 
                duration: 4 + (i % 4) * 0.8, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className={cn(
                  "w-full text-left pl-6 pr-4 py-4 rounded-2xl transition-all duration-300 relative group cursor-pointer",
                  activeFaq === i 
                    ? "bg-white/90 shadow-[0_0_40px_rgba(168,85,247,0.15)] border border-slate-200 scale-[1.02] z-10"
                    : "hover:bg-white/40 border border-transparent hover:scale-[1.01]"
                )}
              >
                {/* Active Neon Indicator */}
                {activeFaq === i && (
                  <motion.div 
                    layoutId="faq-indicator" 
                    className="absolute left-0 top-1/4 bottom-1/4 w-[4px] rounded-r-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" 
                  />
                )}
                
                <span className={cn(
                  "font-display text-sm font-bold transition-colors duration-300 flex items-center justify-between",
                  activeFaq === i ? "text-purple-600" : "text-slate-600 group-hover:text-slate-900"
                )}>
                  {q}
                  <ChevronRight className={cn("w-4 h-4 transition-transform duration-300", activeFaq === i ? "opacity-100 translate-x-1" : "opacity-0 -translate-x-2 group-hover:opacity-50")} />
                </span>
              </button>

              {/* Dynamic Answer Pane that perfectly aligns with this question */}
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div
                    layoutId="faq-answer-pane"
                    className="hidden lg:flex absolute left-[calc(100%+4rem)] top-0 w-[500px] xl:w-[600px] min-h-[250px] rounded-[2rem] border border-slate-200 bg-white/80 backdrop-blur-3xl p-8 sm:p-10 shadow-2xl flex-col justify-center overflow-hidden z-20 group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  >
                    {/* Internal ambient glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-transparent to-indigo-500/5 pointer-events-none" />
                    <div className="absolute top-[-50px] right-[-50px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none transform rotate-12 scale-150">
                      <Zap className="w-64 h-64 text-purple-100" />
                    </div>

                    <h3 className="relative z-10 font-display text-2xl font-extrabold text-slate-900 leading-[1.2] mb-5 drop-shadow-md">
                      {q}
                    </h3>
                    <p className="relative z-10 text-base text-slate-600/90 leading-relaxed font-medium">
                      {a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function FinalCTA() {
  return (
    <Section id="final-cta" className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-32">
      {/* Bright Optimistic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-tutor-accent/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[400px] bg-blue-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Light Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

      {/* Floating Holographic Icons - Light Theme */}
      <motion.div animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[15%] left-[10%] opacity-[0.15] hidden lg:block pointer-events-none">
        <Zap className="w-32 h-32 text-teal-600" />
      </motion.div>
      <motion.div animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[15%] right-[10%] opacity-[0.15] hidden lg:block pointer-events-none">
        <BrainCircuit className="w-40 h-40 text-blue-600" />
      </motion.div>

      <Container className="relative z-10 text-center">
        <div className="relative mx-auto max-w-5xl rounded-[3rem] border border-slate-200/60 bg-white/70 backdrop-blur-3xl p-10 sm:p-20 shadow-[0_20px_80px_rgba(0,0,0,0.05)] overflow-hidden">
          {/* Internal Light Glassmorphic Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
          
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200/50 bg-teal-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-700 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse shadow-[0_0_10px_rgba(20,184,166,0.6)]" />
              Start Learning Smarter
            </span>
            <h2 className="mx-auto mt-8 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl lg:leading-[1.1] text-slate-900 drop-shadow-sm">
              Your unified learning journey <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600">
                starts right here.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl font-medium leading-relaxed">
              Join thousands of learners and educators who use Rovian to understand deeper, practice smarter, and achieve ambitious goals.
            </p>
            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row items-center">
              <Button
                asChild
                size="lg"
                className="h-14 w-full sm:w-auto px-10 text-lg font-bold bg-blue-600 text-blue-50 hover:bg-blue-700 shadow-[0_10px_30px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-2xl"
              >
                <a href="https://rovianai.com/" target="_blank" rel="noopener noreferrer">
                  Get Started with Rovian <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                onClick={() => document.getElementById("platform")?.scrollIntoView({ behavior: "smooth" })}
                className="h-14 w-full sm:w-auto px-8 text-lg font-bold border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all cursor-pointer rounded-2xl"
              >
                Explore Solutions
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
