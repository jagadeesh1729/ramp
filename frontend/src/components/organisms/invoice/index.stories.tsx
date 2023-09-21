import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Invoice from ".";
import add from "../../../../public/images/add.svg"

export default {
    title: "organisms/Invoice",
    component:Invoice,
}as ComponentMeta<typeof Invoice>
const Template:ComponentStory<typeof Invoice> = (args) => <Invoice {...args} />

export const invoice = Template.bind({});
invoice.args = {
    icon:add,
    text:"Drop your invoice or click here to upload"
};
