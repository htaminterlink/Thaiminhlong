import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div<{ fullScreen?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ fullScreen }) =>
    fullScreen &&
    `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.9);
    z-index: 9999;
  `}
`;

const Spinner = styled.div<{ size?: number }>`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  width: ${({ size }) => size || 40}px;
  height: ${({ size }) => size || 40}px;
  animation: ${spin} 1s linear infinite;
`;

interface LoadingProps {
  fullScreen?: boolean;
  size?: number;
}

export const Loading: React.FC<LoadingProps> = ({
  fullScreen = false,
  size,
}) => {
  return (
    <LoaderWrapper fullScreen={fullScreen}>
      <Spinner size={size} />
    </LoaderWrapper>
  );
};
