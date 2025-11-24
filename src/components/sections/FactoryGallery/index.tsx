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

// Styled Components
const StyledSection = styled.section`
  position: relative;
  width: 100%;
  background: linear-gradient(180deg, #F0F4F8 0%, #FFFFFF 100%);
  padding: 8rem 0;
  padding-bottom: calc(8rem + var(--wave));
  overflow: hidden;

  /* Wave at bottom - curving up */
  &::after {
    content: "";
    position: absolute;
    width: 100vw;
    height: calc(58 / 1512 * 100vw);
    mask-image: url("/assets/images/vom.svg");
    mask-size: cover;
    mask-repeat: no-repeat;
    background-color: #e3f4ff;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;

    @media (max-width: 768px) {
      height: 40px;
    }
  }

  @media (max-width: 768px) {
    padding: 5rem 0;
    padding-bottom: calc(5rem + 40px);
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
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

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
  transition: all 0.4s ease;
  animation: ${zoomInAnim} 0.6s ease-out;
  background: #fff;
  cursor: pointer;
  height: 400px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

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
  transition: transform 0.5s ease;

  ${GalleryItem}:hover & {
    transform: scale(1.1);
  }
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
  transition: opacity 0.4s ease;

  ${GalleryItem}:hover & {
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
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
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Component
const FactoryGallery: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const galleryItems = [
    {
      image: "/assets/images/factory/z2434395786165_9336e3796244039ddb521b16f0db1c99-1024x498.jpg",
      title: t("factory.gallery.item1.title"),
      description: t("factory.gallery.item1.description"),
    },
    {
      image: "/assets/images/factory/z2434395804396_739d4a0ff8815c1d80fcf9ac0d9acdb5-1024x768.jpg",
      title: t("factory.gallery.item2.title"),
      description: t("factory.gallery.item2.description"),
    },
    {
      image: "/assets/images/factory/z2434395847398_a744e559e63afe6f438be22fe49ed3a6-1024x498.jpg",
      title: t("factory.gallery.item3.title"),
      description: t("factory.gallery.item3.description"),
    },
    {
      image: "/assets/images/factory/z2434395853572_473139165c5cca407314c396e9394cb2-1024x768.jpg",
      title: t("factory.gallery.item4.title"),
      description: t("factory.gallery.item4.description"),
    },
    {
      image: "/assets/images/factory/z2434395866789_8ca6c8133021931481916688c322ac97-1024x498.jpg",
      title: t("factory.gallery.item5.title"),
      description: t("factory.gallery.item5.description"),
    },
    {
      image: "/assets/images/factory/z2434395904092_1d7f9294c66c007699326b35cf3eeded-1024x768.jpg",
      title: t("factory.gallery.item6.title"),
      description: t("factory.gallery.item6.description"),
    },
  ];

  return (
    <StyledSection>
      <Container>
        <HeaderWrapper data-aos="fade-up">
          <Title>{t("factory.gallery.title")}</Title>
          <Description>{t("factory.gallery.description")}</Description>
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
    </StyledSection>
  );
};

export default FactoryGallery;

