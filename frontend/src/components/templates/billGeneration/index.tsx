import { Box,styled } from "@mui/material";
import React from "react";
import theme from "../../../theme";
interface TemplateProp {
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
}
const Container = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "30px",
  paddingTop:"40px",
  background: theme.palette.structural[50],
  height: "100vh",
});
const BillGenerationTemplate = ({ leftSide, rightSide }: TemplateProp) => {
  return (
    <Container>
      {leftSide}
      {rightSide}
    </Container>
  );
};

export default BillGenerationTemplate;
