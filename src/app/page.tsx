"use client"
import type { NextPage } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const pageBg = {
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)
    `,
    backgroundSize: "16px 16px, 16px 16px",
  } as const;

  const sections = [
    { href: "/curriculum", title: "Curriculum", emoji: "📘", desc: "Project-based roadmap" },
    { href: "/enroll", title: "Enroll", emoji: "🧪", desc: "体验课与报名" },
    { href: "/pricing", title: "Pricing", emoji: "💳", desc: "清晰透明价格" },
    { href: "/faq", title: "FAQ", emoji: "❓", desc: "常见问题" },
    { href: "/profile", title: "About Me", emoji: "🧑‍🏫", desc: "ENFP · 教学理念" },
    { href: "/enroll", title: "Schedule", emoji: "📅", desc: "预约与排期" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)", ...pageBg }}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <main>
          <section className="mb-8">
            <div className="mb-6 rounded-2xl bg-[#98d8a7] text-[#0f2f22] px-6 py-5 shadow-[0_6px_0_#5aa96c]">
              <div className="flex items-center gap-3"><span className="text-3xl">🥑</span>
                <div>
                  <h1 className="text-2xl font-extrabold tracking-tight">Avocado English Classroom</h1>
                  <p className="text-sm opacity-80">面向想做远程工作的成年人 · 有趣且有效</p>
                </div>
              </div>
            </div>
            <h2 className="sr-only">Modules</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sections.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group relative overflow-hidden rounded-xl bg-[#c9efcf] p-4 text-left transition-all duration-150
                             border-4 border-[#86c79a] shadow-[0_6px_0_#5aa96c] active:translate-y-[2px] active:shadow-[inset_0_2px_0_#5aa96c]"
                >
                  <div className="absolute inset-0 pointer-events-none opacity-40"
                       style={{
                         backgroundImage:
                           "linear-gradient(45deg, rgba(255,255,255,0.4) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.4) 75%, transparent 75%, transparent)",
                         backgroundSize: "10px 10px"
                       }}
                  />
                  <div className="relative z-10 flex flex-col gap-1">
                    <span className="text-2xl">{s.emoji}</span>
                    <span className="font-bold">{s.title}</span>
                    <span className="text-sm opacity-70">{s.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="card p-5">
            <h3 className="font-bold mb-2">Welcome</h3>
            <p className="text-sm opacity-90">
              项目驱动 · 输出为先 · 真实业务场景。专为希望通过英语获得更好远程工作机会的成年人设计。
            </p>
          </section>
        </main>

        <footer className="mt-10 text-center text-sm text-[#225e45]">
          🥑 Avocado English © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
};

export default Home;