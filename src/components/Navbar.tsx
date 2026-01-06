import React from 'react';
import { Button } from './ui/button';

export const Navbar = () => {
  const navItems = [
    { label: '課題', href: '#problem' },
    { label: '解決策', href: '#solution' },
    { label: '選ばれる理由', href: '#benefits' },
    { label: '活用モデル', href: '#plan' },
    { label: '料金', href: '#pricing' },
    { label: '導入事例', href: '#case-studies' },
    { label: 'Q&A', href: '#faq' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-wider text-foreground">Ashiwill</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Button variant="default" className="rounded-full bg-white text-black hover:bg-gray-200">
          デモ・商談を予約する
        </Button>
      </div>
    </nav>
  );
};
