import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ParallaxContainer = styled.div<{ $offset: number }>`
  transform: translateY(${({ $offset }) => $offset * 0.5}px);
  transition: transform 0.1s ease-out;
  will-change: transform;
`;

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className,
}) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrollPercent =
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

      if (scrollPercent >= 0 && scrollPercent <= 1) {
        setOffset((scrollPercent - 0.5) * 100 * speed);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <ParallaxContainer ref={ref} $offset={offset} className={className}>
      {children}
    </ParallaxContainer>
  );
};
