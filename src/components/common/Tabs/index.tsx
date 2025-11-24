import React, { useState } from "react";
import styled from "styled-components";

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultActiveIndex?: number;
}

const TabsWrapper = styled.div`
  width: 100%;
`;

const TabButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  border-bottom: 2px solid #e0e0e0;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const TabButton = styled.button<{ isActive: boolean }>`
  padding: 1rem 2rem;
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : "transparent"};
  color: ${({ isActive }) => (isActive ? "#fff" : "#666")};
  border: none;
  border-bottom: 3px solid
    ${({ isActive, theme }) =>
      isActive ? theme.colors.primary : "transparent"};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  bottom: -2px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ isActive }) => (isActive ? "" : "rgba(0,0,0,0.02)")};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
`;

const TabPanel = styled.div<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  animation: ${({ isActive }) => (isActive ? "fadeIn 0.4s ease" : "none")};

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveIndex = 0,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  return (
    <TabsWrapper>
      <TabButtons>
        {items.map((item, index) => (
          <TabButton
            key={index}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          >
            {item.label}
          </TabButton>
        ))}
      </TabButtons>
      {items.map((item, index) => (
        <TabPanel key={index} isActive={activeIndex === index}>
          {item.content}
        </TabPanel>
      ))}
    </TabsWrapper>
  );
};
