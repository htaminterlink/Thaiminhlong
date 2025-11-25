import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MobileMenu } from "../MobileMenu";

const HeaderWrapper = styled.header<{ $isSticky: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.4s ease;
  height: ${({ $isSticky }) => ($isSticky ? "7rem" : "9.6rem")};
  background-color: ${({ $isSticky }) => ($isSticky ? "white" : "transparent")};
  box-shadow: ${({ $isSticky }) =>
    $isSticky ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};

  @media (max-width: 1024px) {
    height: 6rem;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    height: 5.5rem;
  }

  @media (max-width: 480px) {
    height: 5rem;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
  height: 100%;

  @media (max-width: 1200px) {
    max-width: 100%;
    padding: 0 2.5rem;
  }

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 3rem;

  @media (max-width: 1400px) {
    gap: 2rem;
  }

  @media (max-width: 1200px) {
    justify-content: space-between;
  }
`;

const Logo = styled(Link)<{ $isSticky: boolean }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 7;
  transition: all 0.4s ease;
  flex-shrink: 0;
  margin-right: auto;

  @media (max-width: 1024px) {
    margin-right: 0;
  }

  img {
    width: ${({ $isSticky }) => ($isSticky ? "6rem" : "7rem")};
    height: auto;
    max-width: 100%;
    transition: all 0.4s ease;

    @media (max-width: 1024px) {
      width: 5rem;
    }

    @media (max-width: 768px) {
      width: 4.5rem;
    }

    @media (max-width: 480px) {
      width: 4rem;
    }
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 1400px) {
    gap: 2rem;
  }

  @media (max-width: 1300px) {
    gap: 1.6rem;
  }
`;

const NavItem = styled.li`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

  &:hover > ul {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const NavLink = styled(Link)<{ $isSticky: boolean }>`
  color: ${({ $isSticky }) => ($isSticky ? "#000000" : "#ffffff")};
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 600;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  letter-spacing: 0.3px;
  white-space: nowrap;

  &:hover {
    color: ${({ $isSticky }) =>
      $isSticky ? "#7BE9FF" : "rgba(255, 255, 255, 0.8)"};
  }

  &.active {
    color: ${({ $isSticky }) => ($isSticky ? "#7BE9FF" : "#ffffff")};
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: rotate(180deg);
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 1rem;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.4rem;
  min-width: 200px;
  list-style: none;
  padding: 0.5rem 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.4s ease;
  z-index: 100;
`;

const DropdownItem = styled.li`
  a {
    display: block;
    padding: 1rem 1.5rem;
    color: #333;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      background: ${(props) => props.theme.colors.primary}10;
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-shrink: 0;

  @media (max-width: 1200px) {
    gap: 1rem;
  }
`;

const SearchButton = styled.button<{ $isSticky: boolean }>`
  background: transparent;
  border: none;
  cursor: pointer;
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  position: relative;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${({ $isSticky }) => ($isSticky ? "#000" : "#fff")};
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1200px) {
    svg {
      color: #000;
      filter: brightness(1) invert(1);
    }
  }
`;

const SearchExpandWrapper = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 1rem;
  width: ${({ $isOpen }) => ($isOpen ? "400px" : "32px")};
  height: 48px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 50;

  @media (max-width: 1024px) {
    width: ${({ $isOpen }) => ($isOpen ? "350px" : "32px")};
  }

  @media (max-width: 768px) {
    width: ${({ $isOpen }) => ($isOpen ? "300px" : "32px")};
  }

  @media (max-width: 480px) {
    width: ${({ $isOpen }) => ($isOpen ? "calc(100vw - 5rem)" : "32px")};
  }
`;

const SearchInputWrapper = styled.div<{ $isOpen: boolean }>`
  position: relative;
  flex: 1;
  height: 100%;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transform: scaleX(${({ $isOpen }) => ($isOpen ? 1 : 0)});
  transform-origin: right;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0 1.5rem;
  font-size: 1.4rem;
  border-radius: 2.4rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 1200px) {
    background: rgba(255, 255, 255, 0.95);
    color: #333;
    border-color: #e5e5e5;

    &::placeholder {
      color: #999;
    }

    &:focus {
      background: white;
      border-color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const SearchOverlay = styled.div<{ $isOpen: boolean }>`
  display: none;
`;

const SearchCloseButton = styled.button<{ $isOpen: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transform: scale(${({ $isOpen }) => ($isOpen ? 1 : 0)});

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  span {
    color: white;
    font-size: 2rem;
    line-height: 1;
    font-weight: 300;
  }

  @media (max-width: 1200px) {
    background: white;
    border-color: #e5e5e5;

    &:hover {
      background: #f5f5f5;
    }

    span {
      color: #666;
    }
  }
`;

const LanguageSelector = styled.div<{
  $isSticky: boolean;
  $isSearchOpen?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  height: 4.8rem;
  flex-shrink: 0;
  padding-left: 1.2rem;
  opacity: ${({ $isSearchOpen }) => ($isSearchOpen ? 0 : 1)};
  visibility: ${({ $isSearchOpen }) => ($isSearchOpen ? "hidden" : "visible")};
  transform: translateX(
    ${({ $isSearchOpen }) => ($isSearchOpen ? "20px" : "0")}
  );
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.1rem;
    height: 1.8rem;
    background-color: ${({ $isSticky }) => ($isSticky ? "#000" : "white")};
  }

  &:hover > div {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  img {
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    flex-shrink: 0;
  }

  span {
    font-size: 2rem;
    font-weight: 500;
    color: ${({ $isSticky }) => ($isSticky ? "#000" : "#fff")};
    transition: all 0.4s ease;
    text-transform: uppercase;
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
    color: ${({ $isSticky }) => ($isSticky ? "#000" : "#fff")};
  }

  @media (max-width: 1024px) {
    height: 4rem;
    padding-left: 1rem;

    img {
      width: 2.4rem;
      height: 2.4rem;
    }

    span {
      font-size: 1.8rem;
      color: #000;
    }

    svg {
      color: #000;
    }

    &::before {
      background-color: #000;
    }
  }

  @media (max-width: 480px) {
    height: 4rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    gap: 0.4rem;
    z-index: 51;
    pointer-events: auto;

    img {
      width: 2rem;
      height: 2rem;
    }

    span {
      font-size: 1.2rem;
      display: block;
    }

    svg {
      width: 1rem;
      height: 1rem;
    }

    &::before {
      display: none;
    }
  }
`;

const LanguageDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.4rem;
  min-width: 120px;
  padding: 0.5rem 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.4s ease;
  z-index: 999;

  @media (max-width: 480px) {
    right: -1rem;
    min-width: 140px;
    top: 110%;
    z-index: 100;
  }

  button {
    width: 100%;
    background: none;
    border: none;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    transition: background 0.3s ease;
    font-size: 1.6rem;
    font-weight: 500;
    color: #333;
    pointer-events: auto;

    @media (max-width: 480px) {
      padding: 0.8rem 1.2rem;
      font-size: 1.4rem;
    }

    &:hover {
      background: ${(props) => props.theme.colors.primary}10;
      color: ${(props) => props.theme.colors.primary};
    }

    img {
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;

      @media (max-width: 480px) {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;

const MobileMenuButton = styled.button<{
  $isSticky: boolean;
  $isSearchOpen?: boolean;
}>`
  display: flex !important;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  margin-left: 1.5rem;
  position: relative;
  z-index: 1000 !important;
  width: 3.5rem;
  height: 3.5rem;
  pointer-events: auto !important;
  opacity: ${({ $isSearchOpen }) =>
    $isSearchOpen ? "0 !important" : "1 !important"};
  visibility: ${({ $isSearchOpen }) =>
    $isSearchOpen ? "hidden !important" : "visible !important"};
  transform: translateX(
    ${({ $isSearchOpen }) => ($isSearchOpen ? "20px" : "0")}
  );

  span {
    display: block !important;
    width: 2.5rem;
    height: 0.25rem;
    background: ${({ $isSticky }) => ($isSticky ? "#000" : "#fff")} !important;
    border-radius: 2px;
    transition: all 0.3s ease;
    opacity: 1 !important;
  }

  &:hover {
    opacity: 0.8 !important;
  }

  @media (max-width: 1024px) {
    span {
      background: #000 !important;
    }
  }

  @media (max-width: 480px) {
    width: 3rem;
    height: 3rem;
    margin-left: 0.5rem;

    span {
      width: 2rem;
      height: 0.22rem;
    }
  }
`;

const ChevronIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ width: "1rem", height: "1rem" }}
  >
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    style={{ width: "2.4rem", height: "2.4rem" }}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isSearchOpen]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLanguageOpen(false);
  };

  return (
    <>
      <HeaderWrapper $isSticky={isSticky}>
        <Container>
          <HeaderContent>
            <Logo to="/" $isSticky={isSticky}>
              <img src="/assets/images/tml-logo.png" alt="Thai Minh Long" />
            </Logo>

            <NavWrapper>
              <Navigation>
                <NavList>
                  <NavItem>
                    <NavLink to="/" $isSticky={isSticky}>
                      {t("navigation.home")}
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink to="/about" $isSticky={isSticky}>
                      {t("navigation.about")}
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink to="/products/seafood/shrimp" $isSticky={isSticky}>
                      {t("navigation.seafood")} <ChevronIcon />
                    </NavLink>
                    <Dropdown>
                      <DropdownItem>
                        <Link to="/products/seafood/shrimp">
                          {t("navigation.seafoodShrimp")}
                        </Link>
                        <Link to="/products/seafood/fish">
                          {t("navigation.seafoodFish")}
                        </Link>
                      </DropdownItem>
                    </Dropdown>
                  </NavItem>

                  <NavItem>
                    <NavLink to="/factory" $isSticky={isSticky}>
                      {t("navigation.factory")}
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink to="/farm/extensive" $isSticky={isSticky}>
                      {t("navigation.farms")} <ChevronIcon />
                    </NavLink>
                    <Dropdown>
                      <DropdownItem>
                        <Link to="/farm/extensive">
                          {t("navigation.farmsExtensive")}
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/farm/intensive">
                          {t("navigation.farmsIntensive")}
                        </Link>
                      </DropdownItem>
                    </Dropdown>
                  </NavItem>

                  <NavItem>
                    <NavLink to="/news" $isSticky={isSticky}>
                      {t("navigation.news")}
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink to="/contact" $isSticky={isSticky}>
                      {t("navigation.contact")}
                    </NavLink>
                  </NavItem>
                </NavList>
              </Navigation>
            </NavWrapper>

            <Actions>
              <SearchButton
                $isSticky={isSticky}
                aria-label="Search"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <SearchIcon />
              </SearchButton>

              <SearchExpandWrapper $isOpen={isSearchOpen}>
                <SearchInputWrapper $isOpen={isSearchOpen}>
                  <SearchInput
                    type="text"
                    placeholder={t("navigation.search")}
                    autoFocus={isSearchOpen}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        console.log("Search");
                      }
                    }}
                  />
                </SearchInputWrapper>
                <SearchCloseButton
                  $isOpen={isSearchOpen}
                  onClick={() => setIsSearchOpen(false)}
                >
                  <span>×</span>
                </SearchCloseButton>
              </SearchExpandWrapper>

              <LanguageSelector
                $isSticky={isSticky}
                $isSearchOpen={isSearchOpen}
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={`https://trinityvietnam.vn/wp-content/plugins/sitepress-multilingual-cms/res/flags/${i18n.language}.svg`}
                  alt={i18n.language.toUpperCase()}
                />
                <span>{i18n.language.toUpperCase()}</span>
                <ChevronIcon />
                <LanguageDropdown
                  style={{
                    opacity: isLanguageOpen ? 1 : 0,
                    visibility: isLanguageOpen ? "visible" : "hidden",
                    transform: isLanguageOpen
                      ? "translateY(0)"
                      : "translateY(-10px)",
                  }}
                >
                  <button onClick={() => changeLanguage("en")}>
                    <img
                      src="https://trinityvietnam.vn/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.svg"
                      alt="EN"
                    />
                    EN
                  </button>
                  <button onClick={() => changeLanguage("vi")}>
                    <img
                      src="https://trinityvietnam.vn/wp-content/plugins/sitepress-multilingual-cms/res/flags/vi.svg"
                      alt="VN"
                    />
                    VN
                  </button>
                </LanguageDropdown>
              </LanguageSelector>
            </Actions>

            <MobileMenuButton
              $isSticky={isSticky}
              $isSearchOpen={isSearchOpen}
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span></span>
              <span></span>
              <span></span>
            </MobileMenuButton>
          </HeaderContent>
        </Container>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </HeaderWrapper>
    </>
  );
};
