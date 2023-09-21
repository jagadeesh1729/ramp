import React, { useState } from "react";
import BillGenerationTemplate from "../../components/templates/billGeneration";
import Invoice from "../../components/organisms/invoice";
import add from "../../../public/images/add.svg";
import glymph from "../../../public/images/glymph.svg";
import divider from "../../../public/images/divider.svg";
import NewBillBody from "../../components/organisms/newBillBody";
import { Box } from "@mui/material";
import Banner from "../../components/molecules/banner";
import MuiTypography from "../../components/atoms/typography";
import theme from "../../theme";
import CreateBill from "../../components/organisms/createBill";
import MuiIcons from "../../components/atoms/icon";
import {
  CREATE_BILL,
  GET_STARTED,
  INVOICE_MSG,
  PASSWORD,
  SAVE_TIME,
  SKIP,
  UPLOAD_INVOICE,
} from "../../utils/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BillGeneration = () => {
  const [uploaded, setUploaded] = useState(false);
  const [body, setBody] = useState(true);
  const [prefilling, setPrefilling] = useState(false);
  const [invoiceData, setInvoiceData] = useState<string[]>([]);
  const navigate = useNavigate();
  const bill = {
    amount: parseFloat(invoiceData[5]?.replace("$", "")),
    dueDate: invoiceData[3],
    invoiceDate: invoiceData[4],
    paymentDate:"2016-11-16",
    invoiceNo: "#696589",
    status:"none",
    paymentStatus:"ACH",
    accountNo: invoiceData[2],
    employeeId:{
      name:invoiceData[0],
      dob:"1990-01-01",
      description:"(Virtual 7007)"
    },
    managerId:{
      name:"john",
      email:invoiceData[1],
      password:PASSWORD
    }
  };
  console.log(invoiceData)
  const postBill = async (bill: any) => {
    await axios.post("https://bc74-ag.fe-assignment.tk/bill/payments", bill);
  };
  console.log(invoiceData);
  const handleSubmit = () => {
    const dueDate = bill.dueDate;
    const invoiceDate = bill.invoiceDate;
    const date1 = new Date(dueDate);
    const date2 = new Date(invoiceDate);
    const formattedDueDate  = date1.toLocaleDateString("en-US", {
       year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).split("/").reverse().join("-");
    const formattedInvoiceDate = date2.toLocaleString("en-US", {
      year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).split("/").reverse().join("-");

    bill.dueDate = formattedDueDate;
    bill.invoiceDate = formattedInvoiceDate;
    const submitBill = () => {
      console.log(bill)
      postBill(bill)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
      navigate("/reimbursement");
    };
    submitBill();
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: "15px",
          paddingLeft: "17px",
          paddingTop: "28px",
          paddingBottom: "25px",
          background: theme.palette.structural[50],
        }}
      >
        <MuiIcons src={glymph} alt={"go back"} />
        <MuiIcons src={divider} alt={"divider"} />
        <MuiTypography text={GET_STARTED} />
      </Box>
      <BillGenerationTemplate
        leftSide={
          body ? (
            <NewBillBody
              uploaded={uploaded}
              setBody={setBody}
              billData={invoiceData}
            />
          ) : (
            <CreateBill
              amount={bill.amount}
              name={bill.employeeId.name}
              paymentMethod={CREATE_BILL.paymentMethod}
              scheduledDate={CREATE_BILL.scheduledDate}
              estimatedArrival={CREATE_BILL.estimatedArrival}
              sendTo={CREATE_BILL.sendTo}
              addedBy={CREATE_BILL.addedBy}
              withdrawFrom={CREATE_BILL.withdrawFrom}
              savingAccount={CREATE_BILL.savingAccount}
              handleSubmit={handleSubmit}
            />
          )
        }
        rightSide={
          <Invoice
            icon={add}
            text={INVOICE_MSG}
            setUploaded={setUploaded}
            setBillData={setInvoiceData}
          />
        }
      />
      {!prefilling && (
        <Box>
          <Banner
            sx={{ marginLeft: "100px" }}
            title={<MuiTypography text={SAVE_TIME} variant="body2" />}
            description={
              <MuiTypography
                sx={{ color: theme.palette.lowEmphasis.main }}
                text={UPLOAD_INVOICE}
              />
            }
            buttonText={
              <MuiTypography
                text={SKIP}
                variant="body2"
                sx={{ color: theme.palette.mediumEmphasis.main }}
              />
            }
            onClick={() => setPrefilling(true)}
            open={true}
            isClose={prefilling}
            anchorOrigin={{
              vertical: "center",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "left",
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default BillGeneration;
