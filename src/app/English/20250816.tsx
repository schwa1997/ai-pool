"use client"
import React, { useState } from "react";

interface PronunciationPracticeProps {
  darkMode: boolean;
}

const PronunciationPractice: React.FC<PronunciationPracticeProps> = ({ darkMode }) => {
  // 颜色变量
  const bgColor = darkMode ? "bg-gray-900" : "bg-white";
  const textColor = darkMode ? "text-gray-100" : "text-gray-800";
  const cardBg = darkMode ? "bg-gray-800" : "bg-gray-50";
  const borderColor = darkMode ? "border-gray-700" : "border-gray-200";
  const buttonBg = darkMode ? "bg-green-600 hover:bg-green-700" : "bg-green-500 hover:bg-green-600";
  
  // 打卡状态
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<"vowels" | "consonants" | "difficult">("vowels");

  // 发音卡片数据
  const pronunciationCards = {
    vowels: [
      { 
        id: "v1",
        symbol: "/iː/", 
        example: "sheep, see", 
        tip: "嘴角向两侧拉伸，保持肌肉紧张",
        commonError: "发成短音/ɪ/(ship)",
        video: "https://youtu.be/example1"
      },
      { 
        id: "v2",
        symbol: "/ɪ/", 
        example: "ship, sit", 
        tip: "短促放松，下巴稍降",
        commonError: "发成中文'一'",
        video: "https://youtu.be/example2"
      },
      { 
        id: "v3",
        symbol: "/æ/", 
        example: "cat, bad", 
        tip: "嘴张大到两指宽，舌尖抵下齿",
        commonError: "发成中文'爱'",
        video: "https://youtu.be/example3"
      },
      { 
        id: "v4",
        symbol: "/ɑː/", 
        example: "car, far", 
        tip: "口腔完全打开，舌身后缩",
        commonError: "发成中文'啊'",
        video: "https://youtu.be/example4"
      },
      { 
        id: "v5",
        symbol: "/ʌ/", 
        example: "cup, luck", 
        tip: "短促的中元音，嘴唇放松",
        commonError: "发成中文'阿'",
        video: "https://youtu.be/example5"
      }
    ],
    consonants: [
      { 
        id: "c1",
        symbol: "/θ/ /ð/", 
        example: "think, this", 
        tip: "舌尖轻触上齿，气流从缝隙挤出",
        commonError: "发成/s/或/f/",
        video: "https://youtu.be/example6"
      },
      { 
        id: "c2",
        symbol: "/v/", 
        example: "very, love", 
        tip: "上齿轻咬下唇，声带震动",
        commonError: "发成/w/",
        video: "https://youtu.be/example7"
      },
      { 
        id: "c3",
        symbol: "/r/", 
        example: "red, car", 
        tip: "舌尖卷起但不接触上颚",
        commonError: "发成中文'日'",
        video: "https://youtu.be/example8"
      },
      { 
        id: "c4",
        symbol: "/l/", 
        example: "light, bell", 
        tip: "舌尖抵上齿龈，保持口型",
        commonError: "词尾发成'ou'",
        video: "https://youtu.be/example9"
      },
      { 
        id: "c5",
        symbol: "/ŋ/", 
        example: "sing, think", 
        tip: "气流从鼻腔出，舌后部抬起",
        commonError: "发成/n/",
        video: "https://youtu.be/example10"
      }
    ],
    difficult: [
      { 
        id: "d1",
        symbol: "/θ/ vs /s/", 
        example: "think vs sink", 
        tip: "舌尖伸出牙齿间，气流从缝隙挤出",
        commonError: "混淆两者发音",
        video: "https://youtu.be/example11"
      },
      { 
        id: "d2",
        symbol: "/v/ vs /w/", 
        example: "vet vs wet", 
        tip: "上齿轻咬下唇震动",
        commonError: "发成/w/",
        video: "https://youtu.be/example12"
      },
      { 
        id: "d3",
        symbol: "/r/", 
        example: "red, car", 
        tip: "舌尖卷起但不接触上颚",
        commonError: "发成中文'日'",
        video: "https://youtu.be/example13"
      },
      { 
        id: "d4",
        symbol: "/n/ vs /ŋ/", 
        example: "sin vs sing", 
        tip: "舌后部抬起接触软腭",
        commonError: "混淆两者发音",
        video: "https://youtu.be/example14"
      },
      { 
        id: "d5",
        symbol: "/ɪ/ vs /iː/", 
        example: "ship vs sheep", 
        tip: "注意长短音区别",
        commonError: "混淆长短音",
        video: "https://youtu.be/example15"
      }
    ]
  };

  const toggleComplete = (id: string) => {
    setCompleted(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className={`min-h-screen p-6 ${bgColor} ${textColor}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <span className="text-4xl mr-3">🥑</span>
          <h1 className="text-3xl font-bold">
            每日发音打卡系统
          </h1>
        </div>

        {/* 导航标签 */}
        <div className="flex mb-6 space-x-2">
          <button
            onClick={() => setActiveTab("vowels")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "vowels" ? buttonBg : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            元音练习
          </button>
          <button
            onClick={() => setActiveTab("consonants")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "consonants" ? buttonBg : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            辅音练习
          </button>
          <button
            onClick={() => setActiveTab("difficult")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "difficult" ? buttonBg : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            难点练习
          </button>
        </div>

        {/* 打卡统计 */}
        <div className={`mb-6 p-4 rounded-lg ${cardBg} ${borderColor} border`}>
          <h3 className="text-lg font-semibold mb-2">本周打卡进度</h3>
          <div className="flex space-x-4">
            {["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map(day => (
              <div key={day} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  completed[`${day}-vowel`] || completed[`${day}-consonant`] || completed[`${day}-difficult`] 
                    ? "bg-green-500 text-white" 
                    : darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}>
                  {day}
                </div>
                <span className="text-xs mt-1">
                  {completed[`${day}-vowel`] ? "✓" : ""}
                  {completed[`${day}-consonant`] ? "✓" : ""}
                  {completed[`${day}-difficult`] ? "✓" : ""}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 发音卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pronunciationCards[activeTab].map((card) => (
            <div 
              key={card.id} 
              className={`relative h-64 rounded-lg shadow-md cursor-pointer transition-transform duration-500 ${borderColor} border ${
                completed[card.id] ? "ring-2 ring-green-500" : ""
              }`}
            >
              <div className={`absolute w-full h-full backface-visibility-hidden ${
                completed[card.id] ? "rotate-y-180" : ""
              }`}>
                <div className={`p-4 h-full flex flex-col justify-between ${cardBg}`}>
                  <div>
                    <div className="text-4xl font-bold mb-2">{card.symbol}</div>
                    <p className="text-lg mb-2">{card.example}</p>
                  </div>
                  <div className="text-right">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleComplete(card.id);
                      }}
                      className={`px-3 py-1 rounded-md text-sm ${
                        completed[card.id] 
                          ? "bg-gray-500 text-white" 
                          : buttonBg
                      }`}
                    >
                      {completed[card.id] ? "已完成" : "标记完成"}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className={`absolute w-full h-full backface-visibility-hidden ${
                completed[card.id] ? "" : "rotate-y-180"
              }`}>
                <div className={`p-4 h-full flex flex-col ${cardBg}`}>
                  <h3 className="text-xl font-bold mb-2">{card.symbol}</h3>
                  <p className="mb-2"><span className="font-medium">示例:</span> {card.example}</p>
                  <p className="mb-2"><span className="font-medium">发音要点:</span> {card.tip}</p>
                  <p className="mb-2 text-red-500"><span className="font-medium">常见错误:</span> {card.commonError}</p>
                  <a 
                    href={card.video} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto text-blue-500 hover:underline"
                  >
                    观看教学视频 →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 练习建议 */}
        <div className={`mt-8 p-6 rounded-lg ${cardBg} ${borderColor} border`}>
          <h3 className="text-lg font-semibold mb-4">每日练习建议</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-lg mb-2">训练方法</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>每天选择3-5个发音卡片练习</li>
                <li>对着镜子观察口型</li>
                <li>录音并与标准发音对比</li>
                <li>每个发音重复10-15次</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-2">Practice Tips</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Practice 3-5 sounds daily</li>
                <li>Use a mirror to check mouth position</li>
                <li>Record and compare with native speakers</li>
                <li>Repeat each sound 10-15 times</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PronunciationPractice;