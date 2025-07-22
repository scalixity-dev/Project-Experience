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
    <section ref={heroRef} className="pt-20 lg:pt-24 pb-16 lg:pb-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
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
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              
              {/* Top Left - Blue Card */}
              <div className="relative group">
                <div className="bg-sky-300 rounded-3xl p-4 lg:p-6 transform hover:scale-105 transition-all duration-500">
                  <img 
                    src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Student with tablet"
                    className="w-full h-48 lg:h-56 object-cover rounded-2xl"
                  />
                </div>
                {/* Arrow Icon */}
                <div className="absolute -top-2 -right-2 bg-sky-200 rounded-full p-3 animate-bounce-slow">
                  <div className="w-6 h-6 border-r-2 border-b-2 border-white transform rotate-45"></div>
                </div>
              </div>

              {/* Top Right - Purple Card */}
              <div className="bg-violet-400 rounded-3xl p-4 lg:p-6 transform hover:scale-105 transition-all duration-500 translate-y-8">
                <img 
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Student with books"
                  className="w-full h-48 lg:h-56 object-cover rounded-2xl"
                />
              </div>

              {/* Bottom Left - Green Card */}
              <div className="bg-green-300 rounded-3xl p-4 lg:p-6 transform hover:scale-105 transition-all duration-500 -translate-y-4">
                <img 
                  src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Happy student"
                  className="w-full h-40 lg:h-48 object-cover rounded-2xl"
                />
              </div>

              {/* Bottom Right - Purple Oval with Rings */}
              <div className="bg-violet-300 rounded-3xl p-4 lg:p-6 flex items-center justify-center transform hover:scale-105 transition-all duration-500">
                <div className="flex space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 lg:w-10 lg:h-10 border-4 border-white rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;