import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SearchBar from ".";

export default {
    title: "organisms/SearchBar",
    component: SearchBar,
  } as ComponentMeta<typeof SearchBar>;
  
  const Template: ComponentStory<typeof SearchBar> = (args) => (
    <SearchBar {...args} />
  );

export const SearchBarTemplate = Template.bind({});

const rows1 = [
  {
    id: 1,
    TRANSACTIONS: "H&M",
    AMOUNT: "$42,000",
    DATE: "Apr 14, 2023",
    USER: "",
    QUICKBOOKSCATEGORY: "",
    RECEIPT: "#200257",
    MEMO: "21-00006",
    SYNC: "",
  },
  {
    id: 2,
    TRANSACTIONS: "lyft",
    AMOUNT: "$42,000",
    DATE: "Apr 14, 2023",
    USER: "",
    QUICKBOOKSCATEGORY: "",
    RECEIPT: "#200257",
    MEMO: "21-00006",
    SYNC: "",
  },
  {
    id: 3,
    TRANSACTIONS: "john",
    AMOUNT: "$42,000",
    DATE: "Apr 14, 2023",
    USER: "",
    QUICKBOOKSCATEGORY: "",
    RECEIPT: "#200257",
    MEMO: "21-00006",
    SYNC: "",
  },
  {
    id: 4,
    TRANSACTIONS: "lyft",
    AMOUNT: "$42,000",
    DATE: "Apr 14, 2023",
    USER: "",
    QUICKBOOKSCATEGORY: "",
    RECEIPT: "#200257",
    MEMO: "21-00006",
    SYNC: "",
  },
];

SearchBarTemplate.args = {
  data: rows1,
  rows1: rows1,
  setChipData: () => {return},
  setChip: () => {return},
  setRows1: () => {return},
  isChip: true,
};
