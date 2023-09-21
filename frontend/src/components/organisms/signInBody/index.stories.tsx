import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MuiSignInSignUpTemplate from ".";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "organisms/SignInSign",
  component: MuiSignInSignUpTemplate,
} as ComponentMeta<typeof MuiSignInSignUpTemplate>;
const Template: ComponentStory<typeof MuiSignInSignUpTemplate> = (args) => (
 <BrowserRouter><MuiSignInSignUpTemplate {...args} /></BrowserRouter> 
);

export const SignInTemplate = Template.bind({});
SignInTemplate.args = {
  signIn: true,
};
export const SignUpTemplate = Template.bind({});
SignUpTemplate.args = {
  signIn: false,
};
