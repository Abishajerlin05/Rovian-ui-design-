import React from "react";
import {
  GraduationCap,
  BookOpen,
  Target,
  Languages,
  TrendingUp,
  WandSparkles,
  Zap,
} from "lucide-react";

import "./OnePlatform.css";

const features = [
  {
    title: "Prepare",
    subtitle: "Exams • UPSC",
    icon: GraduationCap,
    className: "prepare",
    planet: "mercury",
  },
  {
    title: "Practice",
    subtitle: "MCQs • Written",
    icon: Target,
    className: "practice",
    planet: "earth",
  },
  {
    title: "Communicate",
    subtitle: "English • Fluency",
    icon: Languages,
    className: "communicate",
    planet: "mars",
  },
  {
    title: "Improve",
    subtitle: "Analytics • Revision",
    icon: TrendingUp,
    className: "improve",
    planet: "jupiter",
  },
  {
    title: "Create",
    subtitle: "Audio • Video",
    icon: WandSparkles,
    className: "create",
    planet: "saturn",
  },
  {
    title: "Learn",
    subtitle: "AI Chat • Tutor",
    icon: BookOpen,
    className: "learn",
    planet: "neptune",
  },
];

const planetsData = [
  { name: "venus", radius: 140, speed: 60, size: 18, color: "#e3bb76", startDelay: -15 },
  { name: "uranus", radius: 180, speed: 60, size: 26, color: "#a0d1d6", startDelay: -45 },
  { name: "mercury", radius: 230, speed: 60, size: 16, color: "#b5a7a7", startDelay: 0 },
  { name: "earth", radius: 290, speed: 60, size: 22, color: "#4b95f9", startDelay: -30 },
  { name: "mars", radius: 350, speed: 60, size: 18, color: "#e27b58", startDelay: -10 },
  { name: "jupiter", radius: 420, speed: 60, size: 45, color: "#c3a171", startDelay: -40 },
  {
    name: "saturn",
    radius: 490,
    speed: 60,
    size: 38,
    color: "#e0cd9e",
    hasRings: true,
    startDelay: -20,
  },
  { name: "neptune", radius: 560, speed: 60, size: 25, color: "#3f54ba", startDelay: -50 },
  { name: "pluto", radius: 620, speed: 60, size: 8, color: "#dddddd", startDelay: -5 },
];

export default function OnePlatform() {
  return (
    <section className="one-platform" id="platform">
      <div className="stars-bg"></div>
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 z-10 relative">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-[10px] sm:text-xs font-bold tracking-widest shadow-[0_0_15px_rgba(236,72,153,0.15)] uppercase">
            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            Rovian Ecosystem
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
            The whole
            <br />
            journey,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-400">
              connected.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg sm:text-xl leading-relaxed text-slate-600 font-medium">
            Rovian is not one more chatbot. It is the gravitational center that connects how you
            learn, practice, communicate, and improve.
          </p>
        </div>

        {/* RIGHT ECOSYSTEM */}
        <div className="ecosystem-container">
          <div className="ecosystem">
            {/* Background glow */}
            <div className="ecosystem-glow"></div>

            {/* CENTER ROVIAN (THE SUN) */}
            <div className="rovian-sun">
              <div className="sun-core">
                <Zap size={32} className="text-pink-100" />
                <h2>ROVIAN</h2>
                <span>AI ECOSYSTEM</span>
              </div>
              <div className="sun-halo"></div>
            </div>

            {/* PLANETS & ORBITS */}
            {planetsData.map((planet) => {
              const feature = features.find((f) => f.planet === planet.name);

              return (
                <div
                  key={planet.name}
                  className="planet-orbit-ring"
                  style={{
                    width: planet.radius * 2,
                    height: planet.radius * 2,
                    animationDuration: `${planet.speed}s`,
                    animationDelay: `${planet.startDelay}s`,
                  }}
                >
                  <div
                    className="planet-body"
                    style={{
                      width: planet.size,
                      height: planet.size,
                      backgroundColor: planet.color,
                      top: -planet.size / 2,
                      left: "50%",
                      transform: "translateX(-50%)",
                      boxShadow: `0 0 15px ${planet.color}80, inset -5px -5px 15px rgba(0,0,0,0.5)`,
                    }}
                  >
                    {planet.hasRings && <div className="saturn-rings"></div>}

                    {/* IF PLANET HAS A FEATURE, RENDER THE FEATURE CARD */}
                    {feature && (
                      <div
                        className={`feature-card feature-${feature.className}`}
                        style={{
                          animationDuration: `${planet.speed}s`,
                          animationDelay: `${planet.startDelay}s`,
                        }}
                      >
                        <div className="feature-icon-box">
                          <feature.icon size={24} strokeWidth={2.5} />
                        </div>
                        <div className="feature-text">
                          <h3>{feature.title}</h3>
                          <p>{feature.subtitle}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
