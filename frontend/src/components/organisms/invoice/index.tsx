import { Stack, IconStack } from "./styles";
import React, { useState } from "react";
import MuiIcons from "../../atoms/icon";
import MuiTypography from "../../atoms/typography";
import theme from "../../../theme/index";
import { useDropzone } from "react-dropzone";
import MuiImage from "../../atoms/image";
import Pdf from "../../../../public/images/pdf.svg";
import Load from "../../../../public/images/load.svg";
import { ICON_NOT_FOUND } from "../../../utils/constants";
import axios from "axios";

interface InvoiceProps {
  icon: string;
  text: string;
  setUploaded?: React.Dispatch<React.SetStateAction<boolean>>;
  setBillData?:React.Dispatch<any>
}

const Invoice = ({ icon, text, setUploaded,setBillData }: InvoiceProps) => {
  const [show, setShow] = useState(true);
  const [imageSrc, setImageSrc] = useState(Load);

  const handleFiles = (acceptedFiles: File[]) => {
    const isPdf = acceptedFiles[0]?.type === "application/pdf";
    if (isPdf) {
      setShow(false);
      if (setUploaded) {
        setUploaded(true);
      }
  
      const formData = new FormData();
      formData.append("file", acceptedFiles[0]);
  
      axios
        .post("https://bc74-ag.fe-assignment.tk/bill/upload", formData)
        .then((response) => {
          if (setBillData) setBillData(response.data.split(" "));
          setImageSrc(Pdf);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    }
  };
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleFiles,
    accept: {
      "application/pdf": [".pdf"],
    },
  });
  

  return (
    <Stack>
      {show ? (
        <IconStack {...getRootProps()} className={isDragActive ? "files active" : "files"}>
          <MuiIcons src={icon} alt="icon not found" style={{ color: theme.palette.stroke[100] }} />
          <MuiTypography text={text} variant="caption2" sx={{ color: theme.palette.lowEmphasis.main }} />
          <input data-testid="invoice-root" {...getInputProps()} />
        </IconStack>
      ) : (
        <MuiImage src={imageSrc} alt={ICON_NOT_FOUND} sx={{ padding: "0px 34px" }} />
      )}
    </Stack>
  );
};

export default Invoice;
