import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Table from ".";
import TextWithIcon from "../../molecules/textWithIcon";
import MuiIcons from '../../atoms/icon';
import EyeIcon from "../../../../public/images/eye.svg";
import DropDown from "../dropdown";
import MuiButton from "../../atoms/button";
import theme from "../../../theme";
import { MENU_ITEMS } from "../../../utils/constants";

export default{
    title:"organisms/table",
    component:Table
} as ComponentMeta<typeof Table>

const Template:ComponentStory<typeof Table>= (args) => <Table {...args} />
export const table = Template.bind({})
const columns2= [
  {field:"Transactiona",headerName:"TRANSACTIONS",sortable:false,flex:1,renderCell:() => {
    return <TextWithIcon text1={"H&M"} text2={"casio"} variant1={"body2"} variant2={"body3"} icon={<MuiIcons src={EyeIcon} alt={"eyeIcon"} />} />;}, width:150},
  {field:"Amount",headerName:"AMOUNT",sortable:false,flex:1,renderCell: (params:any) => {
    return ( <div style={{padding:'0px 110px'}}>{params.value}</div> );},},
  {field:"Date",headerName:"DATE",sortable:false,flex:1},
  {field:"User",headerName:"USER",sortable:false,flex:1,renderCell:() => {
    return <TextWithIcon text1={"Hellena John"} text2={"(virtual 7007)"} variant1={"body2"} variant2={"body3"} />;},},
  {field:"Quickbookscategory",headerName:"QUICKBOOKSCATEGEORY",flex:1,renderCell:() => {
    return <DropDown label={"choose one"} menuItems={MENU_ITEMS} width={"134px"} />;},},
  {field:"Receipt",headerName:"RECEIPT",sortable:false,flex:1},
  {field:"Memo",headerName:"MEMO",sortable:false,flex:1},
  {field:"Sync",headerName:"SYNC",sortable:false,flex:1,renderCell:() => {
    return <MuiButton text="Make ready" variant="contained" sx={{color:theme.palette.mediumEmphasis.main, background:theme.palette.accent.main, borderRadius:'4px'}} />;},}
];
const rows1= [{
  id: 1,
  Transactiona: "",
  Amount: "$42,000",
  Date: "Apr 14, 2023",
  User: "",
  Quickbookscategory: "",
  Receipt: '#200257',
  Memo: '21-00006',
  Sync: ''
},{
  id: 2,
  Transactiona: "",
  Amount: "$42,000",
  Date: "Apr 14, 2023",
  User: "",
  Quickbookscategory: "",
  Receipt: '#200257',
  Memo: '21-00006',
  Sync: ''
}]

table.args={
    autoHeight:true,
    checkbox:true,
    columns:columns2,
    rows:rows1
    }