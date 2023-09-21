import React, { useState } from "react";
import {
  BodyStack,
  BoxStack,
  DualStack1,
  DualStack2,
  Stack,
  FieldStack,
  Card,
  LowerStack,
} from "./styles";
import MuiTypography from "../../atoms/typography";
import theme from "../../../theme/index";
import TextFieldWithLabel from "../../molecules/inputfieldWithLabel";
import Date from "../../../../public/images/date.svg";
import Delete from "../../../../public/images/delete.svg";
import Arrow from "../../../../public/images/arrow.svg";
import DropDown from "../../../../public/images/dropdown.svg";
import Line from "../../../../public/images/line.svg";
import Cross from "../../../../public/images/cross.svg";
import Pluse from "../../../../public/images/pluse.svg";
import Spark from "../../../../public/images/spark.svg";
import Info from "../../../../public/images/info2.svg";
import Done from "../../../../public/images/done.svg";
import Contract from "../../../../public/images/contract.svg";
import Edit from "../../../../public/images/edit.svg";
import Bank from "../../../../public/images/bank.svg";
import MuiIcons from "../../atoms/icon";
import { ICON_NOT_FOUND, NEW_BILL } from "../../../utils/constants";
import ModalFooter from "../../molecules/modalFooter";
import { Box } from "@mui/material";
import DropdownWithLabel from "../../molecules/dropDownWithLabel";
import MuiButton from "../../atoms/button";
import MuiImage from "../../atoms/image";

interface NewBillBodyProps {
  uploaded?: boolean;
  setBody?: React.Dispatch<React.SetStateAction<boolean>>;
  billData:string[];
}

const NewBillBody = ({ uploaded, setBody,billData }: NewBillBodyProps) => {
  const data = NEW_BILL.defaultData;
  const i = uploaded ? 1 : 0;
  const [show, setShow] = useState(false);
  const [value,setValue] = useState()
  const [showBox,setShowBox] = useState(false)
  const textFieldArray = [
    { label: data.label7, value: billData?.[5] || "" },
    { label: data.label8, value: data.value8[i] },
    { label: data.label9, value: data.value9[i] },
    { label: data.label10, value: data.value10[i] },
    { label: data.label11, value: data.value11[i] },
  ];
  const array = [
    [
      { label: data.label3, placeholder: billData?.[3] },
      { label: data.label4, placeholder: billData?.[4] },
    ],
    [
      { label: data.label5, placeholder: data.value5[i] },
      { label: data.label6, placeholder: data.value6[i] },
    ],
    [
      { label: data.label13, placeholder: data.value13[i] },
      { label: data.label14, placeholder: data.value14[i] },
      { label: data.label15, placeholder: data.value15[i] },
    ],
  ];
  const emphasis = (text: string, variant: any, color: string) => (
    <MuiTypography text={text} variant={variant} sx={{ color: color }} />
  );
  const component = (
    <FieldStack>
      {textFieldArray.map((item) => (
        <TextFieldWithLabel
          key={item.label}
          label={item.label}
          placeholder={item.value}
          sx={{ background: theme.palette.accent.main }}
        />
      ))}
    </FieldStack>
  );
  const textField = (label: string, placeholder: string) => (
    <TextFieldWithLabel
      label={label}
      placeholder={placeholder}
      sx={{ background: theme.palette.accent.main }}
    />
  );
  const buttonStack = (
    <Box sx={{ display: "flex",alignItems:"center",border:`1px solid ${theme.palette.stroke[50]}`,borderRadius:"100px",maxWidth:"74px",gap:"6px",marginBottom:"12px",padding:"4px 8px",marginLeft:"10px" }}>
      <MuiIcons src={Cross} alt={ICON_NOT_FOUND} />
      <MuiTypography
            text={NEW_BILL.buttonText}
            sx={{ color: theme.palette.primary[500] }}
            variant="caption1"
          />
    </Box>
  );
  const Content = (
    <Box
      sx={{
        border: `1px solid ${theme.palette.stroke[100]}`,
        borderRadius: "4px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", padding: "8px" }}>
        <MuiIcons src={Delete} alt={ICON_NOT_FOUND} />
      </Box>
      {component}
      {buttonStack}
    </Box>
  );
  const handleClick = (title: any): void => {
    setValue(title)
    setShowBox(false)
    setShow(true)
  }

  const handleShowBox = () => {
    setShowBox(true)
  }

  return (
    <Box sx={{ maxWidth: "366px", background: theme.palette.structural[50] }}>
      <Box sx={{ paddingBottom: "12px", paddingLeft: "5px" }}>
        {emphasis(NEW_BILL.heading, "h1", theme.palette.highEmphasis.main)}
      </Box>
      <Stack>
        {uploaded && (
          <Box
            sx={{
              border: `1px solid ${theme.palette.neutral[100]}`,
              borderRadius: "4px",
            }}
          >
            <Card>
              <MuiIcons src={Spark} alt={ICON_NOT_FOUND} />
              <MuiTypography
                text={NEW_BILL.cardText}
                variant="caption1"
                sx={{ color: theme.palette.icons[100] }}
              />
            </Card>
          </Box>
        )}
        <BodyStack>
          <DualStack1>
            {emphasis(
              NEW_BILL.question1,
              "body2",
              theme.palette.mediumEmphasis.main
            )}
            {uploaded && (
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                {emphasis(
                  billData?.[0],
                  "subtitle2",
                  theme.palette.mediumEmphasis.main
                )}
                <Box sx={{ display: "flex", gap: "9px" }}>
                  <MuiIcons src={Contract} alt={ICON_NOT_FOUND} />
                  <MuiIcons src={Edit} alt={ICON_NOT_FOUND} />
                </Box>
              </Box>
            )}
            <DualStack2>
              <DropdownWithLabel
                label={data.label1}
                text={billData?.[1]}
                sx={{ background: theme.palette.accent.main }}
              />
              <TextFieldWithLabel
                label={data.label2}
                placeholder={billData?.[2]}
                sx={{ background: theme.palette.accent.main }}
              />
              {uploaded && (
                <BoxStack>
                  <MuiIcons src={Bank} alt={ICON_NOT_FOUND} />
                  <MuiTypography
                    text={NEW_BILL.status}
                    variant="caption1"
                    sx={{ color: theme.palette.icons[100] }}
                  />
                </BoxStack>
              )}
            </DualStack2>
          </DualStack1>
          <DualStack1>
            {emphasis(
              NEW_BILL.question2,
              "body2",
              theme.palette.mediumEmphasis.main
            )}
            <DualStack2>
              <BoxStack>
                {array[0].map((item) => (
                  <TextFieldWithLabel
                    key={item.label}
                    label={item.label}
                    placeholder={item.placeholder}
                    iconStart={<MuiIcons src={Date} alt={ICON_NOT_FOUND} />}
                    sx={{ background: theme.palette.accent.main }}
                  />
                ))}
              </BoxStack>
              {array[1].map((item) => textField(item.label, item.placeholder))}
            </DualStack2>
          </DualStack1>
        </BodyStack>
        {Content}
        {Content}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {emphasis(data.text, "caption2", theme.palette.highEmphasis.main)}
            {emphasis(data.cost, "subtitle2", theme.palette.highEmphasis.main)}
          </Box>
          <MuiButton
            startIcon={<MuiIcons src={Pluse} alt={ICON_NOT_FOUND} />}
            text={<MuiTypography text={NEW_BILL.footer.button1} variant="body2" sx={{color:theme.palette.mediumEmphasis.main}} />}
            variant="outlined"
            sx={{boxShadow: '0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)',
              padding:"4px 10px",
              borderRadius:"4px",
              background:theme.palette.accent.main,
              border:"1px solid rgba(60, 66, 87, 0.12)"
            }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {emphasis(
            NEW_BILL.footer.text,
            "body2",
            theme.palette.mediumEmphasis.main
          )}
          <TextFieldWithLabel 
          label={NEW_BILL.footer.label} 
          placeholder={NEW_BILL.footer.placeholder} 
          value={value} onClick={handleShowBox} 
          iconEnd={<MuiIcons src={DropDown} alt={ICON_NOT_FOUND} />}
          />
          {showBox && <Box sx={{
            display:"flex",
            alignItems:"center",
            padding:"8px",
            border:`1px solid ${theme.palette.stroke[100]}`,
            boxShadow:"0px 15px 35px rgba(60, 66, 87, 0.08), 0px 5px 15px rgba(0, 0, 0, 0.12)",
            borderRadius:"6px",
            background:theme.palette.accent.main,
            }}>
            <Box sx={{display:"flex",flexDirection:"column",gap:"12px"}}>
            {NEW_BILL.select.map((item:any) => (
              <Box 
              key={item.title}
              sx={{ display: "flex", flexDirection: "column", maxWidth: "330px",cursor:"pointer" }}
              onClick={() => handleClick(item.title)}
              >
              {emphasis(item.title, "body1", theme.palette.highEmphasis.main)}
              <MuiTypography
                text={item.description}
                variant={"caption1"}
                sx={{
                  color: theme.palette.mediumEmphasis.main,
                  whiteSpace: "normal",
                }}
              />
            </Box>
            ))}
            </Box>
          </Box>}
        </Box>
        {show && (
          <LowerStack>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <TextFieldWithLabel
                label={data.label12}
                placeholder={data.value12[i]}
                sx={{ background: theme.palette.accent.main }}
              />
              <MuiImage src={Line} alt={ICON_NOT_FOUND} sx={{width:'24px',height:'24px'}} />
              {emphasis(
                NEW_BILL.footer.time,
                "body2",
                theme.palette.mediumEmphasis.main
              )}
              {emphasis(
                NEW_BILL.footer.days,
                "caption1",
                theme.palette.mediumEmphasis.main
              )}
              <MuiImage src={Arrow} alt={ICON_NOT_FOUND} sx={{width:'24px',height:'24px'}} />
            </Box>
            {array[2].map((item) => textField(item.label, item.placeholder))}
            <MuiTypography
              text={NEW_BILL.footer.approvel}
              variant="body2"
              sx={{
                color: theme.palette.mediumEmphasis.main,
                paddingTop: "10px",
              }}
            />
            <Box
              sx={{
                border: `1px solid ${theme.palette.neutral[100]}`,
                background: theme.palette.accent.main,
              }}
            >
              <Box sx={{ display: "flex", gap: "12px", padding: "16px" }}>
                <MuiIcons src={Done} alt={ICON_NOT_FOUND} />
                <MuiTypography
                  text={NEW_BILL.footer.time}
                  variant="body2"
                  sx={{ color: theme.palette.accent.green100 }}
                />
                <MuiIcons src={Info} alt={ICON_NOT_FOUND} />
              </Box>
            </Box>
          </LowerStack>
        )}
      </Stack>
      <ModalFooter
        button1Text={
          <MuiTypography
            text={NEW_BILL.button.text1}
            sx={{ color: theme.palette.mediumEmphasis.main }}
          />
        }
        button2Text={NEW_BILL.button.text2}
        button2Disable={!uploaded}
        onClickButton2={() => {
          if (setBody) setBody(false);
        }}
        sx={{ background: theme.palette.structural[50] }}
      />
    </Box>
  );
};

export default NewBillBody;