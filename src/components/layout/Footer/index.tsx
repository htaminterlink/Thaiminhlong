import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Wave } from "../../common/Wave";

const FooterWrapper = styled.footer`
  background: #4379f2;
  color: #fff;
  padding: 5rem 0 0;
  position: relative;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const FooterMain = styled.div`
  padding-bottom: 2rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto) 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem 1.5rem;
    align-items: start;
  }

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.8rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #fff;
  }

  p {
    line-height: 1.6;
    opacity: 0.85;
    margin-bottom: 0.8rem;
    font-size: 1.6rem;
  }

  a {
    font-size: 1.6rem;
    line-height: 1.8;
  }

  @media (max-width: 1024px) and (min-width: 969px) {
    h3 {
      font-size: 1.6rem;
      margin-bottom: 1.2rem;
    }

    p,
    a {
      font-size: 1.4rem;
    }

    &:nth-child(4) {
      text-align: right;
    }
  }

  @media (max-width: 968px) {
    h3 {
      font-size: 1.6rem;
      margin-bottom: 1.2rem;
    }

    p,
    a {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 968px) {
    h3 {
      font-size: 1.6rem;
      margin-bottom: 1.2rem;
    }

    p,
    a {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 850px) {
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1.1rem;
    }

    p,
    a {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }

    p,
    a {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 640px) {
    h3 {
      font-size: 1.25rem;
      margin-bottom: 0.9rem;
    }

    p,
    a {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.8rem;
    }

    p,
    a {
      font-size: 1.15rem;
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1.1rem;
      margin-bottom: 0.7rem;
    }

    p,
    a {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    gap: 1.8rem;
  }

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.8rem;
  }

  @media (max-width: 850px) {
    gap: 1.6rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FooterBottomSection = styled.div`
  display: contents;

  @media (max-width: 1024px) and (min-width: 969px) {
    display: grid;
    grid-column: 4;
  }
`;

const LocationCard = styled.div`
  background: transparent;
  padding: 0;
  border-radius: 0;
  backdrop-filter: none;
  transition: all 0.3s ease;
  text-align: right;

  &:hover {
    background: transparent;
    transform: none;
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #fff;
    text-transform: uppercase;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.8;
    opacity: 0.85;
    margin-bottom: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
  }

  @media (max-width: 1024px) {
    h4 {
      font-size: 1.6rem;
      margin-bottom: 1.2rem;
    }

    p {
      font-size: 1.4rem;
      justify-content: flex-end;
    }
  }

  @media (max-width: 968px) {
    h4 {
      font-size: 1.6rem;
      margin-bottom: 1.3rem;
    }

    p {
      font-size: 1.5rem;
      justify-content: flex-start;
    }
  }

  @media (max-width: 850px) {
    h4 {
      font-size: 1.5rem;
      margin-bottom: 1.2rem;
    }

    p {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.3rem;
      justify-content: flex-start;
    }
  }

  @media (max-width: 640px) {
    h4 {
      font-size: 1.25rem;
      margin-bottom: 0.9rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 600px) {
    h4 {
      font-size: 1.2rem;
      margin-bottom: 0.8rem;
    }

    p {
      font-size: 1.15rem;
    }
  }

  @media (max-width: 480px) {
    text-align: left;
    h4 {
      font-size: 1.1rem;
      margin-bottom: 0.7rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5;
      justify-content: flex-start;
    }
  }

  svg,
  i {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  a {
    color: #fff;
    text-decoration: none;
    opacity: 0.85;
    transition: opacity 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.6rem;
    font-weight: 600;

    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.8rem;

    a {
      color: #fff;
      text-decoration: none;
      opacity: 0.85;
      transition: all 0.3s ease;
      display: inline-block;
      font-size: 1.6rem;
      font-weight: 600;

      &:hover {
        opacity: 1;
        transform: translateX(5px);
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;

  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;

    svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.35);
      transform: translateY(-3px);
    }
  }
`;

const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  img {
    width: 120px;
    height: auto;
  }

  @media (max-width: 1024px) {
    margin-bottom: 2.5rem;

    img {
      width: 100px;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;

    img {
      width: 90px;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  opacity: 0.8;
  font-size: 1.4rem;
`;

const MapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <Container>
        <FooterMain>
          <FooterGrid>
            <FooterColumn>
              <h3>{t("footer.seafood")}</h3>
              <NavList>
                <li>
                  <a href="/products/seafood/shrimp">{t("footer.shrimp")}</a>
                </li>
                <li>
                  <a href="/products/seafood/fish">{t("footer.fish")}</a>
                </li>
              </NavList>
            </FooterColumn>

            <FooterColumn>
              <h3>{t("footer.factory")}</h3>
              <NavList>
                <li>
                  <a href="/factory">{t("footer.seafood")}</a>
                </li>
              </NavList>
            </FooterColumn>

            <FooterColumn>
              <h3>{t("footer.farms")}</h3>
              <NavList>
                <li>
                  <a href="/farm/extensive">{t("footer.extensiveFarm")}</a>
                </li>
                <li>
                  <a href="/farm/intensive">{t("footer.intensiveFarm")}</a>
                </li>
              </NavList>
            </FooterColumn>

            <FooterColumn>
              <NavList>
                <li>
                  <Link to="/about">{t("footer.about")}</Link>
                </li>
              </NavList>

              <NavList>
                <li>
                  <Link to="/news">{t("footer.news")}</Link>
                </li>
              </NavList>

              <NavList>
                <li>
                  <Link to="/contact">{t("footer.contact")}</Link>
                </li>
              </NavList>
            </FooterColumn>

            <FooterBottomSection>
              <LocationCard>
                <h4>{t("footer.location")}</h4>
                <p>
                  <MapIcon />
                  {t("footer.address")}
                </p>
                <a
                  href="https://www.google.com/maps/place/C%C3%B4ng+Ty+TNHH+Th%E1%BB%A7y+S%E1%BA%A3n+Th%C3%A1i+Minh+Long/@9.2339662,105.4427917,724m/data=!3m2!1e3!4b1!4m6!3m5!1s0x31a1151a10fdacf7:0x561a91455cc4deb2!8m2!3d9.2339662!4d105.4427917!16s%2Fg%2F11cs1wjg6t?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer.viewOnMap")}
                </a>
              </LocationCard>
            </FooterBottomSection>
          </FooterGrid>
        </FooterMain>

        <Copyright>{t("footer.copyright")}</Copyright>

        <SocialLinks>
          <a
            href="https://www.facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="http://instagram.com/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </SocialLinks>
      </Container>
    </FooterWrapper>
  );
};
