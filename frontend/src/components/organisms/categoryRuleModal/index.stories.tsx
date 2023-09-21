import CategoryRuleModal from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

export default {
  title: "organisms/CategoryRuleModal",
  component: CategoryRuleModal,
} as ComponentMeta<typeof CategoryRuleModal>;

const Template: ComponentStory<typeof CategoryRuleModal> = (args) => (
  <CategoryRuleModal {...args} />
);

export const CategoryRuleModalTemplate = Template.bind({});
CategoryRuleModalTemplate.args = {
  showModal: true,
  setShowModal: (value) => console.log(`setShowModal: ${value}`),
};
