/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, SelectChangeEvent } from "@mui/material";
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import MuiTextfield from "../../atoms/textfield";
import Calendar from "../../../../public/images/calendar.svg";
import Filter from "../../../../public/images/filter.svg";
import CloseIcon from "../../../../public/images/rejectIcon.svg";
import removeIcon from "../../../../public/images/remove.svg";
import Trash from "../../../../public/images/trash.svg";
import EyeIcon from "../../../../public/images/eye.svg";
import MuiImage from "../../atoms/image";
import MuiTypography from "../../atoms/typography";
import theme from "../../../theme";
import { GridColDef, GridInputRowSelectionModel } from "@mui/x-data-grid";
import Table from "../dataGrid";
import axios from "axios";
import {
  TextStack,
  Buttonsstyle,
  BoxStack,
  TopBody,
  UserData,
  BarStack,
  SearchStack,
  FooterStack,
  SearchBarStack,
} from "./styles";
import {
  BUTTON_DELETE,
  RAMPCARDS_HEADING,
  SYNC_BUTTON,
} from "../../../utils/constants";
import MuiButton from "../../atoms/button";
import TextWithIcon from "../../molecules/textWithIcon";
import MuiIcons from "../../atoms/icon";
import DropDown from "../dropdown";
import SearchBar from "../searchBar";
import Footer from "../../molecules/footer";
import { UserContext, UserContextModal } from "../../templates/rampDashBoard";
import MerchantRuleModal from "../merchantRuleModal";
import CategoryRuleModal from "../categoryRuleModal";

interface RampCardsProps {
  columns: GridColDef[];
  rows: any[];
  checkbox: boolean;
  autoHeight?: boolean;
  selectedRows?: GridInputRowSelectionModel;
  buttonText?: string;
}

const RampCards = ({ checkbox, autoHeight }: RampCardsProps) => {
  const { showModal, setShowModal } = useContext<{
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
  }>(UserContext);
  const { showModalRamp, setShowModalRamp } = useContext<{
    showModalRamp: boolean;
    setShowModalRamp: Dispatch<SetStateAction<boolean>>;
  }>(UserContextModal);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [deleteButton, setDeleteButton] = useState<boolean>(false);
  const [rows1, setRows1] = useState<any[]>([]);
  const [chip, setChip] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  const [chipData, setChipData] = useState<string>("");
  const [isChip, setIsChip] = useState<boolean>(true);
  const [selectedIds, setSelectedIds] = useState<any[]>([]);
  const [category, setCategory] = useState<string>("");
  const [merchantCount, setMerchentCount] = useState(0);
  const [caregorycount, setCategoryCount] = useState(0);
  const [showButtons, setShowButtons] = useState(true);
  const [quickbooks, setQuickbook] = useState<any[]>([]);
  const [transactions, setTransactions] = useState<any>();
  const [isMerchant, setIsMerchant] = useState<boolean>(false);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://bc74-ag.fe-assignment.tk/category/transactions"
      );
      console.log(response.data);
      setRows1(response.data);
      setData(response.data);
    }
    getData();
  }, []);
  useEffect(() => {
    async function getmerchants() {
      const response = await axios.get(
        "https://bc74-ag.fe-assignment.tk/category/merchantRules"
      );
      setMerchentCount(new Set(response.data.map((item: { name: any; }) => item.name)).size);
    }
    getmerchants();
    async function getrampcards() {
      const response = await axios.get(
        "https://bc74-ag.fe-assignment.tk/category/rampCategories"
      );
      setCategoryCount(response.data.filter((item:any) => item.quickbooksCategory !== null).length);
    }
    getrampcards();
  })
  const handleDelete = (selectedData: any) => {
    setSelectedIds(selectedData);
  };
  const handleRemove = () => {
    setRows1(data);
    setChip(false);
    setIsChip(false);
  };
  useEffect(() => {
    if (selectedIds.length !== 0) {
      setDeleteButton(true);
    } else {
      setDeleteButton(false);
    }
  }, [selectedIds.length]);

  function getTransaction(params: any) {
    return (
      <TextWithIcon
        text1={params.row.merchant.name}
        text2={params.row.merchant.description}
        variant1={"body2"}
        variant2={"body3"}
        color={theme.palette.mediumEmphasis.main}
        icon={<MuiIcons src={EyeIcon} alt={"eyeIcon"} />}
      />
    );
  }
  function amountStyle(params: any) {
    return <div style={{ padding: "0px 80px" }}>${params.value}</div>;
  }
  function getDropdown(params: any) {
    const [quickbook, setQuickbook] = useState<string>(params.row.quickbooksCategory?.name);
    const handleDropdownChange = (event: SelectChangeEvent<string>) => {
      const selectedValue = event.target.value;
      setCategory(selectedValue);
      setQuickbook(selectedValue);
      setSelectedBrand(params.row.merchant.name);
    };
    const menuItems = quickbooks.slice(0, 4).map((item) => item.name);
    return (
      <DropDown
        label={params.row.quickbooksCategory?.name ? "" : "choose one"}
        menuItems={menuItems}
        width={"134px"}
        isPopover={true}
        onChange={handleDropdownChange}
        selectedTransaction={selectedBrand}
        value={quickbook}
        bannerOnClick={() => {
          const filteredMerchants = rows1.filter(
            (merchant) => merchant.merchant.name === selectedBrand
          );
          setTransactions(filteredMerchants.length);
          setShowModal(true);
        }}
      />
    );
  }
  function getUser(params: any) {
    return (
      <TextWithIcon
        text1={params.row.employee.name}
        text2={params.row.employee.description}
        variant1={"body2"}
        variant2={"body3"}
      />
    );
  }
  function getsync(params: any) {
    return (
      <MuiButton
        text="Make ready"
        variant="contained"
        sx={{
          color: theme.palette.mediumEmphasis.main,
          background: theme.palette.accent.main,
          "&:hover": { backgroundColor: theme.palette.accent.main },
          borderRadius: "4px",
        }}
      />
    );
  }
  const columns1 = [
    {
      field: "merchant",
      headerName: "TRANSACTIONS",
      renderCell: getTransaction,
    },
    { field: "amount", headerName: "AMOUNT", renderCell: amountStyle },
    { field: "date", headerName: "DATE" },
    { field: "employee", headerName: "USER", renderCell: getUser },
    {
      field: "quickbooksCategory",
      headerName: "QUICKBOOKS CATEGORY",
      renderCell: getDropdown,
    },
    { field: "receipt", headerName: "RECEIPT" },
    { field: "memo", headerName: "MEMO" },
    { field: "sync", headerName: "SYNC", renderCell: getsync },
  ];
  useEffect(() => {
    async function getquickbook() {
      const response = await axios.get(
        "https://bc74-ag.fe-assignment.tk/category/quickbooksCategories"
      );
      setQuickbook(response.data);
    }
    getquickbook();
  }, []);

  const deleterow = () => {
    const rejectedRow = selectedIds.map((id) =>
      axios.delete(`https://bc74-ag.fe-assignment.tk/category/transactions/${id}`)
    );
    setSelectedIds([]);
    const updateData = rows1.filter((row) => !selectedIds.includes(row.id));
    setRows1(updateData);
  };
  const filters = [
    {
      text1: "Missing items",
      text2: "79",
      color: theme.palette.accent.red100,
    },
    {
      text1: "Merchant rules",
      text2: merchantCount,
      color: theme.palette.primary[500],
    },
    {
      text1: "Category rules",
      text2: caregorycount,
      color: theme.palette.primary[500],
    },
    {
      text1: "Department rules",
      text2: "0",
      color: theme.palette.lowEmphasis.main,
    },
    {
      text1: "Location rules",
      text2: "0",
      color: theme.palette.lowEmphasis.main,
    },
  ];
  const buttonStyles = [
    {
      text: "Sync history",
      color: theme.palette.mediumEmphasis.main,
      background: theme.palette.accent.main,
    },
    {
      text: "Settings",
      color: theme.palette.mediumEmphasis.main,
      background: theme.palette.accent.main,
    },
    {
      text: "Create category rule",
      color: theme.palette.accent.main,
      background: theme.palette.primary[500],
      onClick: () => {
        setShowModalRamp(true);
      },
    },
  ];
  const buttonWithIcon = [
    {
      text: "Clear filter",
      icon: CloseIcon,
      color: theme.palette.lowEmphasis.main,
    },
    {
      text: "Filter",
      icon: Filter,
      color: theme.palette.primary[500],
    },
  ];
  return (
    <Box sx={{ marginRight: "85px", marginTop: "54px", marginLeft: "40px" }}>
      <TopBody>
        <TextStack>
          <MuiTypography
            text={RAMPCARDS_HEADING}
            variant="h1"
            sx={{ color: theme.palette.highEmphasis.main }}
          />
          {showButtons && (
            <Buttonsstyle>
              {buttonStyles.map((id) => (
                <MuiButton
                  key={"id"}
                  text={id.text}
                  variant="contained"
                  onClick={id.onClick}
                  sx={{
                    color: id.color,
                    background: id.background,
                    borderRadius: "4px",
                    "&:hover": { backgroundColor: id.background },
                    boxShadow:
                      "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
                  }}
                />
              ))}
            </Buttonsstyle>
          )}
        </TextStack>
        <BoxStack>
          {filters.map((id) => (
            <TextWithIcon
              key={"id"}
              text1={id.text1}
              text2={id.text2}
              variant1={"body3"}
              variant2={"body2"}
              color={id.color}
            />
          ))}
        </BoxStack>
      </TopBody>
      <UserData>
        <SearchStack>
          <SearchBarStack>
            <SearchBar
              rows1={rows1}
              data={data}
              setChipData={setChipData}
              setChip={setChip}
              setRows1={setRows1}
              isChip={isChip}
              setIsChip={setIsChip}
            />
            <MuiTextfield
              placeholder="All cards"
              sx={{ width: "122px", height: "28px" }}
              search={true}
              size="small"
              iconStart={
                <MuiImage src={Calendar} alt="calendar icon" width="12px" />
              }
            />
            {chip && (
              <Box
                sx={{
                  display: "flex",
                  padding: "4px 6px",
                  border: `1px solid ${theme.palette.structural[50]}`,
                  background: theme.palette.accent.main,
                  borderRadius: "100px",
                  height: "28px",
                  width: "auto",
                }}
              >
                <Box
                  sx={{
                    cursor: "pointer",
                    paddingLeft: "5px",
                    paddingTop: "3px",
                  }}
                  onClick={handleRemove}
                >
                  <MuiImage src={removeIcon} alt={"cancel"} width="12px" />
                </Box>
                <MuiTypography
                  text={chipData}
                  variant="caption1"
                  sx={{
                    color: theme.palette.primary[500],
                    paddingLeft: "5px",
                    paddingTop: "6px",
                    height: "16px",
                  }}
                />
              </Box>
            )}
          </SearchBarStack>
          <BarStack>
            {deleteButton && (
              <MuiButton
                variant="text"
                text={BUTTON_DELETE}
                startIcon={<MuiIcons src={Trash} alt="not found icon" />}
                onClick={deleterow}
                sx={{
                  color: theme.palette.lowEmphasis.main,
                  "&:hover": { backgroundColor: theme.palette.accent.main },
                }}
              />
            )}
            {buttonWithIcon.map((id) => (
              <MuiButton
                key={"id"}
                variant="text"
                text={id.text}
                startIcon={<MuiIcons src={id.icon} alt="not found icon" />}
                sx={{
                  color: id.color,
                  "&:hover": { backgroundColor: theme.palette.accent.main },
                }}
              />
            ))}
            <MuiButton
              variant="contained"
              text={SYNC_BUTTON}
              sx={{
                color: theme.palette.mediumEmphasis.main,
                background: theme.palette.accent.main,
                "&:hover": { backgroundColor: theme.palette.accent.main },
                borderRadius: "4px",
                boxShadow:
                  "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
              }}
            />
          </BarStack>
        </SearchStack>
        <Table
          columns={columns1}
          rows={rows1}
          checkbox={checkbox}
          autoHeight={autoHeight}
          setSelectedRows={handleDelete}
          selectedRows={selectedIds}
        />
      </UserData>
      <FooterStack>
        <Footer count={`${rows1.length} results`} />
      </FooterStack>
      {showModal ? (
        <MerchantRuleModal
          name={selectedBrand}
          setRows1={setRows1}
          rows1={rows1}
          category={category}
          showModal={showModal}
          setShowModal={setShowModal}
          setMerchentCount={setMerchentCount}
          transactions={transactions}
          setIsMerchant={setIsMerchant}
        />
      ) : (
        ""
      )}
      {showModalRamp ? (
        <CategoryRuleModal
          showModal={showModalRamp}
          setShowModal={setShowModalRamp}
          setCategoryCount={setCategoryCount}
          setShowButtons={setShowButtons}
        />
      ) : (
        ""
      )}
    </Box>
  );
};

export default RampCards;