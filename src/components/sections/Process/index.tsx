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

const slideInAnim = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const StyledSection = styled.section`
  padding-bottom: 8rem;
  position: relative;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);

  /* Wave at bottom */
  &::before {
    content: "";
    position: absolute;
    width: 100vw;
    height: calc(58 / 1512 * 100vw);
    mask-image: url("/assets/images/vom.svg");
    mask-size: cover;
    mask-repeat: no-repeat;
    background-color: white;
    bottom: 30%;
    left: 0;
    transform: translateY(calc(100% - 1px)) scaleY(-1);
    z-index: 1;

    @media (max-width: 768px) {
      height: 40px;
      bottom: 25%;
    }
  }

  /* Blue background at bottom */
  &::after {
    content: "";
    position: absolute;
    height: 30%;
    width: 100vw;
    background-color: var(--bg);
    bottom: 0;
    left: 0;
    z-index: 0;

    @media (max-width: 768px) {
      height: 25%;
    }
  }

  @media (max-width: 768px) {
    padding-bottom: 5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 2.4rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h3`
  font-family: "SVN-BebasNeuePro", "Bebas Neue", Arial, sans-serif;
  font-size: clamp(2.4rem, 3.5vw, 3.5rem);
  font-weight: 700;
  color: var(--bg);
  margin: 0;
  line-height: 1.2;
  letter-spacing: 0.05em;
  animation: ${fadeUpAnim} 0.8s ease-out;
  text-transform: uppercase;

  br {
    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  max-width: 1164px;
  border: 1rem solid white;
  border-radius: 2.4rem;
  overflow: hidden;
  animation: ${slideInAnim} 1s ease-out;
  box-shadow: 0 10px 40px rgba(67, 121, 242, 0.15);

  @media (max-width: 768px) {
    border: 0.5rem solid white;
    border-radius: 1.6rem;
  }
`;

const ImageInner = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: calc((600 / 1164) * 100%);

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 40%,
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 1;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2.4rem;
  color: white;
  max-width: 60rem;
  z-index: 2;
  animation: ${fadeUpAnim} 1s ease-out 0.5s backwards;

  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 100%;
  }

  @media (max-width: 500px) {
    position: static;
    padding: 1.5rem;
    background-color: var(--bg);
    width: 100%;
    max-width: unset;
  }
`;

const InfoNumber = styled.p`
  font-family: "SVN-Bebas Neue Pro", sans-serif;
  font-size: 15rem;
  line-height: 1;
  margin: 0;
  animation: ${slideInAnim} 0.8s ease-out 0.8s backwards;

  @media (max-width: 1200px) {
    font-size: 10rem;
  }

  @media (max-width: 768px) {
    font-size: 7rem;
  }

  @media (max-width: 500px) {
    font-size: 4rem;
  }
`;

const InfoDesc = styled.p`
  font-size: clamp(2.7rem, 3vw, 4rem);
  line-height: 1.2;
  font-weight: 700;
  margin: 0;
  animation: ${slideInAnim} 0.8s ease-out 1.2s backwards;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

const ProcessSection: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <StyledSection className="sec-fac-slide">
      <Container>
        <SectionHeader data-aos="fade-up">
          <Title>
            {t("factory.process.title")} <br />
            {t("factory.process.titleBold")}
          </Title>
        </SectionHeader>

        <ImageWrapper data-aos="fade-up" data-aos-delay="200">
          <ImageInner>
            <Image
              src="/assets/images/Trinity-9TRINITY-MY-THO.jpg"
              alt="Quy trình sản xuất"
            />
          </ImageInner>
        </ImageWrapper>
      </Container>
    </StyledSection>
  );
};

export default ProcessSection;
