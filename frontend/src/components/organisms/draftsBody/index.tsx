import { Box } from "@mui/material";
import React, { useEffect,useState } from "react";
import MuiTextfield from "../../atoms/textfield";
import MoreIcon from "../../../../public/images/more.svg";
import DownloadIcon from "../../../../public/images/download.svg";
import InvoiceIcon from "../../../../public/images/invoice.svg";
import MuiTypography from "../../atoms/typography";
import CheckIcon from "../../../../public/images/checkIcon.svg";
import CloseIcon from "../../../../public/images/rejectIcon.svg";
import Footer from "../../molecules/footer";
import theme from "../../../theme";
import { GridInputRowSelectionModel } from "@mui/x-data-grid";
import Table from "../dataGrid";
import axios from "axios";
import { TextStack, 
  Buttonsstyle,  
  TopBody, 
  UserData, 
  BarStack, 
  SearchStack,
  FooterStack, 
  SearchBarStack, 
  ReviewStyles } from "../rampCards/styles";
import MuiButton from "../../atoms/button";
import TextWithIcon from "../../molecules/textWithIcon";
import MuiIcons from "../../atoms/icon";
import { DRAFTS_TITLE, ICON_NOT_FOUND, NOT_FOUND, SEARCH_STYLES } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";

interface RampCardsProps {
  checkbox: boolean;
  autoHeight?: boolean;
  selectedRows?: GridInputRowSelectionModel;
}
const DraftsBody = ({
  checkbox,
  autoHeight,
}: RampCardsProps) => {
  const [deleteButton, setDeleteButton] = useState<boolean>(false);
  const [rows1, setRows1] = useState<any[]>([]);
  const [selectedIds, setSelectedIds] = useState<any[]>([]);
  const navigate=useNavigate()
  function getName(params:any) {
    return ( <TextWithIcon text1={params.row.employeeId.name} text2={params.row.employeeId.dob} variant1={"body2"} variant2={"body3"} color={theme.palette.mediumEmphasis.main} /> )}
  function amountStyle(params:any) {
    return ( <div style={{padding:'0px 50px'}}>${params.value}</div> )}
  function getInvoice(params:any) {
    return ( <MuiIcons src={InvoiceIcon} alt={params.row.invoice} /> )}
  function getNextStep(params:any) {
    return ( <ReviewStyles>
        <MuiButton text="Review" variant="contained" sx={{color:theme.palette.mediumEmphasis.main, background:theme.palette.accent.main, "&:hover": {backgroundColor:theme.palette.accent.main}, borderRadius:'4px'}} />
        <MuiIcons src={MoreIcon} alt={"not found"} />
        </ReviewStyles> )}
  const columns1 = [
    { field:"employeeId",headerName:"EMPLOYEES",renderCell:getName},
    { field:"amount",headerName:"AMOUNT",renderCell:amountStyle},
    { field:"dueDate",headerName:"DUE DATE"},
    { field:"invoiceDate",headerName:"INVOICE DATE"},
    { field:"invoiceNo",headerName:"INVOICE NQ"},
    { field:"invoice",headerName:"INVOICE", renderCell:getInvoice},
    { field:"accountNo",headerName:"ACCOUNT NQ"},
    { field:"nextStep",headerName:"NEXT STEP",renderCell:getNextStep},
    ];
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get("https://bc74-ag.fe-assignment.tk/bill/payments");
      const approvedInvoices = response.data.filter((invoice: { status: string; }) => invoice.status !== "approved");
      const data = approvedInvoices.sort((row1:{id:number;},row2:{id:number;})=>row2.id-row1.id); 
      setRows1(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
  const intervalId = setInterval(fetchData, 1000); 
  return () => clearInterval(intervalId);
}, []);
  const handleDelete = (selectedData:any) => {
    setSelectedIds(selectedData)
  }
  useEffect(()=>{
    if(selectedIds.length!==0){
      setDeleteButton(true) 
    }
    else{
      setDeleteButton(false) 
    }
  },[selectedIds.length!==0])
  const approve = async () => {
    const updatedPayment = {
      status: "approved",
    };
    const patchRequests = selectedIds.map(id =>
      axios.patch(`https://bc74-ag.fe-assignment.tk/bill/payments/${id}`, updatedPayment)
    );
  };
  const reject = () => {
    const rejectedRow = selectedIds.map(id =>
    axios.delete(`https://bc74-ag.fe-assignment.tk/bill/payments/${id}`) );
    setSelectedIds([]);
    const updateData = rows1.filter(row => !selectedIds.includes(row.id));
    setRows1(updateData); 
  };
  const navigateClick=()=>{
    navigate("/billgenerate")
  }
  const buttonStyles = (text:string,startIcon?:React.ReactNode,onClick?:(()=>void)) => <MuiButton text={text} variant="contained" startIcon={startIcon} onClick={onClick} 
  sx={{
    color: theme.palette.mediumEmphasis.main,
    background: theme.palette.accent.main,
    borderRadius: "4px",
    "&:hover": {backgroundColor:theme.palette.accent.main},
    boxShadow: '0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)' }} />
  const textButton = (text: string,color?:string,startIcon?:React.ReactNode,onClick?:(() => void)) => (
  <MuiButton text={text} variant="text" startIcon={startIcon} sx={{ color,  "&:hover": {backgroundColor:theme.palette.accent.main}, }} onClick={onClick} /> );
  return (
    <Box sx={{paddingLeft:"40px",paddingRight:"80px",paddingTop:"36px"}}>
      <TopBody>
        <TextStack>
          <MuiTypography text={DRAFTS_TITLE} variant="h1" sx={{color:theme.palette.highEmphasis.main}} />
          <Buttonsstyle>
            {deleteButton && textButton("Reject", theme.palette.lowEmphasis.main)}
            {deleteButton && textButton("Approve", theme.palette.primary[500])}
            <MuiIcons src={MoreIcon} alt={"not found"} />
            {buttonStyles("New bill",'',navigateClick)}
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
        <Box sx={{display:'flex', gap:'36px'}}>
        <BarStack>
          {deleteButton && textButton("Approve", theme.palette.primary[500], <MuiIcons src={CheckIcon} alt={ICON_NOT_FOUND} />,approve)}
          {deleteButton && textButton("Reject", theme.palette.lowEmphasis.main, <MuiIcons src={CloseIcon} alt={ICON_NOT_FOUND}/>,reject)}
        </BarStack>
        {buttonStyles("Download",<MuiIcons src={DownloadIcon} alt={"not found"} /> )}
        </Box>
      </SearchStack>
      <Table
        columns={columns1}
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

export default DraftsBody;