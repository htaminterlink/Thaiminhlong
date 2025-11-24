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
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Styled Components
const StyledSection = styled.section`
  background: linear-gradient(180deg, #e3f4ff 0%, #f0f9ff 100%);
  padding: 6rem 0;
  padding-bottom: calc(6rem + var(--wave));
  position: relative;

  /* Wave at bottom - curving up */
  &::after {
    content: "";
    position: absolute;
    width: 100vw;
    height: calc(58 / 1512 * 100vw);
    mask-image: url("/assets/images/vom.svg");
    mask-size: cover;
    mask-repeat: no-repeat;
    background-color: white;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;

    @media (max-width: 768px) {
      height: 40px;
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
    padding-bottom: calc(4rem + 40px);
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Title = styled.h3`
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 700;
  color: #00215e;
  text-align: center;
  margin: 0 0 3rem 0;
  letter-spacing: 0.02em;
  animation: ${fadeUpAnim} 0.8s ease-out;
  text-transform: uppercase;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    letter-spacing: 0.01em;
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.8rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const GalleryItem = styled.div`
  border-radius: 1.6rem;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(67, 122, 242, 0.08);
  background: #fff;
  transition: all 0.4s ease;
  cursor: pointer;
  animation: ${zoomInAnim} 0.6s ease-out;
  animation-delay: calc(var(--delay) * 0.1s);
  animation-fill-mode: backwards;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 40px rgba(67, 122, 242, 0.15);

    img {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    border-radius: 1.2rem;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const Description = styled.p`
  text-align: center;
  color: #4379f2;
  font-weight: 500;
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  animation: ${fadeUpAnim} 0.8s ease-out 0.4s backwards;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Component
const ColdStorageSection: React.FC = () => {
  const { t } = useTranslation();

  const coldStorageImages = [
    "/assets/images/cold storage/z2434395834137_465bc9ffa709b37c26e192e6f1fbfa4e-768x1024.jpg",
    "/assets/images/cold storage/z2434395799026_25bc2908ed159f6c98bfaf5786974ef5-768x1024.jpg",
    "/assets/images/cold storage/z2434379105348_4d90603b67d33da6c40bc56b1f61a516-768x1024.jpg",
    "/assets/images/cold storage/z2434379093104_f269e29de9911b8fa728dac9be463c4e-768x1024.jpg",
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <StyledSection className="sec-cold-storage">
      <Container>
        <Title data-aos="fade-up">{t("factory.coldStorage.title")}</Title>

        <Gallery className="cold-storage-gallery">
          {coldStorageImages.map((src, idx) => (
            <GalleryItem
              key={idx}
              style={{ "--delay": idx } as React.CSSProperties}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <GalleryImage
                src={src}
                alt={`${t("factory.coldStorage.title")} ${idx + 1}`}
                loading="lazy"
              />
            </GalleryItem>
          ))}
        </Gallery>

        <Description data-aos="fade-up" data-aos-delay="400">
          {t("factory.coldStorage.description")}
        </Description>
      </Container>
    </StyledSection>
  );
};

export default ColdStorageSection;
