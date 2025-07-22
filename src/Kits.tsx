import React, { useState } from 'react';

const cards = [
  {
    age: 'Ages 0–5',
    title: 'Starter Kit',
    color: 'bg-blue-200',
    img: 'https://i.imgur.com/8Q1h1bF.png', // sun
  },
  {
    age: 'Ages 5–10',
    title: 'Discovery Kit',
    color: 'bg-pink-200',
    img: 'https://i.imgur.com/1Q1h1bF.png', // peace hand
  },
  {
    age: 'Ages 10–15',
    title: 'Explorer Kit',
    color: 'bg-orange-200',
    img: 'https://i.imgur.com/7Q1h1bF.png', // smiling sun
  },
  {
    age: 'Ages 0–5',
    title: 'Starter Kit',
    color: 'bg-blue-200',
    img: 'https://i.imgur.com/8Q1h1bF.png', // sun
  },
  {
    age: 'Ages 5–10',
    title: 'Discovery Kit',
    color: 'bg-pink-200',
    img: 'https://i.imgur.com/1Q1h1bF.png', // peace hand
  },
  {
    age: 'Ages 10–15',
    title: 'Explorer Kit',
    color: 'bg-orange-200',
    img: 'https://i.imgur.com/7Q1h1bF.png', // smiling sun
  },
];

const Kits: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-32 bg-beige overflow-x-hidden flex flex-col items-center justify-center min-h-[600px]">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <svg width="100%" height="100%" className="w-full h-full" style={{ minHeight: 400 }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="max-w-2xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed for every stage of growth</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">Each kit builds on the last, creating a continuous journey from curiosity to mastery.</p>
      </div>
      <div className="relative flex flex-row items-end justify-center gap-0 z-10 w-full max-w-4xl">
        {cards.map((card, idx) => {
          // Overlap cards with negative margin
          const margin = idx === 1 ? '-mx-8' : '-mx-12';
          // Animate on hover
          const isHovered = hovered === idx;
          const z = isHovered ? 30 : idx === 1 ? 20 : 10;
          const scale = isHovered ? 'scale-110' : idx === 1 ? 'scale-105' : 'scale-95';
          const translateY = isHovered ? '-translate-y-8' : idx === 1 ? '-translate-y-2' : 'translate-y-0';
          const shadow = isHovered ? 'shadow-2xl' : 'shadow-lg';
          const rotate = idx === 0 ? '-rotate-6' : idx === 2 ? 'rotate-6' : '';
          return (
            <div
              key={card.title}
              className={`relative flex flex-col items-center justify-end w-[220px] h-[300px] md:w-[240px] md:h-[320px] rounded-[2.5rem] ${card.color} ${shadow} overflow-hidden transition-all duration-300 ${margin} ${scale} ${translateY} ${rotate}`}
              style={{ zIndex: z, cursor: 'pointer' }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <img src={card.img} alt={card.title} className="w-full h-2/3 object-cover" />
              <div className="py-4 text-center">
                <div className="text-xs text-gray-500">{card.age}</div>
                <div className="text-lg font-bold">{card.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Kits; 