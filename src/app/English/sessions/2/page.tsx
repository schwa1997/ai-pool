"use client"
import React from "react";

interface VocabularyCourseMaterialProps {
    darkMode: boolean;
}

const VocabularyCourseMaterial: React.FC<VocabularyCourseMaterialProps> = ({ darkMode }) => {
    const [expandedSections, setExpandedSections] = React.useState<number[]>([]);

    const toggleSection = (index: number) => {
        if (expandedSections.includes(index)) {
            setExpandedSections(expandedSections.filter((i) => i !== index));
        } else {
            setExpandedSections([...expandedSections, index]);
        }
    };

    // Color scheme classes
    const bgColor = darkMode ? "bg-gray-900" : "bg-white";
    const textColor = darkMode ? "text-gray-100" : "text-gray-800";
    const cardBg = darkMode ? "bg-gray-800" : "bg-gray-50";
    const borderColor = darkMode ? "border-gray-700" : "border-gray-200";
    const buttonBg = darkMode
        ? "bg-blue-600 hover:bg-blue-700"
        : "bg-blue-500 hover:bg-blue-600";
    const sectionBg = darkMode
        ? "bg-gray-700 hover:bg-gray-600"
        : "bg-gray-50 hover:bg-gray-100";

    const sections = [
        {
            title: "1. 词汇分类 / Vocabulary Categories",
            content: (
                <div className="pl-6 space-y-6">
                    <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-blue-50"}`}>
                        <h4 className={`font-semibold ${darkMode ? "text-blue-300" : "text-blue-800"}`}>
                            两大类词汇类型
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            <div>
                                <h5 className="font-medium flex items-center">
                                    <span className={`w-6 h-6 rounded-full ${darkMode ? "bg-green-600" : "bg-green-200"} inline-flex items-center justify-center mr-2`}>📥</span>
                                    输入词汇
                                </h5>
                                <p className="mt-2">你能听懂/看懂，但不一定会主动使用的词汇</p>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>被动识别</li>
                                    <li>理解型词汇</li>
                                    <li>量通常大于输出词汇</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-medium flex items-center">
                                    <span className={`w-6 h-6 rounded-full ${darkMode ? "bg-yellow-600" : "bg-yellow-200"} inline-flex items-center justify-center mr-2`}>📤</span>
                                    输出词汇
                                </h5>
                                <p className="mt-2">你能主动说出来/写出来的词汇</p>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>主动运用</li>
                                    <li>表达型词汇</li>
                                    <li>需要刻意练习</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-purple-50"}`}>
                        <h4 className={`font-semibold ${darkMode ? "text-purple-300" : "text-purple-800"}`}>
                            三类使用场景
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            {[
                                {
                                    icon: "💬",
                                    title: "口语词汇",
                                    desc: "日常交流最核心，重点目标",
                                    examples: ["吃饭", "购物", "打招呼", "表达感受"]
                                },
                                {
                                    icon: "💼",
                                    title: "工作词汇",
                                    desc: "根据行业扩展",
                                    examples: ["办公室沟通", "会议表达", "邮件常用词"]
                                },
                                {
                                    icon: "🎓",
                                    title: "学术词汇",
                                    desc: "考试/学术场合才重点",
                                    examples: ["雅思", "托福", "研究型学习"]
                                }
                            ].map((category, index) => (
                                <div key={index} className={`p-4 rounded-lg ${darkMode ? "bg-gray-600" : "bg-white"} border ${borderColor}`}>
                                    <div className="text-2xl mb-2">{category.icon}</div>
                                    <h5 className="font-medium">{category.title}</h5>
                                    <p className="text-sm mt-1">{category.desc}</p>
                                    <div className="mt-3">
                                        <p className="text-xs font-medium">例子:</p>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {category.examples.map((ex, i) => (
                                                <span key={i} className={`text-xs px-2 py-1 rounded ${darkMode ? "bg-gray-500" : "bg-gray-100"}`}>
                                                    {ex}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-green-50"}`}>
                        <h4 className={`font-semibold ${darkMode ? "text-green-300" : "text-green-800"}`}>
                            输入渠道举例
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            {[
                                {
                                    type: "口语类",
                                    sources: ["美剧/短视频", "电影台词", "播客", "英语角", "AI对话"]
                                },
                                {
                                    type: "工作类",
                                    sources: ["英文邮件范文", "专业资料", "TED演讲", "LinkedIn内容"]
                                },
                                {
                                    type: "学术类",
                                    sources: ["学术文章", "雅思/托福资料", "专业教材", "研究论文"]
                                }
                            ].map((item, index) => (
                                <div key={index} className={`p-4 rounded-lg ${darkMode ? "bg-gray-600" : "bg-white"} border ${borderColor}`}>
                                    <h5 className="font-medium">{item.type}</h5>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        {item.sources.map((source, i) => (
                                            <li key={i} className="text-sm">{source}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-yellow-50"} border ${borderColor}`}>
                        <h4 className={`font-semibold flex items-center ${darkMode ? "text-yellow-300" : "text-yellow-800"}`}>
                            <span className="mr-2">💡</span>
                            结论
                        </h4>
                        <p className="mt-2">大部分普通学习者先抓<strong>口语 + 工作</strong>词汇，学术词汇按需补充。</p>
                    </div>
                </div>
            ),
        },
        {
            title: "2. 词汇积累 / Vocabulary Building",
            content: (
                <div className="pl-6 space-y-6">
                    <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-blue-50"}`}>
                        <h4 className={`font-semibold ${darkMode ? "text-blue-300" : "text-blue-800"}`}>
                            快速积累（背单词 & 工具类）
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            <div>
                                <h5 className="font-medium flex items-center">
                                    <span className="mr-2">📱</span>
                                    推荐APP
                                </h5>
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                    {["墨墨背单词", "Anki", "扇贝", "Quizlet"].map((app, index) => (
                                        <div key={index} className={`p-2 rounded text-center ${darkMode ? "bg-gray-600" : "bg-white"} border ${borderColor}`}>
                                            {app}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h5 className="font-medium flex items-center">
                                    <span className="mr-2">📚</span>
                                    单词书推荐
                                </h5>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>《朗文3000》核心词汇</li>
                                    <li>《牛津3000词》</li>
                                    <li>《Word Power Made Easy》</li>
                                    <li>按词频排序的词汇书</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`mt-4 p-3 rounded ${darkMode ? "bg-gray-600" : "bg-blue-100"}`}>
                            <p className="font-medium">方法：先量，再精（先多背，逐渐深入用法）</p>
                        </div>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-green-50"}`}>
                        <h4 className={`font-semibold ${darkMode ? "text-green-300" : "text-green-800"}`}>
                            深度积累（日常化输入 & 场景化学习）
                        </h4>

                        <div className={`mt-4 p-4 rounded-lg ${darkMode ? "bg-gray-600" : "bg-white"} border ${borderColor}`}>
                            <h5 className="font-medium flex items-center">
                                <span className="mr-2">🎭</span>
                                角色代入法
                            </h5>
                            <p className="mt-2">假装自己是英语小孩子/外国人，想象生活场景，学习相关词汇。</p>
                            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <p className="text-sm font-medium">例如：超市购物场景</p>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                        {["shopping cart", "cashier", "aisle", "produce", "checkout"].map((word, i) => (
                                            <span key={i} className={`text-xs px-2 py-1 rounded ${darkMode ? "bg-gray-500" : "bg-gray-100"}`}>
                                                {word}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium">例如：餐厅点餐场景</p>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                        {["menu", "appetizer", "entree", "bill", "tip"].map((word, i) => (
                                            <span key={i} className={`text-xs px-2 py-1 rounded ${darkMode ? "bg-gray-500" : "bg-gray-100"}`}>
                                                {word}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`mt-4 p-4 rounded-lg ${darkMode ? "bg-gray-600" : "bg-white"} border ${borderColor}`}>
                            <h5 className="font-medium flex items-center">
                                <span className="mr-2">🏠</span>
                                生活化学习
                            </h5>
                            <p className="mt-2">背自己"生活场景里会用到的词"</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                                {[
                                    {
                                        scene: "超市",
                                        words: ["rice", "milk", "bottle", "cashier", "aisle"]
                                    },
                                    {
                                        scene: "健身房",
                                        words: ["push-up", "dumbbell", "treadmill", "yoga mat", "weights"]
                                    },
                                    {
                                        scene: "公司",
                                        words: ["deadline", "report", "meeting", "colleague", "presentation"]
                                    }
                                ].map((item, index) => (
                                    <div key={index}>
                                        <p className="font-medium">{item.scene}:</p>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {item.words.map((word, i) => (
                                                <span key={i} className={`text-xs px-2 py-1 rounded ${darkMode ? "bg-gray-500" : "bg-gray-100"}`}>
                                                    {word}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`mt-4 p-3 rounded ${darkMode ? "bg-gray-600" : "bg-green-100"}`}>
                            <h5 className="font-medium flex items-center">
                                <span className="mr-2">⏳</span>
                                长期主义
                            </h5>
                            <p className="mt-1">不追求短期死记硬背，而是让词汇"跟自己生活绑定"。</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "3. 词汇语感积累 / Developing Word Sense",
            content: (
                <div className="pl-6 space-y-6">
                    <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-blue-50"}`}>
                        <h4 className={`font-semibold ${darkMode ? "text-blue-300" : "text-blue-800"}`}>
                            核心思想
                        </h4>
                        <p className="mt-2">单词不是孤立的，而是"多种表达 & 语境差异"。</p>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-purple-50"}`}>
                        <h4 className={`font-semibold ${darkMode ? "text-purple-300" : "text-purple-800"}`}>
                            练习方法
                        </h4>

                        <div className={`mt-4 p-4 rounded-lg ${darkMode ? "bg-gray-600" : "bg-white"} border ${borderColor}`}>
                            <h5 className="font-medium flex items-center">
                                <span className="mr-2">🔄</span>
                                同义替换练习
                            </h5>
                            <p className="mt-2">一个意思多种表达方式</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                                <div>
                                    <p className="font-medium">开心:</p>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                        {["happy", "glad", "delighted", "in good mood", "thrilled", "over the moon"].map((word, i) => (
                                            <span key={i} className={`text-xs px-2 py-1 rounded ${darkMode ? "bg-gray-500" : "bg-gray-100"}`}>
                                                {word}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="font-medium">生气:</p>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                        {["angry", "mad", "upset", "annoyed", "pissed off"].map((word, i) => (
                                            <span key={i} className={`text-xs px-2 py-1 rounded ${darkMode ? "bg-gray-500" : "bg-gray-100"}`}>
                                                {word}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`mt-4 p-4 rounded-lg ${darkMode ? "bg-gray-600" : "bg-white"} border ${borderColor}`}>
                            <h5 className="font-medium flex items-center">
                                <span className="mr-2">🌐</span>
                                中文出发 → 多种英文表达
                            </h5>
                            <p className="mt-2">比如"开心"，先想中文的多种说法：高兴、愉快、喜滋滋的、兴奋，再翻译成英语 → 变成一个"词汇树"。</p>

                            <div className="mt-3">
                                <div className="flex items-start">
                                    <div className="w-1/2 pr-2">
                                        <p className="font-medium">中文表达:</p>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {["高兴", "愉快", "喜滋滋", "兴奋", "欣喜"].map((word, i) => (
                                                <span key={i} className={`text-xs px-2 py-1 rounded ${darkMode ? "bg-blue-700" : "bg-blue-100"}`}>
                                                    {word}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-1/2 pl-2">
                                        <p className="font-medium">英文对应:</p>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {["happy", "joyful", "cheerful", "excited", "delighted"].map((word, i) => (
                                                <span key={i} className={`text-xs px-2 py-1 rounded ${darkMode ? "bg-green-700" : "bg-green-100"}`}>
                                                    {word}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`mt-4 p-4 rounded-lg ${darkMode ? "bg-gray-600" : "bg-white"} border ${borderColor}`}>
                            <h5 className="font-medium flex items-center">
                                <span className="mr-2">🎭</span>
                                语境差别
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                                {[
                                    {
                                        word: "happy",
                                        meaning: "心情上开心",
                                        example: "I'm happy to see you."
                                    },
                                    {
                                        word: "glad",
                                        meaning: "礼貌表达，很高兴见到你",
                                        example: "I'm glad we met."
                                    },
                                    {
                                        word: "thrilled",
                                        meaning: "非常兴奋，超级开心",
                                        example: "I'm thrilled about the news!"
                                    }
                                ].map((item, index) => (
                                    <div key={index} className={`p-3 rounded ${darkMode ? "bg-gray-500" : "bg-gray-50"}`}>
                                        <p className="font-medium">{item.word}</p>
                                        <p className="text-sm mt-1">{item.meaning}</p>
                                        <p className="text-xs italic mt-2">{item.example}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-green-50"}`}>
                        <h4 className={`font-semibold ${darkMode ? "text-green-300" : "text-green-800"}`}>
                            游戏化练习
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            {[
                                {
                                    name: "同义词接龙",
                                    desc: "学生分组比赛，看谁能说出更多表达",
                                    example: "happy → glad → delighted → cheerful..."
                                },
                                {
                                    name: "翻译挑战",
                                    desc: "给中文情境，让学生找不同英文说法",
                                    example: "表达'我很开心'的5种方式"
                                },
                                {
                                    name: "AI练习",
                                    desc: "和AI对话，AI扮演不同角色",
                                    example: "朋友/老板/客户，用不同表达说'开心'"
                                }
                            ].map((game, index) => (
                                <div key={index} className={`p-4 rounded-lg ${darkMode ? "bg-gray-600" : "bg-white"} border ${borderColor}`}>
                                    <h5 className="font-medium">{game.name}</h5>
                                    <p className="text-sm mt-1">{game.desc}</p>
                                    <p className="text-xs italic mt-2">{game.example}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "4. 背单词的方法 / Vocabulary Learning Methods",
            content: (
                <div className="pl-6 space-y-6">
                    <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-blue-50"}`}>
                        <h4 className={`font-semibold ${darkMode ? "text-blue-300" : "text-blue-800"}`}>
                            核心思想
                        </h4>
                        <p className="mt-2">背单词既要量，也要质。系统化学习和生活化输入结合效果最佳。</p>
                    </div>

                    {/* A. App 背单词 */}
                    <div className={`mt-4 p-4 rounded-lg ${darkMode ? "bg-gray-600" : "bg-white"} border ${borderColor}`}>
                        <h5 className="font-medium flex items-center">
                            <span className="mr-2">📱</span>
                            App 背单词
                        </h5>
                        <ul className="mt-2 list-disc list-inside text-sm">
                            <li>适合自律、喜欢规律学习的学生</li>
                            <li>系统化，按记忆曲线复习，方便随时复习</li>
                            <li>例子：扇贝、墨墨、Quizlet</li>
                            <li>优点：快速积累、高频词汇覆盖</li>
                            <li>缺点：可能枯燥、缺少语境</li>
                        </ul>
                    </div>

                    {/* B. Anki / 互动式背单词 */}
                    <div className={`mt-4 p-4 rounded-lg ${darkMode ? "bg-gray-600" : "bg-white"} border ${borderColor}`}>
                        <h5 className="font-medium flex items-center">
                            <span className="mr-2">🃏</span>
                            Anki / 互动式背单词
                        </h5>
                        <ul className="mt-2 list-disc list-inside text-sm">
                            <li>基于记忆曲线，可自定义卡片</li>
                            <li>卡片中可加入例句、图片、发音</li>
                            <li>优点：慢但深刻、有趣，帮助长期记忆</li>
                            <li>缺点：比单词App慢，需要动手制作卡片</li>
                        </ul>
                    </div>

                    {/* C. 阅读背单词 */}
                    <div className={`mt-4 p-4 rounded-lg ${darkMode ? "bg-gray-600" : "bg-white"} border ${borderColor}`}>
                        <h5 className="font-medium flex items-center">
                            <span className="mr-2">📖</span>
                            阅读背单词
                        </h5>
                        <ul className="mt-2 list-disc list-inside text-sm">
                            <li>看英语杂志、简易读物、小说等</li>
                            <li>主要是提高输入和阅读能力，而非单纯背单词</li>
                            <li>优点：单词在语境中学习，理解用法</li>
                            <li>缺点：不系统，难以统计掌握量</li>
                        </ul>
                    </div>

                    {/* D. 视频 / 听力背单词 */}
                    <div className={`mt-4 p-4 rounded-lg ${darkMode ? "bg-gray-600" : "bg-white"} border ${borderColor}`}>
                        <h5 className="font-medium flex items-center">
                            <span className="mr-2">🎬</span>
                            视频 / 听力背单词
                        </h5>
                        <ul className="mt-2 list-disc list-inside text-sm">
                            <li>看美剧、短视频、YouTube、播客</li>
                            <li>接触真实口语，学到生活化表达</li>
                            <li>缺点：不系统，难以知道学了多少新单词</li>
                            <li>建议：可结合笔记或短卡片，将重要单词记录下来</li>
                        </ul>
                    </div>

                    {/* 总结 */}
                    <div className={`mt-4 p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-green-50"}`}>
                        <h4 className={`font-semibold ${darkMode ? "text-green-300" : "text-green-800"}`}>
                            🌟 总结
                        </h4>
                        <p className="mt-2">
                            系统化方法 → App / Anki，适合打基础、积累量；<br />
                            生活化输入 → 阅读 / 视频，适合深度理解和语感积累；<br />
                            最理想的方法：结合两者，既有量又有质。
                        </p>
                    </div>
                </div>
            ),
        }

    ];

    return (
        <div className={`min-h-screen p-6 ${bgColor} ${textColor}`}>
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                        <span className="text-4xl mr-3">📚</span>
                        <h1 className="text-3xl font-bold">
                            词汇入门课程 / Vocabulary Foundation Course
                        </h1>
                    </div>
                </div>

                <div className="mb-8 p-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <h2 className="text-2xl font-bold mb-3">教学逻辑串联</h2>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>先帮学生 <strong>明确目标</strong> → 口语/工作优先</li>
                        <li>再告诉他们 <strong>积累路径</strong> → 快速背 + 日常化输入</li>
                        <li>最后培养 <strong>语感</strong> → 多表达 + 多替换 + 多场景</li>
                    </ol>
                </div>

                <div className="space-y-4">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className={`border rounded-lg overflow-hidden ${borderColor}`}
                        >
                            <button
                                onClick={() => toggleSection(index)}
                                className={`w-full flex justify-between items-center p-4 font-medium text-left ${expandedSections.includes(index)
                                        ? sectionBg
                                        : "hover:" + sectionBg
                                    }`}
                            >
                                <span className="text-lg">{section.title}</span>
                                <svg
                                    className={`w-5 h-5 transform transition-transform ${expandedSections.includes(index) ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {expandedSections.includes(index) && (
                                <div className={`p-4 border-t ${borderColor}`}>
                                    {section.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className={`mt-8 p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-blue-50"}`}>
                    <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-blue-300" : "text-blue-800"}`}>
                        实践练习 / Practical Exercises
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-medium text-lg mb-3">场景词汇构建</h4>
                            <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-white"} border ${borderColor}`}>
                                <h5 className="font-medium">选择你的核心场景:</h5>
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                    {["工作办公", "日常购物", "餐厅用餐", "旅行交通", "健康医疗", "休闲娱乐"].map((scene, i) => (
                                        <div key={i} className={`p-2 rounded text-center text-sm ${darkMode ? "bg-gray-600" : "bg-gray-100"}`}>
                                            {scene}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm mt-3">选择1-2个场景，列出20个相关词汇</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-medium text-lg mb-3">同义词扩展练习</h4>
                            <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-white"} border ${borderColor}`}>
                                <h5 className="font-medium">尝试为这些词找到3种以上表达:</h5>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {["good", "bad", "happy", "sad", "big", "small"].map((word, i) => (
                                        <span key={i} className={`px-3 py-1 rounded-full ${darkMode ? "bg-gray-600" : "bg-gray-200"}`}>
                                            {word}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`mt-6 p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-green-50"}`}>
                        <h4 className={`font-semibold mb-3 ${darkMode ? "text-green-300" : "text-green-800"}`}>
                            推荐学习资源
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                {
                                    title: "Vocabulary.com",
                                    desc: "情境化词汇学习",
                                    link: "https://www.vocabulary.com"
                                },
                                {
                                    title: "Quizlet",
                                    desc: "创建自定义单词集",
                                    link: "https://quizlet.com"
                                },
                                {
                                    title: "WordReference",
                                    desc: "词汇语境查询",
                                    link: "https://www.wordreference.com"
                                }
                            ].map((resource, i) => (
                                <a
                                    key={i}
                                    href={resource.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 rounded-lg block ${darkMode ? "bg-gray-600 hover:bg-gray-500" : "bg-white hover:bg-blue-100"} border ${borderColor}`}
                                >
                                    <h5 className="font-medium">{resource.title}</h5>
                                    <p className="text-sm mt-1">{resource.desc}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VocabularyCourseMaterial;