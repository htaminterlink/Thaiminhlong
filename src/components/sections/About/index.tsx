import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import { fadeInUp } from "../../../styles/animations";
import { Wave } from "../../common/Wave";

const AboutSection = styled.section`
  padding: 5rem 0 0 0;
  background: #fff;
  position: relative;
  overflow: visible;
  padding-bottom: 20rem;

  @media (max-width: 1024px) {
    padding-bottom: 18rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 0 0 0;
    padding-bottom: 12rem;
  }

  @media (max-width: 480px) {
    padding-bottom: 10rem;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150%;
  z-index: 0;

  img {
    width: 120%;
    height: 120%;
    object-fit: cover;
    opacity: 0.15;
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

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h3`
  font-size: 3.2rem;
  color: #00215e;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  font-weight: 700;
  opacity: 0;
  animation: ${fadeInUp} 0.6s ease-out forwards;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: 3rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2.4rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 3rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  animation: ${fadeInUp} 0.6s ease-out 0.15s forwards;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  opacity: 0;
  animation: ${fadeInUp} 0.6s ease-out 0.3s forwards;
`;

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AboutSection>
      <BackgroundImage>
        <img
          src="/assets/images/tml-seafood.jpg"
          alt=" Thai Minh Long Company Limited Background"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/assets/images/tml-seafood.jpg";
          }}
        />
      </BackgroundImage>
      <Container>
        <TitleWrapper>
          <Title>{t("about.titleFull")}</Title>
        </TitleWrapper>
        <Description>{t("about.descriptionFull")}</Description>
        <ButtonWrapper>
          <a href="/about" style={{ textDecoration: "none" }}>
            <Button variant="primary">{t("about.button")}</Button>
          </a>
        </ButtonWrapper>
      </Container>
      <Wave
        colors={[
          "rgba(67, 121, 242, 0.7)",
          "rgba(67, 121, 242, 0.5)",
          "rgba(67, 121, 242, 0.3)",
          "#4379f2",
        ]}
      />
    </AboutSection>
  );
};
