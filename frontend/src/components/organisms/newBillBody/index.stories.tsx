import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import NewBillBody from ".";


export default {
    title: "organisms/NewBillBody",
    component:NewBillBody,
}as ComponentMeta<typeof NewBillBody>
const Template:ComponentStory<typeof NewBillBody> = (args) => <NewBillBody {...args} />

export const newBillBody = Template.bind({});
newBillBody.args = {
    uploaded:false,
    billData:[]
};
