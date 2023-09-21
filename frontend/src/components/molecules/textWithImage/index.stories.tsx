import TextWithImage from "."
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import aws from "../../../../public/images/aws.svg"

export default{
    title:"molecules/TextWithImage",
    component:TextWithImage
}as ComponentMeta<typeof TextWithImage>

const Template:ComponentStory<typeof TextWithImage> = (args) => <TextWithImage {...args}/>

export const textWithImage = Template.bind({})
textWithImage.args={
    img:aws,
    savings:"$ 5,000.00",
    text:"Potential Savings"
}