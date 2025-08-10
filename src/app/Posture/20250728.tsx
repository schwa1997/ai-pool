import React from 'react';
import Image from 'next/image';

const Posture = () => {
  return (
    <div className="mx-auto px-4 py-4 font-noto-sans-sc" style={{ width: '500px', height: '750px' }}>
      {/* 帖子1：为什么小孩骨盆前倾不痛 */}
      <div className="mb-16 overflow-hidden">
        <div className="relative h-64 w-full">
          <Image
            src="https://www.shutterstock.com/ima ge-photo/naked-baby-walking-studio-shot-600nw-1064477180.jpg"
            alt="儿童自然骨盆前倾"
            layout="fill"
            objectFit="cover"
            unoptimized // For external image URL
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold text-center px-4">
              为什么小孩骨盆前倾却不腰痛？
            </h2>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-700 mb-4 text-lg">
            大多数儿童都有轻微骨盆前倾，但这属于<span className="bg-green-100 px-1 rounded">正常</span>发育现象：
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
            <li>婴幼儿<u className="decoration-green-400 decoration-wavy">腰椎曲度</u>未完全发育，是胎儿蜷缩姿势的延续</li>
            <li><u className="decoration-green-400 decoration-wavy">腹背肌群</u>力量较弱，<u className="decoration-green-400 decoration-wavy">髋屈肌</u>相对紧张</li>
            <li><u className="decoration-green-400 decoration-wavy">骨骼软骨</u>弹性高，能缓冲姿势压力</li>
            <li>日常活动多样，不会长期保持<u className="decoration-green-400 decoration-wavy">单一姿势</u></li>
          </ul>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <p className="text-green-800 font-medium">📌 关键区别：儿童组织修复能力强，不会积累微损伤</p>
          </div>
        </div>
      </div>

      {/* 帖子2：儿童与成人对比表格 */}
      <div className="mb-16 bg-white  shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-green-400 to-emerald-600 p-6">
          <h2 className="text-white text-2xl font-bold">儿童 vs 成人骨盆健康对比</h2>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-6 py-3 text-left font-medium text-green-800">对比项</th>
                  <th className="px-6 py-3 text-left font-medium text-green-800">儿童</th>
                  <th className="px-6 py-3 text-left font-medium text-green-800">成人</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">组织弹性</td>
                  <td className="px-6 py-4">高（<u className="decoration-green-300 decoration-wavy">软骨多</u>，修复快）</td>
                  <td className="px-6 py-4">低（<u className="decoration-green-300 decoration-wavy">椎间盘退化</u>）</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">活动模式</td>
                  <td className="px-6 py-4"><u className="decoration-green-300 decoration-wavy">多样化</u>，自然调整</td>
                  <td className="px-6 py-4"><u className="decoration-green-300 decoration-wavy">久坐</u>、姿势固定</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">疼痛反应</td>
                  <td className="px-6 py-4">几乎无<u className="decoration-green-300 decoration-wavy">慢性疼痛</u></td>
                  <td className="px-6 py-4">易出现<u className="decoration-green-300 decoration-wavy">腰痛</u></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-green-100 p-4 rounded-lg">
            <p className="text-green-800 font-medium">💡 成人启示：模仿儿童的自然活动模式，避免久坐</p>
          </div>
        </div>
      </div>

      {/* 帖子3：骨盆发育阶段卡片组 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">骨盆发育的四个关键阶段</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* 阶段1 */}
          <div className="bg-white p-6  shadow-md border-t-4 border-green-300">
            <h3 className="font-bold text-lg mb-2 text-green-600">婴儿期（0-1岁）</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <u className="decoration-green-200 decoration-wavy">自然前倾</u>：延续胎儿蜷缩姿势</li>
              <li>• <u className="decoration-green-200 decoration-wavy">功能</u>：保护内脏，为爬行准备</li>
            </ul>
          </div>
          
          {/* 阶段2 */}
          <div className="bg-white p-6  shadow-md border-t-4 border-green-400">
            <h3 className="font-bold text-lg mb-2 text-green-700">学步期（1-3岁）</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 开始<u className="decoration-green-200 decoration-wavy">直立行走</u></li>
              <li>• <u className="decoration-green-200 decoration-wavy">核心肌群</u>逐步增强</li>
              <li>• 需避免长期<u className="decoration-green-200 decoration-wavy">W型坐姿</u></li>
            </ul>
          </div>

          {/* 阶段3 */}
          <div className="bg-white p-6  shadow-md border-t-4 border-green-500">
            <h3 className="font-bold text-lg mb-2 text-green-800">儿童期（3-10岁）</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <u className="decoration-green-200 decoration-wavy">骨盆位置</u>趋于中立</li>
              <li>• 运动促进<u className="decoration-green-200 decoration-wavy">肌肉平衡</u></li>
            </ul>
          </div>

          {/* 阶段4 */}
          <div className="bg-white p-6  shadow-md border-t-4 border-emerald-600">
            <h3 className="font-bold text-lg mb-2 text-emerald-800">青春期（10岁+）</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 骨骼接近<u className="decoration-green-200 decoration-wavy">成人形态</u></li>
              <li>• <u className="decoration-green-200 decoration-wavy">生长突增</u>可能引发暂时性肌肉紧张</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 帖子4：成人腰痛预防指南 */}
      <div className="mb-16 bg-white  shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-lime-400 to-green-600 p-6">
          <h2 className="text-white text-2xl font-bold">从儿童骨盆发育学到的腰痛预防法</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-700 mb-2">💪 肌肉平衡</h3>
              <p>• 拉伸<u className="decoration-green-300 decoration-wavy">紧张的髋屈肌</u></p>
              <p>• 强化<u className="decoration-green-300 decoration-wavy">臀肌和腹肌</u></p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2">🏃 活动模式</h3>
              <p>• 每1小时<u className="decoration-green-300 decoration-wavy">起身活动</u></p>
              <p>• 融入<u className="decoration-green-300 decoration-wavy">复合运动</u>（游泳/瑜伽）</p>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-700 mb-2">⚠️ 特别注意</h3>
            <p>儿童期<u className="decoration-green-300 decoration-wavy">体态问题</u>（如脊柱侧弯）可能在成年后表现为腰痛，建议：</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>30岁前进行<u className="decoration-green-300 decoration-wavy">体态筛查</u></li>
              <li>办公室使用<u className="decoration-green-300 decoration-wavy">人体工学腰靠</u></li>
              <li>避免<u className="decoration-green-300 decoration-wavy">葛优躺</u>等不良姿势</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 帖子5：行动清单 */}
      <div className="bg-white  shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-400 to-teal-600 p-6">
          <h2 className="text-white text-2xl font-bold">骨盆健康行动清单</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <span className="text-green-800 font-bold">1</span>
              </div>
              <p className="text-gray-700">每天30分钟<u className="decoration-green-300 decoration-wavy">复合运动</u>（快走+拉伸）</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <span className="text-green-800 font-bold">2</span>
              </div>
              <p className="text-gray-700">每周3次<u className="decoration-green-300 decoration-wavy">核心训练</u>（臀桥/平板支撑）</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <span className="text-green-800 font-bold">3</span>
              </div>
              <p className="text-gray-700">调整<u className="decoration-green-300 decoration-wavy">办公环境</u>（站立办公桌/腰靠）</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <span className="text-green-800 font-bold">4</span>
              </div>
              <p className="text-gray-700">学习儿童<u className="decoration-green-300 decoration-wavy">玩的状态</u>：保持运动多样性</p>
            </div>
          </div>
          <div className="mt-6 bg-green-100 p-4 rounded-lg">
            <p className="text-green-800 font-medium">✨ 核心原则：<u className="decoration-green-400 decoration-wavy">平衡肌肉力量</u> + <u className="decoration-green-400 decoration-wavy">多样化活动</u> + <u className="decoration-green-400 decoration-wavy">及时纠正体态</u></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posture;