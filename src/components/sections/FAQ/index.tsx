import React from "react";
import styled from "styled-components";
import { Accordion } from "../../common/Accordion";

const FAQSection = styled.section`
  padding: 5rem 0 3rem 0;
  background: #f9f9f9;
  position: relative;
  overflow: visible;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-family: ${(props) => props.theme.typography.fontFamily.secondary};
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 3rem;
`;

const faqs = [
  {
    title: "What types of seafood do you export?",
    content:
      "We specialize in exporting premium quality crabs and tuna. Our products are sourced from sustainable fisheries and meet international quality standards.",
  },
  {
    title: "Which countries do you ship to?",
    content:
      "We export to over 50 countries worldwide, including major markets in Asia, Europe, North America, and the Middle East. We ensure timely delivery and proper handling throughout the shipping process.",
  },
  {
    title: "What quality certifications do you have?",
    content:
      "Our products are certified by international bodies including HACCP, ISO, and FDA. We maintain strict quality control measures from sourcing to delivery.",
  },
  {
    title: "How do you ensure product freshness?",
    content:
      "We use advanced freezing technology and temperature-controlled logistics to maintain product quality. All shipments are monitored in real-time to ensure optimal storage conditions.",
  },
  {
    title: "What are your minimum order quantities?",
    content:
      "Minimum order quantities vary by product type and destination. Please contact our sales team for specific information about your requirements.",
  },
  {
    title: "Do you offer custom packaging?",
    content:
      "Yes, we provide customized packaging solutions to meet your specific requirements, including private labeling and branded packaging options.",
  },
];

export const FAQ: React.FC = () => {
  return (
    <FAQSection>
      <Container>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <Accordion items={faqs} allowMultiple={false} />
      </Container>
    </FAQSection>
  );
};
