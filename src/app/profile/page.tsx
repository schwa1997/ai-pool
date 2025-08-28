"use client";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#e9f7ec] text-[#103b2b]">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="rounded-2xl bg-[#98d8a7] text-[#0f2f22] px-6 py-6 shadow-[0_6px_0_#5aa96c] mb-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🥑</span>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight">Hi, I am the Avocado English Teacher</h1>
              <p className="text-sm opacity-85">ENFP · 热爱英语 · 热爱英语教学 · 反对枯燥的传统教育 · 喜欢有趣的学习</p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-white/80 backdrop-blur p-6 border border-[#bde6c8] mb-6">
          <h2 className="font-bold mb-2 text-[#0f2f22]">About Me</h2>
          <p className="text-[#225e45] leading-relaxed">
            我是 ENFP 型人格，喜欢和学生互动、探索新颖的学习方式。我相信语言是沟通和表达的艺术，应该在好奇、鼓励和创造力中成长。
            在课堂上，我更注重真实场景、表达自信和快乐体验，而不是死记硬背和枯燥练习。
          </p>
        </section>

        <section className="rounded-2xl bg-white/80 backdrop-blur p-6 border border-[#bde6c8]">
          <h2 className="font-bold mb-3 text-[#0f2f22]">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/" className="block rounded-xl bg-[#c9efcf] border-4 border-[#86c79a] p-4 shadow-[0_6px_0_#5aa96c] active:translate-y-[2px] active:shadow-[inset_0_2px_0_#5aa96c]">
              <div className="text-xl">🏠 Home</div>
              <div className="text-sm text-[#225e45]">返回教室首页</div>
            </Link>
            <Link href="/English/sessions/1" className="block rounded-xl bg-[#c9efcf] border-4 border-[#86c79a] p-4 shadow-[0_6px_0_#5aa96c] active:translate-y-[2px] active:shadow-[inset_0_2px_0_#5aa96c]">
              <div className="text-xl">🎥 Sessions</div>
              <div className="text-sm text-[#225e45]">课堂回放</div>
            </Link>
            <Link href="/English/practice/1" className="block rounded-xl bg-[#c9efcf] border-4 border-[#86c79a] p-4 shadow-[0_6px_0_#5aa96c] active:translate-y-[2px] active:shadow-[inset_0_2px_0_#5aa96c]">
              <div className="text-xl">🎯 Practice</div>
              <div className="text-sm text-[#225e45]">练习专区</div>
            </Link>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="block rounded-xl bg-[#c9efcf] border-4 border-[#86c79a] p-4 shadow-[0_6px_0_#5aa96c] active:translate-y-[2px] active:shadow-[inset_0_2px_0_#5aa96c]">
              <div className="text-xl">🔗 YouTube</div>
              <div className="text-sm text-[#225e45]">我喜欢的英语频道</div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
