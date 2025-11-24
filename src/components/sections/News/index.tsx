import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";

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

const waveAnim = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(90px);
  }
`;

// Styled Components
const StyledSection = styled.section`
  position: relative;
  width: 100%;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  overflow: hidden;
`;

const BannerSection = styled.div`
  position: relative;
  background: linear-gradient(
      135deg,
      rgba(10, 14, 39, 0.85) 0%,
      rgba(26, 31, 58, 0.85) 50%,
      rgba(15, 23, 41, 0.85) 100%
    ),
    url("/assets/images/Trinity-9TRINITY-MY-THO.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  padding: 0;
  color: white;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
        rgba(0, 102, 255, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: ${waveAnim} 20s linear infinite;
    opacity: 0.3;
    pointer-events: none;
  }

  @media (max-width: 1200px) {
    min-height: 90vh;
    background-attachment: scroll;
  }

  @media (max-width: 1024px) {
    min-height: 80vh;
    background-attachment: scroll;
  }

  @media (max-width: 850px) {
    min-height: 70vh;
    padding: 6rem 0 4rem;
  }

  @media (max-width: 768px) {
    min-height: 60vh;
    height: auto;
    padding: 6rem 0 3rem;
    background-attachment: scroll;
    background-position: center top;
  }

  @media (max-width: 600px) {
    min-height: 50vh;
    padding: 5rem 0 2.5rem;
  }

  @media (max-width: 480px) {
    min-height: 50vh;
    padding: 4rem 0 2rem;
  }

  @media (max-width: 430px) {
    min-height: 50vh;
    padding: 3.5rem 0 1.5rem;
  }

  @media (max-width: 380px) {
    min-height: 50vh;
    padding: 3rem 0 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    padding: 0 1.8rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 600px) {
    padding: 0 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }

  @media (max-width: 430px) {
    padding: 0 0.8rem;
  }

  @media (max-width: 380px) {
    padding: 0 0.6rem;
  }
`;

const BannerTitle = styled.h1`
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 2000;
  color: #ffffff;
  margin: 0 0 1.8rem 0;
  letter-spacing: 0.2em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  font-family: "SVN-BebasNeuePro", "Bebas Neue", Arial, sans-serif;
  line-height: 1.3;
  text-transform: uppercase;
  font-style: normal;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    letter-spacing: 0.15em;
    line-height: 1.25;
  }

  @media (max-width: 1200px) {
    font-size: 7rem;
  }

  @media (max-width: 1024px) {
    font-size: 5.5rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: 0.08em;
  }

  @media (max-width: 600px) {
    font-size: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    letter-spacing: 0.05em;
    text-shadow: 0 0 15px rgba(0, 212, 255, 0.4),
      0 0 25px rgba(0, 212, 255, 0.2);
  }
`;

const BannerSubtitle = styled.p`
  display: none;
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WaveContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 20vh;
  min-height: 120px;
  max-height: 180px;
  z-index: 1;
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

const Wave = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;

  .wave-line {
    animation: ${waveAnim} 15s linear infinite;
  }
`;

const ContentSection = styled.div`
  position: relative;
  padding: 8rem 0 0;
  background: white;

  @media (max-width: 768px) {
    padding: 4rem 0 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  color: #1a1f3a;
  margin: 0 0 2rem 0;
  text-align: center;
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin: 0 0 1.5rem 0;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const FilterButton = styled.button<{ $isActive: boolean }>`
  padding: 0.8rem 2rem;
  border: 2px solid ${(props) => (props.$isActive ? "#0066ff" : "#e0e0e0")};
  background: ${(props) => (props.$isActive ? "#0066ff" : "white")};
  color: ${(props) => (props.$isActive ? "white" : "#333")};
  border-radius: 50px;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #0066ff;
    color: #0066ff;
    transform: translateY(-2px);
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const NewsCard = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: calc(var(--index) * 0.1s);

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 12px 40px rgba(0, 102, 255, 0.15);
  }

  @media (max-width: 768px) {
    animation-delay: 0;
  }
`;

const NewsImage = styled.div`
  position: relative;
  width: 100%;
  padding-top: 66.67%;
  overflow: hidden;
  background: linear-gradient(135deg, #f0f4ff 0%, #e8eef9 100%);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${NewsCard}:hover & img {
    transform: scale(1.12) rotate(1.5deg);
  }
`;

const NewsContent = styled.div`
  padding: 2.5rem;
`;

const NewsCategory = styled.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
  color: white;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-shadow: 0 0 5px rgba(0, 102, 255, 0.3);
`;

const NewsTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a1f3a;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.3s ease;

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
  font-size: 1.2rem;
  color: #999;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "📅";
  }
`;

const NewsExcerpt = styled.p`
  font-size: 1.4rem;
  color: #666;
  line-height: 1.8;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s ease 0.1s;

  ${NewsCard}:hover & {
    max-height: 200px;
    opacity: 1;
  }

  @media (max-width: 768px) {
    max-height: 200px;
    opacity: 1;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;
  flex-wrap: wrap;
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;

  @media (max-width: 768px) {
    margin-top: 2rem;
    gap: 0.5rem;
  }
`;

const PaginationButton = styled.button<{ $isActive?: boolean }>`
  padding: 0.7rem 1.2rem;
  border: 2px solid ${(props) => (props.$isActive ? "#0066ff" : "#e0e0e0")};
  background: ${(props) => (props.$isActive ? "#0066ff" : "white")};
  color: ${(props) => (props.$isActive ? "white" : "#333")};
  border-radius: 6px;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 45px;

  &:hover:not(:disabled) {
    border-color: #0066ff;
    color: #0066ff;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 1.2rem;
  }
`;

const FooterWaveContainer = styled.div`
  position: flex;
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
  category: "news" | "recruitment";
  slug: string;
}

const getNewsItems = (t: any): NewsItem[] => [
  {
    id: 1,
    title: t("newsItems.item1.title"),
    date: "November 10, 2025",
    excerpt: t("newsItems.item1.excerpt"),
    image: "/assets/images/news/news-1.jpg",
    category: "news",
    slug: "#",
  },
  {
    id: 2,
    title: t("newsItems.item2.title"),
    date: "November 10, 2025",
    excerpt: t("newsItems.item2.excerpt"),
    image: "/assets/images/news/news-2.jpg",
    category: "news",
    slug: "#",
  },
  {
    id: 3,
    title: t("newsItems.item3.title"),
    date: "October 28, 2025",
    excerpt: t("newsItems.item3.excerpt"),
    image: "/assets/images/news/news-3.jpg",
    category: "news",
    slug: "#",
  },
  {
    id: 4,
    title: t("newsItems.item4.title"),
    date: "November 5, 2025",
    excerpt: t("newsItems.item4.excerpt"),
    image: "/assets/images/news/news-4.jpg",
    category: "recruitment",
    slug: "#",
  },
  {
    id: 5,
    title: t("newsItems.item5.title"),
    date: "October 22, 2025",
    excerpt: t("newsItems.item5.excerpt"),
    image: "/assets/images/news/news-5.jpg",
    category: "news",
    slug: "#",
  },
  {
    id: 6,
    title: t("newsItems.item6.title"),
    date: "October 21, 2025",
    excerpt: t("newsItems.item6.excerpt"),
    image: "/assets/images/news/news-6.jpg",
    category: "news",
    slug: "#",
  },
];

const ITEMS_PER_PAGE = 9;

export const News: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<
    "news" | "recruitment" | "all"
  >("all");
  const [currentPage, setCurrentPage] = useState(1);

  const allNewsItems = getNewsItems(t);

  const filteredNews =
    activeCategory === "all"
      ? allNewsItems
      : allNewsItems.filter((item) => item.category === activeCategory);

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (category: "news" | "recruitment" | "all") => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <StyledSection>
      {/* Banner */}
      <BannerSection>
        <BannerContent>
          <BannerTitle>{t("news.latestNews")}</BannerTitle>
        </BannerContent>
        <WaveContainer>
          <Wave
            className="waves"
            shapeRendering="auto"
            preserveAspectRatio="none"
            viewBox="0 24 150 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path
                id="gentle-wave-news"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                className="wave-line"
                fill="rgba(255, 255, 255, 0.2)"
                y="0"
                x="48"
                xlinkHref="#gentle-wave-news"
              />
              <use
                className="wave-line"
                fill="rgba(255, 255, 255, 0.4)"
                y="3"
                x="48"
                xlinkHref="#gentle-wave-news"
              />
              <use
                className="wave-line"
                fill="rgba(255, 255, 255, 0.7)"
                y="5"
                x="48"
                xlinkHref="#gentle-wave-news"
              />
              <use
                className="wave-line"
                fill="#ffffff"
                y="7"
                x="48"
                xlinkHref="#gentle-wave-news"
              />
            </g>
          </Wave>
        </WaveContainer>
      </BannerSection>

      {/* Content */}
      <ContentSection>
        <Container style={{ paddingTop: "8rem" }}>
          <SectionTitle>{t("news.allPosts")}</SectionTitle>

          {/* Filters */}
          <FilterContainer>
            <FilterButton
              $isActive={activeCategory === "all"}
              onClick={() => handleCategoryChange("all")}
            >
              {t("news.all")} ({allNewsItems.length})
            </FilterButton>
            <FilterButton
              $isActive={activeCategory === "news"}
              onClick={() => handleCategoryChange("news")}
            >
              {t("news.newsCategory")} (
              {allNewsItems.filter((n) => n.category === "news").length})
            </FilterButton>
            <FilterButton
              $isActive={activeCategory === "recruitment"}
              onClick={() => handleCategoryChange("recruitment")}
            >
              {t("news.recruitment")} (
              {allNewsItems.filter((n) => n.category === "recruitment").length})
            </FilterButton>
          </FilterContainer>

          {/* News Grid */}
          <NewsGrid>
            {paginatedNews.map((item, index) => (
              <NewsCard
                key={item.id}
                style={{ "--index": index } as React.CSSProperties}
              >
                <NewsImage>
                  <img src={item.image} alt={item.title} loading="lazy" />
                </NewsImage>
                <NewsContent>
                  <NewsCategory>
                    {item.category === "news"
                      ? t("news.newsIcon")
                      : t("news.recruitmentIcon")}
                  </NewsCategory>
                  <NewsTitle>
                    <a href={item.slug}>{item.title}</a>
                  </NewsTitle>
                  <NewsDate>{item.date}</NewsDate>
                  <NewsExcerpt>{item.excerpt}</NewsExcerpt>
                </NewsContent>
              </NewsCard>
            ))}
          </NewsGrid>

          {/* Pagination */}
          {totalPages > 1 && (
            <PaginationContainer>
              <PaginationButton
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              >
                {t("news.previous")}
              </PaginationButton>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationButton
                    key={page}
                    $isActive={currentPage === page}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </PaginationButton>
                )
              )}

              <PaginationButton
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
              >
                {t("news.next")}
              </PaginationButton>
            </PaginationContainer>
          )}
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
                id="gentle-wave-footer-news"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                className="wave-line"
                fill="rgba(67, 121, 242, 0.3)"
                y="0"
                x="48"
                xlinkHref="#gentle-wave-footer-news"
              />
              <use
                className="wave-line"
                fill="rgba(67, 121, 242, 0.5)"
                y="3"
                x="48"
                xlinkHref="#gentle-wave-footer-news"
              />
              <use
                className="wave-line"
                fill="rgba(67, 121, 242, 0.8)"
                y="5"
                x="48"
                xlinkHref="#gentle-wave-footer-news"
              />
              <use
                className="wave-line"
                fill="#4379f2"
                y="7"
                x="48"
                xlinkHref="#gentle-wave-footer-news"
              />
            </g>
          </FooterWave>
        </FooterWaveContainer>
      </ContentSection>
    </StyledSection>
  );
};
