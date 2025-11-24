import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Button } from "../../common/Button";

const CTASection = styled.section`
  padding: 5rem 0 3rem 0;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.secondary} 100%
  );
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/assets/images/pattern.png") repeat;
    opacity: 0.1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
`;

const CTAContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-family: ${(props) => props.theme.typography.fontFamily.secondary};
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const CTASubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const WhiteButton = styled(Button)`
  background: white;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
`;

const OutlineButton = styled(Button)`
  background: transparent;
  border: 2px solid white;
  color: white;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const CTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <CTASection>
      <Container>
        <CTAContent>
          <CTATitle>{t("cta.title")}</CTATitle>
          <CTASubtitle>{t("cta.subtitle")}</CTASubtitle>
          <CTAButtons>
            <WhiteButton
              size="large"
              onClick={() => (window.location.href = "/contact")}
            >
              {t("cta.getStarted")}
            </WhiteButton>
            <OutlineButton
              size="large"
              onClick={() => (window.location.href = "/products")}
            >
              {t("cta.viewProducts")}
            </OutlineButton>
          </CTAButtons>
        </CTAContent>
      </Container>
    </CTASection>
  );
};
