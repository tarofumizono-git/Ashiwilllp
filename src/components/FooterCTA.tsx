import React from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CalendarCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const FooterCTA = () => {
  return (
    <section className="relative py-40 px-6 overflow-hidden bg-black border-t border-white/10">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-60" />
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-blue-900/10 to-transparent -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-5xl md:text-7xl font-bold tracking-tighter text-white"
        >
          その精度を、<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">体感する。</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          その目で、精度をお確かめください。<br/>
          まずは無料のオンラインデモへ。
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-10 py-8 rounded-full font-bold gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-1">
            <CalendarCheck size={20} />
            無料デモ・商談を予約
          </Button>
          <Button variant="ghost" className="text-white hover:text-blue-400 hover:bg-white/5 text-lg px-10 py-8 rounded-full gap-2 border border-white/10">
            資料ダウンロード <ArrowRight size={20} />
          </Button>
        </motion.div>

        {/* Dashboard Preview removed as requested */}
      </div>
      
      {/* Footer Info */}
      <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-muted-foreground text-sm max-w-7xl mx-auto px-6">
        <p>&copy; 2025 Ashiwill. All rights reserved.</p>
        <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">会社概要</a>
            <a href="#" className="hover:text-white transition-colors">利用規約</a>
            <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors">お問い合わせ</a>
        </div>
      </div>
    </section>
  );
};
