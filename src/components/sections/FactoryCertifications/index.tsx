import React, { useRef, useEffect, useState } from "react";
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

const zoomInAnim = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const floatAnim = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Styled Components
const StyledSection = styled.section`
  position: relative;
  padding: 6rem 0;
  background: #ffffff;
  overflow-x: clip;
  overflow-y: visible;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const DecsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const DecsInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    max-height: none;
    object-fit: cover;
    opacity: 0.5;
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

const ContentGrid = styled.div`
  display: flex;
  gap: 5rem;
  align-items: center;
  margin-bottom: 8rem;
  position: relative;
  overflow: visible;
  z-index: 101;

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 5rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  /* First grid (Certifications) - add padding for overlapping image */
  &:first-child {
    padding-bottom: 3rem;
  }
`;

const LeftContent = styled.div`
  flex: 0 0 45%;
  animation: ${fadeUpAnim} 0.8s ease-out;

  @media (max-width: 968px) {
    flex: 1;
    width: 100%;
  }
`;

const LeftWrapper = styled.div`
  width: 100%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-family: "Inter", sans-serif !important;
  font-size: 40px !important;
  font-weight: 700 !important;
  line-height: 60px !important;
  color: #00215e !important;
  margin-bottom: 1rem !important;
  letter-spacing: normal !important;
  text-transform: uppercase !important;

  @media (max-width: 768px) {
    font-size: 32px !important;
    line-height: 48px !important;
    margin-bottom: 0.8rem !important;
  }
`;

const Description = styled.p`
  font-family: "Inter", sans-serif !important;
  font-size: 18px !important;
  font-weight: 400 !important;
  line-height: 27px !important;
  color: #666 !important;
  margin-bottom: 2.5rem !important;
  max-width: 95% !important;

  @media (max-width: 768px) {
    font-size: 16px !important;
    line-height: 24px !important;
    margin-bottom: 2rem !important;
    max-width: 100% !important;
  }
`;

const CountWrapper = styled.div`
  display: flex !important;
  align-items: baseline;
  gap: 0;
  animation: ${zoomInAnim} 1s ease-out;
`;

const CountNumber = styled.div`
  font-family: "SVN-Bebas Neue Pro", sans-serif !important;
  font-size: 200px !important;
  font-weight: 400 !important;
  line-height: 200px !important;
  color: #4379f2 !important;
  letter-spacing: normal !important;

  @media (max-width: 1200px) {
    font-size: 140px !important;
    line-height: 140px !important;
  }

  @media (max-width: 768px) {
    font-size: 100px !important;
    line-height: 100px !important;
  }
`;

const CountPlus = styled.span`
  font-family: "SVN-Bebas Neue Pro", sans-serif !important;
  font-size: 200px !important;
  font-weight: 400 !important;
  line-height: 200px !important;
  color: #4379f2 !important;
  margin-top: -0.2em !important;
  letter-spacing: normal !important;

  @media (max-width: 1200px) {
    font-size: 140px !important;
    line-height: 140px !important;
  }

  @media (max-width: 768px) {
    font-size: 100px !important;
    line-height: 100px !important;
  }
`;

const RightContent = styled.div`
  flex: 0 0 55%;
  width: 55%;
  animation: ${fadeUpAnim} 1s ease-out 0.2s backwards;
  overflow: visible;

  @media (max-width: 968px) {
    flex: 1;
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const ImageInner = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 566 / 434.16;
  position: relative;
  height: 100%;

  @media (max-width: 768px) {
    aspect-ratio: 4 / 3;
  }
`;

const CertItem = styled.div<{ $position: number }>`
  position: absolute;
  aspect-ratio: 1;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${zoomInAnim} 0.6s ease-out forwards;

  /* Position cho từng icon - sắp xếp giống ảnh gốc */
  ${(props) => {
    switch (props.$position) {
      case 1:
        return `
          width: 14%;
          left: 10%;
          top: 12%;
        `;
      case 2:
        return `
          width: 10%;
          left: 44%;
          top: 5%;
        `;
      case 3:
        return `
          width: 13%;
          top: 40%;
          left: 34%;
        `;
      case 4:
        return `
          width: 26%;
          right: 10%;
          top: 18%;
        `;
      case 5:
        return `
          width: 12%;
          left: 10%;
          top: 54%;
        `;
      case 6:
        return `
          width: 12%;
          bottom: 12%;
          left: 24%;
        `;
      case 7:
        return `
          width: 12%;
          bottom: 20%;
          left: 52%;
        `;
      case 8:
        return `
          width: 10%;
          bottom: 18%;
          right: 18%;
        `;
      default:
        return "";
    }
  }}

  &:hover img {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    /* Điều chỉnh lại positions cho mobile nếu cần */
  }
`;

const CertIconSpan = styled.span`
  display: block;
  width: 100%;
  height: 100%;
`;

const CertIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

// Capacity Styles
const CapacityImageWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const CapacityMainImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  border: 8px solid #4379f2;
  box-shadow: 0 20px 60px rgba(67, 121, 242, 0.3);
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    border: 6px solid #4379f2;
  }
`;

const CapacityRightWrapper = styled.div`
  position: relative;
  overflow: visible;
  z-index: 102;
`;

const CapacitySmallImages = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
  height: 100%;
  pointer-events: none;
  z-index: 103;

  @media (max-width: 968px) {
    position: static;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
  }
`;

const CapacitySmallImage = styled.div<{
  $delay?: number;
  $position?: { top?: string; right?: string };
}>`
  position: absolute;
  aspect-ratio: 1;
  border-radius: 100rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: ${zoomInAnim} 0.6s ease-out ${(props) => props.$delay || 0}s
      backwards,
    ${floatAnim} 4s ease-in-out ${(props) => props.$delay || 0}s infinite;
  pointer-events: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: -1;

  /* Image 1 */
  &:nth-child(1) {
    width: 40%;
    bottom: 110%;
    right: 15%;
  }

  /* Image 2 */
  &:nth-child(2) {
    width: 30%;
    bottom: 30%;
    right: 0%;
  }

  /* Image 3 - Bridge to next section (Factory Specs) - On top of wave */
  &:nth-child(3) {
    width: 45%;
    bottom: -50%;
    right: 35%;
    z-index: 999;
    animation: ${zoomInAnim} 0.6s ease-out ${(props) => props.$delay || 0}s
      backwards;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(67, 121, 242, 0.3);
    z-index: 1000;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 968px) {
    position: static;
    width: 80px !important;
    height: 80px;
    animation: ${zoomInAnim} 0.6s ease-out ${(props) => props.$delay || 0}s
      backwards;

    img {
      transform: translateX(0) !important;
    }
  }
`;

const CapacityLogo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30%;
  aspect-ratio: 1;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 15px 50px rgba(67, 121, 242, 0.25);
  border: 8px solid #4379f2;
  z-index: 2;

  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 35%;
    border: 6px solid #4379f2;
  }
`;

const CapacityNumber = styled.div`
  font-family: "SVN-Bebas Neue Pro", sans-serif !important;
  font-size: 100px !important;
  font-weight: 400 !important;
  line-height: 100px !important;
  margin-top: 2.5rem;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 0;

  .number {
    color: #4379f2;
    height: 100px;
    line-height: 100px;
  }

  .unit {
    color: #4379f2;
    font-size: 100px;
    line-height: 100px;
    height: 100px;
  }

  @media (max-width: 768px) {
    font-size: 60px !important;

    .number,
    .unit {
      font-size: 60px !important;
      line-height: 60px !important;
      height: 60px;
    }
  }
`;

// Main Component
const FactoryCertifications: React.FC = () => {
  const { t } = useTranslation();
  const [animDelay, setAnimDelay] = useState<{ [key: number]: number }>({});

  const certifications = [
    { name: "BSCI", src: "/assets/images/certification/image.png" },
    { name: "IFS Food", src: "/assets/images/certification/image-1.png" },
    { name: "HACCP", src: "/assets/images/certification/image-4.png" },
    { name: "FDA", src: "/assets/images/certification/image-2.png" },
    { name: "SAFE", src: "/assets/images/certification/image-3.png" },
    { name: "Halal", src: "/assets/images/certification/image-5.png" },
    { name: "BRC", src: "/assets/images/certification/image-6.png" },
    { name: "Kosher U", src: "/assets/images/certification/image-4.png" },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // Set staggered animation delays
    const delays: { [key: number]: number } = {};
    certifications.forEach((_, idx) => {
      delays[idx] = idx * 100;
    });
    setAnimDelay(delays);
  }, [certifications.length]);

  return (
    <StyledSection className="sec-fac-certi">
      <DecsContainer className="decs">
        <DecsInner className="decs-in">
          <img src="/assets/images/map-grid.png" alt="" />
        </DecsInner>
      </DecsContainer>
      <Container>
        <ContentGrid>
          <LeftContent data-aos="fade-right">
            <LeftWrapper>
              <Title>{t("factory.certifications.title")}</Title>
              <Description>
                {t("factory.certifications.description")}
              </Description>
              <CountWrapper data-aos="zoom-in" data-aos-delay="200">
                <CountNumber>8</CountNumber>
                <CountPlus>+</CountPlus>
              </CountWrapper>
            </LeftWrapper>
          </LeftContent>

          <RightContent data-aos="fade-left">
            <ImageWrapper className="wrapper">
              <ImageInner className="img-inner">
                <ImageContainer className="img">
                  {certifications.map((cert, idx) => (
                    <CertItem
                      key={idx}
                      className="img-it"
                      $position={idx + 1}
                      data-aos="zoom-in"
                      data-aos-delay={100 + idx * 40}
                      style={{
                        animationDelay: `${idx * 40}ms`,
                      }}
                    >
                      <CertIconSpan>
                        <CertIcon
                          src={cert.src}
                          alt={cert.name}
                          loading="lazy"
                        />
                      </CertIconSpan>
                    </CertItem>
                  ))}
                </ImageContainer>
              </ImageInner>
            </ImageWrapper>
          </RightContent>
        </ContentGrid>

        {/* Production Capacity Section */}
        <ContentGrid>
          <LeftContent data-aos="fade-right">
            <CapacityImageWrapper>
              {/* Main Image - Circle (100%) */}
              <CapacityMainImage>
                <img
                  src="/assets/images/factory/z2434395866790_83d08c06e6e6a0a43b68dea0e575518d-768x1024.jpg"
                  alt="Production Capacity"
                />
              </CapacityMainImage>

              {/* Logo Circle - Bottom Right Overlap on Main Image */}
              <CapacityLogo>
                <img
                  src="/assets/images/tml-logo.png"
                  alt="Thai Minh Long Logo"
                />
              </CapacityLogo>
            </CapacityImageWrapper>
          </LeftContent>

          <RightContent data-aos="fade-left">
            <CapacityRightWrapper>
              <LeftWrapper>
                <Title>{t("factory.capacity.title")}</Title>
                <Description>{t("factory.capacity.description")}</Description>
                <CapacityNumber data-aos="zoom-in" data-aos-delay="200">
                  <span className="number">300</span>
                  <span className="unit">Containers</span>
                </CapacityNumber>
              </LeftWrapper>

              {/* 3 Small Circle Images - Positioned like old project */}
              <CapacitySmallImages>
                <CapacitySmallImage $delay={0.2}>
                  <img
                    src="/assets/images/factory/z2434395904092_1d7f9294c66c007699326b35cf3eeded-1024x768.jpg"
                    alt="Factory Detail 1"
                  />
                </CapacitySmallImage>
                <CapacitySmallImage $delay={0.5}>
                  <img
                    src="/assets/images/factory/z2434395853572_473139165c5cca407314c396e9394cb2-1024x768.jpg"
                    alt="Factory Detail 2"
                  />
                </CapacitySmallImage>
                <CapacitySmallImage $delay={0.8}>
                  <img
                    src="/assets/images/factory/z2434395804396_739d4a0ff8815c1d80fcf9ac0d9acdb5-1024x768.jpg"
                    alt="Factory Detail 3"
                  />
                </CapacitySmallImage>
              </CapacitySmallImages>
            </CapacityRightWrapper>
          </RightContent>
        </ContentGrid>
      </Container>
    </StyledSection>
  );
};

export default FactoryCertifications;
