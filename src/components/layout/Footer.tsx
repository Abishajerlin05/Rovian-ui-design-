import { GraduationCap, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Container } from "@/components/common/primitives";

const groups = {
  Platform: ["AI Chat", "Live AI Tutor", "Content Studio", "Objective Practice", "Written Grading"],
  Solutions: ["For School Students", "Competitive Aspirants", "For Teachers", "For Institutions"],
  Exams: ["NEET Preparation", "JEE Physics & Math", "UPSC Interview", "TNPSC & Banking"],
  Resources: ["How It Works", "Pricing Plans", "Curriculum Boards", "FAQ Guide"],
  Company: ["About Us", "Contact & Support", "Privacy Policy", "Terms of Service"],
};

export function Footer() {
  return (
    <footer className="relative border-t border-slate-800/60 bg-[#05070e] py-16 sm:py-20 text-slate-300">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e50a_1px,transparent_1px),linear-gradient(to_bottom,#4f46e50a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2.8fr]">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-tutor-accent font-bold text-[#05070e] shadow-[0_4px_15px_rgba(45,212,191,0.4)]">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                ROVIAN
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400 font-medium">
              One connected AI-powered learning ecosystem for understanding doubts, practicing
              exams, mastering English fluency, and continuous progress intelligence.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-slate-800 bg-[#0B1021]/80 text-slate-400 shadow-sm hover:border-tutor-accent hover:text-tutor-accent hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {Object.entries(groups).map(([title, items]) => (
              <div key={title}>
                <h3 className="font-display text-xs font-extrabold uppercase tracking-widest text-white">
                  {title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {items.map((x) => (
                    <li key={x}>
                      <a
                        href="#"
                        className="text-sm font-medium text-slate-400 hover:text-tutor-accent transition-colors"
                      >
                        {x}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-slate-800/80 pt-8 text-sm font-medium text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ROVIAN Technologies Inc. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-tutor-accent animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
            <span className="text-slate-400 font-semibold">All Learning Engines Operational</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
