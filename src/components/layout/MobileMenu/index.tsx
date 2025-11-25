import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fadeIn, fadeInUp } from "../../../styles/animations";

const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
  z-index: 2000;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 0.4s ease;
  overflow-y: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1999;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: #333;
  font-size: 3rem;
  cursor: pointer;
  padding: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Logo = styled(Link)`
  margin-bottom: 3rem;
  animation: ${fadeInUp} 0.5s ease-out;
  display: block;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    height: 80px;
    width: auto;
    display: block;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  width: 100%;
  max-width: 400px;
  animation: ${fadeIn} 0.6s ease-out 0.2s both;
`;

const MenuItem = styled.li<{ $hasSubmenu?: boolean }>`
  margin-bottom: 1.5rem;
  position: relative;
`;

const MenuLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-transform: uppercase;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }
`;

const MenuButton = styled.button<{ $isOpen?: boolean }>`
  background: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
  width: 100%;
  justify-content: center;
  padding: 0;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
  }
`;

const Submenu = styled.ul<{ $isOpen: boolean }>`
  list-style: none;
  padding: 0;
  margin: ${({ $isOpen }) => ($isOpen ? "1rem 0 0 0" : "0")};
  max-height: ${({ $isOpen }) => ($isOpen ? "200px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
`;

const SubmenuItem = styled.li`
  margin-bottom: 0.75rem;

  a {
    color: #666;
    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 500;
    display: block;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  a {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ChevronIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>
);

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setOpenMenus({});
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleSubmenu = (menu: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <MobileMenuWrapper isOpen={isOpen}>
        <CloseButton onClick={onClose} aria-label="Close menu">
          ×
        </CloseButton>

        <Logo to="/" onClick={onClose}>
          <img src="/assets/images/tml-logo.png" alt="Thai Minh Long" />
        </Logo>

        <MenuList>
          <MenuItem>
            <MenuLink to="/" onClick={onClose}>
              {t("navigation.home")}
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink to="/about" onClick={onClose}>
              {t("navigation.about")}
            </MenuLink>
          </MenuItem>

          <MenuItem $hasSubmenu>
            <MenuButton
              onClick={() => toggleSubmenu("seafood")}
              $isOpen={openMenus.seafood}
            >
              {t("navigation.seafood")} <ChevronIcon />
            </MenuButton>
            <Submenu $isOpen={openMenus.seafood}>
              <SubmenuItem>
                <MenuLink to="/products/seafood/shrimp" onClick={onClose}>
                  {t("navigation.seafoodShrimp")}
                </MenuLink>
              </SubmenuItem>
              <SubmenuItem>
                <MenuLink to="/products/seafood/fish" onClick={onClose}>
                  {t("navigation.seafoodFish")}
                </MenuLink>
              </SubmenuItem>
            </Submenu>
          </MenuItem>

          <MenuItem>
            <MenuLink to="/factory" onClick={onClose}>
              {t("navigation.factory")}
            </MenuLink>
          </MenuItem>

          <MenuItem $hasSubmenu>
            <MenuButton
              onClick={() => toggleSubmenu("farms")}
              $isOpen={openMenus.farms}
            >
              {t("navigation.farms")} <ChevronIcon />
            </MenuButton>
            <Submenu $isOpen={openMenus.farms}>
              <SubmenuItem>
                <MenuLink to="/farm/extensive" onClick={onClose}>
                  {t("navigation.farmsExtensive")}
                </MenuLink>
              </SubmenuItem>
              <SubmenuItem>
                <MenuLink to="/farm/intensive" onClick={onClose}>
                  {t("navigation.farmsIntensive")}
                </MenuLink>
              </SubmenuItem>
            </Submenu>
          </MenuItem>

          <MenuItem>
            <MenuLink to="/news" onClick={onClose}>
              {t("navigation.news")}
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink to="/contact" onClick={onClose}>
              {t("navigation.contact")}
            </MenuLink>
          </MenuItem>
        </MenuList>

        <SocialLinks>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            📘
          </a>
          <a
            href="http://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            📷
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            📺
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼
          </a>
        </SocialLinks>
      </MobileMenuWrapper>
    </>
  );
};
