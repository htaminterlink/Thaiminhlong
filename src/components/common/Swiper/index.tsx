import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface SwiperProps {
  children: React.ReactNode[];
  options?: {
    speed?: number;
    autoplay?: boolean | { delay: number };
    slidesPerView?: number;
    spaceBetween?: number;
    effect?: "slide" | "fade";
    loop?: boolean;
    centeredSlides?: boolean;
    breakpoints?: {
      [key: number]: {
        slidesPerView: number;
        spaceBetween?: number;
      };
    };
  };
}

const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${(props) => props.theme.colors.primary};
    &:after {
      font-size: 1.5rem;
    }
  }

  .swiper-pagination-bullet {
    background: ${(props) => props.theme.colors.primary};
    opacity: 0.5;
    &-active {
      opacity: 1;
    }
  }
`;

export const Swiper: React.FC<SwiperProps> = ({ children, options = {} }) => {
  const defaultOptions = {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    speed: 1200,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 24,
    effect: "slide" as const,
    loop: true,
    centeredSlides: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  const mergedOptions = { ...defaultOptions, ...options };

  return (
    <SwiperWrapper>
      <SwiperComponent {...mergedOptions}>
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </SwiperComponent>
    </SwiperWrapper>
  );
};
