import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MuiModal from ".";
import ModalHeader from "../../molecules/modalHeader";
import ModalFooter from "../../molecules/modalFooter";
import RampCategoryBody from "../rampCategoryBody";
export default {
  title: "organisms/modalTemplate",
  component: MuiModal,
} as ComponentMeta<typeof MuiModal>;

const Template: ComponentStory<typeof MuiModal> = (args) => (
  <MuiModal {...args} />
);

export const Modal1 = Template.bind({});
Modal1.args = {
  showModel: true,
  maxWidth: "520px",
  modalHeader: <ModalHeader text={"hello"} />,
  modalFooter: <ModalFooter button1Text={"Cancel"} button2Text={"Create"} button2Disable={true} />,
  modalBody: <RampCategoryBody />,
};
