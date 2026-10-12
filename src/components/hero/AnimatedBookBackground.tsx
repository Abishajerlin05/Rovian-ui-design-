import React from "react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

export const AnimatedBookBackground = React.memo(function AnimatedBookBackground({
  theme = "dark",
}: {
  theme?: "light" | "dark";
}) {
  const isLight = theme === "light";

  const particles = useMemo(
    () =>
      [...Array(20)].map((_, i) => {
        const rx = (Math.random() - 0.5) * 300;
        const ry = -Math.random() * 300 - 50;
        const rScale = Math.random() * 1.5 + 0.5;
        const rDur = Math.random() * 4 + 4;
        const rDel = Math.random() * 4;
        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(37,99,235,1)]"
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={{
              x: rx,
              y: ry,
              opacity: [0, 0.8, 0],
              scale: [0, rScale, 0],
            }}
            transition={{
              duration: rDur,
              repeat: Infinity,
              delay: rDel,
              ease: "easeOut",
            }}
          />
        );
      }),
    [],
  );

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Floating Wrapper */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}

        className={cn(
          "relative w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] -mt-20",
          isLight ? "opacity-30" : "opacity-40 mix-blend-screen",
        )}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-full h-full relative"
        >
          {/* Core Glow behind the book */}
          <div
            className={cn(
              "absolute inset-0 rounded-full blur-[100px]",
              isLight ? "bg-blue-300/30" : "bg-primary/20",
            )}
          />

          {/* Abstract Book SVG Wireframe */}
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "w-full h-full stroke-primary",
              !isLight && "drop-shadow-[0_0_12px_rgba(37,99,235,1)]",
            )}
          >
            {/* Left Cover */}
            <motion.path
              d="M 50 80 L 15 70 L 15 30 L 50 40 Z"
              strokeWidth="1.5"
              animate={{
                d: [
                  "M 50 80 L 15 70 L 15 30 L 50 40 Z",
                  "M 50 82 L 20 73 L 20 33 L 50 42 Z",
                  "M 50 80 L 15 70 L 15 30 L 50 40 Z",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Right Cover */}
            <motion.path
              d="M 50 80 L 85 70 L 85 30 L 50 40 Z"
              strokeWidth="1.5"
              animate={{
                d: [
                  "M 50 80 L 85 70 L 85 30 L 50 40 Z",
                  "M 50 82 L 80 73 L 80 33 L 50 42 Z",
                  "M 50 80 L 85 70 L 85 30 L 50 40 Z",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Spine */}
            <line x1="50" y1="40" x2="50" y2="80" strokeWidth="2" strokeLinecap="round" />

            {/* Floating Pages (Levitating out of the book) */}
            <motion.path
              d="M 50 40 L 15 30 L 50 20 L 85 30 Z"
              strokeWidth="1"
              className="stroke-primary/70"
              animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              fill="rgba(37,99,235,0.05)"
            />
            <motion.path
              d="M 50 40 L 20 31 L 50 22 L 80 31 Z"
              strokeWidth="0.75"
              className="stroke-primary/50"
              animate={{ y: [0, -25, 0], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              fill="rgba(37,99,235,0.05)"
            />
            <motion.path
              d="M 50 40 L 25 32 L 50 24 L 75 32 Z"
              strokeWidth="0.5"
              className="stroke-primary/30"
              animate={{ y: [0, -45, 0], opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{ transformOrigin: "50px 30px" }}
            />
          </svg>

          {/* Floating Magical Particles coming from the book */}
          {particles}
        </motion.div>
      </motion.div>
    </div>
  );
});
