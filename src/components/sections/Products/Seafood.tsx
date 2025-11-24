import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Wave } from "../../common/Wave";
import { WaterEffect } from "../../common/WaterEffect";
import { useTranslation } from "react-i18next";

// Global style for mobile
const mobileImageStyle = `
  @media (max-width: 480px) {
    display: block !important;
    position: relative !important;
    width: 80% !important;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;
    z-index: 5 !important;
    margin: 1rem auto !important;
  }
`;

const SeafoodWrapper = styled.div`
  position: relative;
`;

const SeafoodSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 0 0 0;
  background: #4379f2;
  overflow: hidden;

  @media (max-width: 1200px) {
    min-height: 40vh;
    padding: 3rem 0 0 0;
  }

  @media (max-width: 768px) {
    min-height: auto;
    padding: 3rem 0 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 2rem 0 3rem 0;
  }
`;

const OutlineImage = styled.div<{
  $width: string;
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
  $transform?: string;
  $aspectRatio: string;
}>`
  position: absolute;
  width: ${({ $width }) => $width};
  ${({ $top }) => $top && `top: ${$top};`}
  ${({ $left }) => $left && `left: ${$left};`}
  ${({ $right }) => $right && `right: ${$right};`}
  ${({ $bottom }) => $bottom && `bottom: ${$bottom};`}
  ${({ $transform }) => $transform && `transform: ${$transform};`}
  z-index: 1;
  opacity: 0.2;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

const Container = styled.div`
  max-width: 1512px;
  width: 100%;
  margin: 0 auto;
  padding: 0 4rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  @media (max-width: 480px) {
    padding: 0 1.5rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: calc(5 / 12 * 100%) calc(7 / 12 * 100%);
  gap: 0;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0;
    align-items: center;
  }
`;

const ContentColumn = styled.div<{ $isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0;
  height: 100%;
  justify-content: center;
  padding-bottom: 1.5rem;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateX(${({ $isVisible }) => ($isVisible ? "0" : "-5rem")});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  @media (max-width: 768px) {
    padding-bottom: 0;
    padding-right: 1rem;
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    padding-right: 0.5rem;
    padding-bottom: 0;
  }
`;

const Year = styled.h2`
  font-size: clamp(3rem, 12vw, 15rem);
  font-weight: 500;
  line-height: 0.9;
  color: #7be9ff;
  margin: 0 0 0 115px;
  font-family: "SVN-Bebas Neue Pro", "Bebas Neue", Arial, sans-serif;
  mix-blend-mode: overlay;

  @media (max-width: 768px) {
    margin: 0 0 1rem 0;
    font-size: 10rem;
    line-height: 1;
  }

  @media (max-width: 480px) {
    font-size: 5.5rem;
    margin-bottom: 0.5rem;
  }
`;

const Description = styled.p`
  font-size: clamp(1rem, calc(1.6rem + 0.4vw), 2.4rem);
  line-height: 1.4;
  color: #ffffff;
  margin: 0;
  font-weight: 700;
  padding-left: 3rem;
  position: relative;
  max-width: 50rem;
  left: 20%;

  &::after {
    content: "";
    position: absolute;
    width: 0.2rem;
    height: 100%;
    background: linear-gradient(to bottom, #86f2ff, transparent);
    left: 1.5rem;
    top: 0;
  }

  @media (max-width: 768px) {
    left: 0;
    padding-left: 2rem;
    max-width: 100%;
    font-size: 2.4rem;
    margin-top: 0;
    line-height: 1.4;

    &::after {
      display: block;
      width: 0.15rem;
      height: 80%;
      background: linear-gradient(to bottom, #86f2ff, transparent);
      left: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    line-height: 1.3;
    padding-left: 1rem;
  }
`;

const ImageColumn = styled.div<{ $isVisible: boolean }>`
  position: relative;
  width: calc(7 / 12 * 100%);
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateX(${({ $isVisible }) => ($isVisible ? "0" : "5rem")});
  transition: opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s;

  @media (max-width: 768px) {
    width: 100%;
    transform: none;
    opacity: 1;
  }

  @media (max-width: 480px) {
    width: 100%;
    transform: none;
    opacity: 1;
  }
`;

const ProductBlock = styled.div`
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 85%;

  @media (max-width: 1200px) {
    padding-top: 70%;
  }

  @media (max-width: 768px) {
    position: relative;
    padding-top: 0;
    min-height: auto;
    height: 350px;
  }

  @media (max-width: 480px) {
    position: relative;
    padding-top: 0;
    min-height: auto;
    height: 400px;
    width: 100%;
  }
`;

const ImageInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  @media (max-width: 1200px) {
    transform: scale(0.8);
    transform-origin: center;
  }

  @media (max-width: 768px) {
    position: absolute;
    transform: scale(0.7);
    transform-origin: center center;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 480px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: none;
  }
`;

const DecorativeImage = styled.div<{
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
  $zIndex?: number;
  $width?: string;
  $rotate?: string;
}>`
  position: absolute;
  z-index: ${({ $zIndex }) => $zIndex || 2};
  width: ${({ $width }) => $width || "50%"};
  ${({ $top }) => $top && `top: ${$top};`}
  ${({ $left }) => ($left !== undefined ? `left: ${$left};` : "")}
  ${({ $right }) => ($right !== undefined ? `right: ${$right};` : "")}
  ${({ $bottom }) => $bottom && `bottom: ${$bottom};`}
  ${({ $rotate }) =>
    $rotate
      ? `
    > * {
      transform: rotate(${$rotate});
    }
  `
      : ""}

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 1024px) {
    /* Keep absolute positioning but scale down the entire container */
  }
`;

const DecorativeImageSmall = styled(DecorativeImage)`
  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: block !important;
    position: absolute !important;
    width: 50% !important;
    z-index: 2 !important;
    left: 55% !important;
    right: auto !important;
    bottom: auto !important;
    top: 40% !important;

    &:nth-child(3) {
      left: 60% !important;
      top: 40% !important;
      width: 50% !important;
    }

    &:nth-child(4) {
      left: 65% !important;
      top: 40% !important;
      width: 50% !important;
    }

    &:nth-child(5) {
      left: 30% !important;
      top: 35% !important;
      width: 60% !important;
      z-index: -1 !important;
    }

    &:nth-child(6) {
      display: none !important;
    }
  }
`;

const DecorativeImageWater = styled(DecorativeImage)`
  @media (max-width: 768px) {
    position: absolute;
    width: 150% !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    right: auto !important;
    bottom: 0 !important;
    top: auto !important;
    z-index: 2 !important;
    margin: 0 !important;

    > div {
      transform: none !important;
    }
  }

  @media (max-width: 480px) {
    position: absolute !important;
    width: 110% !important;
    left: auto !important;
    right: -28% !important;
    bottom: -15% !important;
    top: auto !important;
    z-index: -2 !important;
    transform: none !important;
  }
`;
const MainSeafoodImage = styled(DecorativeImage)`
  @media (max-width: 768px) {
    position: absolute;
    width: 150% !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    right: auto !important;
    bottom: 30% !important;
    top: auto !important;
    z-index: 5 !important;
    margin: 0 !important;

    > div {
      transform: none !important;
    }
  }

  @media (max-width: 480px) {
    position: absolute !important;
    width: 130% !important;
    left: 70% !important;
    transform: translateX(-50%) !important;
    right: auto !important;
    bottom: -25% !important;
    top: auto !important;
    z-index: 3 !important;
  }
`;
const ControlsWrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem 0 3rem;
  background: #fff;
  margin-top: -3rem;

  @media (max-width: 768px) {
    padding: 2.5rem 0;
    margin-top: 0;
  }
`;

const ControlInner = styled.div`
  display: flex;
  gap: 2rem;
`;

const ControlButton = styled.a`
  width: 12.4rem;
  height: 12.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  color: #021441;
  background-color: #86f2ff;
  border-radius: 100rem;
  text-align: center;
  position: relative;
  transition: 0.4s;
  text-decoration: none;
  line-height: 1.3;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(134, 242, 255, 0.2);
    border-radius: inherit;
    animation: growsCenter 4s linear infinite;
    z-index: -1;
  }

  @keyframes growsCenter {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    width: 9rem;
    height: 9rem;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 7.5rem;
    height: 7.5rem;
    font-size: 1.3rem;
  }
`;

const Seafood: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <SeafoodWrapper id="seafood" ref={sectionRef}>
      <SeafoodSection>
        <WaterEffect />

        {/* Outline Images - Background decorations */}
        <OutlineImage
          $width="20%"
          $left="0"
          $top="-5%"
          $transform="translate(-20%, 0)"
          $aspectRatio="352/229"
        >
          <img src="/assets/images/tom.png" alt="" />
        </OutlineImage>

        <OutlineImage
          $width="20%"
          $right="0"
          $top="-5%"
          $transform="translate(50%, 0)"
          $aspectRatio="352/229"
        >
          <img src="/assets/images/ca.png" alt="" />
        </OutlineImage>

        <OutlineImage
          $width="30%"
          $left="30%"
          $bottom="0"
          $aspectRatio="352/229"
        >
          <img src="/assets/images/cua.png" alt="" />
        </OutlineImage>

        <Container>
          <ProductGrid>
            <ContentColumn $isVisible={isVisible}>
              <Year>{t("products.year2006")}</Year>
              <Description>{t("products.seafoodDesc")}</Description>
            </ContentColumn>
            <ImageColumn $isVisible={isVisible}>
              <ProductBlock>
                <ImageContainer>
                  <ImageInner>
                    {/* Ảnh chính - composition decB2.png (chứa sẵn 3 cá + cua) */}
                    <MainSeafoodImage
                      $width="180%"
                      $left="60%"
                      $bottom="-18%"
                      $zIndex={3}
                    >
                      <div
                        style={{ transform: "translateY(25%) translateX(0%)" }}
                      >
                        <img
                          src="/assets/images/decB2.png"
                          alt="Seafood composition"
                        />
                      </div>
                    </MainSeafoodImage>

                    {/* decB3 - lát chanh (góc trên bên phải) */}
                    <DecorativeImageSmall
                      $width="80%"
                      $right="0%"
                      $bottom="11%"
                      $zIndex={2}
                      $left="100%"
                    >
                      <div>
                        <img src="/assets/images/decB3.png" alt="" />
                      </div>
                    </DecorativeImageSmall>

                    {/* decB3 - lát chanh xoay 25 độ */}
                    <DecorativeImageSmall
                      $width="80%"
                      $left="110%"
                      $right="5%"
                      $bottom="10%"
                      $rotate="25deg"
                      $zIndex={2}
                    >
                      <div>
                        <img src="/assets/images/decB3.png" alt="" />
                      </div>
                    </DecorativeImageSmall>

                    {/* decB3 - lát chanh xoay 42 độ */}
                    <DecorativeImageSmall
                      $width="80%"
                      $right="5%"
                      $left="120%"
                      $bottom="0%"
                      $rotate="42deg"
                      $zIndex={2}
                    >
                      <div>
                        <img src="/assets/images/decB3.png" alt="" />
                      </div>
                    </DecorativeImageSmall>

                    {/* decB4 - lát chanh lớn background */}
                    <DecorativeImageSmall
                      $width="150%"
                      $right="-5%"
                      $left="80%"
                      $bottom="50%"
                      $zIndex={-1}
                    >
                      <div>
                        <img src="/assets/images/decB4.png" alt="" />
                      </div>
                    </DecorativeImageSmall>

                    {/* decB5 - lát chanh nhỏ */}
                    <DecorativeImageSmall
                      $width="25%"
                      $right="5%"
                      $left="140%"
                      $bottom="30%"
                      $zIndex={2}
                    >
                      <div>
                        <img src="/assets/images/decB5.png" alt="" />
                      </div>
                    </DecorativeImageSmall>

                    {/* decBWater - hiệu ứng nước background */}
                    <DecorativeImageWater
                      $width="180%"
                      $right="-28%"
                      $left="80%"
                      $bottom="2%"
                      $zIndex={-2}
                    >
                      <div>
                        <img src="/assets/images/decBWater.png" alt="" />
                      </div>
                    </DecorativeImageWater>
                  </ImageInner>
                </ImageContainer>
              </ProductBlock>
            </ImageColumn>
          </ProductGrid>
        </Container>
        <Wave colors={["white", "white", "white", "white"]} />
      </SeafoodSection>

      {/* Button nằm ngoài section */}
      <ControlsWrapper>
        <Container>
          <ControlInner>
            <ControlButton href="/products/seafood/shrimp">
              {t("products.viewAllSeafood")}
            </ControlButton>
          </ControlInner>
        </Container>
      </ControlsWrapper>
    </SeafoodWrapper>
  );
};

export { Seafood };
