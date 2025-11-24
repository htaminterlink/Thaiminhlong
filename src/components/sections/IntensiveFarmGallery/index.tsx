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

const zoomInAnim = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const waveAnim = keyframes`
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
`;

// Styled Components
const StyledSection = styled.section`
  position: relative;
  width: 100%;
  background: linear-gradient(180deg, #f0f4f8 0%, #ffffff 100%);
  padding: 8rem 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 5rem 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  animation: ${fadeUpAnim} 0.8s ease-out;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const Title = styled.h2`
  font-size: clamp(2.8rem, 5.5vw, 4rem);
  font-weight: 700;
  color: #00215e;
  margin: 0 0 1.5rem 0;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    letter-spacing: 0.03em;
  }
`;

const Description = styled.p`
  font-size: clamp(1.05rem, 1.7vw, 1.2rem);
  color: #555;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  font-weight: 400;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  animation: ${zoomInAnim} 0.6s ease-out;
  background: #fff;
  cursor: pointer;
  height: 400px;

  @media (max-width: 768px) {
    border-radius: 12px;
    height: 350px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f0f0f0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
`;

const ContentWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 1.5rem;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
  }
`;

const ItemTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.75rem 0;
  line-height: 1.3;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  margin: 0;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FooterWaveContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 20vh;
  min-height: 120px;
  max-height: 180px;
  z-index: 2;
  pointer-events: none;
  @media (max-width: 768px) {
    height: 13vh;
    min-height: 60px;
    max-height: 90px;
  }
  @media (max-width: 480px) {
    height: 10vh;
    min-height: 40px;
    max-height: 60px;
  }
`;

const FooterWave = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;

  .wave-line {
    animation: ${waveAnim} 15s linear infinite;
  }
`;

// Component
const IntensiveFarmGallery: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const galleryItems = [
    {
      image:
        "/assets/images/intensive-farm/z2425511270341_dd899158671b6ec85ddb0cdd8f95c052-1024x768.jpg",
      title: t("farm.intensive.gallery.item1.title"),
      description: t("farm.intensive.gallery.item1.description"),
    },
    {
      image:
        "/assets/images/intensive-farm/z2425511293915_a08b56d6c9d3a3b0f45c1e3f33f1768d-1024x768.jpg",
      title: t("farm.intensive.gallery.item2.title"),
      description: t("farm.intensive.gallery.item2.description"),
    },
    {
      image:
        "/assets/images/intensive-farm/z2425511303356_a211ee2b46d3db83e36e0c50f59950c2-1024x768.jpg",
      title: t("farm.intensive.gallery.item3.title"),
      description: t("farm.intensive.gallery.item3.description"),
    },
    {
      image:
        "/assets/images/intensive-farm/z2425511327662_22325ae69fbd990ecf3dff003a2465ce-1024x768.jpg",
      title: t("farm.intensive.gallery.item4.title"),
      description: t("farm.intensive.gallery.item4.description"),
    },
    {
      image:
        "/assets/images/intensive-farm/z2425511339571_7d74d20cfa6a93bc81295e085e9704e8-1024x768.jpg",
      title: t("farm.intensive.gallery.item5.title"),
      description: t("farm.intensive.gallery.item5.description"),
    },
    {
      image:
        "/assets/images/intensive-farm/z2425511350886_ab19339e5c1db004d59d25def000f303-1024x768.jpg",
      title: t("farm.intensive.gallery.item6.title"),
      description: t("farm.intensive.gallery.item6.description"),
    },
  ];

  return (
    <StyledSection>
      <Container>
        <HeaderWrapper data-aos="fade-up">
          <Title>{t("farm.intensive.title")}</Title>
          <Description>{t("farm.intensive.description")}</Description>
        </HeaderWrapper>

        <GalleryGrid>
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <ImageWrapper>
                <Image src={item.image} alt={item.title} loading="lazy" />
                <ImageOverlay />
                <ContentWrapper>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                </ContentWrapper>
              </ImageWrapper>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </Container>

      <FooterWaveContainer>
        <FooterWave
          className="waves"
          shapeRendering="auto"
          preserveAspectRatio="none"
          viewBox="0 24 150 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="gentle-wave-footer"
              d="M-160 44c35 0 55-15 90-15s 55 15 90 15 55-15 90-15 55 15 90 15 v44h-360z"
            />
          </defs>
          <g className="parallax">
            <use
              className="wave-line"
              fill="#4379f2"
              y="0"
              x="48"
              xlinkHref="#gentle-wave-footer"
            ></use>
            <use
              className="wave-line"
              fill="rgba(67, 121, 242, 0.5)"
              y="3"
              x="48"
              xlinkHref="#gentle-wave-footer"
            ></use>
            <use
              className="wave-line"
              fill="rgba(67, 121, 242, 0.8)"
              y="5"
              x="48"
              xlinkHref="#gentle-wave-footer"
            ></use>
          </g>
        </FooterWave>
      </FooterWaveContainer>
    </StyledSection>
  );
};

export default IntensiveFarmGallery;
