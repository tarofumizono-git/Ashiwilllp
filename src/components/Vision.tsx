import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Database, Globe } from 'lucide-react';

export const Vision = () => {
  return (
    <section className="py-40 px-6 bg-black relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-40">
         <ImageWithFallback
             src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBkYXRhJTIwbmV0d29yayUyMGRhcmt8ZW58MXx8fHwxNzY0ODE5MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
             alt="Global Data Network"
             className="w-full h-full object-cover"
         />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      
      {/* Animated Light Lines (Overlay) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-20 space-y-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-white"
        >
          足元から、<br/>
          世界の健康データを<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">つなぐ。</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-1 bg-blue-500 mx-auto rounded-full"
        />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
        >
          Ashiwillは、単なる測定ツールではありません。<br/>
          世界中の足裏データを集積し、解析することで、<br className="hidden md:block" />
          メーカーや医療機関と共に<span className="text-white font-medium">「予防医療の未来」</span>を創る<br/>
          データプラットフォームを目指しています。
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pt-10"
        >
          <p className="text-3xl md:text-4xl text-white font-bold tracking-tight">
            その一歩が、人類の健康資産になる。
          </p>
        </motion.div>
      </div>
    </section>
  );
};
