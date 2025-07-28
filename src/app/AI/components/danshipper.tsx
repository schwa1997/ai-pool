import React from 'react';
import Image from 'next/image';

interface PostCoverProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  onClick?: () => void;
}

const PostCover: React.FC<PostCoverProps> = ({ 
  title = "Dan Shipper: AI如何颠覆内容创业",
  subtitle = "揭秘内容平台年入百万的AI杠杆策略", 
  imageUrl = "https://i.ytimg.com/vi/km3CxFRODFs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA9A55zGE0XRS0kiMqrhg2Lh8GIQg",
  onClick 
}) => {
  // 高亮函数
  const highlightAI = (text: string) => text.replace(/AI/g, '<span class="bg-indigo-600 text-white px-1 py-0.5 rounded-md">AI</span>');
  const highlightPremium = (text: string) => text.replace(/高端/g, '<span class="underline decoration-indigo-600 decoration-2 underline-offset-4 font-semibold">高端</span>');

  const successPoints = [
    {icon: "🚀", text: "创立Every平台，高端商业写作订阅服务"},
    {icon: "🤖", text: "AI驱动内容规模化生产，效率提升300%"},
    {icon: "💸", text: "$250/年订阅模式，创造高质量社群"},
    {icon: "🧠", text: "AI增强人类创作，保持内容独特性"},
    {icon: "📈", text: "7位数年收入的可复制商业模式"}
  ];

  const viralHashtags = [
    { text: "#内容创业3.0", rotate: "-rotate-2" },
    { text: "#AI印钞机", rotate: "rotate-1" },
    { text: "#订阅制致富", rotate: "-rotate-3" },
    { text: "#知识付费巅峰", rotate: "rotate-2" },
    { text: "#7位数密码", rotate: "-rotate-1" }
  ];

  return (
    <div className="flex w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden group transition-all duration-500 hover:shadow-indigo-100/50">
      {/* 主内容区 (占2/3宽度) */}
      <div 
        className="flex-1 cursor-pointer transition-transform duration-500 hover:scale-[1.01]"
        onClick={onClick}
      >
        {/* 图片部分 */}
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            quality={90}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          {/* 图片上的标题 */}
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h2 
              className="text-4xl font-bold mb-3 drop-shadow-lg"
              dangerouslySetInnerHTML={{ __html: highlightAI(title) }}
            />
            <p 
              className="text-xl font-medium text-indigo-100 drop-shadow-md"
              dangerouslySetInnerHTML={{ __html: highlightAI(subtitle) }}
            />
          </div>
        </div>

        {/* 内容部分 */}
        <div className="p-8 bg-gradient-to-br from-white to-gray-50">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-5 flex items-center">
              <span className="bg-indigo-600 text-white p-2 rounded-full mr-3">🔍</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                成功路径解密
              </span>
            </h3>
            <ul className="space-y-4">
              {successPoints.map((point, index) => (
                <li 
                  key={index} 
                  className="flex items-start p-1 rounded-lg transition-all hover:bg-indigo-50 hover:shadow-sm"
                >
                  <span className="text-2xl mr-4">{point.icon}</span>
                  <span 
                    className="text-gray-800 font-medium text-lg"
                    dangerouslySetInnerHTML={{ __html: highlightPremium(highlightAI(point.text)) }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 右侧Hashtag栏 (占1/3宽度) */}
      <div className="w-1/3 bg-gradient-to-b from-indigo-50 to-purple-50 p-6 flex flex-col justify-center space-y-6 border-l border-gray-200">
        <div className="text-center mb-4">
          <span className="inline-block bg-indigo-600 text-white text-sm px-3 py-1 rounded-full mb-2">
            创业者必看
          </span>
          <h3 className="text-2xl font-bold text-gray-800">病毒式传播点</h3>
        </div>
        
        {viralHashtags.map((tag, index) => (
          <div 
            key={index}
            className={`text-3xl font-extrabold text-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${tag.rotate}`}
            style={{
              background: `linear-gradient(45deg, ${index % 2 === 0 ? '#6366f1' : '#8b5cf6'}, ${index % 2 === 0 ? '#a855f7' : '#ec4899'})`,
              color: 'white',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            {tag.text}
          </div>
        ))}

      </div>
    </div>
  );
};

export default PostCover;