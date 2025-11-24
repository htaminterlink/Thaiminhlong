import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { BackgroundWave } from "../../common/BackgroundWave";
import { float, jelly } from "../../../styles/animations";
import { Wave } from "../../common/Wave";
import { WaterEffect } from "../../common/WaterEffect";

const ProductsWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const SeafoodSection = styled.section`
  padding: 10rem 0 0 0;
  background: #4379f2;
  position: relative;
  overflow: visible !important;
  color: #fff;
  padding-bottom: 25rem;
  z-index: 1;

  @media (max-width: 1024px) {
    padding: 8rem 0 0 0;
    padding-bottom: 22rem;
  }

  @media (max-width: 768px) {
    padding: 5rem 0 0 0;
    padding-bottom: 15rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0 0 0;
    padding-bottom: 12rem;
  }

  @media (max-width: 430px) {
    padding: 2.5rem 0 0 0;
    padding-bottom: 10rem;
  }

  @media (max-width: 380px) {
    padding: 2rem 0 0 0;
    padding-bottom: 8rem;
  }
`;

const FruitsSection = styled.section`
  padding: 10rem 0 0 0;
  background: #84b92b;
  position: relative;
  overflow: visible;
  color: #fff;
  padding-bottom: 20rem;

  @media (max-width: 1024px) {
    padding: 8rem 0 0 0;
    padding-bottom: 18rem;
  }

  @media (max-width: 768px) {
    padding: 5rem 0 0 0;
    padding-bottom: 12rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0 0 0;
    padding-bottom: 10rem;
  }
`;

const WaterDecoration = styled.div`
  position: absolute;
  bottom: -100px;
  left: 0;
  width: 100%;
  height: 300px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  border-radius: 50% 50% 0 0;
`;

const DecorativeImage = styled.div<{ $delay?: string }>`
  position: absolute;
  opacity: 0.6;

  img {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
  }

  &:nth-child(1) {
    top: 10%;
    left: 5%;
    width: 150px;
  }

  &:nth-child(2) {
    top: 30%;
    right: 10%;
    width: 120px;
  }

  &:nth-child(3) {
    bottom: 20%;
    left: 15%;
    width: 180px;
  }

  @media (max-width: 768px) {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      width: 80px;
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  margin-bottom: 5rem;

  @media (max-width: 480px) {
    margin-bottom: 3rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContentColumn = styled.div``;

const Year = styled.p`
  font-size: 8rem;
  font-weight: 300;
  margin: 0 0 1.5rem 0;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.3);

  @media (max-width: 1024px) {
    font-size: 7rem;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 3.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.9;
  margin: 0;
  color: #fff;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.7;
  }
`;

const ImageColumn = styled.div`
  position: relative;
  min-height: 400px;

  @media (max-width: 1024px) {
    min-height: 350px;
  }

  @media (max-width: 768px) {
    min-height: 300px;
  }

  @media (max-width: 600px) {
    min-height: 250px;
  }

  @media (max-width: 500px) {
    min-height: 200px;
  }
`;

const ProductImages = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ViewAllButton = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding: 2rem 1rem !important;
  width: 100%;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  position: relative;
  z-index: 100 !important;
  min-height: 80px;
  visibility: visible !important;
  opacity: 1 !important;
  pointer-events: auto !important;

  @media (max-width: 768px) {
    margin-top: 2rem;
    padding: 1.5rem 1rem !important;
    min-height: 70px;
  }

  @media (max-width: 480px) {
    margin-top: 1.5rem;
    padding: 1.2rem 0.5rem !important;
    min-height: 60px;
  }

  @media (max-width: 430px) {
    margin-top: 1.2rem;
    padding: 1rem 0.3rem !important;
    min-height: 55px;
  }

  @media (max-width: 380px) {
    margin-top: 1rem;
    padding: 0.8rem 0 !important;
    min-height: 50px;
  }
`;

const ViewAllLink = styled.a`
  display: inline-block;
  font-size: 1.6rem;
  color: #fff;
  text-decoration: none;
  padding: 1.2rem 3rem;
  border: 2px solid #fff;
  border-radius: 50px;
  transition: all 0.3s ease;
  font-weight: 600;

  &:hover {
    background: #fff;
    color: ${(props) => props.theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
    animation: ${jelly} 0.6s ease;
  }

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    padding: 1.1rem 2.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 1rem 2.2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
    padding: 0.85rem 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 0.75rem 1.5rem;
    border: 2px solid #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
  }

  @media (max-width: 430px) {
    font-size: 0.9rem;
    padding: 0.7rem 1.3rem;
    white-space: nowrap;
  }

  @media (max-width: 380px) {
    font-size: 0.85rem;
    padding: 0.65rem 1.2rem;
    white-space: nowrap;
  }
`;

const WaveContainer = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 80px;
  }

  @media (max-width: 768px) {
    svg {
      height: 40px;
    }
  }
`;

export const Products: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ProductsWrapper>
      {/* Seafood Section - 2006 */}
      <SeafoodSection>
        <WaterEffect />
        <Container>
          <ProductGrid>
            <ContentColumn>
              <Year>2006</Year>
              <Description>{t("products.seafoodDesc")}</Description>
            </ContentColumn>
            <ImageColumn>
              <img
                src="https://trinityvietnam.vn/wp-content/uploads/2025/02/homes-p2.png"
                alt={t("products.seafoodAlt")}
                style={{ width: "100%", height: "auto", maxWidth: "500px" }}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://trinityvietnam.vn/template/assets/images/homes-p2.png";
                }}
              />
            </ImageColumn>
          </ProductGrid>
          <ViewAllButton>
            <ViewAllLink href="/products/seafood/shrimp">
              {t("products.viewAllSeafood")}
            </ViewAllLink>
          </ViewAllButton>
        </Container>
        <Wave
          colors={[
            "rgba(132, 185, 43, 0.7)",
            "rgba(132, 185, 43, 0.5)",
            "rgba(132, 185, 43, 0.3)",
            "#84b92b",
          ]}
        />
      </SeafoodSection>

      {/* Fruits Section - 2023 */}
      <FruitsSection>
        <WaterEffect />
        <Container>
          <ProductGrid>
            <ContentColumn>
              <Year>2023</Year>
              <Description>{t("products.fruitsDesc")}</Description>
            </ContentColumn>
            <ImageColumn>
              <img
                src="https://trinityvietnam.vn/wp-content/uploads/2025/02/homes-p1.png"
                alt={t("products.fruitsAlt")}
                style={{ width: "100%", height: "auto", maxWidth: "500px" }}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://trinityvietnam.vn/template/assets/images/homes-p1.png";
                }}
              />
            </ImageColumn>
          </ProductGrid>
          <ViewAllButton>
            <ViewAllLink href="/farm/extensive">
              {t("products.viewAllFarms")}
            </ViewAllLink>
          </ViewAllButton>
        </Container>
        <Wave
          colors={[
            "rgba(255, 255, 255, 0.7)",
            "rgba(255, 255, 255, 0.5)",
            "rgba(255, 255, 255, 0.3)",
            "#fff",
          ]}
        />
      </FruitsSection>
    </ProductsWrapper>
  );
};
