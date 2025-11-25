import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

interface AccordionItemData {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
}

const AccordionWrapper = styled.div`
  width: 100%;
`;

const AccordionItem = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const AccordionHeader = styled.button<{ isOpen: boolean }>`
  width: 100%;
  padding: 1.25rem 1.5rem;
  background: ${({ isOpen }) => (isOpen ? "#f5f5f5" : "white")};
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    background: #f5f5f5;
  }
`;

const AccordionTitle = styled.span`
  flex: 1;
`;

const AccordionIcon = styled.span<{ isOpen: boolean }>`
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
  color: ${(props) => props.theme.colors.primary};
`;

const AccordionContent = styled.div<{ isOpen: boolean; height: number }>`
  max-height: ${({ isOpen, height }) => (isOpen ? `${height}px` : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const AccordionContentInner = styled.div`
  padding: 1.5rem;
  color: ${(props) => props.theme.colors.text};
  line-height: 1.6;
`;

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [contentHeights, setContentHeights] = useState<{
    [key: number]: number;
  }>({});
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  useEffect(() => {
    const heights: { [key: number]: number } = {};
    Object.keys(contentRefs.current).forEach((key) => {
      const index = parseInt(key);
      const element = contentRefs.current[index];
      if (element) {
        heights[index] = element.scrollHeight;
      }
    });
    setContentHeights(heights);
  }, [items]);

  return (
    <AccordionWrapper>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <AccordionItem key={index}>
            <AccordionHeader isOpen={isOpen} onClick={() => toggleItem(index)}>
              <AccordionTitle>{item.title}</AccordionTitle>
              <AccordionIcon isOpen={isOpen}>▼</AccordionIcon>
            </AccordionHeader>
            <AccordionContent
              isOpen={isOpen}
              height={contentHeights[index] || 0}
            >
              <AccordionContentInner
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
              >
                {item.content}
              </AccordionContentInner>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </AccordionWrapper>
  );
};
