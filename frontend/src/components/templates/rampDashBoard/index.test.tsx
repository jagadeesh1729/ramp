import { render } from "@testing-library/react";
import React from "react";
import RampDashBoardTemplate from ".";
import { Banner } from "../../molecules/banner/index.stories";
import { CONTINUE, SIGNUP, STAY_SIGNED } from "../../../utils/constants";
import { BrowserRouter } from "react-router-dom";
test("render template or not ", () => {
  const element = render(
    <BrowserRouter><RampDashBoardTemplate
      body={
        <Banner
          title={SIGNUP}
          description={STAY_SIGNED}
          buttonText={CONTINUE} open={true}     
             />
      }
    /></BrowserRouter>
  );
  expect(element).toBeDefined();
});
