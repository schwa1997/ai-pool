import React from "react";

interface EnglishCourseScheduleProps {
  darkMode?: boolean;
}

const EnglishCourseSchedule: React.FC<EnglishCourseScheduleProps> = ({ darkMode = false }) => {
  // 颜色变量
  const bgColor = darkMode ? "bg-gray-800" : "bg-white";
  const textColor = darkMode ? "text-gray-100" : "text-gray-800";
  const primaryText = darkMode ? "text-green-300" : "text-green-700";
  const secondaryText = darkMode ? "text-gray-300" : "text-gray-600";
  const borderColor = darkMode ? "border-green-600" : "border-green-500";
  const cardBg = darkMode ? "bg-gray-700" : "bg-green-50";
  const cardText = darkMode ? "text-green-200" : "text-green-800";

  const courses = [
    {
      week: 1,
      title: "发音入门 Pronunciation Introduction",
      date: "August 16 (Saturday)",
      time: "17:00 Beijing Time (TBD)",
      platform: "腾讯会议",
      format: "50-minute lesson + 10-minute Q&A",
      emoji: "🗣️",
    },
    {
      week: 2,
      title: "词汇入门 Vocabulary Introduction",
      date: "August 23 (Saturday)",
      time: "17:00 Beijing Time (TBD)",
      platform: "腾讯会议",
      format: "50-minute lesson + 10-minute Q&A",
      emoji: "📖",
    },
    {
      week: 3,
      title: "造句入门 Sentence Making Introduction",
      date: "August 30 (Saturday)",
      time: "17:00 Beijing Time (TBD)",
      platform: "腾讯会议",
      format: "50-minute lesson + 10-minute Q&A",
      emoji: "✍️",
    },
    {
      week: 4,
      title: "对话入门 Conversation Introduction",
      date: "September 6 (Saturday)",
      time: "17:00 Beijing Time (TBD)",
      platform: "腾讯会议",
      format: "50-minute lesson + 10-minute Q&A",
      emoji: "💬",
    },
  ];

  return (
    <div className={`max-w-3xl mx-auto p-6 rounded-lg shadow-md ${bgColor} ${textColor}`}>
      <div className="flex items-center mb-6">
        <span className="text-4xl mr-3">🥑</span>
        <h1 className={`text-3xl font-bold ${primaryText}`}>
          Avocado English
        </h1>
      </div>

      <div className="mb-8">
        <h2 className={`text-2xl font-semibold ${secondaryText} mb-4`}>
          Course Schedule (4 Weeks)
        </h2>
        <p className={secondaryText}>• Weekly Group Class (Saturday/Saturday)</p>
      </div>

      <div className="space-y-6">
        {courses.map((course) => (
          <div
            key={course.week}
            className={`border-l-4 ${borderColor} pl-4 py-2`}
          >
            <div className="flex items-start">
              <span className="text-2xl mr-3">{course.emoji}</span>
              <div>
                <h3 className={`text-xl font-bold ${textColor}`}>
                  Week {course.week}: {course.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                  <div>
                    <p className={`font-medium ${secondaryText}`}>Date:</p>
                    <p className={secondaryText}>{course.date}</p>
                  </div>
                  <div>
                    <p className={`font-medium ${secondaryText}`}>Time:</p>
                    <p className={secondaryText}>{course.time}</p>
                  </div>
                  <div>
                    <p className={`font-medium ${secondaryText}`}>Platform:</p>
                    <p className={secondaryText}>{course.platform}</p>
                  </div>
                  <div>
                    <p className={`font-medium ${secondaryText}`}>Format:</p>
                    <p className={secondaryText}>{course.format}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`mt-8 p-4 rounded-lg ${cardBg}`}>
        <h3 className={`text-lg font-semibold ${cardText} mb-2`}>Note:</h3>
        <p className={cardText}>
          时间以群里通知为准，可以结合实际情况调整
        </p>
        <p className={cardText}>不能参加的同学可以自己看回放</p>
      </div>
    </div>
  );
};

export default EnglishCourseSchedule;