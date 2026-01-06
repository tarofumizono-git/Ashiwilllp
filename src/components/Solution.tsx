import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, Scan, Move3d, Activity } from 'lucide-react';
import ashiwillImage from 'figma:asset/fac7737cb8fdab3a18f0d4d5a19d253f0133a81c.png';
import analysisImage from 'figma:asset/72677c0c8cd904ffc474ec4339d55263f4b9e963.png';

export const Solution = () => {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
       {/* Background Grid & Glow */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20 pointer-events-none" />
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold tracking-tighter text-white"
          >
            見えなかったものを、<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">可視化する。</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            感覚による評価から、データによる分析へ。<br/>
            AIが足元の状態を客観的に可視化します。
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Ashiwill UI */}
          <motion.div 
            initial={{ opacity: 0, x: -40, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative perspective-[1000px] group"
          >
            <div className="absolute -top-5 left-6 bg-blue-600 px-4 py-2 rounded-full text-sm text-white font-bold border border-blue-400 z-20 shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center gap-2">
              <Sparkles className="w-4 h-4 fill-current" /> Ashiwill AI
            </div>
            
            <div className="bg-gradient-to-b from-gray-900 to-black border border-blue-500/30 rounded-3xl overflow-hidden h-[550px] -mt-6 relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-transform duration-700 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] group-hover:border-blue-500/50">
              <ImageWithFallback
                 src={ashiwillImage}
                 alt="Ashiwill Analysis"
                 className="w-full h-full object-cover opacity-90 scale-105 group-hover:scale-100 transition-transform duration-1000"
               />
              
              {/* Active Analysis UI Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              
              {/* Floating Badges */}
              <div className="absolute top-16 right-6 space-y-3 flex flex-col items-end">
                <motion.div 
                  whileHover={{ x: -5 }}
                  className="bg-black/40 backdrop-blur-md border border-blue-500/40 px-4 py-2 rounded-xl text-xs text-blue-200 flex items-center gap-3 w-fit shadow-lg"
                >
                  <Move3d className="w-4 h-4 text-blue-400" />
                  <span>足圧分布 (Pressure)</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: -5 }}
                  className="bg-black/40 backdrop-blur-md border border-teal-500/40 px-4 py-2 rounded-xl text-xs text-teal-200 flex items-center gap-3 w-fit shadow-lg"
                >
                  <Activity className="w-4 h-4 text-teal-400" />
                  <span>足部形状 (Shape)</span>
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
                <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                   High Resolution
                </h3>
                <p className="text-base text-blue-100/80 leading-relaxed">
                  「タコ・ウオノメ」「浮き指の角度」「アーチの崩れ」など、<br/>
                  目視では捉えきれない特徴をすべて可視化。
                </p>
              </div>
            </div>
            
            {/* Glow behind the active card */}
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl -z-10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>

          {/* Right Side - Analysis Details */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <ImageWithFallback
              src={analysisImage}
              alt="AI Analysis Features"
              className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
            />
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto text-center bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
        >
          <p className="text-xl text-muted-foreground leading-relaxed">
            「足の裏の写真」は、その人の人生（歩き方の癖）そのもの。<br/>
            AIはそこから、<span className="text-white font-bold border-b border-blue-500">将来のリスクまでも予測します。</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
