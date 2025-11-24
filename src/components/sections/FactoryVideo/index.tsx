import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import AOS from "aos";

// Keyframes
const waveAnimation = keyframes`
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
`;

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

const pulseAnim = keyframes`
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.8;
  }
`;

// Styled Components
const StyledSection = styled.section`
  position: relative;
  width: 100%;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  padding: 0 0 8rem 0;
  margin: 0;

  @media (max-width: 768px) {
    padding: 0 0 4rem 0;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
`;

const WaveTop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;
  pointer-events: none;

  .waves {
    position: relative;
    width: 100%;
    height: calc(150 / 1512 * 100vw);
    margin-bottom: -7px;
  }

  use {
    animation: ${waveAnimation} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }

  use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }

  use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }

  use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }

  use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
  margin-top: -8rem;
  z-index: 10;
  padding: 0 2rem;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    max-width: calc(100% - 3rem);
    margin-top: -4rem;
    padding: 0 1.5rem;
  }
`;

const BottomDecoration = styled.div`
  width: 100%;
  margin-bottom: -0.8rem;

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const VideoBox = styled.div`
  position: relative;
  width: 100%;
  border-radius: 1.6rem;
  overflow: hidden;
  box-shadow: 0 8px 48px rgba(67, 122, 242, 0.15);
  background: #000;
  transition: all 0.4s ease;

  &:hover {
    box-shadow: 0 12px 64px rgba(67, 122, 242, 0.25);
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    border-radius: 1.2rem;
  }
`;

const VideoInner = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  background: #000;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #000;
  }
`;

const PlayButton = styled.button<{ $isPlaying: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 7.2rem;
  height: 7.2rem;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 5;
  opacity: ${(props) => (props.$isPlaying ? 0 : 1)};
  pointer-events: ${(props) => (props.$isPlaying ? "none" : "all")};
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    animation: ${pulseAnim} 2s ease-out infinite;
  }

  &::after {
    animation-delay: 1s;
  }

  &:hover {
    background: #4379f2;
    transform: translate(-50%, -50%) scale(1.1);

    i {
      color: white;
    }
  }

  i {
    font-size: 2rem;
    color: #4379f2;
    margin-left: 0.3rem;
    transition: color 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 5.6rem;
    height: 5.6rem;

    i {
      font-size: 1.6rem;
    }
  }
`;

const VideoDescription = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding: 0 2rem;

  p {
    color: #666;
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;

    p {
      font-size: 0.9rem;
    }
  }
`;

// Component
const FactoryVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoClick = () => {
    handlePlayPause();
  };

  return (
    <StyledSection className="sec-fac-vid">
      <VideoContainer className="fac-vid">
        {/* Wave Animation Top */}
        <WaveTop className="Wave add-class">
          <svg
            className="waves"
            shapeRendering="auto"
            preserveAspectRatio="none"
            viewBox="0 24 150 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                fill="rgba(255, 255, 255, 0.1)"
                y="0"
                x="48"
                xlinkHref="#gentle-wave"
              />
              <use
                fill="rgba(255, 255, 255, 0.3)"
                y="3"
                x="48"
                xlinkHref="#gentle-wave"
              />
              <use
                fill="rgba(255, 255, 255, 0.7)"
                y="5"
                x="48"
                xlinkHref="#gentle-wave"
              />
              <use
                fill="rgba(255, 255, 255, 0.7)"
                y="7"
                x="48"
                xlinkHref="#gentle-wave"
              />
            </g>
          </svg>
        </WaveTop>

        <VideoWrapper className="fac-vid-video" data-aos="fade-up">
          {/* Bottom Decoration SVG */}
          <BottomDecoration className="fac-vid-video-dec">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1512"
              height="58"
              viewBox="0 0 1512 58"
              fill="none"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_4036_132)">
                <path
                  d="M0 51.5C0 51.5 293 0 756 0C1219 0 1512 51.5 1512 51.5V1003.5H0V51.5Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_4036_132">
                  <rect width="1512" height="58" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </BottomDecoration>

          <VideoBox className="img">
            <VideoInner className="img-inner" onClick={handleVideoClick}>
              <video
                ref={videoRef}
                src="/assets/videos/Phim-GTDN-TRINITY-My-Tho-3k-bitrate.mp4"
                muted
                playsInline
                loop
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                aria-label="Trinity Vietnam factory introduction video"
              />
              <PlayButton
                $isPlaying={isPlaying}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayPause();
                }}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                <i className={`fa-solid fa-${isPlaying ? "pause" : "play"}`}></i>
              </PlayButton>
            </VideoInner>
          </VideoBox>

          <VideoDescription data-aos="fade-up" data-aos-delay="200">
            <p>
              Video giới thiệu nhà máy chế biến hải sản Trinity Vietnam - Tiền Giang
            </p>
          </VideoDescription>
        </VideoWrapper>
      </VideoContainer>
    </StyledSection>
  );
};

export default FactoryVideo;

