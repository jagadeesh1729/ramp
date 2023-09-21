import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TextWithIcon from "../../molecules/textWithIcon";
import DropDown from "../dropdown";
import MuiButton from "../../atoms/button";
import theme from "../../../theme";
import RampCards from ".";
import { MENU_ITEMS } from "../../../utils/constants";

export default {
  title: "organisms/rampCards",
  component: RampCards,
} as ComponentMeta<typeof RampCards>;

const Template: ComponentStory<typeof RampCards> = (args) => (
  <RampCards {...args} />
);
export const rampCardsTemplate = Template.bind({});
const columns2 = [
  {
    field: "TRANSACTIONS",
    headerName: "Transactions",
    sortable: false,
    flex: 1,
  },
  {
    field: "AMOUNT",
    headerName: "Amount",
    sortable: false,
    flex: 1,
    renderCell: (params: any) => {
      return <div style={{ padding: "0px 110px" }}>{params.value}</div>;
    },
  },
  { field: "DATE", headerName: "Date", sortable: false, flex: 1 },
  {
    field: "USER",
    headerName: "USER",
    sortable: false,
    flex: 1,
    renderCell: () => {
      return (
        <TextWithIcon
          text1={"Hellena John"}
          text2={"(virtual 7007)"}
          variant1={"body2"}
          variant2={"body3"}
        />
      );
    },
  },
  {
    field: "QUICKBOOKSCATEGEORY",
    headerName: "QuickbooksCategeory",
    flex: 1,
    renderCell: () => {
      return (
        <DropDown
          label={"choose one"}
          menuItems={MENU_ITEMS}
          width={"134px"}
        />
      );
    },
  },
  { field: "RECEIPT", headerName: "Receipt", sortable: false, flex: 1 },
  { field: "MEMO", headerName: "Memo", sortable: false, flex: 1 },
  {
    field: "SYNC",
    headerName: "Sync",
    sortable: false,
    flex: 1,
    renderCell: () => {
      return (
        <MuiButton
          text="Make ready"
          variant="contained"
          sx={{
            color: theme.palette.mediumEmphasis.main,
            background: theme.palette.accent.main,
            "&:hover": {backgroundColor:theme.palette.accent.main},
            borderRadius: "4px",
          }}
        />
      );
    },
  },
];
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

rampCardsTemplate.args = {
  autoHeight: true,
  checkbox: true,
  columns: columns2,
  rows: rows1,
};
