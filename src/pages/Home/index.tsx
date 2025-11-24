import React from "react";
import styled from "styled-components";
import { SEO } from "../../components/common/SEO";
import { Hero } from "../../components/sections/Hero/Hero";
import { About } from "../../components/sections/About";
import { Stats } from "../../components/sections/Stats";
import { Seafood } from "../../components/sections/Products/Seafood";
import { Fruits } from "../../components/sections/Products/Fruits";
import { Certifications } from "../../components/sections/Certifications";
import { NewsPreview } from "../../components/sections/NewsPreview";

const HomeContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Home: React.FC = () => {
  return (
    <HomeContainer>
      <SEO />

      {/* Hero */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Seafood Section - 2006 */}
      <Seafood />

      {/* Stats Section */}
      <Stats />

      {/* Fruits Section - 2023 */}
      <Fruits />

      {/* Certifications Section */}
      <Certifications />

      {/* News Preview Section */}
      <NewsPreview />
    </HomeContainer>
  );
};
