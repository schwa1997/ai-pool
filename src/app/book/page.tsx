"use client";

export default function BookPage() {
  return (
    <div className="min-h-screen bg-[#e9f7ec] text-[#103b2b]">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="rounded-2xl bg-[#98d8a7] text-[#0f2f22] px-6 py-6 shadow-[0_6px_0_#5aa96c] mb-6">
          <h1 className="text-2xl font-extrabold tracking-tight">预约与排期</h1>
          <p className="text-sm opacity-85">选择你的时段，或添加微信/邮箱与我确认时间。</p>
        </section>

        <section className="rounded-2xl bg-white/80 backdrop-blur p-6 border border-[#bde6c8]">
          <p className="text-[#225e45] mb-3">这里可以接入第三方日程（如 Calendly）或简单表单。</p>
          <a
            href="#"
            className="inline-block rounded-xl bg-[#c9efcf] border-4 border-[#86c79a] px-5 py-3 shadow-[0_6px_0_#5aa96c] active:translate-y-[2px] active:shadow-[inset_0_2px_0_#5aa96c]"
          >
            暂用占位按钮
          </a>
        </section>
      </div>
    </div>
  );
}
