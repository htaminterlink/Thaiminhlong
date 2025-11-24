import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { store } from "./store/store";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { ScrollToTopOnRouteChange } from "./components/common/ScrollToTopOnRouteChange";
import { ScrollProgress } from "./components/common/ScrollProgress";
import { SocialSidebar } from "./components/common/SocialSidebar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import ProductsPage from "./pages/Products";
import ShrimpPage from "./pages/Shrimp";
import FishPage from "./pages/Fish";
import { ContactPage } from "./pages/Contact";
import FactoryPage from "./pages/Factory";
import FactoryProcessPage from "./pages/FactoryProcessPage";
import ExtensiveFarmPage from "./pages/farm/extensive";
import IntensiveFarmPage from "./pages/farm/intensive";
import NewsPage from "./pages/News";
import "./i18n/config";
import "./styles/style.scss";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <ScrollToTopOnRouteChange />
          <ScrollProgress />
          <Header />
          <SocialSidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/seafood/shrimp" element={<ShrimpPage />} />
            <Route path="/products/seafood/fish" element={<FishPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/factory" element={<FactoryPage />} />
            <Route path="/factory-process" element={<FactoryProcessPage />} />
            <Route path="/farm/extensive" element={<ExtensiveFarmPage />} />
            <Route path="/farm/intensive" element={<IntensiveFarmPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
