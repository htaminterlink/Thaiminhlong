import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  separator?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const CountUpNumber = styled.span`
  font-family: ${(props) => props.theme.typography.fontFamily.secondary};
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

export const CountUp: React.FC<CountUpProps> = ({
  end,
  start = 0,
  duration = 3,
  separator = ",",
  prefix = "",
  suffix = "",
  decimals = 0,
}) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const animateCount = () => {
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;
      const range = end - start;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (endTime - startTime), 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = start + range * easeOutQuart;

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(updateCount);
    };

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            animateCount();
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observerRef.current.observe(currentElement);
    }

    return () => {
      if (currentElement && observerRef.current) {
        observerRef.current.unobserve(currentElement);
      }
    };
  }, [hasStarted, duration, end, start]);

  const formatNumber = (num: number): string => {
    const fixedNum = num.toFixed(decimals);
    const parts = fixedNum.split(".");
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return decimals > 0 ? `${integerPart}.${parts[1]}` : integerPart;
  };

  return (
    <CountUpNumber ref={elementRef}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </CountUpNumber>
  );
};
