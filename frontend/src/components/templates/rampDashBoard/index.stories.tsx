import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RampDashBoardTemplate from ".";
import RampCards from "../../organisms/rampCards";
import { ReportCard } from "../../molecules/reportCard/index.stories";
import MuiTypography from "../../atoms/typography";
import theme from "../../../theme/index";
import TextWithImage from "../../molecules/textWithImage";
import Aws from "../../../../public/images/aws.svg";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "templates/RampDashBoardTemplate",
  component: RampDashBoardTemplate,
} as ComponentMeta<typeof RampDashBoardTemplate>;
const Template: ComponentStory<typeof RampDashBoardTemplate> = (args) => (
  <BrowserRouter><RampDashBoardTemplate {...args} /></BrowserRouter>
);

export const RampDashBoard = Template.bind({});
RampDashBoard.args = {
  body: (
    <ReportCard
      title={
        <MuiTypography
          sx={{ color: theme.palette.highEmphasis.main }}
          text="Partner reward found"
          variant="subtitle2"
        />
      }
      description={
        <MuiTypography
          sx={{ color: theme.palette.mediumEmphasis.main }}
          text="You're paying for Amazon Web Services - leverage our partnership"
          variant="subtitle3"
        />
      }
      buttonText={
        <MuiTypography
          text="Go to partner reward"
          variant="body2"
          sx={{ color: theme.palette.primary[500], marginRight: "auto" }}
        />
      }
      textWithImage={
        <TextWithImage
          img={Aws}
          text={"Potential Savings"}
          savings={"$ 5,000.00"}
        />
      }
    />
  ),
};
