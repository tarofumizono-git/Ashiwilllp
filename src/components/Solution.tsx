import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Scan, Footprints, Activity, Ruler, Thermometer } from 'lucide-react';
import ashiwillImage from 'figma:asset/fac7737cb8fdab3a18f0d4d5a19d253f0133a81c.png';
import shapeAnalysisImg from 'figma:asset/f03136b81e051412419136dde38681d04c35a9b4.png';
import groundAnalysisImg from 'figma:asset/a885adc67e561c7d2c69ac1e2deef4bce3c3082e.png';
import skinAnalysisImg from 'figma:asset/92fd4566ed867cd0eacf71b70c1345c710188810.png';

export const Solution = () => {
  const analysisTypes = [
    {
      title: "形状分析",
      tags: ["輪郭形状", "拇指角度", "小指角度", "足の長さ"],
      image: shapeAnalysisImg,
      delay: 0.1
    },
    {
      title: "接地分析",
      tags: ["五指の接地", "足の長さ", "指の付け根の接地", "内外側アーチ接地"],
      image: groundAnalysisImg,
      delay: 0.2
    },
    {
      title: "皮膚分析",
      tags: ["皮膚の固さ", "マメ/魚の目", "皮膚の乾燥"],
      image: skinAnalysisImg,
      delay: 0.3
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#111111] text-white relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background elements if needed */}
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Sticky Header & Scanner Image */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-medium text-gray-400 mb-4 tracking-wider"
              >
                FLOW 01
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15]"
              >
                3つの観点で<br />
                10個以上の特徴を<br />
                瞬時に抽出
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square w-full max-w-[500px]"
            >
               {/* Background Glow */}
               <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full" />
               
               {/* Scanner Grid Effect */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] rounded-2xl border border-white/10" />

               <ImageWithFallback
                 src={ashiwillImage}
                 alt="Scanner"
                 className="relative z-10 w-full h-full object-contain p-8 drop-shadow-2xl"
               />
            </motion.div>
          </div>

          {/* Right Side - Analysis Cards */}
          <div className="space-y-4">
            {analysisTypes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="group bg-[#1A1A1A] rounded-xl border border-white/5 overflow-hidden hover:border-white/10 transition-colors"
              >
                <div className="grid md:grid-cols-[1.3fr,1fr] items-stretch h-full">
                  {/* Content */}
                  <div className="p-5 flex flex-col justify-center gap-3">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 bg-[#2A2A2A] text-gray-300 text-[10px] md:text-xs rounded hover:bg-[#333] transition-colors cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Image Area */}
                  <div className="relative h-32 md:h-auto min-h-[120px] bg-black border-t md:border-t-0 md:border-l border-white/5 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1A1A1A]/30 z-10 pointer-events-none" />
                    <div className="w-full h-full p-3 flex items-center justify-center">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
