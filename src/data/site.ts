import type { ElementType } from "react";
import {
  BookA,
  BookOpen,
  BrainCircuit,
  ChartNoAxesCombined,
  CircleHelp,
  GraduationCap,
  Languages,
  MessageSquareText,
  Mic2,
  PenLine,
  Trophy,
  Video,
} from "lucide-react";

export type Feature = { title: string; description: string; icon: ElementType };

export const navItems = ["Platform", "Solutions", "Exams", "How It Works", "Pricing", "Resources"];

export const floatingFeatures = [
  { label: "AI Chat", icon: MessageSquareText },
  { label: "AI Tutor", icon: Mic2 },
  { label: "Practice", icon: Trophy },
  { label: "AI Content", icon: Video },
  { label: "Analytics", icon: ChartNoAxesCombined },
];

export const englishSkills: Feature[] = [
  { title: "Conversation", description: "Build confidence through guided dialogue.", icon: MessageSquareText },
  { title: "Writing", description: "Write clearly with contextual feedback.", icon: PenLine },
  { title: "Reading", description: "Improve comprehension at your pace.", icon: BookOpen },
  { title: "Vocabulary", description: "Learn words in useful contexts.", icon: BookA },
  { title: "Grammar", description: "Understand the patterns behind English.", icon: BrainCircuit },
  { title: "Read Aloud", description: "Practice pronunciation and fluency.", icon: Mic2 },
];

export const exams = {
  NEET: ["Biology chapter practice", "Timed mock tests", "Weak-area revision"],
  JEE: ["Physics problem solving", "Concept-first explanations", "Exam simulations"],
  UPSC: ["Interview simulator", "Current affairs practice", "DAF preparation"],
  TNPSC: ["Tamil Nadu syllabus", "Previous year questions", "Performance reports"],
  BANKING: ["Quantitative aptitude", "Reasoning practice", "Timed sectional tests"],
} as const;

export const faqs = [
  ["What is Rovian?", "Rovian is an AI-powered learning platform connecting tutoring, practice, content creation, communication skills and progress intelligence in one experience."],
  ["Who can use Rovian?", "School students, competitive exam aspirants, UPSC candidates, teachers, tutors and educational institutions can use Rovian."],
  ["Which boards are supported?", "Rovian supports CBSE, Tamil Nadu State Board, ICSE and CAIE learning contexts."],
  ["Which competitive exams are supported?", "The platform includes preparation experiences for NEET, JEE, Banking, TNPSC and UPSC."],
  ["What is Rovian AI Chat?", "It is a curriculum-grounded conversational tutor with subject, chapter, language and context controls, plus text and audio explanations."],
  ["What is the AI Tutor?", "The AI Tutor is a live voice and text learning experience that can teach from the curriculum or a learner’s uploaded notes and textbook PDFs."],
  ["Can I practice descriptive answers?", "Yes. Written Practice supports typed and scanned answers with marks, strengths and specific improvement feedback."],
  ["Can teachers use Rovian?", "Yes. Teacher tools cover student rosters, classroom monitoring, quiz hosting, scoreboards and progress tracking."],
  ["Does Rovian support UPSC preparation?", "Yes. Rovian includes personalized interview simulation spanning DAF, current affairs, situational questions, counter questions and evaluation."],
  ["What features require a subscription?", "Plan availability and subscription details will be announced with pricing. Every plan is currently marked Coming Soon."],
] as const;

export const trustFeatures: Feature[] = [
  { title: "AI-Powered Learning", description: "Conversation, live tutoring and generated study content.", icon: BrainCircuit },
  { title: "Personalized Practice", description: "Objective, written and exam-specific practice modes.", icon: CircleHelp },
  { title: "Performance Analytics", description: "Progress, accuracy, streaks and weak-area visibility.", icon: ChartNoAxesCombined },
  { title: "Teacher Tools", description: "Classroom, roster, quiz and learner monitoring tools.", icon: GraduationCap },
  { title: "Exam Preparation", description: "Practice for NEET, JEE, UPSC, TNPSC and Banking.", icon: Trophy },
  { title: "Multi-Board Learning", description: "CBSE, Tamil Nadu State Board, ICSE and CAIE.", icon: Languages },
];
