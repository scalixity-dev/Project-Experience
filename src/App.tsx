import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';


function App() {
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

    // Initial check
    animateOnScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
     
      </main>
    </div>
  );
}

export default App;