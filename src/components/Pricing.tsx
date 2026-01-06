import React from 'react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

export const Pricing = () => {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
       {/* Subtle Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="mb-6 text-4xl md:text-5xl font-bold text-white"
        >
           料金プラン
        </motion.h2>
        <motion.p 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="text-xl text-muted-foreground mb-20"
        >
           数百万円の測定機器はもう不要です。
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group max-w-lg mx-auto"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-[2.5rem] blur-sm opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient-x" />
          
          <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 md:p-14 overflow-hidden shadow-2xl">
            {/* Inner Background highlight */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="text-center mb-10">
              <div className="space-y-6">
                <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">Business Plan</p>
                
                <div className="flex items-center justify-center">
                  <span 
                    className="text-7xl md:text-8xl font-bold text-white tracking-tighter"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    ASK
                  </span>
                </div>
                
                <div className="space-y-2">
                    <p className="text-lg text-white font-medium">
                        定額課金制（サブスクリプション）
                    </p>
                    <p className="text-sm text-muted-foreground">
                        ご要望に応じてお見積もりいたします
                    </p>
                </div>
              </div>
            </div>

            <Button className="w-full bg-white text-black hover:bg-gray-200 py-7 text-lg rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-transform active:scale-95">
              お問い合わせ
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};