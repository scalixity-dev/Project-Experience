import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, ArrowRight, Play } from 'lucide-react';
import ParticleSystem from './ParticleSystem';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

    <section ref={heroRef} className="relative py-40 min-h-screen  bg-beige-500   from-slate-50 to-white overflow-hidden font-lato">
      {/* Particle System Overlay */}
      <ParticleSystem />
      {/* Shaded right-to-left gradient section */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-full z-0"
        style={{ background: 'linear-gradient(to left, #AC8E60 20%, rgba(255,255,255,0) 80%)' }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className={`inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-gray-900 font-medium text-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} font-lato`}>
              <Sparkles className="w-4 h-4 mr-2 text-[#AC8E60]" />
              Welcome to the future of learning
            </div>

            <div className="space-y-6">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} font-lato`}>
                A new way to
                <br />
                <span className="text-gradient animate-text-reveal font-lato">learn</span>
                <br />
                <span className="text-gray-700 font-light font-lato">& get knowledge</span>
              </h1>
              <p className={`text-lg lg:text-xl text-gray-600 max-w-lg transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} font-lato`}>
                EduFlex is here for you with various courses & materials from
                <span className="text-[#AC8E60] font-semibold font-lato"> skilled tutors</span> all around the world
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button className="group bg-gradient-to-r from-[#AC8E60] to-[#B59F84] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ripple-button magnetic-btn font-lato">
                <span className="flex items-center justify-center font-lato">
                  Explore out kits
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </button>
              <button className="group flex items-center px-8 py-4 text-gray-900 font-semibold text-lg hover:text-[#AC8E60] transition-all duration-300 font-lato">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 group-hover:bg-[#AC8E60] group-hover:text-white transition-all duration-300">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Keep existing image and decorations */}
          <div className={`relative transition-all duration-1500 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#AC8E60] rounded-full animate-float"></div>
            <div className="absolute top-1/4 -left-8 w-8 h-8 bg-[#AC8E60] rounded-full animate-float-delayed"></div>
            <div className="absolute bottom-1/4 right-1/4 animate-pulse-slow">
              <Sparkles className="w-6 h-6 text-green-500" />
            </div>
            <div className="absolute -bottom-4 left-1/3 animate-pulse-slow delay-1000">
              <Sparkles className="w-4 h-4 text-[#B59F84]" />
            </div>
            {/* Main Image Grid - Use local image and decorations */}
            <div className="relative flex items-center justify-center w-[560px] h-[440px] mx-auto">
              <img
                src="/assets/8152c15059f3a71bca419d4aff463b71-removebg-preview.png"
                alt="Student reading"
                className="object-contain w-full h-full bg-beige bg-transparent animate-slide-in-right"
              />
              {/* Decorative Bird Icon - Top Center */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="24" fill="#B59F84"/>
                  <path d="M16 28c3-6 13-6 16 0" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              {/* Decorative Green Star - Left Center */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <polygon points="12,2 14,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 10,9" fill="#A7F3D0"/>
                </svg>
              </div>
              {/* Decorative Green Dot - Left Top */}
              <div className="absolute -left-4 top-6">
                <div className="w-4 h-4 bg-[#B59F84] rounded-full"></div>
              </div>
              {/* Decorative Blue Dot - Bottom Right */}
              <div className="absolute -right-4 bottom-4">
                <div className="w-5 h-5 bg-[#AC8E60] rounded-full"></div>
              </div>
              {/* Decorative Blue Dot - Bottom Center */}
              <div className="absolute left-1/3 bottom-0">
                <div className="w-4 h-4 bg-[#AC8E60] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom gradient fade */}
     
    </section>
  );
};

export default HeroSection;