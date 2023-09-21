import { ComponentMeta, ComponentStory } from "@storybook/react"
import DropDown from ".";
import React from 'react';
import { MENU_ITEMS } from "../../../utils/constants";

export default {
    title:'organisms/Dropdown',
    component:DropDown,
}as ComponentMeta<typeof DropDown>
const Template:ComponentStory<typeof DropDown> = (args) => <DropDown {...args}/>

export const dropdown = Template.bind({});


dropdown.args = {
    label:"Choose One",
    menuItems:MENU_ITEMS,
    width:'134px',
    isPopover:false
    
}
