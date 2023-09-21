import { ComponentMeta, ComponentStory } from "@storybook/react"
import MuiTextfield from ".";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import React from 'react';
import Find from "../../../../public/images/find.svg"
import MuiIcons from "../icon";
import { NOT_FOUND } from "../../../utils/constants";

export default {
    title:'atoms/Textfield',
    component:MuiTextfield,
}as ComponentMeta<typeof MuiTextfield>
const Template:ComponentStory<typeof MuiTextfield> = (args) => <MuiTextfield {...args}/>

export const text = Template.bind({});
export const icon_text_icon = Template.bind({});
export const icon_text_start = Template.bind({});

text.args = {
    placeholder:"Enter mail",
    name:'mailid',
    sx:{width:'456px'},
}

icon_text_icon.args = {
    placeholder:"Enter Password",
    iconEnd:<RemoveRedEyeOutlinedIcon/>,
    name:'password',
    type:'password',
    sx:{width:"456px"}
}
icon_text_start.args = {
    placeholder:"Enter Password",
    iconStart:<MuiIcons src={Find} alt={NOT_FOUND.icon} />,
    size:'small',
    sx:{width:'456px', height:'28px'},
    search:true
}
