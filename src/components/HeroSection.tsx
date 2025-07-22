import React, { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="py-40  bg-beige-500   from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight opacity-0 translate-y-8 transition-all duration-1000 delay-300 hero-animate">
                A new way to learn
                <br />
                <span className="text-gray-700">& get knowledge</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 max-w-lg opacity-0 translate-y-8 transition-all duration-1000 delay-500 hero-animate">
                EduFlex is here for you with various courses & materials from skilled tutors all around the world
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 translate-y-8 transition-all duration-1000 delay-700 hero-animate">
              <button className="bg-violet-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-violet-600 transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
                Join the Class
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-violet-500 hover:text-violet-600 transition-all duration-300 hover:scale-105">
                Learn more
              </button>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative opacity-0 translate-x-8 transition-all duration-1200 delay-400 hero-animate">
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-sky-300 rounded-full animate-float"></div>
            <div className="absolute top-1/4 -left-8 w-8 h-8 bg-violet-300 rounded-full animate-float-delayed"></div>
            <div className="absolute bottom-1/4 right-1/4 animate-pulse-slow">
              <Sparkles className="w-6 h-6 text-green-500" />
            </div>
            <div className="absolute -bottom-4 left-1/3 animate-pulse-slow delay-1000">
              <Sparkles className="w-4 h-4 text-violet-500" />
            </div>

            {/* Main Image Grid */}
            <div className="relative grid grid-cols-2 grid-rows-2 gap-4 w-[340px] h-[340px] mx-auto">
              {/* Top Left Image */}
              <div className="rounded-3xl overflow-hidden bg-blue-100 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80"
                  alt="Person 1"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Top Right Image */}
              <div className="rounded-3xl overflow-hidden bg-purple-100 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&q=80"
                  alt="Person 2"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Bottom Left Image */}
              <div className="rounded-3xl overflow-hidden bg-green-100 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&q=80"
                  alt="Person 3"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Bottom Right Empty */}
              <div></div>

              {/* Central Pill with Rings */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="bg-purple-200 rounded-full px-6 py-2 flex items-center justify-center shadow-md">
                  <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                    <ellipse cx="12" cy="12" rx="10" ry="10" stroke="#A78BFA" strokeWidth="2"/>
                    <ellipse cx="24" cy="12" rx="10" ry="10" stroke="#A78BFA" strokeWidth="2"/>
                    <ellipse cx="36" cy="12" rx="10" ry="10" stroke="#A78BFA" strokeWidth="2"/>
                    <ellipse cx="48" cy="12" rx="10" ry="10" stroke="#A78BFA" strokeWidth="2"/>
                  </svg>
                </div>
              </div>

              {/* Decorative Dots and Stars */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                {/* Bird Icon */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="18" fill="#BAE6FD"/>
                  <path d="M12 20c2-4 8-4 10 0" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="absolute -left-8 top-1/3">
                <div className="w-4 h-4 bg-green-200 rounded-full"></div>
              </div>
              <div className="absolute right-0 bottom-0">
                <div className="w-5 h-5 bg-blue-200 rounded-full"></div>
              </div>
              <div className="absolute left-1/4 bottom-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8" fill="#A7F3D0"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;