import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  BookOpenCheck,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  FileText,
  MessageCircle,
  Mic2,
  Pause,
  PenLine,
  Play,
  Radio,
  Sparkles,
  UserRound,
  Volume2,
  Zap,
} from "lucide-react";
import { Badge, Container, Reveal, Section, SectionHeading } from "@/components/common/primitives";
import {
  AnalyticsMockup,
  ChatMockup,
  EvaluationMockup,
  QuizMockup,
  StudioMockup,
  TutorMockup,
  DashboardMockup,
  UPSCInterviewSimulatorMockup,
} from "@/components/product-ui/mockups";
import { CommunicativeEnglishWindow } from "@/components/product-ui/english-mockups";
import { englishSkills } from "@/data/site";
import { cn } from "@/lib/utils";
import { AnimatedBookBackground } from "@/components/hero/AnimatedBookBackground";

export function AIChatSection() {
  return (
    <Section id="ai-chat" className="relative py-24 sm:py-32 overflow-hidden bg-transparent">
      
      {/* Dark background base */}
      <div className="absolute inset-0 z-0 bg-transparent" />

      {/* Soft dark grid movement */}
      <motion.div 
        animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating gradient blobs for dark theme */}
      <motion.div 
        animate={{ x: [0, 80, -60, 0], y: [0, -80, 40, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-[45rem] h-[45rem] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ x: [0, -100, 70, 0], y: [0, 90, -50, 0], scale: [1, 0.8, 1.3, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none z-0" 
      />

      {/* Radial glow pulse */}
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[35rem] h-[35rem] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0" 
      />

      {/* Tiny glowing particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.8)]"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150 - Math.random() * 100],
              x: [0, Math.random() * 60 - 30],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1.1fr]">
          
          {/* Left Column: Text & Features */}
          <Reveal>
            <div className="max-w-xl">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-cyan-400 border border-slate-200 mb-6 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-fuchsia-400" />
                ROVIAN AI CHAT
              </div>

              {/* Headline */}
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                Ask. Understand.<br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 pb-1 mt-2">
                  Keep learning.
                  {/* Underline Swoosh */}
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-cyan-500/50" viewBox="0 0 200 10" preserveAspectRatio="none">
                    <path d="M0,5 Q100,-5 200,5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <path d="M190,0 L200,5 L190,10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>

              <p className="mt-8 text-base sm:text-lg text-slate-500 leading-relaxed font-medium">
                Move seamlessly from a tough question to a curriculum-grounded explanation without losing your subject, board, or learning progress.
              </p>

              {/* Feature Cards */}
              <div className="mt-10 space-y-4">
                {[
                  {
                    title: "Curriculum-grounded explanations",
                    desc: "Accurate. Relevant. Board-wise.",
                    icon: BookOpenCheck,
                    color: "text-cyan-400",
                    bg: "bg-cyan-400/10 border border-cyan-400/20",
                  },
                  {
                    title: "Instant step-by-step breakdowns",
                    desc: "From complex to simple.",
                    icon: Zap,
                    color: "text-fuchsia-400",
                    bg: "bg-fuchsia-400/10 border border-fuchsia-400/20",
                  },
                  {
                    title: "Context memory across conversations",
                    desc: "No repetition. Just progress.",
                    icon: BrainCircuit,
                    color: "text-blue-400",
                    bg: "bg-blue-400/10 border border-blue-400/20",
                  },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 rounded-2xl bg-white/60 p-4 shadow-lg border border-slate-200 cursor-pointer transition-colors hover:bg-white/80 hover:border-slate-300 backdrop-blur-sm"
                  >
                    <div className={cn("grid h-12 w-12 shrink-0 place-items-center rounded-xl", feature.bg)}>
                      <feature.icon className={cn("h-6 w-6", feature.color)} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[15px] font-bold text-slate-900 whitespace-nowrap">{feature.title}</h4>
                      <p className="text-[13px] font-medium text-slate-500 mt-0.5 whitespace-nowrap">{feature.desc}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-slate-900/30" />
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Center Column: 3D Robot Mascot */}
          <Reveal delay={0.15} className="hidden lg:flex flex-col items-center justify-center -mx-4 z-10 relative">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img 
                src="/robot-companion.png?v=2" 
                alt="Rovian AI Companion" 
                className="w-[280px] object-contain drop-shadow-2xl relative z-10"
              />
            </motion.div>
          </Reveal>

          {/* Right Column: Chat Interface */}
          <Reveal delay={0.2} className="w-full xl:min-w-[500px]">
            <div className="lg:ml-8 xl:ml-14 2xl:ml-20">
              <ChatMockup />
            </div>
          </Reveal>

        </div>
      </Container>
    </Section>
  );
}

export function AITutorSection() {
  return (
    <Section className="relative overflow-hidden bg-transparent py-24 sm:py-32 text-slate-900" id="solutions">
      {/* Ambient subtle glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-primary/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="max-w-xl">


              {/* Headline */}
              <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                A tutor that<br />
                talks, <span className="text-lime-300 drop-shadow-[0_0_25px_rgba(190,242,100,0.3)]">teaches</span><br />
                and listens.
              </h2>

              {/* Description */}
              <p className="mt-6 text-base sm:text-lg text-slate-900/75 leading-relaxed max-w-lg font-normal">
                Move from a question to a real-time conversation with an AI tutor that can use your notes, textbook or chosen topic as context.
              </p>

              {/* 3 Pills at bottom */}
              <div className="mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3">
                {["Voice + text", "Curriculum grounded", "Real-time"].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center rounded-full bg-[#D4F933] px-4 py-1.5 text-xs sm:text-sm font-bold text-slate-950 shadow-xs transition-transform hover:scale-105"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <TutorMockup />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export function ContentStudioSection() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-blue-100/80 via-white to-indigo-100/80 py-24 sm:py-32">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[5%] w-[50%] h-[50%] rounded-full bg-blue-400/30 blur-[100px]" />
        <div className="absolute top-[20%] -right-[5%] w-[40%] h-[50%] rounded-full bg-purple-400/25 blur-[100px]" />
        <div className="absolute bottom-[0%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-300/20 blur-[120px]" />
      </div>
      <Container className="relative z-10">
        <Reveal>
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 mb-6">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.6-6.2-4.5-6.2 4.5 2.4-7.6L2 9.6h7.6L12 2z"/></svg>
              AI Learning Assistant
            </div>
            
            <div className="relative mb-6">
              {/* Decorative elements */}
              <div className="absolute -left-6 top-2 text-blue-500 rotate-[-15deg]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M14 6l-8 8M16 10l-6 6" />
                </svg>
              </div>
              <div className="absolute -right-6 top-2 text-blue-500 rotate-[15deg]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M10 6l8 8M8 10l6 6" />
                </svg>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 rounded-full py-4 sm:py-5 px-12 sm:px-16 shadow-lg shadow-blue-500/20 relative text-white font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                <div className="absolute -left-8 sm:-left-10 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow-xl">
                  <div className="bg-blue-600 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-10 sm:h-10 text-slate-900">
                      <path d="M12 2a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2zm0 2V4h-2v2h2zm-6 4v10h12V8H6zm3 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm-6 4h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                Turn syllabus chapters into <br/> engaging lessons. 📚 ✨
              </div>
            </div>
            
            <p className="mt-4 text-[13px] sm:text-[15px] text-slate-500 font-bold max-w-2xl">
              Choose a chapter, pick your format, and generate personalized audio summaries <br className="hidden sm:block"/> or video lesson shorts customized for your curriculum.
            </p>
          </div>
        </Reveal>
        <Reveal className="mx-auto mt-14 max-w-5xl">
          <StudioMockup />
        </Reveal>
      </Container>
    </Section>
  );
}

export function PracticeSection() {
  return (
    <Section className="relative bg-transparent py-24 sm:py-32 overflow-hidden">
      {/* Dark Theme Background Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Objective Practice"
            title="Practice solo or compete in live quiz rooms."
            copy="Sharpen accuracy with timed MCQs, instant rationale breakdowns, and multiplayer challenge arenas with real-time scoreboards."
            center
            
          />
          <div className="mt-8 mb-12 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2.5 rounded-full border border-blue-900/50 bg-white/60 px-5 py-2.5 text-xs font-semibold text-slate-700 shadow-lg shadow-blue-900/10 transition-colors hover:bg-white/80">
              <Zap className="h-4 w-4 text-blue-400" />
              <span>Practice MCQs Mode — Adaptive difficulty</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-full border border-purple-900/50 bg-white/60 px-5 py-2.5 text-xs font-semibold text-slate-700 shadow-lg shadow-purple-900/10 transition-colors hover:bg-white/80">
              <Radio className="h-4 w-4 text-purple-400" />
              <span>Live Quiz Rooms — Real-time race against peers</span>
            </div>
          </div>
        </Reveal>
        <Reveal className="mx-auto max-w-5xl">
          <QuizMockup />
        </Reveal>
      </Container>
    </Section>
  );
}

export function WrittenPracticeSection() {
  return (
    <Section className="relative bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-50 py-24 sm:py-32 overflow-hidden">
      {/* Decorative Light Color Blobs for a more vibrant background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      
      <AnimatedBookBackground theme="light" />
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Written Practice & Grading"
            title="Don't just know the answer. Master the write-up."
            copy="Practice 2-mark, 3-mark, and 5-mark subjective answers. Type or snap a photo of your handwritten paper for automated rubric feedback."
            center
          />
        </Reveal>
        <Reveal className="mx-auto mt-14 max-w-5xl relative z-10">
          <EvaluationMockup />
        </Reveal>
      </Container>
    </Section>
  );
}

const englishSkillsData = [
  {
    num: "01",
    title: "Conversation",
    desc: "Interactive dialogues with scoring",
  },
  {
    num: "02",
    title: "Writing",
    desc: "Descriptive answers with AI rubrics",
  },
  {
    num: "03",
    title: "Reading",
    desc: "Passages with audio & questions",
  },
  {
    num: "04",
    title: "Vocabulary",
    desc: "Daily words and quiz checks",
  },
  {
    num: "05",
    title: "Grammar",
    desc: "Sentence rules & error drills",
  },
  {
    num: "06",
    title: "Read Aloud",
    desc: "Fluency & speech practice",
  },
];

export function EnglishSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <Section className="py-14 sm:py-20 bg-transparent border-t border-slate-200" id="english">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] xl:gap-14">
          
          {/* Left Column: Heading + Tabs */}
          <Reveal>
            <div className="max-w-xl">
              {/* Headline */}
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                Speak. Write.<br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Improve.</span>
              </h2>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg font-normal">
                Build confidence through small, observable progress — from pronunciation to fluency. Choose a skill to explore:
              </p>

              {/* Animated Skill Bubbles */}
              <div className="mt-8 flex flex-wrap gap-3">
                {englishSkillsData.map((item, idx) => {
                  const isActive = idx === selectedIdx;
                  return (
                    <motion.button
                      key={item.num}
                      type="button"
                      onClick={() => setSelectedIdx(idx)}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: idx * 0.15 
                      }}
                      className={cn(
                        "group flex items-center gap-2.5 rounded-full px-5 py-2.5 transition-all cursor-pointer border shadow-lg select-none",
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-slate-900 border-blue-500 shadow-blue-900/40 shadow-xl scale-105"
                          : "bg-white/60 text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-white/80"
                      )}
                    >
                      <span
                        className={cn(
                          "text-[10px] font-mono font-black",
                          isActive ? "text-blue-200" : "text-slate-500"
                        )}
                      >
                        {item.num}
                      </span>
                      <span className="font-display text-sm font-bold tracking-wide">
                        {item.title}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Right Column: Live Interactive Preview Window */}
          <Reveal delay={0.1}>
            <div className="w-full">
              <CommunicativeEnglishWindow selectedIdx={selectedIdx} />
            </div>
          </Reveal>

        </div>
      </Container>
    </Section>
  );
}

export function UPSCInterviewSection() {
  return (
    <Section className="relative overflow-hidden bg-transparent text-slate-900 py-10 sm:py-16">
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=2000)` }}
        />
      </div>
      {/* Dark overlay to ensure text contrast */}
      <div className="absolute inset-0 bg-transparent z-0" />

      {/* Grid Pattern overlay */}
      <motion.div 
        animate={{ y: [0, -100] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="interview-grid absolute inset-0 opacity-10 pointer-events-none -bottom-[200px] z-0" 
      />
      
      {/* Animated Glowing Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none z-0"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            
            eyebrow="UPSC Mock Interview Simulator"
            title="Experience the interview room before the real one."
            copy="A realistic 3-member AI panel that evaluates your Detailed Application Form (DAF), asks spontaneous follow-ups, and grades your composure."
            center
          />
        </Reveal>

        <Reveal className="mt-8 sm:mt-10 max-w-6xl mx-auto w-full">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full mt-4"
          >
            <div className="w-full">
              <UPSCInterviewSimulatorMockup />
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </Section>
  );
}

export function DashboardSection() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-blue-50/50 via-slate-50 to-rose-50/30 py-24 sm:py-32" id="dashboard">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-300/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      
      <Container className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          
          {/* Right Text Content (now logically left in code, but visually right) */}
          <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left shrink-0 z-20">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/50 px-4 py-1.5 text-[10px] sm:text-xs font-bold text-blue-700 border border-blue-200 mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                Your Central Hub
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                Everything you need,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-rose-500">in one place.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 font-medium">
                Start your learning journey from a personalized dashboard that tracks your progress, recommends next steps, and keeps you motivated.
              </p>
            </Reveal>
          </div>
          
          {/* Left Dashboard Mockup */}
          <div className="w-full lg:w-[60%] relative z-10 lg:-mr-4 xl:-mr-0">
            <Reveal delay={0.2} className="relative w-full hidden lg:block transform lg:-translate-x-4 xl:-translate-x-8 lg:scale-[1.05] origin-right">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 via-indigo-300/20 to-rose-300/40 rounded-[3rem] -z-10 blur-3xl transform scale-105" />
              <DashboardMockup />
            </Reveal>
            
            {/* Fallback for small screens since dashboard is very complex */}
            <div className="lg:hidden text-center mt-8 p-10 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/60 shadow-sm max-w-md mx-auto relative z-10">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-100 shadow-sm">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Interactive Dashboard</h3>
              <p className="text-slate-500 font-medium text-sm">Please view this experience on a larger screen to explore the full dashboard.</p>
            </div>
          </div>
          
        </div>
      </Container>
    </Section>
  );
}
