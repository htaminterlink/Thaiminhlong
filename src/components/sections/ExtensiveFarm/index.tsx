import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import ExtensiveFarmGallery from "../ExtensiveFarmGallery";
import { SEO } from "../../common/SEO";

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

// Styled Components
const BannerSection = styled.div`
  position: relative;
  height: 85vh;
  min-height: 550px;
  max-height: 750px;
  width: 100%;
  background: #3572d6;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.02) 30%,
      rgba(0, 0, 0, 0.06) 60%,
      rgba(0, 0, 0, 0.12) 100%
    );
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 1024px) {
    height: 80vh;
    max-height: 650px;
  }

  @media (max-width: 768px) {
    height: 75vh;
    min-height: 400px;
    max-height: 550px;

    &::after {
      height: 35%;
    }
  }

  @media (max-width: 480px) {
    height: 70vh;
    min-height: 350px;
    max-height: 500px;
  }
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
  margin-top: -8vh;

  @media (max-width: 1024px) {
    padding: 0 1.5rem;
    margin-top: -7vh;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    margin-top: -4vh;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
    margin-top: -3vh;
  }
`;

const BannerTitle = styled.h1`
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 1.8rem 0;
  letter-spacing: 0.2em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  font-family: "SVN-BebasNeuePro", "Bebas Neue", Arial, sans-serif;
  animation: ${fadeUpAnim} 0.8s ease-out;
  line-height: 1.3;
  text-transform: uppercase;
  font-style: normal;

  @media (max-width: 1024px) {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    letter-spacing: 0.15em;
    line-height: 1.25;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    letter-spacing: 0.1em;
  }
`;

const BannerSubtitle = styled.p`
  font-size: clamp(1.4rem, 2vw, 1.6rem);
  color: rgba(255, 255, 255, 0.95);
  text-align: center;
  max-width: 900px;
  margin: 0 auto 2.5rem auto;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  line-height: 1.6;
  animation: ${fadeUpAnim} 0.8s ease-out 0.15s backwards;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  letter-spacing: 0.015em;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.8rem;
    max-width: 95%;
    line-height: 1.55;
  }
`;
const BigText = styled.p`
  font-size: clamp(6rem, 18vw, 14rem);
  font-weight: 3000;
  font-family: "SVN-BebasNeuePro", "Bebas Neue", Arial, sans-serif;
  color: var(--bgs);
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  user-select: none;
  position: relative;
  z-index: 1;
  letter-spacing: 0.05em;
  opacity: 0;
  transform: translateY(100px);
  animation: ${fadeUpAnim} 1.5s ease-out 0.5s forwards;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    left: 0;
    background: linear-gradient(to top, #3572d6 0%, transparent);
  }

  @media (max-width: 768px) {
    font-size: 5rem;
    letter-spacing: 0.03em;
    line-height: 0.9;
    filter: blur(0.3px);
    transform: translateY(60px);

    &::after {
      bottom: -40px;
      height: 100px;
    }
  }
`;
const WaveContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 35vh;
  min-height: 200px;
  max-height: 350px;
  z-index: 3;
  pointer-events: none;
  @media (max-width: 1024px) {
    height: 22vh;
    min-height: 120px;
    max-height: 180px;
  }
  @media (max-width: 900px) {
    height: 18vh;
    min-height: 80px;
    max-height: 120px;
  }
  @media (max-width: 768px) {
    height: 14vh;
    min-height: 60px;
    max-height: 90px;
  }
  @media (max-width: 480px) {
    height: 10vh;
    min-height: 40px;
    max-height: 60px;
  }
`;

const waveAnim = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Wave = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;

  .wave-line {
    animation: ${waveAnim} 15s linear infinite;
  }
`;

const ExtensiveFarm: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <SEO title="Trang Trại Quảng Canh" />

      {/* Banner Section */}
      <BannerSection>
        <BannerContent>
          <BannerTitle data-aos="fade-up">
            {t("farm.extensive.title")}
          </BannerTitle>
          <BannerSubtitle data-aos="fade-up" data-aos-delay="200">
            {t("farm.extensive.description")}
          </BannerSubtitle>
          <BigText data-aos="fade-up" data-aos-delay="400">
            EXTENSIVE
          </BigText>
        </BannerContent>

        <WaveContainer className="Wave add-class">
          <Wave
            className="waves"
            shapeRendering="auto"
            preserveAspectRatio="none"
            viewBox="0 24 150 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c35 0 55-15 90-15s 55 15 90 15 55-15 90-15 55 15 90 15 v44h-360z"
              />
            </defs>
            <g className="parallax">
              <use
                fill="rgba(240, 244, 248, 0.3)"
                y="0"
                x="48"
                xlinkHref="#gentle-wave"
              ></use>
              <use
                fill="rgba(240, 244, 248, 0.5)"
                y="3"
                x="48"
                xlinkHref="#gentle-wave"
              ></use>
              <use
                fill="rgba(240, 244, 248, 0.8)"
                y="5"
                x="48"
                xlinkHref="#gentle-wave"
              ></use>
              <use fill="#F0F4F8" y="7" x="48" xlinkHref="#gentle-wave"></use>
            </g>
          </Wave>
        </WaveContainer>
      </BannerSection>

      {/* Gallery Section */}
      <ExtensiveFarmGallery />
    </>
  );
};

export default ExtensiveFarm;
