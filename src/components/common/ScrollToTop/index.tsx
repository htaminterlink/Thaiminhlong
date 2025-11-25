import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fadeInUp, pulse } from "../../../styles/animations";

const ScrollButton = styled.button<{ visible: boolean }>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  z-index: 999;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  transform: ${({ visible }) =>
    visible ? "translateY(0)" : "translateY(20px)"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(67, 121, 242, 0.3);
  animation: ${({ visible }) => (visible ? fadeInUp : "none")} 0.5s ease-out;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.primary};
    z-index: -1;
    animation: ${pulse} 2s ease-in-out infinite;
  }

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 6px 20px rgba(67, 121, 242, 0.4);
  }

  &:active {
    transform: translateY(-2px) scale(1);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 4.8rem;
    height: 4.8rem;
    font-size: 2rem;
  }
`;

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      setVisible(scrolled > 300);
    };

    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollButton
      visible={visible}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ↑
    </ScrollButton>
  );
};
