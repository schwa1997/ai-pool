"use client";
import Link from "next/link";

export default function TrialPage() {
  return (
    <div className="min-h-screen bg-[#e9f7ec] text-[#103b2b]">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="rounded-2xl bg-[#98d8a7] text-[#0f2f22] px-6 py-6 shadow-[0_6px_0_#5aa96c] mb-6">
          <h1 className="text-2xl font-extrabold tracking-tight">Trial Lesson · 先体验再决定</h1>
          <p className="text-sm opacity-85">20-30 分钟 · 评估水平 · 体验氛围 · 个性化建议</p>
        </section>

        <section className="rounded-2xl bg-white/80 backdrop-blur p-6 border border-[#bde6c8]">
          <h2 className="font-bold mb-3">你会得到什么</h2>
          <ul className="list-disc pl-5 space-y-2 text-[#225e45]">
            <li>发音与表达的即时反馈</li>
            <li>学习路径建议（职场/面试/写作）</li>
            <li>是否适合项目制课程的评估</li>
          </ul>
          <div className="mt-5">
            <Link href="/book" className="inline-block rounded-xl bg-[#c9efcf] border-4 border-[#86c79a] px-5 py-3 shadow-[0_6px_0_#5aa96c] active:translate-y-[2px] active:shadow-[inset_0_2px_0_#5aa96c]">
              预约体验课
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
