import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Footer from ".";
export default {
  title: "molecules/footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;
const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args}/>;
export const footer = Template.bind({});
footer.args={
    count:'919 results'
}