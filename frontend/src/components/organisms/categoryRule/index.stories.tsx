import MerchantRule from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CategoryRule from ".";

export default {
  title: "organisms/CategoryRule",
  component: CategoryRule,
} as ComponentMeta<typeof CategoryRule>;

const Template: ComponentStory<typeof CategoryRule> = (args) => (
  <CategoryRule {...args} />
);
export const categoryRule = Template.bind({});
categoryRule.args = {
  name: "Lyft",
};
