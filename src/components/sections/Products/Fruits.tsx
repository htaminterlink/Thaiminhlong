import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Wave } from "../../common/Wave";
import { WaterEffect } from "../../common/WaterEffect";

const FruitsSection = styled.section`
  padding: 10rem 0 0 0;
  background: #84b92b;
  position: relative;
  overflow: visible;
  color: #fff;
  padding-bottom: 20rem;

  @media (max-width: 768px) {
    padding: 5rem 0 0 0;
    padding-bottom: 15rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  text-align: center;
  cursor: pointer;
`;

const ProductGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-bottom: 3rem;
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 900px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;

  @media (max-width: 768px) {
    opacity: 1;
    transform: translateY(0);
  }

  ${FruitsSection}:hover & {
    @media (min-width: 769px) {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Description = styled.p`
  font-size: 3.2rem;
  line-height: 1.5;
  color: #ffffff;
  font-weight: 700;
  text-align: center;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.02em;

  @media (max-width: 968px) {
    font-size: 2.6rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ImageColumn = styled.div`
  display: none;
`;

const ViewAllButton = styled.div`
  text-align: center;
  margin-top: 3rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out 0.3s;

  @media (max-width: 768px) {
    opacity: 1;
    transform: translateY(0);
  }

  ${FruitsSection}:hover & {
    @media (min-width: 769px) {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ViewAllLink = styled.a`
  display: inline-block;
  padding: 1.5rem 4rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 968px) {
    padding: 1.2rem 3rem;
    font-size: 1.4rem;
  }
`;

export const Fruits: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FruitsSection>
      <WaterEffect />
      <Container>
        <ProductGrid>
          <ContentColumn>
            <Description>{t("certifications.title")}</Description>
          </ContentColumn>
        </ProductGrid>
        <ViewAllButton>
          <ViewAllLink href="/factory">{t("farm.exploreFactory")}</ViewAllLink>
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
  );
};
