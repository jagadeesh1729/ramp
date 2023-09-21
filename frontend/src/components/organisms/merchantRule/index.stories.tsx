import MerchantRule from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

export default{
  title:"organisms/merchantRule",
  component:MerchantRule
}as ComponentMeta<typeof MerchantRule>

const Template:ComponentStory<typeof MerchantRule> = (args) => <MerchantRule {...args}/>

export const merchantRule = Template.bind({})
merchantRule.args={
  name:"Lyft",
  category:"QuickBooks",
  transactions:35,
}
