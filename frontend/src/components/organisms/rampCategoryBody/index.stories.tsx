import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RampCategoryBody from ".";


export default {
    title: "organisms/RampCategoryBody",
    component:RampCategoryBody
}as ComponentMeta<typeof RampCategoryBody>
const Template:ComponentStory<typeof RampCategoryBody> = (args) => <RampCategoryBody {...args} />

export const rampCategoryBody = Template.bind({});

