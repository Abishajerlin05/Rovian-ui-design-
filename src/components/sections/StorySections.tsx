import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  CheckCircle2,
  Compass,
  GraduationCap,
  Languages,
  Layers,
  MessageSquareText,
  Mic2,
  Search,
  Target,
  TrendingUp,
  Video,
  Wand2,
  Zap,
} from "lucide-react";
import { Badge, Container, Reveal, Section, SectionHeading } from "@/components/common/primitives";
import { cn } from "@/lib/utils";

const categoryTabs = [
  { label: "LEARN", id: "ai-chat" },
  { label: "PRACTICE", id: "practice" },
  { label: "CREATE", id: "studio" },
  { label: "COMMUNICATE", id: "english" },
  { label: "IMPROVE", id: "intelligence" },
];

const visualCards = [
  { title: "Mode Toggle", desc: "Students use the Learn Mode / Teach Mode toggle switch in the left \"Learning Context\" configuration panel to choose between conversational chat-based learning (Learn Mode) or interactive virtual avatar tutoring (Teach Mode).", icon: Zap, colors: "from-blue-600 to-blue-900", shadow: "shadow-blue-600/60" },
  { title: "Doubts", desc: "Students can type or speak doubts to receive curriculum-grounded text and audio explanations.", icon: MessageSquareText, colors: "from-violet-500 to-purple-800", shadow: "shadow-violet-500/60" },
  { title: "Context", desc: "Allows configuring the medium (e.g., English), Subject, Chapter, and Language before clicking Ask Question.", icon: Layers, colors: "from-teal-400 to-emerald-600", shadow: "shadow-teal-400/70" },
  { title: "History", desc: "Revisit previous conversations in the Previous Learnings list, clear logs with Clear Chat, or start fresh using New Chat.", icon: BarChart3, colors: "from-orange-400 to-amber-600", shadow: "shadow-orange-500/60" },
  { title: "Video", desc: "Click Start Learning to watch video content customized to the chosen topic.", icon: Video, colors: "from-indigo-600 to-indigo-900", shadow: "shadow-indigo-600/60" },
];

export function ProblemSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % visualCards.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50/80 via-purple-50/80 to-rose-50/80 pt-0 pb-24 sm:pb-32 text-slate-900">
      {/* Intense Ambient background glows */}
      <div className="pointer-events-none absolute -left-20 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-300/20 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-300/20 blur-[120px]" />



      <Container className="relative">
        
        {/* Split Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full max-w-7xl mx-auto px-4 lg:px-8">
          
          {/* Left Side: Massive 3D Visual Carousel */}
          <div className="relative w-full lg:w-[55%] h-[350px] sm:h-[450px] flex items-center justify-center perspective-[1200px]">

            {/* 3D Cards Coverflow */}
            <div className="relative w-full max-w-4xl h-full flex justify-center items-center">
              {visualCards.map((c, i) => {
                const position = (i - activeIndex + visualCards.length) % visualCards.length;

                let x = 0, scale = 1, zIndex = 0, opacity = 1;

                const spread = 80;
                const wideSpread = 150;

                switch(position) {
                  case 0: // CENTER
                    x = 0; scale = 1.15; zIndex = 5; opacity = 1; break;
                  case 1: // RIGHT 1
                    x = spread; scale = 0.9; zIndex = 4; opacity = 0.75; break;
                  case 2: // RIGHT 2
                    x = wideSpread; scale = 0.8; zIndex = 3; opacity = 0.45; break;
                  case 3: // LEFT 2
                    x = -wideSpread; scale = 0.8; zIndex = 3; opacity = 0.45; break;
                  case 4: // LEFT 1
                    x = -spread; scale = 0.9; zIndex = 4; opacity = 0.75; break;
                }

                const isCenter = position === 0;

                return (
                  <motion.div
                    key={c.title}
                    onClick={() => setActiveIndex(i)}
                    className={cn(
                      "absolute flex flex-col p-4 sm:p-5 w-[160px] sm:w-[220px] h-[240px] sm:h-[300px] rounded-2xl sm:rounded-[24px] bg-gradient-to-br border border-white/20 text-slate-900 backdrop-blur-md cursor-pointer transition-colors",
                      c.colors, c.shadow,
                      isCenter ? "shadow-[0_0_50px_-10px_rgba(45,212,191,0.6)] border-white/40" : "hover:border-white/30"
                    )}
                    style={{ zIndex }}
                    animate={{ x, scale, opacity }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md mb-4 shadow-inner">
                      <c.icon className="h-5 w-5 text-slate-900" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold tracking-tight">{c.title}</h4>
                    <p className="text-[10px] sm:text-xs leading-snug mt-1 opacity-90 font-medium">{c.desc}</p>
                    <div className="mt-auto self-end h-6 w-6 rounded-full bg-white/25 flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer">
                      <ArrowDownRight className="h-3 w-3 -rotate-45" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Pagination Indicators */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5">
              {visualCards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                    activeIndex === i ? "w-6 bg-blue-600 shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "w-1.5 bg-blue-600/20 hover:bg-blue-600/40"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left z-10 lg:ml-auto">
            <Reveal delay={0.05}>
              
              <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs font-bold tracking-widest text-blue-600 mb-2">
                <span className="inline-block h-[1px] w-6 bg-blue-600" />
                <span>WHAT IS IT?</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-4">
                Rovian AI <span className="text-blue-600">Chatbot.</span>
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-900/70 font-medium mb-8">
                The core interface for Learn Mode, a 24/7 intelligent tutoring setup providing RAG doubt resolution grounded in the student's curriculum.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs font-bold tracking-widest text-blue-600 mb-4">
                <span className="inline-block h-[1px] w-6 bg-blue-600" />
                <span>WHAT IT DOES</span>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-600 font-medium text-left leading-relaxed">
                    <strong className="text-slate-900">Mode Toggle Selection</strong> – Students use the Learn Mode / Teach Mode toggle switch to choose between conversational chat-based learning or interactive virtual avatar tutoring.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-600 font-medium text-left leading-relaxed">
                    <strong className="text-slate-900">Interactive Doubt Resolution</strong> – Students can type or speak doubts to receive curriculum-grounded text and audio explanations.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-600 font-medium text-left leading-relaxed">
                    <strong className="text-slate-900">Context Selection</strong> – Allows configuring the medium (e.g., English), Subject, Chapter, and Language before clicking Ask Question.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-600 font-medium text-left leading-relaxed">
                    <strong className="text-slate-900">Chat History & Navigation</strong> – Revisit previous conversations in the Previous Learnings list, clear logs with Clear Chat, or start fresh using New Chat.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-600 font-medium text-left leading-relaxed">
                    <strong className="text-slate-900">Video Learning</strong> – Click Start Learning to watch video content customized to the chosen topic.
                  </p>
                </div>
              </div>
            </Reveal>


          </div>

        </div>
      </Container>
    </section>
  );
}

const orbitalNodes = [
  {
    id: "prepare",
    name: "Prepare",
    subtitle: "Exams · UPSC",
    icon: GraduationCap,
    badgeBg: "bg-gradient-to-br from-amber-400 to-orange-500 shadow-orange-500/40",
    position: "top-[0%] left-1/2 -translate-x-1/2",
    floatAnim: { y: [0, -8, 0, 8, 0], x: [0, 2, 0, -2, 0], duration: 5.2, delay: 0 },
  },
  {
    id: "practice",
    name: "Practice",
    subtitle: "MCQs · Written",
    icon: Target,
    badgeBg: "bg-gradient-to-br from-blue-600 to-indigo-700 shadow-blue-600/40",
    position: "top-[16%] sm:top-[18%] right-[0%] sm:right-[2%]",
    floatAnim: { y: [0, 7, 0, -7, 0], x: [0, -3, 0, 3, 0], duration: 5.8, delay: 0.5 },
  },
  {
    id: "communicate",
    name: "Communicate",
    subtitle: "English · Fluency",
    icon: Languages,
    badgeBg: "bg-gradient-to-br from-teal-400 to-cyan-500 shadow-teal-500/40",
    position: "bottom-[16%] sm:bottom-[18%] right-[0%] sm:right-[2%]",
    floatAnim: { y: [0, -6, 0, 6, 0], x: [0, 3, 0, -3, 0], duration: 6.2, delay: 1.0 },
  },
  {
    id: "improve",
    name: "Improve",
    subtitle: "Analytics · Revision",
    icon: TrendingUp,
    badgeBg: "bg-gradient-to-br from-pink-500 to-rose-500 shadow-rose-500/40",
    position: "bottom-[0%] left-1/2 -translate-x-1/2",
    floatAnim: { y: [0, 8, 0, -8, 0], x: [0, -2, 0, 2, 0], duration: 5.5, delay: 1.5 },
  },
  {
    id: "create",
    name: "Create",
    subtitle: "Audio · Video",
    icon: Wand2,
    badgeBg: "bg-gradient-to-br from-purple-500 to-violet-600 shadow-purple-500/40",
    position: "bottom-[16%] sm:bottom-[18%] left-[0%] sm:left-[2%]",
    floatAnim: { y: [0, -7, 0, 7, 0], x: [0, -3, 0, 3, 0], duration: 6.0, delay: 0.8 },
  },
  {
    id: "learn",
    name: "Learn",
    subtitle: "AI Chat · Tutor",
    icon: BookOpenCheck,
    badgeBg: "bg-gradient-to-br from-blue-400 to-sky-500 shadow-sky-500/40",
    position: "top-[16%] sm:top-[18%] left-[0%] sm:left-[2%]",
    floatAnim: { y: [0, 6, 0, -6, 0], x: [0, 2, 0, -2, 0], duration: 5.4, delay: 1.2 },
  },
];

export function EcosystemSection() {
  return (
    <section id="platform" className="relative overflow-hidden bg-gradient-to-br from-[#eff6ff] via-white to-[#e0f2fe] py-24 sm:py-32 text-slate-900 border-t border-blue-100">
      {/* Absolute Ambient Fluid Background Meshes */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-blue-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[800px] w-[800px] rounded-full bg-purple-400/10 blur-[150px]" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-[400px] w-[400px] rounded-full bg-cyan-300/10 blur-[100px]" />

      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-8 items-center">
          
          {/* Left Column: Heading & Editorial Description */}
          <Reveal>
            <div className="max-w-xl">
              {/* Headline with signature brand gradient */}
              <h2 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
                The whole<br />
                journey,<br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  connected.
                  {/* Decorative underline swoosh */}
                  <svg className="absolute -bottom-2 sm:-bottom-4 left-0 w-[110%] h-4 text-purple-500/40" viewBox="0 0 200 10" preserveAspectRatio="none">
                    <path d="M0,5 Q100,-5 200,5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <path d="M190,0 L200,5 L190,10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>

              {/* Description */}
              <p className="mt-8 text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg font-medium">
                Rovian is not one more chatbot. It is the layer that connects how you learn, practice, communicate and improve.
              </p>
            </div>
          </Reveal>

          {/* Right Column: Planetary Orbit Nexus with Floating Physics */}
          <Reveal delay={0.15} className="flex-1 w-full">
            <div className="relative mx-auto flex h-[450px] w-[95%] max-w-[450px] sm:h-[520px] sm:max-w-[520px] lg:h-[550px] lg:max-w-[550px] lg:scale-90 xl:scale-100 origin-center items-center justify-center p-2 mt-8 lg:mt-0">
              
              {/* Slowly rotating concentric solid orbit lines with lots of floating bubbles/planets */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 sm:inset-12 rounded-full border border-blue-400/20 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 h-3 w-3 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-[0_0_12px_#60a5fa]" />
                <div className="absolute bottom-1/4 right-0 h-2 w-2 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 shadow-[0_0_10px_#c084fc]" />
                <div className="absolute bottom-0 left-1/4 h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_#22d3ee]" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 sm:inset-24 rounded-full border border-purple-400/20 pointer-events-none"
              >
                <div className="absolute top-1/4 left-0 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-orange-400 to-rose-400 shadow-[0_0_10px_#fb923c]" />
                <div className="absolute bottom-1/3 right-0 h-3 w-3 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400 shadow-[0_0_12px_#2dd4bf]" />
                <div className="absolute top-[-4px] right-1/4 h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_#a78bfa]" />
              </motion.div>

              {/* Central Hub: Glowing Circular Sun Core */}
              <motion.div
                animate={{
                  y: [0, -10, 0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05 }}
                className="relative z-20 flex h-40 w-40 sm:h-48 sm:w-48 flex-col items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 p-4 text-center text-slate-900 shadow-[0_0_80px_rgba(99,102,241,0.7)] cursor-pointer select-none border border-white/20"
              >
                {/* Intense floating ambient glow behind core */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 -m-3 rounded-full bg-indigo-500/50 blur-2xl pointer-events-none"
                />

                <div className="relative z-10 grid h-12 w-12 sm:h-14 sm:w-14 place-items-center mb-1">
                  <GraduationCap className="h-10 w-10 sm:h-12 sm:w-12 text-slate-900" strokeWidth={1.5} />
                </div>
                <span className="relative z-10 mt-1 font-display text-lg sm:text-xl font-black tracking-wider text-slate-900 drop-shadow-md">
                  ROVIAN
                </span>
                <span className="relative z-10 font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-slate-900/90 uppercase">
                  AI ECOSYSTEM
                </span>
              </motion.div>

              {/* 6 Floating Satellite Nodes (Round Planets) */}
              {orbitalNodes.map((node) => (
                <div
                  key={node.id}
                  className={cn("absolute z-30", node.position)}
                >
                  <motion.div
                    animate={{
                      y: node.floatAnim.y,
                      x: node.floatAnim.x,
                    }}
                    transition={{
                      duration: node.floatAnim.duration,
                      delay: node.floatAnim.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="flex flex-col items-center justify-center h-[115px] w-[115px] sm:h-[135px] sm:w-[135px] rounded-full bg-white/85 backdrop-blur-xl border border-white shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1),0_0_20px_rgba(255,255,255,0.7)] cursor-pointer select-none transition-shadow hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)]"
                  >
                    {/* Styled Vibrant Badge Inside Planet */}
                    <div
                      className={cn(
                        "grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full text-slate-900 shadow-lg mb-1.5 sm:mb-2",
                        node.badgeBg
                      )}
                    >
                      <node.icon className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2]" />
                    </div>

                    {/* Satellite Title */}
                    <span className="text-[11px] sm:text-[13px] font-bold text-slate-800 tracking-tight leading-none mb-0.5 sm:mb-1">
                      {node.name}
                    </span>

                    {/* Satellite Subtitle */}
                    <span className="text-[8px] sm:text-[9px] font-medium text-slate-400 tracking-normal whitespace-nowrap">
                      {node.subtitle}
                    </span>
                  </motion.div>
                </div>
              ))}

            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
