"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Header() {
  const [pressed, setPressed] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="sticky top-0 z-50">
      <div
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        className={`mx-auto w-screen ${pressed ? "translate-y-[1px]" : ""}`}
      >
        <div
          className={`flex items-center justify-between bg-[#98d8a7] px-4 py-3 text-[#0f2f22]
                      shadow-[0_6px_0_#5aa96c] transition-transform duration-150 ease-out
                      ${pressed ? "translate-y-[2px] shadow-[inset_0_2px_0_#5aa96c]" : ""}`}
          aria-label="Site Header"
        >
          <Link href="/" className="flex items-center gap-2 select-none">
            <span className="text-2xl">🥑</span>
            <span className="font-extrabold tracking-tight">Avocado English</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: "/curriculum", label: "Curriculum" },
              { href: "/pricing", label: "Pricing" },
              { href: "/trial", label: "Trial" },
              { href: "/faq", label: "FAQ" },
              { href: "/profile", label: "Profile" },
              { href: "/book", label: "Book" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md bg-[#bfe9c9] text-[#0f2f22] text-sm
                           border-2 border-[#86c79a] shadow-[0_2px_0_#5aa96c]
                           hover:brightness-105 active:translate-y-[1px] active:shadow-[inset_0_2px_0_#5aa96c] transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/book"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-2 rounded-md bg-[#c9efcf] text-[#0f2f22] text-sm
                         border-2 border-[#86c79a] shadow-[0_2px_0_#5aa96c]
                         hover:brightness-105 active:translate-y-[1px] active:shadow-[inset_0_2px_0_#5aa96c] transition"
            >
              Book Trial
            </Link>
            {mounted && (
              <button
                aria-label="Toggle theme"
                className="px-3 py-2 rounded-md text-sm border"
                style={{
                  background: "var(--card)",
                  color: "var(--foreground)",
                  borderColor: "var(--border)",
                }}
                onClick={() => {
                  const resolved = theme === "system" ? systemTheme : theme;
                  setTheme(resolved === "dark" ? "light" : "dark");
                }}
              >
                {((theme === "system" ? systemTheme : theme) === "dark") ? "Light" : "Dark"}
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="h-2 bg-gradient-to-b from-[#98d8a7] to-transparent" />
    </div>
  );
}
