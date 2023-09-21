import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ReportingBody from ".";


export default {
    title: "organisms/ReportingBody",
    component:ReportingBody,
}as ComponentMeta<typeof ReportingBody>
const Template:ComponentStory<typeof ReportingBody> = () => <ReportingBody />

export const reportingBody = Template.bind({});

