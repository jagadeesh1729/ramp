import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MuiBanner from ".";
import MuiTypography from "../../atoms/typography";
import theme from "../../../theme";
export default {
  title: "molecules/Banner",
  component: MuiBanner,
} as ComponentMeta<typeof MuiBanner>;

const Template: ComponentStory<typeof MuiBanner> = (args) => (
  <MuiBanner {...args} />
);

export const Banner = Template.bind({});
Banner.args = {
  isClose:true,
  buttonText: (
    <MuiTypography
      text="Create rule"
      variant="body2"
      sx={{ color: theme.palette.mediumEmphasis.main }}
    />
  ),
  description: (
    <MuiTypography
      sx={{ color: theme.palette.lowEmphasis.main }}
      text="Save “Travel as the default Quickbooks category for all the future and unsynced transactions from “Lyft”."
    />
  ),
  title: (
    <MuiTypography
      sx={{ color: theme.palette.highEmphasis.main}}
      text="Save time with a merchant Rule"
      variant="body2"
    />
  ),
  open:true
};

export const BannerWithoutClose = Template.bind({});
BannerWithoutClose.args = {
  isClose:false,
  open:true,
  buttonText: (
    <MuiTypography
      text="Skip Prefilling"
      variant="body2"
      sx={{ color: theme.palette.mediumEmphasis.main }}
    />
  ),
  description: (
    <MuiTypography
      sx={{ color: theme.palette.lowEmphasis.main }}
      text="Upload an invoice on the right and Ramp will read the invoice and prefill the bill for you. Or alternatively, do it the old fashioned way :"
    />
  ),
  title: (
    <MuiTypography
      sx={{ color: theme.palette.highEmphasis.main }}
      text="Save time with uploading invoice"
      variant="body2"
    />
  ),
  
};
