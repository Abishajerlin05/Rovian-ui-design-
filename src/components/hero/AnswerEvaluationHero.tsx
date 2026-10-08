import { motion } from "framer-motion";
import { Sparkles, FileText, LayoutList, PenTool, Lightbulb, Medal, UploadCloud, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

export function AnswerEvaluationHero() {
  return (
    <div className="w-full bg-white/95 backdrop-blur-3xl rounded-[2rem] shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-slate-100 p-6 md:p-8 relative overflow-hidden mt-20 text-left z-20">
      
      {/* Decorative BG elements inside the card */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column: AI Evaluation Title */}
        <div className="w-full lg:w-1/4 flex flex-col justify-center">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-600/20">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700 mb-4 leading-tight">
            AI-Powered<br />Answer Evaluation
          </h3>
          <p className="text-slate-500 text-sm font-medium leading-relaxed mb-12">
            Get feedback that helps you understand why your answer needs improvement.
          </p>
          
          <div className="relative">
            {/* Hand-drawn arrow SVG representation */}
            <svg className="absolute -top-8 left-4 w-12 h-12 text-blue-400 rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M 20 80 Q 40 20 80 20 M 60 10 L 80 20 L 70 40" />
            </svg>
            <p className="text-blue-600 font-custom text-sm font-bold rotate-[-10deg] ml-12">
              Better Answers<br/>Higher Scores
            </p>
          </div>
        </div>

        {/* Middle Column: 5 Features Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
          
          {/* Content Accuracy */}
          <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100/50">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-3">
              <FileText className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-800 text-sm mb-1">Content Accuracy</h4>
            <p className="text-xs text-slate-500">Check whether your key points are correct.</p>
          </div>

          {/* Answer Structure */}
          <div className="bg-purple-50/50 rounded-2xl p-5 border border-purple-100/50">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-3">
              <LayoutList className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-800 text-sm mb-1">Answer Structure</h4>
            <p className="text-xs text-slate-500">Improve introduction, explanation and conclusion.</p>
          </div>

          {/* Mark-Based Feedback */}
          <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100/50">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
              <Medal className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-800 text-sm mb-1">Mark-Based Feedback</h4>
            <p className="text-xs text-slate-500">See how well your answer matches the expected marks.</p>
          </div>

          {/* Writing Quality */}
          <div className="bg-pink-50/50 rounded-2xl p-5 border border-pink-100/50">
            <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 mb-3">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-800 text-sm mb-1">Writing Quality</h4>
            <p className="text-xs text-slate-500">Improve clarity, grammar and presentation.</p>
          </div>

          {/* Personalized Suggestions */}
          <div className="bg-amber-50/50 rounded-2xl p-5 border border-amber-100/50">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-3">
              <Lightbulb className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-800 text-sm mb-1">Personalized Suggestions</h4>
            <p className="text-xs text-slate-500">Know exactly what to improve next time.</p>
          </div>

        </div>

        {/* Right Column: Scorecard */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm h-full flex flex-col">
            <h4 className="text-slate-800 font-bold text-sm mb-4">Your Answer Score</h4>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E2E8F0" strokeWidth="3" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10B981" strokeWidth="3" strokeDasharray="85, 100" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-lg font-black text-slate-900 leading-none">8.5<span className="text-[10px] text-slate-500">/10</span></span>
                </div>
              </div>
              <div>
                <span className="text-emerald-500 font-bold text-xs bg-emerald-50 px-2 py-1 rounded-full">Excellent<br/>understanding</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {[
                { label: 'Content', score: '9/10', color: 'bg-emerald-500' },
                { label: 'Structure', score: '8/10', color: 'bg-purple-500' },
                { label: 'Clarity', score: '9/10', color: 'bg-blue-500' },
                { label: 'Presentation', score: '8/10', color: 'bg-amber-500' },
              ].map(stat => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 w-16">{stat.label}</span>
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${stat.color}`} style={{ width: `${(parseInt(stat.score)/10)*100}%` }} />
                  </div>
                  <span className="text-xs font-bold text-slate-700 w-8 text-right">{stat.score}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto bg-amber-50 rounded-xl p-3 border border-amber-100/50 flex gap-2">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-0.5">AI Tip:</span>
                <p className="text-[10px] text-amber-700 leading-tight">Add one real-world example to make your answer stronger.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Strip: Upload */}
      <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-indigo-100/50">
        <div className="flex items-center gap-5">
          <div className="w-12 h-14 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center relative rotate-[-5deg]">
            <div className="w-8 h-1 bg-slate-100 absolute top-2 rounded-full" />
            <div className="w-6 h-1 bg-slate-100 absolute top-4 rounded-full" />
            <Camera className="w-5 h-5 text-indigo-500 absolute bottom-3" />
          </div>
          <div>
            <h4 className="text-indigo-900 font-bold text-lg mb-1">Write. Snap. Improve.</h4>
            <p className="text-slate-600 text-xs md:text-sm max-w-xl leading-relaxed">
              Don't worry about typing your answers. Simply take a photo of your handwritten paper and upload it. ROVIAN AI reads your response, evaluates it, and gives you detailed feedback.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end shrink-0">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 shadow-lg shadow-indigo-600/20 transition-all cursor-pointer">
            <UploadCloud className="w-4 h-4" />
            Upload Handwritten Answer &rarr;
          </button>
          <span className="text-[10px] text-slate-400 mt-2">Supports: JPG, PNG, PDF (Max 5MB)</span>
        </div>
      </div>
      
    </div>
  );
}
