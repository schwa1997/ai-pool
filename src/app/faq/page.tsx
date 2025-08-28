"use client";

export default function FAQPage() {
  const faqs = [
    { q: "适合零基础吗？", a: "可行。会先做发音与基础表达打底，再进入项目任务。" },
    { q: "多久能见到效果？", a: "通常 4-6 周内在表达与自信上明显提升。" },
    { q: "上课形式？", a: "线上 1:1 或小班，强调输出与实时反馈。" },
    { q: "是否提供求职辅导？", a: "提供英文简历、面试演练、远程沟通写作训练。" },
  ];
  return (
    <div className="min-h-screen bg-[#e9f7ec] text-[#103b2b]">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="rounded-2xl bg-[#98d8a7] text-[#0f2f22] px-6 py-6 shadow-[0_6px_0_#5aa96c] mb-6">
          <h1 className="text-2xl font-extrabold tracking-tight">FAQ · 常见问题</h1>
          <p className="text-sm opacity-85">如果还没覆盖你的问题，随时在体验课咨询。</p>
        </section>

        <div className="space-y-3">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl bg-white/80 backdrop-blur p-4 border border-[#bde6c8]">
              <div className="font-bold mb-1">{f.q}</div>
              <div className="text-[#225e45]">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
