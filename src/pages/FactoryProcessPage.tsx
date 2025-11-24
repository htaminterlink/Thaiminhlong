import React from "react";
import FactorySection from "../components/sections/Factory";
// Giả sử đã có ProcessSection, nếu chưa có sẽ tạo tiếp
import ProcessSection from "../components/sections/Process";

const FactoryProcessPage: React.FC = () => {
  return (
    <div className="factory-process-page">
      <FactorySection />
      <ProcessSection />
    </div>
  );
};

export default FactoryProcessPage;
