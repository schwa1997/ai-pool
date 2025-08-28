"use client";
import Link from "next/link";

export default function PricingPage() {
  const tiers = [
    { name: "Starter", price: "¥199/lesson", features: ["1:1 60 分钟", "课后作业", "发音与表达反馈"] },
    { name: "Pro", price: "¥169/lesson", features: ["1:1 60 分钟", "每周项目任务", "面试与写作强化"] },
    { name: "Team-up", price: "¥99/lesson", features: ["2-3 人小班", "协作演练", "同伴反馈"] },
  ];
  return (
    <div className="min-h-screen bg-[#e9f7ec] text-[#103b2b]">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <section className="rounded-2xl bg-[#98d8a7] text-[#0f2f22] px-6 py-6 shadow-[0_6px_0_#5aa96c] mb-6">
          <h1 className="text-2xl font-extrabold tracking-tight">Pricing · 清晰透明</h1>
          <p className="text-sm opacity-85">先体验，满意再报名。支持按次、包课与小班。</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white/80 backdrop-blur p-6 border-4 border-[#86c79a] shadow-[0_6px_0_#5aa96c]">
              <div className="text-xl font-bold mb-1">{t.name}</div>
              <div className="text-[#0f2f22] font-extrabold mb-3">{t.price}</div>
              <ul className="text-[#225e45] space-y-1 mb-4 list-disc pl-5">
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link href="/trial" className="inline-block rounded-lg bg-[#c9efcf] px-4 py-2 border-2 border-[#86c79a] shadow-[0_2px_0_#5aa96c] active:translate-y-[1px] active:shadow-[inset_0_2px_0_#5aa96c]">
                先试一节
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
