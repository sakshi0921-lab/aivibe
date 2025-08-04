'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function useGSAP() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // GSAP 3D Hover tilt and transform for cards
    gsap.utils.toArray('.card-3d').forEach((card: any) => {
      const element = card as HTMLElement;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const px = (x / rect.width) * 2 - 1;
        const py = (y / rect.height) * 2 - 1;

        const rotationY = px * 12;
        const rotationX = -py * 12;

        gsap.to(element, {
          rotationY,
          rotationX,
          scale: 1.07,
          boxShadow: '0 25px 40px rgba(102, 126, 234, 0.6), 0 45px 80px rgba(118, 75, 162, 0.7)',
          ease: 'power3.out',
          duration: 0.3
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          rotationY: 0,
          rotationX: 0,
          scale: 1,
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.07), 0 8px 30px rgba(66, 66, 66, 0.3)',
          ease: 'power3.out',
          duration: 0.6
        });
      };

      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    // Feature icon rotation with GSAP
    gsap.utils.toArray('.feature-card').forEach((card: any) => {
      const element = card as HTMLElement;
      const icon = element.querySelector('.feature-icon') as HTMLElement;

      if (!icon) return;

      const handleMouseEnter = () => {
        gsap.to(icon, {
          scale: 1.15,
          rotationY: 180,
          boxShadow: '0 12px 35px rgba(118, 75, 162, 0.9), 0 6px 15px rgba(255, 255, 255, 0.4)',
          duration: 0.7,
          ease: 'elastic.out(1, 0.6)'
        });
      };

      const handleMouseLeave = () => {
        gsap.to(icon, {
          scale: 1,
          rotationY: 0,
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4), 0 2px 6px rgba(255, 255, 255, 0.15)',
          duration: 0.5,
          ease: 'power3.out'
        });
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    // Animate buttons
    gsap.utils.toArray('.gradient-bg, .glass').forEach((btn: any) => {
      const element = btn as HTMLElement;

      const handleMouseEnter = () => {
        gsap.to(element, {
          scale: 1.08,
          boxShadow: '0 10px 30px rgba(118, 75, 162, 0.7)',
          duration: 0.3,
          ease: 'power2.out'
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          scale: 1,
          boxShadow: 'none',
          duration: 0.3,
          ease: 'power2.out'
        });
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);
}