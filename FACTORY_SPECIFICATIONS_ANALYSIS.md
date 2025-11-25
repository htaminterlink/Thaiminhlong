# 📊 PHÂN TÍCH THÔNG SỐ KHUNG TRANG FACTORY - TRINITY VIETNAM

Dựa trên dự án cũ tại https://trinityvietnam.vn/vi/factory-seafood/ và dự án React hiện tại

---

## 🎯 TỔNG QUAN CẤU TRÚC TRANG

### 1. **CẤU TRÚC 8 SECTION CHÍNH**

```
┌─────────────────────────────────────┐
│  1. BANNER (HERO SECTION)           │  ← Giới thiệu nhà máy
├─────────────────────────────────────┤
│  2. VIDEO SECTION                   │  ← Video giới thiệu
├─────────────────────────────────────┤
│  3. CERTIFICATIONS                  │  ← Các chứng nhận (8+)
├─────────────────────────────────────┤
│  4. PRODUCTION CAPACITY             │  ← Công suất 300 container/năm
├─────────────────────────────────────┤
│  5. FACTORY SPECS                   │  ← Diện tích 10,000m²
├─────────────────────────────────────┤
│  6. PROCESS CAROUSEL                │  ← Quy trình sản xuất
├─────────────────────────────────────┤
│  7. PRODUCTS SHOWCASE               │  ← Sản phẩm hải sản
├─────────────────────────────────────┤
│  8. COLD STORAGE (Optional)         │  ← Kho lạnh
└─────────────────────────────────────┘
```

---

## 📐 THÔNG SỐ KỸ THUẬT CHI TIẾT

### **SECTION 1: FACTORY BANNER (sec-fac-bn)**

#### Layout Specifications:
```scss
.sec-fac-bn {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(0, 33, 94, 0.7), rgba(67, 121, 242, 0.8)),
              url('/assets/images/factory-bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 8rem 0;
  
  @media (max-width: 768px) {
    min-height: 50vh;
    padding: 4rem 0;
  }
}
```

#### Content Structure:
```html
<section class="sec-fac-bn">
  <div class="fac-bn hoverParas">
    <!-- Decorative elements -->
    <div class="decs">
      <div class="decs-in hoverParasIt">
        <img src="fac-sea-dec.png" />
      </div>
    </div>
    
    <div class="container">
      <div class="fac-bn-ctn">
        <!-- Title -->
        <p class="tt" data-aos="fade-up-cus" data-aos-delay="0">
          TRINITY TIỀN GIANG
        </p>
        
        <!-- Description -->
        <p class="des" data-aos="fade-up-cus" data-aos-delay="400">
          Uy tín trong xuất khẩu ghẹ & cá ngừ từ năm 2006...
        </p>
        
        <!-- Big Text -->
        <p class="big" data-aos="fade-up-cus" data-aos-delay="600">
          SEAFOOD
        </p>
        
        <!-- Brush decoration -->
        <span class="brush">
          <span class="brush-in hoverParasIt"></span>
        </span>
      </div>
    </div>
  </div>
</section>
```

#### Typography:
```scss
.fac-bn-ctn {
  .tt {
    font-family: 'SVN-BebasNeuePro', 'Bebas Neue', Arial;
    font-size: clamp(2rem, 4vw, 4.8rem);
    font-weight: 700;
    color: #FFD700;
    letter-spacing: 0.1em;
    margin-bottom: 2rem;
  }
  
  .des {
    font-family: 'Inter', sans-serif;
    font-size: clamp(1.4rem, 2vw, 1.8rem);
    line-height: 1.8;
    color: #ffffff;
    max-width: 80rem;
    margin-bottom: 3rem;
  }
  
  .big {
    font-family: 'SVN-BebasNeuePro', 'Bebas Neue', Arial;
    font-size: clamp(6rem, 15vw, 16rem);
    font-weight: 900;
    color: rgba(255, 255, 255, 0.15);
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
}
```

---

### **SECTION 2: VIDEO SECTION (sec-fac-vid)**

#### Layout Specifications:
```scss
.sec-fac-vid {
  position: relative;
  width: 100%;
  background: linear-gradient(180deg, #4379F2 0%, #FFFFFF 100%);
  padding: 0;
  padding-bottom: 8rem;
  
  @media (max-width: 768px) {
    padding-bottom: 4rem;
  }
}

.fac-vid-video {
  position: relative;
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
  margin-top: -8rem; // Overlap với banner
  z-index: 10;
  
  @media (max-width: 768px) {
    max-width: calc(100% - 3rem);
    margin-top: -4rem;
  }
}
```

#### Wave SVG:
```html
<div class="Wave add-class" style="position: absolute; top: 0; z-index: 2;">
  <svg class="waves" 
       shape-rendering="auto" 
       preserveAspectRatio="none" 
       viewBox="0 24 150 28">
    <defs>
      <path id="gentle-wave" 
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
    </defs>
    <g class="parallax">
      <use fill="rgba(255, 255, 255, 0.1)" y="0" x="48" xlink:href="#gentle-wave"></use>
      <use fill="rgba(255, 255, 255, 0.3)" y="3" x="48" xlink:href="#gentle-wave"></use>
      <use fill="rgba(255, 255, 255, 0.7)" y="5" x="48" xlink:href="#gentle-wave"></use>
      <use fill="rgba(255, 255, 255, 0.7)" y="7" x="48" xlink:href="#gentle-wave"></use>
    </g>
  </svg>
</div>
```

#### Video Container:
```scss
.fac-vid-video {
  .img {
    position: relative;
    width: 100%;
    border-radius: 1.6rem;
    overflow: hidden;
    box-shadow: 0 4px 32px rgba(67, 122, 242, 0.2);
    
    video {
      width: 100%;
      height: auto;
      display: block;
      background: #000;
    }
  }
  
  // Play button overlay
  .img-play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    cursor: pointer;
    
    .img-play-in {
      padding: 1.5rem 3rem;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 10rem;
      font-weight: 600;
      font-size: 1.6rem;
      color: #4379F2;
      transition: all 0.4s;
      
      &:hover {
        background: #4379F2;
        color: white;
        transform: scale(1.05);
      }
    }
  }
}
```

#### Decorative Bottom SVG:
```html
<div class="fac-vid-video-dec">
  <svg xmlns="http://www.w3.org/2000/svg" 
       width="1512" height="58" 
       viewBox="0 0 1512 58" 
       preserveAspectRatio="none">
    <path d="M0 51.5C0 51.5 293 0 756 0C1219 0 1512 51.5 1512 51.5V1003.5H0V51.5Z" 
          fill="white" />
  </svg>
</div>
```

---

### **SECTION 3: CERTIFICATIONS (sec-fac-certi)**

#### Layout Specifications:
```scss
.sec-fac-certi {
  padding: 8rem 0;
  background: #FFFFFF;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
}

.fac-certi-flex {
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
```

#### Left Column - Content:
```scss
.fac-certi-l {
  .wrapper {
    h3.title-40 {
      font-size: clamp(3rem, 5vw, 4rem);
      font-weight: 700;
      color: #00215E;
      margin-bottom: 2rem;
    }
    
    .des {
      font-size: 1.6rem;
      line-height: 1.8;
      color: #666;
      margin-bottom: 3rem;
    }
    
    .num {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      
      .num-txt {
        font-size: clamp(6rem, 10vw, 10rem);
        font-weight: 900;
        color: #4379F2;
        font-family: 'SVN-BebasNeuePro', 'Bebas Neue', Arial;
      }
      
      .num-sys {
        font-size: clamp(4rem, 6vw, 6rem);
        font-weight: 700;
        color: #4379F2;
      }
    }
  }
}
```

#### Right Column - Certificate Grid:
```scss
.fac-certi-r {
  .img-inner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.6rem;
    
    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }
  
  .img-it {
    position: relative;
    aspect-ratio: 1 / 1;
    border-radius: 1.2rem;
    overflow: hidden;
    border: 2px solid #E8E8E8;
    transition: all 0.4s ease;
    cursor: pointer;
    
    span {
      display: block;
      width: 100%;
      height: 100%;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
      }
    }
    
    // Hover effects
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 24px rgba(67, 121, 242, 0.15);
      border-color: #4379F2;
      
      img {
        transform: scale(1.05);
      }
    }
    
    // Hidden lightbox links
    a {
      display: none;
    }
  }
}
```

#### Background Decoration:
```scss
.decs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.05;
  
  .decs-in {
    img {
      width: 100%;
      height: auto;
    }
  }
}
```

---

### **SECTION 4: PRODUCTION CAPACITY (sec-fac-prod)**

#### Layout Specifications:
```scss
.sec-fac-prod {
  padding: 8rem 0;
  background: linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%);
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
}

.fac-prod-box {
  display: grid;
  grid-template-columns: 45% 55%;
  gap: 6rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}
```

#### Left Column - Circular Image:
```scss
.fac-prod-circle {
  .wrapper {
    position: relative;
    width: 100%;
    max-width: 50rem;
    margin: 0 auto;
    
    .img {
      position: relative;
      width: 100%;
      aspect-ratio: 3 / 2;
      border-radius: 2.4rem;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      
      .img-inner {
        width: 100%;
        height: 100%;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      
      // Small logo overlay
      .img-small {
        position: absolute;
        bottom: -3rem;
        right: -3rem;
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        background: white;
        padding: 1.5rem;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        
        .img-small-in {
          width: 100%;
          height: 100%;
          
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        
        @media (max-width: 768px) {
          width: 7rem;
          height: 7rem;
          bottom: -2rem;
          right: -2rem;
        }
      }
    }
  }
}
```

#### Right Column - Content + Floating Images:
```scss
.fac-prod-ctn {
  .wrapper {
    h3.title-40 {
      font-size: clamp(3rem, 5vw, 4rem);
      font-weight: 700;
      color: #00215E;
      margin-bottom: 2rem;
    }
    
    .des {
      font-size: 1.6rem;
      line-height: 1.8;
      color: #666;
      margin-bottom: 3rem;
    }
    
    .fac-prod-num {
      font-size: clamp(3rem, 5vw, 4.8rem);
      font-weight: 900;
      color: #4379F2;
      font-family: 'SVN-BebasNeuePro', 'Bebas Neue', Arial;
      letter-spacing: 0.05em;
    }
  }
  
  // Floating circular images
  .fac-prod-pubs {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    @media (max-width: 1024px) {
      display: none; // Hide on mobile
    }
    
    .fac-prod-pub {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      overflow: hidden;
      border: 3px solid white;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
      animation: float 3s ease-in-out infinite;
      animation-delay: var(--dl, 0s);
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
```

#### Float Animation:
```scss
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1.5rem);
  }
}
```

---

### **SECTION 5: FACTORY SPECS (sec-fac-square)**

#### Layout Specifications:
```scss
.sec-fac-square {
  position: relative;
  padding: 12rem 0 8rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 6rem 0 4rem;
  }
  
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.15;
      filter: grayscale(30%);
    }
  }
}
```

#### Content Container:
```scss
.fac-square-ctn {
  position: relative;
  z-index: 2;
  max-width: 80rem;
  margin: 0 auto;
  text-align: center;
  
  .wrapper {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 6rem 4rem;
    border-radius: 2.4rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 768px) {
      padding: 4rem 2rem;
    }
    
    .meter {
      display: flex;
      justify-content: center;
      align-items: baseline;
      gap: 1rem;
      margin-bottom: 3rem;
      
      .meter-txt {
        font-size: clamp(8rem, 12vw, 14rem);
        font-weight: 900;
        color: #4379F2;
        font-family: 'SVN-BebasNeuePro', 'Bebas Neue', Arial;
        position: relative;
        
        &::after {
          content: 'm²';
          font-size: 0.35em;
          position: absolute;
          top: 0;
          right: -0.6em;
          font-weight: 700;
        }
      }
    }
    
    h3.title-40 {
      font-size: clamp(2.4rem, 4vw, 3.2rem);
      font-weight: 700;
      color: #00215E;
      margin-bottom: 2rem;
    }
    
    .des {
      font-size: 1.6rem;
      line-height: 1.8;
      color: #666;
      max-width: 65rem;
      margin: 0 auto;
    }
  }
}
```

---

### **SECTION 6: PROCESS CAROUSEL (sec-fac-slide)**

#### Layout Specifications:
```scss
.sec-fac-slide {
  padding: 8rem 0;
  background: #FFFFFF;
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
}

.fac-slide-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  
  h3.title-40 {
    font-size: clamp(2.4rem, 4vw, 4rem);
    font-weight: 700;
    color: #00215E;
    line-height: 1.3;
    
    br {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  
  .swiper-control {
    display: flex;
    gap: 1rem;
    
    &-btn {
      width: 4.8rem;
      height: 4.8rem;
      border: 2px solid #E8E8E8;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      background: white;
      
      i {
        font-size: 1.8rem;
        color: #666;
        transition: color 0.3s ease;
      }
      
      &:hover {
        background: #4379F2;
        border-color: #4379F2;
        
        i {
          color: white;
        }
      }
      
      &.swiper-button-disabled {
        opacity: 0.5;
        cursor: not-allowed;
        
        &:hover {
          background: white;
          border-color: #E8E8E8;
          
          i {
            color: #666;
          }
        }
      }
      
      @media (max-width: 768px) {
        width: 4rem;
        height: 4rem;
        
        i {
          font-size: 1.4rem;
        }
      }
    }
  }
}
```

#### Swiper Configuration:
```scss
.fac-slide-swiper {
  .swiper {
    overflow: visible;
    
    &-wrapper {
      display: flex;
    }
    
    &-slide {
      height: auto;
      opacity: 0.6;
      transition: opacity 0.4s ease;
      
      &-active {
        opacity: 1;
      }
    }
  }
}
```

#### Slide Item:
```scss
.fac-slide-it {
  height: 100%;
  
  .inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    
    .img {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 9;
      border-radius: 1.6rem;
      overflow: hidden;
      margin-bottom: 2rem;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
      
      .img-inner {
        width: 100%;
        height: 100%;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
      }
      
      &:hover {
        img {
          transform: scale(1.05);
        }
      }
    }
    
    .info {
      .info-num {
        font-size: 1.4rem;
        font-weight: 600;
        color: #4379F2;
        margin-bottom: 0.8rem;
      }
      
      .info-des {
        font-size: 1.6rem;
        line-height: 1.6;
        color: #666;
      }
    }
  }
}
```

#### Swiper JS Settings:
```javascript
new Swiper('.fac-slide-swiper .swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: '.fac-slide-head .swiper-next',
    prevEl: '.fac-slide-head .swiper-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
```

---

### **SECTION 7: PRODUCTS SHOWCASE (sec-fac-our)**

#### Layout Specifications:
```scss
.sec-fac-our {
  position: relative;
  padding: 12rem 0 0;
  background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 6rem 0 0;
  }
  
  // Decorative background
  .decs {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0.08;
    
    .decs-in {
      position: absolute;
      top: 10%;
      right: 5%;
      width: 40%;
      
      img {
        width: 100%;
        height: auto;
      }
      
      @media (max-width: 768px) {
        width: 60%;
        top: 5%;
        right: -10%;
      }
    }
  }
}
```

#### Header Section:
```scss
.fac-our-wrap {
  padding: 4rem 0;
  
  .fac-our-head {
    text-align: center;
    position: relative;
    margin-bottom: 4rem;
    
    .fac-our-tt {
      font-size: clamp(6rem, 12vw, 12rem);
      font-weight: 900;
      color: rgba(67, 121, 242, 0.1);
      font-family: 'SVN-BebasNeuePro', 'Bebas Neue', Arial;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
    
    .fac-our-des {
      font-size: clamp(2rem, 4vw, 3.2rem);
      font-weight: 700;
      color: #00215E;
      position: relative;
      z-index: 2;
    }
    
    // Brush decoration
    .brush {
      position: absolute;
      bottom: -2rem;
      left: 50%;
      transform: translateX(-50%);
      width: 15rem;
      height: 3rem;
      
      .brush-in {
        width: 100%;
        height: 100%;
        background-image: url('/assets/images/brushSea.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.8;
        animation: slideInRight 0.8s ease-out;
      }
    }
  }
}
```

#### Product Image Section:
```scss
.fac-our-img {
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 4rem 0 6rem;
  
  .img {
    width: 100%;
    max-width: 50rem;
    margin: 0 auto 4rem;
    
    .img-inner {
      position: relative;
      width: 100%;
      aspect-ratio: 1 / 1;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.1));
        animation: zoomIn 0.8s ease-out;
        
        @media (max-width: 768px) {
          max-width: 80%;
          margin: 0 auto;
        }
      }
    }
  }
  
  // CTA Button
  a.btn {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 1.6rem 3.2rem;
    background: linear-gradient(135deg, #4379F2 0%, #2D5FD9 100%);
    color: white;
    font-size: 1.6rem;
    font-weight: 600;
    border-radius: 10rem;
    text-decoration: none;
    transition: all 0.4s ease;
    box-shadow: 0 4px 16px rgba(67, 121, 242, 0.3);
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.6s ease;
    }
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(67, 121, 242, 0.4);
      
      &::before {
        left: 100%;
      }
    }
    
    @media (max-width: 768px) {
      padding: 1.4rem 2.4rem;
      font-size: 1.4rem;
    }
  }
}
```

#### Bottom Wave Section:
```scss
.fac-our-bottom {
  width: 100%;
  height: 20rem;
  background: linear-gradient(180deg, transparent 0%, #4379F2 100%);
  position: relative;
  
  @media (max-width: 768px) {
    height: 12rem;
  }
}
```

---

### **SECTION 8: COLD STORAGE (Optional)**

#### Layout Specifications:
```scss
.sec-cold-storage {
  padding: 8rem 0;
  background: #FFFFFF;
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
}
```

---

## 🎨 COLOR PALETTE SYSTEM

```scss
// Primary Colors
--color-pri: #4379F2;          // Trinity Blue
--color-second: #00215E;       // Dark Navy
--color-accent: #FFD700;       // Gold Accent

// Background Colors
--bg-white: #FFFFFF;
--bg-light: #F8FAFC;
--bg-gradient-1: linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%);
--bg-gradient-2: linear-gradient(180deg, #4379F2 0%, #FFFFFF 100%);
--bg-overlay: rgba(0, 33, 94, 0.7);

// Text Colors
--text-dark: #00215E;
--text-body: #666666;
--text-light: #A1ABAB;
--text-white: #FFFFFF;

// Border & Divider
--cl-bd: #E8E8E8;
--border-light: #F0F0F0;

// Shadow & Effects
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.15);
--shadow-blue: 0 4px 16px rgba(67, 121, 242, 0.2);
```

---

## 📝 TYPOGRAPHY SYSTEM

### Font Families:
```scss
// Primary Font (Headings)
$font-primary: 'SVN-BebasNeuePro', 'Bebas Neue', Arial, sans-serif;

// Secondary Font (Body)
$font-secondary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Font Sizes (Fluid Typography):
```scss
// Headings
--fz-h1: clamp(4rem, 8vw, 8rem);      // Ultra Large
--fz-h2: clamp(3rem, 6vw, 6rem);      // Extra Large
--fz-h3: clamp(2.4rem, 5vw, 4.8rem);  // Large
--fz-h4: clamp(2rem, 4vw, 4rem);      // Medium Large
--fz-h5: clamp(1.8rem, 3vw, 3.2rem);  // Medium

// Body Text
--fz-18: clamp(1.4rem, 2vw, 1.8rem);  // Body Large
--fz-16: clamp(1.3rem, 2vw, 1.6rem);  // Body Medium
--fz-14: clamp(1.2rem, 1.5vw, 1.4rem); // Body Small
--fz-12: clamp(1.1rem, 1.2vw, 1.2rem); // Caption
```

### Line Heights:
```scss
--lh-tight: 1.2;    // For large headings
--lh-normal: 1.5;   // For medium headings
--lh-relaxed: 1.8;  // For body text
--lh-loose: 2.0;    // For spacious text
```

### Font Weights:
```scss
--fw-light: 300;
--fw-normal: 400;
--fw-medium: 500;
--fw-semibold: 600;
--fw-bold: 700;
--fw-extrabold: 800;
--fw-black: 900;
```

---

## 📐 SPACING SYSTEM

```scss
// Container
--container-max: 120rem;        // 1200px
--container-padding: 1.5rem;    // Side padding

// Section Padding
--section-padding-y: 8rem;      // Desktop
--section-padding-y-mobile: 4rem; // Mobile

// Component Spacing
--spacing-xs: 0.8rem;   // 8px
--spacing-sm: 1.6rem;   // 16px
--spacing-md: 2.4rem;   // 24px
--spacing-lg: 3.2rem;   // 32px
--spacing-xl: 4.8rem;   // 48px
--spacing-xxl: 6.4rem;  // 64px

// Grid Gaps
--gap-xs: 1rem;
--gap-sm: 1.6rem;
--gap-md: 2.4rem;
--gap-lg: 4rem;
--gap-xl: 6rem;
```

---

## 🖼️ IMAGE SPECIFICATIONS

### Banner Images:
```
- Format: JPG (optimized)
- Dimensions: 1920×1080px minimum
- Aspect Ratio: 16:9
- File Size: < 500KB
- Usage: Background images with overlay
```

### Product Images:
```
- Format: PNG with transparency
- Dimensions: 1000×1000px
- Aspect Ratio: 1:1
- File Size: < 300KB
- Usage: Product showcases, featured items
```

### Certification Logos:
```
- Format: PNG with transparency
- Dimensions: 500×500px
- Aspect Ratio: 1:1
- File Size: < 100KB
- Usage: Grid display
```

### Factory Photos:
```
- Format: JPG
- Dimensions: 1200×800px
- Aspect Ratio: 3:2
- File Size: < 400KB
- Usage: Process carousel, gallery
```

### Decorative Elements:
```
- Format: SVG or PNG
- Dimensions: Variable
- File Size: < 50KB
- Usage: Icons, patterns, decorations
```

---

## 🎬 ANIMATION SPECIFICATIONS

### Scroll Animations (AOS):
```scss
// Fade Animations
[data-aos="fade-up-cus"] {
  transform: translateY(3rem);
  opacity: 0;
  transition: transform 0.8s ease-out, opacity 0.8s ease-out;
  
  &.aos-animate {
    transform: translateY(0);
    opacity: 1;
  }
}

// Zoom Animations
[data-aos="zoom-in"] {
  transform: scale(0.8);
  opacity: 0;
  transition: transform 0.6s ease-out, opacity 0.6s ease-out;
  
  &.aos-animate {
    transform: scale(1);
    opacity: 1;
  }
}
```

### Hover Animations:
```scss
// Image Zoom
.hover-zoom {
  overflow: hidden;
  
  img {
    transition: transform 0.6s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
}

// Lift Effect
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
}
```

### Wave Animation:
```scss
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

.waves use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}

.waves use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.waves use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.waves use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.waves use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
```

### Float Animation:
```scss
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1.5rem);
  }
}

.float-element {
  animation: float 3s ease-in-out infinite;
}
```

### CountUp Animation:
```javascript
// For numbers (08+, 300, 10000)
const countUpOptions = {
  duration: 2.5,
  separator: ',',
  suffix: '',
  useEasing: true,
  useGrouping: true,
};

// Example usage
const counter = new CountUp('counter-element', targetNumber, countUpOptions);
counter.start();
```

---

## 📱 RESPONSIVE BREAKPOINTS

```scss
// Mobile First Approach

// Extra Small Devices (Portrait Phones)
@media (max-width: 360px) {
  // Ultra compact phones
}

// Small Devices (Landscape Phones)
@media (max-width: 576px) {
  // Single column layout
  // Reduced font sizes
  // Stacked sections
}

// Medium Devices (Tablets)
@media (max-width: 768px) {
  // 2-column grids become single column
  // Adjusted padding/margins
  // Modified navigation
}

// Large Tablets
@media (max-width: 1024px) {
  // Reduce grid columns
  // Adjust font sizes
  // Modify complex layouts
}

// Desktop
@media (min-width: 1025px) {
  // Full multi-column layouts
  // Max container widths
  // Enhanced animations
}

// Large Desktop
@media (min-width: 1440px) {
  // Larger spacing
  // Enhanced visual effects
}
```

### Specific Breakpoint Adjustments:

#### Mobile (max-width: 768px):
```scss
.sec-fac-bn {
  min-height: 50vh;
  padding: 4rem 0;
  
  .fac-bn-ctn {
    .tt {
      font-size: 2.4rem;
    }
    
    .des {
      font-size: 1.4rem;
    }
    
    .big {
      font-size: 6rem;
    }
  }
}

.fac-certi-flex {
  grid-template-columns: 1fr;
  
  .img-inner {
    grid-template-columns: repeat(2, 1fr);
  }
}

.fac-prod-box {
  grid-template-columns: 1fr;
  
  .fac-prod-pubs {
    display: none; // Hide floating images
  }
}
```

#### Tablet (768px - 1024px):
```scss
.fac-certi-flex {
  grid-template-columns: 1fr;
  
  .img-inner {
    grid-template-columns: repeat(3, 1fr);
  }
}

.fac-slide-swiper .swiper {
  slidesPerView: 2;
  spaceBetween: 20px;
}
```

---

## ⚙️ COMPONENT INTERACTIONS

### Video Player:
```javascript
// Video play/pause on click
const videoContainer = document.querySelector('.fac-vid-video');
const video = videoContainer.querySelector('video');
const playButton = videoContainer.querySelector('.img-play');

playButton?.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playButton.style.display = 'none';
  }
});

video?.addEventListener('click', () => {
  if (!video.paused) {
    video.pause();
    playButton.style.display = 'flex';
  }
});
```

### Certificate Lightbox:
```javascript
// Using Fancybox for certificate viewing
Fancybox.bind('[data-fancybox]', {
  Toolbar: {
    display: {
      left: [],
      middle: [],
      right: ['close'],
    },
  },
  Images: {
    zoom: true,
  },
});
```

### Swiper Carousel:
```javascript
const processSwiper = new Swiper('.fac-slide-swiper .swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});
```

---

## 🌊 WAVE EFFECT SPECIFICATIONS

### Wave SVG Path:
```svg
<path id="gentle-wave" 
      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
```

### Wave Animation Layers:
```scss
// 4 layers with different speeds and opacities

// Layer 1 - Fastest, most transparent
fill: rgba(255, 255, 255, 0.1);
animation-duration: 7s;
animation-delay: -2s;

// Layer 2 - Medium speed
fill: rgba(255, 255, 255, 0.3);
animation-duration: 10s;
animation-delay: -3s;

// Layer 3 - Slower
fill: rgba(255, 255, 255, 0.7);
animation-duration: 13s;
animation-delay: -4s;

// Layer 4 - Slowest, most opaque
fill: rgba(255, 255, 255, 0.7);
animation-duration: 20s;
animation-delay: -5s;
```

### Wave Positioning:
```scss
.Wave {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;
  pointer-events: none;
  
  .waves {
    position: relative;
    width: 100%;
    height: calc(150 / 1512 * 100vw); // Responsive height
    margin-bottom: -7px; // Remove gap
  }
}
```

---

## 🎯 PERFORMANCE OPTIMIZATION

### Image Optimization:
```html
<!-- Use responsive images -->
<img src="/assets/images/image.jpg"
     srcset="/assets/images/image-small.jpg 400w,
             /assets/images/image-medium.jpg 800w,
             /assets/images/image-large.jpg 1200w"
     sizes="(max-width: 768px) 100vw,
            (max-width: 1024px) 50vw,
            33vw"
     alt="Description"
     loading="lazy" />
```

### Font Loading:
```html
<!-- Preload critical fonts -->
<link rel="preload" 
      href="/assets/font/Inter/Inter-Regular.woff2" 
      as="font" 
      type="font/woff2" 
      crossorigin>
      
<link rel="preload" 
      href="/assets/font/SVN-BebasNeuePro/SVN-BebasNeuePro-Regular.woff2" 
      as="font" 
      type="font/woff2" 
      crossorigin>
```

### CSS Optimization:
```scss
// Use will-change for animated elements
.animated-element {
  will-change: transform, opacity;
}

// Use transform for animations (GPU accelerated)
.slide-in {
  transform: translateX(-100%);
  transition: transform 0.4s ease;
  
  &.active {
    transform: translateX(0);
  }
}

// Avoid layout thrashing
.optimized-animation {
  transform: translateY(0);
  opacity: 1;
  // ❌ Don't animate: width, height, margin, padding
  // ✅ Do animate: transform, opacity
}
```

### JavaScript Optimization:
```javascript
// Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

window.addEventListener('scroll', debounce(() => {
  // Scroll handler
}, 100));

// Use Intersection Observer for lazy loading
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '50px',
});

document.querySelectorAll('.lazy-element').forEach(el => {
  observer.observe(el);
});
```

---

## 🛠️ TECHNICAL STACK

### Frontend Dependencies:
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "styled-components": "^6.1.0",
    "react-i18next": "^13.5.0",
    "swiper": "^11.0.5",
    "aos": "^2.3.4",
    "@fancyapps/ui": "^5.0.28",
    "countup.js": "^2.8.0"
  }
}
```

### Required Assets:
```
📁 public/assets/
├── 📁 images/
│   ├── factory/          (7 factory photos)
│   ├── certification/    (8 certificate images)
│   ├── cold storage/     (7 cold storage photos)
│   ├── ca.png           (Fish decoration)
│   ├── cua.png          (Crab decoration)
│   ├── tom.png          (Shrimp decoration)
│   ├── fac-sea-dec.png  (Sea decoration)
│   ├── fac-our-dec.png  (Product decoration)
│   ├── brushSea.png     (Brush decoration)
│   └── map-grid.png     (Map grid background)
├── 📁 font/
│   ├── Inter/           (Regular, Medium, Bold, SemiBold)
│   └── SVN-BebasNeuePro/ (Regular, Middle)
└── 📁 videos/
    └── Phim-GTDN-TRINITY-My-Tho-3k-bitrate.mp4
```

---

## 📊 ACCESSIBILITY SPECIFICATIONS

### Semantic HTML:
```html
<main class="main page-landing">
  <article>
    <section aria-labelledby="banner-title">
      <h1 id="banner-title">TRINITY TIỀN GIANG</h1>
      <p>Description...</p>
    </section>
    
    <section aria-labelledby="certifications-title">
      <h2 id="certifications-title">Các Chứng Nhận</h2>
      <!-- Content -->
    </section>
  </article>
</main>
```

### ARIA Labels:
```html
<!-- Navigation -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="#certifications">Chứng Nhận</a></li>
  </ul>
</nav>

<!-- Video Player -->
<video controls 
       aria-label="Trinity Vietnam factory introduction video">
  <source src="video.mp4" type="video/mp4">
</video>

<!-- Carousel -->
<div class="swiper" role="region" aria-label="Factory process carousel">
  <div class="swiper-wrapper">
    <!-- Slides -->
  </div>
  <button class="swiper-prev" aria-label="Previous slide"></button>
  <button class="swiper-next" aria-label="Next slide"></button>
</div>
```

### Keyboard Navigation:
```javascript
// Ensure all interactive elements are keyboard accessible
document.querySelectorAll('.clickable-element').forEach(el => {
  el.setAttribute('tabindex', '0');
  
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      el.click();
    }
  });
});
```

### Color Contrast:
```scss
// Ensure WCAG AA compliance (4.5:1 for normal text)

// ✅ Good Contrast
--text-on-white: #00215E;      // 15.2:1 contrast ratio
--text-body: #666666;          // 5.7:1 contrast ratio

// ❌ Poor Contrast (avoid)
--light-gray-on-white: #E0E0E0; // Too low contrast

// Button States
.btn {
  background: #4379F2;
  color: #FFFFFF;              // High contrast
  
  &:hover {
    background: #2D5FD9;       // Darker for better contrast
  }
  
  &:focus {
    outline: 3px solid #4379F2;
    outline-offset: 2px;
  }
}
```

---

## 🔍 SEO SPECIFICATIONS

### Meta Tags:
```html
<head>
  <title>Nhà máy chế biến hải sản - Trinity Vietnam</title>
  <meta name="description" 
        content="Nhà máy chế biến hải sản Trinity Vietnam với diện tích 10,000m², công suất 300 container/năm, đạt các chứng nhận BRC, HACCP, Halal, Kosher." />
  
  <!-- Open Graph -->
  <meta property="og:title" content="Nhà máy chế biến hải sản - Trinity Vietnam" />
  <meta property="og:description" content="Nhà máy chế biến hải sản Trinity Vietnam..." />
  <meta property="og:image" content="/assets/images/factory/og-image.jpg" />
  <meta property="og:url" content="https://trinityvietnam.vn/vi/factory-seafood/" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Nhà máy chế biến hải sản - Trinity Vietnam" />
</head>
```

### Structured Data:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Trinity Vietnam",
  "description": "Nhà máy chế biến hải sản cao cấp",
  "url": "https://trinityvietnam.vn",
  "logo": "https://trinityvietnam.vn/assets/images/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mỹ Tho",
    "addressRegion": "Tiền Giang",
    "addressCountry": "VN"
  },
  "certifications": [
    "BRC", "HACCP", "Halal", "Kosher", "BSCI"
  ]
}
```

---

## 📦 DEPLOYMENT CHECKLIST

### ✅ Pre-deployment:
- [ ] All images optimized (< 500KB)
- [ ] Fonts loaded correctly
- [ ] All animations working
- [ ] Responsive design tested (mobile/tablet/desktop)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Performance audit (Lighthouse score > 90)
- [ ] Accessibility audit (WCAG AA compliance)
- [ ] SEO meta tags complete
- [ ] Console errors fixed
- [ ] All links working

### ✅ Build Optimization:
```bash
# Build production bundle
npm run build

# Analyze bundle size
npm run analyze

# Check for unused dependencies
npm run depcheck

# Minify and optimize assets
npm run optimize
```

### ✅ Post-deployment:
- [ ] Test all sections load correctly
- [ ] Video plays properly
- [ ] Swiper carousel works
- [ ] Certificate lightbox opens
- [ ] Mobile menu functions
- [ ] Language switcher works
- [ ] Analytics tracking active
- [ ] Error monitoring setup

---

## 📞 SUPPORT & MAINTENANCE

### File Locations:
```
trinity-react/
├── src/
│   ├── components/sections/
│   │   ├── Factory/index.tsx
│   │   ├── FactoryBanner/index.tsx
│   │   ├── FactoryCertifications/index.tsx
│   │   ├── FactoryCapacity/index.tsx
│   │   ├── FactorySpecs/index.tsx
│   │   ├── Process/index.tsx
│   │   ├── FactoryProducts/index.tsx
│   │   └── ColdStorage/index.tsx
│   └── i18n/
│       ├── vi/index.ts
│       └── en/index.ts
└── public/assets/
    ├── images/
    ├── font/
    └── videos/
```

### Common Issues:
1. **Animations not working**: Check if AOS is initialized
2. **Images not loading**: Verify file paths in public/assets
3. **Swiper not sliding**: Check Swiper CSS is loaded
4. **Video not playing**: Verify video codec compatibility
5. **Fonts not loading**: Check font file paths and formats

---

## 🎓 SUMMARY

Trang Factory của Trinity Vietnam được thiết kế với:

### ✅ **8 Section chính**:
1. Banner Hero với background image
2. Video giới thiệu với Wave effect
3. Certifications grid (8 items)
4. Production capacity showcase
5. Factory specifications
6. Process carousel (Swiper)
7. Products showcase
8. Cold storage gallery

### ✅ **Thông số kỹ thuật**:
- **Responsive**: Mobile-first approach
- **Animations**: AOS, keyframes, hover effects
- **Typography**: Fluid sizing với clamp()
- **Colors**: Blue (#4379F2) + Navy (#00215E)
- **Spacing**: 8rem padding desktop, 4rem mobile
- **Images**: Optimized < 500KB
- **Performance**: Lazy loading, GPU accelerated

### ✅ **Công nghệ**:
- React 18
- Styled-components
- Swiper.js
- AOS (Animate On Scroll)
- Fancybox
- CountUp.js

---

**📅 Tài liệu này được cập nhật**: November 15, 2025  
**🔖 Version**: 1.0.0  
**👨‍💻 Tác giả**: AI Coding Assistant  
**🌐 Website**: https://trinityvietnam.vn/vi/factory-seafood/

---

**🎯 MỤC ĐÍCH**: Tài liệu này cung cấp đầy đủ thông số khung và specifications để implement trang Factory cho Trinity Vietnam React project.


