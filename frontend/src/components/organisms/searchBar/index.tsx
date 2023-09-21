import React, { ChangeEvent, useState } from "react";
import {
  SEARCH_PLACEHOLDER,
  SEARCH_TIPS,
  SHOW_RESULTS,
  TRANSACTIONS,
} from "../../../utils/constants";
import searchSvg from "../../../../public/images/search.svg";
import tipSvg from "../../../../public/images/tip.svg";
import MuiImage from "../../atoms/image";
import { Box, IconButton, styled , TextField } from "@mui/material";

import MuiTypography from "../../atoms/typography";
import theme from "../../../theme";
interface SearchBarProps {
  data: any[];
  rows1: any[];
  setChipData: React.Dispatch<React.SetStateAction<string>>;
  setChip: React.Dispatch<React.SetStateAction<boolean>>;
  setRows1: React.Dispatch<React.SetStateAction<any[]>>;
  setIsChip: React.Dispatch<React.SetStateAction<boolean>>;
  isChip: boolean;
}
const SearchPanel = styled(Box)({
  top: "50px",
  position: "absolute",
  backgroundColor: `${theme.palette.accent.main}`,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  borderRadius: "4px",
  width: "588px",
  overflowY: "auto",
  zIndex: 1,
  display: "flex",
  height: "171px",
  flexDirection: "column",
  gap: "15px",
});
const Tips = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingLeft: "26px",
  height: "42px",
  gap: "4px",
  background: `${theme.palette.structural[50]}`,
});
const SearchBar = ({
  data,
  rows1,
  setRows1,
  setChipData,
  setChip,
  isChip,
  setIsChip
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [showPanel, setShowPanel] = useState<boolean>(false);
  const handleSearch = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const value = target.value;
    setSearchTerm(value);
    setChipData("");
    setChip(false);
    setIsChip(true)
    const newData = data.filter((item) =>
      item.merchant.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(newData);
    setShowPanel(true);
    target.value = value;
  };
  const handleClosePanel = (value: any) => {
    setSearchTerm(value)
    setShowPanel(false);
    setRows1(
      data.filter(
        (item) => item.merchant.name.toLowerCase() === value.toLowerCase()
      )
    );
    setChip(true);
    if (filteredData.length > 0) setChipData(filteredData[0]?.merchant.name);
  };
  return (
    <Box>
      <TextField
        placeholder={SEARCH_PLACEHOLDER}
        sx={{
          width: "456px",
          height: "38px",
          borderRadius: "12px",
          "& .MuiInputBase-root.MuiOutlinedInput-root": {
            borderRadius: "12px",
            paddingLeft:"2px"
          },
          "& .MuiInputBase-input.MuiOutlinedInput-input": {
            padding: "4.5px 0px",
          },
        }}
        InputProps={{
          startAdornment: (
            <IconButton>
              <MuiImage src={searchSvg} alt="search icon" width="12px" />
            </IconButton>
          ),
        }}
        onChange={(e) => handleSearch(e)}
        data-testid="search-input"
        value={isChip?searchTerm:""}
        size="small"
      />
      {showPanel && searchTerm && filteredData.length > 0 && (
        <SearchPanel>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "17px",
              paddingTop: "16px",
              paddingLeft: "26px",
            }}
          >
            <Box sx={{ display: "flex", gap: "5px" }}>
              <MuiTypography
                text={SHOW_RESULTS}
                variant="subtitle2"
                sx={{ color: theme.palette.lowEmphasis.main }}
              />
              <MuiTypography
                text={`${filteredData[0].merchant.name}`}
                variant="subtitle3"
                sx={{ color: theme.palette.mediumEmphasis.main }}
              />
            </Box>
            <Box>
              <MuiTypography
                text={TRANSACTIONS}
                variant="subtitle3"
                sx={{ color: theme.palette.lowEmphasis.main }}
              />
            </Box>
            <Box
              onClick={() => handleClosePanel(filteredData[0].merchant.name)}
              sx={{ cursor: "pointer" }}
              data-testid="close-panel"
            >
              <MuiTypography
                text={`${filteredData[0].merchant.name}`}
                variant="subtitle3"
                sx={{ color: theme.palette.mediumEmphasis.main }}
              />
            </Box>
          </Box>
          <Box>
            <Tips>
              <MuiImage
                src={tipSvg}
                alt="tip icon"
                width="14px"
                height="14px"
              />
              <MuiTypography
                text={SEARCH_TIPS}
                variant="subtitle3"
                sx={{ color: theme.palette.mediumEmphasis.main }}
              />
            </Tips>
          </Box>
        </SearchPanel>
      )}
    </Box>
  );
};

export default SearchBar;
