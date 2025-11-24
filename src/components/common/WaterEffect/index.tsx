import React from "react";
import styled from "styled-components";

const WaterUpBoxWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
`;

const WaterUp = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(67, 121, 242, 0.03) 0%,
    transparent 50%
  );
`;

export const WaterEffect: React.FC = () => {
  return (
    <WaterUpBoxWrapper className="waterUpBox">
      <WaterUp className="waterUp" />
    </WaterUpBoxWrapper>
  );
};
