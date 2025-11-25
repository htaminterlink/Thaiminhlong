import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  fadeInDown,
  zoomIn,
  zoomOut,
  float,
} from "../../styles/animations";

interface TransitionWrapperProps {
  $isVisible: boolean;
  $animation:
    | "fadeInUp"
    | "fadeInDown"
    | "fadeInLeft"
    | "fadeInRight"
    | "zoomIn"
    | "zoomOut"
    | "scaleIn"
    | "float";
  $delay?: number;
}

const TransitionWrapper = styled.div<TransitionWrapperProps>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  animation: ${({ $isVisible, $animation }) => {
      if (!$isVisible) return "none";
      switch ($animation) {
        case "fadeInUp":
          return fadeInUp;
        case "fadeInDown":
          return fadeInDown;
        case "fadeInLeft":
          return fadeInLeft;
        case "fadeInRight":
          return fadeInRight;
        case "zoomIn":
        case "scaleIn":
          return zoomIn;
        case "zoomOut":
          return zoomOut;
        case "float":
          return float;
        default:
          return fadeInUp;
      }
    }}
    0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: ${({ $delay }) => $delay || 0}s;
  will-change: transform, opacity;
`;

interface SectionTransitionProps {
  children: React.ReactNode;
  animation?:
    | "fadeInUp"
    | "fadeInDown"
    | "fadeInLeft"
    | "fadeInRight"
    | "zoomIn"
    | "zoomOut"
    | "scaleIn"
    | "float";
  delay?: number;
  threshold?: number;
  className?: string;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  threshold = 0.2,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <TransitionWrapper
      ref={ref}
      $isVisible={isVisible}
      $animation={animation}
      $delay={delay}
      className={className}
    >
      {children}
    </TransitionWrapper>
  );
};
