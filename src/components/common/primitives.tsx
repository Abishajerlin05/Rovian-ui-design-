import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12", className)}>{children}</div>;
}

export function Badge({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] shadow-xs backdrop-blur-md transition-all",
        dark
          ? "border-inverse-border bg-inverse-muted/80 text-slate-200"
          : "border-primary/20 bg-primary/8 text-primary shadow-primary/5"
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dark ? "bg-tutor-accent animate-pulse" : "bg-primary animate-pulse")} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  center = false,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      <Badge dark={dark}>{eyebrow}</Badge>
      <h2
        className={cn(
          "mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.12]",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-slate-300" : "text-muted-foreground"
          )}
        >
          {copy}
        </p>
      )}
    </div>
  );
}

export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function ProductWindow({
  title,
  children,
  dark = false,
  className,
}: {
  title: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border shadow-product transition-all duration-300",
        dark
          ? "border-inverse-border bg-inverse/95 text-white backdrop-blur-xl"
          : "border-border/80 bg-card/95 text-card-foreground backdrop-blur-xl",
        className
      )}
    >
      <div
        className={cn(
          "flex h-12 items-center justify-between border-b px-4",
          dark ? "border-inverse-border bg-inverse-muted/60" : "border-border/70 bg-muted/40"
        )}
      >
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-danger/80" />
          <span className="h-3 w-3 rounded-full bg-warning/80" />
          <span className="h-3 w-3 rounded-full bg-success/80" />
          <span
            className={cn(
              "ml-2 font-display text-xs font-semibold tracking-wide",
              dark ? "text-slate-300" : "text-muted-foreground"
            )}
          >
            {title}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className={cn("h-1.5 w-1.5 rounded-full", dark ? "bg-inverse-border" : "bg-border")} />
          <span className={cn("h-1.5 w-1.5 rounded-full", dark ? "bg-inverse-border" : "bg-border")} />
        </div>
      </div>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  style,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-20 py-20 sm:py-28 lg:py-32", className)} style={style}>
      {children}
    </section>
  );
}
