import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import { Wave } from "../../common/Wave";

const TestimonialsSection = styled.section`
  padding: 8rem 0 0 0;
  background: white;
  position: relative;
  overflow: visible;

  @media (max-width: 768px) {
    padding: 5rem 0 0 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TitleWrapper = styled.div<{ $isInView: boolean }>`
  text-align: center;
  margin-bottom: 5rem;
  opacity: ${(props) => (props.$isInView ? 1 : 0)};
  transform: translateY(${(props) => (props.$isInView ? "0" : "30px")});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const Title = styled.h3`
  font-family: ${(props) => props.theme.typography.fontFamily.secondary};
  font-size: 4rem;
  color: #00215e;
  line-height: 1.4;
  font-weight: 700;
  max-width: 968px;
  margin: 0 auto 2rem auto;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 3rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 1.2rem 3rem;
  background: #4379f2;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.6rem;
  transition: all 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background: #2d5fd9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(67, 121, 242, 0.3);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 1.4rem;
    padding: 1rem 2.5rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 100%;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const StarBadge = styled.div<{ $isInView: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  opacity: ${(props) => (props.$isInView ? 1 : 0)};
  transform: scale(${(props) => (props.$isInView ? 1 : 0.8)});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  white-space: nowrap;
  padding: 0 2rem;

  @media (max-width: 968px) {
    padding: 0;
  }
`;

const StarIcon = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  flex-shrink: 0;

  &::before {
    content: "★";
    font-size: 80px;
    color: #ffc107;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1;
  }

  @media (max-width: 968px) {
    width: 60px;
    height: 60px;

    &::before {
      font-size: 60px;
    }
  }
`;

const StarText = styled.p`
  font-size: 1.4rem;
  color: #4379f2;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
  text-align: center;

  @media (max-width: 968px) {
    font-size: 1.2rem;
  }
`;

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const LogoSliderWrapper = styled.div<{ $isInView: boolean }>`
  width: 100%;
  overflow: hidden;
  opacity: ${(props) => (props.$isInView ? 1 : 0)};
  transform: translateY(${(props) => (props.$isInView ? "0" : "30px")});
  transition: opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s;
  padding: 2rem 0;

  @media (max-width: 968px) {
    padding: 1rem 0;
  }
`;

const LogoTrack = styled.div`
  display: flex;
  animation: ${scroll} 30s linear infinite;
  width: fit-content;

  &:hover {
    animation-play-state: paused;
  }
`;

const LogoSlide = styled.div`
  display: flex;
  gap: 4rem;
  padding-right: 4rem;

  @media (max-width: 768px) {
    gap: 3rem;
    padding-right: 3rem;
  }
`;

const LogoItem = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 2px solid #f0f0f0;
  min-width: 180px;
  height: 140px;
  flex-shrink: 0;

  img {
    max-width: 100%;
    max-height: 90px;
    width: auto;
    height: auto;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border-color: #4379f2;

    img {
      filter: grayscale(0%);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-width: 140px;
    height: 110px;

    img {
      max-height: 70px;
    }
  }
`;

const MapWrapper = styled.div`
  position: relative;
  margin-top: 6rem;
  padding-bottom: 20rem;

  @media (max-width: 768px) {
    margin-top: 4rem;
    padding-bottom: 15rem;
  }
`;

const certifications = [
  { name: "BSCI", image: "/assets/images/certification/image.png" },
  { name: "4FE", image: "/assets/images/certification/image-1.png" },
  { name: "HACCP", image: "/assets/images/certification/image-4.png" },
  { name: "BRC", image: "/assets/images/certification/image-6.png" },
  { name: "FDA", image: "/assets/images/certification/image-2.png" },
  { name: "IFS", image: "/assets/images/certification/image-3.png" },
  { name: "HALAL", image: "/assets/images/certification/image-5.png" },
  { name: "U", image: "/assets/images/certification/image-4.png" },
];

export const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <TestimonialsSection ref={sectionRef}>
      <Container>
        <TitleWrapper $isInView={isInView}>
          <Title>{t("certifications.title")}</Title>
          <Button href="/vi/factory-seafood/">
            {t("certifications.button")}
          </Button>
        </TitleWrapper>
      </Container>

      <ContentWrapper>
        <ContentGrid>
          <StarBadge $isInView={isInView}>
            <StarIcon />
            <StarText>{t("certifications.badge")}</StarText>
          </StarBadge>

          <LogoSliderWrapper $isInView={isInView}>
            <LogoTrack>
              <LogoSlide>
                {certifications.map((cert, index) => (
                  <LogoItem key={index}>
                    <img src={cert.image} alt={cert.name} loading="lazy" />
                  </LogoItem>
                ))}
              </LogoSlide>
              <LogoSlide aria-hidden="true">
                {certifications.map((cert, index) => (
                  <LogoItem key={`duplicate-${index}`}>
                    <img src={cert.image} alt={cert.name} loading="lazy" />
                  </LogoItem>
                ))}
              </LogoSlide>
            </LogoTrack>
          </LogoSliderWrapper>
        </ContentGrid>
      </ContentWrapper>

      <MapWrapper>
        <Wave
          colors={[
            "rgba(67, 121, 242, 0.1)",
            "rgba(67, 121, 242, 0.2)",
            "rgba(132, 185, 43, 0.3)",
            "#84b92b",
          ]}
        />
      </MapWrapper>
    </TestimonialsSection>
  );
};
