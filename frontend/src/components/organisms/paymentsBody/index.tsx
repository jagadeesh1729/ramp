import { Box } from "@mui/material";
import React, { useEffect,useState } from "react";
import MuiTextfield from "../../atoms/textfield";
import MoreIcon from "../../../../public/images/more.svg";
import DownloadIcon from "../../../../public/images/download.svg";
import StatusIcon from "../../../../public/images/check.svg";
import BankIcon from "../../../../public/images/bank.svg";
import MuiTypography from "../../atoms/typography";
import Footer from "../../molecules/footer";
import theme from "../../../theme";
import Table from "../dataGrid";
import axios from "axios";
import { TextStack, 
  Buttonsstyle,  
  TopBody, 
  UserData,  
  SearchStack,
  FooterStack, 
  SearchBarStack, 
  ReviewStyles} from "../rampCards/styles";
import { NOT_FOUND, PAYMENTS_TITLE, SEARCH_STYLES } from "../../../utils/constants";
import MuiButton from "../../atoms/button";
import TextWithIcon from "../../molecules/textWithIcon";
import MuiIcons from "../../atoms/icon";

interface RampCardsProps {
  checkbox: boolean;
  autoHeight?: boolean;
}
function getName(params:any) {
  return ( <TextWithIcon text1={params.row.employeeId.name} text2={`$${params.row.amount}`} variant1={"body2"} variant2={"body3"} color={theme.palette.mediumEmphasis.main} icon={<MuiIcons src={BankIcon} alt={"not found"} />} /> )}
function getPaymentStatus(params:any) {
  return ( <TextWithIcon text1={params.row.paymentStatus} text2="Scheduled" variant1={"body2"} variant2={"body3"} color={theme.palette.mediumEmphasis.main} icon={<MuiIcons src={StatusIcon} alt={"not found"} />} /> )}
function getNextStep() {
  return ( <ReviewStyles>
    <MuiButton text="Review" variant="contained" sx={{color:theme.palette.mediumEmphasis.main, background:theme.palette.accent.main,"&:hover": {backgroundColor:theme.palette.accent.main}, borderRadius:'4px'}} />
    <MuiIcons src={MoreIcon} alt={"not found"} />
    </ReviewStyles> )}
const columns1 = [
  { field:"employeeId",headerName:"EMPLOYEE/AMOUNT",renderCell:getName},
  { field:"paymentStatus",headerName:"PAYMENT STATUS",renderCell:getPaymentStatus},
  { field:"paymentDate",headerName:"PAYMENT DATE"},
  { field:"dueDate",headerName:"DUE DATE"},
  { field:"invoiceDate",headerName:"INVOICE DATE"},
  { field:"nextStep",headerName:"NEXT STEP",renderCell:getNextStep},
  ];
const PaymentsBody = ({
  checkbox,
  autoHeight,
}: RampCardsProps) => {
  const [rows1, setRows1] = useState<any[]>([]);
  const [selectedIds, setSelectedIds] = useState<any[]>([]);
useEffect(() => {
  axios.get("https://bc74-ag.fe-assignment.tk/bill/payments/")
    .then(response => {
      const approvedInvoices = response.data.filter((invoice: { status: string; }) => invoice.status === "approved");
      const data = approvedInvoices.sort((row1:{id:number;},row2:{id:number;})=>row2.id-row1.id); 
      setRows1(data);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}, []);
const handleDelete = (selectedData:any) => {
  setSelectedIds(selectedData) }
const paymentButtons = (text:string,startIcon?:React.ReactNode) => <MuiButton text={text} variant="contained" startIcon={startIcon} 
  sx={{ color: theme.palette.mediumEmphasis.main,
    background: theme.palette.accent.main,
    borderRadius: "4px",
    "&:hover": {backgroundColor:theme.palette.accent.main},
    boxShadow: '0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)' }} />
  return (
    <Box sx={{paddingLeft:"40px",paddingRight:"80px",paddingTop:"36px"}}>
      <TopBody>
        <TextStack>
          <MuiTypography text={PAYMENTS_TITLE} variant="h1" sx={{color:theme.palette.highEmphasis.main}} />
        <Buttonsstyle>
          <MuiIcons src={MoreIcon} alt={"not found"} />
          {paymentButtons("New bill")}
        </Buttonsstyle>
        </TextStack>
      </TopBody>
    <UserData>
      <SearchStack>
        <SearchBarStack>
          {SEARCH_STYLES.map((id) => (
            <MuiTextfield
            key={"id"}
            placeholder={id.placeholder}
            sx={id.sx}
            search={true}
            size="small"
            iconStart={<MuiIcons src={id.src} alt={NOT_FOUND.icon} />}/>))}
        </SearchBarStack>
          {paymentButtons("Download",<MuiIcons src={DownloadIcon} alt={"not found"} /> )}     
        </SearchStack>
      <Table columns={columns1}
        rows={rows1}
        checkbox={checkbox}
        autoHeight={autoHeight} 
        setSelectedRows={handleDelete}
        selectedRows={selectedIds} />
    </UserData>
    <FooterStack>
      <Footer count={`${rows1.length} results`} /> 
    </FooterStack>
    </Box>
  );
};
export default PaymentsBody;
