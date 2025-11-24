import React from "react";
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
`;

const WaterAnimation = styled.div`
  position: absolute;
  bottom: -100px;
  left: 0;
  width: 100%;
  height: 400px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(67, 122, 242, 0.03) 30%,
    rgba(67, 122, 242, 0.05) 60%,
    rgba(67, 122, 242, 0.08) 100%
  );
  border-radius: 50% 50% 0 0;
  animation: ${float} 8s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;

  @media (max-width: 768px) {
    height: 250px;
    bottom: -50px;
  }
`;

const DecorativeElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`;

const FloatingImage = styled.div<{ $delay?: string; $duration?: string }>`
  position: absolute;
  animation: ${float} ${({ $duration }) => $duration || "6s"} ease-in-out
    infinite;
  animation-delay: ${({ $delay }) => $delay || "0s"};
  opacity: 0.15;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.1));

  img {
    width: 100%;
    height: auto;
  }

  &:nth-child(1) {
    top: 10%;
    left: 5%;
    width: 120px;
  }

  &:nth-child(2) {
    top: 30%;
    right: 10%;
    width: 100px;
  }

  &:nth-child(3) {
    bottom: 20%;
    left: 15%;
    width: 150px;
  }

  &:nth-child(4) {
    top: 50%;
    right: 5%;
    width: 90px;
  }

  @media (max-width: 768px) {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      width: 60px;
    }
  }
`;

interface BackgroundWaveProps {
  type?: "seafood" | "fruits" | "default";
  showWater?: boolean;
  showDecorations?: boolean;
}

export const BackgroundWave: React.FC<BackgroundWaveProps> = ({
  type = "default",
  showWater = true,
  showDecorations = false,
}) => {
  const getDecorationImages = () => {
    if (type === "seafood") {
      return [
        "https://trinityvietnam.vn/template/assets/images/tom.png",
        "https://trinityvietnam.vn/template/assets/images/ca.png",
        "https://trinityvietnam.vn/template/assets/images/cua.png",
      ];
    } else if (type === "fruits") {
      return [
        "https://trinityvietnam.vn/template/assets/images/xoai.png",
        "https://trinityvietnam.vn/template/assets/images/chuoi.png",
        "https://trinityvietnam.vn/template/assets/images/mit.png",
      ];
    }
    return [];
  };

  const decorationImages = getDecorationImages();

  return (
    <>
      {showWater && <WaterAnimation />}
      {showDecorations && decorationImages.length > 0 && (
        <DecorativeElements>
          {decorationImages.map((src, index) => (
            <FloatingImage
              key={index}
              $delay={`${index * 0.5}s`}
              $duration={`${6 + index}s`}
            >
              <img src={src} alt="" />
            </FloatingImage>
          ))}
        </DecorativeElements>
      )}
    </>
  );
};
