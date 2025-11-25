# Factory Components - Usage Examples 📖

## Overview
This guide shows how to import and use each Factory component in your React application.

---

## 1. FactoryBanner

### Basic Usage
```tsx
import FactoryBanner from "./components/sections/FactoryBanner";

export function MyPage() {
  return <FactoryBanner />;
}
```

### Component Props
None - all content is from i18n translations

### Translation Keys Used
```javascript
factory.banner.title
factory.banner.description
factory.banner.bigText
```

### Customization
To change content, update i18n files:

```javascript
// src/i18n/vi/index.ts
factory: {
  banner: {
    title: "Tên công ty của bạn",
    description: "Mô tả của bạn",
    bigText: "SẢN PHẨM"
  }
}
```

### Styling Customization
```tsx
// In the component file, modify styled components
const Title = styled.p`
  font-size: 5rem; // Change size
  color: #your-color; // Change color
`;
```

---

## 2. FactoryCertifications

### Basic Usage
```tsx
import FactoryCertifications from "./components/sections/FactoryCertifications";

export function Factory() {
  return <FactoryCertifications />;
}
```

### Component Props
None - certifications are hardcoded in component

### Adding More Certifications
Edit the `certifications` array inside component:

```tsx
const certifications = [
  { name: "BRC", src: "/assets/images/certification/image.png" },
  { name: "BSCI", src: "/assets/images/certification/image-1.png" },
  { name: "HACCP", src: "/assets/images/certification/image-2.png" },
  // Add more here
  { name: "New Cert", src: "/path/to/image.png" },
];
```

### Styling Customization
```tsx
// Change grid columns
const CertWrapper = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); // More columns
`;

// Change animation duration
<CertItem
  data-aos="zoom-in"
  data-aos-duration="600" // Change animation speed
>
```

### Translation Keys
```javascript
factory.certifications.title
factory.certifications.description
factory.certifications.count
```

---

## 3. FactoryCapacity

### Basic Usage
```tsx
import FactoryCapacity from "./components/sections/FactoryCapacity";

export function Factory() {
  return <FactoryCapacity />;
}
```

### Component Props
None - uses i18n and internal data

### Changing Product Images
```tsx
// In component, modify the array
const productImages = [
  "/assets/images/image1.jpg",
  "/assets/images/image2.jpg",
  // Add more images
  "/assets/images/image6.jpg",
];
```

### Changing Number Animation
```tsx
// Change the CountUp end value
<CountUp end={500} duration={2.5} /> // 300 → 500
```

### Styling Customization
```tsx
// Change circle size
const CircleImageWrapper = styled.div`
  width: 500px; // Change from 400px
  height: 500px;
`;

// Change image size
const CircleImage = styled.img`
  width: 150px; // Change from 120px
  height: 150px;
`;
```

### Translation Keys
```javascript
factory.capacity.title
factory.capacity.description
factory.capacity.number
factory.capacity.unit
```

---

## 4. FactorySpecs

### Basic Usage
```tsx
import FactorySpecs from "./components/sections/FactorySpecs";

export function Factory() {
  return <FactorySpecs />;
}
```

### Component Props
None - uses i18n and internal data

### Adding More Feature Cards
```tsx
// In component, modify the features array
const features = [
  {
    icon: "⚙️",
    title: "Công Nghệ Tiên Tiến",
    text: "Máy móc hiện đại, quy trình tự động hóa cao",
  },
  // Add more features
  {
    icon: "🌱",
    title: "Bền vững",
    text: "Cam kết với môi trường",
  },
];
```

### Changing Background Image
```tsx
<BackgroundImage $bgImage="/path/to/new-image.png" />
```

### Styling Customization
```tsx
// Change area number size
const AreaNumber = styled.div`
  font-size: 10rem; // Change from 7rem
`;

// Change feature card style
const FeatureCard = styled.div`
  border-left: 6px solid #4379f2; // Change border width/color
`;
```

### Translation Keys
```javascript
factory.specs.title
factory.specs.description
factory.specs.area
```

---

## 5. FactoryProducts

### Basic Usage
```tsx
import FactoryProducts from "./components/sections/FactoryProducts";

export function Factory() {
  return <FactoryProducts />;
}
```

### Component Props
```tsx
interface FactoryProductsProps {
  productImage?: string;  // Product image path
  productName?: string;   // Product name
}

// Example with props
<FactoryProducts 
  productImage="/assets/images/tuna.png"
  productName="Tuna"
/>
```

### Customizing Product Description
Edit the hardcoded text:

```tsx
<ProductDescription>
  Hải sản của Trinity Vietnam được chế biến từ nguyên liệu tuyển
  chọn cao cấp, qua các bước xử lý khắt khe đảm bảo chất lượng
  tuyệt hảo. Sản phẩm đạt tiêu chuẩn xuất khẩu quốc tế, được
  khách hàng trên thế giới tin tưởng.
</ProductDescription>
```

Or better, add to i18n:

```typescript
// In i18n files
factory.products.description: "Your description"
```

### Changing Button Link
```tsx
<Button href="/products" ...>
  {t("factory.products.viewMore")}
</Button>
```

### Styling Customization
```tsx
// Change button style
const Button = styled.a`
  background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
  padding: 1.5rem 3rem; // Change padding
`;

// Change image size
const ProductImage = styled.img`
  max-width: 500px; // Change from 100%
`;
```

### Translation Keys
```javascript
factory.products.title
factory.products.subtitle
factory.products.viewMore
```

---

## 6. Main Factory Section

### Usage
```tsx
import FactorySection from "./components/sections/Factory";

export function FactoryPage() {
  return <FactorySection />;
}
```

### Component Structure
```tsx
<FactorySection>
  ├── <FactoryBanner />
  ├── Video Section (inline SVG & video)
  ├── <FactoryCertifications />
  ├── <FactoryCapacity />
  ├── <FactorySpecs />
  ├── <ProcessSection />
  ├── <FactoryProducts />
  └── <ColdStorageSection />
</FactorySection>
```

### Modifying Component Order
```tsx
// In Factory/index.tsx, reorder components
<>
  <FactoryBanner />
  <FactoryCertifications /> {/* Move up */}
  <Video />
  {/* ... rest ... */}
</>
```

### Hiding Components
```tsx
// Comment out unwanted sections
<FactorySection>
  <FactoryBanner />
  {/* <FactoryCertifications /> */} {/* Hidden */}
  {/* ... */}
</FactorySection>
```

---

## Complete Example

### Full Page Implementation
```tsx
import React from "react";
import FactorySection from "../components/sections/Factory";

export default function FactoryPage() {
  return (
    <div className="factory-page">
      <FactorySection />
    </div>
  );
}
```

### With Page Wrapper
```tsx
import React from "react";
import FactorySection from "../components/sections/Factory";
import { Footer } from "../components/layout/Footer";

export default function FactoryPage() {
  return (
    <>
      <FactorySection />
      <Footer />
    </>
  );
}
```

### With Custom Styling
```tsx
import styled from "styled-components";
import FactorySection from "../components/sections/Factory";

const PageWrapper = styled.div`
  background: #f5f5f5;
  padding: 2rem 0;
`;

export default function FactoryPage() {
  return (
    <PageWrapper>
      <FactorySection />
    </PageWrapper>
  );
}
```

---

## Customization Examples

### Example 1: Change All Colors
```tsx
// Theme configuration (if using ThemeProvider)
const theme = {
  colors: {
    primary: "#FF6B6B",    // Change primary color
    secondary: "#1C3A47",  // Change secondary
    accent: "#FFD166",     // Change accent
  }
};

// Then use in styled components:
const Title = styled.h3`
  color: ${props => props.theme.colors.secondary};
`;
```

### Example 2: Add New Section
```tsx
// Create new component
const NewSection = styled.section`
  padding: 4rem 2rem;
  background: white;
`;

// In Factory/index.tsx
<FactorySection>
  <FactoryBanner />
  <NewSection>Your content</NewSection>
  {/* ... rest ... */}
</FactorySection>
```

### Example 3: Override Animation Speed
```tsx
// In AOS init
import AOS from "aos";

AOS.init({
  duration: 1000,  // Slower animations
  once: true,
  mirror: false,
  offset: 100,
});
```

### Example 4: Change i18n Language Dynamically
```tsx
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <>
      <button onClick={() => i18n.changeLanguage("vi")}>
        Tiếng Việt
      </button>
      <button onClick={() => i18n.changeLanguage("en")}>
        English
      </button>
    </>
  );
}
```

---

## Props Patterns

### Reusable Component Pattern
```tsx
// Create generic component
interface GenericSectionProps {
  title: string;
  description: string;
  backgroundColor?: string;
  children?: React.ReactNode;
}

const GenericSection: React.FC<GenericSectionProps> = ({
  title,
  description,
  backgroundColor = "white",
  children,
}) => (
  <StyledSection $bgColor={backgroundColor}>
    <h3>{title}</h3>
    <p>{description}</p>
    {children}
  </StyledSection>
);

// Usage
<GenericSection 
  title="My Section"
  description="Description"
  backgroundColor="#f0f0f0"
>
  <p>Content</p>
</GenericSection>
```

---

## Styling Patterns

### Using styled-components Best Practices
```tsx
// Good
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

// Avoid
const container = styled.div`
  margin-top: 100px;
  margin-right: 50px;
  margin-bottom: 100px;
  margin-left: 50px;
  // Use margin: 100px 50px instead
`;
```

### Responsive Styling Pattern
```tsx
// Good - mobile first
const Container = styled.div`
  padding: 1rem;
  font-size: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem;
    font-size: 1.5rem;
  }
`;

// Using clamp() for fluid sizing
const Title = styled.h1`
  font-size: clamp(1.5rem, 5vw, 4rem);
  margin: clamp(1rem, 3vw, 3rem);
`;
```

---

## Common Issues & Solutions

### Issue: Component Not Rendering
```tsx
// Check imports
import FactoryBanner from "./components/sections/FactoryBanner"; // ✅ Correct path
import { FactoryBanner } from "./components/sections/FactoryBanner"; // ❌ Wrong (not named export)
```

### Issue: Styles Not Applied
```tsx
// Ensure styled-components is imported
import styled from "styled-components"; // ✅ Must import

// Clear cache
rm -rf node_modules/.cache
npm start
```

### Issue: Translations Not Working
```tsx
// Ensure i18n is initialized in main app
import i18n from "i18next";
import { useTranslation } from "react-i18next";

// Must call useTranslation in component
const MyComponent = () => {
  const { t } = useTranslation(); // ✅ Required
  return <h1>{t("key")}</h1>;
};
```

### Issue: Animations Not Smooth
```tsx
// Check GPU acceleration
// In DevTools -> Performance -> check for jank

// Optimize animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translate3d(0, 30px, 0); } // Use translate3d
  to { opacity: 1; transform: translate3d(0, 0, 0); }
`;
```

---

## Performance Tips

### Image Optimization
```tsx
// Use optimized images
<img 
  src="/images/large.jpg" 
  alt="description"
  loading="lazy" // Lazy load
  decoding="async" // Async decode
/>

// Or use picture element for responsive images
<picture>
  <source srcSet="/image-small.jpg" media="(max-width: 768px)" />
  <source srcSet="/image-large.jpg" media="(min-width: 769px)" />
  <img src="/image-large.jpg" alt="description" />
</picture>
```

### Animation Performance
```tsx
// Use transform & opacity (GPU accelerated)
const goodAnim = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Avoid animating layout properties
const badAnim = keyframes`
  from { margin-top: 30px; } // ❌ Causes reflow
  to { margin-top: 0; }
`;
```

### Component Performance
```tsx
// Use React.memo for pure components
const PureComponent = React.memo(({ title }) => <h1>{title}</h1>);

// Use useCallback for event handlers
const handleClick = useCallback(() => {
  // ...
}, []);
```

---

## Conclusion

Now you have comprehensive examples for:
- ✅ Using each component
- ✅ Customizing components
- ✅ Adding new sections
- ✅ Modifying styles
- ✅ Handling i18n
- ✅ Fixing common issues
- ✅ Performance optimization

**Happy coding! 🚀**

