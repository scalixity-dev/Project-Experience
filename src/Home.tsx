import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Kits from './Kits';

const Home: React.FC = () => {
  useEffect(() => {
    // Trigger animations when elements come into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.hero-animate, .stats-animate');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          element.classList.add('animate-in');
        }
      });
    };
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="bg-beige min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <Kits />
      </main>
    </div>
  );
};

export default Home; 