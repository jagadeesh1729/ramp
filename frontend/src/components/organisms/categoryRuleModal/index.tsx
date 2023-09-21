import React, { useState } from "react";
import ModalHeader from "../../molecules/modalHeader";
import ModalFooter from "../../molecules/modalFooter";
import MuiModal from "../modelLayout";
import CategoryRule from "../categoryRule";
import {
  BUTTON_1_TEXT,
  BUTTON_2_TEXT,
  CATEGORTY_RULE_HEADER,
} from "../../../utils/constants";
import axios from "axios";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCategoryCount: React.Dispatch<React.SetStateAction<number>>;
  setShowButtons?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryRuleModal = ({
  showModal,
  setShowModal,
  setCategoryCount,
  setShowButtons,
}: ModalProps) => {
  const [bool, setBool] = useState(true);
  const [rampData, setRampData] = useState<any>();
  const handleRampCategories = async () => {
    
    console.log(rampData);
    rampData.forEach(async (category: any) => {
      if (category.mapped === false && category.quickbooksCategory !== null) {
        await axios.patch(
          `https://bc74-ag.fe-assignment.tk/category/rampCategories/${category.id}`,
          {
            quickbooksCategory: {
              id: category.quickbooksCategory.id,
            },
          }
        );
      }
    });
    setCategoryCount(prev=>prev+1)
  };
  console.log(rampData);
  return (
    <MuiModal
      showModel={showModal}
      modalHeader={<ModalHeader text={CATEGORTY_RULE_HEADER} />}
      modalBody={<CategoryRule setBool={setBool} setRampData={setRampData} />}
      modalFooter={
        <ModalFooter
          button1Text={BUTTON_1_TEXT}
          button2Text={BUTTON_2_TEXT}
          button2Disable={bool}
          onClickButton1={() => {
            setShowModal(false);
          }}
          onClickButton2={() => {
            setShowModal(false);
            handleRampCategories().catch((error) => {
              console.log(error);
            });
            setCategoryCount?.((pre) => pre + 1);
            setShowButtons?.(false)
          }}
        />
      }
      set={setShowModal}
      maxWidth="448px"
    />
  );
};
export default CategoryRuleModal;
