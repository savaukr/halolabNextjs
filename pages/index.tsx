import React from "react";

import MainLayout from "../components/mainLayout/mainLayout";
import SliderTravel from "../components/sliderTravel/sliderTravel";
import Stories from "../components/stories/stories";

const Index = () => {
  return (
    <MainLayout keywords="main page">
      <Stories />
      <SliderTravel />
    </MainLayout>
  );
};

export default Index;
