import React from "react";

import MainLayout from "../components/mainLayout/mainLayout";
import SliderTravel from "../components/slideTravel/slideTravel";
import { COLOR_BODY } from "../components/const/conts";

const Index = () => {
  return (
    <MainLayout keywords="main page">
      <SliderTravel
        title="Travel In Japan: The True Experience"
        text="When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics."
        bg_color={COLOR_BODY}
      />
    </MainLayout>
  );
};

export default Index;
