import React from "react";
import MuiImage from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Pdf from "../../../../public/images/pdf.svg"

export default{
    title:"atoms/Image",
    component:MuiImage
}as ComponentMeta<typeof MuiImage>

const Template:ComponentStory<typeof MuiImage> = (args) => <MuiImage {...args} />

export const Image=Template.bind({})

Image.args={
    src:Pdf,
    alt:"not found image",
    width:"100px",
    height:"100px"
}