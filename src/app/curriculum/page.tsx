"use client";

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-[#e9f7ec] text-[#103b2b]">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <section className="rounded-2xl bg-[#98d8a7] text-[#0f2f22] px-6 py-6 shadow-[0_6px_0_#5aa96c] mb-6">
          <h1 className="text-2xl font-extrabold tracking-tight">Curriculum · 面向远程工作的成年人</h1>
          <p className="text-sm opacity-85">项目驱动 · 输出为先 · 职场真实沟通 · ENFP 有趣氛围</p>
        </section>

        <section className="rounded-2xl bg-white/80 backdrop-blur p-6 border border-[#bde6c8] mb-6">
          <h2 className="font-bold mb-2">阶段与目标</h2>
          <ul className="list-disc pl-5 space-y-2 text-[#225e45]">
            <li>Foundation: 发音、核心语法、1000 高频表达</li>
            <li>Project I: 英文简历 + LinkedIn 优化 + 自我介绍视频</li>
            <li>Project II: 远程面试（行为/情景）+ 在线协作沟通</li>
            <li>Project III: 工作英语（写作、同步/异步会议、邮件）</li>
          </ul>
        </section>

        <section className="rounded-2xl bg-white/80 backdrop-blur p-6 border border-[#bde6c8]">
          <h2 className="font-bold mb-2">课堂体验</h2>
          <p className="text-[#225e45]">真实任务、角色扮演、即时反馈、轻松不尴尬。每节课可见进步。</p>
        </section>
      </div>
    </div>
  );
}
