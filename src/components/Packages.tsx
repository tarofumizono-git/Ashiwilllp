import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { User, Users, Layers, ArrowRight } from 'lucide-react';

export const Packages = () => {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="mb-6 text-4xl md:text-5xl font-bold text-white">成功へ導く、2つのモデル。</h2>
          <p className="text-xl text-muted-foreground">目的に合わせて選べる、2つの活用モデル。</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Model A: Counseling */}
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#111] hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.1)]"
          >
             <div className="h-72 overflow-hidden relative">
                <ImageWithFallback
                   src="https://images.unsplash.com/photo-1734668484998-c943d1fcb48a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb3Vuc2VsaW5nJTIwZ3ltJTIwZGFya3xlbnwxfHx8fDE3NjQ4MTM2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                   alt="Counseling Model"
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-8">
                   <div className="bg-blue-600/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white inline-flex items-center gap-1 mb-3 shadow-lg">
                     <User size={12} /> 1 on 1
                   </div>
                   <h3 className="text-3xl font-bold text-white">1対1パッケージ</h3>
                </div>
             </div>
             <div className="p-8 space-y-6">
                <div className="flex items-center gap-2 text-xs text-blue-400 font-bold uppercase tracking-wider border-b border-white/5 pb-4">
                  パーソナルジム・メディカルフィットネス向け
                </div>
                <div className="space-y-2">
                   <div className="text-lg text-white font-bold flex items-center gap-2">
                      特化: 詳細分析 & LTV向上
                      <ArrowRight className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                   </div>
                   <p className="text-muted-foreground leading-relaxed text-sm">
                     入会時診断や定期カウンセリングに。詳細な解析レポートと改善エクササイズで、トレーナーと会員の深い信頼関係を構築します。
                   </p>
                </div>
             </div>
          </motion.div>

          {/* Model B: Event */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#111] hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.1)]"
          >
             <div className="h-72 overflow-hidden relative">
                <ImageWithFallback
                   src="https://images.unsplash.com/photo-1602827114685-efbb2717da9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZXZlbnQlMjBncm91cCUyMGNsYXNzJTIwZ3ltfGVufDF8fHx8MTc2NDgxMzY5NHww&ixlib=rb-4.1.0&q=80&w=1080"
                   alt="Event Model"
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-8">
                   <div className="bg-purple-600/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white inline-flex items-center gap-1 mb-3 shadow-lg">
                     <Users size={12} /> 1 to Many
                   </div>
                   <h3 className="text-3xl font-bold text-white">1対多パッケージ</h3>
                </div>
             </div>
             <div className="p-8 space-y-6">
                <div className="flex items-center gap-2 text-xs text-purple-400 font-bold uppercase tracking-wider border-b border-white/5 pb-4">
                  イベント・健康フェア向け
                </div>
                <div className="space-y-2">
                   <div className="text-lg text-white font-bold flex items-center gap-2">
                      特化: リード獲得 & ライトフィットネス
                      <ArrowRight className="w-4 h-4 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                   </div>
                   <p className="text-muted-foreground leading-relaxed text-sm">
                     「1対多のエクササイズパッケージ」＆「toCアプリとの連動でエンゲージメントアップ」を提供し、誰でも手軽にフィットネス体験をスタートできます。
                   </p>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
