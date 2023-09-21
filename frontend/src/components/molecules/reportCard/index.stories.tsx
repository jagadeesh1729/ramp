import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import theme from "../../../theme/index";
import MuiTypography from "../../atoms/typography";
import MuiReportCard from ".";
import TextWithImage from "../textWithImage";
import Aws from "../../../../public/images/aws.svg";
export default {
  title: "molecules/ReportCard",
  component: MuiReportCard,
} as ComponentMeta<typeof MuiReportCard>;

const Template: ComponentStory<typeof MuiReportCard> = (args) => (
  <MuiReportCard {...args} />
);

export const ReportCard = Template.bind({});
ReportCard.args = {
  buttonText: "Go to partner reward",
  description: "You're paying for Amazon Web Services - leverage our partnership",
  title: "Partner reward found",
  textWithImage: (
    <TextWithImage
      img={Aws}
      text={"Potential Savings"}
      savings={"$ 5,000.00"}
    />
  ),
};
