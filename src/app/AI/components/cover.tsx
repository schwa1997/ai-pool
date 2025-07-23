import React from "react";
import Head from "next/head";

const Cover = () => {
  return (
    <>
      <Head>
        <title>AI提示词公式 | 小红书爆款封面</title>
      </Head>

      {/* 主容器 - 小红书风格卡片 */}
      <div className="relative w-full max-w-[500px] mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        {/* 封面图片区 - 渐变背景 + 核心卖点 */}
        <div
          className="h-64 relative flex items-center justify-center p-6"
          style={{
            background: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
          }}
        >
          {/* 标题文字 */}
          <div className="text-center z-10">
            <h1 className="text-3xl font-bold text-white mb-3 drop-shadow-md">
              🔥 AI完美提示词公式
            </h1>
            <p className="text-xl text-white">
              让你的AI输出质量提升
              <span className="mx-1 font-bold bg-pink-500 text-white px-2 py-0.5 rounded-md">
                200%
              </span>
              ！
            </p>
          </div>
        </div>

        {/* 内容区 */}
        <div className="p-6">
          {/* 核心卖点列表 */}
          <ul className="space-y-2 mb-5">
            {["💎 6步金字塔公式", "⏱️ 节省80%提示词调试时间"].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2">{item.split(" ")[0]}</span>
                <span>{item.split(" ").slice(1).join(" ")}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cover;
