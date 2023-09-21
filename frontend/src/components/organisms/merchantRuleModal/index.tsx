import React, { useState } from "react";
import MuiModal from "../modelLayout";
import ModalHeader from "../../molecules/modalHeader";
import MerchantRule from "../merchantRule";
import ModalFooter from "../../molecules/modalFooter";
import {
  BUTTON_1_TEXT,
  BUTTON_2_TEXT,
  MERCHANT_HEADER,
} from "../../../utils/constants";
import axios from "axios";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  name?: string;
  setRows1: React.Dispatch<React.SetStateAction<any>>;
  rows1: any;
  category: string;
  transactions: any;
  setMerchentCount: React.Dispatch<React.SetStateAction<number>>;
  setIsMerchant: React.Dispatch<React.SetStateAction<boolean>>;
}

const MerchantRuleModal = ({
  showModal,
  name,
  setRows1,
  transactions,
  rows1,
  category,
  setShowModal,
  setIsMerchant,
}: ModalProps) => {
  const [quickbook,setQuickbook]=useState<any>();
  const handleApplyMerchantRule = () => {
    const filteredRows = rows1.filter((row: any) => row.merchant.name === name);
    const updatedRows = filteredRows.map((cat: any) => {
    
      const quick=quickbook.find((item:any) => item?.name === category);
      const data = {
        amount: cat.amount,
        quickbooksCategory: {
          id: quick.id,
          name: category,
        },
      };
      axios.post(`https://bc74-ag.fe-assignment.tk/category/merchantRules`, {
        name:category
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error updating transaction:", error);
      });

      axios.patch(`https://bc74-ag.fe-assignment.tk/category/transactions/${cat.id}`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error updating transaction:", error);
      });

      return {
        ...cat,
        quickbooksCategory: data.quickbooksCategory,
      };
    });

    const updatedRowsWithIds = updatedRows.map((row: any) => {
      const matchedRow = rows1.find((r: any) => r.id === row.id);
      if (matchedRow) {
        return {
          ...matchedRow,
          quickbooksCategory: row.quickbooksCategory,
        };
      }
      return row;
    });

    console.log(updatedRowsWithIds);

    const idArray = updatedRowsWithIds.map((item: any) => item.id);

    console.log(idArray);

    const newRow = rows1.map((item: any) => {
      if(idArray.includes(item.id)){
       const filteredData= updatedRowsWithIds.find((updatedRow:any) => updatedRow.id === item.id);
        const newItem={...item,quickbooksCategory:filteredData.quickbooksCategory}
        return newItem
      }
      else{
        return item
      }
      
    });
    console.log(newRow)
    setRows1(newRow)
    setIsMerchant((prev) => !prev);
    location.reload();
  };
  async function getquickbook() {
    axios.get("https://bc74-ag.fe-assignment.tk/category/quickbooksCategories")
      .then((response) => {
        setQuickbook(response.data.slice(0, 4));
      })
      .catch((error) => {
        console.error("Error retrieving quickbook categories:", error);
      });
  }
  getquickbook().catch((error) => {
    console.log(error);
  });
  
  return (
    <MuiModal
      showModel={showModal}
      modalHeader={<ModalHeader text={MERCHANT_HEADER} />}
      modalBody={
        <MerchantRule
          name={name}
          category={category}
          transactions={transactions}
        />
      }
      modalFooter={
        <ModalFooter
          button1Text={BUTTON_1_TEXT}
          button2Text={BUTTON_2_TEXT}
          button2Disable={false}
          onClickButton1={() => {
            setShowModal(false);
          }}
          onClickButton2={() => {
            handleApplyMerchantRule();
            setShowModal(false);
          }}
        />
      }
      set={setShowModal}
      maxWidth="448px"
    />
  );
};
export default MerchantRuleModal;
