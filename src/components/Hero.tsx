import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import dashboardImage from 'figma:asset/778055ff5e9f07db8801b3f167ce0de5e5395975.png';

export const Hero = () => {
  return (
    <section className="relative min-h-[110vh] flex items-center pt-40 pb-32 px-6 overflow-hidden bg-black">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Main Glow Effects - More vibrant */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] -z-10 opacity-60 pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[1000px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] -z-10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Text Content - Left Side (5 cols) */}
        <div className="lg:col-span-5 text-center lg:text-left space-y-8 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <span className="text-7xl lg:text-9xl font-black tracking-tighter text-white/90 -ml-1">
              Ashiwill
            </span>
            <span className="text-4xl lg:text-6xl font-bold tracking-tighter leading-[1.1] text-white/80">
              足元から、<br/>
              世界を<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                変える。
              </span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            ジム、整体、企業の健康経営まで。<br/>
            AI解析SaaS「Ashiwill」が、画像一枚で足裏を解析し、
            最適なケアを提案するソリューションを提供します。
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 pt-4"
          >
            <Button size="lg" className="bg-white text-black hover:bg-blue-50 text-lg h-14 px-8 rounded-full font-bold min-w-[240px] shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-1">
              今すぐ無料で試す
            </Button>
             <Button variant="ghost" className="text-white hover:text-blue-400 hover:bg-white/5 text-lg h-14 px-8 rounded-full gap-2 border border-white/10">
               資料ダウンロード <ChevronRight size={20} />
            </Button>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.8 }}
             className="flex items-center justify-center lg:justify-start gap-6 pt-6 text-sm text-muted-foreground/80"
          >
             <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>初期費用 ¥0</span>
             </div>
             <div className="w-px h-4 bg-white/10"/>
             <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>月額 ¥40,000 〜</span>
             </div>
          </motion.div>
        </div>

        {/* Dashboard Image - Right Side (7 cols) - 3D Perspective Effect */}
        <div className="lg:col-span-7 relative perspective-[2000px] group pl-0 lg:pl-10 mt-10 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, rotateX: 20, rotateY: -20, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, rotateX: 5, rotateY: -12, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10 transform-style-3d transition-transform duration-700 lg:hover:rotate-y-[-5deg] lg:hover:rotate-x-[2deg]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Floating UI Badge - Analysis Accuracy */}
            <motion.div 
               initial={{ opacity: 0, x: -40, y: 20 }}
               animate={{ opacity: 1, x: 0, y: 0 }}
               transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
               className="absolute -left-4 top-20 z-30 bg-[#111]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl hidden lg:block translate-z-20"
            >
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                     <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">AI Analysis</div>
                     <div className="text-lg font-bold text-white">圧倒的な精度を体験する</div>
                  </div>
               </div>
            </motion.div>

            {/* Laptop Body */}
            <div className="relative w-full transform-style-3d">
               {/* Screen */}
               <div className="relative rounded-t-2xl bg-[#050505] border-[1px] border-white/10 p-2 pb-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
                  {/* Bezel Details */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-3 bg-black rounded-b-lg z-20 flex items-center justify-center gap-2 border-x border-b border-white/5">
                     <div className="w-1 h-1 rounded-full bg-[#333]" />
                     <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] ring-1 ring-white/10" />
                  </div>
                  
                  {/* Display Content */}
                  <div className="rounded-t-lg overflow-hidden bg-black aspect-[16/10] relative border border-white/5">
                     <ImageWithFallback
                       src={dashboardImage}
                       alt="Ashiwill Dashboard Interface"
                       className="w-full h-full object-cover object-top"
                     />
                     {/* Screen Reflection/Gloss */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-10" />
                  </div>
               </div>
               
               {/* Keyboard Base */}
               <div className="relative h-6 bg-[#151515] rounded-b-2xl w-[102%] -ml-[1%] shadow-2xl border-t-0 border-b border-x border-white/10 flex justify-center items-end pb-1.5">
                  <div className="w-40 h-1 bg-white/10 rounded-full" />
               </div>
            </div>
            
            {/* Enhanced Background Glow behind laptop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 blur-[120px] -z-10 mix-blend-screen" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
