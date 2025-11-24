import React from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";

// Add wave animation
const waveAnim = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(90px);
  }
`;

// Keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const NewsSection = styled.section`
  padding: 8rem 0 0 0;
  background: #e9ecef;
  position: relative;
  overflow: visible;
  padding-bottom: 20rem;

  @media (max-width: 768px) {
    padding: 4rem 0 0 0;
    padding-bottom: 15rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TitleWrapper = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;
`;

const Title = styled.h3`
  font-size: 4rem;
  color: #0066ff;
  line-height: 1.4;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 576px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

const ViewAllButton = styled.a`
  display: inline-block;
  padding: 1.2rem 3rem;
  background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.4rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 102, 255, 0.3);
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 102, 255, 0.4);
  }

  @media (max-width: 576px) {
    padding: 1rem 2rem;
    font-size: 1.2rem;
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const NewsCard = styled.article`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: calc(var(--index) * 0.08s);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }

  &:nth-child(1) {
    --index: 0;
  }
  &:nth-child(2) {
    --index: 1;
  }
  &:nth-child(3) {
    --index: 2;
  }
`;

const NewsImage = styled.div`
  position: relative;
  width: 100%;
  padding-top: 66.67%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${NewsCard}:hover & img {
    transform: scale(1.1) rotate(2deg);
  }
`;

const NewsContent = styled.div`
  padding: 2rem;
`;

const NewsTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  line-height: 1.5;
  margin: 0 0 1rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #0066ff;
    }
  }
`;

const NewsDate = styled.p`
  font-size: 1.3rem;
  color: #999;
  margin: 0 0 1rem 0;
`;

const NewsExcerpt = styled.p`
  font-size: 1.4rem;
  color: #666;
  line-height: 1.7;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const FooterWaveContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 20vh;
  min-height: 120px;
  max-height: 180px;
  z-index: 2;
  pointer-events: none;
  @media (max-width: 768px) {
    height: 13vh;
    min-height: 60px;
    max-height: 90px;
  }
  @media (max-width: 480px) {
    height: 10vh;
    min-height: 40px;
    max-height: 60px;
  }
`;

const FooterWave = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;

  .wave-line {
    animation: ${waveAnim} 15s linear infinite;
  }
`;

interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

export const NewsPreview: React.FC = () => {
  const { t } = useTranslation();

  // Get first 3 news items with translations
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: t("newsItems.item1.title"),
      date: "November 10, 2025",
      excerpt: t("newsItems.item1.excerpt"),
      image: "/assets/images/news/news-1.jpg",
      slug: "/news",
    },
    {
      id: 2,
      title: t("newsItems.item2.title"),
      date: "November 10, 2025",
      excerpt: t("newsItems.item2.excerpt"),
      image: "/assets/images/news/news-2.jpg",
      slug: "/news",
    },
    {
      id: 3,
      title: t("newsItems.item3.title"),
      date: "October 28, 2025",
      excerpt: t("newsItems.item3.excerpt"),
      image: "/assets/images/news/news-3.jpg",
      slug: "/news",
    },
  ];

  return (
    <NewsSection>
      <Container>
        <HeaderRow>
          <TitleWrapper>
            <Title>{t("news.latestNews")}</Title>
          </TitleWrapper>
          <ViewAllButton href="/news">{t("news.viewAll")}</ViewAllButton>
        </HeaderRow>

        <NewsGrid>
          {newsItems.map((item, index) => (
            <NewsCard
              key={item.id}
              style={{ "--index": index } as React.CSSProperties}
            >
              <NewsImage>
                <img src={item.image} alt={item.title} loading="lazy" />
              </NewsImage>
              <NewsContent>
                <NewsTitle>
                  <a href={item.slug}>{item.title}</a>
                </NewsTitle>
                <NewsDate>{item.date}</NewsDate>
                <NewsExcerpt>{item.excerpt}</NewsExcerpt>
              </NewsContent>
            </NewsCard>
          ))}
        </NewsGrid>
      </Container>
      <FooterWaveContainer>
        <FooterWave
          className="waves"
          shapeRendering="auto"
          preserveAspectRatio="none"
          viewBox="0 24 150 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="gentle-wave-footer-news-preview"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              className="wave-line"
              fill="rgba(67, 121, 242, 0.3)"
              y="0"
              x="48"
              xlinkHref="#gentle-wave-footer-news-preview"
            />
            <use
              className="wave-line"
              fill="rgba(67, 121, 242, 0.5)"
              y="3"
              x="48"
              xlinkHref="#gentle-wave-footer-news-preview"
            />
            <use
              className="wave-line"
              fill="rgba(67, 121, 242, 0.8)"
              y="5"
              x="48"
              xlinkHref="#gentle-wave-footer-news-preview"
            />
            <use
              className="wave-line"
              fill="#4379f2"
              y="7"
              x="48"
              xlinkHref="#gentle-wave-footer-news-preview"
            />
          </g>
        </FooterWave>
      </FooterWaveContainer>
    </NewsSection>
  );
};
