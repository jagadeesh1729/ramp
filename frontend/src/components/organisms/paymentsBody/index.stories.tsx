import { ComponentMeta, ComponentStory } from "@storybook/react"
import PaymentsBody from ".";
import React from 'react';

export default {
    title:'organisms/paymentsBody',
    component:PaymentsBody,
}as ComponentMeta<typeof PaymentsBody>
const Template:ComponentStory<typeof PaymentsBody> = (args) => <PaymentsBody {...args}/>

export const paymentsbody = Template.bind({});

paymentsbody.args = {
    autoHeight: true,
    checkbox: true,
}
