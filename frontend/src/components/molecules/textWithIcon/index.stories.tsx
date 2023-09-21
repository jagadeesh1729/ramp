import TextWithIcon from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MuiIcons from '../../atoms/icon';
import EyeIcon from "../../../../public/images/eye.svg";
import theme from "../../../theme/index";

export default{
    title:"molecules/TextWithIcon",
    component:TextWithIcon 
}as ComponentMeta<typeof TextWithIcon >

const Template:ComponentStory<typeof TextWithIcon > = (args) => <TextWithIcon  {...args}/>

export const textwithicon = Template.bind({})
textwithicon.args={
   text1:'H&M',
   variant1:'body2',
   text2:'casio',
   variant2:'body3',
   color:`${theme.palette.mediumEmphasis}`,
   icon:<MuiIcons src={EyeIcon} alt={"eyeIcon"} />
}