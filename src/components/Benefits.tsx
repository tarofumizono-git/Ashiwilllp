import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Zap, Activity, Layers, Trophy, Scan, Dumbbell } from 'lucide-react';
import whyFootImg from 'figma:asset/550db67540e9fc35b2af20f8b3b5092a05353cf4.png';
import easyImg from 'figma:asset/d7f6eac579c36e1bfc5e4e2ab39291deeaf374cf.png';
import richImg from 'figma:asset/ee6dc1016f40e636fb5b16e5ff4ff1ce6771a79f.png';

export const Benefits = () => {
  const metrics = [
    { 
      value: "満足度90%以上", 
      label: "根本解決のアプローチ", 
      description: "対症療法ではなく、根本解決へ。\n足元から原因を特定するアプローチが、\n90%以上の被験者に確かな変化をもたらしました。",
      image: whyFootImg,
      icon: Activity,
      color: "text-blue-400"
    },
    { 
      value: "解析1分以内", 
      label: "圧倒的な手軽さ", 
      description: "スキャン10秒、AI解析30秒。\nわずか1分で完了するスピードが、\n現場のオペレーションを止めずに価値を生み出します。",
      image: easyImg,
      icon: Zap,
      color: "text-yellow-400"
    },
    { 
      value: "20項目以上", 
      label: "豊富な情報量", 
      description: "圧力分布だけでなく、重心の偏りや指の接地まで。\n画像解析だからこそ可能な20以上の指標で、\n足の状態を丸裸にします。",
      image: richImg,
      icon: Layers,
      color: "text-purple-400"
    },
    { 
      value: "学習データ1万件以上", 
      label: "AIによる見える化の強み", 
      description: "1万件を超える足裏データを学習したAIが、\n熟練のトレーナーでも見抜けない微細な予兆まで検知。\n他に類を見ない精度を実現しました。",
      image: "https://images.unsplash.com/photo-1764258057610-be7ca21a0978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGRhdGElMjB2aXN1YWxpemF0aW9uJTIwZnV0dXJpc3RpYyUyMHNjYW5uaW5nfGVufDF8fHx8MTc2NDkyMjM0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Scan,
      color: "text-cyan-400"
    },
    { 
      value: "エクササイズ100件以上", 
      label: "改善メニューの提案", 
      description: "解析して終わりではありません。\n100種類以上の専門メソッドから、\nその足に最適な改善プランを自動提案します。",
      image: "https://images.unsplash.com/photo-1729281008800-539686eaedc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwcGVyc29uYWwlMjB0cmFpbmVyJTIwdGFibGV0JTIwZ3ltfGVufDF8fHx8MTc2NDkyMjM1MHww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Dumbbell,
      color: "text-green-400"
    },
  ];

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden border-y border-white/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-4xl md:text-5xl font-bold text-white"
          >
            なぜ、Ashiwillなのか。
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            選ばれる5つの理由があります。
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative perspective-[1000px] w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-md"
            >
              <div className="relative bg-[#111] border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/20 transform-style-3d group-hover:translate-y-[-10px] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] h-full flex flex-col">
                {/* Image Area */}
                <div className="h-56 relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10" />
                  <ImageWithFallback 
                    src={metric.image} 
                    alt={metric.label} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center shadow-lg">
                    <metric.icon className={`w-5 h-5 ${metric.color}`} />
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="p-8 pt-2 relative flex-1">
                  <div className="absolute -top-12 left-8">
                     <div 
                       className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 tracking-tighter drop-shadow-lg"
                       style={{ fontFamily: 'var(--font-display)' }}
                     >
                       {metric.value}
                     </div>
                  </div>
                  
                  <div className="mt-8 space-y-3">
                    <h3 className="text-xl text-white font-bold flex items-center gap-2">
                      {metric.label}
                    </h3>
                    <div className="w-12 h-0.5 bg-white/10 group-hover:w-full group-hover:bg-blue-500/50 transition-all duration-500" />
                    <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap pt-2">
                      {metric.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/5 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};