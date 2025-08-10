import React from "react";

interface AvocadoEnglishCampProps {
  darkMode?: boolean;
}

const AvocadoEnglishCamp: React.FC<AvocadoEnglishCampProps> = ({ darkMode = false }) => {
  // 颜色变量
  const bgColor = darkMode ? "bg-gray-900" : "bg-white";
  const textColor = darkMode ? "text-gray-100" : "text-gray-800";
  const primaryText = darkMode ? "text-green-300" : "text-green-700";
  const secondaryText = darkMode ? "text-green-400" : "text-green-600";
  const borderColor = darkMode ? "border-green-700" : "border-green-300";
  const borderColorDark = darkMode ? "border-green-600" : "border-green-500";
  const cardBg = darkMode ? "bg-gray-800" : "bg-green-50";
  const cardText = darkMode ? "text-green-200" : "text-green-800";
  const lightCardBg = darkMode ? "bg-gray-700" : "bg-green-100";
  const lightCardText = darkMode ? "text-gray-100" : "text-green-800";
  const avatarBorder = darkMode ? "border-green-500" : "border-green-300";
  const sectionBg = darkMode ? "bg-gray-800" : "bg-white";

  return (
    <div className={`flex flex-col items-center p-4 px-10 ${bgColor}`}>
      {/* First Container - Promotion */}
      <div className={`rounded-lg shadow-md overflow-hidden mb-8 border-2 py-0 px-10 ${borderColor} relative ${sectionBg}`}>
        {/* Avocado icon in top-left */}
        <div className="absolute -top-4 -left-4 w-16 h-16">
          <img
            src="https://media.istockphoto.com/id/968645380/zh/%E5%90%91%E9%87%8F/%E9%B1%B7%E6%A2%A8%E5%9C%96%E7%A4%BA.jpg?s=612x612&w=0&k=20&c=ipashjflV5_0W2mNpiiClRSDsnIywy3Ch5qkYmIiVbY="
            alt="Avocado"
            className={`w-full h-full object-cover rounded-full border-2 ${avatarBorder}`}
          />
        </div>

        <div className="p-6 md:p-8" style={{ aspectRatio: "3/4" }}>
          <header className="text-center mb-6">
            <h1 className={`text-3xl md:text-4xl font-bold ${primaryText} mb-2`}>
              牛油果英语训练营
            </h1>
            <h2 className={`text-xl md:text-2xl ${secondaryText} italic`}>
              Avocado English Camp
            </h2>
            <div className={`mt-4 py-2 px-4 ${lightCardBg} ${lightCardText} font-bold rounded-full inline-block`}>
              试运营限时优惠：4周课程 • 仅199元 • 即将开课！
            </div>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            <div className={`${cardBg} p-4 rounded-lg border ${borderColor}`}>
              <h3 className={`text-lg font-semibold ${cardText} mb-3 border-b-2 ${borderColor} pb-1`}>
                程序员/工程师
              </h3>
              <ul className={`space-y-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>必备实用工作英语</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>个性化定制学习计划</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>拓展职业发展边（国）界</span>
                </li>
              </ul>
            </div>

            <div className={`${cardBg} p-4 rounded-lg border ${borderColor}`}>
              <h3 className={`text-lg font-semibold ${cardText} mb-3 border-b-2 ${borderColor} pb-1`}>
                英语小白入门
              </h3>
              <ul className={`space-y-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>实用英语口语基础</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>建立开口自信</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>注重实际应用场景</span>
                </li>
              </ul>
            </div>
          </div>

          {/* What You'll Get - Sales Point */}
          <div className={`mt-8 ${cardBg} p-5 rounded-lg shadow-lg`}>
            <div className="flex flex-col items-center">
              <div className={`${sectionBg} text-green-500 rounded-full w-12 h-12 flex items-center justify-center mb-2 font-bold text-xl`}>
                ¥699/899
              </div>
            </div>
            <h3 className={`text-xl font-bold text-center mb-4 ${cardText}`}>你将得到</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <div className={`${sectionBg} text-green-500 rounded-full w-12 h-12 flex items-center justify-center mb-2 font-bold text-xl`}>
                  4
                </div>
                <p className={`text-center text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>周个性化定制教学计划</p>
              </div>

              <div className="flex flex-col items-center">
                <div className={`${sectionBg} text-green-500 rounded-full w-12 h-12 flex items-center justify-center mb-2 font-bold text-xl`}>
                  4
                </div>
                <p className={`text-center text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>节一对一课程</p>
              </div>
              <div className="flex flex-col items-center">
                <div className={`${sectionBg} text-green-500 rounded-full w-12 h-12 flex items-center justify-center mb-2 font-bold text-xl`}>
                  4
                </div>
                <p className={`text-center text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>节周末小班课</p>
              </div>
              <div className="flex flex-col items-center">
                <div className={`${sectionBg} text-green-500 rounded-full w-12 h-12 flex items-center justify-center mb-2 font-bold text-xl`}>
                  2
                </div>
                <p className={`text-center text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>次教学测评</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} mb-4`}>
              4周试运营评估效果 • 个性化学习路径 • 专注实用成果转化
            </p>
            <div className={`${lightCardBg} p-3 rounded-lg inline-block`}>
              <p className={`${lightCardText} font-medium`}>
                微信咨询: <span className="font-bold">chm362321</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Container - Details */}
      <div className={`w-full max-w-3xl rounded-lg shadow-md overflow-hidden border-2 ${borderColorDark} relative ${sectionBg}`}>
        {/* Avocado icon in top-left */}
        <div className="absolute -top-4 -left-4 w-16 h-16">
          <img
            src="https://media.istockphoto.com/id/968645380/zh/%E5%90%91%E9%87%8F/%E9%B1%B7%E6%A2%A8%E5%9C%96%E7%A4%BA.jpg?s=612x612&w=0&k=20&c=ipashjflV5_0W2mNpiiClRSDsnIywy3Ch5qkYmIiVbY="
            alt="Avocado"
            className={`w-full h-full object-cover rounded-full border-2 ${borderColorDark}`}
          />
        </div>

        <div className="p-12 pt-16" style={{ aspectRatio: "3/4" }}>
          <h2 className={`text-2xl md:text-3xl font-bold ${primaryText} mb-6`}>
            课程详情
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-xl font-semibold ${primaryText} mb-4 border-b-2 ${borderColor} pb-2`}>
                教学安排
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className={`${lightCardBg} p-2 rounded-full mr-3`}>
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-medium ${textColor}`}>个性化教学计划</h4>
                    <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}>
                      报名后我们会进行1对1需求分析，了解您的：
                      <br />
                      • 兴趣话题（技术/生活/文化等）
                      <br />
                      • 学习目标（工作/考试/旅游等）
                      <br />
                      • 当前英语水平
                      <br />
                      为您定制从单词→表达→对话的完整学习路径
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className={`${lightCardBg} p-2 rounded-full mr-3`}>
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-medium ${textColor}`}>一对一专属辅导</h4>
                    <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}>
                      灵活预约上课时间，为您提供：
                      <br />
                      • 发音矫正与表达优化
                      <br />
                      • 真实场景口语演练
                      <br />
                      • 学习难点专项突破
                      <br />
                      • 工作场景英语特训（会议/邮件/面试等）
                      <br />
                      每次课程都有明确的学习目标和反馈
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className={`${lightCardBg} p-2 rounded-full mr-3`}>
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-medium ${textColor}`}>周末互动小班课</h4>
                    <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}>
                      每周主题式小组课程：
                      <br />
                      • 真实场景角色扮演（点餐/会议/社交等）
                      <br />
                      • 小组讨论与辩论练习
                      <br />
                      • 听力强化训练
                      <br />
                      • 文化差异解析
                      <br />
                      由我引导互动，创造轻松的全英语交流环境
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className={`${lightCardBg} p-2 rounded-full mr-3`}>
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-medium ${textColor}`}>阶段性成果测评</h4>
                    <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}>
                      科学评估学习效果：
                      <br />
                      • 期中/期末2次1对1深度测评
                      <br />
                      • 发音/流利度/词汇量多维度评估
                      <br />
                      • 针对弱项提供改进方案
                      <br />
                      • 学习进度可视化报告
                      <br />
                      确保每阶段都有可衡量的进步
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8 text-center">
                <div className={`${lightCardBg} p-4 rounded-lg inline-block`}>
                  <p className={`${lightCardText} font-medium`}>
                    加我微信: <span className="font-bold">chm362321</span>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-xl font-semibold ${primaryText} mb-4 border-b-2 ${borderColor} pb-2`}>
                适合人群
              </h3>
              <div className={`${cardBg} p-4 rounded-lg border ${borderColor}`}>
                <ul className={`space-y-3 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  <li className="flex items-start">
                    <span className={`${darkMode ? "bg-green-700" : "bg-green-200"} ${darkMode ? "text-green-200" : "text-green-800"} rounded-full px-2 py-1 text-xs font-bold mr-2`}>
                      1
                    </span>
                    <span>希望拓展工作边界的上班族</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`${darkMode ? "bg-green-700" : "bg-green-200"} ${darkMode ? "text-green-200" : "text-green-800"} rounded-full px-2 py-1 text-xs font-bold mr-2`}>
                      2
                    </span>
                    <span>想提升英语口语的零基础学习者</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`${darkMode ? "bg-green-700" : "bg-green-200"} ${darkMode ? "text-green-200" : "text-green-800"} rounded-full px-2 py-1 text-xs font-bold mr-2`}>
                      3
                    </span>
                    <span>希望通过英语变现的职场人士</span>
                  </li>
                </ul>
              </div>

              <h3 className={`text-xl font-semibold ${primaryText} mt-6 mb-4 border-b-2 ${borderColor} pb-2`}>
                教学特色
              </h3>
              <div className={`${cardBg} p-4 rounded-lg border ${borderColor}`}>
                <ul className={`space-y-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>为每位学员定制个性化教学计划</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>全程跟踪学习进度</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>明确可衡量的学习目标</span>
                  </li>
                </ul>
              </div>

              <h3 className={`text-xl font-semibold ${primaryText} mt-6 mb-4 border-b-2 ${borderColor} pb-2`}>
                教师简介
              </h3>
              <div className={`flex items-start ${cardBg} p-4 rounded-lg border ${borderColor}`}>
                <div className="flex-1">
                  <ul className={`space-y-3 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    <li className="flex items-start">
                      <div className={`${lightCardBg} p-0 rounded-full mr-4 w-55 h-20 overflow-hidden border-2 ${borderColor}`}>
                        <img
                          src="https://github.com/schwa1997.png"
                          alt="Teacher Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-green-500 font-bold mr-2">•</span>
                      <span>
                        5年英语作为工作语言的工程师，本科英语二专，硕士英语授课工科课程
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 font-bold mr-2">•</span>
                      <span>
                        成年才学的口语，但是快速变现成为工作语言，侧重实际应用的方法
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 font-bold mr-2">•</span>
                      <span>
                        拒绝【口音警察】，注重实用沟通能力而非完美发音，我认为谁都有资格用英语工作（参考印度人{" "}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 font-bold mr-2">•</span>
                      <span>
                        教学目标：帮助学员实现英语落地变现(工作/学习/社交)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`mt-8 text-center text-sm ${secondaryText}`}>
        <p>牛油果英语训练营 · Avocado English Camp · 实用英语教学专家</p>
      </div>
    </div>
  );
};

export default AvocadoEnglishCamp;