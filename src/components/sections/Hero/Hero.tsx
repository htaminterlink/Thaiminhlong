import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { jelly, fadeInUp } from "../../../styles/animations";
import { Wave } from "../../common/Wave";
import { WaterEffect } from "../../common/WaterEffect";

const HeroSection = styled.section`
  height: 100vh;
  min-height: 600px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 0;

  @media (max-width: 1024px) {
    min-height: 500px;
    height: auto;
  }

  @media (max-width: 768px) {
    min-height: 450px;
    padding-bottom: 12rem;
  }

  @media (max-width: 480px) {
    min-height: 400px;
    padding-bottom: 5rem;
    padding-top: 5rem;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: 0;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.5)
  );
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 0 2rem;
  max-width: 1200px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;

  ${HeroSection}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Slogan = styled.h1`
  font-size: 6rem;
  font-weight: 300;
  letter-spacing: 0.3em;
  margin-bottom: 3rem;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  line-height: 1.4;
  text-transform: uppercase;
  transform: translateY(30px);
  transition: all 0.8s ease-out 0.1s;

  ${HeroSection}:hover & {
    transform: translateY(0);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: 5rem;
    letter-spacing: 0.25em;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 3.5rem;
    letter-spacing: 0.2em;
    margin-bottom: 2rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 2.2rem;
    letter-spacing: 0.12em;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  transform: translateY(30px);
  transition: all 0.8s ease-out 0.3s;

  ${HeroSection}:hover & {
    transform: translateY(0);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 1.2rem;
    margin-top: 1.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    gap: 1rem;
    margin-top: 1rem;
  }
`;

const HeroButton = styled.a`
  padding: 1.5rem 3.5rem;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
  border: 2px solid transparent;
  &.primary {
    background: #84b92b;
    color: #fff;
    box-shadow: 0 4px 15px rgba(132, 185, 43, 0.4);

    &:hover {
      background: #75a526;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(132, 185, 43, 0.5);
      animation: ${jelly} 0.6s ease;
    }
  }

  &.secondary {
    background: #333;
    color: #fff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

    &:hover {
      background: #000;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
      animation: ${jelly} 0.6s ease;
    }
  }

  &.outline {
    background: transparent;
    color: #fff;
    border: 2px solid #fff;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
      border-color: #84b92b;
      color: #84b92b;
      animation: ${jelly} 0.6s ease;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 1.2rem 2.5rem;
    font-size: 1.4rem;
  }
`;

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <HeroSection>
      <VideoBackground autoPlay loop muted playsInline>
        <source src="/assets/tml-seafood-video.mp4" type="video/mp4" />
      </VideoBackground>
      <Overlay />
      <HeroContent>
        <Slogan>{t("hero.slogan")}</Slogan>
        <ButtonGroup>
          <HeroButton href="/about" className="primary">
            {t("hero.aboutButton")}
          </HeroButton>
          <HeroButton href="/products/seafood/fish" className="secondary">
            {t("hero.productsButton")}
          </HeroButton>
          <HeroButton href="/farm/intensive" className="outline">
            {t("hero.farmButton")}
          </HeroButton>
        </ButtonGroup>
      </HeroContent>
      <WaterEffect />
      <Wave
        colors={[
          "rgba(255, 255, 255, 0.7)",
          "#fff",
          "rgba(255, 255, 255, 0.5)",
          "rgba(255, 255, 255, 0.3)",
        ]}
      />
    </HeroSection>
  );
};
