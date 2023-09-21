import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SigninTemplate from ".";
import MuiSignInSignUpTemplate from "../../organisms/signInBody";
import { BrowserRouter } from "react-router-dom";


export default {
    title: "templates/SigninTemplate",
    component:SigninTemplate,
}as ComponentMeta<typeof SigninTemplate>
const Template:ComponentStory<typeof SigninTemplate> = (args) => <BrowserRouter><SigninTemplate {...args} /></BrowserRouter>

export const signinTemplate = Template.bind({});
signinTemplate.args = {
    body:<MuiSignInSignUpTemplate signIn={true} sx={{marginTop:"100px"}}/>
};
