import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const moveForever = keyframes`
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
`;

const WaveContainer = styled.div<{ $position?: "top" | "bottom" }>`
  pointer-events: none;
  position: absolute;
  width: 100%;
  ${({ $position }) => ($position === "top" ? "top: 0;" : "bottom: -1px;")}
  left: 0;
  z-index: 5;
  ${({ $position }) => $position === "top" && "transform: rotate(180deg);"}

  .waves {
    position: relative;
    width: 100%;
    height: calc(150 / 1512 * 100vw);
    margin-bottom: -7px;

    @media (max-width: 768px) {
      height: calc(100 / 1512 * 100vw);
    }
  }

  .parallax > use {
    animation: ${moveForever} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
    animation-play-state: paused;
  }

  &.is-inview .parallax > use {
    animation-play-state: running;
  }

  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }

  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }

  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }

  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
`;

interface WaveProps {
  colors?: string[];
  className?: string;
  position?: "top" | "bottom";
}

export const Wave: React.FC<WaveProps> = ({
  colors = [
    "rgba(67, 122, 242, 0.1)",
    "rgba(67, 122, 242, 0.2)",
    "rgba(67, 122, 242, 0.5)",
    "#4379F2",
  ],
  className = "",
  position = "bottom",
}) => {
  const waveRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (waveRef.current) {
      observer.observe(waveRef.current);
    }

    return () => {
      if (waveRef.current) {
        observer.unobserve(waveRef.current);
      }
    };
  }, []);

  return (
    <WaveContainer
      ref={waveRef}
      className={`Wave ${isInView ? "is-inview" : ""} ${className}`.trim()}
      $position={position}
    >
      <svg
        className="waves"
        shapeRendering="auto"
        preserveAspectRatio="none"
        viewBox="0 24 150 28"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use fill={colors[0]} y="0" x="48" xlinkHref="#gentle-wave" />
          <use fill={colors[1]} y="3" x="48" xlinkHref="#gentle-wave" />
          <use fill={colors[2]} y="5" x="48" xlinkHref="#gentle-wave" />
          <use fill={colors[3]} y="7" x="48" xlinkHref="#gentle-wave" />
        </g>
      </svg>
    </WaveContainer>
  );
};
