import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Dumbbell, Activity, Building2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import gymBeforeImg from 'figma:asset/607b717e278e5eb93439c681b0c9adc22131204c.png';
import clinicBeforeImg from 'figma:asset/9952e9741e407352771b642012bb7e9171e4163d.png';
import eventBeforeImg from 'figma:asset/bb86b7b0b7c2957128c55997c6738e62ac1c1fa6.png';
import gymAfterImg from 'figma:asset/efb4e419c81e48557b7845c2beafc8e5fb12a343.png';
import clinicAfterImg from 'figma:asset/e01d74fc5994938c6aac2aa267e47a6edc263a17.png';
import eventAfterImg from 'figma:asset/f904853242b5afe1a54bdc582e2450ec01a82763.png';
import { cn } from '../lib/utils';

export const BeforeAfter = () => {
  const cases = [
    {
      title: "Fitness Gym",
      subtitle: "フィットネスジム",
      icon: Dumbbell,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      before: {
        image: gymBeforeImg,
        title: "感覚頼りの指導",
        points: [
          "「なんとなく」のアドバイス",
          "効果の実感が遅く、3ヶ月で退会",
          "トレーナーによる指導のバラつき"
        ]
      },
      after: {
        image: gymAfterImg,
        title: "データに基づく提案",
        points: [
          "数値で納得感のある指導へ",
          "変化が可視化され、継続率向上",
          "新人でも質の高いアドバイスが可能"
        ]
      }
    },
    {
      title: "Chiropractic",
      subtitle: "整体・整骨院",
      icon: Activity,
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      borderColor: "border-teal-500/20",
      before: {
        image: clinicBeforeImg,
        title: "対処療法のみ",
        points: [
          "痛みの箇所の施術だけで終わる",
          "根本原因が患者に伝わりにくい",
          "回数券の販売につながらない"
        ]
      },
      after: {
        image: clinicAfterImg,
        title: "根本改善のパートナー",
        points: [
          "足元から全身の歪みを特定",
          "患者自身が原因を理解し納得",
          "LTV（顧客生涯価値）の最大化"
        ]
      }
    },
    {
      title: "Corporate Wellness",
      subtitle: "健康経営・企業",
      icon: Building2,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      before: {
        image: eventBeforeImg,
        title: "形骸化した施策",
        points: [
          "1人あたりの測定時間が長く、昼休みに長蛇の列ができる",
          "リモートワークの普及で、社員間の交流や雑談が希薄化",
          "「時間がない」「着替えが面倒」を言い訳に、習慣化されない"
        ]
      },
      after: {
        image: eventAfterImg,
        title: "全社員参加型のアクション",
        points: [
          "撮影10秒・解析30秒。待ち時間ストレス「ゼロ」の運用へ",
          "「私、ネコタイプだ！」動物診断で、社内の会話量が2倍に",
          "スーツ・デスク作業のままでOK。スキマ時間で「自走」する健康習慣"
        ]
      }
    }
  ];

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-900/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            劇的な<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Before / After</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground">
            Ashiwillの導入が、ビジネスの課題をどう解決するのか。
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid md:grid-cols-[300px_1fr] gap-6 items-stretch"
            >
              {/* Industry Header Card */}
              <div className={`rounded-2xl p-8 flex flex-col justify-center items-start ${item.bg} border ${item.borderColor} relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`w-12 h-12 rounded-xl ${item.bg} border ${item.borderColor} flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                <p className={`text-sm font-medium ${item.color}`}>{item.subtitle}</p>
              </div>

              {/* Comparison Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Before */}
                <div className="bg-[#111] border border-white/5 rounded-2xl relative overflow-hidden flex flex-col group/before">
                  {/* Image Header */}
                  <div className="relative h-48 w-full shrink-0 border-b border-white/5">
                     <div className="absolute top-0 left-0 w-full h-1 bg-red-500/30 z-20" />
                     <ImageWithFallback 
                        src={item.before.image} 
                        alt="Before Situation" 
                        className="w-full h-full object-cover opacity-80 grayscale transition-all duration-700 group-hover/before:grayscale-0 group-hover/before:opacity-100" 
                     />
                     <div className="absolute inset-0 bg-[#111]/40 mix-blend-multiply transition-opacity duration-500" />
                     
                     <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-red-400 text-xs font-bold border border-red-500/30 shadow-lg">BEFORE</span>
                     </div>
                  </div>

                  <div className="p-6 md:p-8 flex-1">
                    <h4 className="text-lg font-bold text-white/90 mb-4">{item.before.title}</h4>
                    <ul className="space-y-4">
                      {item.before.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground/80 text-sm">
                          <X className="w-4 h-4 text-red-500/50 mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* After */}
                <div className="bg-[#111] border border-blue-500/20 rounded-2xl relative overflow-hidden group flex flex-col">
                  {/* Image Header */}
                  <div className="relative h-48 w-full shrink-0 border-b border-blue-500/20">
                     <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 z-20" />
                     <ImageWithFallback 
                        src={item.after.image} 
                        alt="After Situation" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                     />
                     <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                     
                     <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur text-white text-xs font-bold shadow-lg flex items-center gap-1">
                          AFTER <SparklesIcon className="w-3 h-3" />
                        </span>
                     </div>
                  </div>

                  <div className="p-6 md:p-8 flex-1 relative">
                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    
                    <h4 className="text-lg font-bold text-white mb-4 relative z-10">{item.after.title}</h4>
                    <ul className="space-y-4 relative z-10">
                      {item.after.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/90 text-sm font-medium">
                          <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-blue-400" />
                          </div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Arrow indicating transformation */}
                    <div className="absolute top-1/2 -left-3 -translate-y-1/2 hidden md:flex items-center justify-center w-6 h-6 rounded-full bg-[#222] border border-white/10 z-20 text-muted-foreground shadow-xl">
                       <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);
