import { Box, styled } from "@mui/material";
import React from "react";
import theme from "../../../theme";
import MuiTypography from "../../atoms/typography";
import TextFieldWithLabel from "../../molecules/inputfieldWithLabel";
import SuccessSvg from "../../../../public/images/success.svg";
import InfoSvg from "../../../../public/images/information.svg";
import MuiImage from "../../atoms/image";
import {
  APPROVED_BY,
  AUTO_APPROVED,
  BILL,
  CREATE,
  EDIT,
  LAST_LOOK,
  PAY,
  PAYMENT_METHOD,
  TO,
} from "../../../utils/constants";
import ModalFooter from "../../molecules/modalFooter";

interface CreateBillProps {
  amount: number;
  name: string;
  paymentMethod: string;
  scheduledDate: string;
  estimatedArrival: string;
  sendTo: string;
  addedBy: string;
  withdrawFrom: string;
  savingAccount: string;
  handleSubmit?: () => void;
}
const CreateBill = ({
  amount,
  name,
  paymentMethod,
  scheduledDate,
  estimatedArrival,
  sendTo,
  addedBy,
  withdrawFrom,
  savingAccount,
  handleSubmit,
}: CreateBillProps) => {
  const OutLine = styled(Box)({
    width: "366px",
    height: "408px",
    background: `${theme.palette.structural[50]}`,
    borderBottom: `1px solid ${theme.palette.stroke[50]}`,
    overflowY: "scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      width: "0",
      height: "0",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
  });
  const AmountDetails = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "16px 8px",
  });
  const Amount = styled(Box)({
    display: "flex",
    justifyContent: "flex-start",
    gap: "4px",
    paddingBottom: "10px",
  });
  const Payments = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  });
  const SuccessCard = styled(Box)({
    height: "60px",
    display: "flex",
    gap: "10px",
    background: theme.palette.accent.main,
    border: `1px solid ${theme.palette.stroke[50]}`,
    marginRight: 0,
  });
  const Bill = styled(Box)({
    width: "366px",
  });
  const data = [
    {
      label: "Scheduled date",
      placeholder: scheduledDate,
      value: scheduledDate,
      caption1: "Estimated arrival",
      caption2: theme.palette.lowEmphasis.main,
      caption3: estimatedArrival,
      caption4: theme.palette.mediumEmphasis.main,
    },
    {
      label: "Send to",
      placeholder: sendTo,
      value: sendTo,
      caption1: "Added by",
      caption2: theme.palette.lowEmphasis.main,
      caption3: addedBy,
      caption4: theme.palette.mediumEmphasis.main,
    },
    {
      label: "Withdraw from",
      placeholder: withdrawFrom,
      value: withdrawFrom,
      caption1: "Saving account -",
      caption2: theme.palette.lowEmphasis.main,
      caption3: `$ ${savingAccount}`,
      caption4: theme.palette.mediumEmphasis.main,
    },
  ];
  const typographies = [
    { text: PAY, sx: { color: theme.palette.lowEmphasis.main } },
    { text: `${amount}`, sx: { color: theme.palette.highEmphasis.main } },
    { text: TO, sx: { color: theme.palette.lowEmphasis.main } },
    { text: name, sx: { color: theme.palette.highEmphasis.main } },
  ];
  let uid1 = 0;
  let uid2 = 0;
  return (
    <Bill>
      <MuiTypography
        text={BILL}
        variant="h1"
        sx={{ color: theme.palette.highEmphasis.main, paddingBottom: "10px" }}
      />
      <OutLine>
        <AmountDetails>
          <MuiTypography
            text={LAST_LOOK}
            variant="body2"
            sx={{ color: theme.palette.mediumEmphasis.main }}
          />
          <Amount>
            {typographies.map((typography) => (
              <Box key={uid1++}>
                <MuiTypography text={typography.text} sx={typography.sx} />
              </Box>
            ))}
          </Amount>
          <Payments>
            <TextFieldWithLabel
              label={PAYMENT_METHOD}
              placeholder={paymentMethod}
              value={paymentMethod}
              sx={{ background: theme.palette.accent.main }}
            />
            {data.map((item) => (
              <Box key={uid2++}>
                <TextFieldWithLabel
                  label={item.label}
                  placeholder={item.placeholder}
                  value={item.value}
                  sx={{
                    background: theme.palette.accent.main,
                    color: theme.palette.highEmphasis.main,
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    gap: "3px",
                    paddingLeft: "9px",
                    paddingTop: "5px",
                    height: "16px",
                  }}
                >
                  <MuiTypography
                    text={item.caption1}
                    variant="caption2"
                    sx={{ color: item.caption2 }}
                  />
                  <MuiTypography
                    text={item.caption3}
                    variant="caption1"
                    sx={{ color: item.caption4 }}
                  />
                </Box>
              </Box>
            ))}
          </Payments>
        </AmountDetails>
        <Box>
          <MuiTypography
            text={APPROVED_BY}
            variant="body2"
            sx={{
              color: theme.palette.mediumEmphasis.main,
              paddingLeft: "8px",
              paddingBottom: "12px",
            }}
          />
          <SuccessCard>
            <Box sx={{ paddingLeft: "15px", paddingTop: "18px" }}>
              <MuiImage src={SuccessSvg} alt={"success"} width="12px" />
            </Box>

            <MuiTypography
              text={AUTO_APPROVED}
              variant="body2"
              sx={{ color: theme.palette.accent.green100, paddingTop: "17px" }}
            />
            <Box sx={{ paddingLeft: "8px", paddingTop: "20px" }}>
              <MuiImage src={InfoSvg} alt={"Info"} width="12px" />
            </Box>
          </SuccessCard>
        </Box>
      </OutLine>
      <ModalFooter
        button1Text={EDIT}
        button2Text={CREATE}
        onClickButton2={handleSubmit}
        sx={{ background: theme.palette.structural[50] }}
      />
    </Bill>
  );
};

export default CreateBill;
