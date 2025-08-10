"use client";

import { useState } from 'react';

// 完整的发音卡片数据
const pronunciationCards = {
  vowels: [
    { front: "CAT /æ/", back: "【æ】嘴巴张大，下巴下降，舌头平放。类似中文「艾」但嘴更大" },
    { front: "SEE /iː/", back: "【iː】嘴角向两边伸展，像微笑。保持长音。类似中文「衣」但更长" },
    { front: "HOT /ɒ/", back: "【ɒ】嘴唇稍圆，舌身后缩。英音特有，美音读作/ɑː/" },
    { front: "BOOT /uː/", back: "【uː】双唇圆而突出，像吹口哨。类似中文「乌」但更长" },
    { front: "ABOUT /ə/", back: "【ə】放松的短元音（弱读元音），嘴唇舌头完全放松" }
  ],
  consonants: [
    { front: "SHIP /ʃ/", back: "【ʃ】双唇微圆前突，舌身抬起靠近上颚但不接触" },
    { front: "VISION /ʒ/", back: "【ʒ】舌位同/ʃ/但声带振动（中文无此音，易混淆为「日」）" },
    { front: "THINK /θ/", back: "【θ】舌尖轻触上齿，气流从缝隙挤出（清音）" },
    { front: "THIS /ð/", back: "【ð】舌位同/θ/但声带振动（中文无此音）" },
    { front: "LIGHT /l/", back: "【l】舌尖抵上齿龈，气流从两侧通过（词尾的/l/容易漏发）" }
  ],
  challenges: [
    { front: "TREE /triː/", back: "【tr】中文无此组合，避免发成「chu」。舌身卷起接近上颚" },
    { front: "JEEP /dʒiːp/", back: "【dʒ】不是「吉」。舌尖先顶住上颚再突然放开" },
    { front: "WORLD /wɜːld/", back: "【ɜː】+【ld】注意：1. 卷舌元音 2. 词尾必须发完整/l/+/d/" },
    { front: "CLOTHES /kləʊðz/", back: "【ðz】1. 咬舌音+复数 2. 常被误读为/kləʊz/" },
    { front: "ANGRY /ˈæŋɡri/", back: "【ŋɡ】鼻音后紧跟/g/，中文习惯会漏掉/g/音" }
  ]
};

export default function PronunciationCards() {
  const [activeGroup, setActiveGroup] = useState<'vowels' | 'consonants' | 'challenges'>('vowels');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCards = pronunciationCards[activeGroup];
  const currentCard = currentCards[currentCardIndex];

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentCardIndex((prev) => (prev + 1) % currentCards.length);
    }, 300);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentCardIndex((prev) => (prev - 1 + currentCards.length) % currentCards.length);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">英语发音训练卡</h1>
      
      {/* 分组导航 */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => { setActiveGroup('vowels'); setCurrentCardIndex(0); setIsFlipped(false); }}
          className={`px-4 py-2 rounded-md transition ${activeGroup === 'vowels' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-gray-100'}`}
        >
          元音组
        </button>
        <button
          onClick={() => { setActiveGroup('consonants'); setCurrentCardIndex(0); setIsFlipped(false); }}
          className={`px-4 py-2 rounded-md transition ${activeGroup === 'consonants' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-gray-100'}`}
        >
          辅音组
        </button>
        <button
          onClick={() => { setActiveGroup('challenges'); setCurrentCardIndex(0); setIsFlipped(false); }}
          className={`px-4 py-2 rounded-md transition ${activeGroup === 'challenges' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-gray-100'}`}
        >
          难度组
        </button>
      </div>

      {/* 卡片容器 */}
      <div className="max-w-md mx-auto mb-8 perspective-1000">
        <div 
          className={`relative h-64 w-full transition-transform duration-700 transform-gpu ${isFlipped ? 'rotate-y-180' : ''}`}
          onClick={() => setIsFlipped(!isFlipped)}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* 卡片正面 */}
          <div 
            className="absolute inset-0 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center backface-hidden"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-2">{currentCard.front.split(' ')[0]}</h2>
            <p className="text-gray-500">{currentCard.front.split(' ')[1]}</p>
            <p className="mt-4 text-gray-400">点击翻转</p>
          </div>
          
          {/* 卡片背面 */}
          <div 
            className="absolute inset-0 bg-blue-50 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center backface-hidden"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-4">发音要点</h3>
            <p className="text-gray-700 text-center leading-relaxed">{currentCard.back}</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition"
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
            >
              返回正面
            </button>
          </div>
        </div>
      </div>

      {/* 导航按钮 */}
      <div className="flex justify-center gap-4">
        <button 
          onClick={prevCard}
          className="px-6 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
        >
          上一张
        </button>
        <span className="px-4 py-2 flex items-center">
          {currentCardIndex + 1} / {currentCards.length}
        </span>
        <button 
          onClick={nextCard}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          下一张
        </button>
      </div>

      {/* 当前组说明 */}
      <div className="mt-8 max-w-2xl mx-auto text-center text-gray-600">
        {activeGroup === 'vowels' && (
          <p>元音组：英语有12个单元音，中文只有6个，特别注意口型差异</p>
        )}
        {activeGroup === 'consonants' && (
          <p>辅音组：英语有24个辅音，其中/θ ð ʒ/等是中文没有的音</p>
        )}
        {activeGroup === 'challenges' && (
          <p>难度组：针对中国学习者常见难点，特别注意辅音连缀和词尾发音</p>
        )}
      </div>
    </div>
  );
}