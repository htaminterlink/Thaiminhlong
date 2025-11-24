import React from "react";
import FactorySection from "../components/sections/Factory";
import { Certifications } from "../components/sections/Certifications";

const FactoryCertificationsPage: React.FC = () => {
  return (
    <div className="factory-certifications-page">
      <FactorySection />
      <Certifications />
    </div>
  );
};

export default FactoryCertificationsPage;
