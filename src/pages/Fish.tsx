import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Wave as HomeWave } from "../components/common/Wave";
import { SEO } from "../components/common/SEO";

const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 0;
  font-family: "Montserrat", "Segoe UI", Arial, sans-serif;
  background: linear-gradient(180deg, #f7fafd 0%, #e3f0ff 100%);
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  color: #0d47a1;
  font-size: 3.2rem;
  font-family: "Montserrat", "Segoe UI", Arial, sans-serif;
  font-weight: 900;
  text-align: center;
  letter-spacing: 0.5px;
  transition: color 0.3s;
`;
const Desc = styled.p`
  margin-top: 0;
  margin-bottom: 24px;
  color: #222;
  font-size: 1.3rem;
  font-family: "Montserrat", "Segoe UI", Arial, sans-serif;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.1px;
`;
const Grid = styled.div`
  margin-bottom: 0;
  width: 90vw;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    width: 98vw;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    width: 100vw;
  }
`;
const Section = styled.section<{ bg?: string }>`
  min-height: 90vh;
  width: 100vw;
  margin: 0;
  background: ${({ bg }) =>
    bg || "linear-gradient(180deg, #e3f0ff 0%, #f7fafd 100%)"};
  border-radius: 0;
  box-shadow: none;
  padding-top: 48px;
  padding-bottom: 0;
  transition: background 0.5s;
  border: none !important;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: visible;
`;
const SectionContent = styled.div`
  justify-content: center;
  opacity: 1;
  transform: none;
  filter: none;
`;
const ImageBox = styled.div<{ delay?: number }>`
  background: #fff;
  border-radius: 1.1rem;
  box-shadow: 0 2px 12px rgba(30, 144, 255, 0.09);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  opacity: 1;
  filter: none;
  transform: none;
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
    border-radius: 1.1rem 1.1rem 0 0;
    filter: brightness(0.97) contrast(1.05);
  }
`;

const Banner = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  min-height: 110vh;
  max-width: none;
  border-radius: 0;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  background: #222;
  @media (max-width: 900px) {
    min-height: 320px;
  }
`;
const BannerBg = styled.img`
  width: 100vw;
  min-width: 100vw;
  height: 100%;
  min-height: 110vh;
  object-fit: cover;
  filter: brightness(0.55) blur(0.5px);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  @media (max-width: 900px) {
    min-height: 320px;
  }
`;
const BannerOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  min-height: 110vh;
  background: linear-gradient(
    180deg,
    rgba(30, 40, 80, 0.18) 0%,
    rgba(30, 40, 80, 0.38) 60%,
    rgba(30, 40, 80, 0.75) 100%
  );
  z-index: 2;
  pointer-events: none;
  @media (max-width: 900px) {
    min-height: 320px;
  }
`;
const BannerContent = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  text-align: center;
  padding: 70px 0 60px 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Oswald", "Montserrat", "Segoe UI", Arial, sans-serif;
  font-size: 2.1rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  opacity: 1;
  pointer-events: auto;
  transform: none;
  @media (max-width: 900px) {
    padding: 32px 0 18px 0;
    font-size: 1.2rem;
  }
`;
const BannerTitle = styled.h1`
  color: #ffffff;
  font-weight: 700;
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  margin: 0 0 1.8rem 0;
  letter-spacing: 0.2em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  font-family: "SVN-BebasNeuePro", "Bebas Neue", Arial, sans-serif;
  line-height: 1.3;
  text-transform: uppercase;
  font-style: normal;
  opacity: 0;
  animation: fadeInTitle 1.2s ease-in-out 0.2s forwards;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    letter-spacing: 0.15em;
    line-height: 1.25;
  }

  @keyframes fadeInTitle {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const BannerDesc = styled.div`
  color: rgba(255, 255, 255, 0.95);
  font-size: clamp(1.4rem, 2vw, 1.6rem);
  text-align: center;
  max-width: 900px;
  margin: 0 auto 2.5rem auto;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  line-height: 1.6;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  animation: fadeInTitle 1.2s ease-in-out 0.6s forwards;

  letter-spacing: 0.015em;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.8rem;
    max-width: 95%;
    line-height: 1.55;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.8rem;
    max-width: 95%;
    line-height: 1.55;
  }

  @keyframes fadeInTitle {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const BannerWaveContainer = styled.div`
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

const WaveContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 64px;
  overflow: visible;
  margin: -32px 0 0 0;
  padding: 0;
  z-index: 2;
`;
const FooterWaveContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 64px;
  overflow: visible;
  margin: -32px 0 0 0;
  padding: 0;
  z-index: 2;
`;

const fishImages = [
  "/assets/images/fish/2021/05/WHOLE-ROUND-TILAPIA-768x1024.jpg",
  "/assets/images/fish/2021/05/WHOLE-ROUND-BARRAMUNDI-1024x767.jpg",
  "/assets/images/fish/2021/05/RED-TILAPIA-FILLET-1024x768.jpg",
  "/assets/images/fish/2021/05/BARRAMUNDI-SKINLESS-FILLET-1024x768.jpg",
  "/assets/images/fish/2021/05/BARRAMUNDI-FILLET-PORTION-1024x952.jpg",
];

const FishPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title="Cá - Thai Minh Long Seafood" />

      <PageWrapper>
        <Banner>
          <BannerBg
            src="/assets/images/shrimp/2019/12/TONG-THE-CTy-scaled.jpg"
            alt="Nhà máy Thai Minh Long"
          />
          <BannerOverlay />
          <BannerContent>
            <BannerTitle>{t("pages.fish.title")}</BannerTitle>
            <BannerDesc>{t("pages.fish.description")}</BannerDesc>
          </BannerContent>
          {/* Sóng SVG cao sát chân banner */}
          <BannerWaveContainer>
            <svg
              className="waves"
              shapeRendering="auto"
              preserveAspectRatio="none"
              viewBox="0 24 150 28"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                position: "relative",
                zIndex: 2,
              }}
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c35 0 55-15 90-15s 55 15 90 15 55-15 90-15 55 15 90 15 v44h-360z"
                />
              </defs>
              <g className="parallax">
                <use
                  fill="rgba(227, 240, 255, 0.3)"
                  y="0"
                  x="48"
                  xlinkHref="#gentle-wave"
                ></use>
                <use
                  fill="rgba(227, 240, 255, 0.5)"
                  y="3"
                  x="48"
                  xlinkHref="#gentle-wave"
                ></use>
                <use
                  fill="rgba(227, 240, 255, 0.8)"
                  y="5"
                  x="48"
                  xlinkHref="#gentle-wave"
                ></use>
                <use fill="#e3f0ff" y="7" x="48" xlinkHref="#gentle-wave"></use>
              </g>
            </svg>
          </BannerWaveContainer>
        </Banner>
        <Section bg="linear-gradient(180deg, #e3f0ff 0%, #f7fafd 100%)">
          <SectionContent>
            <Title>{t("pages.fish.title")}</Title>
            <Desc>{t("pages.fish.description")}</Desc>
            <Grid>
              {fishImages.map((src, idx) => (
                <ImageBox key={src} delay={idx * 80}>
                  <img src={src} alt={"Cá " + (idx + 1)} loading="lazy" />
                </ImageBox>
              ))}
            </Grid>
          </SectionContent>
        </Section>
        <FooterWaveContainer>
          <HomeWave
            colors={["#b2c8f7", "#b2c8f7", "#7fa7ef", "#4379f2"]}
            position="bottom"
          />
        </FooterWaveContainer>
      </PageWrapper>
    </>
  );
};

export default FishPage;
