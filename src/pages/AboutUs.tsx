import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Wave } from "../components/common/Wave";

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

// Banner Section
const BannerSection = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 400px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 40vh;
    min-height: 300px;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Hero Section with Background
const HeroSection = styled.section`
  position: relative;
  padding: 8rem 0;
  background: white;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 0;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.15;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  text-align: center;
`;

const MainTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: #00215e;
  margin-bottom: 2rem;
  line-height: 1.5;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out forwards;

  @media (max-width: 1200px) {
    font-size: 3.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.6rem;
  color: #333;
  line-height: 1.8;
  max-width: 1000px;
  margin: 0 auto 3rem;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out 0.15s forwards;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out 0.3s forwards;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 1.4rem 3.5rem;
  background: white;
  color: #4379f2;
  border: 2px solid #4379f2;
  border-radius: 50px;
  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #4379f2;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(67, 121, 242, 0.3);
  }
`;

// Timeline Section
const TimelineSection = styled.section`
  position: relative;
  background: #4379f2;
  padding: 8rem 0 10rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 0 8rem;
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
    padding: 0 2rem;
  }
`;

const TimelineItem = styled.div<{ $isVisible: boolean }>`
  position: relative;
  margin-bottom: 8rem;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : "none")} 1s ease-out;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 6rem;
  }
`;

const DecorationImage = styled.div`
  position: absolute;
  right: -100px;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
  height: 400px;
  opacity: 0.1;
  pointer-events: none;

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
    gap: 3rem;
  }
`;

const TextContent = styled.div`
  color: white;
`;

const Year = styled.p`
  font-size: 8rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.3);
  line-height: 1;
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out 0.3s forwards;

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const ContentTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-transform: uppercase;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out 0.4s forwards;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentSubtitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out 0.5s forwards;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ContentText = styled.p`
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out 0.6s forwards;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out 1s forwards;
`;

const VideoThumbnail = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
  aspect-ratio: 16 / 9;
  object-fit: cover;

  ${VideoWrapper}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 968px) {
    aspect-ratio: 3 / 4;
  }

  @media (max-width: 768px) {
    aspect-ratio: 9 / 16;
    max-height: 500px;
  }
`;

const VideoPlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &::before {
    content: "";
    width: 0;
    height: 0;
    border-left: 20px solid #4379f2;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    margin-left: 4px;
  }

  ${VideoWrapper}:hover & {
    background: white;
    transform: translate(-50%, -50%) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;

    &::before {
      border-left-width: 15px;
      border-top-width: 9px;
      border-bottom-width: 9px;
    }
  }
`;

const VideoText = styled.span`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  white-space: nowrap;
  background: rgba(67, 121, 242, 0.9);
  padding: 0.8rem 2rem;
  border-radius: 20px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 0.6rem 1.5rem;
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

export const AboutUs: React.FC = () => {
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
    <>
      {/* Banner */}
      <BannerSection>
        <BannerImage
          src="/assets/images/bn-about.jpg"
          alt="About Trinity Vietnam"
        />
      </BannerSection>

      {/* Hero Section */}
      <HeroSection ref={sectionRef}>
        <HeroBackground>
          <img src="/assets/images/image-9.png" alt="Background" />
        </HeroBackground>
        <Container>
          <MainTitle>
            19 Năm Khẳng Định Vị Thế Hải Sản,
            <br />
            Mở Lối Xuất Khẩu Trái Cây
          </MainTitle>
          <Description>
            Thành lập năm 2006, công ty không ngừng mở rộng sản xuất, nâng cao
            chuỗi cung ứng và mở rộng mạng lưới toàn cầu. Cam kết chất lượng là
            cốt lõi, Trinity cung cấp hải sản tươi ngon và trái cây chế biến
            theo công nghệ tiên tiến, đáp ứng tiêu chuẩn quốc tế.
          </Description>
          <ButtonWrapper>
            <Button href="/factory-seafood">Xem nhà máy</Button>
          </ButtonWrapper>
        </Container>
      </HeroSection>

      {/* Timeline Section */}
      <TimelineSection>
        <Wave
          colors={[
            "rgba(255, 255, 255, 0.1)",
            "rgba(255, 255, 255, 0.3)",
            "rgba(255, 255, 255, 0.7)",
            "#fff",
          ]}
        />
        <TimelineWrapper>
          {/* 2006 - Seafood Story */}
          <TimelineItem
            ref={(el) => {
              itemRefs.current[0] = el;
            }}
            $isVisible={visibleItems.includes(0)}
          >
            <DecorationImage>
              <img src="/assets/images/seaDec.png" alt="Seafood Decoration" />
            </DecorationImage>
            <TimelineContent>
              <TextContent>
                <Year>2006</Year>
                <ContentTitle>CÂU CHUYỆN VỀ HẢI SẢN</ContentTitle>
                <ContentSubtitle>TRINITY VIETNAM Ở TIỀN GIANG</ContentSubtitle>
                <ContentText>
                  Uy tín trong xuất khẩu ghẹ & cá ngừ từ năm 2006. Khởi đầu từ
                  một cơ sở chế biến nhỏ, Trinity Vietnam không ngừng đầu tư
                  công nghệ và kiểm soát chất lượng, vươn tầm quốc tế với cam
                  kết mang đến hải sản Việt Nam cao cấp, an toàn và đạt chuẩn
                  toàn cầu.
                </ContentText>
              </TextContent>
              <VideoWrapper onClick={() => openVideo("/videos/seafood.mp4")}>
                <VideoThumbnail
                  src="/assets/images/Trinity-9TRINITY-MY-THO.jpg"
                  alt="Trinity Seafood Factory"
                />
                <VideoPlayButton />
                <VideoText>Xem nhà máy</VideoText>
              </VideoWrapper>
            </TimelineContent>
          </TimelineItem>

          {/* 2023 - Fruits Story */}
          <TimelineItem
            ref={(el) => {
              itemRefs.current[1] = el;
            }}
            $isVisible={visibleItems.includes(1)}
          >
            <DecorationImage>
              <img src="/assets/images/fruitDec.png" alt="Fruit Decoration" />
            </DecorationImage>
            <TimelineContent>
              <VideoWrapper onClick={() => openVideo("/videos/fruits.mp4")}>
                <VideoThumbnail
                  src="/assets/images/TRINITY-TAY-NINH-55.jpg"
                  alt="Trinity Fruits Factory"
                />
                <VideoPlayButton />
                <VideoText>Xem video</VideoText>
              </VideoWrapper>
              <TextContent>
                <Year>2023</Year>
                <ContentTitle>CÂU CHUYỆN VỀ TRÁI CÂY</ContentTitle>
                <ContentSubtitle>TRINITY VIETNAM Ở TÂY NINH</ContentSubtitle>
                <ContentText>
                  Đến năm 2023, Trinity Vietnam mở rộng sản xuất trái cây nhiệt
                  đới như xoài, dứa, sầu riêng, chuối, chanh dây. Cam kết nguồn
                  nguyên liệu bền vững và công nghệ hiện đại, công ty không
                  ngừng nâng cao chất lượng, đáp ứng nhu cầu toàn cầu về sản
                  phẩm tự nhiên và dinh dưỡng.
                </ContentText>
              </TextContent>
            </TimelineContent>
          </TimelineItem>
        </TimelineWrapper>
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
    </>
  );
};
