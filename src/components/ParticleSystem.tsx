import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Star, Lightbulb, Trophy, Target, Zap } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  icon: React.ElementType;
  color: string;
}

const ParticleSystem: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number>();
  const icons = [BookOpen, Star, Lightbulb, Trophy, Target, Zap];
  const colors = ['#AC8E60', '#B59F84', '#D4C3A8', '#E8DCC0', '#10B981', '#3B82F6'];

  // Helper to create a new particle
  const createParticle = (): Particle => ({
    id: Math.random(),
    x: Math.random() * window.innerWidth,
    y: window.innerHeight + 50,
    size: Math.random() * 20 + 15,
    speed: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.6 + 0.2,
    rotation: 0,
    rotationSpeed: (Math.random() - 0.5) * 2,
    icon: icons[Math.floor(Math.random() * icons.length)],
    color: colors[Math.floor(Math.random() * colors.length)]
  });

  useEffect(() => {
    // Initialize with some particles
    setParticles(
      Array.from({ length: 8 }, () => ({
        ...createParticle(),
        y: Math.random() * window.innerHeight
      }))
    );

    const updateParticles = () => {
      setParticles(prevParticles => {
        // Move particles
        let updated = prevParticles
          .map(particle => ({
            ...particle,
            y: particle.y - particle.speed,
            rotation: particle.rotation + particle.rotationSpeed
          }))
          .filter(particle => particle.y > -100);

        // Add new particles occasionally
        if (Math.random() < 0.02 && updated.length < 15) {
          updated = [...updated, createParticle()];
        }
        return updated;
      });
      animationRef.current = requestAnimationFrame(updateParticles);
    };
    animationRef.current = requestAnimationFrame(updateParticles);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="particles-container" style={{ position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0 }}>
      {particles.map(particle => {
        const Icon = particle.icon;
        return (
          <div
            key={particle.id}
            className="particle absolute"
            style={{
              left: particle.x,
              top: particle.y,
              opacity: particle.opacity,
              transform: `rotate(${particle.rotation}deg)`,
              color: particle.color,
              fontSize: particle.size,
              position: 'absolute',
              width: particle.size,
              height: particle.size,
              pointerEvents: 'none',
            }}
          >
            <Icon width={particle.size} height={particle.size} />
          </div>
        );
      })}
    </div>
  );
};

export default ParticleSystem;