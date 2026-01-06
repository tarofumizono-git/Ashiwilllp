import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AlertCircle } from 'lucide-react';

export const Problem = () => {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
       {/* Darker Red Glow for Problem Section */}
       <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
       
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group perspective-[1000px]"
        >
          {/* Card Container with 3D effect on hover */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-white/10 bg-[#111] shadow-2xl transform transition-transform duration-700 group-hover:rotate-y-[5deg] group-hover:scale-[1.02]">
             <ImageWithFallback
               src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB0cmFpbmVyJTIwZXhwbGFpbmluZyUyMHByb2JsZW18ZW58MXx8fHwxNzY0ODE3MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
               alt="Problem Situation"
               className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-40 transition-opacity duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
             
             <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
               <motion.div 
                 initial={{ scale: 0.8, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 transition={{ delay: 0.4, duration: 0.5 }}
                 className="w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center mb-6 backdrop-blur-sm border border-red-500/30"
               >
                  <span className="text-6xl font-bold text-red-500 font-display">?</span>
               </motion.div>
               <h3 className="text-3xl font-bold text-white mb-2">Missing Link</h3>
               <p className="text-red-400 font-mono text-sm uppercase tracking-widest">The Root Cause</p>
             </div>
          </div>
          
          {/* Decorative background blob */}
          <div className="absolute -inset-4 bg-red-500/20 blur-2xl -z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-3xl" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/20 px-4 py-1.5 mb-2 backdrop-blur-md">
             <AlertCircle className="w-4 h-4 text-red-400" />
             <span className="text-sm font-medium text-red-200">Fundamental Issue</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            「感覚」だけの指導で、<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              限界を感じていませんか？
            </span>
          </h2>
          
          <div className="space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              ジムの会員継続率、整体のリピート率、企業の健康経営。<br/>
              あらゆるシーンで共通する課題は、<br/>
              「指導や効果の根拠」が曖昧なことにあります。
            </p>
            
            <div className="relative pl-8 py-2 group">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-500 to-transparent group-hover:w-1 transition-all duration-300" />
              <p className="text-2xl text-white font-medium leading-relaxed">
                痛みや不調、モチベーション低下の<span className="text-red-400 font-bold">"根本原因"</span>は、<br/>
                実は「足元」に隠れています。
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground">
              経験則だけの指導では、納得感は生まれません。<br/>
              今必要なのは、誰もが理解できる「客観的なデータ」です。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
