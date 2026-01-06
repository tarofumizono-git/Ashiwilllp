import React from 'react';
import { motion } from 'motion/react';
import { ScanEye, PersonStanding, Smartphone } from 'lucide-react';

export const AboutService = () => {
  const features = [
    {
      step: "01",
      icon: ScanEye,
      title: "10秒で状態を「可視化」",
      description: "「感覚的な説明だけでは納得できない」という声に応えます。足裏の接地データから、骨盤の傾きや全身バランスの傾向をAIが解析。今のあなたの状態、優先課題、改善の進め方をまとめた「あなただけの身体のガイドブック」として提供し、不調の要因を客観的に「見える化」します。",
      color: "text-blue-400",
      gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
      border: "group-hover:border-blue-500/30"
    },
    {
      step: "02",
      icon: PersonStanding,
      title: "習慣から整えて「痛みのない生活へ」",
      description: "一時しのぎのマッサージではなく、生活習慣そのものにアプローチします。あなたのタイプに合わせた最適な運動プログラムを提示し、日常動作のクセを見直し。3ヶ月を目安に身体の変化を感じる方も多く、続けるほどに「自分で整えて維持できる」状態を目指します。",
      color: "text-teal-400",
      gradient: "from-teal-500/10 via-teal-500/5 to-transparent",
      border: "group-hover:border-teal-500/30"
    },
    {
      step: "03",
      icon: Smartphone,
      title: "施設でチェック、自宅で継続。",
      description: "スキャンは導入施設で、日々のケアは好きな場所で。ジムや整体院などで定期的に状態をチェックし、日々のトレーニングはスマホを見ながら自宅やオフィスで実施。施設でのケアと自宅での継続を組み合わせることで、無理なく習慣化しやすく、効率よく理想のコンディションに近づけます。",
      color: "text-indigo-400",
      gradient: "from-indigo-500/10 via-indigo-500/5 to-transparent",
      border: "group-hover:border-indigo-500/30"
    }
  ];

  return (
    <section className="py-32 px-6 bg-black text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Area */}
        <div className="max-w-4xl mx-auto text-center mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-medium text-blue-200 tracking-wide uppercase">AI Conditioning</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1] text-white"
          >
            「なぜつらいのか」の手がかりを10秒で可視化し、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400">「痛みに悩まない身体」</span>づくりへ導く<br className="hidden md:block" />
            AIコンディショニング
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto"
          >
            <p className="mb-6">
              Ashiwill（アシウィル）は、足裏の接地状態を10秒でAI解析し、身体のバランスや負担のかかり方をスコアと画像で可視化するサービスです。
            </p>
            <p className="mb-6">
              「また痛くなった」「いつ治るかわからない」という不安に対し、理学療法の知見に基づく解析ロジックと、PT監修のパーソナライズ運動（1回15分）をご提案。日常動作のクセを整える習慣づくりをサポートし、一時しのぎではない、快適に動ける身体を目指します。
            </p>
            <p className="text-sm text-gray-600 mt-8">
              ※本サービスは医療機器による診断・治療を行うものではありません。痛みや症状が強い場合は医療機関にご相談ください。
            </p>
          </motion.div>
        </div>

        {/* Features Area */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (index * 0.1) }}
              className={`group relative bg-[#050505] rounded-[2rem] p-8 border border-white/5 ${feature.border} transition-all duration-500 hover:bg-[#0a0a0a] flex flex-col`}
            >
              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]`} />
              
              {/* Large Step Number Background */}
              <div className="absolute top-4 right-6 text-[8rem] font-bold text-white/[0.02] leading-none pointer-events-none select-none font-sans tracking-tighter group-hover:text-white/[0.04] transition-colors duration-500">
                {feature.step}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Box */}
                <div className="mb-6 relative">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors duration-500 relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20`} />
                    <feature.icon className={`w-6 h-6 ${feature.color} relative z-10`} />
                  </div>
                  {/* Step Indicator Small */}
                  <div className="absolute -top-3 -left-2 text-xs font-mono text-gray-500 bg-black border border-white/10 px-2 py-0.5 rounded-full">
                    STEP {feature.step}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight pr-8">
                  {feature.title}
                </h3>
                
                <div className="text-gray-400 text-sm leading-7 flex-1 font-light">
                  {feature.description}
                </div>

                {/* Bottom decorative line */}
                <div className={`mt-6 h-0.5 w-12 bg-white/10 rounded-full group-hover:w-full group-hover:bg-gradient-to-r ${feature.gradient.replace('to-transparent', '')} transition-all duration-700`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
