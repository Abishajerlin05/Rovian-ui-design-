import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Award,
  BarChart2,
  BarChart3,
  Bot,
  BrainCircuit,
  BookOpenCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Download,
  FileText,
  GraduationCap,
  Info,
  Lightbulb,
  Loader2,
  Mic,
  Pause,
  Pencil,
  Play,
  PlusCircle,
  RotateCcw,
  Scale,
  Send,
  Sparkles,
  Star,
  Timer,
  Trash2,
  TrendingDown,
  TrendingUp,
  Trophy,
  Upload,
  User,
  UserRound,
  Users,
  Video,
  Volume2,
  VolumeX,
  Wand2,
  Zap,
  MessageSquare,
  BarChart,
  Flame,
  LayoutDashboard,
  PlayCircle,
  RefreshCw,
  FileQuestion,
  LogOut,
  BookOpen,
  Tag,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProductWindow } from "@/components/common/primitives";
import teacherVideo from "@/assets/teacher-session.mp4";

const Wave = ({ dark = false }: { dark?: boolean }) => (
  <div className="flex h-10 items-center justify-center gap-1" aria-hidden="true">
    {[12, 24, 17, 31, 20, 36, 25, 14, 29, 19, 33, 16, 26].map((h, i) => (
      <motion.span
        key={i}
        className={cn("w-1 rounded-full", dark ? "bg-tutor-accent" : "bg-primary")}
        animate={{ height: [h, Math.max(8, h * 0.45), h] }}
        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.05 }}
      />
    ))}
  </div>
);

export function ChatMockup({ hero = false }: { hero?: boolean }) {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioTime, setAudioTime] = useState(5);
  const [evaluated, setEvaluated] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<
    Array<{ role: "user" | "bot"; text: string; time: string }>
  >([
    {
      role: "user",
      text: "What is photosynthesis?",
      time: "11:08 PM",
    },
    {
      role: "bot",
      text: "Photosynthesis is the synthesis of organic compounds like carbohydrates or glucose by the cells of green plants in the presence of sunlight with the help of CO2 and H2O.",
      time: "11:08 PM",
    },
  ]);

  useEffect(() => {
    let interval: number;
    if (audioPlaying) {
      interval = window.setInterval(() => {
        setAudioTime((t) => (t >= 11 ? 0 : t + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [audioPlaying]);

  const handleClearChat = () => {
    setMessages([]);
    setEvaluated(false);
    setAudioPlaying(false);
  };

  const handleNewChat = () => {
    setMessages([
      {
        role: "user",
        text: "What is photosynthesis?",
        time: "11:08 PM",
      },
      {
        role: "bot",
        text: "Photosynthesis is the synthesis of organic compounds like carbohydrates or glucose by the cells of green plants in the presence of sunlight with the help of CO2 and H2O.",
        time: "11:08 PM",
      },
    ]);
    setAudioTime(5);
    setAudioPlaying(false);
    setEvaluated(false);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const timeNow = "11:09 PM";
    setInputValue("");

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userText, time: timeNow },
      {
        role: "bot",
        text: `Here is a clear breakdown for "${userText}": Chloroplasts absorb light energy to synthesize ATP and NADPH, powering the Calvin cycle to convert inorganic carbon into vital metabolic carbohydrates.`,
        time: timeNow,
      },
    ]);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Main Chat Container */}
      <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-slate-200 bg-[#0f172a]/60 backdrop-blur-3xl shadow-[0_0_50px_rgba(37,99,235,0.2),0_0_50px_rgba(236,72,153,0.15)] transition-all text-slate-900">
        {/* Glowing Background Orbs */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-blue-500/20 blur-[120px] pointer-events-none" />

        {/* Top Header Bar */}
        <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-slate-200">
          {/* Left: Avatar + Name + Status */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 shadow-[0_0_20px_rgba(56,189,248,0.5)] shrink-0 border border-cyan-400/30">
              <GraduationCap className="h-6 w-6 text-slate-900" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900 leading-tight">
                Abinaya AI
              </h3>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mt-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                <span>Online</span>
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleClearChat}
              className="flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900/90 hover:bg-slate-200 transition-all active:scale-95 cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              <span className="hidden sm:inline">Reset</span>
            </button>

            <button
              type="button"
              onClick={handleNewChat}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:opacity-90 px-5 py-2 text-sm font-bold text-slate-900 shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all active:scale-95 cursor-pointer"
            >
              <PlusCircle className="h-4 w-4" />
              <span className="hidden sm:inline">New Chat</span>
            </button>
          </div>
        </div>

        {/* Main Conversation Canvas */}
        <div
          className={cn(
            "p-6 pb-24 flex flex-col justify-end relative z-10",
            hero ? "min-h-[480px]" : "min-h-[440px]",
          )}
        >
          <div className="flex flex-col gap-6">
            {/* Date Stamp */}
            <div className="flex justify-center mb-2">
              <span className="rounded-full bg-slate-200 backdrop-blur-md border border-slate-200 px-4 py-1.5 text-xs font-semibold text-slate-900/70">
                October 4, 2026
              </span>
            </div>

            {messages.length === 0 ? (
              <div className="text-center text-sm text-slate-900/50 my-10">
                Chat cleared. Start a new conversation.
              </div>
            ) : (
              messages.map((msg, index) => {
                if (msg.role === "user") {
                  return (
                    <div key={index} className="flex flex-col items-end gap-1.5 w-full">
                      <div className="flex items-end gap-3 max-w-[85%] sm:max-w-[75%] justify-end">
                        <div className="rounded-3xl rounded-tr-sm bg-blue-700/90 backdrop-blur-md px-6 py-4 text-[15px] font-medium text-slate-900 shadow-lg border border-blue-500/30">
                          {msg.text}
                        </div>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600 text-slate-900 shadow-md font-bold text-sm border border-purple-400/30">
                          A
                        </div>
                      </div>
                      <div className="mr-14 flex items-center gap-1.5 text-[11px] text-slate-900/50 font-medium">
                        {msg.time}
                        <div className="flex -space-x-1.5 ml-1">
                          <Check className="h-3.5 w-3.5 text-blue-400" />
                          <Check className="h-3.5 w-3.5 text-blue-400" />
                        </div>
                      </div>
                    </div>
                  );
                }

                // Bot Message
                return (
                  <div
                    key={index}
                    className="flex items-end gap-3 max-w-[90%] sm:max-w-[85%] w-full"
                  >
                    {/* Bot Avatar */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 shadow-[0_0_15px_rgba(56,189,248,0.4)] border border-cyan-400/30 z-10 mb-8">
                      <GraduationCap className="h-5 w-5 text-slate-900" />
                    </div>

                    <div className="flex-1 flex flex-col gap-3 min-w-0 items-start">
                      {/* Bot text response card */}
                      <div className="rounded-3xl rounded-tl-sm bg-slate-100/95 px-6 py-4 shadow-xl text-[15px] leading-relaxed text-slate-800 font-medium max-w-full">
                        {msg.text}
                      </div>

                      {/* Audio Player Pill Widget */}
                      <div className="flex items-center gap-3 rounded-full bg-slate-200 backdrop-blur-md border border-slate-200 px-4 py-2 shadow-lg w-fit">
                        <button
                          type="button"
                          onClick={() => setAudioPlaying(!audioPlaying)}
                          className="text-slate-900/80 hover:text-slate-900 transition-colors cursor-pointer"
                        >
                          {audioPlaying ? (
                            <Pause className="h-4 w-4 fill-current" />
                          ) : (
                            <Play className="h-4 w-4 fill-current ml-0.5" />
                          )}
                        </button>
                        <span className="font-mono text-xs font-medium text-slate-900/80 select-none tracking-wider whitespace-nowrap">
                          0:{audioTime < 10 ? `0${audioTime}` : audioTime} / 0:11
                        </span>
                        <div
                          onClick={() => setAudioTime((t) => (t >= 11 ? 0 : t + 2))}
                          className="relative h-1 w-24 sm:w-32 cursor-pointer rounded-full bg-white/20 overflow-hidden ml-2"
                        >
                          <div
                            className="absolute top-0 left-0 h-full bg-white transition-all duration-300 rounded-full"
                            style={{ width: `${Math.min(100, (audioTime / 11) * 100)}%` }}
                          />
                        </div>
                        <Volume2 className="h-4 w-4 text-slate-900/80 ml-2" />
                      </div>

                      {/* Action Button: Evaluate Me */}
                      <button
                        type="button"
                        onClick={() => setEvaluated(!evaluated)}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:opacity-90 px-5 py-2.5 text-sm font-bold text-slate-900 shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all active:scale-95 cursor-pointer w-fit mt-1"
                      >
                        <Sparkles className="h-4 w-4" />
                        <span>Evaluate Me</span>
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Bottom Input Field */}
        <div className="absolute bottom-6 left-6 right-6 z-20">
          <form
            onSubmit={handleSendMessage}
            className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-100 backdrop-blur-xl px-5 py-3 shadow-xl focus-within:border-white/30 transition-all"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 bg-transparent text-[15px] font-medium text-slate-900 placeholder:text-slate-900/40 outline-none"
            />

            <div className="flex items-center gap-4 pr-3 border-r border-slate-200">
              <button
                type="button"
                className="text-slate-900/50 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <FileText className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Voice input"
                onClick={() => setInputValue("Explain the Calvin cycle in 2 sentences")}
                className="text-slate-900/50 hover:text-slate-900 transition-colors cursor-pointer"
                title="Voice input demo"
              >
                <Mic className="h-5 w-5" />
              </button>
            </div>

            <button
              type="submit"
              aria-label="Send question"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_10px_rgba(37,99,235,0.5)] transition-transform active:scale-90 cursor-pointer ml-1"
            >
              <Send className="h-4 w-4 pr-0.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export function TutorMockup() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [questionInput, setQuestionInput] = useState("");
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleDownloadTranscript = () => {
    const transcriptText = `ROVIAN AI TUTOR - LIVE SESSION TRANSCRIPT
Instructor: Abinaya (AI Live Instructor)
Session Topic: The French Revolution & Constitutional Evolution
Date: October 4, 2026
Format: Audio & Visual Interactive Lecture

[00:00] Instructor: Welcome to today's interactive session. Today we connect the storming of the Bastille to the idea of popular sovereignty.
[00:08] Student: Power should belong to the people.
[00:15] Instructor: Exactly right. That concept redefined governance across Enlightenment Europe, replacing royal absolutism with democratic accountability.
[00:28] Student: How did the National Assembly codify these rights?
[00:35] Instructor: Through the Declaration of the Rights of Man and of the Citizen in August 1789, establishing equality before law and representative government.
`;
    const blob = new Blob([transcriptText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Abinaya_Live_Tutor_Transcript.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl transition-all text-slate-900">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 sm:px-6 sm:py-4">
        {/* Left: Avatar + Name + Status */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shrink-0">
            <Bot className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div>
            <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 leading-tight">
              Abinaya
            </h3>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mt-0.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Online</span>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => {
              setQuestionInput("");
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
                setIsPlaying(true);
              }
            }}
            className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer mr-2"
          >
            Clear Chat
          </button>

          <button
            type="button"
            onClick={() => {
              setQuestionInput("");
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
                setIsPlaying(true);
              }
            }}
            className="flex items-center gap-1.5 rounded-full bg-blue-600 hover:bg-blue-700 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <span>New Chat</span>
          </button>
        </div>
      </div>

      {/* Video Canvas - Playing Teacher on loop */}
      <div className="relative w-full bg-slate-100 aspect-[4/3] sm:aspect-[16/10] overflow-hidden group border-b border-slate-100">
        <video
          ref={videoRef}
          src={teacherVideo}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover select-none"
        />
      </div>

      {/* Bottom Bar: Unified Pill Input with Download Transcript */}
      <div className="p-5 bg-white border-t border-slate-100">
        <div className="flex flex-col gap-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setQuestionInput("");
            }}
            className="w-full flex items-center gap-3 rounded-full bg-slate-50 border border-slate-200 p-2 pl-6 focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all shadow-sm"
          >
            <input
              type="text"
              value={questionInput}
              onChange={(e) => setQuestionInput(e.target.value)}
              placeholder="Ask your question..."
              className="flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-500 outline-none min-w-0"
            />

            <button
              type="button"
              aria-label="Voice input"
              onClick={() => setQuestionInput("Explain the storming of the Bastille")}
              className="text-slate-400 hover:text-blue-600 transition-colors cursor-pointer shrink-0"
              title="Voice input demo"
            >
              <Mic className="h-5 w-5" />
            </button>

            <button
              type="submit"
              aria-label="Send question"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-transform active:scale-95 cursor-pointer"
            >
              <ArrowUp className="h-5 w-5 stroke-[2.5]" />
            </button>
          </form>

          <div className="flex justify-end pr-2">
            <button
              type="button"
              onClick={handleDownloadTranscript}
              className="flex items-center gap-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-100 px-5 py-2.5 text-sm font-semibold transition-all active:scale-95 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              Download Transcript
            </button>
          </div>
        </div>

        {downloadSuccess && (
          <div className="mt-3 text-right pr-4 text-xs font-semibold text-emerald-600 animate-fadeIn">
            ✓ Transcript downloaded successfully!
          </div>
        )}
      </div>
    </div>
  );
}

export function StudioMockup() {
  const [language, setLanguage] = useState("Select Language");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [contentType, setContentType] = useState<"video" | "audio">("video");
  const [generatorSetting, setGeneratorSetting] = useState<"short" | "long" | "custom">("custom");
  const [hoveredSetting, setHoveredSetting] = useState<string | null>(null);
  const [durationValue, setDurationValue] = useState("");
  const [durationUnit, setDurationUnit] = useState("Mins");
  const [subject, setSubject] = useState("");
  const [isSubjectOpen, setIsSubjectOpen] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  const settingOptions = [
    {
      id: "short" as const,
      label: "Short Content",
      tooltip: {
        description:
          "Quick, high-level audio/video summaries for specific topics. Perfect for rapid review.",
        duration: "~30 seconds",
      },
    },
    {
      id: "long" as const,
      label: "Long Content",
      tooltip: {
        description:
          "In-depth, full-chapter audio/video content. Best for comprehensive learning and deep dives.",
        duration: "~5–10 minutes",
      },
    },
    {
      id: "custom" as const,
      label: "Custom",
      tooltip: {
        description:
          "Personalized content generated to your specific filters and duration preferences.",
        duration: "You choose the duration",
      },
    },
  ];

  const handleResetForm = () => {
    setLanguage("Select Language");
    setIsLangOpen(false);
    setContentType("video");
    setGeneratorSetting("custom");
    setHoveredSetting(null);
    setDurationValue("");
    setDurationUnit("Mins");
    setSubject("");
    setIsSubjectOpen(true);
  };

  const handleGenerateContent = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 800);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8 text-slate-800 relative">
      {/* Left Card: Content Generation Information */}
      <div className="w-full lg:w-1/2 flex flex-col rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
        {/* Top Header */}
        <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-[#2563EB] shadow-2xs shrink-0">
            <Info className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 leading-tight">
              Content Generation Information
            </h3>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">
              Competitive Exam: <span className="text-blue-600 font-bold">NEET</span>
            </p>
          </div>
        </div>

        {/* 1-Column Flex layout */}
        <div className="mt-6 flex flex-col gap-y-7">
          {/* Col 1, Row 1: Content Language */}
          <div className="relative">
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Content Language
            </label>
            <button
              type="button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="w-full h-11 border border-slate-200/90 rounded-xl px-4 bg-white text-xs sm:text-sm text-slate-500 flex items-center justify-between hover:border-slate-300 transition-all shadow-2xs cursor-pointer"
            >
              <span
                className={
                  language === "Select Language" ? "text-slate-500" : "text-slate-900 font-medium"
                }
              >
                {language}
              </span>
              <ChevronDown className="h-4 w-4 text-slate-500" />
            </button>

            {isLangOpen && (
              <div className="absolute top-full left-0 mt-1 w-full rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden py-1 z-30 divide-y divide-slate-100">
                {["English", "Hindi", "Hinglish", "Tamil"].map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => {
                      setLanguage(lang);
                      setIsLangOpen(false);
                    }}
                    className="w-full text-left px-4 py-2.5 text-xs sm:text-sm text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Col 2, Row 1: Content Type */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">Content Type</label>
            <div className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-slate-50/70 p-1">
              <button
                type="button"
                onClick={() => setContentType("video")}
                className={cn(
                  "flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer",
                  contentType === "video"
                    ? "bg-white text-slate-900 shadow-2xs border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900",
                )}
              >
                <Play className="h-3.5 w-3.5 fill-red-500 text-red-500" />
                <span>Video</span>
              </button>

              <button
                type="button"
                onClick={() => setContentType("audio")}
                className={cn(
                  "flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer",
                  contentType === "audio"
                    ? "bg-white text-slate-900 shadow-2xs border border-slate-200/80 font-semibold"
                    : "text-slate-600 hover:text-slate-900",
                )}
              >
                <Volume2 className="h-3.5 w-3.5 text-blue-500" />
                <span>Audio</span>
              </button>
            </div>
          </div>

          {/* Col 1, Row 2: Content Generator Settings with Hover Tooltips */}
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-bold text-slate-900">
                Content Generator Settings
              </span>
              <Info className="h-3.5 w-3.5 text-blue-500" />
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
              Choose between Short, Long and Custom content generation
            </p>
            <div className="mt-2.5 inline-flex items-center gap-1 rounded-xl border border-slate-200/90 bg-slate-50/80 p-1">
              {settingOptions.map((item) => (
                <div key={item.id} className="relative">
                  <button
                    type="button"
                    onClick={() => setGeneratorSetting(item.id)}
                    onMouseEnter={() => setHoveredSetting(item.id)}
                    onMouseLeave={() => setHoveredSetting(null)}
                    className={cn(
                      "px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer relative z-10",
                      generatorSetting === item.id
                        ? "bg-[#1D4ED8] text-slate-900 shadow-xs font-semibold"
                        : "text-slate-600 hover:text-slate-900",
                    )}
                  >
                    ● {item.label}
                  </button>

                  {/* Tooltip on Hover */}
                  <AnimatePresence>
                    {hoveredSetting === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 z-50 w-64 sm:w-72 rounded-xl bg-[#26282E] p-3.5 sm:p-4 text-left shadow-2xl shadow-black/40 border border-slate-200"
                      >
                        <p className="text-slate-900 text-xs leading-relaxed font-normal">
                          {item.tooltip.description}
                        </p>
                        <div className="mt-2 flex items-center gap-1.5 font-bold text-slate-900 text-xs">
                          <Timer className="h-3.5 w-3.5 stroke-[2.5]" />
                          <span>{item.tooltip.duration}</span>
                        </div>
                        {/* Caret pointing down */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#26282E]" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2, Row 2: Duration */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">Duration</label>
            <div className="flex items-center">
              <input
                type="text"
                value={durationValue}
                onChange={(e) => setDurationValue(e.target.value)}
                placeholder="Example: 1"
                className="w-28 sm:w-32 h-10 border border-slate-200 rounded-l-xl px-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-500 outline-none bg-white focus:border-blue-400"
              />
              <button
                type="button"
                onClick={() => setDurationUnit(durationUnit === "Mins" ? "Hours" : "Mins")}
                className="h-10 border-y border-r border-slate-200 rounded-r-xl px-3 text-xs sm:text-sm bg-white text-slate-600 flex items-center gap-1.5 hover:bg-slate-50 cursor-pointer"
              >
                <span>{durationUnit}</span>
                <ChevronDown className="h-3 w-3 text-slate-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Divider (Visible on lg screens) */}
      <div className="hidden lg:flex flex-col items-center justify-center relative w-8 shrink-0">
        <div className="w-px h-full bg-slate-200/80"></div>
        <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 z-10 border-4 border-[#fafafa]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 16l-4-4m0 0l4-4m-4 4h18M17 8l4 4m0 0l-4 4m4-4H2" />
          </svg>
        </div>
      </div>

      {/* Right Card: Subjects */}
      <div className="w-full lg:w-1/2 flex flex-col rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
        {/* Subjects Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-start gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-[#2563EB] shrink-0 shadow-2xs">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                Subjects
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">Maximum 1 subject allowed</p>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[10px] sm:text-xs font-semibold text-blue-600">
            <Sparkles className="h-3 w-3" /> Focus on what matters 🙂
          </div>
        </div>

        {/* Subject Input Row */}
        <div className="flex items-center gap-2.5">
          {/* Number 1 Badge */}
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2563EB] text-slate-900 text-xs font-bold shrink-0">
            1
          </div>

          {/* Select Subject Trigger Box */}
          <button
            type="button"
            onClick={() => setIsSubjectOpen(!isSubjectOpen)}
            className="flex-1 h-11 border border-slate-200/90 rounded-xl px-4 bg-white text-xs sm:text-sm text-slate-800 flex items-center justify-between hover:border-slate-300 transition-all shadow-2xs cursor-pointer"
          >
            <span className={subject ? "font-medium text-slate-900" : "text-slate-500"}>
              {subject || "Select Subject"}
            </span>
            <ChevronDown className="h-4 w-4 text-slate-500" />
          </button>

          {/* Red Trash Button */}
          <button
            type="button"
            onClick={() => setSubject("")}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50/80 border border-red-100 text-red-500 hover:bg-red-100 transition-colors cursor-pointer shrink-0"
            title="Clear subject"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        {/* Full-Width Dropdown Menu (Open as shown in reference) */}
        {isSubjectOpen && (
          <div className="mt-3 rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden divide-y divide-slate-100">
            {["Biology", "Chemistry", "Physics"].map((sub) => (
              <button
                key={sub}
                type="button"
                onClick={() => {
                  setSubject(sub);
                  setIsSubjectOpen(false);
                }}
                className={cn(
                  "w-full text-left px-5 py-3 text-xs sm:text-sm transition-colors cursor-pointer block",
                  subject === sub
                    ? "bg-blue-50/80 text-blue-700 font-semibold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900",
                )}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Bottom Actions (Pushed to bottom using flex-1) */}
        <div className="mt-auto pt-8 flex flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            onClick={handleResetForm}
            className="flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs transition-all active:scale-95 cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5 text-slate-500" />
            <span>Reset Form</span>
          </button>

          <button
            type="button"
            onClick={handleGenerateContent}
            className={cn(
              "flex items-center gap-2 rounded-full px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all active:scale-95 cursor-pointer shadow-md",
              isGenerating
                ? "bg-blue-400 text-slate-900 cursor-wait"
                : subject
                  ? "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-slate-900 shadow-purple-500/25"
                  : "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-slate-900 shadow-purple-500/25",
            )}
          >
            <Wand2 className="h-4 w-4" />
            <span>{isGenerating ? "Generating..." : "Generate Content →"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

const CONFETTI_COLORS = [
  "#FF2A6D",
  "#FFB800",
  "#00F5D4",
  "#7928CA",
  "#4361EE",
  "#10B981",
  "#FF3366",
  "#9B51E0",
  "#F72585",
  "#4CC9F0",
  "#FF6B6B",
  "#FEE440",
];

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  r: number;
  scale: number;
  color: string;
  shape: "circle" | "rect" | "ribbon";
  duration: number;
  delay: number;
}

function generateConfetti(count = 52): ConfettiPiece[] {
  return Array.from({ length: count }, (_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const distance = 70 + Math.random() * 190;
    return {
      id: i,
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance - (Math.random() * 50 + 20),
      r: (Math.random() - 0.5) * 800,
      scale: 0.6 + Math.random() * 0.9,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)]!,
      shape: i % 3 === 0 ? "circle" : i % 3 === 1 ? "rect" : "ribbon",
      duration: 0.85 + Math.random() * 0.45,
      delay: Math.random() * 0.08,
    };
  });
}

function PartyBurst({ activeKey }: { activeKey: number }) {
  const [particles, setParticles] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (activeKey > 0) {
      setParticles(generateConfetti(64));
    }
  }, [activeKey]);

  if (activeKey === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center overflow-visible">
      {particles.map((p) => (
        <motion.div
          key={`${activeKey}-${p.id}`}
          initial={{ x: 0, y: 0, opacity: 1, scale: 0, rotate: 0 }}
          animate={{
            x: p.x,
            y: [0, p.y * 1.15, p.y + 110],
            opacity: [1, 1, 0],
            scale: [0, p.scale, 0.1],
            rotate: p.r,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            position: "absolute",
            backgroundColor: p.color,
            width: p.shape === "circle" ? 10 : p.shape === "ribbon" ? 16 : 10,
            height: p.shape === "circle" ? 10 : p.shape === "ribbon" ? 6 : 10,
            borderRadius: p.shape === "circle" ? "9999px" : p.shape === "ribbon" ? "2px" : "1px",
            boxShadow: `0 0 12px ${p.color}aa`,
          }}
        />
      ))}
    </div>
  );
}

const singleQuestion = {
  subject: "Biology",
  text: "Which organelle is known as the powerhouse of the cell?",
  options: [
    { letter: "A", text: "Nucleus" },
    { letter: "B", text: "Mitochondria" },
    { letter: "C", text: "Ribosome" },
    { letter: "D", text: "Golgi apparatus" },
  ],
  correct: "B",
  explanation:
    "Mitochondria produce most of the chemical energy (ATP) needed by the cell through cellular respiration.",
};

export function QuizMockup() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [burstKey, setBurstKey] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(286); // 04:46 timer matching screenshot

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleSelect = (letter: string) => {
    setSelectedAnswer(letter);
    if (letter === singleQuestion.correct) {
      setBurstKey((k) => k + 1);
    }
  };

  const handleNext = () => {
    // Reset selection so the user can test the interaction again
    setSelectedAnswer(null);
  };

  return (
    <div className="w-full rounded-[26px] sm:rounded-[32px] bg-white/90 backdrop-blur-xl p-3 sm:p-6 md:p-8 border border-slate-200 shadow-2xl shadow-blue-900/5 text-slate-700">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 px-1 sm:px-2 mb-4 sm:mb-6">
        {/* Left: Back Arrow Button + Subject */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-500 opacity-50 cursor-not-allowed select-none transition-colors hover:bg-slate-200"
            title="First question"
          >
            <ArrowLeft className="h-4 w-4 stroke-[2.2]" />
          </button>
          <div className="flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 shadow-inner">
            <BookOpenCheck className="h-4 w-4 text-blue-400" />
            <span className="font-display text-sm sm:text-base font-bold text-slate-900 tracking-tight">
              {singleQuestion.subject}
            </span>
          </div>
        </div>

        {/* Right: Question counter, progress dots, and timer pill */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Question Counter */}
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
              QUESTION
            </span>
            <div className="text-xs sm:text-sm font-semibold text-slate-500">
              <span className="font-extrabold text-blue-400 text-sm sm:text-base">01</span> / 5
            </div>
          </div>

          {/* 5 Dots Indicator: 1 active, 4 inactive as in reference */}
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)] transition-all" />
            <span className="h-2 w-2 rounded-full bg-slate-200" />
            <span className="h-2 w-2 rounded-full bg-slate-200" />
            <span className="h-2 w-2 rounded-full bg-slate-200" />
            <span className="h-2 w-2 rounded-full bg-slate-200" />
          </div>

          {/* Countdown Timer Pill */}
          <div className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3.5 sm:px-4 py-1.5 text-xs font-semibold text-orange-400 shadow-2xs">
            <Clock className="h-3.5 w-3.5 stroke-[2.2] text-orange-400" />
            <span className="font-mono tracking-tight font-bold text-xs sm:text-sm">
              {formatTimer(secondsLeft)}
            </span>
          </div>
        </div>
      </div>

      {/* Main Examination Card Container */}
      <div className="relative w-full rounded-2xl sm:rounded-[26px] border border-slate-200 bg-slate-50/90 p-6 sm:p-10 md:p-14 shadow-2xl transition-all overflow-visible">
        {/* Multicolor Party Pop Burst in the exact center of the card */}
        <PartyBurst activeKey={burstKey} />

        {/* Question Prompt */}
        <h3 className="text-center font-display text-sm sm:text-base md:text-[18px] font-bold text-slate-900 max-w-3xl mx-auto leading-relaxed my-2 sm:my-3 relative pb-6">
          {singleQuestion.text}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </h3>

        {/* 2x2 Option Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 overflow-visible">
          {singleQuestion.options.map((opt) => {
            const isSelected = selectedAnswer === opt.letter;
            const isCorrect = opt.letter === singleQuestion.correct;

            return (
              <div key={opt.letter} className="relative overflow-visible">
                <motion.button
                  type="button"
                  onClick={() => handleSelect(opt.letter)}
                  whileHover={{ scale: 1.015, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  animate={
                    isSelected
                      ? isCorrect
                        ? {
                            scale: [1, 1.06, 0.98, 1],
                            transition: {
                              duration: 0.4,
                              type: "spring",
                              stiffness: 500,
                              damping: 18,
                            },
                          }
                        : {
                            x: [0, -4, 4, -3, 3, 0],
                            transition: { duration: 0.3 },
                          }
                      : { scale: 1, x: 0 }
                  }
                  className={cn(
                    "w-full rounded-2xl border p-4 sm:p-5 flex items-center justify-between text-left transition-all cursor-pointer group min-h-[72px] sm:min-h-[76px] relative z-10",
                    isSelected
                      ? isCorrect
                        ? "border-transparent bg-gradient-to-r from-blue-50 to-indigo-50 shadow-xl shadow-blue-500/10 ring-2 ring-blue-500"
                        : "border-red-300 bg-red-50 shadow-md shadow-red-500/10"
                      : "border-slate-200 bg-slate-50/90 hover:bg-blue-50 hover:border-blue-300",
                  )}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <motion.div
                      animate={
                        isSelected
                          ? isCorrect
                            ? { scale: [0.8, 1.3, 1], rotate: [0, -12, 0] }
                            : { scale: [0.9, 1.1, 1] }
                          : { scale: 1 }
                      }
                      transition={{ duration: 0.3 }}
                      className={cn(
                        "h-8 w-8 sm:h-9 sm:w-9 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 transition-colors",
                        isSelected
                          ? isCorrect
                            ? "bg-gradient-to-r from-blue-400 to-blue-500 text-slate-900 shadow-xs"
                            : "bg-red-500 text-slate-900 shadow-xs"
                          : "bg-slate-100 text-slate-500 group-hover:bg-slate-200",
                      )}
                    >
                      {opt.letter}.
                    </motion.div>
                    <span
                      className={cn(
                        "text-xs sm:text-[13px] md:text-sm leading-snug",
                        isSelected
                          ? isCorrect
                            ? "text-slate-900 font-bold"
                            : "text-slate-900 font-semibold"
                          : "text-slate-600 font-medium",
                      )}
                    >
                      {opt.text}
                    </span>
                  </div>

                  {/* Pop Indicator Badge on Selection */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0, rotate: -30 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 600, damping: 22 }}
                        className={cn(
                          "flex h-7 w-7 items-center justify-center rounded-full shrink-0 ml-2 shadow-[0_0_12px_rgba(139,92,246,0.6)]",
                          isCorrect ? "bg-[#8B5CF6] text-slate-900" : "bg-red-500 text-slate-900",
                        )}
                      >
                        {isCorrect ? (
                          <Check className="h-4 w-4 stroke-[3]" />
                        ) : (
                          <span className="text-xs font-bold leading-none">!</span>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            );
          })}
        </div>

        {/* Animated Pop Feedback Card */}
        <AnimatePresence>
          {selectedAnswer && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.93 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 480, damping: 26 }}
              className={cn(
                "mt-6 sm:mt-8 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 border transition-all text-left shadow-lg",
                selectedAnswer === singleQuestion.correct
                  ? "bg-blue-900/20 border-blue-500/30 text-blue-100"
                  : "bg-red-900/20 border-red-500/30 text-red-100",
              )}
            >
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: [0, 1.3, 1], rotate: 0 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                className={cn(
                  "h-8 w-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 shadow-2xs text-sm font-bold",
                  selectedAnswer === singleQuestion.correct
                    ? "bg-blue-600 text-white"
                    : "bg-red-500 text-slate-900",
                )}
              >
                {selectedAnswer === singleQuestion.correct ? "🎉" : "💡"}
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-xs sm:text-sm flex items-center gap-2">
                  <span className="text-slate-900">
                    {selectedAnswer === singleQuestion.correct
                      ? "Correct! Mitochondria is the powerhouse of the cell."
                      : "Not quite, try Option B!"}
                  </span>
                  {selectedAnswer === singleQuestion.correct && (
                    <span className="rounded-full bg-blue-500/20 border border-blue-500/30 px-2 py-0.5 text-[10px] font-bold text-blue-300">
                      +100 XP
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs sm:text-[13px] leading-relaxed opacity-80 font-medium text-slate-600">
                  {singleQuestion.explanation}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Navigation Footer */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-7 border-t border-slate-200 flex items-center justify-between">
          <button
            type="button"
            disabled
            className="rounded-full border border-slate-200 bg-transparent px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-slate-500 hover:bg-slate-100 opacity-80 transition-colors flex items-center gap-2 select-none"
          >
            <ArrowLeft className="h-4 w-4 stroke-[2.2]" />
            <span>Previous Question</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="rounded-full bg-gradient-to-r from-[#4CA1AF] to-[#2C3E50] hover:from-[#3a8b98] hover:to-[#1b2b3a] px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-slate-900 shadow-lg shadow-[#4CA1AF]/20 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            style={{
              backgroundImage: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
              boxShadow: "0 4px 15px 0 rgba(79, 172, 254, 0.3)",
            }}
          >
            <span>Next Question</span>
            <ArrowRight className="h-4 w-4 stroke-[2.2]" />
          </button>
        </div>
      </div>
    </div>
  );
}

interface SuggestedTopic {
  id: string;
  title: string;
  defaultText: string;
  feedback: {
    overall: number;
    headline: string;
    analysis: string;
    metrics: { label: string; score: number; max: number; tag: string }[];
    improved: string;
  };
}

const EVALUATION_TOPICS: SuggestedTopic[] = [
  {
    id: "ai-edu",
    title: "The Role of AI in Education",
    defaultText:
      "AI is transforming education by making learning more personalized, interactive, and accessible. It can analyze student performance, identify learning gaps, provide instant feedback, and recommend personalized learning paths. AI-powered tutors and",
    feedback: {
      overall: 92,
      headline: "Excellent!",
      analysis:
        "Your essay is well-structured and thoughtfully addresses the topic. You have balanced the benefits of AI with the importance of human teachers effectively. The vocabulary is appropriate and sentences flow logically. To improve further, consider adding specific examples of AI tools used in classrooms today.",
      metrics: [
        { label: "GRAMMAR", score: 95, max: 100, tag: "Excellent" },
        { label: "VOCABULARY", score: 90, max: 100, tag: "Excellent" },
        { label: "COHERENCE", score: 95, max: 100, tag: "Excellent" },
        { label: "FLUENCY", score: 90, max: 100, tag: "Excellent" },
      ],
      improved:
        "Artificial Intelligence (AI) is fundamentally transforming education by making learning significantly more accessible, engaging, and personalized. Through adaptive learning platforms and real-time diagnostic feedback, AI empowers students to master complex concepts at their own pace. Nevertheless, educators remain indispensable for mentorship, critical thinking, and emotional guidance. Ultimately, AI should serve to augment and empower human teachers rather than replace them.",
    },
  },
  {
    id: "env",
    title: "How to Protect Our Environment",
    defaultText:
      "Protecting the environment is essential for the survival of future generations. We must reduce plastic waste, conserve fresh water, and transition toward renewable energy sources like solar and wind power. Simple daily habits, such as recycling, planting trees, and using public transport, can collectively create a massive positive impact.",
    feedback: {
      overall: 89,
      headline: "Very Good!",
      analysis:
        "A compelling environmental call-to-action with clear practical examples. Sentence transitions are fluid and the call to civic duty is persuasive. To achieve perfection, you could incorporate statistical data regarding renewable energy adoption.",
      metrics: [
        { label: "GRAMMAR", score: 92, max: 100, tag: "Excellent" },
        { label: "VOCABULARY", score: 88, max: 100, tag: "Strong" },
        { label: "COHERENCE", score: 90, max: 100, tag: "Excellent" },
        { label: "FLUENCY", score: 86, max: 100, tag: "Good" },
      ],
      improved:
        "Environmental preservation is imperative for planetary sustainability. Mitigating single-use plastics, safeguarding potable water reserves, and accelerating the transition to clean renewable power form our frontline defense. Furthermore, individual ecological stewardship through conscious conservation substantially bolsters global ecological resilience.",
    },
  },
  {
    id: "sports",
    title: "Benefits of Sports & Exercise",
    defaultText:
      "Regular physical activity and sports build physical endurance, sharpen mental focus, and instill teamwork discipline. Engaging in sports helps reduce stress and promotes a healthy lifestyle among students of all age groups.",
    feedback: {
      overall: 90,
      headline: "Impressive!",
      analysis:
        "Strong argument outlining both physical and psychological dividends of sports. Well-formed clause structures and succinct points.",
      metrics: [
        { label: "GRAMMAR", score: 94, max: 100, tag: "Excellent" },
        { label: "VOCABULARY", score: 89, max: 100, tag: "Strong" },
        { label: "COHERENCE", score: 91, max: 100, tag: "Excellent" },
        { label: "FLUENCY", score: 88, max: 100, tag: "Strong" },
      ],
      improved:
        "Consistent athletic engagement and cardiovascular conditioning not only cultivate physical vigor but also enhance cognitive agility and collaborative leadership. Incorporating sports into everyday routines acts as a potent counterbalance to academic stress.",
    },
  },
  {
    id: "reading",
    title: "Importance of Reading Books",
    defaultText:
      "Reading books opens portals to diverse cultures, historical eras, and imaginative realms. It enriches vocabulary, deepens empathy, and expands critical analytical faculties beyond standard classroom textbooks.",
    feedback: {
      overall: 94,
      headline: "Outstanding!",
      analysis:
        "Evocative phrasing with rich vocabulary. The connection between reading and empathy is especially well-articulated.",
      metrics: [
        { label: "GRAMMAR", score: 96, max: 100, tag: "Excellent" },
        { label: "VOCABULARY", score: 95, max: 100, tag: "Mastery" },
        { label: "COHERENCE", score: 93, max: 100, tag: "Excellent" },
        { label: "FLUENCY", score: 92, max: 100, tag: "Excellent" },
      ],
      improved:
        "Immersing oneself in literature serves as a gateway to profound historical perspectives, diverse philosophical traditions, and vibrant imaginative frontiers. Regular reading systematically refines syntactic mastery and fosters emotional empathy.",
    },
  },
  {
    id: "career",
    title: "My Dream Career & Goals",
    defaultText:
      "Pursuing a career in technology and artificial intelligence is my primary aspiration. I aim to develop innovative software solutions that address real-world challenges in healthcare, education, and climate change.",
    feedback: {
      overall: 91,
      headline: "Very Strong!",
      analysis:
        "Clear professional vision with a noble purpose. Sentences are concise and purposeful.",
      metrics: [
        { label: "GRAMMAR", score: 93, max: 100, tag: "Excellent" },
        { label: "VOCABULARY", score: 90, max: 100, tag: "Excellent" },
        { label: "COHERENCE", score: 92, max: 100, tag: "Excellent" },
        { label: "FLUENCY", score: 89, max: 100, tag: "Strong" },
      ],
      improved:
        "Aspiring toward a career in computational intelligence and modern software engineering represents my ultimate professional horizon. My objective centers on architecting resilient algorithms capable of addressing systemic dilemmas in modern medicine and accessible education.",
    },
  },
  {
    id: "social-media",
    title: "Social Media Pros and Cons",
    defaultText:
      "Social media connects individuals worldwide and enables rapid dissemination of news. However, excessive screen time can impair mental wellbeing and spread misleading information if not used responsibly.",
    feedback: {
      overall: 88,
      headline: "Well Balanced!",
      analysis:
        "Nuanced perspective covering both advantages and pitfalls of modern social platforms. Clear thematic symmetry.",
      metrics: [
        { label: "GRAMMAR", score: 90, max: 100, tag: "Excellent" },
        { label: "VOCABULARY", score: 87, max: 100, tag: "Strong" },
        { label: "COHERENCE", score: 90, max: 100, tag: "Excellent" },
        { label: "FLUENCY", score: 86, max: 100, tag: "Good" },
      ],
      improved:
        "While social connectivity platforms facilitate unprecedented global discourse and instant information sharing, uncurated consumption can induce digital fatigue and exacerbate misinformation.",
    },
  },
];

const DEFAULT_TOPIC: SuggestedTopic = EVALUATION_TOPICS[0] as SuggestedTopic;

export function EvaluationMockup() {
  const [selectedTopic, setSelectedTopic] = useState<SuggestedTopic>(DEFAULT_TOPIC);
  const [topicInput, setTopicInput] = useState(DEFAULT_TOPIC.title);
  const [essayText, setEssayText] = useState(DEFAULT_TOPIC.defaultText);
  const [inputMode, setInputMode] = useState<"type" | "upload">("type");
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [isEvaluated, setIsEvaluated] = useState(false);

  const handleSelectTopic = (topic?: SuggestedTopic) => {
    const target = topic ?? DEFAULT_TOPIC;
    setSelectedTopic(target);
    setTopicInput(target.title);
    setEssayText(target.defaultText);
    setIsEvaluated(false);
  };

  const handleStartEvaluation = () => {
    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
      setIsEvaluated(true);
    }, 1100);
  };

  // SVG Circular Gauge calculations
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (selectedTopic.feedback.overall / 100) * circumference;

  return (
    <div className="mx-auto max-w-[720px] rounded-[32px] border border-slate-200/50 bg-transparent p-6 sm:p-9 shadow-lg dark:border-border dark:bg-transparent dark:shadow-none">
      <AnimatePresence mode="wait">
        {!isEvaluated ? (
          /* STATE 1: Writing Practice Card (Matches Reference Image 2 exactly) */
          <motion.div
            key="practice-card"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="space-y-5"
          >
            {/* Header */}
            <div>
              <h3 className="text-2xl sm:text-[28px] font-bold tracking-tight text-slate-900 dark:text-foreground">
                Writing Practice
              </h3>
              <p className="mt-1 text-xs sm:text-[13.5px] text-slate-500 dark:text-muted-foreground">
                Write on any topic and get instant AI feedback.
              </p>
            </div>

            {/* Topic Input */}
            <div className="pt-1">
              <label className="text-sm font-semibold text-slate-800 dark:text-slate-700">
                Topic
              </label>
              <input
                type="text"
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-200/50 bg-transparent px-4 py-2.5 text-sm text-slate-900 shadow-sm transition-all focus:border-blue-400 focus:bg-white/20 focus:outline-none dark:border-border dark:bg-transparent dark:text-foreground"
              />
            </div>

            {/* Suggested Topics Capsule Pills */}
            <div className="pt-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-muted-foreground">
                SUGGESTED TOPICS
              </label>
              <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {EVALUATION_TOPICS.map((topic) => {
                  const isActive = selectedTopic.id === topic.id;
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => handleSelectTopic(topic)}
                      className={cn(
                        "flex items-center justify-between rounded-full border px-4 py-2 text-left transition-all",
                        isActive
                          ? "border-blue-400/50 bg-blue-50/30 text-blue-800 font-medium dark:border-blue-500 dark:bg-transparent dark:text-blue-400 shadow-sm"
                          : "border-slate-200/50 bg-transparent text-slate-700 hover:border-slate-300 hover:bg-white/20 dark:border-border dark:bg-transparent dark:text-slate-600",
                      )}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={cn(
                            "h-2 w-2 rounded-full shrink-0",
                            isActive
                              ? "bg-blue-600 dark:bg-blue-500"
                              : "bg-slate-300 dark:bg-slate-600",
                          )}
                        />
                        <span className="truncate text-xs sm:text-[13px] leading-snug">
                          {topic.title}
                        </span>
                      </div>
                      {isActive && (
                        <Check className="h-4 w-4 text-blue-600 dark:text-blue-500 shrink-0 stroke-[2.5] ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Your Answer Section */}
            <div className="pt-1">
              <div className="flex items-center justify-between pb-2">
                <span className="text-sm font-semibold text-slate-900 dark:text-foreground">
                  Your Answer
                </span>
                <div className="inline-flex items-center rounded-full bg-transparent border border-slate-200/50 p-1 text-xs shadow-inner dark:bg-transparent">
                  <button
                    type="button"
                    onClick={() => setInputMode("type")}
                    className={cn(
                      "rounded-full px-4 py-1 text-xs font-semibold transition-all",
                      inputMode === "type"
                        ? "bg-white/30 text-teal-700 shadow-sm dark:bg-transparent dark:text-teal-400"
                        : "text-slate-600 hover:text-slate-800 dark:text-muted-foreground",
                    )}
                  >
                    Type
                  </button>
                  <button
                    type="button"
                    onClick={() => setInputMode("upload")}
                    className={cn(
                      "rounded-full px-3.5 py-1 text-xs font-medium transition-all",
                      inputMode === "upload"
                        ? "bg-white/30 text-teal-700 shadow-sm dark:bg-transparent dark:text-teal-400"
                        : "text-slate-600 hover:text-slate-800 dark:text-muted-foreground",
                    )}
                  >
                    Upload
                  </button>
                </div>
              </div>

              {inputMode === "type" ? (
                <div className="rounded-2xl border border-slate-200/50 bg-transparent p-4 sm:p-5 shadow-sm dark:border-border dark:bg-transparent">
                  {/* Title inside Answer Box */}
                  <p className="text-sm font-semibold text-slate-900 dark:text-foreground">
                    {topicInput || selectedTopic.title}
                  </p>

                  {/* Body paragraph with typing cursor */}
                  <div className="mt-3 relative">
                    <textarea
                      rows={4}
                      value={essayText}
                      onChange={(e) => setEssayText(e.target.value)}
                      placeholder="Write your answer..."
                      className="w-full resize-none bg-transparent text-xs sm:text-[13.5px] leading-relaxed text-slate-600 placeholder:text-slate-500 focus:outline-none dark:text-slate-600"
                    />
                    <span className="inline-block h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400 align-middle ml-1.5 animate-pulse" />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300/50 bg-transparent p-6 text-center shadow-inner dark:border-border dark:bg-transparent">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-teal-50 text-teal-600 dark:bg-teal-950/30 dark:text-teal-400">
                    <Upload className="h-6 w-6" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-foreground">
                    Upload Handwritten Answer
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-muted-foreground">
                    Drop your paper photo or scan (PNG, JPG, or PDF up to 10MB)
                  </p>
                  <button
                    type="button"
                    onClick={() => setInputMode("type")}
                    className="mt-4 rounded-lg bg-teal-50 px-3.5 py-1.5 text-xs font-semibold text-teal-600 transition-colors hover:bg-teal-100 dark:bg-teal-950/40 dark:text-teal-400"
                  >
                    Use Scanned OCR Text
                  </button>
                </div>
              )}

              {/* Word count right-aligned */}
              <div className="mt-2 text-right">
                <span className="text-xs text-slate-500 dark:text-slate-500">55 words</span>
              </div>

              {/* Full Width Button (Exact match with Pic 2 Evaluating... button) */}
              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleStartEvaluation}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200/50 bg-white/30 py-3.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-1000 active:scale-[0.99] dark:bg-transparent dark:text-slate-600 dark:hover:bg-slate-200"
                >
                  {isEvaluating ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-slate-500" />
                      <span>Evaluating...</span>
                    </>
                  ) : (
                    <span>Evaluating...</span>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* STATE 2: Full Diagnostic Writing Evaluation Report */
          <motion.div
            key="evaluation-report"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="space-y-5"
          >
            {/* Header */}
            <div>
              <h3 className="text-2xl sm:text-[28px] font-bold tracking-tight text-slate-900 dark:text-foreground">
                Writing Evaluation
              </h3>
              <p className="mt-1 text-xs sm:text-[13.5px] text-slate-500 dark:text-muted-foreground">
                Review your performance and get AI feedback for &ldquo;
                {topicInput || selectedTopic.title}&rdquo;
              </p>
            </div>

            {/* Overall Score & Feedback Narrative Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs dark:border-border dark:bg-background">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                {/* Circular Score Gauge */}
                <div className="relative flex shrink-0 flex-col items-center justify-center">
                  <svg className="h-28 w-28 -rotate-90 transform" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      className="stroke-slate-100 dark:stroke-muted/40"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      className="stroke-blue-600 transition-all duration-1000 ease-out dark:stroke-primary"
                      strokeWidth="8"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-foreground">
                      {selectedTopic.feedback.overall}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-muted-foreground">
                      Overall
                    </span>
                  </div>
                </div>

                {/* Narrative AI Feedback */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-primary sm:justify-start">
                    <Sparkles className="h-3.5 w-3.5" />
                    AI Feedback
                  </div>
                  <h4 className="mt-1 text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-foreground">
                    {selectedTopic.feedback.headline}
                  </h4>
                  <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-slate-600 dark:text-muted-foreground">
                    {selectedTopic.feedback.analysis}
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Score Metric Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {selectedTopic.feedback.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs dark:border-border dark:bg-background"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-muted-foreground">
                      {metric.label}
                    </span>
                    <div className="mt-2 flex items-baseline justify-between gap-1">
                      <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-foreground">
                        {metric.score}{" "}
                        <span className="text-xs font-normal text-slate-500 dark:text-muted-foreground">
                          / {metric.max}
                        </span>
                      </span>
                      <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-blue-600 dark:bg-primary/10 dark:text-primary">
                        {metric.tag}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-muted/50">
                    <div
                      className="h-full rounded-full bg-blue-600 transition-all duration-700 ease-out dark:bg-primary"
                      style={{ width: `${(metric.score / metric.max) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Improved Version Card */}
            <div className="rounded-2xl border border-indigo-500/25 bg-indigo-50/30 p-5 sm:p-6 shadow-xs dark:border-indigo-400/20 dark:bg-indigo-950/25">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-500/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  <Wand2 className="h-3 w-3" />
                  Improved Version
                </span>
              </div>
              <p className="mt-3.5 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-foreground/90">
                {selectedTopic.feedback.improved}
              </p>
            </div>

            {/* Bottom Navigation Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEvaluated(false)}
                className="gap-2 text-xs font-medium rounded-xl border-slate-200 dark:border-border"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Practice
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setIsEvaluated(false);
                  const nextIndex =
                    (EVALUATION_TOPICS.findIndex((t) => t.id === selectedTopic.id) + 1) %
                    EVALUATION_TOPICS.length;
                  const nextTopic = EVALUATION_TOPICS[nextIndex] ?? DEFAULT_TOPIC;
                  handleSelectTopic(nextTopic);
                }}
                className="gap-2 text-xs font-medium rounded-xl border-slate-200 dark:border-border"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Try Another Topic
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AnalyticsMockup({ dark = false }: { dark?: boolean }) {
  const [activeTab, setActiveTab] = useState<"overview" | "questions" | "responses">("overview");
  const [hoveredBucket, setHoveredBucket] = useState<number | null>(null);

  const metricCards = [
    {
      label: "Total Responses",
      value: "27",
      icon: Users,
      iconColor: dark
        ? "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
        : "text-blue-600 bg-blue-50 border-blue-200/50",
    },
    {
      label: "Average Score",
      value: "640 / 1000",
      icon: Star,
      iconColor: dark
        ? "text-amber-400 bg-amber-500/10 border-amber-500/20"
        : "text-amber-500 bg-amber-50 border-amber-200/50",
    },
    {
      label: "Median Score",
      value: "600 / 1000",
      icon: BarChart2,
      iconColor: dark
        ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
        : "text-cyan-600 bg-cyan-50 border-cyan-200/50",
    },
    {
      label: "Min Score",
      value: "180 / 1000",
      icon: TrendingDown,
      iconColor: dark
        ? "text-rose-400 bg-rose-500/10 border-rose-500/20"
        : "text-rose-500 bg-rose-50 border-rose-200/50",
    },
    {
      label: "Max Score",
      value: "960 / 1000",
      icon: TrendingUp,
      iconColor: dark
        ? "text-blue-400 bg-blue-500/10 border-blue-500/20"
        : "text-blue-600 bg-blue-50 border-blue-200/50",
    },
  ];

  const scoreStats = [
    { label: "Average Score", value: "640 / 1000 (64%)" },
    { label: "Median Score", value: "600 / 1000" },
    { label: "Min Score", value: "180 / 1000" },
    { label: "Max Score", value: "960 / 1000" },
    { label: "Total Responses", value: "27" },
  ];

  const distributionBuckets = [
    { range: "0–20%", count: 2, height: "20%", avg: "160 / 1000" },
    { range: "21–40%", count: 5, height: "50%", avg: "340 / 1000" },
    { range: "41–60%", count: 9, height: "90%", avg: "520 / 1000", isPeak: true },
    { range: "61–80%", count: 7, height: "70%", avg: "710 / 1000" },
    { range: "81–100%", count: 4, height: "40%", avg: "920 / 1000" },
  ];

  const studentScores = [
    {
      rank: "#1",
      name: "Kavitha R",
      email: "kavitha.r@gmail.com",
      score: "960 / 1000",
      correct: 10,
      total: 10,
      pct: "96%",
      badge: dark
        ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
        : "bg-blue-50 text-blue-700 border-blue-200/60",
    },
    {
      rank: "#2",
      name: "Arun Kumar",
      email: "arun.k@gmail.com",
      score: "880 / 1000",
      correct: 9,
      total: 10,
      pct: "88%",
      badge: dark
        ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
        : "bg-indigo-50 text-indigo-700 border-indigo-200/60",
    },
    {
      rank: "#3",
      name: "Sneha Patel",
      email: "sneha.p@gmail.com",
      score: "740 / 1000",
      correct: 8,
      total: 10,
      pct: "74%",
      badge: dark
        ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
        : "bg-indigo-50 text-indigo-700 border-indigo-200/60",
    },
    {
      rank: "#4",
      name: "Eswar",
      email: "eswar.ds.01@gmail.com",
      score: "620 / 1000",
      correct: 6,
      total: 10,
      pct: "62%",
      badge: dark
        ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
        : "bg-blue-50 text-blue-700 border-blue-200/60",
    },
    {
      rank: "#5",
      name: "Pooja M",
      email: "pooja.m@gmail.com",
      score: "540 / 1000",
      correct: 5,
      total: 10,
      pct: "54%",
      badge: dark
        ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
        : "bg-amber-50 text-amber-700 border-amber-200/60",
    },
    {
      rank: "#6",
      name: "Vikram S",
      email: "vikram.s@gmail.com",
      score: "380 / 1000",
      correct: 4,
      total: 10,
      pct: "38%",
      badge: dark
        ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
        : "bg-rose-50 text-rose-700 border-rose-200/60",
    },
  ];

  const notStartedStudents = [
    { name: "Deepak S", email: "deepak.s@gmail.com", status: "Invited 2h ago" },
    { name: "Naveen K", email: "naveen.k@gmail.com", status: "Invited 2h ago" },
    { name: "Riya Sharma", email: "riya.sharma@gmail.com", status: "Invited 1h ago" },
  ];

  return (
    <ProductWindow dark={dark} title="Classroom Quiz Analytics • Room #304964">
      <div
        className={cn(
          "p-3.5 sm:p-4.5 transition-colors duration-300",
          dark ? "bg-[#11131E] text-slate-700" : "bg-[#F8FAFD] text-slate-800",
        )}
      >
        {/* Top Header Row with Badges */}
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between pb-1">
          <div>
            <button
              type="button"
              className="text-[10px] font-semibold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1 cursor-pointer"
            >
              ← Back to Room
            </button>
            <h3
              className={cn(
                "font-display text-base sm:text-lg font-bold tracking-tight mt-0.5",
                dark ? "text-slate-100" : "text-slate-900",
              )}
            >
              Classroom Quiz Summary
            </h3>
            <p className="text-[11px] text-slate-500">Review quiz performance, participation</p>
          </div>

          {/* Badges on Right */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span
              className={cn(
                "rounded-full px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold shadow-2xs border",
                dark
                  ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
                  : "bg-indigo-50 border-indigo-200/60 text-indigo-700",
              )}
            >
              Room Code: 304964
            </span>
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[10px] sm:text-[11px] font-medium shadow-2xs border",
                dark
                  ? "bg-[#1A1D2D] border-slate-300 text-slate-500"
                  : "bg-white border-slate-200/80 text-slate-600",
              )}
            >
              Mode:{" "}
              <strong className={cn("font-semibold", dark ? "text-slate-700" : "text-slate-800")}>
                async
              </strong>
            </span>
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[10px] sm:text-[11px] font-medium shadow-2xs border",
                dark
                  ? "bg-[#1A1D2D] border-slate-300 text-slate-500"
                  : "bg-white border-slate-200/80 text-slate-600",
              )}
            >
              Course Type:{" "}
              <strong className={cn("font-semibold", dark ? "text-slate-700" : "text-slate-800")}>
                NEET
              </strong>
            </span>
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[10px] sm:text-[11px] font-medium shadow-2xs border",
                dark
                  ? "bg-[#1A1D2D] border-slate-300 text-slate-500"
                  : "bg-white border-slate-200/80 text-slate-600",
              )}
            >
              Status:{" "}
              <strong className={cn("font-semibold", dark ? "text-emerald-400" : "text-blue-600")}>
                Open
              </strong>
            </span>
          </div>
        </div>

        {/* 5 Metric Cards */}
        <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {metricCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className={cn(
                  "rounded-lg sm:rounded-xl border p-2 sm:p-2.5 shadow-2xs flex items-center gap-2 sm:gap-2.5 transition-transform hover:-translate-y-0.5",
                  dark ? "bg-[#1A1D2D] border-slate-300/80" : "bg-white border-slate-200/80",
                )}
              >
                <div
                  className={cn(
                    "grid h-7 w-7 sm:h-8 sm:w-8 shrink-0 place-items-center rounded-lg border",
                    card.iconColor,
                  )}
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-medium text-slate-500 truncate">{card.label}</p>
                  <p
                    className={cn(
                      "font-display text-xs sm:text-sm font-bold leading-tight",
                      dark ? "text-slate-700" : "text-slate-900",
                    )}
                  >
                    {card.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Tabs */}
        <div
          className={cn(
            "mt-2.5 flex items-center gap-4 sm:gap-6 border-b",
            dark ? "border-slate-200" : "border-slate-200/80",
          )}
        >
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={cn(
              "pb-1.5 text-xs font-semibold transition-all cursor-pointer relative",
              activeTab === "overview"
                ? dark
                  ? "text-indigo-400 border-b-2 border-indigo-400"
                  : "text-indigo-600 border-b-2 border-indigo-600"
                : dark
                  ? "text-slate-500 hover:text-slate-600"
                  : "text-slate-500 hover:text-slate-800",
            )}
          >
            Dashboard Overview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("questions")}
            className={cn(
              "pb-1.5 text-xs font-semibold transition-all cursor-pointer relative",
              activeTab === "questions"
                ? dark
                  ? "text-indigo-400 border-b-2 border-indigo-400"
                  : "text-indigo-600 border-b-2 border-indigo-600"
                : dark
                  ? "text-slate-500 hover:text-slate-600"
                  : "text-slate-500 hover:text-slate-800",
            )}
          >
            Question Analysis
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("responses")}
            className={cn(
              "pb-1.5 text-xs font-semibold transition-all cursor-pointer relative",
              activeTab === "responses"
                ? dark
                  ? "text-indigo-400 border-b-2 border-indigo-400"
                  : "text-indigo-600 border-b-2 border-indigo-600"
                : dark
                  ? "text-slate-500 hover:text-slate-600"
                  : "text-slate-500 hover:text-slate-800",
            )}
          >
            Individual Responses
          </button>
        </div>

        {/* TAB 1: Dashboard Overview */}
        {activeTab === "overview" && (
          <div className="mt-3 space-y-2.5">
            {/* Middle 2 Columns: Score Distribution Chart + Score Statistics */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-2.5">
              {/* Left: Score Distribution Chart */}
              <div
                className={cn(
                  "rounded-xl border p-3 sm:p-3.5 shadow-2xs flex flex-col justify-between",
                  dark ? "bg-[#1A1D2D] border-slate-300/80" : "bg-white border-slate-200/80",
                )}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4
                        className={cn(
                          "font-display text-xs sm:text-sm font-bold",
                          dark ? "text-slate-100" : "text-slate-900",
                        )}
                      >
                        Score Distribution
                      </h4>
                      <span className="text-[9px] sm:text-[10px] font-medium text-slate-500 mt-0.5 block">
                        Number of Students (Total: 27)
                      </span>
                    </div>
                    {hoveredBucket !== null && distributionBuckets[hoveredBucket] && (
                      <span className="text-[10px] font-medium text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-md px-2 py-0.5">
                        Avg: {distributionBuckets[hoveredBucket]?.avg}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bar Chart Container */}
                <div className="mt-2.5 flex-1 flex flex-col justify-end">
                  <div className="relative h-28 sm:h-30 w-full flex items-end">
                    {/* Y-axis Ticks & Horizontal Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                      {[10, 8, 6, 4, 2, 0].map((tick) => (
                        <div key={tick} className="flex items-center gap-1.5 w-full">
                          <span className="w-3.5 text-right text-[9px] font-mono text-slate-500 shrink-0">
                            {tick}
                          </span>
                          <div
                            className={cn("flex-1 h-px", dark ? "bg-slate-200/50" : "bg-slate-100")}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Bars Grid */}
                    <div className="pl-5 w-full h-full flex items-end justify-between relative z-10 pb-0 gap-2 sm:gap-2.5">
                      {distributionBuckets.map((bucket, idx) => {
                        const isHovered = hoveredBucket === idx;
                        return (
                          <div
                            key={bucket.range}
                            onMouseEnter={() => setHoveredBucket(idx)}
                            onMouseLeave={() => setHoveredBucket(null)}
                            className="flex-1 flex flex-col items-center justify-end h-full group cursor-pointer"
                          >
                            <span
                              className={cn(
                                "text-[9px] font-bold mb-1 transition-all",
                                isHovered || bucket.isPeak
                                  ? "text-indigo-600 scale-110"
                                  : "text-slate-500",
                              )}
                            >
                              {bucket.count}
                            </span>
                            <div
                              style={{ height: bucket.height }}
                              className={cn(
                                "w-full max-w-[34px] sm:max-w-[40px] rounded-t-md transition-all duration-300 shadow-xs",
                                dark
                                  ? bucket.isPeak
                                    ? "bg-gradient-to-t from-blue-500 to-indigo-400 group-hover:brightness-110 ring-2 ring-indigo-400/30"
                                    : isHovered
                                      ? "bg-indigo-400"
                                      : "bg-gradient-to-t from-blue-600/80 to-indigo-500/80 group-hover:brightness-110"
                                  : bucket.isPeak
                                    ? "bg-indigo-600 group-hover:bg-indigo-700 ring-2 ring-indigo-400/30"
                                    : isHovered
                                      ? "bg-indigo-600"
                                      : "bg-indigo-500/85 group-hover:bg-indigo-600",
                              )}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* X-axis Labels */}
                  <div className="pl-5 mt-1.5 flex justify-between text-[9px] sm:text-[10px] font-medium text-slate-500 gap-2">
                    {distributionBuckets.map((bucket, idx) => (
                      <span
                        key={bucket.range}
                        className={cn(
                          "flex-1 text-center transition-colors truncate",
                          hoveredBucket === idx ? "font-bold text-indigo-600" : "text-slate-500",
                        )}
                      >
                        {bucket.range}
                      </span>
                    ))}
                  </div>

                  <span className="text-[9px] font-medium text-slate-500 block text-center mt-1">
                    Score Range
                  </span>
                </div>
              </div>

              {/* Right: Score Statistics */}
              <div
                className={cn(
                  "rounded-xl border p-3 sm:p-3.5 shadow-2xs flex flex-col justify-between",
                  dark ? "bg-[#1A1D2D] border-slate-300/80" : "bg-white border-slate-200/80",
                )}
              >
                <div>
                  <div
                    className={cn(
                      "flex items-center gap-1.5 pb-2 border-b",
                      dark ? "border-slate-300/50" : "border-slate-100",
                    )}
                  >
                    <BarChart3
                      className={cn("h-3.5 w-3.5", dark ? "text-indigo-400" : "text-indigo-600")}
                    />
                    <h4
                      className={cn(
                        "font-display text-xs sm:text-sm font-bold",
                        dark ? "text-slate-100" : "text-slate-900",
                      )}
                    >
                      Score Statistics
                    </h4>
                  </div>

                  <div
                    className={cn(
                      "mt-1 divide-y",
                      dark ? "divide-slate-700/50" : "divide-slate-100/90",
                    )}
                  >
                    {scoreStats.map((st) => (
                      <div
                        key={st.label}
                        className="flex items-center justify-between py-1.5 text-[11px]"
                      >
                        <span
                          className={cn("font-medium", dark ? "text-slate-500" : "text-slate-600")}
                        >
                          {st.label}
                        </span>
                        <span
                          className={cn(
                            "font-bold font-mono",
                            dark ? "text-slate-700" : "text-slate-900",
                          )}
                        >
                          {st.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={cn(
                    "mt-2.5 rounded-lg border px-2.5 py-1.5 text-[10px] flex items-center justify-between",
                    dark
                      ? "bg-indigo-900/20 border-indigo-500/20 text-indigo-200"
                      : "bg-indigo-50/60 border-indigo-100 text-indigo-900",
                  )}
                >
                  <span>Batch Completion:</span>
                  <strong className={cn("font-bold", dark ? "text-indigo-400" : "text-indigo-700")}>
                    27 of 30 (90.0%)
                  </strong>
                </div>
              </div>
            </div>

            {/* Bottom 2 Columns: Individual Score Summary + Not Started */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-2.5">
              {/* Left: Individual Score Summary */}
              <div
                className={cn(
                  "rounded-xl border p-3 sm:p-3.5 shadow-2xs flex flex-col justify-between",
                  dark ? "bg-[#1A1D2D] border-slate-300/80" : "bg-white border-slate-200/80",
                )}
              >
                <div>
                  <div
                    className={cn(
                      "flex items-center justify-between pb-2 border-b",
                      dark ? "border-slate-300/50" : "border-slate-100",
                    )}
                  >
                    <div className="flex items-center gap-1.5">
                      <Trophy
                        className={cn("h-3.5 w-3.5", dark ? "text-indigo-400" : "text-indigo-600")}
                      />
                      <h4
                        className={cn(
                          "font-display text-xs sm:text-sm font-bold",
                          dark ? "text-slate-100" : "text-slate-900",
                        )}
                      >
                        Individual Score Summary
                      </h4>
                    </div>
                    <span className="text-[10px] font-medium text-slate-500">Top 4 of 27</span>
                  </div>

                  <div className="overflow-x-auto mt-1">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr
                          className={cn(
                            "border-b text-[9px] font-bold uppercase tracking-wider",
                            dark
                              ? "border-slate-300/50 text-slate-500"
                              : "border-slate-100 text-slate-500",
                          )}
                        >
                          <th className="py-1.5 pr-2">Rank</th>
                          <th className="py-1.5 px-2">Student</th>
                          <th className="py-1.5 px-2 hidden sm:table-cell">Email</th>
                          <th className="py-1.5 px-2">Score</th>
                          <th className="py-1.5 pl-2 text-right">Pct %</th>
                        </tr>
                      </thead>
                      <tbody
                        className={cn(
                          "divide-y",
                          dark ? "divide-slate-700/50" : "divide-slate-100/90",
                        )}
                      >
                        {studentScores.slice(0, 4).map((student) => (
                          <tr
                            key={student.email}
                            className={cn(
                              "transition-colors",
                              dark ? "hover:bg-slate-100/50" : "hover:bg-slate-50/60",
                            )}
                          >
                            <td className="py-1.5 pr-2 font-mono font-medium text-[10px] text-slate-500">
                              {student.rank}
                            </td>
                            <td
                              className={cn(
                                "py-1.5 px-2 font-bold text-xs",
                                dark ? "text-slate-700" : "text-slate-900",
                              )}
                            >
                              {student.name}
                            </td>
                            <td className="py-1.5 px-2 font-mono text-[10px] text-slate-500 hidden sm:table-cell">
                              {student.email}
                            </td>
                            <td
                              className={cn(
                                "py-1.5 px-2 font-semibold font-mono text-xs",
                                dark ? "text-indigo-400" : "text-indigo-600",
                              )}
                            >
                              {student.score}
                            </td>
                            <td className="py-1.5 pl-2 text-right">
                              <span
                                className={cn(
                                  "inline-block rounded border px-1.5 py-0.2 text-[10px] font-bold font-mono",
                                  student.badge,
                                )}
                              >
                                {student.pct}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div
                  className={cn(
                    "pt-2 flex justify-end border-t mt-1",
                    dark ? "border-slate-300/50" : "border-slate-100/80",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setActiveTab("responses")}
                    className={cn(
                      "text-[10px] font-semibold transition-colors cursor-pointer",
                      dark
                        ? "text-indigo-400 hover:text-indigo-300"
                        : "text-indigo-600 hover:text-indigo-800",
                    )}
                  >
                    View all 27 responses →
                  </button>
                </div>
              </div>

              {/* Right: Not Started Section */}
              <div
                className={cn(
                  "rounded-xl border p-3 sm:p-3.5 shadow-2xs flex flex-col justify-between",
                  dark ? "bg-[#1A1D2D] border-slate-300/80" : "bg-white border-slate-200/80",
                )}
              >
                <div>
                  <div
                    className={cn(
                      "flex items-center justify-between pb-2 border-b",
                      dark ? "border-slate-300/50" : "border-slate-100",
                    )}
                  >
                    <div className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-slate-500" />
                      <h4
                        className={cn(
                          "font-display text-xs sm:text-sm font-bold",
                          dark ? "text-slate-100" : "text-slate-900",
                        )}
                      >
                        Not Started
                      </h4>
                    </div>
                    <span
                      className={cn(
                        "text-[10px] font-medium border rounded-full px-2 py-0.2",
                        dark
                          ? "text-amber-400 bg-amber-500/10 border-amber-500/20"
                          : "text-amber-600 bg-amber-50 border-amber-200/50",
                      )}
                    >
                      3 Pending
                    </span>
                  </div>

                  <div className="overflow-x-auto mt-1">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr
                          className={cn(
                            "border-b text-[9px] font-bold uppercase tracking-wider",
                            dark
                              ? "border-slate-300/50 text-slate-500"
                              : "border-slate-100 text-slate-500",
                          )}
                        >
                          <th className="py-1.5 pr-2">Student</th>
                          <th className="py-1.5 px-2">Email</th>
                          <th className="py-1.5 pl-2 text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody
                        className={cn(
                          "divide-y",
                          dark ? "divide-slate-700/50" : "divide-slate-100/90",
                        )}
                      >
                        {notStartedStudents.map((ns) => (
                          <tr
                            key={ns.email}
                            className={cn(dark ? "hover:bg-slate-100/50" : "hover:bg-slate-50/60")}
                          >
                            <td
                              className={cn(
                                "py-1.5 pr-2 font-medium text-xs",
                                dark ? "text-slate-700" : "text-slate-800",
                              )}
                            >
                              {ns.name}
                            </td>
                            <td className="py-1.5 px-2 font-mono text-[10px] text-slate-500">
                              {ns.email}
                            </td>
                            <td className="py-1.5 pl-2 text-right text-[10px] text-slate-500 whitespace-nowrap">
                              {ns.status}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div
                  className={cn(
                    "pt-2 flex justify-between items-center border-t mt-1 text-[10px] text-slate-500",
                    dark ? "border-slate-300/50" : "border-slate-100/80",
                  )}
                >
                  <span>Need follow-up?</span>
                  <span
                    className={cn(
                      "font-semibold cursor-pointer",
                      dark
                        ? "text-indigo-400 hover:text-indigo-300"
                        : "text-indigo-600 hover:text-indigo-800",
                    )}
                  >
                    Nudge all 3
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Question Analysis */}
        {activeTab === "questions" && (
          <div
            className={cn(
              "mt-3 rounded-xl border p-3.5 sm:p-4 shadow-2xs space-y-2.5",
              dark ? "bg-[#1A1D2D] border-slate-300/80" : "bg-white border-slate-200/80",
            )}
          >
            <h4
              className={cn(
                "font-display text-xs sm:text-sm font-bold mb-1",
                dark ? "text-slate-100" : "text-slate-900",
              )}
            >
              Question-by-Question Diagnostic
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {[
                { q: "Q1", status: "correct", topic: "Physics (Units)", acc: "85%" },
                { q: "Q2", status: "correct", topic: "Physics (Kinematics)", acc: "78%" },
                { q: "Q3", status: "wrong", topic: "Chemistry (Thermo)", acc: "41%" },
                { q: "Q4", status: "wrong", topic: "Chemistry (Equilibrium)", acc: "37%" },
                { q: "Q5", status: "correct", topic: "Biology (Cell Cycle)", acc: "92%" },
                { q: "Q6", status: "correct", topic: "Biology (Genetics)", acc: "81%" },
                { q: "Q7", status: "wrong", topic: "Physics (Optics)", acc: "48%" },
                { q: "Q8", status: "correct", topic: "Chemistry (Organic)", acc: "70%" },
                { q: "Q9", status: "correct", topic: "Biology (Ecology)", acc: "89%" },
                { q: "Q10", status: "wrong", topic: "Physics (EM Waves)", acc: "33%" },
              ].map((item) => (
                <div
                  key={item.q}
                  className={cn(
                    "rounded-lg border p-2 text-center transition-all",
                    item.status === "correct"
                      ? dark
                        ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                        : "border-blue-200 bg-blue-50/50 text-blue-800"
                      : dark
                        ? "border-rose-500/30 bg-rose-500/10 text-rose-400"
                        : "border-rose-200 bg-rose-50/50 text-rose-800",
                  )}
                >
                  <span className="font-bold text-xs block">{item.q}</span>
                  <span className="text-[10px] font-medium block truncate mt-0.5">
                    {item.topic}
                  </span>
                  <span
                    className={cn(
                      "mt-1 inline-block text-[9px] font-bold px-1.5 py-0.2 rounded-full",
                      item.status === "correct"
                        ? dark
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-blue-100 text-blue-800"
                        : dark
                          ? "bg-rose-500/20 text-rose-300"
                          : "bg-rose-100 text-rose-800",
                    )}
                  >
                    {item.acc} Correct
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Individual Responses */}
        {activeTab === "responses" && (
          <div
            className={cn(
              "mt-3 rounded-xl border p-3.5 sm:p-4 shadow-2xs space-y-3",
              dark ? "bg-[#1A1D2D] border-slate-300/80" : "bg-white border-slate-200/80",
            )}
          >
            <div
              className={cn(
                "flex items-center justify-between pb-2 border-b",
                dark ? "border-slate-300/50" : "border-slate-100",
              )}
            >
              <div>
                <h4
                  className={cn(
                    "font-display text-xs sm:text-sm font-bold",
                    dark ? "text-slate-100" : "text-slate-900",
                  )}
                >
                  Student: Kavitha R (Rank #1)
                </h4>
                <p className="text-[10px] text-slate-500 font-mono">
                  kavitha.r@gmail.com • Submitted in 5m 48s
                </p>
              </div>
              <span
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-[11px] font-bold border",
                  dark
                    ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                    : "bg-blue-50 border-blue-200/60 text-blue-700",
                )}
              >
                Score: 960 / 1000 (96%)
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div
                className={cn(
                  "rounded-lg border p-2.5",
                  dark ? "bg-slate-100/50 border-slate-300" : "bg-slate-50 border-slate-200/70",
                )}
              >
                <span className="text-[10px] font-bold uppercase text-slate-500">Strong Areas</span>
                <p
                  className={cn(
                    "font-semibold text-xs mt-0.5",
                    dark ? "text-slate-700" : "text-slate-800",
                  )}
                >
                  Biology & Physics (10/10 questions)
                </p>
              </div>
              <div
                className={cn(
                  "rounded-lg border p-2.5",
                  dark
                    ? "bg-indigo-500/10 border-indigo-500/20"
                    : "bg-indigo-50/50 border-indigo-200/60",
                )}
              >
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase",
                    dark ? "text-indigo-400" : "text-indigo-500",
                  )}
                >
                  Speed Metric
                </span>
                <p
                  className={cn(
                    "font-semibold text-xs mt-0.5",
                    dark ? "text-indigo-300" : "text-indigo-900",
                  )}
                >
                  Top 5% fastest completion in batch
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </ProductWindow>
  );
}

// --------------------------------------------------------------------------
// UPSC Mock Interview Simulator Mockup (Matches Candidate Context & Setup Screen)
// --------------------------------------------------------------------------
export function UPSCInterviewSimulatorMockup() {
  const [profile, setProfile] = useState({
    fullName: "Abinaya",
    hometown: "Chennai, Tamil Nadu",
    graduationSubject: "Computer Science",
    optionalSubject: "Public Administration",
    workExperience: "3 years in software engineering",
    hobbies: "Reading, chess, trekking",
  });

  const [isVoiceOn, setIsVoiceOn] = useState(true);
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [candidateResponse, setCandidateResponse] = useState(
    "The primary bottleneck was the disbursement lag in untied village health funds, which caused supply stockouts despite central budget approval...",
  );
  const [inputMsg, setInputMsg] = useState("");

  const stagesList = [
    "Introduction",
    "DAF Deep Dive",
    "Current Affairs",
    "Situational Problem",
    "Counter Questions",
    "Panel Evaluation",
  ];

  return (
    <div className="w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/60 bg-white/20 backdrop-blur-2xl text-slate-800 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
      {/* Top Header Bar */}
      <div className="flex h-14 items-center justify-between border-b border-white/40 px-5 sm:px-6 bg-transparent shrink-0">
        <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 tracking-tight">
          UPSC Interview Simulator
        </h3>

        <button
          type="button"
          onClick={() => setIsVoiceOn(!isVoiceOn)}
          className="flex items-center gap-1.5 rounded-lg border border-white/60 bg-white/40 backdrop-blur-md hover:bg-white/60 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-colors cursor-pointer"
        >
          {isVoiceOn ? (
            <>
              <Volume2 className="h-3.5 w-3.5 text-slate-600" />
              <span>Voice On</span>
            </>
          ) : (
            <>
              <VolumeX className="h-3.5 w-3.5 text-slate-500" />
              <span>Voice Off</span>
            </>
          )}
        </button>
      </div>

      {/* Main 2-Column Body */}
      <div className="grid grid-cols-1 lg:grid-cols-[310px_1fr] divide-y lg:divide-y-0 lg:divide-x divide-white/40 min-h-[560px]">
        {/* Left Column: Candidate Context */}
        <div className="p-5 sm:p-6 bg-transparent flex flex-col justify-between">
          <div>
            {/* Header */}
            <h4 className="font-display text-sm sm:text-[15px] font-bold text-[#4361EE]">
              Candidate Context
            </h4>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Configure your DAF to begin simulation
            </p>

            {/* Candidate Profile Form */}
            <div className="mt-4">
              <p className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                CANDIDATE PROFILE
              </p>

              <div className="mt-2.5 space-y-2.5">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-0.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={profile.fullName}
                    onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                    className="w-full rounded-lg border border-slate-2000 bg-white/40 backdrop-blur-md px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/20 shadow-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-0.5">
                    Hometown *
                  </label>
                  <input
                    type="text"
                    value={profile.hometown}
                    onChange={(e) => setProfile({ ...profile, hometown: e.target.value })}
                    className="w-full rounded-lg border border-slate-2000 bg-white/40 backdrop-blur-md px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/20 shadow-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-0.5">
                    Graduation Subject *
                  </label>
                  <input
                    type="text"
                    value={profile.graduationSubject}
                    onChange={(e) => setProfile({ ...profile, graduationSubject: e.target.value })}
                    className="w-full rounded-lg border border-slate-2000 bg-white/40 backdrop-blur-md px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/20 shadow-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-0.5">
                    Optional Subject
                  </label>
                  <input
                    type="text"
                    value={profile.optionalSubject}
                    onChange={(e) => setProfile({ ...profile, optionalSubject: e.target.value })}
                    className="w-full rounded-lg border border-slate-2000 bg-white/40 backdrop-blur-md px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/20 shadow-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-0.5">
                    Work Experience
                  </label>
                  <input
                    type="text"
                    value={profile.workExperience}
                    onChange={(e) => setProfile({ ...profile, workExperience: e.target.value })}
                    className="w-full rounded-lg border border-slate-2000 bg-white/40 backdrop-blur-md px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/20 shadow-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-0.5">
                    Hobbies *
                  </label>
                  <input
                    type="text"
                    value={profile.hobbies}
                    onChange={(e) => setProfile({ ...profile, hobbies: e.target.value })}
                    className="w-full rounded-lg border border-slate-2000 bg-white/40 backdrop-blur-md px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/20 shadow-sm transition-all"
                  />
                </div>
              </div>

              {/* Begin Interview Button */}
              <button
                type="button"
                onClick={() => setIsInterviewStarted(true)}
                className="mt-3.5 w-full rounded-xl bg-[#7B8BF5] hover:bg-[#687AF0] active:scale-[0.99] text-slate-900 py-2.5 text-xs sm:text-[13px] font-semibold shadow-xs transition-all cursor-pointer text-center"
              >
                {isInterviewStarted ? "Resume Interview" : "Begin Interview"}
              </button>
            </div>

            {/* Stages section */}
            <div className="mt-5 pt-3 border-t border-white/40">
              <p className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                INTERVIEW STAGES
              </p>
              <div className="mt-2.5 space-y-2">
                {stagesList.map((stage, idx) => {
                  const isActive = isInterviewStarted && idx === currentStage;
                  const isCompleted = isInterviewStarted && idx < currentStage;
                  return (
                    <div
                      key={stage}
                      onClick={() => {
                        if (isInterviewStarted) setCurrentStage(idx);
                      }}
                      className={cn(
                        "flex items-center gap-2.5 text-xs transition-colors",
                        isInterviewStarted ? "cursor-pointer" : "cursor-default",
                        isActive
                          ? "font-semibold text-indigo-600"
                          : isCompleted
                            ? "text-slate-700 font-medium"
                            : "text-slate-500",
                      )}
                    >
                      <span
                        className={cn(
                          "grid h-5 w-5 place-items-center rounded-full border text-[10px] shrink-0 font-medium",
                          isActive
                            ? "border-indigo-600 bg-indigo-50 text-indigo-600 font-bold"
                            : isCompleted
                              ? "border-blue-500 bg-blue-50 text-blue-600 font-bold"
                              : "border-slate-200 text-slate-500",
                        )}
                      >
                        {isCompleted ? "✓" : idx + 1}
                      </span>
                      <span>{stage}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Main Center Area + Chat Input */}
        <div className="bg-transparent flex flex-col justify-between p-5 sm:p-7 relative">
          {/* Main Card View */}
          {!isInterviewStarted ? (
            /* Setup State: EXACT MATCH TO IMAGE 2 */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="my-auto mx-auto w-full max-w-xl rounded-2xl border border-white/60 bg-white/40 backdrop-blur-xl p-6 sm:p-8 shadow-md text-center"
            >
              {/* Balance / Scale Icon */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0px 0px 0px rgba(79,70,229,0)",
                    "0px 0px 20px rgba(79,70,229,0.3)",
                    "0px 0px 0px rgba(79,70,229,0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#EEF2FF] text-[#4F46E5] shadow-2xs"
              >
                <Scale className="h-6 w-6 stroke-[1.8]" />
              </motion.div>

              {/* Title */}
              <h3 className="mt-4 font-display text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                UPSC Mock Interview Simulator
              </h3>

              {/* Subtitle */}
              <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-500 max-w-md mx-auto">
                Practice with an AI-powered board that simulates the rigorous UPSC Civil Services
                personality test. Get real-time situational, DAF-based, and current affairs
                questions.
              </p>

              {/* 2x2 Feature Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {/* 1. DAF-Based Profiling */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-slate-50 transition-colors"
                >
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#EEF2FF] text-[#4F46E5] shrink-0">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                      DAF–Based Profiling
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                      Questions are dynamically tailored using your graduation subject, hometown,
                      optional subject, work experience, and hobbies.
                    </p>
                  </div>
                </motion.div>

                {/* 2. 6-Stage Progressive Flow */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-slate-50 transition-colors"
                >
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#EEF2FF] text-[#4F46E5] shrink-0">
                    <Activity className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                      6–Stage Progressive Flow
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                      Simulates the exact interview sequence: Introduction, DAF Deep Dive, Current
                      Affairs, Situational scenarios, Counter-questioning, and Final summary.
                    </p>
                  </div>
                </motion.div>

                {/* 3. Real-time Pace & Timer */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-slate-50 transition-colors"
                >
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#EEF2FF] text-[#4F46E5] shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                      Real-time Pace & Timer
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                      Simulates board interactions with real-time response capture, keeping you
                      engaged under natural pacing constraints.
                    </p>
                  </div>
                </motion.div>

                {/* 4. Instant Detailed Feedback */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-slate-50 transition-colors"
                >
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#EEF2FF] text-[#4F46E5] shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                      Instant Detailed Feedback
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                      Get graded on Communication, Analytical ability, Confidence, and Balance with
                      actionable, comprehensive strengths and improvements feedback.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            /* Active Simulation State: Live 3-Member Panel Interaction */
            <div className="my-auto mx-auto w-full max-w-xl space-y-4">
              <div className="flex items-center justify-between pb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200/50">
                  Stage 02: DAF Deep Dive
                </span>
                <button
                  type="button"
                  onClick={() => setIsInterviewStarted(false)}
                  className="text-[11px] font-semibold text-slate-500 hover:text-slate-800 hover:underline cursor-pointer"
                >
                  ← Edit DAF Context
                </button>
              </div>

              {/* 3 Panel Members */}
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { name: "Board Chairperson", role: "Speaking", active: true },
                  { name: "Subject Specialist", role: profile.graduationSubject, active: false },
                  { name: "Psychologist", role: "Composure", active: false },
                ].map((member) => (
                  <div
                    key={member.name}
                    className={cn(
                      "rounded-xl border p-2.5 text-center transition-all bg-white",
                      member.active
                        ? "border-indigo-400 shadow-xs ring-1 ring-indigo-400/30"
                        : "border-slate-200/80 text-slate-600",
                    )}
                  >
                    <div
                      className={cn(
                        "mx-auto grid h-8 w-8 place-items-center rounded-full text-xs font-bold",
                        member.active
                          ? "bg-[#EEF2FF] text-[#4F46E5]"
                          : "bg-slate-100 text-slate-500",
                      )}
                    >
                      <UserRound className="h-4 w-4" />
                    </div>
                    <p className="mt-1 text-[11px] font-bold text-slate-900 truncate">
                      {member.name}
                    </p>
                    <span className="text-[9px] text-slate-500 block truncate">{member.role}</span>
                  </div>
                ))}
              </div>

              {/* Panel Question */}
              <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-xs space-y-3">
                <div>
                  <span className="inline-block rounded-md bg-indigo-50 border border-indigo-200/50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-indigo-700">
                    Panel Question
                  </span>
                  <p className="mt-1.5 text-xs sm:text-[13px] font-medium leading-relaxed text-slate-900">
                    &ldquo;Your DAF highlights a degree in {profile.graduationSubject} and{" "}
                    {profile.workExperience} in {profile.hometown}. What is the most critical
                    structural friction you see when deploying digital systems across rural
                    panchayats?&rdquo;
                  </p>
                </div>

                {/* Candidate Response */}
                <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Candidate Response
                    </span>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.2 rounded-full">
                      Fluency 92%
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-700">
                    &ldquo;{candidateResponse}&rdquo;
                  </p>
                </div>

                {/* AI Counter Question */}
                <div className="rounded-lg bg-[#EEF2FF]/60 border border-indigo-200 p-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700">
                    AI Counter-Question
                  </span>
                  <p className="mt-1 text-xs font-semibold text-slate-900">
                    &ldquo;If appointed District Magistrate, what immediate statutory mechanism
                    would you trigger to bypass that disbursement lag while ensuring financial audit
                    integrity?&rdquo;
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Chat / Send Input Bar */}
          <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center gap-2">
            <input
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              placeholder={
                isInterviewStarted
                  ? "Type your response to the board or tap Send..."
                  : "Configure profile and click Begin Interview to start..."
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" && (!isInterviewStarted || inputMsg.trim())) {
                  if (!isInterviewStarted) {
                    setIsInterviewStarted(true);
                  } else if (inputMsg.trim()) {
                    setCandidateResponse(inputMsg);
                    setInputMsg("");
                  }
                }
              }}
              className="flex-1 rounded-xl border border-slate-2000 bg-white/40 backdrop-blur-md px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/20 shadow-sm transition-all"
            />
            <button
              type="button"
              onClick={() => {
                if (!isInterviewStarted) {
                  setIsInterviewStarted(true);
                } else if (inputMsg.trim()) {
                  setCandidateResponse(inputMsg);
                  setInputMsg("");
                }
              }}
              className="rounded-xl bg-[#7B8BF5] hover:bg-[#687AF0] active:scale-[0.98] px-5 py-2.5 text-xs font-semibold text-slate-900 shadow-xs transition-colors cursor-pointer shrink-0"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/60 bg-white/40 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(37,99,235,0.15)] ring-1 ring-black/5 flex h-[700px] text-slate-800">
      {/* Sidebar */}
      <div className="w-[84px] bg-white/40 backdrop-blur-md border-r border-slate-2000 flex flex-col items-center py-6 gap-6 shrink-0 z-10">
        <div className="w-12 h-12 bg-white/80 rounded-xl shadow-sm flex items-center justify-center text-blue-600 border border-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-4 w-full px-3 mt-4">
          <div className="w-full aspect-square bg-blue-600 rounded-2xl flex items-center justify-center text-slate-900 shadow-md cursor-pointer hover:scale-105 transition-transform">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          {[Bot, BookOpen, Video, LayoutDashboard, FileQuestion, Trophy].map((Icon, i) => (
            <div
              key={i}
              className="w-full aspect-square hover:bg-white hover:shadow-sm rounded-2xl flex items-center justify-center text-slate-500 hover:text-slate-700 transition-all cursor-pointer"
            >
              <Icon className="w-5 h-5" />
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-4 w-full px-3">
          <div className="w-full aspect-square bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-slate-900 shadow-md cursor-pointer hover:scale-105 transition-transform">
            <span className="font-bold text-lg">A</span>
          </div>
          <div className="w-full aspect-square hover:bg-white hover:shadow-sm rounded-2xl flex items-center justify-center text-slate-500 hover:text-slate-700 transition-all cursor-pointer">
            <LogOut className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white/60 backdrop-blur-2xl flex flex-col overflow-y-auto">
        <div className="p-8 sm:p-10 max-w-[1200px] w-full mx-auto space-y-10">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold text-blue-600 tracking-wider mb-4 border border-blue-100 uppercase shadow-sm">
                Today At Rovian
              </div>
              <h1 className="text-3xl sm:text-[34px] font-extrabold text-slate-900 tracking-tight">
                Welcome, Abi
              </h1>
              <p className="text-slate-500 text-sm mt-2 max-w-md leading-relaxed font-medium">
                Continue where you left off, complete your key tasks, and keep your learning streak
                active.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-white/80 border border-white rounded-[20px] p-5 min-w-[200px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center text-orange-500 shrink-0">
                <Flame className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500">Current Streak</p>
                <p className="text-xl font-bold text-slate-900 mt-0.5">1 day</p>
              </div>
            </div>
          </div>

          {/* Action Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Rovian AI Chat",
                desc: "Get instant help from AI tutor with personalized feedback and 24/7 availability.",
                icon: Bot,
                color: "text-indigo-500",
                bg: "bg-indigo-100",
                btnText: "Start Asking \u2192",
              },
              {
                title: "Learning Videos",
                desc: "Watch curated educational content from top instructors around the globe.",
                icon: Video,
                color: "text-emerald-500",
                bg: "bg-emerald-100",
                btnText: "Watch & Learn \u2192",
              },
              {
                title: "Take Quiz",
                desc: "Test your knowledge with MCQ quizzes designed to track your progress.",
                icon: FileQuestion,
                color: "text-blue-500",
                bg: "bg-blue-100",
                btnText: "Start Quiz \u2192",
              },
              {
                title: "Practice Test",
                desc: "Test your knowledge with MCQ quizzes in a timed, exam-like environment.",
                icon: LayoutDashboard,
                color: "text-orange-500",
                bg: "bg-orange-100",
                btnText: "Start Test \u2192",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm border border-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] rounded-3xl p-6 flex flex-col transition-all hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)] hover:-translate-y-1 group cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${card.bg} ${card.color}`}
                >
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-[15px]">{card.title}</h3>
                <p className="text-[13px] text-slate-500 font-medium mt-2 mb-6 leading-relaxed flex-1">
                  {card.desc}
                </p>
                <button className="self-start px-5 py-2.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold group-hover:bg-blue-600 group-hover:text-slate-900 transition-colors">
                  {card.btnText}
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
            {/* What's Next */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-slate-900 text-[15px]">What's Next</h3>
                <a href="#" className="text-xs font-bold text-blue-600 hover:underline">
                  View More
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Chapter: 5 - States of Matter" },
                  { title: "Chapter: 6 - Thermodynamics" },
                ].map((vid, i) => (
                  <div
                    key={i}
                    className="border border-white bg-white/80 rounded-[20px] overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] group cursor-pointer hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)] transition-all flex flex-col"
                  >
                    <div className="aspect-[4/3] bg-slate-900 relative flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg relative z-10">
                        <Play className="w-4 h-4 text-slate-900 ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="p-4 flex-1">
                      <p className="text-[12px] font-bold text-slate-900 leading-tight">
                        {vid.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Tests */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-slate-900 text-[15px]">Upcoming Tests</h3>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-white/80 border border-white px-2 py-1 rounded-md hover:bg-white shadow-sm transition-colors">
                    <RefreshCw className="w-3 h-3" /> Reload
                  </button>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-1 rounded-md shadow-sm">
                    152 Scheduled
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  {
                    date: "2026-08-07, 03:16 PM",
                    chapter: "Chapter Test - 02: Chapter: 9 - Solutions",
                  },
                  {
                    date: "2026-08-07, 05:09 PM",
                    chapter: "Chapter Test - 04: Chapter: 9 - Solutions",
                  },
                ].map((test, i) => (
                  <div
                    key={i}
                    className="border border-white/60 rounded-[20px] p-4 bg-white/60 backdrop-blur-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col gap-3 relative group"
                  >
                    <div className="flex justify-between items-center text-[10px] font-bold">
                      <div className="flex gap-2">
                        <span className="text-yellow-700 bg-yellow-50 border border-yellow-100 px-2 py-0.5 rounded-md uppercase tracking-wider">
                          Chemistry
                        </span>
                        <span className="text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded-md uppercase tracking-wider">
                          Missed
                        </span>
                      </div>
                      <span className="text-slate-500 font-medium">{test.date}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-[14px] leading-snug pr-4">
                      {test.chapter}
                    </h4>
                    <div className="flex items-center flex-wrap gap-x-3 gap-y-2 text-[11px] font-semibold text-slate-500 mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> 45 Mins
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag className="w-3 h-3 text-orange-400" /> Async Mode
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3 text-blue-400" /> Chapter: 9-Solutions
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] rounded-[20px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-slate-100 text-slate-500 border border-slate-200 font-bold text-xs px-5 py-2.5 rounded-lg cursor-not-allowed uppercase tracking-wider">
                        Test Missed
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Analytics */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-slate-900 text-[15px]">Learning Analytics</h3>
                <a
                  href="#"
                  className="text-[11px] font-bold text-blue-600 hover:underline bg-blue-50 px-2 py-1 rounded-md"
                >
                  This Week
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    label: "Study Hours",
                    value: "0.5h",
                    icon: BookOpen,
                    color: "text-blue-600",
                    bg: "bg-blue-100",
                    border: "border-blue-100",
                  },
                  {
                    label: "Total MCQ",
                    value: "111",
                    icon: CheckCircle2,
                    color: "text-indigo-600",
                    bg: "bg-indigo-100",
                    border: "border-indigo-100",
                  },
                  {
                    label: "Chapters",
                    value: "17",
                    icon: LayoutDashboard,
                    color: "text-blue-600",
                    bg: "bg-blue-100",
                    border: "border-blue-100",
                  },
                  {
                    label: "MCQ Remaining",
                    value: "29",
                    icon: Clock,
                    color: "text-indigo-600",
                    bg: "bg-indigo-100",
                    border: "border-indigo-100",
                  },
                  {
                    label: "Test Accuracy",
                    value: "6.19%",
                    icon: BarChart,
                    color: "text-teal-600",
                    bg: "bg-teal-100",
                    border: "border-teal-100",
                  },
                  {
                    label: "Videos Watched",
                    value: "20",
                    icon: PlayCircle,
                    color: "text-teal-600",
                    bg: "bg-teal-100",
                    border: "border-teal-100",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 p-3 rounded-2xl border ${stat.border.replace("border-", "border-white/40 border-")} bg-white/70 backdrop-blur-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow cursor-default`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}
                    >
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                        {stat.label}
                      </p>
                      <p className="text-base font-extrabold text-slate-900 leading-tight">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-1 py-3.5 bg-[#0d9488] hover:bg-teal-700 text-slate-900 text-[13px] font-bold rounded-2xl transition-all shadow-lg shadow-teal-900/20 active:scale-[0.98]">
                View Challenges
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
