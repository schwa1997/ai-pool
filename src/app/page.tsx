"use client"
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import EnglishClassPoster from "./English/20250730";
import EnglishCourseSchedule from "./English/20250810";
import PronunciationCourseMaterial from "./English/20250816";
import { Moon, Sun } from "lucide-react";

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState<string>("schedule");
  const [darkMode, setDarkMode] = useState(false);

  // 检测系统偏好
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // 切换主题
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // 课程资料
  const courses = [
    {
      id: "schedule",
      name: "课程表 📅",
      component: <EnglishCourseSchedule darkMode={darkMode}/>,
      emoji: "📅",
      desc: "每周学习计划"
    },
    {
      id: "pronunciation",
      name: "发音指南 🗣️",
      component: <PronunciationCourseMaterial darkMode={darkMode} />,
      emoji: "🗣️",
      desc: "完美发音技巧"
    },
    {
      id: "poster",
      name: "课程海报 🎨",
      component: <EnglishClassPoster darkMode={darkMode} />,
      emoji: "🎨",
      desc: "课程精华展示"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* 顶部导航 */}
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🥑</span>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              牛油果英语
            </h1>
          </div>
          
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        {/* 课程导航 - 现代卡片式 */}
        <nav className="mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {courses.map((course) => (
              <div
                key={course.id}
                onClick={() => setActiveTab(course.id)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 flex flex-col items-center 
                  ${activeTab === course.id 
                    ? (darkMode ? 'bg-green-700 text-white' : 'bg-green-100 text-green-800 border border-green-300')
                    : (darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 border border-gray-200')
                  }`}
              >
                <span className="text-2xl mb-2">{course.emoji}</span>
                <h3 className="font-medium text-center">{course.name}</h3>
                <p className={`text-xs mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{course.desc}</p>
              </div>
            ))}
          </div>
        </nav>

        {/* 主要内容区 */}
        <main className={`rounded-2xl p-6 transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
          <div className="mb-6 flex items-center space-x-3">
            <span className="text-2xl">
              {courses.find(c => c.id === activeTab)?.emoji}
            </span>
            <h2 className="text-xl font-semibold">
              {courses.find(c => c.id === activeTab)?.name}
            </h2>
          </div>
          
          <div className={`rounded-lg p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            {courses.find(c => c.id === activeTab)?.component}
          </div>
        </main>

        {/* 页脚 */}
        <footer className="mt-12 text-center text-sm">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
            🥑 牛油果英语培训 © {new Date().getFullYear()} | 让学习像牛油果一样营养丰富
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;