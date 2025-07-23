import React from "react";

const PromptPyramid = () => {
  const steps = [
    { level: 1, component: "Task", description: "Start with an action verb", color: "bg-blue-500" },
    { level: 2, component: "Context", description: "Add key constraints", color: "bg-purple-500" },
    { level: 3, component: "Exemplars", description: "Provide examples", color: "bg-green-500" },
    { level: 4, component: "Persona", description: "Assign an expert role", color: "bg-yellow-500" },
    { level: 5, component: "Format", description: "Define output structure", color: "bg-orange-500" },
    { level: 6, component: "Tone", description: "Set communication style", color: "bg-red-500" },
  ];

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Perfect ChatGPT Prompt Formula
      </h1>
      
      {/* Pyramid Container */}
      <div className="relative w-full max-w-md">
        {steps.map((step, index) => (
          <div
            key={step.component}
            className={`${step.color} text-white p-4 rounded-lg mb-2 text-center transition-all hover:scale-105`}
            style={{
              width: `${100 - (index * 12)}%`, // 每层宽度递减
              marginLeft: "auto",
              marginRight: "auto",
              zIndex: steps.length - index, // 确保底层在最上方
            }}
          >
            <h2 className="font-bold text-lg">{step.component}</h2>
            <p className="text-sm opacity-80">{step.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-gray-600 text-center">
        Master these 6 steps to unlock AI full potential!
      </p>
    </div>
  );
};

export default PromptPyramid;