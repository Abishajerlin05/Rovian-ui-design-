import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  GraduationCap,
  Loader2,
  Mic,
  MoreVertical,
  Pause,
  PenLine,
  Play,
  RotateCcw,
  Sparkles,
  Upload,
  Volume2,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Shared Rovian AI App Header Bar (Compact)
export function RovianAppHeader({ title = "Rovian AI" }: { title?: string }) {
  return (
    <div className="flex h-10 items-center justify-between border-b border-slate-200/90 bg-white/95 px-4 backdrop-blur-md shrink-0">
      {/* Brand Logo */}
      <div className="flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-violet-600 text-white shadow-xs">
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <span className="font-display text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
          {title}
        </span>
      </div>

      {/* Dashboard link */}
      <button
        type="button"
        className="flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
      >
        <span>Dashboard</span>
        <ArrowRight className="h-3 w-3" />
      </button>
    </div>
  );
}

// --------------------------------------------------------------------------
// 01. CONVERSATION TAB MOCKUP (Matches Image 2)
// --------------------------------------------------------------------------
export function EnglishConversationMockup() {
  const [isRecording, setIsRecording] = useState(false);
  const [activeAudioIndex, setActiveAudioIndex] = useState<number | null>(null);
  const [activeFeedback, setActiveFeedback] = useState<number | null>(null);

  const messages = [
    {
      role: "bot",
      text: "Hello! Let us start our conversation. How are you today?",
    },
    {
      role: "user",
      text: "yeah I am fine what about you",
      score: "75%",
      feedback: "Good tone. Try capitalizing 'Yeah' and add punctuation.",
    },
    {
      role: "bot",
      text: "I'm doing great, thank you! Would you like to tell me a little about yourself?",
    },
    {
      role: "user",
      text: "I am Yogendra from Salem",
      score: "100%",
      feedback: "Fluent delivery and clear pronunciation!",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-between text-slate-800 p-3.5 sm:p-4">
      {/* Subheader */}
      <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/70">
        <div>
          <span className="block text-[10px] font-semibold text-slate-400 tracking-wide uppercase">
            Beginner
          </span>
          <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 leading-tight">
            Introducing Myself
          </h3>
        </div>

        <button
          type="button"
          className="rounded-full bg-[#044E3D] hover:bg-[#033c2e] text-white px-3 py-1 text-[11px] font-semibold shadow-xs transition-colors cursor-pointer"
        >
          End & Get Score
        </button>
      </div>

      {/* Chat Messages Flow */}
      <div className="py-2.5 space-y-2.5 max-w-lg mx-auto w-full">
        {messages.map((msg, index) => {
          if (msg.role === "bot") {
            const isPlaying = activeAudioIndex === index;
            return (
              <div key={index} className="flex justify-start">
                <div className="relative rounded-xl bg-white border border-slate-200/90 p-2.5 pr-9 max-w-[85%] text-slate-800 text-xs leading-relaxed shadow-2xs">
                  <p>{msg.text}</p>
                  <button
                    type="button"
                    onClick={() => setActiveAudioIndex(isPlaying ? null : index)}
                    className={cn(
                      "absolute top-2 right-2 grid h-5 w-5 place-items-center rounded-sm border transition-all cursor-pointer",
                      isPlaying
                        ? "border-[#044E3D] bg-[#E8F8F0] text-[#044E3D]"
                        : "border-slate-200 bg-slate-50 text-slate-500 hover:text-slate-800",
                    )}
                    aria-label="Play message audio"
                  >
                    {isPlaying ? (
                      <Pause className="h-2.5 w-2.5 fill-current" />
                    ) : (
                      <Play className="h-2 w-2 fill-current ml-0.5" />
                    )}
                  </button>
                </div>
              </div>
            );
          }

          // User message
          const showFeedback = activeFeedback === index;
          return (
            <div key={index} className="flex flex-col items-end">
              <div className="rounded-xl bg-[#044E3D] text-white px-3.5 py-1.5 text-xs font-medium shadow-xs max-w-[85%]">
                <p>{msg.text}</p>
              </div>

              {/* Feedback Links */}
              <div className="mt-0.5 flex items-center gap-1.5 mr-1">
                <button
                  type="button"
                  onClick={() => setActiveFeedback(showFeedback ? null : index)}
                  className="text-[10px] font-medium text-slate-500 hover:text-slate-800 hover:underline transition-all cursor-pointer"
                >
                  View feedback
                </button>
                <span className="rounded-full bg-[#E8F8F0] px-1.5 py-0.2 text-[9px] font-bold text-[#1D4ED8]">
                  {msg.score}
                </span>
              </div>

              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 rounded-lg bg-white border border-blue-200 p-1.5 text-[10px] text-slate-700 shadow-sm max-w-xs text-right"
                >
                  <p>{msg.feedback}</p>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Microphone Control */}
      <div className="pt-2 flex flex-col items-center justify-center">
        <button
          type="button"
          onClick={() => setIsRecording(!isRecording)}
          className={cn(
            "relative grid h-10 w-10 place-items-center rounded-full text-white shadow-md transition-all cursor-pointer active:scale-95",
            isRecording
              ? "bg-red-600 ring-4 ring-red-200 animate-pulse"
              : "bg-[#044E3D] hover:bg-[#033c2e]",
          )}
          aria-label={isRecording ? "Stop speaking" : "Tap and speak"}
        >
          <Mic className="h-4 w-4" />
        </button>
        <span className="mt-1 text-[10px] font-medium text-slate-500">
          {isRecording ? "Listening..." : "Tap and speak"}
        </span>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 02. WRITING TAB MOCKUP
// --------------------------------------------------------------------------
export function EnglishWritingMockup() {
  const [topic, setTopic] = useState("The Impact of Social Media on Modern Youth");
  const [text, setText] = useState(
    "Social media has completely transformed how young people communicate and discover information. While it fosters global connections, excessive screen time can reduce attention spans and sleep quality.",
  );
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [isEvaluated, setIsEvaluated] = useState(false);

  const suggested = ["Social Media Impact", "AI in Healthcare"];

  return (
    <div className="w-full text-slate-800 p-3.5 sm:p-4">
      <div className="mx-auto max-w-lg rounded-xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 leading-tight">
              Writing Practice
            </h3>
            <p className="text-[11px] text-slate-500">
              Write on any topic and get instant rubric feedback.
            </p>
          </div>
          {isEvaluated && (
            <button
              type="button"
              onClick={() => setIsEvaluated(false)}
              className="text-[11px] font-semibold text-teal-700 hover:underline cursor-pointer"
            >
              Edit Answer
            </button>
          )}
        </div>

        {!isEvaluated ? (
          <>
            <div>
              <label className="text-[11px] font-semibold text-slate-700">Topic</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="mt-0.5 w-full rounded-lg border border-slate-200 px-2.5 py-1 text-xs text-slate-900 focus:border-slate-400 focus:outline-none"
              />
            </div>

            {/* Suggested topics pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                Suggested:
              </span>
              {suggested.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setTopic(s)}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Answer Textarea */}
            <div>
              <div className="flex items-center justify-between pb-0.5">
                <span className="text-[11px] font-semibold text-slate-700">Your Answer</span>
                <span className="text-[10px] text-slate-400">32 words</span>
              </div>
              <textarea
                rows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full resize-none rounded-lg border border-slate-200 p-2 text-xs leading-relaxed text-slate-700 focus:border-slate-400 focus:outline-none"
              />
            </div>

            {/* Submit Action */}
            <button
              type="button"
              onClick={() => {
                setIsEvaluating(true);
                setTimeout(() => {
                  setIsEvaluating(false);
                  setIsEvaluated(true);
                }, 800);
              }}
              className="w-full flex items-center justify-center gap-1.5 rounded-lg bg-[#044E3D] hover:bg-[#033c2e] py-2 text-xs font-semibold text-white shadow-xs transition-colors cursor-pointer"
            >
              {isEvaluating ? (
                <>
                  <Loader2 className="h-3 w-3 animate-spin" />
                  <span>Evaluating answer...</span>
                </>
              ) : (
                <span>Evaluate Answer & Get Feedback</span>
              )}
            </button>
          </>
        ) : (
          /* Evaluated Summary */
          <div className="space-y-2.5 pt-1">
            <div className="flex items-center justify-between rounded-lg bg-[#E8F8F0] p-2.5 text-[#1D4ED8]">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider">Overall Score</span>
                <h4 className="font-display text-base font-bold">88 / 100 — Proficient</h4>
              </div>
              <CheckCircle2 className="h-5 w-5 text-[#1D4ED8]" />
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              <div className="rounded-lg border border-slate-100 bg-slate-50 p-1.5 text-center">
                <span className="block text-xs font-bold text-slate-900">92%</span>
                <span className="text-[9px] text-slate-500">Grammar</span>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50 p-1.5 text-center">
                <span className="block text-xs font-bold text-slate-900">85%</span>
                <span className="text-[9px] text-slate-500">Lexical</span>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50 p-1.5 text-center">
                <span className="block text-xs font-bold text-slate-900">88%</span>
                <span className="text-[9px] text-slate-500">Coherence</span>
              </div>
            </div>

            <p className="text-[10px] text-slate-600 leading-relaxed bg-white border border-slate-200 rounded-lg p-2">
              💡 <strong>Key takeaway:</strong> Strong thesis structure and well-formed compound
              clauses. High fluency and grammatical accuracy.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 03. READING TAB MOCKUP (Matches Image 3)
// --------------------------------------------------------------------------
export function EnglishReadingMockup() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({ 1: "B" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      text: "Who is the main character in the passage?",
      options: [
        { key: "A", text: "A robin" },
        { key: "B", text: "A squirrel" },
        { key: "C", text: "An oak tree" },
        { key: "D", text: "A banyan tree" },
      ],
      correct: "B",
    },
    {
      id: 2,
      text: "Why did Rocky go on his adventure?",
      options: [
        { key: "A", text: "To play with friends" },
        { key: "B", text: "To explore places" },
        { key: "C", text: "To find nuts for winter" },
        { key: "D", text: "To climb a tall tree" },
      ],
      correct: "C",
    },
  ];

  const answeredCount = Object.keys(selectedAnswers).length;

  const handleSelect = (qId: number, key: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: key }));
  };

  return (
    <div className="w-full text-slate-800 p-3.5 sm:p-4">
      {/* Subheader */}
      <div className="flex items-center justify-between pb-2.5">
        <div>
          <button
            type="button"
            className="text-[10px] font-semibold text-teal-700 hover:text-teal-900 transition-colors cursor-pointer"
          >
            ← Change Topic
          </button>
          <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 leading-tight">
            Reading Practice
          </h3>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="rounded-full bg-[#E8F8F0] px-2 py-0.5 text-[10px] font-semibold text-[#1D4ED8]">
            Beginner
          </span>
          <span className="rounded-full bg-slate-100 border border-slate-200/80 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
            Animal Adventures
          </span>
        </div>
      </div>

      {/* Two Column Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-stretch">
        {/* Left Column: Reading Passage & Audio Player */}
        <div className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-3 shadow-xs">
          <div>
            <span className="inline-block rounded-full bg-[#E8F8F0] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#1D4ED8]">
              READING PASSAGE
            </span>
            <h4 className="mt-1 font-display text-xs sm:text-sm font-bold text-slate-900">
              Rocky&apos;s Winter Store
            </h4>
            <div className="mt-1.5 space-y-1.5 text-[11px] leading-relaxed text-slate-600">
              <p>
                Rocky, a quick brown squirrel, lived in a tall banyan tree. One chilly morning, he
                began an adventure. Winter was coming, and he needed to find nuts.
              </p>
              <p>
                He scurried down into the park and spotted a hidden patch of juicy acorns under an
                oak tree. He gathered many acorns and stuffed them into his cheek pouches.
              </p>
            </div>
          </div>

          {/* Audio Player Bar */}
          <div className="mt-2 rounded-lg bg-slate-100/90 border border-slate-200/60 p-1.5 px-2.5 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="grid h-5 w-5 place-items-center rounded-full bg-white text-slate-800 shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="h-2.5 w-2.5 fill-current" />
              ) : (
                <Play className="h-2 w-2 fill-current ml-0.5" />
              )}
            </button>

            <span className="font-mono text-[9px] text-slate-600 tracking-tight shrink-0">
              {isPlaying ? "0:12 / 0:37" : "0:05 / 0:37"}
            </span>

            {/* Progress bar */}
            <div className="flex-1 h-1 rounded-full bg-slate-200 relative overflow-hidden">
              <motion.div
                className="h-full bg-slate-900 rounded-full"
                animate={{ width: isPlaying ? "35%" : "15%" }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <Volume2 className="h-3 w-3 text-slate-600 shrink-0" />
          </div>
        </div>

        {/* Right Column: Comprehension Questions */}
        <div className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-3 shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
              <h4 className="font-display text-[11px] font-bold text-slate-900">
                Comprehension Questions
              </h4>
              <span className="rounded-full bg-[#E8F8F0] px-1.5 py-0.2 text-[9px] font-semibold text-[#1D4ED8]">
                {answeredCount} of 5 Answered
              </span>
            </div>

            <div className="mt-2 space-y-2">
              {questions.map((q) => {
                const userPick = selectedAnswers[q.id];
                return (
                  <div key={q.id} className="space-y-1">
                    <div className="flex items-start gap-1">
                      <span className="grid h-3.5 w-3.5 place-items-center rounded-xs bg-[#044E3D] text-white text-[9px] font-bold shrink-0 mt-0.5">
                        {q.id}
                      </span>
                      <p className="text-[11px] font-semibold text-slate-900 leading-snug">
                        {q.text}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-1">
                      {q.options.map((opt) => {
                        const isChosen = userPick === opt.key;
                        return (
                          <button
                            key={opt.key}
                            type="button"
                            onClick={() => handleSelect(q.id, opt.key)}
                            className={cn(
                              "flex items-center gap-1 rounded-md border px-1.5 py-1 text-left text-[10px] font-medium transition-all cursor-pointer",
                              isChosen
                                ? "border-[#044E3D] bg-[#E8F8F0]/60 text-[#044E3D] font-semibold"
                                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                            )}
                          >
                            <span
                              className={cn(
                                "grid h-3.5 w-3.5 place-items-center rounded-xs text-[9px] font-bold shrink-0",
                                isChosen
                                  ? "bg-[#044E3D] text-white"
                                  : "bg-slate-100 text-slate-600",
                              )}
                            >
                              {opt.key}
                            </span>
                            <span className="truncate">{opt.text}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-2 pt-1.5 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsSubmitted(true)}
              className="w-full rounded-md bg-[#044E3D] hover:bg-[#033c2e] py-1.5 text-center text-[11px] font-semibold text-white shadow-xs transition-colors cursor-pointer"
            >
              {isSubmitted
                ? "Submitted! Reviewing score..."
                : `Submit (${answeredCount}/5 Answered)`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 04. VOCABULARY TAB MOCKUP (Matches Image 4)
// --------------------------------------------------------------------------
export function EnglishVocabularyMockup() {
  const [activeTab, setActiveTab] = useState<"words" | "quiz">("quiz");
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({
    1: "B",
    2: "C",
  });

  const vocabQuestions = [
    {
      id: 1,
      text: "Which word has a meaning similar to 'difficult'?",
      options: [
        { key: "A", text: "Easy" },
        { key: "B", text: "Hard" },
        { key: "C", text: "Fast" },
        { key: "D", text: "Soft" },
      ],
      correct: "B",
    },
    {
      id: 2,
      text: "The children sang with great ______ after winning the game.",
      options: [
        { key: "A", text: "Sorrow" },
        { key: "B", text: "Anger" },
        { key: "C", text: "Joy" },
        { key: "D", text: "Fear" },
      ],
      correct: "C",
    },
  ];

  const handleSelect = (qId: number, key: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: key }));
  };

  return (
    <div className="w-full text-slate-800 p-3.5 sm:p-4">
      {/* Subheader */}
      <div className="flex items-center justify-between pb-2.5">
        <div>
          <button
            type="button"
            className="text-[10px] font-semibold text-teal-700 hover:text-teal-900 transition-colors cursor-pointer"
          >
            ← Change Setup
          </button>
          <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 leading-tight">
            Vocabulary Practice
          </h3>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="rounded-full bg-[#E8F8F0] px-2 py-0.5 text-[10px] font-semibold text-[#1D4ED8]">
            Beginner
          </span>
          <span className="rounded-full bg-slate-100 border border-slate-200/80 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
            5 Words
          </span>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex items-center gap-1.5 pb-2.5">
        <button
          type="button"
          onClick={() => setActiveTab("words")}
          className={cn(
            "flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-semibold transition-all cursor-pointer",
            activeTab === "words"
              ? "bg-[#044E3D] text-white shadow-xs"
              : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
          )}
        >
          <BookOpen className="h-3 w-3" />
          <span>Daily Words (5)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("quiz")}
          className={cn(
            "flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-semibold transition-all cursor-pointer",
            activeTab === "quiz"
              ? "bg-[#044E3D] text-white shadow-xs"
              : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
          )}
        >
          <GraduationCap className="h-3 w-3" />
          <span>Vocabulary Quiz (5)</span>
        </button>
      </div>

      {/* Quiz Cards */}
      <div className="space-y-2 max-w-lg mx-auto">
        {vocabQuestions.map((q) => {
          const userPick = selectedAnswers[q.id];
          return (
            <div
              key={q.id}
              className="rounded-xl border border-slate-200/90 bg-white p-2.5 sm:p-3 shadow-xs space-y-2"
            >
              <div className="flex items-start gap-1.5">
                <span className="grid h-4 w-4 place-items-center rounded-xs bg-[#044E3D] text-white text-[10px] font-bold shrink-0 mt-0.5">
                  {q.id}
                </span>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-900">{q.text}</p>
              </div>

              {/* 2x2 Grid of Options */}
              <div className="grid grid-cols-2 gap-1.5">
                {q.options.map((opt) => {
                  const isChosen = userPick === opt.key;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => handleSelect(q.id, opt.key)}
                      className={cn(
                        "flex items-center gap-1.5 rounded-md border px-2 py-1 text-left text-[11px] font-medium transition-all cursor-pointer",
                        isChosen
                          ? "border-[#044E3D] bg-[#E8F8F0]/60 text-[#044E3D] font-semibold"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                      )}
                    >
                      <span
                        className={cn(
                          "grid h-4 w-4 place-items-center rounded-xs text-[9px] font-bold shrink-0",
                          isChosen ? "bg-[#044E3D] text-white" : "bg-slate-100 text-slate-600",
                        )}
                      >
                        {opt.key}
                      </span>
                      <span>{opt.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 05. GRAMMAR TAB MOCKUP
// --------------------------------------------------------------------------
export function EnglishGrammarMockup() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({
    1: "C",
    2: "B",
  });

  const grammarQuestions = [
    {
      id: 1,
      text: "Which sentence is grammatically correct?",
      options: [
        { key: "A", text: "She don't like coffee." },
        { key: "B", text: "She doesn't likes coffee." },
        { key: "C", text: "She doesn't like coffee." },
        { key: "D", text: "She not like coffee." },
      ],
      correct: "C",
    },
    {
      id: 2,
      text: "I have lived in this city ______ 2018.",
      options: [
        { key: "A", text: "for" },
        { key: "B", text: "since" },
        { key: "C", text: "during" },
        { key: "D", text: "from" },
      ],
      correct: "B",
    },
  ];

  const handleSelect = (qId: number, key: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: key }));
  };

  return (
    <div className="w-full text-slate-800 p-3.5 sm:p-4">
      {/* Subheader */}
      <div className="flex items-center justify-between pb-2.5">
        <div>
          <button
            type="button"
            className="text-[10px] font-semibold text-teal-700 hover:text-teal-900 transition-colors cursor-pointer"
          >
            ← Change Topic / Level
          </button>
          <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 leading-tight">
            Grammar Practice
          </h3>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="rounded-full bg-[#E8F8F0] px-2 py-0.5 text-[10px] font-semibold text-[#1D4ED8]">
            Beginner
          </span>
          <span className="rounded-full bg-slate-100 border border-slate-200/80 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
            Sentence Structure
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1.5 pb-2.5">
        <button
          type="button"
          className="border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-semibold cursor-pointer"
        >
          <BookOpen className="h-3 w-3" />
          <span>Rule Guide (3)</span>
        </button>

        <button
          type="button"
          className="bg-[#044E3D] text-white flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-semibold shadow-xs cursor-pointer"
        >
          <GraduationCap className="h-3 w-3" />
          <span>Grammar Quiz (5)</span>
        </button>
      </div>

      {/* Question Cards */}
      <div className="space-y-2 max-w-lg mx-auto">
        {grammarQuestions.map((q) => {
          const userPick = selectedAnswers[q.id];
          return (
            <div
              key={q.id}
              className="rounded-xl border border-slate-200/90 bg-white p-2.5 sm:p-3 shadow-xs space-y-2"
            >
              <div className="flex items-start gap-1.5">
                <span className="grid h-4 w-4 place-items-center rounded-xs bg-[#044E3D] text-white text-[10px] font-bold shrink-0 mt-0.5">
                  {q.id}
                </span>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-900">{q.text}</p>
              </div>

              {/* 2x2 Grid of Options */}
              <div className="grid grid-cols-2 gap-1.5">
                {q.options.map((opt) => {
                  const isChosen = userPick === opt.key;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => handleSelect(q.id, opt.key)}
                      className={cn(
                        "flex items-center gap-1.5 rounded-md border px-2 py-1 text-left text-[11px] font-medium transition-all cursor-pointer",
                        isChosen
                          ? "border-[#044E3D] bg-[#E8F8F0]/60 text-[#044E3D] font-semibold"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                      )}
                    >
                      <span
                        className={cn(
                          "grid h-4 w-4 place-items-center rounded-xs text-[9px] font-bold shrink-0",
                          isChosen ? "bg-[#044E3D] text-white" : "bg-slate-100 text-slate-600",
                        )}
                      >
                        {opt.key}
                      </span>
                      <span>{opt.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 06. READ ALOUD TAB MOCKUP (Matches Image 5)
// --------------------------------------------------------------------------
export function EnglishReadAloudMockup() {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="w-full text-slate-800 p-3.5 sm:p-4">
      {/* Subheader */}
      <div className="flex items-center justify-between pb-2.5 max-w-lg mx-auto">
        <div>
          <button
            type="button"
            className="text-[10px] font-semibold text-teal-700 hover:text-teal-900 transition-colors cursor-pointer"
          >
            ← Change Topic / Difficulty
          </button>
          <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 leading-tight">
            Spoken Practice
          </h3>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="rounded-full bg-[#E8F8F0] px-2 py-0.5 text-[10px] font-semibold text-[#1D4ED8]">
            Beginner
          </span>
          <span className="rounded-full bg-slate-100 border border-slate-200/80 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
            My Family & Friends
          </span>
        </div>
      </div>

      {/* Main Centered Passage Card */}
      <div className="mx-auto max-w-lg rounded-xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-xs text-left">
        <h4 className="font-display text-xs sm:text-sm font-bold text-slate-900">
          My Lovely Family
        </h4>

        <p className="mt-1.5 text-[11px] sm:text-xs leading-relaxed text-slate-700">
          My family is small but lovely. I live with my parents and my younger brother. My father is
          a teacher. My mother is a homemaker. We often eat dinner together. My brother and I play
          games. My grandparents visit us sometimes. They tell us interesting stories. My family
          always supports me. We love spending time together. Family is very important to me and
          makes me happy.
        </p>

        {/* Tap to speak microphone button */}
        <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={() => setIsRecording(!isRecording)}
            className={cn(
              "relative grid h-10 w-10 place-items-center rounded-full text-white shadow-md transition-all cursor-pointer active:scale-95",
              isRecording
                ? "bg-red-600 ring-4 ring-red-200 animate-pulse"
                : "bg-[#044E3D] hover:bg-[#033c2e]",
            )}
            aria-label={isRecording ? "Stop speaking" : "Tap to speak"}
          >
            <Mic className="h-4 w-4" />
          </button>
          <span className="mt-1 text-[10px] font-medium text-slate-500">
            {isRecording ? "Listening to your reading..." : "Tap to speak"}
          </span>
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// Unified Communicative English Mockup Window (Side-by-Side Right Column)
// --------------------------------------------------------------------------
const MOCKUP_COMPONENTS = [
  EnglishConversationMockup,
  EnglishWritingMockup,
  EnglishReadingMockup,
  EnglishVocabularyMockup,
  EnglishGrammarMockup,
  EnglishReadAloudMockup,
];

export function CommunicativeEnglishWindow({ selectedIdx = 0 }: { selectedIdx: number }) {
  const ActiveMockup = MOCKUP_COMPONENTS[selectedIdx] || EnglishConversationMockup;

  return (
    <div className="w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white bg-[#F4F7FB] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] shadow-indigo-500/20 ring-1 ring-black/5 flex flex-col justify-between min-h-[460px] relative">
      {/* Top Rovian AI Navigation Bar */}
      <RovianAppHeader />

      {/* Main Container with smooth transitions */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          key={selectedIdx}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
          className="w-full"
        >
          <ActiveMockup />
        </motion.div>
      </div>
    </div>
  );
}
