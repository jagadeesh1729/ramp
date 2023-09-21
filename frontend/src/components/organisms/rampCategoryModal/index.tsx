import React, { useState } from "react"
import MuiModal from "../modelLayout"
import ModalHeader from "../../molecules/modalHeader"
import { MODAL, RAMP_CATEGORTY_TITLE } from "../../../utils/constants"
import ModalFooter from "../../molecules/modalFooter"
import RampCategoryBody from "../rampCategoryBody"
import MuiTypography from "../../atoms/typography"
import theme from "../../../theme"
import axios from "axios"

interface ModalProps{
    showModal:boolean
    setShowModal:React.Dispatch<React.SetStateAction<boolean>>
}

const RampCategoryModal = ({showModal,setShowModal}:ModalProps) => {
    const [bool,setBool] = useState(true)
    const [data,setData] = useState<any>()
    const update = async () => {
        for (const item of data) {
          if (item !== "") {
            await axios.post('https://bc74-ag.fe-assignment.tk/category/rampCategories', {name: item});
          }
        }
      };
      
      const handleCreateButtonClick = () => {
        update()
          .then(() => {
            setShowModal(false);
          })
          .catch((error) => {
            console.error("Error creating Ramp category: ", error);
          });
      };
    return(
        <MuiModal 
            showModel={showModal}
            modalHeader={<ModalHeader text={RAMP_CATEGORTY_TITLE} />}
            modalBody={<RampCategoryBody setBool={setBool} setData={setData} />}
            modalFooter={<ModalFooter button1Text={<MuiTypography text={MODAL.cancel} sx={{color:theme.palette.mediumEmphasis.main}} />} button2Text={MODAL.create} button2Disable={bool} onClickButton1={()=>{setShowModal(false)}} onClickButton2={handleCreateButtonClick} />} 
            set={setShowModal}            
            />
    )
}
export default RampCategoryModal;
