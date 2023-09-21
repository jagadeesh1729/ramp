import { Box, SelectChangeEvent, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import MuiTypography from "../../atoms/typography";
import theme from "../../../theme";
import TextFieldWithLabel from "../../molecules/inputfieldWithLabel";
import thunderSvg from "../../../../public/images/thunder.svg";
import MuiIcons from "../../atoms/icon";
import MuiButton from "../../atoms/button";
import {
  ACTIVE_RULES,
  ALL_CATEGORIES,
  CATEGORY_DESCRIPTION,
  CATEGORY_RULES,
  NO_OF_CATEGORIES,
  QUICKBOOKS_CATEGEORY_LABEL,
  RAMP_CATEGORTY_LABEL,
  RAMP_CONTENT,
  RECENT_CATEGORY,
} from "../../../utils/constants";
import DropdownWithLabel from "../../molecules/dropDownWithLabel";
import axios from "axios";

interface CategoryRuleProps {
  name?: string;
  setBool: (value: boolean) => void;
  setRampData: React.Dispatch<React.SetStateAction<any>>;
}
const CategoryRule = ({ name, setBool, setRampData }: CategoryRuleProps) => {
  const CategoryBody = styled(Box)({
    height: "550px",
    width: "516px",
    overflowY: "scroll",
    background: `${theme.palette.accent.main}`,
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      width: "0.4em",
      height: "0.4em",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
  });
  const InnerBody = styled(Box)({
    paddingLeft: "20px",
    paddingRight: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  });
  const CategoryRules = styled(Box)({
    display: "flex",
    flexDirection: "column",
    paddingTop: "16px",
    gap: "4px",
    width: "408px",
  });

  const ActiveRules = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  });

  const Rules = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  });
  const Categories = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  });
  const Rule = styled(Box)({
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    width: "450px",
  });
  const ActiveCategories = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  });
  const Description = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "7px",
    paddingBottom: "30px",
  });
  let uid1 = 0;
  let uid2 = 0;
  const [rampCategories, setRampCategories] = useState<any>();
  const [data, setData] = useState<any>();
  const [quickbooks,setQuickbook]=useState<any>();
  const dropdownRef = useRef<HTMLSelectElement>(null);
  const handleChange = (event: SelectChangeEvent<string>, rule: any) => {
    setBool(false);
    setData({ ...data, [rule.id]: event.target.value });
    setRampCategories((prevRampCategories: any) => {
      const updatedRampCategories = [...prevRampCategories];
      const index = updatedRampCategories.indexOf(rule);
      const quick=quickbooks.find((item:any) => item?.name === event.target.value);
      updatedRampCategories[index].quickbooksCategory = quick;
      return updatedRampCategories;
    });
    setRampData(rampCategories);
  };

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://bc74-ag.fe-assignment.tk/category/rampCategories");
        const data = response.data;
        const updatedData = data.map((item: { quickbooksCategory: null; }) => {
          const mapped = item.quickbooksCategory !== null ? true : false;
          return { ...item, mapped };
        });
        console.log(updatedData);
        setRampCategories(updatedData);
      } catch (error) {
        console.log(error);
      }
    }
    getData().catch((error) => {
      console.log(error);
    });
  }, []);
  useEffect(() => {
    async function getQuickbook() {
      try {
        const response = await axios.get(
          "https://bc74-ag.fe-assignment.tk/category/quickbooksCategories"
        );
        setQuickbook(response.data.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    }
  
    getQuickbook().catch((error) => {
      console.log(error);
    });
  }, []);  

  return (
    <CategoryBody>
      <InnerBody>
        <CategoryRules>
          <MuiTypography
            text={CATEGORY_RULES}
            variant="body2"
            sx={{ color: theme.palette.highEmphasis.main }}
          ></MuiTypography>
          <MuiTypography
            text={RAMP_CONTENT}
            variant="body3"
            sx={{ color: theme.palette.highEmphasis.main }}
          ></MuiTypography>
        </CategoryRules>
        <ActiveRules>
          <MuiTypography
            text={ACTIVE_RULES}
            variant="body2"
            sx={{ color: theme.palette.highEmphasis.main }}
          ></MuiTypography>
          <Rules>
            {rampCategories?.map(
              (rule: any) =>
                rule.mapped === true && (
                  <Rule key={uid1++}>
                    <TextFieldWithLabel
                      label={RAMP_CATEGORTY_LABEL}
                      value={rule?.name}
                      sx={{
                        width: "225px",
                        "& .css-1v7e8h3-MuiFormControl-root-MuiTextField-root input":
                          {
                            color: "green",
                          },
                      }}
                      placeholder={""}
                    />
                    <Box sx={{ marginTop: "35px" }}>
                      <MuiIcons src={thunderSvg} alt={"thunder"} />
                    </Box>
                    <DropdownWithLabel
                      label={QUICKBOOKS_CATEGEORY_LABEL}
                      value={rule.quickbooksCategory?.name}
                      itemsList={[]}
                      width="225px"
                      text={rule.quickbooksCategory?.name}
                    />
                  </Rule>
                )
            )}
          </Rules>
        </ActiveRules>
        <ActiveCategories>
          <MuiTypography
            text={RECENT_CATEGORY}
            variant="body2"
            sx={{ color: theme.palette.highEmphasis.main }}
          ></MuiTypography>
          <Categories>
            {rampCategories?.map(
              (rule: any) =>
                rule.mapped === false && (
                  <Rule key={uid2++}>
                    <TextFieldWithLabel
                      label={RAMP_CATEGORTY_LABEL}
                      value={rule?.name}
                      sx={{ width: "225px" }}
                      placeholder={""}
                    />
                    <Box sx={{ marginTop: "35px" }}>
                      <MuiIcons src={thunderSvg} alt={"thunder"} />
                    </Box>
                    <DropdownWithLabel
                      label={QUICKBOOKS_CATEGEORY_LABEL}
                      text={rule.quickbooksCategory?.name ? "" : QUICKBOOKS_CATEGEORY_LABEL}
                      itemsList={quickbooks.map((item:any)=>item?.name)}
                      value={rule.quickbooksCategory?.name}
                      width="225px"
                      onChange={(event) => {
                        handleChange(event, rule);
                      }}
                      ref={dropdownRef}
                    />
                  </Rule>
                )
            )}
          </Categories>
        </ActiveCategories>
        <Description>
          <MuiTypography
            text={NO_OF_CATEGORIES}
            variant="body2"
            sx={{ color: theme.palette.highEmphasis.main }}
          ></MuiTypography>
          <MuiTypography
            text={CATEGORY_DESCRIPTION}
            variant="body3"
            sx={{ color: theme.palette.mediumEmphasis.main }}
          ></MuiTypography>
          <MuiButton
            text={ALL_CATEGORIES}
            sx={{
              color: theme.palette.mediumEmphasis.main,
              boxShadow: "0px 0px 4px 4px rgba(0.1, 0.1, 0.1, 0.1)",
              borderRadius: "4px",
              display: "inline-block",
              border: "1px solid rgba(60, 66, 87, 0.12)",
              height:"32px",
              width:"127px"
            }}
          />
        </Description>
      </InnerBody>
    </CategoryBody>
  );
};

export default CategoryRule;
