import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const FAQ = () => {
  const faqs = [
    {
      question: "導入にあたり、特別な機材は必要ですか？",
      answer: "はい、Ashiwill専用の足裏スキャナーをご利用いただきます。スキャナーに乗るだけで、短時間かつ高精度な撮影・解析が可能になります。"
    },
    {
      question: "専門的な知識がなくても使えますか？",
      answer: "はい、もちろんです。撮影から解析まで直感的な操作で完結するように設計されています。アルバイトスタッフの方でも、導入初日から高精度な解析と提案が可能になります。"
    },
    {
      question: "解析にかかる時間はどのくらいですか？",
      answer: "撮影は10秒程度、アップロード後の解析は数秒で完了します。お客様をお待たせすることなく、スムーズなカウンセリングフローを実現できます。"
    },
    {
      question: "複数の店舗で導入できますか？",
      answer: "はい、複数店舗での一括管理も可能です。本部機能として、各店舗の解析データや利用状況をダッシュボードで確認できるプランもご用意しております。"
    },
    {
      question: "最低契約期間はありますか？",
      answer: "基本プランは年間契約となっておりますが、トライアル導入向けの短期プランもご相談可能です。詳しくはお問い合わせください。"
    }
  ];

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-white">よくあるご質問</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-white/10 bg-[#111] rounded-xl px-6 data-[state=open]:border-blue-500/30 data-[state=open]:bg-[#161616] transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline hover:text-blue-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
