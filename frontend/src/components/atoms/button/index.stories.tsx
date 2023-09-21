import { ComponentMeta, ComponentStory } from "@storybook/react";
import MuiButton from "./index"
import theme from "../../../theme/index"
import React from "react";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Trash from "../../../../public/images/trash.svg"
import MuiIcons from "../icon";
import MuiTypography from "../typography";
import { CONTINUE } from "../../../utils/constants";
export default {
  title: "atoms/Button",
  component: MuiButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
  parameters: {
    actions: {
      handles: ["mouseover", "click .btn"],
    },
  },
} as ComponentMeta<typeof MuiButton>;

const Template: ComponentStory<typeof MuiButton> = (args) => (
  <MuiButton {...args} />
);

export const DeleteOutlined = Template.bind({});
DeleteOutlined.args = {
  variant: "outlined",
  text: <MuiTypography text="Delete" sx={{color:theme.palette.lowEmphasis.main}} />,
  disabled:false,
  startIcon:<MuiIcons alt="not found" src={Trash}/>

};
export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  text: <MuiTypography text={CONTINUE} sx={{color:theme.palette.structural.main}}/>,
  sx:{backgroundColor:theme.palette.primary[500],padding:"5px 138px"},
  disabled:true,
};
export const Text = Template.bind({});
Text.args = {
  variant: "text",
  text: "Card Request"
};
