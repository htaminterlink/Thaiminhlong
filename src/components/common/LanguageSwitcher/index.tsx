import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const LanguageSwitcherWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const LanguageButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : "transparent"};
  color: ${({ active }) => (active ? "#fff" : "#666")};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-transform: uppercase;

  &:hover {
    background: ${({ active, theme }) =>
      active ? theme.colors.primary : "rgba(0,0,0,0.05)"};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
`;

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    if (i18n.language === lng) return; // Don't change if already same language

    // Save current scroll position
    const currentScrollPosition = window.scrollY;

    // Flag to prevent ScrollToTopOnRouteChange from scrolling when just changing language
    (window as any).__suppressScrollToTop = true;

    i18n.changeLanguage(lng).then(() => {
      // Restore scroll position after language change
      // Wait longer to ensure all re-renders complete
      setTimeout(() => {
        window.scrollTo(0, currentScrollPosition);
        (window as any).__suppressScrollToTop = false;
      }, 500); // Increased timeout for better stability
    });
  };

  return (
    <LanguageSwitcherWrapper>
      <LanguageButton
        active={i18n.language === "vi"}
        onClick={() => changeLanguage("vi")}
      >
        VI
      </LanguageButton>
      <LanguageButton
        active={i18n.language === "en"}
        onClick={() => changeLanguage("en")}
      >
        EN
      </LanguageButton>
    </LanguageSwitcherWrapper>
  );
};
