import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import { CountUp } from "../../common/CountUp";

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

const floatAnim = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const scaleInAnim = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Styled Components
const StyledSection = styled.section`
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 5rem 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const RightContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeUpAnim} 0.8s ease-out;

  @media (max-width: 1024px) {
    order: 1;
  }
`;

const LeftContent = styled.div`
  animation: ${fadeUpAnim} 0.8s ease-out 0.2s backwards;

  @media (max-width: 1024px) {
    order: 2;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-family: "SVN-BebasNeuePro", "Bebas Neue", Arial, sans-serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #00215e;
  margin-bottom: 2rem;
  line-height: 1.2;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const CapacityBox = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, #4379f2 0%, #2e5dd4 100%);
  border-radius: 20px;
  padding: 2rem 3rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(67, 121, 242, 0.25);
  animation: ${scaleInAnim} 1s ease-out;

  @media (max-width: 768px) {
    padding: 1.5rem 2.5rem;
  }
`;

const CapacityNumber = styled.div`
  font-size: 6rem;
  font-weight: 700;
  font-family: "SVN-BebasNeuePro", "Bebas Neue", Arial, sans-serif;
  color: white;
  letter-spacing: 0.04em;
  line-height: 1;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const CapacityUnit = styled.p`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
  margin: 0;
  text-transform: capitalize;
  letter-spacing: 0.15em;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CircleImageWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

const CircleImage = styled.img<{ $delay?: number }>`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(67, 121, 242, 0.2);
  animation: ${floatAnim} 4s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay || 0}s;

  &:nth-child(1) {
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:nth-child(2) {
    top: 100px;
    right: 40px;
    animation-delay: 0.5s;
  }

  &:nth-child(3) {
    bottom: 100px;
    right: 40px;
    animation-delay: 1s;
  }

  &:nth-child(4) {
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: 1.5s;
  }

  &:nth-child(5) {
    bottom: 100px;
    left: 40px;
    animation-delay: 2s;
  }

  &:nth-child(6) {
    top: 100px;
    left: 40px;
    animation-delay: 2.5s;
  }

  @media (max-width: 1024px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const CenterLogo = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;
  background: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 40px rgba(67, 121, 242, 0.15);
  z-index: 10;
  animation: ${scaleInAnim} 0.8s ease-out;

  @media (max-width: 1024px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 768px) {
    width: 110px;
    height: 110px;
  }
`;

const CenterLogoImg = styled.img`
  width: 100px;
  height: auto;
  object-fit: contain;

  @media (max-width: 1024px) {
    width: 80px;
  }

  @media (max-width: 768px) {
    width: 60px;
  }
`;

// Main Component
const FactoryCapacity: React.FC = () => {
  const { t } = useTranslation();
  const [isInView, setIsInView] = useState(false);

  const productImages = [
    "/assets/images/factory/z2434395799034_d0e896550337a008e779bfda62a042d6-768x1024.jpg",
    "/assets/images/factory/z2434395860189_d38cdcc181108c8db2d548f7f84c75db-768x1024.jpg",
    "/assets/images/factory/z2434395866780_98379680b3f1ab8764f15716d7030a2b-768x1024.jpg",
    "/assets/images/factory/z2434395866790_83d08c06e6e6a0a43b68dea0e575518d-768x1024.jpg",
    "/assets/images/factory/z2434395804396_739d4a0ff8815c1d80fcf9ac0d9acdb5-1024x768.jpg",
    "/assets/images/factory/z2434395904092_1d7f9294c66c007699326b35cf3eeded-1024x768.jpg",
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.querySelector(".factory-capacity-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <StyledSection className="factory-capacity-section sec-fac-prod">
      <Container>
        <ContentGrid>
          <RightContent data-aos="zoom-in">
            <CircleImageWrapper>
              {productImages.map((img, idx) => (
                <CircleImage
                  key={idx}
                  src={img}
                  alt={`factory-product-${idx + 1}`}
                  $delay={idx * 0.5}
                  loading="lazy"
                />
              ))}
              <CenterLogo>
                <CenterLogoImg
                  src="/assets/images/logo.png"
                  alt="Trinity Logo"
                />
              </CenterLogo>
            </CircleImageWrapper>
          </RightContent>

          <LeftContent data-aos="fade-left">
            <Title>{t("factory.capacity.title")}</Title>
            <Description>{t("factory.capacity.description")}</Description>
            <CapacityBox data-aos="zoom-in" data-aos-delay="200">
              <CapacityNumber>
                {isInView ? <CountUp end={300} duration={2.5} /> : "300"}
              </CapacityNumber>
              <CapacityUnit>{t("factory.capacity.unit")}</CapacityUnit>
            </CapacityBox>
          </LeftContent>
        </ContentGrid>
      </Container>
    </StyledSection>
  );
};

export default FactoryCapacity;

