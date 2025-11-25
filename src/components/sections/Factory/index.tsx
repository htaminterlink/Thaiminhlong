import React from "react";
import FactoryBanner from "../FactoryBanner";
import FactoryGallery from "../FactoryGallery";
import FactoryCertifications from "../FactoryCertifications";
import FactorySpecs from "../FactorySpecs";
import ProcessSection from "../Process";
import FactoryProducts from "../FactoryProducts";
import ColdStorageSection from "../ColdStorage";

const FactorySection: React.FC = () => {
  return (
    <>
      {/* Banner Section */}
      <FactoryBanner />

      {/* Factory Gallery Section */}
      <FactoryGallery />

      {/* Cold Storage Section */}
      <ColdStorageSection />

      {/* Certifications & Production Capacity Section (Combined) */}
      <FactoryCertifications />

      {/* Factory Specs Section (10,000m²) */}
      <FactorySpecs />

      {/* Process Section */}
      <ProcessSection />

      {/* Products Section */}
      <FactoryProducts />
    </>
  );
};

export default FactorySection;
