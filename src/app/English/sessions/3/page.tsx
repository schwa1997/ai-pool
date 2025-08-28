import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  color: string;
}

const Section: React.FC<SectionProps> = ({ title, children, color }) => {
  return (
    <div className={`rounded-2xl shadow-md p-6 mb-6 border-l-8 ${color}`}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="text-lg leading-relaxed">{children}</div>
    </div>
  );
};

export default function SyllabusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b text-black from-blue-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-purple-700">
          英语口语入门教学大纲
        </h1>

        {/* 第一部分：基础语法（口语常用） */}
        <Section
          title="Part 1. 基础语法（口语常用）"
          color="border-blue-400 bg-blue-100"
        >
          <p className="font-semibold mb-4">
            目标：让学生能正确造句，不犯低级错误，句子简洁明了。
          </p>

          <div className="pl-6 space-y-4">
            <div>
              <h3 className="font-bold text-lg">1.1 句子基本结构</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>主语 + 谓语 + 宾语（I like coffee.）</li>
                <li>常见主语代词（I / you / he / she / we / they / it）</li>
                <li>常见谓语动词（be / have / like / go / do）</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg">1.2 Be 动词与一般动词</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>"I am a student." vs "I like English."</li>
                <li>
                  疑问句 & 否定句的口语形式（Are you …? / Do you …? / I don't
                  …）
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg">
                1.3 时态（口语最常用的三种）
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>一般现在时：I go to school every day.</li>
                <li>一般过去时：I went to school yesterday.</li>
                <li>现在进行时：I am going to school now.</li>
                <li className="italic">
                  （👉 只讲这三种就够，别一开始就搞复杂的完成时）
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg">1.4 常用句型框架</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>I want to …</li>
                <li>I like …</li>
                <li>I am …</li>
                <li>Can I … / Could you …</li>
                <li>Let's …</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg">1.5 常用疑问句</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Wh- questions（What / Where / When / Why / How）</li>
                <li>Yes/No questions（Do you …? / Are you …?）</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* 第二部分：避免 Chinglish（核心模块） */}
        <Section
          title="Part 2. 避免 Chinglish（核心模块）"
          color="border-green-400 bg-green-100"
        >
          <h3 className="font-bold text-lg mb-4">🔎 三大成因与解决办法</h3>

          <div className="pl-6 space-y-6">
            <div>
              <h4 className="font-bold">原因 1：直译思维（翻译中文 → 英文）</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">现象：</span>
                  脑子里第一反应是中文 → 翻译成英文 → 出现直译。
                </li>
                <li>
                  <span className="font-semibold">解决办法：</span>
                  <ul className="list-disc pl-6 mt-1">
                    <li>
                      从生活中最常见的表达入手（吃饭、上下班、点餐、见朋友）。
                    </li>
                    <li>
                      结合正确的语料，把"中文表达习惯"逐步替换成"英语表达习惯"。
                    </li>
                    <li>强调"越简单越地道"，避免过度翻译。</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">例子</span>
                  <ul className="list-disc pl-6 mt-1">
                    <li>中文思维：我今天下班之后点了外卖，在家吃。</li>
                    <li>
                      直译：Today after work I ordered takeout and ate at home.
                      （✔语法对，但偏"翻译腔"）
                    </li>
                    <li>
                      地道表达：I got takeout after work and ate at home. / I
                      just had some takeout at home after work.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">👉 教学方法：</span>
                  <ul className="list-disc pl-6 mt-1">
                    <li>"典型翻译版" vs "简单地道版"对照练习。</li>
                    <li>
                      学生尝试从自己日常中文语料里摘一句 → 翻成英文 →
                      老师帮他们"简化 + 本地化"。
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold">原因 2：文化差异（表达人格不同）</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">现象：</span>
                  中英文在表达情绪、态度、社交方式上差异明显。
                </li>
                <li>
                  <span className="font-semibold">解决办法：</span>
                  让学生理解并模仿"文化下的常用说法"，而不是死记硬背单词。
                </li>
                <li>
                  <span className="font-semibold">例子</span>
                  <ul className="list-disc pl-6 mt-1">
                    <li>中文：你吃了吗？（寒暄，不是真的问吃饭）</li>
                    <li>直译：Have you eaten? （听起来怪怪的）</li>
                    <li>地道：How's it going? / What's up?</li>
                    <li className="mt-2">中文：辛苦了。</li>
                    <li>直译：You worked hard.</li>
                    <li>
                      地道：Good job. / Thanks for your hard work. / I
                      appreciate it.
                    </li>
                    <li className="mt-2">中文：随便。</li>
                    <li>直译：Casual / Random.</li>
                    <li>地道：I don't mind. / Anything's fine with me.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">
                    👉 culture shock 小游戏：你觉得外国人会以为你在表达什么
                  </span>
                  <ul className="list-disc pl-6 mt-1">
                    <li>
                      你说 “I’m hot” →
                      外国人以为是“我很性感”，但你其实想说“我很热”。
                    </li>
                    <li>
                      你说 “I’m boring” →
                      外国人以为是“我是个无聊的人”，但你想说“我觉得无聊”。
                    </li>
                    <li>
                      你说 “Let’s play together” →
                      他们以为是“玩游戏”，但你只是想说“一起出去玩”。
                    </li>
                    <li>
                      还有更多深层次体现东西差异的 →
                      比如国外没有孝顺这个概念，感觉没有人能100%翻译好这个词语，除非懂东亚文化。
                      但是这个后期要很深层次才会接触到，希望你们哪天有机会可以碰到这些文化碰撞的时刻~
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold">
                原因 3：交流氛围差异（Small Talk vs 严肃对话）
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">现象：</span>
                  <ul className="list-disc pl-6 mt-1">
                    <li>中文语境 → 习惯开门见山，不聊琐事。</li>
                    <li>英语语境 → 有"闲聊文化"，尤其在朋友/同事关系中。</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">解决办法：</span>
                  <ul className="list-disc pl-6 mt-1">
                    <li>
                      在口语课里增加 Small Talk 训练（问候、天气、周末活动）。
                    </li>
                    <li>
                      但同时告诉学生：在 工作英语
                      中，准确比"闲聊"更重要（重点在专业和清晰表达）。
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">例子</span>
                  <ul className="list-disc pl-6 mt-1">
                    <li>
                      Small Talk：
                      <ul className="list-disc pl-6">
                        <li>A: Hey, how was your weekend?</li>
                        <li>B: Pretty good, I went hiking. How about you?</li>
                      </ul>
                    </li>
                    <li>
                      工作英语（直译法 + 准确性）：
                      <ul className="list-disc pl-6">
                        <li>中文：我已经把文件发到你邮箱了。</li>
                        <li>英文：I've sent the file to your email.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">👉 教学方法：</span>
                  <ul className="list-disc pl-6 mt-1">
                    <li>区分两种场景（"日常口语" vs "工作英语"）。</li>
                    <li>
                      日常口语 → 流畅自然，工作英语 → 语法正确 + 准确性优先。
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* 课堂活动 */}
        <Section title="邪修" color="border-pink-400 bg-pink-100">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              语法只看“时态 + 语序” 口语里最重要的语法就两块：
              时态（现在、过去、将来够用） 语序（主语 + 谓语 + 宾语 + 补充）
              其他复杂的什么虚拟语气、非谓语、定语从句，先全忽略。能说出来就行。
            </li>

            <li>
              人 + 动作
              是核心，其他都是“外挂”，想加什么就往后叠。再学一些常用替换词，就很快能让口语更自然。
            </li>
            <li>
              动作的表达最显得地道：可以刻意积累。问ai，最简单而且地道的表达是啥。
              比如吃饭，不说eat rice,说eat就行，eat lunch/dinner → have
              lunch/dinner go to buy → grab / get very good → pretty good /
              awesome want to → wanna，这个可以自己积累，慢慢输出，
              （我开玩笑，）先装会说，我笑。。说多了自己都信了。。
            </li>
            <li>
              下一步邪修，如何装abc， 想更自然，可以在开头或结尾加：
              态度：Honestly, Actually, To be honest, 感受：It was fun, It was
              tiring, It was awesome.(夸张表达)
            </li>
            <li>
              练习：每天用英语写/说三句话 → 不查语法 →
              第二天对照AI或语法检查修正。 错的地方才去看语法。
              原理：先有“错误的产出”，再修正，比一开始死啃规则更有效。
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
}
