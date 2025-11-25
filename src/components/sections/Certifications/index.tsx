import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import { Wave } from "../../common/Wave";

const CertificationsSection = styled.section`
  padding: 8rem 0 5rem 0;
  background: white;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 6rem 0 4rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0 3rem 0;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 0 2rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const TitleWrapper = styled.div<{ $isInView: boolean }>`
  text-align: center;
  margin-bottom: 5rem;
  opacity: ${(props) => (props.$isInView ? 1 : 0)};
  transform: translateY(${(props) => (props.$isInView ? 0 : "30px")});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-bottom: 3rem;
  }
`;

const Title = styled.h3`
  font-family: ${(props) => props.theme.typography.fontFamily.secondary};
  font-size: 4rem;
  color: #00215e;
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.2;

  br {
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      display: none;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: 3.2rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 4rem;
  background: linear-gradient(135deg, #4379f2 0%, #2e5dd4 100%);
  color: white;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.6rem;
  text-decoration: none;
  transition: all 0.4s ease;
  box-shadow: 0 8px 25px rgba(67, 121, 242, 0.35);
  position: relative;
  overflow: hidden;
  z-index: 10;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(67, 121, 242, 0.5);

    &::before {
      width: 300px;
      height: 300px;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 1.2rem 3rem;
    font-size: 1.4rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 1rem 2.5rem;
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 1rem;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }
`;

const StarBadge = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 40px;
    height: 40px;
    margin: 0 auto;
  }
`;

const CertificationText = styled.div`
  display: flex;
  align-items: center;
  text-align: left;

  h4 {
    font-family: "Inter", sans-serif;
    font-size: 1.4rem;
    color: #00215e;
    font-weight: 600;
    line-height: 1.1;
    margin: 0;
    text-transform: uppercase;
    white-space: nowrap;

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 1.2rem;
      white-space: normal;
    }
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

const LogoCarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  padding: 2rem 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, white, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, white, transparent);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    &::before,
    &::after {
      width: 50px;
    }
  }
`;

const LogoTrack = styled.div`
  display: flex;
  gap: 3rem;
  animation: ${scroll} 30s linear infinite;
  width: fit-content;

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 2rem;
  }
`;

const LogoSlide = styled.div`
  display: flex;
  gap: 3rem;
  flex-shrink: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 2rem;
  }
`;

const LogoItem = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: 180px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);

    img {
      filter: grayscale(0%);
      opacity: 1;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 1.5rem;
    height: 100px;
    min-width: 150px;
  }
`;

const EarthImage = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  img {
    max-width: 800px;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 2rem;

    img {
      max-width: 100%;
    }
  }
`;

const certifications = [
  {
    id: 1,
    name: "BSCI",
    image: "/assets/images/certification/image.png",
  },
  {
    id: 2,
    name: "HACCP",
    image: "/assets/images/certification/image-4.png",
  },
  {
    id: 3,
    name: "BRC",
    image: "/assets/images/certification/image-6.png",
  },
  {
    id: 4,
    name: "FDA",
    image: "/assets/images/certification/image-2.png",
  },
  {
    id: 5,
    name: "IFS",
    image: "/assets/images/certification/image-3.png",
  },
  {
    id: 6,
    name: "HALAL",
    image: "/assets/images/certification/image-5.png",
  },
  {
    id: 7,
    name: "KOSHER",
    image: "/assets/images/certification/image-4.png",
  },
  {
    id: 8,
    name: "GMP",
    image: "/assets/images/certification/image-7.png",
  },
];

export const Certifications: React.FC = () => {
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
      {
        threshold: 0.2,
      }
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
    <CertificationsSection ref={sectionRef}>
      <Wave colors={["white", "white", "#e9ecef", "#e9ecef"]} />
      <Container>
        <ContentGrid>
          <StarBadge>
            <img src="/assets/images/ic-sao.png" alt="Star Icon" />
          </StarBadge>

          <CertificationText>
            <h4>{t("certifications.badgeText")}</h4>
          </CertificationText>

          <LogoCarouselWrapper>
            <LogoTrack>
              <LogoSlide>
                {certifications.map((cert) => (
                  <LogoItem key={cert.id}>
                    <img
                      src={cert.image}
                      alt={cert.name}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </LogoItem>
                ))}
              </LogoSlide>
              <LogoSlide>
                {certifications.map((cert) => (
                  <LogoItem key={`${cert.id}-duplicate`}>
                    <img
                      src={cert.image}
                      alt={cert.name}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </LogoItem>
                ))}
              </LogoSlide>
            </LogoTrack>
          </LogoCarouselWrapper>
        </ContentGrid>

        <EarthImage>
          <img src="/assets/images/traidat.png" alt="Earth" />
        </EarthImage>

        <div
          style={{
            textAlign: "center",
            marginTop: "4rem",
            position: "relative",
            zIndex: 10,
          }}
        >
          <Button href="contact">{t("certifications.contactButton")}</Button>
        </div>
      </Container>
    </CertificationsSection>
  );
};
