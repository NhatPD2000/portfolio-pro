"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  isActive: boolean;}

function CountUp({ end, duration = 0.6, isActive }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setCount(0);
      return;
    }

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isActive, end, duration]);

  return <span>{count}</span>;
}

export default CountUp;
