import React from 'react';

interface PromptComponent {
  title: string;
  tag: string;
  core: string;
  examples: string[];
  tips?: string[];
}

const PromptNotes: React.FC = () => {
  const components: PromptComponent[] = [
    {
      title: '任务',
      tag: '#核心组件',
      core: '必须明确，以动作动词开头（如"生成""分析""撰写"）',
      examples: [
        '简单任务："生成一个3个月的健身计划。"',
        '复杂任务："分析用户反馈，总结3个关键点，并按负责团队分类。"'
      ]
    },
    {
      title: '背景',
      tag: '#约束条件',
      core: '约束输出范围，提供必要信息',
      tips: [
        '用户背景是什么？',
        '成功标准是什么？',
        '所处环境如何？'
      ],
      examples: [
        '"我是70公斤男性，希望3个月内增肌5公斤，每周只能去健身房2次，每次1小时。"'
      ]
    },
    {
      title: '范例',
      tag: '#质量提升',
      core: '提供参考案例或框架，显著提升输出质量',
      examples: [
        '简历优化："用通过X方法达成Y结果，实现Z目标的格式改写。"',
        '面试回答："用STAR框架（情境-任务-行动-结果）描述你的弱点。"'
      ]
    },
    {
      title: '角色',
      tag: '#专家视角',
      core: '指定AI扮演的专家角色',
      tips: [
        '想象你希望咨询的真实人物'
      ],
      examples: [
        '"作为苹果高级产品经理，分析iPhone 15的市场策略。"',
        '"像蝙蝠侠一样写一封团队动员邮件。"'
      ]
    },
    {
      title: '格式',
      tag: '#结构化输出',
      core: '明确输出形式（表格/代码块/Markdown等）',
      examples: [
        '"将用户反馈整理为表格，列包括：原始反馈、负责团队、优先级。"',
        '"用H2标题分段总结报告，并加粗修改内容。"'
      ]
    },
    {
      title: '语气',
      tag: '#风格控制',
      core: '语言风格（正式/随意/幽默等）',
      tips: [
        '不确定时让AI推荐形容词'
      ],
      examples: [
        '"用专业但友好的语气写一封客户道歉信。"',
        '"生成一段幽默的生日祝福，对象是喜欢编程的朋友。"'
      ]
    }
  ];

  return (
    <div className="prompt-notes max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
        <span className="mr-2">🧠</span>6大提示词组件（按重要性排序）
      </h1>
      
      <div className="space-y-8">
        {components.map((component, index) => (
          <div key={index} className="component-card bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">
                  {index + 1}️⃣ {component.title}
                </h2>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {component.tag}
                </span>
              </div>
              
              <div className="highlight-box bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="font-semibold text-lg">💡 <span className="underline">核心</span>：{component.core}</p>
              </div>
              
              {component.tips && (
                <div className="tips-box bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="font-medium mb-2">🔑 <span className="underline">关键点</span>：</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {component.tips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="examples-box mt-4">
                <p className="font-medium mb-2">✅ <span className="underline">例子</span>：</p>
                <ul className="space-y-2">
                  {component.examples.map((example, i) => (
                    <li key={i} className="bg-gray-50 p-3 rounded-md border border-gray-200 font-mono">
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="summary-box bg-green-50 p-6 rounded-xl mt-8 border border-green-200">
        <h3 className="text-xl font-bold mb-3 flex items-center">
          <span className="mr-2">📌</span>使用心法
        </h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>任务 + 背景 &gt; 范例 &gt; 角色/格式/语气</li>
          <li>组合越多，结果越精准！</li>
        </ol>
      </div>
    </div>
  );
};

export default PromptNotes;