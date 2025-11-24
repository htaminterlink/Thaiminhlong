import React from "react";
import styled from "styled-components";
import { jelly } from "../../../styles/animations";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  padding: ${({ size }) => {
    switch (size) {
      case "small":
        return "0.5rem 1rem";
      case "large":
        return "1rem 2.5rem";
      default:
        return "0.75rem 2rem";
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "0.875rem";
      case "large":
        return "1.125rem";
      default:
        return "1rem";
    }
  }};
  border-radius: 4px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-weight: 500;
  transition: all 0.3s ease;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  background: ${({ variant, theme }) => {
    switch (variant) {
      case "secondary":
        return theme.colors.secondary;
      case "outline":
        return "transparent";
      default:
        return theme.colors.primary;
    }
  }};

  color: ${({ variant }) => {
    switch (variant) {
      case "outline":
        return "#000";
      default:
        return "#fff";
    }
  }};

  border: ${({ variant, theme }) => {
    switch (variant) {
      case "outline":
        return `2px solid ${theme.colors.primary}`;
      default:
        return "none";
    }
  }};

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "translateY(-2px)")};
    box-shadow: ${({ disabled }) =>
      disabled ? "none" : "0 4px 12px rgba(0, 0, 0, 0.15)"};
    animation: ${({ disabled }) => (disabled ? "none" : jelly)} 0.6s ease;
  }

  &:active {
    transform: ${({ disabled }) => (disabled ? "none" : "translateY(0)")};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  type = "button",
  disabled = false,
  fullWidth = false,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick}
      type={type}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
};
