import { Box, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";
import theme from "../../../theme";
import { styled } from "@mui/system";
import MuiTypography from "../../atoms/typography";
import DropDown from "../../organisms/dropdown";
import { MENU_ITEMS} from "../../../utils/constants";

interface MerchantRuleProps {
  name?: string;
  category?: string;
  transactions: number;
}
const MerchantRule = ({ name, category, transactions }: MerchantRuleProps) => {
  const ModelOutline = styled(Box)({
    background: `${theme.palette.accent.main}`,
  });
  const ModelBody = styled(Box)({
    display: "flex",
    height: "157px",
    width: "448px",
    flexDirection: "column",
    gap: 0,
    paddingTop: "16px",
    paddingLeft: "20px",
    paddingRight: "20px",
  });
  const content = `Set a default "QuickBooks" Category for "${name}". This rule will be applied automatically  to all unsynced and future transactions from "${name}".`;
  const [enable, setEnable] = useState(category);
  const handleChange = (event: SelectChangeEvent<string>) => {
    setEnable(event.target.value);
  };
  
  return (
    <ModelOutline>
      <ModelBody>
        <MuiTypography
          text={content}
          variant="body2"
          sx={{ color: theme.palette.highEmphasis.main, paddingBottom: "16px" }}
        ></MuiTypography>
        <DropDown
          menuItems={MENU_ITEMS}
          width={"284px"}
          label={""}
          value={enable}
          onChange={handleChange}
        />
        <MuiTypography
          text={`${transactions} unsynced transactions.`}
          variant="body2"
          sx={{ color: theme.palette.accent.red100, paddingTop: "5px" }}
        ></MuiTypography>
      </ModelBody>
    </ModelOutline>
  );
};
export default MerchantRule;