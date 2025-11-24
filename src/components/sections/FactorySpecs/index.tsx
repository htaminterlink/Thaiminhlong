import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";

// Keyframes
const fadeUpAnim = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const countUpAnim = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Styled Components
const StyledSection = styled.section`
  position: relative;
  overflow: hidden;
  background: #316aea;

  /* Wave at top */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(58 / 1512 * 100vw);
    background-image: url("/assets/images/vom.svg");
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    z-index: 15;
    transform: scaleY(-1);

    @media (max-width: 768px) {
      height: 40px;
    }
  }
`;

const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    display: block;
  }

  /* Gradient overlay - fade to white at bottom */
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.05) 20%,
      rgba(0, 0, 0, 0.15) 50%,
      rgba(0, 0, 0, 0.3) 70%,
      rgba(255, 255, 255, 0.4) 85%,
      rgba(255, 255, 255, 0.9) 95%,
      rgba(255, 255, 255, 1) 100%
    );
    z-index: 1;
  }

  /* Decorative pattern */
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    left: 0;
    background-image: url("/assets/images/fac-square-dec.png");
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: 100% auto;
    z-index: 2;
    pointer-events: none;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    &::before {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.25) 40%,
        rgba(0, 0, 0, 0.4) 65%,
        rgba(255, 255, 255, 0.6) 85%,
        rgba(255, 255, 255, 1) 100%
      );
    }
  }
`;

const Content = styled.div`
  min-height: 90vh;
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: calc(8rem + (58 / 1512 * 100vw)) 1.5rem 8rem;

  @media (max-width: 1200px) {
    min-height: 80vh;
    padding: calc(6rem + 40px) 1.5rem 6rem;
  }

  @media (max-width: 768px) {
    min-height: 70vh;
    padding: calc(5rem + 40px) 1.5rem 5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  animation: ${fadeUpAnim} 1s ease-out;
  width: 100%;
`;

const Meter = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const MeterText = styled.p<{ $isAnimating?: boolean }>`
  font-family: "SVN-Bebas Neue Pro", sans-serif;
  font-size: 30rem;
  font-weight: 400;
  line-height: 1;
  display: flex;
  color: var(--bg);
  -webkit-text-stroke: 0.04em white;
  paint-order: stroke;
  margin: 0;
  animation: ${countUpAnim} 1s ease-out;

  @media (max-width: 1200px) {
    font-size: 20rem;
  }

  @media (max-width: 768px) {
    font-size: 10rem;
  }
`;

const Title = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.3;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  max-width: 700px;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.6rem;
    line-height: 1.6;
    max-width: 100%;
  }
`;

// Main Component
const FactorySpecs: React.FC = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimating) {
            setIsAnimating(true);
            animateCount();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isAnimating]);

  const animateCount = () => {
    const duration = 2000;
    const target = 10000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
  };

  return (
    <StyledSection ref={sectionRef}>
      <Background>
        <img src="/assets/images/tml-seafood.jpg" alt="Factory Area" />
      </Background>

      <Content>
        <Wrapper>
          <Meter>
            <MeterText $isAnimating={isAnimating}>
              {count.toLocaleString()}
            </MeterText>
          </Meter>
          <Title>{t("factory.specs.title")}</Title>
          <Description>{t("factory.specs.description")}</Description>
        </Wrapper>
      </Content>
    </StyledSection>
  );
};

export default FactorySpecs;
