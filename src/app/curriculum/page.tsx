"use client";
import { useMemo } from "react";

export default function CurriculumPage() {
  const cohorts = useMemo(() => {
    // Cohort 1: 4 weeks starting first week of Aug 2025
    const start1 = new Date("2025-08-04"); // Monday of first week
    const end1 = new Date("2025-08-31");
    // Cohort 2: September 2025 (planned, open for signup)
    const start2 = new Date("2025-09-01");
    const end2 = new Date("2025-09-28");
    return [
      { title: "第一期 · 2025年8月", start: start1, end: end1, status: "进行中/即将开始" },
      { title: "第二期 · 2025年9月", start: start2, end: end2, status: "筹备中 · 开放报名" },
    ];
  }, []);

  const renderCalendar = (monthIndex: number, year: number) => {
    const first = new Date(year, monthIndex, 1);
    const last = new Date(year, monthIndex + 1, 0);
    const days = [] as { date: Date; inCohort: boolean; planned: boolean }[];
    for (let d = 1; d <= last.getDate(); d++) {
      const cur = new Date(year, monthIndex, d);
      const inAug = cur >= cohorts[0].start && cur <= cohorts[0].end;
      const inSep = cur >= cohorts[1].start && cur <= cohorts[1].end;
      days.push({ date: cur, inCohort: inAug, planned: inSep });
    }
    const pad = (first.getDay() + 6) % 7; // Monday first
    const items = Array(pad).fill(null).map((_, i) => (
      <div key={`pad-${i}`} className="h-8" />
    ));
    items.push(
      ...days.map((d) => (
        <div
          key={d.date.toISOString()}
          className="h-8 rounded text-xs flex items-center justify-center border"
          style={{
            borderColor: "var(--border)",
            background: d.inCohort ? "color-mix(in oklch, var(--accent) 20%, transparent)" : d.planned ? "color-mix(in oklch, var(--accent) 10%, transparent)" : "transparent",
            color: "var(--foreground)",
          }}
          title={d.inCohort ? "第一期进行中" : d.planned ? "第二期筹备，开放报名" : ""}
        >
          {d.date.getDate()}
        </div>
      ))
    );
    return (
      <div className="grid grid-cols-7 gap-1">
        {["Mo","Tu","We","Th","Fr","Sa","Su"].map((w) => (
          <div key={w} className="text-xs opacity-70 text-center mb-1">{w}</div>
        ))}
        {items}
      </div>
    );
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <section className="card p-6 mb-6" style={{ background: "var(--surface)" }}>
          <h1 className="text-2xl font-extrabold tracking-tight">Curriculum · 面向远程工作的成年人</h1>
          <p className="text-sm opacity-85">项目驱动 · 输出为先 · 职场真实沟通 · ENFP 有趣氛围</p>
        </section>

        <section className="card p-6 mb-6">
          <h2 className="font-bold mb-2">阶段与目标</h2>
          <ul className="list-disc pl-5 space-y-2 opacity-90">
            <li>Foundation: 发音、核心语法、1000 高频表达</li>
            <li>Project I: 英文简历 + LinkedIn 优化 + 自我介绍视频</li>
            <li>Project II: 远程面试（行为/情景）+ 在线协作沟通</li>
            <li>Project III: 工作英语（写作、同步/异步会议、邮件）</li>
          </ul>
        </section>

        <section id="cohorts" className="card p-6 mb-6">
          <h2 className="font-bold mb-2">开班日历</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">2025年8月 · 第一期（4周）</h3>
              {renderCalendar(7, 2025)}
              <p className="text-xs mt-2 opacity-70">绿色深色：第一期日程</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">2025年9月 · 第二期（筹备，开放报名）</h3>
              {renderCalendar(8, 2025)}
              <p className="text-xs mt-2 opacity-70">绿色浅色：第二期（可报名）</p>
            </div>
          </div>
        </section>

        <section className="card p-6">
          <h2 className="font-bold mb-2">课堂体验</h2>
          <p className="opacity-90">真实任务、角色扮演、即时反馈、轻松不尴尬。每节课可见进步。</p>
        </section>
      </div>
    </div>
  );
}
