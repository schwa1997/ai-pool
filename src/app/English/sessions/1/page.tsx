"use client";
import React from "react";

interface PronunciationCourseMaterialProps {
  darkMode: boolean;
}
const PronunciationCourseMaterial: React.FC<
  PronunciationCourseMaterialProps
> = ({ darkMode }) => {
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
    ? "bg-green-600 hover:bg-green-700"
    : "bg-green-500 hover:bg-green-600";
  const sectionBg = darkMode
    ? "bg-gray-700 hover:bg-gray-600"
    : "bg-gray-50 hover:bg-gray-100";

  const sections = [
    {
      title: "1. 关于口音的正确心态 (10分钟) / Mindset About Accents (10 mins)",
      content: (
        <div className="pl-6 space-y-4">
          <div
            className={`p-4 rounded-lg ${
              darkMode ? "bg-gray-700" : "bg-blue-50"
            }`}
          >
            <h4
              className={`font-semibold ${
                darkMode ? "text-blue-300" : "text-blue-800"
              }`}
            >
              中文内容：
            </h4>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <span className="font-medium">个人对口音的理解：</span>
                我接触过很多国家的人，包括英语母语者也会有沟通障碍。比如曾有个英格兰人在政治会议上发言，澳大利亚人完全听不懂
              </li>
              <li>
                <span className="font-medium">中式英语可以是特色：</span>
                当你的英语达到高级水平后，中式口音反而会成为你的个人标签
              </li>
              <li>
                <span className="font-medium">交流的核心：</span>
                自信和表达内容比完美发音更重要
              </li>
              <li>
                <span className="font-medium">主要观点：</span>
                不要害怕你的口音，先敢于开口
              </li>
            </ul>
          </div>

          <div
            className={`p-4 rounded-lg mt-4 ${
              darkMode ? "bg-gray-700" : "bg-green-50"
            }`}
          >
            <h4
              className={`font-semibold ${
                darkMode ? "text-green-300" : "text-green-800"
              }`}
            >
              English Content:
            </h4>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                Even native speakers have communication barriers due to accents
                (British vs Australian example)
              </li>
              <li>
                Chinglish can become your unique tag when you reach advanced
                level
              </li>
              <li>
                Confidence and content are more important than perfect
                pronunciation
              </li>
              <li>Key point: Don't fear your accent, just speak up</li>
            </ul>
          </div>

          <div
            className={`p-4 rounded-lg mt-4 ${
              darkMode ? "bg-gray-700" : "bg-yellow-50"
            }`}
          >
            <h4
              className={`font-semibold ${
                darkMode ? "text-yellow-300" : "text-yellow-800"
              }`}
            >
              口语障碍分析 / Speaking Barriers Analysis
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <h5 className="font-medium">中文：</h5>
                <p>
                  我发现很多东亚学习者不爱开口不是因为语言问题，而是性格习惯。其实用母语时他们也不爱闲聊。这完全没问题！你可以保持自己的说话风格，聊你真正感兴趣的话题。有趣的是，英语可能会帮你解锁新的人格——我的英语人格就更开放！
                </p>
              </div>
              <div>
                <h5 className="font-medium">English:</h5>
                <p>
                  Many East Asian learners don't speak much not because of
                  language ability but personality traits. They're also quiet in
                  native language. This is totally fine! Keep your style and
                  talk about what interests you. Interestingly, English may help
                  you discover a new personality—my English self is more
                  outgoing!
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2. 发音系统差异 / Pronunciation System Differences",
      content: (
        <div className="pl-6 space-y-6">
          <div
            className={`p-4 rounded-lg ${
              darkMode ? "bg-gray-700" : "bg-blue-50"
            }`}
          >
            <h4
              className={`font-semibold ${
                darkMode ? "text-blue-300" : "text-blue-800"
              }`}
            >
              中文内容：
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium">发音肌肉对比：</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div>
                    <h6 className="font-medium text-red-500">中文发音特点：</h6>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>嘴唇动作幅度小</li>
                      <li>主要使用口腔前部</li>
                      <li>较少使用喉咙震动</li>
                      <li>面部肌肉相对放松</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-medium text-green-500">
                      英语发音特点：
                    </h6>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>需要更大嘴型</li>
                      <li>频繁使用口腔后部</li>
                      <li>喉咙震动频繁</li>
                      <li>面部肌肉更活跃</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium">气流控制差异：</h5>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    <span className="font-medium">中文：</span>
                    气流主要从口腔中部通过，相对平缓
                  </li>
                  <li>
                    <span className="font-medium">英语：</span>
                    需要更强的气流控制，爆破音多
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "3. 元音发音训练 / Vowel Pronunciation",
      content: (
        <div className="pl-6 space-y-6">
          <div
            className={`p-4 rounded-lg ${
              darkMode ? "bg-gray-700" : "bg-purple-50"
            }`}
          >
            <h4
              className={`font-semibold ${
                darkMode ? "text-purple-300" : "text-purple-800"
              }`}
            >
              核心元音对照表
            </h4>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className={darkMode ? "bg-gray-600" : "bg-gray-100"}>
                  <tr>
                    <th className="px-4 py-2 text-left">音标</th>
                    <th className="px-4 py-2 text-left">示例单词</th>
                    <th className="px-4 py-2 text-left">发音技巧</th>
                    <th className="px-4 py-2 text-left">发音要点</th>
                  </tr>
                </thead>
                <tbody
                  className={`divide-y ${
                    darkMode ? "divide-gray-600" : "divide-gray-200"
                  }`}
                >
                  <tr> 前元音：舌尖抵下齿，舌前部隆起 </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/iː/</td>
                    <td className="px-4 py-2">sheep, see, eat</td>
                    <td className="px-4 py-2 text-green-600">
                      保持长音，多拉长一点，嘴角像微笑
                    </td>
                    <td className="px-4 py-2">
                      ①舌尖抵下齿背 ②舌前部用力隆起 ③嘴角向两侧拉伸（微笑状）
                    </td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ɪ/</td>
                    <td className="px-4 py-2">ship, sit, big</td>
                    <td className="px-4 py-2 text-green-600">
                      声音要短促轻松，不要拖长
                    </td>
                    <td className="px-4 py-2">
                      ①舌尖抵下齿 ②舌前部轻微抬起 ③下巴稍降（短促放松）
                    </td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/e/</td>
                    <td className="px-4 py-2">bed, head, red</td>
                    <td className="px-4 py-2 text-green-600">
                      嘴角微微张开，保持中等时长
                    </td>
                    <td className="px-4 py-2">
                      ①舌尖抵下齿 ②舌前部抬到中高位置 ③嘴唇微扁（微笑到一半）
                    </td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/æ/</td>
                    <td className="px-4 py-2">cat, bad, apple</td>
                    <td className="px-4 py-2 text-green-600">
                      嘴巴张大，下巴放松，声音更开阔
                    </td>
                    <td className="px-4 py-2">
                      ①舌尖紧贴下齿 ②嘴张大到两指宽 ③下巴大幅下拉（像检查喉咙）
                    </td>
                  </tr>

                  <tr>中元音：舌身平放，中部微微隆起 </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ɜː/</td>
                    <td className="px-4 py-2">bird, learn, girl</td>
                    <td className="px-4 py-2 text-green-600">
                      拉长声音，嘴唇自然放松
                    </td>
                    <td className="px-4 py-2">
                      ①舌身平放中部隆起 ②嘴唇自然放松 ③长音保持
                    </td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ə/</td>
                    <td className="px-4 py-2">about, sofa, pencil</td>
                    <td className="px-4 py-2 text-green-600">
                      轻声快速读过，不要用力
                    </td>
                    <td className="px-4 py-2">
                      ①最放松的中性音 ②短促模糊（像轻声"的"）
                    </td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ʌ/</td>
                    <td className="px-4 py-2">cup, luck, blood</td>
                    <td className="px-4 py-2 text-green-600">
                      嘴巴自然张开，声音要短而有力
                    </td>
                    <td className="px-4 py-2">
                      ①舌中部微微抬起 ②嘴唇放松不圆 ③短促有力
                    </td>
                  </tr>

                  <tr>后元音：舌身后缩，舌根靠近软腭 </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/uː/</td>
                    <td className="px-4 py-2">food, blue</td>
                    <td className="px-4 py-2 text-green-600">
                      嘴巴收圆，声音要拖长
                    </td>
                    <td className="px-4 py-2">双唇收圆突出，舌身后缩</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ʊ/</td>
                    <td className="px-4 py-2">good, put</td>
                    <td className="px-4 py-2 text-green-600">
                      保持短促，比/uː/更轻松
                    </td>
                    <td className="px-4 py-2">短促圆唇，比/uː/更放松</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ɔː/</td>
                    <td className="px-4 py-2">door, law</td>
                    <td className="px-4 py-2 text-green-600">
                      嘴唇收圆，声音稍微拖长
                    </td>
                    <td className="px-4 py-2">双唇收圆，舌身后缩隆起</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ɒ/</td>
                    <td className="px-4 py-2">hot, clock</td>
                    <td className="px-4 py-2 text-green-600">
                      短促有力，注意英式口型
                    </td>
                    <td className="px-4 py-2">短促圆唇，英音特有</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ɑː/</td>
                    <td className="px-4 py-2">car, far</td>
                    <td className="px-4 py-2 text-green-600">
                      嘴巴完全张开，声音要拉长
                    </td>
                    <td className="px-4 py-2">口腔完全打开，舌身后缩</td>
                  </tr>

                  <tr>双元音：从一个元音滑向另一个元音 </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/eɪ/</td>
                    <td className="px-4 py-2">day, face</td>
                    <td className="px-4 py-2 text-green-600">
                      从中间口型慢慢收小，清晰过渡
                    </td>
                    <td className="px-4 py-2">从/e/滑向/ɪ/，嘴角向两侧拉伸</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/aɪ/</td>
                    <td className="px-4 py-2">my, time</td>
                    <td className="px-4 py-2 text-green-600">
                      嘴巴先大后小，像中文"爱"但更自然
                    </td>
                    <td className="px-4 py-2">从/a/滑向/ɪ/，口腔由大到小</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ɔɪ/</td>
                    <td className="px-4 py-2">boy, coin</td>
                    <td className="px-4 py-2 text-green-600">
                      先圆唇，再慢慢张开，声音要滑动
                    </td>
                    <td className="px-4 py-2">从/ɔ/滑向/ɪ/，嘴唇先圆后扁</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/əʊ/</td>
                    <td className="px-4 py-2">go, home</td>
                    <td className="px-4 py-2 text-green-600">
                      嘴巴从松到圆，声音要顺滑
                    </td>
                    <td className="px-4 py-2">从/ə/滑向/ʊ/，嘴唇逐渐收圆</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/aʊ/</td>
                    <td className="px-4 py-2">now, house</td>
                    <td className="px-4 py-2 text-green-600">
                      嘴巴张大后收圆，声音饱满
                    </td>
                    <td className="px-4 py-2">从/a/滑向/ʊ/，双唇逐渐收圆</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ɪə/</td>
                    <td className="px-4 py-2">ear, here</td>
                    <td className="px-4 py-2 text-green-600">
                      从/ɪ/轻轻滑到/ə/，不要只发成单音
                    </td>
                    <td className="px-4 py-2">从/ɪ/滑向/ə/，英音特有</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/eə/</td>
                    <td className="px-4 py-2">air, there</td>
                    <td className="px-4 py-2 text-green-600">
                      口型要保持变化，声音自然过渡
                    </td>
                    <td className="px-4 py-2">从/e/滑向/ə/，英音特有</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ʊə/</td>
                    <td className="px-4 py-2">tour, pure</td>
                    <td className="px-4 py-2 text-green-600">
                      从/ʊ/快速过渡到/ə/，口型柔和
                    </td>
                    <td className="px-4 py-2">
                      从/ʊ/快速滑向/ə/，现代英语中较少见
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div
            className={`p-4 rounded-lg ${
              darkMode ? "bg-gray-700" : "bg-blue-50"
            }`}
          >
            <h4
              className={`font-semibold ${
                darkMode ? "text-blue-300" : "text-blue-800"
              }`}
            >
              元音练习阶梯
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <h5 className="font-medium text-lg mb-2">初级词汇</h5>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "cat",
                    "bed",
                    "sit",
                    "dog",
                    "bus",
                    "cup",
                    "hat",
                    "pen",
                    "big",
                  ].map((word) => (
                    <div
                      key={word}
                      className={`p-2 rounded text-center ${
                        darkMode ? "bg-gray-600" : "bg-white"
                      }`}
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="font-medium text-lg mb-2">高级词汇</h5>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "thorough",
                    "entrepreneur",
                    "phenomenon",
                    "ambiguous",
                    "architecture",
                    "particularly",
                    "vocabulary",
                    "exaggerate",
                    "miscellaneous",
                  ].map((word) => (
                    <div
                      key={word}
                      className={`p-2 rounded text-center ${
                        darkMode ? "bg-gray-600" : "bg-white"
                      }`}
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "3. 元音发音训练但邪修版 / Vowel Pronunciation",
      content: (
        <div className="pl-6 space-y-6">
          <div
            className={`p-4 rounded-lg ${
              darkMode ? "bg-gray-700" : "bg-purple-50"
            }`}
          >
            <h4
              className={`font-semibold ${
                darkMode ? "text-purple-300" : "text-purple-800"
              }`}
            >
              核心元音对照表
            </h4>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className={darkMode ? "bg-gray-600" : "bg-gray-100"}>
                  <tr>
                    <th className="px-4 py-2 text-left">音标</th>
                    <th className="px-4 py-2 text-left">示例单词</th>
                    <th className="px-4 py-2 text-left">发音技巧</th>
                    <th className="px-4 py-2 text-left">发音要点</th>
                  </tr>
                </thead>
                <tbody
                  className={`divide-y ${
                    darkMode ? "divide-gray-600" : "divide-gray-200"
                  }`}
                >
                  {/* 前元音 */}
                  <tr>前元音：嘴巴靠前，像在“笑”或“咧嘴”</tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/iː/</td>
                    <td className="px-4 py-2">sheep, see, eat</td>
                    <td className="px-4 py-2 text-green-600">
                      长长的“衣”，微笑拉开嘴角
                    </td>
                    <td className="px-4 py-2">
                      舌尖抵下齿 → 舌前顶上去 → 嘴角笑开
                    </td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ɪ/</td>
                    <td className="px-4 py-2">ship, sit, big</td>
                    <td className="px-4 py-2 text-green-600">
                      短短的“衣”，像突然哼一下
                    </td>
                    <td className="px-4 py-2">
                      舌尖抵下齿 → 舌头轻轻抬 → 下巴小动
                    </td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/e/</td>
                    <td className="px-4 py-2">bed, head, red</td>
                    <td className="px-4 py-2 text-green-600">
                      介于“诶”和“欸”，半笑
                    </td>
                    <td className="px-4 py-2">舌头中前抬 → 嘴角微笑到一半</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/æ/</td>
                    <td className="px-4 py-2">cat, bad, apple</td>
                    <td className="px-4 py-2 text-green-600">
                      大口“哎”，像看牙医喊“啊”
                    </td>
                    <td className="px-4 py-2">
                      嘴巴张到两指宽 → 下巴彻底掉下去
                    </td>
                  </tr>

                  {/* 中元音 */}
                  <tr>中元音：声音放中间，口型轻松</tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ɜː/</td>
                    <td className="px-4 py-2">bird, learn, girl</td>
                    <td className="px-4 py-2 text-green-600">
                      长长的“饿~”，嘴巴松开
                    </td>
                    <td className="px-4 py-2">
                      舌头平放 → 嘴唇放松 → 声音拖长
                    </td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ə/</td>
                    <td className="px-4 py-2">about, sofa, pencil</td>
                    <td className="px-4 py-2 text-green-600">
                      轻轻“呃”，像随口带过
                    </td>
                    <td className="px-4 py-2">全程最懒 → 模糊带过就行</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ʌ/</td>
                    <td className="px-4 py-2">cup, luck, blood</td>
                    <td className="px-4 py-2 text-green-600">
                      短促的“啊”，一股劲儿出来
                    </td>
                    <td className="px-4 py-2">
                      舌中间微抬 → 嘴唇放松 → 干脆利落
                    </td>
                  </tr>

                  {/* 后元音 */}
                  <tr>后元音：嘴巴往后，像含着东西</tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/uː/</td>
                    <td className="px-4 py-2">food, blue</td>
                    <td className="px-4 py-2 text-green-600">
                      长长的“乌~”，像吹气
                    </td>
                    <td className="px-4 py-2">嘴唇收圆凸出 → 舌头后缩</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ʊ/</td>
                    <td className="px-4 py-2">good, put</td>
                    <td className="px-4 py-2 text-green-600">
                      短促的“乌”，比/uː/更轻
                    </td>
                    <td className="px-4 py-2">圆唇但一闪而过</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ɔː/</td>
                    <td className="px-4 py-2">door, law</td>
                    <td className="px-4 py-2 text-green-600">
                      长长的“喔~”，嘴唇圆圆
                    </td>
                    <td className="px-4 py-2">嘴巴收圆 → 舌后缩抬</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ɒ/</td>
                    <td className="px-4 py-2">hot, clock</td>
                    <td className="px-4 py-2 text-green-600">
                      短短的“喔”，英音特色
                    </td>
                    <td className="px-4 py-2">嘴巴小圆 → 快速放声</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ɑː/</td>
                    <td className="px-4 py-2">car, far</td>
                    <td className="px-4 py-2 text-green-600">
                      大大的“啊”，拖长音
                    </td>
                    <td className="px-4 py-2">嘴巴完全张开 → 舌头后缩</td>
                  </tr>

                  {/* 双元音 */}
                  <tr>双元音：嘴型滑动，像变脸</tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/eɪ/</td>
                    <td className="px-4 py-2">day, face</td>
                    <td className="px-4 py-2 text-green-600">
                      “诶~衣”，嘴角渐渐拉开
                    </td>
                    <td className="px-4 py-2">/e/滑到/ɪ/ → 微笑收尾</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/aɪ/</td>
                    <td className="px-4 py-2">my, time</td>
                    <td className="px-4 py-2 text-green-600">
                      “啊~衣”，像喊“爱”
                    </td>
                    <td className="px-4 py-2">张大嘴 → 收小嘴</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ɔɪ/</td>
                    <td className="px-4 py-2">boy, coin</td>
                    <td className="px-4 py-2 text-green-600">
                      “喔~衣”，先圆后扁
                    </td>
                    <td className="px-4 py-2">嘴唇圆 → 慢慢扁开</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/əʊ/</td>
                    <td className="px-4 py-2">go, home</td>
                    <td className="px-4 py-2 text-green-600">
                      “额~乌”，像说“欧”
                    </td>
                    <td className="px-4 py-2">松到圆 → 顺滑收尾</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/aʊ/</td>
                    <td className="px-4 py-2">now, house</td>
                    <td className="px-4 py-2 text-green-600">
                      “啊~乌”，像喊“奥”
                    </td>
                    <td className="px-4 py-2">张大嘴 → 圆起来</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ɪə/</td>
                    <td className="px-4 py-2">ear, here</td>
                    <td className="px-4 py-2 text-green-600">
                      “衣~呃”，慢慢收口
                    </td>
                    <td className="px-4 py-2">/ɪ/滑到/ə/ → 英音特色</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/eə/</td>
                    <td className="px-4 py-2">air, there</td>
                    <td className="px-4 py-2 text-green-600">
                      “诶~呃”，嘴巴渐松
                    </td>
                    <td className="px-4 py-2">/e/滑到/ə/ → 平顺过渡</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ʊə/</td>
                    <td className="px-4 py-2">tour, pure</td>
                    <td className="px-4 py-2 text-green-600">
                      “乌~呃”，快速带过
                    </td>
                    <td className="px-4 py-2">/ʊ/滑到/ə/ → 现代英音少见</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div
            className={`p-4 rounded-lg ${
              darkMode ? "bg-gray-700" : "bg-blue-50"
            }`}
          >
            <h4
              className={`font-semibold ${
                darkMode ? "text-blue-300" : "text-blue-800"
              }`}
            >
              元音练习阶梯
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <h5 className="font-medium text-lg mb-2">初级词汇</h5>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "cat",
                    "bed",
                    "sit",
                    "dog",
                    "bus",
                    "cup",
                    "hat",
                    "pen",
                    "big",
                  ].map((word) => (
                    <div
                      key={word}
                      className={`p-2 rounded text-center ${
                        darkMode ? "bg-gray-600" : "bg-white"
                      }`}
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="font-medium text-lg mb-2">高级词汇</h5>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "thorough",
                    "entrepreneur",
                    "phenomenon",
                    "ambiguous",
                    "architecture",
                    "particularly",
                    "vocabulary",
                    "exaggerate",
                    "miscellaneous",
                  ].map((word) => (
                    <div
                      key={word}
                      className={`p-2 rounded text-center ${
                        darkMode ? "bg-gray-600" : "bg-white"
                      }`}
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "4. 辅音发音训练 / Consonant Pronunciation",
      content: (
        <div className="pl-6 space-y-6">
          <div
            className={`p-4 rounded-lg ${
              darkMode ? "bg-gray-700" : "bg-indigo-50"
            }`}
          >
            <h4
              className={`font-semibold ${
                darkMode ? "text-indigo-300" : "text-indigo-800"
              }`}
            >
              难点辅音对照表
            </h4>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className={darkMode ? "bg-gray-600" : "bg-gray-100"}>
                  <tr>
                    <th className="px-4 py-2 text-left">音标</th>
                    <th className="px-4 py-2 text-left">示例单词</th>
                    <th className="px-4 py-2 text-left">常见错误</th>
                    <th className="px-4 py-2 text-left">纠正方法</th>
                  </tr>
                </thead>
                <tbody
                  className={`divide-y ${
                    darkMode ? "divide-gray-600" : "divide-gray-200"
                  }`}
                >
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/θ/ /ð/</td>
                    <td className="px-4 py-2">think, this</td>
                    <td className="px-4 py-2 text-red-500">发成/s/或/f/</td>
                    <td className="px-4 py-2">舌尖轻触上齿，气流从缝隙挤出</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/v/</td>
                    <td className="px-4 py-2">very, love</td>
                    <td className="px-4 py-2 text-red-500">发成/w/</td>
                    <td className="px-4 py-2">上齿轻咬下唇，声带震动</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/r/</td>
                    <td className="px-4 py-2">red, car</td>
                    <td className="px-4 py-2 text-red-500">发成中文"日"</td>
                    <td className="px-4 py-2">舌尖卷起但不接触上颚</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/l/</td>
                    <td className="px-4 py-2">light, bell</td>
                    <td className="px-4 py-2 text-red-500">词尾发成"ou"</td>
                    <td className="px-4 py-2">舌尖抵上齿龈，保持口型</td>
                  </tr>
                  <tr className={darkMode ? "bg-gray-800" : "bg-white"}>
                    <td className="px-4 py-2 font-mono text-lg">/ŋ/</td>
                    <td className="px-4 py-2">sing, think</td>
                    <td className="px-4 py-2 text-red-500">发成/n/</td>
                    <td className="px-4 py-2">气流从鼻腔出，舌后部抬起</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div
            className={`p-4 rounded-lg ${
              darkMode ? "bg-gray-700" : "bg-green-50"
            }`}
          >
            <h4
              className={`font-semibold ${
                darkMode ? "text-green-300" : "text-green-800"
              }`}
            >
              辅音连读技巧
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <h5 className="font-medium text-lg mb-2">中文说明</h5>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">失去爆破：</span>
                    当两个爆破音(/p,b,t,d,k,g/)相连时，前一个只做口型不发音。如"big
                    girl"中/g/只做口型
                  </li>
                  <li>
                    <span className="font-medium">同化现象：</span>
                    /t/+/j/="ch"(如"meet you")，/d/+/j/="dg"(如"would you")
                  </li>
                  <li>
                    <span className="font-medium">连读规则：</span>
                    辅音结尾+元音开头时要连读，如"not at all"
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-lg mb-2">
                  English Explanation
                </h5>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Plosive reduction:</span> When
                    two plosives meet, the first is unreleased. E.g. "big girl"
                    /g/ is silent
                  </li>
                  <li>
                    <span className="font-medium">Assimilation:</span>{" "}
                    /t/+/j/="ch"(meet you), /d/+/j/="dg"(would you)
                  </li>
                  <li>
                    <span className="font-medium">Linking:</span> Connect
                    consonant + vowel between words, e.g. "not at all"
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={`min-h-screen p-6 ${bgColor} ${textColor}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <span className="text-4xl mr-3">🥑</span>
            <h1 className="text-3xl font-bold">
              第一周：发音系统训练 / Week 1: Pronunciation System
            </h1>
          </div>
        </div>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`border rounded-lg overflow-hidden ${borderColor}`}
            >
              <button
                onClick={() => toggleSection(index)}
                className={`w-full flex justify-between items-center p-4 font-medium text-left ${
                  expandedSections.includes(index)
                    ? sectionBg
                    : "hover:" + sectionBg
                }`}
              >
                <span className="text-lg">{section.title}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    expandedSections.includes(index) ? "rotate-180" : ""
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

        <div
          className={`mt-8 p-6 rounded-lg ${
            darkMode ? "bg-gray-800" : "bg-green-50"
          }`}
        >
          <h3
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-green-300" : "text-green-800"
            }`}
          >
            课后训练系统 / Practice System
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-lg mb-2">训练指南</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">肌肉训练：</span>
                  每天对着镜子练习英语嘴型5分钟，重点观察舌位
                </li>
                <li>
                  <span className="font-medium">录音对比：</span>
                  录制自己朗读的音频，与原声对比差距
                </li>
                <li>
                  <span className="font-medium">慢速练习：</span>
                  先用0.75倍速练习，确保每个音素准确
                </li>
                <li>
                  <span className="font-medium">使用键盘的语音识别：</span>
                  自己练习发音，然后看下机器能不能识别出来
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-2">
                English Practice Guide
              </h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Muscle training:</span> 5-min
                  daily mirror practice focusing on tongue position
                </li>
                <li>
                  <span className="font-medium">Record & compare:</span>{" "}
                  Contrast your recording with native audio
                </li>
                <li>
                  <span className="font-medium">Slow practice:</span> Start at
                  0.75x speed for accuracy
                </li>
                <li>
                  <span className="font-medium">Tongue twisters:</span> Practice
                  phrases like "She sells seashells"
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`mt-6 p-4 rounded-lg ${
              darkMode ? "bg-gray-700" : "bg-blue-50"
            }`}
          >
            <h4
              className={`font-semibold mb-2 ${
                darkMode ? "text-blue-300" : "text-blue-800"
              }`}
            >
              推荐自学材料
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              {[
                {
                  title: "BBC发音教程",
                  desc: "英式发音权威指导",
                  link: "https://www.bbc.co.uk/learningenglish",
                },
                {
                  title: "Rachel's English",
                  desc: "美式发音肌肉分解",
                  link: "https://rachelsenglish.com",
                },
                {
                  title: "英语流利说",
                  desc: "AI实时发音评分",
                  link: "https://www.liulishuo.com",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg block ${
                    darkMode
                      ? "bg-gray-600 hover:bg-gray-500"
                      : "bg-white hover:bg-blue-100"
                  } border ${borderColor}`}
                >
                  <h5 className="font-medium">{item.title}</h5>
                  <p className="text-sm mt-1">{item.desc}</p>
                </a>
              ))}
            </div>
          </div>

          <div
            className={`mt-6 p-4 rounded-lg ${
              darkMode ? "bg-gray-700" : "bg-blue-50"
            }`}
          >
            <h4
              className={`font-semibold mb-3 ${
                darkMode ? "text-blue-300" : "text-blue-800"
              }`}
            >
              元音系统训练 / Vowel System Practice
            </h4>

            {/* 周一：A字母的三种核心发音 */}
            <div
              className={`mb-4 p-3 rounded-lg ${
                darkMode ? "bg-gray-600" : "bg-white"
              } border ${borderColor}`}
            >
              <h5 className="font-medium flex items-center">
                <span
                  className={`inline-block w-8 h-8 rounded-full ${
                    darkMode ? "bg-blue-700" : "bg-blue-100"
                  } text-center leading-8 mr-2`}
                >
                  A
                </span>
                周一 / Monday - 字母A的三种发音
              </h5>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                {[
                  {
                    ipa: "/æ/",
                    name: "短音A",
                    example: "cat, apple",
                    tip: "嘴张大到两指宽，舌尖抵下齿",
                    video: "https://youtu.be/aa3L1P1bqU8",
                    commonError: "错误发成中文'爱'",
                  },
                  {
                    ipa: "/eɪ/",
                    name: "长音A",
                    example: "cake, name",
                    tip: "从/e/滑向/ɪ/，嘴角向两侧拉伸",
                    video: "https://youtu.be/f6j1D-ZHrlM",
                    commonError: "错误发成中文'诶'",
                  },
                  {
                    ipa: "/ɑː/",
                    name: "后元音A",
                    example: "car, father",
                    tip: "口腔完全打开，舌身后缩",
                    video: "https://youtu.be/aa3L1P1bqU8",
                    commonError: "错误发成中文'啊'",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg ${
                      darkMode ? "hover:bg-gray-500" : "hover:bg-blue-50"
                    } border ${borderColor}`}
                  >
                    <div className="flex justify-between">
                      <span
                        className={`font-mono text-lg ${
                          darkMode ? "text-yellow-300" : "text-yellow-600"
                        }`}
                      >
                        {item.ipa}
                      </span>
                      <span className="text-sm text-gray-500">{item.name}</span>
                    </div>
                    <p className="mt-1 font-medium">{item.example}</p>
                    <p className="text-xs mt-1">{item.tip}</p>
                    <p className="text-xs text-red-500 mt-1">
                      ⚠️ {item.commonError}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* 周二至周五其他元音 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {[
                {
                  day: "周二 / Tue",
                  vowel: "E",
                  sounds: [
                    { ipa: "/ɛ/", example: "bed, egg" },
                    { ipa: "/iː/", example: "see, tea" },
                  ],
                },
                {
                  day: "周三 / Wed",
                  vowel: "I",
                  sounds: [
                    { ipa: "/ɪ/", example: "sit, fish" },
                    { ipa: "/aɪ/", example: "time, bike" },
                  ],
                },
                {
                  day: "周四 / Thu",
                  vowel: "O",
                  sounds: [
                    { ipa: "/ɒ/", example: "dog, hot" },
                    { ipa: "/oʊ/", example: "go, home" },
                  ],
                },
                {
                  day: "周五 / Fri",
                  vowel: "U",
                  sounds: [
                    { ipa: "/ʌ/", example: "cup, sun" },
                    { ipa: "/uː/", example: "blue, food" },
                  ],
                },
              ].map((day, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg ${
                    darkMode ? "bg-gray-600" : "bg-white"
                  } border ${borderColor}`}
                >
                  <h5 className="font-medium flex items-center">
                    <span
                      className={`inline-block w-8 h-8 rounded-full ${
                        darkMode ? "bg-green-700" : "bg-green-100"
                      } text-center leading-8 mr-2`}
                    >
                      {day.vowel}
                    </span>
                    {day.day}
                  </h5>
                  <div className="mt-2 space-y-2">
                    {day.sounds.map((sound, j) => (
                      <a
                        key={j}
                        href={`https://rachelsenglish.com/search?q=${sound.ipa}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block p-2 rounded ${
                          darkMode ? "hover:bg-gray-500" : "hover:bg-blue-50"
                        }`}
                      >
                        <span className="font-mono">{sound.ipa}</span>
                        <span className="text-sm ml-2">{sound.example}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 周末复习 */}
            <div
              className={`mt-4 p-3 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-blue-100"
              } text-center`}
            >
              <p className="font-medium">周末复习建议 / Weekend Review</p>
              <p className="text-sm mt-1">
                1. 录制自己朗读所有例词
                <br />
                2. 对比Rachel的示范音频
                <br />
                3. 重点练习错误最多的音
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PronunciationCourseMaterial;
