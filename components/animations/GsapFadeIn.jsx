"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const GsapFadeIn = ({ children, effect = "fade", duration = 1, delay = 0 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state based on effect
    let initialState = {};
    let finalState = {};

    switch (effect) {
      case "fade":
        initialState = { opacity: 0 };
        finalState = { opacity: 1 };
        break;
      case "slide-up":
        initialState = { opacity: 0, y: 50 };
        finalState = { opacity: 1, y: 0 };
        break;
      case "slide-down":
        initialState = { opacity: 0, y: -50 };
        finalState = { opacity: 1, y: 0 };
        break;
      case "slide-left":
        initialState = { opacity: 0, x: 50 };
        finalState = { opacity: 1, x: 0 };
        break;
      case "slide-right":
        initialState = { opacity: 0, x: -50 };
        finalState = { opacity: 1, x: 0 };
        break;
      case "scale":
        initialState = { opacity: 0, scale: 0.8 };
        finalState = { opacity: 1, scale: 1 };
        break;
      default:
        initialState = { opacity: 0 };
        finalState = { opacity: 1 };
    }

    // Set initial state
    gsap.set(element, initialState);

    // Create animation
    const animation = gsap.to(element, {
      ...finalState,
      duration: duration,
      delay: delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    return () => {
      animation.kill();
    };
  }, [effect, duration, delay]);

  return (
    <div ref={elementRef}>
      {children}
    </div>
  );
};

export default GsapFadeIn; 