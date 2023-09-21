import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import BillGenerationTemplate from ".";
import Invoice from "../../organisms/invoice";
import Add from "../../../../public/images/add.svg"
import { INVOICE_TEXT } from "../../../utils/constants";
import NewBillBody from "../../organisms/newBillBody";
export default {
  title: "templates/billGeneration",
  component: BillGenerationTemplate,
} as ComponentMeta<typeof BillGenerationTemplate>;

const Template: ComponentStory<typeof BillGenerationTemplate> = (args) => (
  <BillGenerationTemplate {...args} />
);

export const BillGenerationTemplateDemo= Template.bind({});
BillGenerationTemplateDemo.args={
    leftSide:<NewBillBody billData={[]}/>,
    rightSide:<Invoice icon={Add} text={INVOICE_TEXT}/>
}
