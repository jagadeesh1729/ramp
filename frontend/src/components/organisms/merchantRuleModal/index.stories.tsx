import MerchantRuleModal from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

export default{
  title:"organisms/merchantRuleModal",
  component:MerchantRuleModal
}as ComponentMeta<typeof MerchantRuleModal>

const Template:ComponentStory<typeof MerchantRuleModal> = (args) => <MerchantRuleModal {...args}/>

export const MerchantRuleModalTemplate = Template.bind({})
MerchantRuleModalTemplate.args={
  showModal:true,
}
