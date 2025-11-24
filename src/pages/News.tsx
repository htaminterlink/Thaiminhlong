import React from "react";
import styled from "styled-components";
import { SEO } from "../components/common/SEO";
import { News } from "../components/sections/News";

const NewsContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const NewsPage: React.FC = () => {
  return (
    <NewsContainer>
      <SEO
        title="Tin Tức & Sự Kiện"
        description="Cập nhật tin tức mới nhất về hải sản, trái cây, trang trại từ Thai Minh Long Seafood Company Limited"
      />
      <News />
    </NewsContainer>
  );
};

export default NewsPage;
