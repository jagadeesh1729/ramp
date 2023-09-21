import TextFieldWithLabel from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MuiIcons from '../../atoms/icon';
import CloseIcon from '../../../../public/images/close.svg'

export default{
    title:"molecules/TextFieldWithLabel",
    component:TextFieldWithLabel
}as ComponentMeta<typeof TextFieldWithLabel>

const Template:ComponentStory<typeof TextFieldWithLabel> = (args) => <TextFieldWithLabel {...args}/>

export const textfielswithlabel = Template.bind({})
textfielswithlabel.args={
    label:'Ramp category',
    placeholder:'Enter Ramp category',
    icon:<MuiIcons src={CloseIcon } alt={"close"} />,
     sx:{width:"456px"}
}