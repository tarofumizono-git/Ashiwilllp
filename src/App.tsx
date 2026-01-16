import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { AboutService } from './components/AboutService';
import { Problem } from './components/Problem';
import { BeforeAfter } from './components/BeforeAfter';
import { Solution } from './components/Solution';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { Packages } from './components/Packages';
import { Pricing } from './components/Pricing';
import { CaseStudies } from './components/CaseStudies';
import { Vision } from './components/Vision';
import { FAQ } from './components/FAQ';
import { FooterCTA } from './components/FooterCTA';

const App = () => {
  return (
    <div className="dark min-h-screen bg-black text-foreground selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <div id="about">
          <AboutService />
        </div>
        <div id="solution">
          <Solution />
        </div>
        <div id="problem">
          <Problem />
        </div>
        <BeforeAfter />
        <div id="benefits">
          <Benefits />
        </div>
        <HowItWorks />
        <div id="plan">
          <Packages />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="case-studies">
          <CaseStudies />
        </div>
        <Vision />
        <div id="faq">
          <FAQ />
        </div>
        <FooterCTA />
      </main>
    </div>
  );
};

export default App;
