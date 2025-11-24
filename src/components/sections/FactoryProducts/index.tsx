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
    transform: scale(0.9);
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
  background-color: var(--bg);
  position: relative;
  overflow: hidden;
  padding-top: 0;

  @media (max-width: 68px) {
    padding-top: 0;
  }
`;

const DecorativeBackground = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -40%);
  width: 120%;
  pointer-events: none;
  z-index: 1000;

  img {
    width: 100%;
    display: block;
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 150%;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const BrushDecoration = styled.div`
  aspect-ratio: 1004 / 964;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  mix-blend-mode: soft-light;
  pointer-events: none;
  z-index: 1000;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 60%;
  }
`;

const BigTitle = styled.h2`
  font-family: "SVN-Bebas Neue Pro", sans-serif;
  text-transform: uppercase;
  font-size: 20rem;
  line-height: 0.8;
  color: var(--bgs);
  position: relative;
  margin: 0;
  z-index: 2;
  animation: ${fadeUpAnim} 1s ease-out;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    left: 0;
    background: linear-gradient(to top, #3572d6 0%, transparent);
  }

  @media (max-width: 1200px) {
    font-size: 14rem;
  }

  @media (max-width: 800px) {
    font-size: 7rem;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(2.5rem, 3vw, 6rem);
  color: white;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 0;
  position: relative;
  z-index: 2;
  animation: ${fadeUpAnim} 1s ease-out 0.3s backwards;

  @media (max-width: 1200px) {
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 1rem;
  }
`;

const ImageSection = styled.div`
  position: relative;
  padding-top: 4rem;

  /* White background at bottom */
  &::after {
    content: "";
    position: absolute;
    height: 50%;
    width: 100%;
    left: 0;
    bottom: 0;
    background-color: white;
    z-index: 0;
    transform: translateY(1px);
  }

  /* Wave at middle */
  &::before {
    content: "";
    position: absolute;
    width: 100vw;
    height: calc(58 / 1512 * 100vw);
    mask-image: url("/assets/images/vom.svg");
    mask-size: cover;
    mask-repeat: no-repeat;
    background-color: white;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 2px);
    z-index: 1;

    @media (max-width: 768px) {
      height: 40px;
    }
  }

  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`;

const ImageWrapper = styled.div`
  width: 20%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  animation: ${zoomInAnim} 1s ease-out;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    width: 35%;
  }

  @media (max-width: 500px) {
    width: 55%;
  }
`;

const ImageInner = styled.div`
  display: block;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
  filter: drop-shadow(0px 21px 31.9px rgba(0, 0, 0, 0.25));
  border-radius: 50%;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25));
  }
`;

const BottomSection = styled.div`
  background-color: white;
  position: relative;
  z-index: 2;
  padding-bottom: 8rem;

  @media (max-width: 768px) {
    padding-bottom: 2rem;
  }
`;

const WaveContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 25vh;
  min-height: 150px;
  max-height: 250px;
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

const Wave = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1000;

  .wave-line {
    animation: ${waveAnim} 15s linear infinite;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem 4rem;
  background-color: var(--bg);
  color: white;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.6rem;
  text-decoration: none;
  box-shadow: 0 8px 30px rgba(67, 121, 242, 0.35);
  cursor: pointer;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  animation: ${fadeUpAnim} 0.8s ease-out 0.5s backwards;

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 1.2rem 3rem;
    font-size: 1.4rem;
  }
`;

// Main Component
const FactoryProducts: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <StyledSection className="sec-fac-our">
      {/* Decorative Background */}
      <DecorativeBackground>
        <img src="/assets/images/fac-sea-dec.png" alt="" />
      </DecorativeBackground>

      <Header>
        {/* Brush Decoration */}
        <BrushDecoration>
          <img src="/assets/images/brushSea.png" alt="" />
        </BrushDecoration>

        <BigTitle data-aos="fade-up">
          {t("factory.products.title", { defaultValue: "SEAFOOD" })}
        </BigTitle>

        <Subtitle data-aos="fade-up" data-aos-delay="200">
          {t("factory.products.subtitle", {
            defaultValue: "Sản phẩm hải sản cao cấp",
          })}
        </Subtitle>
      </Header>

      <ImageSection>
        <ImageWrapper data-aos="zoom-in" data-aos-delay="400">
          <ImageInner>
            <img
              src="/assets/images/shrimp/2021/04/BLACK-TIGER-COOKED-HEADLESS-SHELL-ON-scaled-1024x774.jpg"
              alt="Seafood Products"
              loading="lazy"
            />
          </ImageInner>
        </ImageWrapper>
      </ImageSection>

      <BottomSection>
        <ButtonWrapper>
          <Button
            href="/products/seafood/shrimp"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {t("factory.products.viewMore")}
          </Button>
        </ButtonWrapper>

        <WaveContainer className="Wave add-class">
          <Wave
            className="waves"
            shapeRendering="auto"
            preserveAspectRatio="none"
            viewBox="0 24 150 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path
                id="gentle-wave-products"
                d="M-160 44c35 0 55-15 90-15s 55 15 90 15 55-15 90-15 55 15 90 15 v44h-360z"
              />
            </defs>
            <g className="parallax">
              <use
                className="wave-line"
                fill="rgba(248, 250, 252, 0.3)"
                y="0"
                x="48"
                xlinkHref="#gentle-wave-products"
              ></use>
              <use
                className="wave-line"
                fill="rgba(248, 250, 252, 0.5)"
                y="3"
                x="48"
                xlinkHref="#gentle-wave-products"
              ></use>
              <use
                className="wave-line"
                fill="rgba(248, 250, 252, 0.8)"
                y="5"
                x="48"
                xlinkHref="#gentle-wave-products"
              ></use>
              <use
                className="wave-line"
                fill="#4379f2"
                y="7"
                x="48"
                xlinkHref="#gentle-wave-products"
              ></use>
            </g>
          </Wave>
        </WaveContainer>
      </BottomSection>
    </StyledSection>
  );
};

export default FactoryProducts;
