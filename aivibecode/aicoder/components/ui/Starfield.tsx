'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  element: HTMLDivElement;
}

export default function Starfield() {
  const starfieldRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    if (!starfieldRef.current) return;

    const starCount = 100;
    const stars: Star[] = [];

    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      
      const opacity = Math.random() * 0.6 + 0.3;
      star.style.opacity = opacity.toString();

      starfieldRef.current.appendChild(star);

      stars.push({
        x,
        y,
        size,
        speed: Math.random() * 0.5 + 0.1,
        opacity,
        element: star
      });
    }

    starsRef.current = stars;

    // Animation loop
    let animationId: number;
    
    const animate = () => {
      stars.forEach(star => {
        star.y += star.speed;
        
        if (star.y > 100) {
          star.y = -5;
          star.x = Math.random() * 100;
          star.element.style.left = `${star.x}%`;
        }
        
        star.element.style.top = `${star.y}%`;
        
        // Twinkling effect
        const twinkle = 0.6 + 0.4 * Math.sin(Date.now() / 500 + star.x);
        star.element.style.opacity = (twinkle * star.opacity).toString();
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      stars.forEach(star => {
        if (star.element.parentNode) {
          star.element.parentNode.removeChild(star.element);
        }
      });
    };
  }, []);

  return <div id="starfield" ref={starfieldRef} />;
}