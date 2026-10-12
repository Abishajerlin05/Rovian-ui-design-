import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  Menu,
  X,
  LayoutDashboard,
  Sparkles,
  BookOpen,
  CreditCard,
  Library,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/common/primitives";

const targets: Record<string, string> = {
  Platform: "platform",
  Solutions: "solutions",
  Exams: "exams",
  "How It Works": "how-it-works",
  Pricing: "pricing",
  Resources: "resources",
};

const navIcons: Record<string, React.ReactNode> = {
  Platform: <LayoutDashboard className="h-4 w-4" />,
  Solutions: <Sparkles className="h-4 w-4" />,
  Exams: <GraduationCap className="h-4 w-4" />,
  "How It Works": <HelpCircle className="h-4 w-4" />,
  Pricing: <CreditCard className="h-4 w-4" />,
  Resources: <Library className="h-4 w-4" />,
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = useNavigate();
  const go = (id: string, name: string = "") => {
    if (name) setActiveItem(name);
    setOpen(false);

    if (name === "Pricing") {
      navigate({ to: "/pricing" });
      return;
    }

    // If not pricing, try to scroll or go home first
    if (window.location.pathname !== "/") {
      navigate({ to: "/" }).then(() => {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || open
            ? "border-b border-border/80 bg-background/95 py-3 shadow-sm backdrop-blur-xl"
            : "bg-transparent py-4 sm:py-6",
        )}
      >
        <Container className="flex items-center justify-between relative">
          <div className="flex-1 flex justify-start">
            <button
              onClick={() => go("top", "")}
              className="flex items-center gap-2 cursor-pointer"
              aria-label="Rovian home"
            >
              <div className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-lg bg-blue-600 text-white shadow-sm">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-blue-950">
                ROVIAN
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1.5 bg-white/70 backdrop-blur-lg border border-blue-200 p-1.5 rounded-full shadow-[0_4px_20px_rgba(59,130,246,0.15)]">
            {navItems.map((x) => (
              <button
                key={x}
                onClick={() => go(targets[x] ?? "top", x)}
                className={cn(
                  "text-sm font-semibold transition-all cursor-pointer px-4 py-2 rounded-full border",
                  activeItem === x
                    ? "bg-white text-blue-700 shadow-[0_2px_10px_rgba(59,130,246,0.1)] border-blue-300"
                    : "text-slate-600 border-transparent hover:text-blue-900 hover:bg-blue-50/50 hover:border-blue-200 hover:shadow-sm",
                )}
              >
                {x}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-3">
            <Button
              asChild
              variant="ghost"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              <a href="https://rovianai.com/" target="_blank" rel="noopener noreferrer">
                Log in
              </a>
            </Button>
            <Button
              asChild
              className="text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm rounded-full px-5"
            >
              <a href="https://rovianai.com/" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            size="icon"
            variant="ghost"
            className="lg:hidden hover:bg-blue-50 hover:text-blue-600"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </Container>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl"
            >
              <Container className="grid gap-2 py-4">
                {navItems.map((x) => (
                  <Button
                    key={x}
                    variant="ghost"
                    className="justify-start text-sm hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => go(targets[x] ?? "top", x)}
                  >
                    {x}
                  </Button>
                ))}
                <div className="mt-3 grid grid-cols-2 gap-2 border-t border-border pt-3">
                  <Button
                    asChild
                    variant="outline"
                    className="hover:bg-blue-50 hover:text-blue-700 text-blue-600 border-blue-200"
                  >
                    <a href="https://rovianai.com/" target="_blank" rel="noopener noreferrer">
                      Log in
                    </a>
                  </Button>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                    <a href="https://rovianai.com/" target="_blank" rel="noopener noreferrer">
                      Get Started
                    </a>
                  </Button>
                </div>
              </Container>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
