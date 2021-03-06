import React from "react";

import MainLayout from "../components/mainLayout/mainLayout";
import GetStarted from "../components/getStarted/getStarted";
import OurTopTeam from "../components/ourTopTeam/ourTopTeam";
import Ready from "../components/ready/ready";
import SliderSaveNature from "../components/sliderSaveNature/sliderSaveNature";
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
      <GetStarted />
      <Ready />
      <SliderSaveNature />
    </MainLayout>
  );
};

export default Index;
