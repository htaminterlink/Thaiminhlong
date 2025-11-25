import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import AOS from "aos";

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

const waveAnim = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const floatAnim = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const rotateAnim = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled Components
const StyledSection = styled.section`
  position: relative;
  height: 125vh;
  min-height: 550px;
  max-height: 750px;
  width: 100%;
  overflow: hidden;
  background: #3572d6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

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
    height: 100vh;
    min-height: 500px;
    max-height: 700px;
  }

  @media (max-width: 768px) {
    height: 80vh;
    min-height: 450px;
    max-height: 600px;

    &::after {
      height: 35%;
    }
  }

  @media (max-width: 480px) {
    height: 70vh;
    min-height: 400px;
    max-height: 500px;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  z-index: 1;
  position: relative;

  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.75rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 0 2rem;
  margin-top: -8vh;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    margin-top: -5vh;
  }
`;

const Title = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  margin: 0 0 1.8rem 0;
  letter-spacing: 0.2em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  font-family: "SVN-BebasNeuePro", "Bebas Neue", Arial, sans-serif;
  animation: ${fadeUpAnim} 0.8s ease-out;
  line-height: 1.3;
  text-transform: uppercase;
  font-style: normal;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    letter-spacing: 0.15em;
    line-height: 1.25;
  }
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.95);
  font-size: clamp(1.4rem, 2vw, 1.6rem);
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

const DecorativeImage = styled.img<{
  $delay?: string;
}>`
  position: absolute;
  opacity: 0.25;
  z-index: 2;
  animation: ${floatAnim} 6s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay || "0s"};
  pointer-events: none;
  filter: brightness(0) invert(1) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    opacity: 0.35;
    transform: scale(1.05);
  }

  @media (max-width: 968px) {
    opacity: 0.2;
  }

  @media (max-width: 768px) {
    display: none;
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

// Main Component
const FactoryBanner: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <StyledSection className="sec-fac-bn">
      {/* Left top - Shrimp */}
      <DecorativeImage
        src="/assets/images/tom.png"
        alt="Shrimp decoration"
        style={{
          top: "8%",
          left: "3%",
          width: "220px",
          height: "auto",
        }}
        $delay="0s"
      />

      {/* Right bottom - Crab */}
      <DecorativeImage
        src="/assets/images/cua.png"
        alt="Crab decoration"
        style={{
          bottom: "20%",
          right: "5%",
          width: "180px",
          height: "auto",
        }}
        $delay="1.5s"
      />

      {/* Right top - Fish */}
      <DecorativeImage
        src="/assets/images/ca.png"
        alt="Fish decoration"
        style={{
          top: "5%",
          right: "2%",
          width: "280px",
          height: "auto",
        }}
        $delay="0.5s"
      />

      {/* Left bottom - Fish */}
      <DecorativeImage
        src="/assets/images/ca.png"
        alt="Fish decoration"
        style={{
          bottom: "18%",
          left: "4%",
          width: "240px",
          height: "auto",
          rotate: "45deg",
        }}
        $delay="2s"
      />

      <Container>
        <ContentWrapper>
          <Title data-aos="fade-up" data-aos-delay="0">
            {t("factory.banner.title")}
          </Title>
          <Description data-aos="fade-up" data-aos-delay="200">
            {t("factory.banner.description")}
          </Description>
          <BigText data-aos="fade-up" data-aos-delay="400">
            {t("factory.banner.bigText")}
          </BigText>
        </ContentWrapper>
      </Container>

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
    </StyledSection>
  );
};

export default FactoryBanner;
