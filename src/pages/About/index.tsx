import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import { Wave } from "../../components/common/Wave";
import { SEO } from "../../components/common/SEO";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const PageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

// Banner Section
const BannerSection = styled.section`
  position: relative;
  width: 100%;
  min-height: calc((858 / 1512) * 100vw);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/assets/images/blur.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 2;
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    min-height: calc((800 / 1400) * 100vw);
  }

  @media (max-width: 768px) {
    min-height: 300px;
  }

  @media (max-width: 480px) {
    min-height: 250px;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  animation: zoomIn 20s ease-out forwards;

  @keyframes zoomIn {
    to {
      transform: scale(1);
    }
  }
`;

// Hero Section - Match exact HTML structure
const HeroSection = styled.section`
  position: relative;
  background: white;
  overflow: hidden;
`;

const HomesAb = styled.div`
  position: relative;
  padding: 8rem 0;

  @media (max-width: 1024px) {
    padding: 6rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 0;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      180deg,
      #ebf1ff 25.25%,
      rgba(235, 241, 255, 0) 52.09%
    );
    transform: matrix(-1, 0, 0, 1, 0, 0);
    top: 0;
    left: 0;
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.7);
    opacity: 0;

    @media (max-width: 780px) {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const HomesAbCtn = styled.div`
  min-height: calc(100vh - 9.6rem);

  @media (max-width: 1200px) {
    min-height: calc((918 / 1512) * 100vw);
  }
`;

const TitleHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  margin-bottom: 3.2rem;
`;

const MainTitle = styled.h3`
  font-size: clamp(2.7rem, calc(1.9541rem + 1.0656vw), 4rem);
  font-weight: 700;
  font-family: "Inter", sans-serif;
  color: #00215e;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out forwards;
`;

const Description = styled.p`
  font-size: 1.6rem;
  color: #021441;
  line-height: 1.8;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out 0.15s forwards;
`;

const ButtonWrapper = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out 0.3s forwards;
  display: flex;
  justify-content: center;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  text-align: center;
  cursor: pointer;
  border-radius: 100rem;
  transition: 0.4s ease;
  overflow: hidden;
  position: relative;
  gap: 1rem;
  font-size: 1.8rem;
  height: 4.8rem;
  background-color: #6ec207;
  border: 0.1rem solid transparent;
  min-width: 16.3rem;
  white-space: nowrap;
  text-decoration: none;

  > * {
    position: relative;
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transform: scaleY(0);
    transform-origin: bottom right;
    transition: transform 0.5s ease;
    background-color: white;
  }

  span {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    transition: 0.4s;
    gap: 1rem;
    color: white;
    line-height: 1;
    padding: 1rem 2rem;
  }

  &:hover {
    border-color: #6ec207;

    &::after {
      transform-origin: top right;
      transform: scaleY(1);
    }

    span {
      color: #6ec207;
    }
  }

  @media (max-width: 1200px) {
    height: 4rem;

    span {
      font-size: 1.4rem;
    }
  }
`;

// Timeline Section
const TimelineSection = styled.section`
  position: relative;
  background: white;
  padding: calc((180 / 1512) * 100vw) 1.5rem;
  padding-bottom: calc((180 / 1512) * 100vw + 8rem);
  overflow: hidden;
  margin-top: calc(-1 * (180 / 1512) * 100vw);

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    aspect-ratio: 1512 / 58;
    background-image: url("/assets/images/vom.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
    padding-bottom: 8rem;
  }
`;

const TimelineWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;

  @media (max-width: 1200px) {
    padding: 0 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const TimelineItem = styled.div<{ $isVisible: boolean; $isEven?: boolean }>`
  position: relative;
  margin-bottom: 40rem;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : "none")} 1s ease-out;

  &:last-child {
    margin-bottom: 0;
  }

  ${({ $isEven }) =>
    $isEven &&
    `
    ${TimelineContent} {
      flex-direction: row-reverse;
    }
    text-align: right;
  `}

  @media (max-width: 768px) {
    margin-bottom: 8rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 5rem;

    ${({ $isEven }) =>
      $isEven &&
      `
      ${TimelineContent} {
        flex-direction: row;
      }
      text-align: left;
    `}
  }
`;

const DecorationImage = styled.div<{ $isEven?: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${({ $isEven }) => ($isEven ? "120%" : "130%")};
  aspect-ratio: ${({ $isEven }) => ($isEven ? "1514 / 979" : "1646 / 861")};
  opacity: 0.4;
  pointer-events: none;

  ${({ $isEven }) =>
    $isEven &&
    `
    transform: translate(-50%, -45%);
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

const TimelineContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 0;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    gap: 0;
    align-items: flex-start;
  }
`;

const TextContent = styled.div<{ $color?: string }>`
  color: ${({ $color }) => $color || "#4379f2"};

  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-bottom: 2rem;
  }
`;

const Year = styled.p`
  font-size: 28rem;
  font-weight: 700;
  font-family: "SVN-BebasNeuePro", sans-serif;
  color: currentColor;
  opacity: 0.3;
  line-height: 0.8;
  margin-bottom: -4rem;
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 0.6s ease-out 0.3s forwards;
  margin: 0;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    left: 0;
    background: linear-gradient(to top, white 20%, transparent);
  }

  @media (max-width: 1200px) {
    font-size: 20rem;
    margin-bottom: -3rem;
  }

  @media (max-width: 900px) {
    font-size: 10rem;
    margin-bottom: 0;
  }

  @media (max-width: 968px) {
    font-size: 6rem;
    margin-bottom: 0;
    opacity: 1;
    line-height: 1;
    margin: 0 0 0.5rem 0;

    &::after {
      display: none;
    }
  }

  @media (max-width: 480px) {
    font-size: 4.5rem;
    background: linear-gradient(
      to bottom,
      currentColor 0%,
      currentColor 50%,
      transparent 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ContentTitle = styled.h2`
  font-size: clamp(2.5rem, calc(0.4918rem + 2.8689vw), 6rem);
  font-weight: 700;
  font-family: "SVN-BebasNeuePro", sans-serif;
  color: currentColor;
  margin-bottom: 1rem;
  text-transform: uppercase;
  line-height: 1;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out 0.4s forwards;
  position: relative;
  z-index: 2;
  margin: 0 0 0.5rem 0;

  @media (max-width: 1200px) {
    font-size: clamp(2rem, calc(0.3934rem + 2.2951vw), 4rem);
  }

  @media (max-width: 900px) {
    font-size: 3rem;
  }

  @media (max-width: 968px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    opacity: 1;
    animation: none;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }
`;

const ContentSubtitle = styled.h3`
  font-size: clamp(2.2rem, calc(1.6262rem + 0.8197vw), 3.2rem);
  font-weight: 700;
  font-family: "SVN-BebasNeuePro", sans-serif;
  color: currentColor;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out 0.5s forwards;
  position: relative;
  z-index: 2;
  margin: 0 0 0.3rem 0;

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }

  @media (max-width: 968px) {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    opacity: 1;
    animation: none;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }
`;

const ContentText = styled.p`
  font-size: 1.6rem;
  color: currentColor;
  line-height: 1.8;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out 0.6s forwards;
  margin: 0;

  @media (max-width: 900px) {
    font-size: 1.4rem;
  }

  @media (max-width: 968px) {
    font-size: 1.3rem;
    line-height: 1.5;
    opacity: 1;
    animation: none;
    margin: 0 0 0.5rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.5;
    margin: 0 0 0.5rem 0;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  border-radius: 2.4rem;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out 1s forwards;
  padding-top: calc((409 / 569) * 100%);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    transition: background 0.3s ease;
    z-index: 1;
  }

  &:hover::after {
    background: rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 968px) {
    opacity: 1;
    animation: none;
    padding-top: 200%;
  }

  @media (max-width: 480px) {
    border-radius: 1.5rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    padding-top: 150%;
  }
`;

const VideoThumbnail = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const VideoText = styled.span<{ $color?: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ $color }) => $color || "#4379f2"};
  font-size: 2rem;
  font-weight: 700;
  white-space: nowrap;
  background: white;
  padding: 1rem 3.2rem;
  border-radius: 100rem;
  z-index: 2;
  transition: all 0.4s ease;
  cursor: pointer;

  ${VideoWrapper}:hover & {
    background: ${({ $color }) => $color || "#4379f2"};
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0.8rem 2rem;
  }
`;

const VideoModal = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  aspect-ratio: 16 / 9;

  video {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: transparent;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    top: -40px;
    font-size: 2.5rem;
  }
`;

export const About: React.FC = () => {
  const { t } = useTranslation();
  const [videoModal, setVideoModal] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setIsVisible(true);
            } else {
              const index = itemRefs.current.indexOf(
                entry.target as HTMLDivElement
              );
              if (index !== -1 && !visibleItems.includes(index)) {
                setVisibleItems((prev) => [...prev, index]);
              }
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleItems]);

  const openVideo = (videoSrc: string) => {
    setVideoModal(videoSrc);
  };

  const closeVideo = () => {
    setVideoModal(null);
  };

  return (
    <PageWrapper>
      <SEO
        title={`${t("about.titleFull")} - Thai Minh Long Company Limited`}
        description={t("about.descriptionFull")}
        keywords="thai minh long company limited, introduction, seafood, export"
      />
      {/* Banner */}
      <BannerSection>
        <BannerImage
          src="/assets/images/tml-seafood.jpg"
          alt="About Thai Minh Long Company Limited"
        />
      </BannerSection>

      {/* Hero Section */}
      <HeroSection ref={sectionRef}>
        <HomesAb>
          <HeroBackground>
            <img
              src="/assets/images/shrimp/2019/12/TONG-THE-CTy-scaled.jpg"
              alt="Background"
            />
          </HeroBackground>
          <Container>
            <HomesAbCtn>
              <TitleHead>
                <div>
                  <MainTitle>{t("about.titleFull")}</MainTitle>
                </div>
                <div>
                  <Description>{t("about.descriptionFull")}</Description>
                </div>
                <ButtonWrapper>
                  <Button href="/factory">
                    <span>{t("certifications.button")}</span>
                  </Button>
                </ButtonWrapper>
              </TitleHead>
            </HomesAbCtn>
          </Container>
        </HomesAb>
      </HeroSection>

      {/* Timeline Section */}
      <TimelineSection>
        <Wave
          position="top"
          colors={[
            "rgba(255, 255, 255, 0.1)",
            "rgba(255, 255, 255, 0.3)",
            "rgba(255, 255, 255, 0.7)",
            "#ffffff",
          ]}
        />
        <TimelineWrapper>
          {/* 2006 - Seafood Story */}
          <TimelineItem
            ref={(el) => {
              itemRefs.current[0] = el;
            }}
            $isVisible={visibleItems.includes(0)}
            $isEven={false}
          >
            <DecorationImage $isEven={false}>
              <img src="/assets/images/seaDec.png" alt="Seafood Decoration" />
            </DecorationImage>
            <TimelineContent>
              <TextContent $color="#4379f2">
                <Year>{t("aboutTimeline.seafood.year")}</Year>
                <ContentTitle>{t("aboutTimeline.seafood.title")}</ContentTitle>
                <ContentSubtitle>
                  {t("aboutTimeline.seafood.company")}
                </ContentSubtitle>
                <ContentText>
                  {t("aboutTimeline.seafood.description")}
                </ContentText>
              </TextContent>
              <VideoWrapper
                onClick={() => openVideo("/assets/tml-seafood-video.mp4")}
              >
                <VideoThumbnail
                  src="/assets/images/Trinity-9TRINITY-MY-THO.jpg"
                  alt="Trinity Seafood Factory"
                />
                <VideoText $color="#4379f2">Xem nhà máy</VideoText>
              </VideoWrapper>
            </TimelineContent>
          </TimelineItem>

          {/* 2023 - Fruits Story */}
          <TimelineItem
            ref={(el) => {
              itemRefs.current[1] = el;
            }}
            $isVisible={visibleItems.includes(1)}
            $isEven={true}
          >
            <DecorationImage $isEven={true}>
              <img src="/assets/images/fruitDec.png" alt="Fruit Decoration" />
            </DecorationImage>
            <TimelineContent>
              <VideoWrapper
                onClick={() => openVideo("/assets/tml-fruits-video.mp4")}
              >
                <VideoThumbnail
                  src="/assets/images/extensive-farm/z2426985055991_1155cfe8b537fb5d90b6242c13d26061-1024x768.jpg"
                  alt="Thai Minh Long Farm"
                />
                <VideoText $color="#6EC207">{t("hero.farmButton")}</VideoText>
              </VideoWrapper>
              <TextContent $color="#6EC207">
                <Year>{t("aboutTimeline.farm.year")}</Year>
                <ContentTitle>{t("aboutTimeline.farm.title")}</ContentTitle>
                <ContentSubtitle>
                  {t("aboutTimeline.farm.company")}
                </ContentSubtitle>
                <ContentText>{t("aboutTimeline.farm.description")}</ContentText>
              </TextContent>
            </TimelineContent>
          </TimelineItem>
        </TimelineWrapper>
        <Wave
          colors={[
            "rgba(120, 140, 180, 0.4)",
            "rgba(90, 120, 190, 0.6)",
            "rgba(67, 105, 210, 0.8)",
            "#4379f2",
          ]}
        />
      </TimelineSection>

      {/* Video Modal */}
      <VideoModal $isOpen={!!videoModal} onClick={closeVideo}>
        <VideoContainer onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeVideo}>&times;</CloseButton>
          {videoModal && (
            <video src={videoModal} controls autoPlay>
              Your browser does not support the video tag.
            </video>
          )}
        </VideoContainer>
      </VideoModal>
    </PageWrapper>
  );
};
