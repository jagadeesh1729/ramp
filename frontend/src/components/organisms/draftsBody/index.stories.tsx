import { ComponentMeta, ComponentStory } from "@storybook/react"
import DraftsBody from ".";
import React from 'react';
import { BrowserRouter } from "react-router-dom";
export default {
    title:'organisms/draftsBody',
    component:DraftsBody,
}as ComponentMeta<typeof DraftsBody>
const Template:ComponentStory<typeof DraftsBody> = (args) => <BrowserRouter><DraftsBody {...args}/></BrowserRouter>
export const draftsbody = Template.bind({});
draftsbody.args = {
    autoHeight: true,
    checkbox: true,
}
