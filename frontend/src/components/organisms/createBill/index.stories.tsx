
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CreateBill from ".";

export default{
  title:"organisms/CreateBill",
  component:CreateBill
}as ComponentMeta<typeof CreateBill>

const Template:ComponentStory<typeof CreateBill> = (args) => <CreateBill {...args}/>

export const CreateBillTemplate = Template.bind({})
CreateBillTemplate.args={
  amount:2864.50,
  name:"Julie Mendez",
  paymentMethod:"ACH (Direct deposit)",
  scheduledDate:"24 August 2023",
  estimatedArrival:"August 31 2022",
  sendTo:"Gold Mining Outfitters (8532)",
  addedBy:"James Smith",
  withdrawFrom:"Manual Account (1873)",
  savingAccount:"477,776,213.090",
}
