import React from 'react';
import Slider from "react-slick";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronRight, Building2 } from 'lucide-react';
import { Button } from './ui/button';

export const CaseStudies = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const cases = [
    {
      company: "株式会社GENKIDO様",
      title: "多店舗展開におけるサービス品質と顧客満足度向上の秘訣とは",
      description: "データの可視化でトレーナーのスキル統一と顧客満足度向上を実現。",
      tags: ["整骨院", "多店舗展開", "人材育成"],
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHl8ZW58MXx8fHwxNzY0ODEzNjk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      company: "株式会社グラン・スポール様",
      title: "定着率2ヶ月UP！データの可視化でトレーナーのスキル統一",
      description: "感覚的な指導から、データに基づく納得感のある指導へシフト。",
      tags: ["パーソナルジム", "フィットネス", "定着率改善"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB0cmFpbmVyJTIwbWFsZXxlbnwxfHx8fDE3NjQ4MTM2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      company: "TOPPAN株式会社 様",
      title: "健康経営イベントにAshiwillを取り入れ社員の意識向上に",
      description: "社内イベントで200名を測定。健康への関心を高めるきっかけに。",
      tags: ["健康経営", "企業イベント", "福利厚生"],
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGhlYWx0aHxlbnwxfHx8fDE3NjQ4MTM2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      company: "タニタフィッツミー 様",
      title: "健康の数値化に姿勢分析を加え、新たな会員サービスへ",
      description: "30分フィットネスに「足元の健康」という新しい価値を付加。",
      tags: ["女性専用ジム", "サーキット", "付加価値"],
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGZpdG5lc3N8ZW58MXx8fHwxNzY0ODEzNjk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      company: "住友生命保険相互会社 様",
      title: "お客様へのお声がけ、関係構築のきっかけに",
      description: "イベントでの集客フックとして活用。自然な会話を生み出すツール。",
      tags: ["保険業界", "営業支援", "コミュニケーション"],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBhZ2VudCUyMHRhbGtpbmd8ZW58MXx8fHwxNzY0ODEzNjk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      company: "株式会社LIFE CREATE 様",
      title: "月1回の姿勢チェックでモチベーション維持",
      description: "定期的な測定イベントが、会員様の来店動機付けに貢献。",
      tags: ["ホットヨガ", "リテンション", "定期イベント"],
      image: "https://images.unsplash.com/photo-1599447421405-0c325d26d77e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwY2xhc3MlMjBncm91cHxlbnwxfHx8fDE3NjQ4MTM2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-white">導入事例</h2>
          <p className="text-muted-foreground">様々な業種・規模のお客様にご活用いただいています。</p>
        </div>

        <div className="case-studies-slider -mx-4">
          <Slider {...settings}>
            {cases.map((item, index) => (
              <div key={index} className="px-4 pb-12 pt-2">
                <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden group hover:border-blue-500/30 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300 h-full flex flex-col">
                  
                  {/* Image Area */}
                  <div className="h-48 overflow-hidden relative">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.company}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-white mb-1">{item.company}</h3>
                    </div>

                    <h4 className="text-sm font-bold text-blue-100 mb-4 line-clamp-2 min-h-[40px]">
                      {item.title}
                    </h4>

                    <p className="text-xs text-muted-foreground mb-6 line-clamp-2 flex-1">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 rounded-md bg-white/5 text-[10px] text-gray-300 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex justify-end">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="rounded-full border-white/10 hover:bg-white/5 text-white px-8">
            導入事例一覧を見る
          </Button>
        </div>
      </div>

      <style>{`
        /* Slick Carousel Core Styles */
        .slick-slider {
            position: relative;
            display: block;
            box-sizing: border-box;
            user-select: none;
            touch-action: pan-y;
            -webkit-tap-highlight-color: transparent;
        }
        .slick-list {
            position: relative;
            display: block;
            overflow: hidden;
            margin: 0;
            padding: 0;
        }
        .slick-list:focus {
            outline: none;
        }
        .slick-list.dragging {
            cursor: pointer;
            cursor: hand;
        }
        .slick-slider .slick-track,
        .slick-slider .slick-list {
            transform: translate3d(0, 0, 0);
        }
        .slick-track {
            position: relative;
            top: 0;
            left: 0;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        .slick-track:before,
        .slick-track:after {
            display: table;
            content: '';
        }
        .slick-track:after {
            clear: both;
        }
        .slick-loading .slick-track {
            visibility: hidden;
        }
        .slick-slide {
            display: none;
            float: left;
            height: 100%;
            min-height: 1px;
        }
        [dir='rtl'] .slick-slide {
            float: right;
        }
        .slick-slide img {
            display: block;
        }
        .slick-slide.slick-loading img {
            display: none;
        }
        .slick-slide.slick-dragging img {
            pointer-events: none;
        }
        .slick-initialized .slick-slide {
            display: block;
        }
        .slick-loading .slick-slide {
            visibility: hidden;
        }
        .slick-vertical .slick-slide {
            display: block;
            height: auto;
            border: 1px solid transparent;
        }
        .slick-arrow.slick-hidden {
            display: none;
        }

        /* Custom Theme Styles */
        .case-studies-slider .slick-dots {
            position: absolute;
            bottom: -35px;
            display: block;
            width: 100%;
            padding: 0;
            margin: 0;
            list-style: none;
            text-align: center;
        }
        .case-studies-slider .slick-dots li {
            position: relative;
            display: inline-block;
            width: 20px;
            height: 20px;
            margin: 0 5px;
            padding: 0;
            cursor: pointer;
        }
        .case-studies-slider .slick-dots li button {
            font-size: 0;
            line-height: 0;
            display: block;
            width: 20px;
            height: 20px;
            padding: 5px;
            cursor: pointer;
            color: transparent;
            border: 0;
            outline: none;
            background: transparent;
        }
        .case-studies-slider .slick-dots li button:before {
            content: '•';
            font-family: sans-serif;
            font-size: 40px; /* Larger dots for better touch */
            line-height: 20px;
            position: absolute;
            top: 0;
            left: 0;
            width: 20px;
            height: 20px;
            text-align: center;
            opacity: 0.25;
            color: white;
            transition: all 0.3s;
        }
        .case-studies-slider .slick-dots li.slick-active button:before {
            opacity: 1;
            color: #3b82f6;
        }

        /* Slide height fixes */
        .case-studies-slider .slick-track {
          display: flex !important;
        }
        .case-studies-slider .slick-slide {
          height: inherit !important;
        }
        .case-studies-slider .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
};
