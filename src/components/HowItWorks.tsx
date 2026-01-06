import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import analyzeImg from 'figma:asset/778055ff5e9f07db8801b3f167ce0de5e5395975.png';
import proposeImg from 'figma:asset/8b561b4f27f113ca7365971945002d9c5761d3bd.png';
import { ArrowRight } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      image: "https://images.unsplash.com/photo-1730732862473-dba100ea08b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdWx0YXRpb24lMjBmaXRuZXNzJTIwdHJhaW5lciUyMGNsaWVudCUyMGlwYWR8ZW58MXx8fHwxNzY0OTIyOTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "アセスメント",
      subtitle: "Assessment",
      description: "Ashiwillの理論に基づいて\n現状の課題を深くヒアリング。",
      delay: 0
    },
    {
      image: analyzeImg,
      title: "スキャン・解析",
      subtitle: "Scan & Analyze",
      description: "わずか数秒でAIが重心・足圧を可視化。\n客観的データが現状理解を深めます。",
      delay: 0.1
    },
    {
      image: proposeImg,
      title: "最適プラン提案",
      subtitle: "Propose",
      description: "納得感のある改善プランを提示。\n「なぜやるのか」が明確になり、迷いが消えます。",
      delay: 0.2
    },
    {
      image: "https://images.unsplash.com/photo-1738523686878-e63f7d95dabf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBtb3RpdmF0aW5nJTIwY2xpZW50JTIwZ3ltfGVufDF8fHx8MTc2NDkyMzEwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "3ヶ月の伴走",
      subtitle: "Engagement",
      description: "定期測定で変化を実感。\n成果が見えるからモチベーションが落ちず、\n3ヶ月間しっかり継続できます。",
      delay: 0.3
    },
    {
      image: "https://images.unsplash.com/photo-1696861270495-7f35c35c3273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvbmZpZGVudCUyMGJ1c2luZXNzJTIwc2hha2luZyUyMGhhbmRzJTIwc3VjY2VzcyUyMGRhcmt8ZW58MXx8fHwxNzY0OTIyOTA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "課題解決・定着",
      subtitle: "Achievement",
      description: "根本課題を解決し、LTVが向上。\n一過性ではない、生涯顧客としての関係を築きます。",
      delay: 0.4
    }
  ];

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
        {/* Background gradients & Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold text-white">ご利用の流れ</h2>
          <p className="text-xl text-muted-foreground">成果にコミットする、3ヶ月の伴走プロセス。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.delay }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Connector Line (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-[50%] w-full h-px bg-gradient-to-r from-blue-500/20 to-transparent z-0" />
              )}

              <div className="w-full aspect-[4/3] rounded-2xl bg-[#111] border border-white/10 overflow-hidden mb-6 shadow-2xl relative transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <ImageWithFallback 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Step Number Badge */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center text-white font-bold z-20 shadow-lg">
                  {index + 1}
                </div>
              </div>
              
              <div className="space-y-2 mb-3 w-full">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs font-bold text-blue-500 tracking-widest uppercase">{step.subtitle}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
              </div>
              
              <p className="text-muted-foreground text-xs leading-relaxed w-full whitespace-pre-wrap px-2">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};