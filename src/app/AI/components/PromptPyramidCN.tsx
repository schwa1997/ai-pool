import React from "react";

const PromptPyramidCN = () => {
  const steps = [
    { level: 1, component: "任务", color: "bg-[#A8E6CF]" },
    { level: 2, component: "背景", color: "bg-[#DCEDC1]" },
    { level: 3, component: "范例", color: "bg-[#FFD3B6]" },
    { level: 4, component: "角色", color: "bg-[#FFAAA5]" },
    { level: 5, component: "格式", color: "bg-[#FF8B94]" },
    { level: 6, component: "语气", color: "bg-[#D4A5A5]" },
  ];

  return (
    <div className="flex flex-col items-center p-6 font-sans">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        🔥 AI完美提示词金字塔公式
      </h1>
      
      {/* 简化版金字塔容器 */}
      <div className="relative w-full max-w-md flex flex-col items-center">
        {steps.map((step, index) => (
          <div
            key={step.component}
            className={`${step.color} text-gray-800 p-5 rounded-xl relative transition-all hover:scale-[1.02] hover:shadow-md flex items-center justify-between`}
            style={{
              width: `${100 - index * 12}%`,
              marginBottom: index === steps.length - 1 ? '0' : '-10px',
              zIndex: steps.length - index,
              minHeight: '60px' // 确保统一高度
            }}
          >
            {/* 数字标记 */}
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm mr-3">
              <span className={`font-bold ${step.color.replace('bg', 'text')}`}>
                {step.level}
              </span>
            </div>
            
            {/* 组件名称 - 加大字号 */}
            <h2 className="font-bold text-xl flex-grow text-center">
              {step.component}
            </h2>
            
            {/* 保持左右对称的空白 */}
            <div className="w-8"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromptPyramidCN;