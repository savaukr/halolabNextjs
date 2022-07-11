import React from "react";

import MainLayout from "../components/mainLayout/mainLayout";
import OurTopTeam from "../components/ourTopTeam/ourTopTeam";
import SliderTravel from "../components/sliderTravel/sliderTravel";
import Scale from "../components/scale/scale";
import Stories from "../components/stories/stories";

const Index = () => {
  return (
    <MainLayout keywords="main page">
      <Stories />
      <SliderTravel />
      <OurTopTeam />
      <Scale />
    </MainLayout>
  );
};

export default Index;
