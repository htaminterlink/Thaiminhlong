import React from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import { Wave as HomeWave } from "../components/common/Wave";
import { SEO } from "../components/common/SEO";

const waveAnim = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 10px 0 8px 0;
  text-align: center;
  font-weight: 700;
  color: #316aea;
  background: #f7fafd;
  font-size: 1rem;
  opacity: 0.92;
  pointer-events: none;
  &.overlay {
    opacity: 0.92;
    pointer-events: none;
  }
`;
const Title = styled.h2`
  color: #316aea;
  font-size: 3.2rem;
  font-family: "Montserrat", "Segoe UI", Arial, sans-serif;
  font-weight: 900;
  margin-bottom: 22px;
  text-align: center;
  letter-spacing: 0.5px;
  transition: color 0.3s;

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 12px;
  }
`;
const Desc = styled.p`
  color: #333;
  font-size: 1.55rem;
  font-family: "Montserrat", "Segoe UI", Arial, sans-serif;
  text-align: center;
  margin-bottom: 38px;
  font-weight: 500;
  letter-spacing: 0.1px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 16px;
  }
`;
const Grid = styled.div`
  margin-bottom: 0;
  width: 90vw;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 18px;
    width: 95vw;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    width: 98vw;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 8px;
    width: 100vw;
  }

  @media (max-width: 480px) {
    width: 100%;
    gap: 6px;
  }
`;
const PageWrapper = styled.div`
  padding: 0;
  font-family: "Montserrat", "Segoe UI", Arial, sans-serif;
  background: linear-gradient(180deg, #f7fafd 0%, #e3f0ff 100%);
`;
const Section = styled.section<{ bg?: string }>`
  min-height: 60vh;
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  background: ${({ bg }) =>
    bg || "linear-gradient(180deg, #e3f0ff 0%, #f7fafd 100%)"};
  border-radius: 0;
  box-shadow: none;
  padding: 18px 0 80px 0;
  transition: background 0.5s;
  border: none !important;
  position: relative;
  z-index: 1;
  display: flex;
  overflow: visible;

  @media (max-width: 768px) {
    min-height: 50vh;
    padding: 16px 0 60px 0;
  }

  @media (max-width: 480px) {
    min-height: 40vh;
    padding: 12px 0 40px 0;
  }
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageBox = styled.div<{ delay?: number }>`
  background: #fff;
  border-radius: 1.1rem;
  box-shadow: 0 2px 12px rgba(67, 121, 242, 0.09);
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
  .overlay {
    opacity: 1;
    pointer-events: auto;
    background: rgba(49, 106, 234, 0.13);
    color: #fff;
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
  align-items: center; /* căn giữa dọc */
  justify-content: center; /* căn giữa ngang */
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
  @media (max-width: 600px) {
    padding-top: -50px;
    padding-bottom: 60px;
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

// Danh sách ảnh thực tế, phân loại tôm sống và tôm đã chế biến
const rawShrimp = [
  "/assets/images/shrimp/2021/04/BLACK-TIGER-RAW-BUTTERFLY-scaled-1024x671.jpg",
  "/assets/images/shrimp/2021/04/BLACK-TIGER-RAW-EASY-PEELED-scaled-1024x688.jpg",
  "/assets/images/shrimp/2021/04/BLACK-TIGER-RAW-HEAD-ON-SHELL-ON-BUTTERFLY-CUT-scaled-1024x912.jpg",
  "/assets/images/shrimp/2021/04/BLACK-TIGER-RAW-HEAD-ON-SHELL-ON-scaled-1024x737.jpg",
  "/assets/images/shrimp/2021/04/BLACK-TIGER-RAW-HEAD-ON-SHELL-ON-SKEWER-scaled-1024x630.jpg",
  "/assets/images/shrimp/2021/04/BLACK-TIGER-RAW-HEADLESS-SHELL-ON-scaled-1024x751.jpg",
  "/assets/images/shrimp/2021/04/BLACK-TIGER-RAW-NOBASHI-scaled-1024x683.jpg",
  "/assets/images/shrimp/2021/04/BLACK-TIGER-RAW-PEELED-DEVEINED-TAIL-OFF-ON-TRAY-scaled-1024x713.jpg",
  "/assets/images/shrimp/2021/04/BLACK-TIGER-RAW-PEELED-DEVEINED-TAIL-OFF-scaled-1024x587.jpg",
  "/assets/images/shrimp/2021/04/BLACK-TIGER-RAW-PEELED-DEVEINED-TAIL-ON-scaled-1024x699.jpg",
  "/assets/images/shrimp/2021/04/VANNAMEI-RAW-NOBASHI-scaled-1024x689.jpg",
  "/assets/images/shrimp/2021/04/VANNAMEI-RAW-PEELED-DEVEINED-TAIL-ON-scaled-1024x683.jpg",
];
const cookedShrimp = [
  "/assets/images/shrimp/2021/04/BLACK-TIGER-COOKED-HEAD-ON-SHELL-ON-scaled-1024x583.jpg",
  "/assets/images/shrimp/2021/04/BLACK-TIGER-COOKED-HEADLESS-SHELL-ON-scaled-1024x774.jpg",
  "/assets/images/shrimp/2021/04/BLACK-TIGER-COOKED-PEELED-DEVEINED-TAIL-OFF-ON-TRAY-scaled-1024x646.jpg",
  "/assets/images/shrimp/2021/04/BLACK-TIGER-COOKED-PEELED-DEVEINED-TAIL-OFF-scaled-1024x683.jpg",
  "/assets/images/shrimp/2021/04/BLACK-TIGER-COOKED-PEELED-DEVEINED-TAIL-ON-scaled-1024x705.jpg",
  "/assets/images/shrimp/2021/04/VANNAMEI-COOKED-HEAD-ON-SHELL-ON-scaled-1024x577.jpg",
  "/assets/images/shrimp/2021/04/VANNAMEI-COOKED-PEELED-DEVEINED-TAIL-OFF-MARINATE-SKEWER-scaled-1024x531.jpg",
  "/assets/images/shrimp/2021/04/VANNAMEI-COOKED-PEELED-DEVEINED-TAIL-OFF-scaled-1024x568.jpg",
];

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

const SectionWaveContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 80px;
  margin-top: -40px;
  z-index: 2;
  pointer-events: none;
  @media (max-width: 768px) {
    height: 48px;
    margin-top: -24px;
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

const SectionContent = styled.div`
  opacity: 1;
  filter: none;
  transform: none;
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

const ShrimpPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO title="Tôm - Thai Minh Long Seafood" />
      <PageWrapper>
        <Banner>
          <BannerBg
            src="/assets/images/shrimp/2019/12/TONG-THE-CTy-scaled.jpg"
            alt="Nhà máy Thai Minh Long"
          />
          <BannerOverlay />
          <BannerContent>
            <BannerTitle>{t("pages.shrimp.title")}</BannerTitle>
            <BannerDesc>{t("pages.shrimp.description")}</BannerDesc>
          </BannerContent>
          {/* Sóng động sát chân banner, cao và màu giống section tôm sống */}
          <BannerWaveContainer className="Wave add-class">
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
            </Wave>
          </BannerWaveContainer>
        </Banner>
        {/* Section tôm sống */}
        <Section
          bg="linear-gradient(180deg, #e3f0ff 0%, #f7fafd 100%)"
          style={{ paddingBottom: 0, marginBottom: 0 }}
        >
          <SectionContent>
            <Title>{t("pages.shrimp.rawShrimp")}</Title>
            <Desc>{t("pages.shrimp.rawShrimpDesc")}</Desc>
            <Grid>
              {rawShrimp.map((src, idx) => (
                <ImageBox key={src} delay={idx * 80}>
                  <img src={src} alt={`Raw Shrimp ${idx + 1}`} loading="lazy" />
                  <Overlay className="overlay">{`Raw Shrimp ${
                    idx + 1
                  }`}</Overlay>
                </ImageBox>
              ))}
            </Grid>
          </SectionContent>
        </Section>
        {/* Sóng động chuyển section tôm đã chế biến */}
        <SectionWaveContainer>
          <HomeWave
            colors={["#e6f0ff99", "#e6f0ff66", "#ffe0c266", "#ffe0c2"]}
            position="bottom"
          />
        </SectionWaveContainer>
        {/* Section tôm đã chế biến */}
        <Section bg="#ffe0c2" style={{ marginTop: 0 }}>
          <SectionContent>
            <Title style={{ color: "#e76f51" }}>
              {t("pages.shrimp.cookedShrimp")}
            </Title>
            <Desc>{t("pages.shrimp.cookedShrimpDesc")}</Desc>
            <Grid>
              {cookedShrimp.map((src, idx) => (
                <ImageBox key={src} delay={idx * 80}>
                  <img
                    src={src}
                    alt={`Cooked Shrimp ${idx + 1}`}
                    loading="lazy"
                  />
                  <Overlay
                    className="overlay"
                    style={{ color: "#e76f51", background: "#fff3e6" }}
                  >
                    {`Cooked Shrimp ${idx + 1}`}
                  </Overlay>
                </ImageBox>
              ))}
            </Grid>
          </SectionContent>
        </Section>
        {/* Sóng chuyển tiếp giữa tôm đã chế biến và footer */}
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

export default ShrimpPage;
