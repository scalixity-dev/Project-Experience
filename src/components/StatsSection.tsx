import React, { useEffect, useRef, useState } from 'react';
import { Infinity } from 'lucide-react';

const StatsSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ students: 0, tutors: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            startCounting();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const startCounting = () => {
    const duration = 2000; // 2 seconds
    const targetStudents = 15200;
    const targetTutors = 4500;
    
    const startTime = Date.now();
    
    const updateCounts = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCounts({
        students: Math.floor(targetStudents * easeOut),
        tutors: Math.floor(targetTutors * easeOut)
      });
      
      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      }
    };
    
    requestAnimationFrame(updateCounts);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 max-w-4xl"
        >
          {/* Active Students */}
          <div className="text-center group opacity-0 translate-y-8 transition-all duration-1000 stats-animate">
            <div className="mb-4">
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 group-hover:text-violet-600 transition-colors duration-300">
                {isVisible ? formatNumber(counts.students) : '0'}
              </h3>
            </div>
            <p className="text-gray-600 font-medium">Active students</p>
          </div>

          {/* Divider */}
          <div className="hidden md:flex items-center justify-center opacity-0 translate-y-8 transition-all duration-1000 delay-200 stats-animate">
            <div className="w-px h-16 bg-gray-300"></div>
          </div>

          {/* Tutors */}
          <div className="text-center group opacity-0 translate-y-8 transition-all duration-1000 delay-300 stats-animate">
            <div className="mb-4">
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 group-hover:text-violet-600 transition-colors duration-300">
                {isVisible ? formatNumber(counts.tutors) : '0'}
              </h3>
            </div>
            <p className="text-gray-600 font-medium">Tutors</p>
          </div>

          {/* Divider */}
          <div className="hidden md:flex items-center justify-center opacity-0 translate-y-8 transition-all duration-1000 delay-400 stats-animate">
            <div className="w-px h-16 bg-gray-300"></div>
          </div>

          {/* Resources */}
          <div className="text-center group opacity-0 translate-y-8 transition-all duration-1000 delay-500 stats-animate">
            <div className="mb-4 flex justify-center">
              <Infinity 
                size={48} 
                className="text-gray-900 group-hover:text-violet-600 transition-colors duration-300" 
              />
            </div>
            <p className="text-gray-600 font-medium">Resources</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;