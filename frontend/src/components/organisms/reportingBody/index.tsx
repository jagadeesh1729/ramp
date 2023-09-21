import React, { Dispatch, SetStateAction, useContext } from "react"
import {Body,
        BoxStack,
        BarStack,
        LowerBody,
        SearchStack,
        TextStack,
        UpperBody,} from "./styles"
import theme from "../../../theme/index"
import MuiTypography from "../../atoms/typography"
import Reporting from "../../../../public/images/reporting.svg"
import Find from "../../../../public/images/find.svg"
import Drop from "../../../../public/images/dropdown.svg"
import Graph from "../../../../public/images/graph.svg"
import Aws from "../../../../public/images/aws.svg";
import Calender from "../../../../public/images/calender.svg";
import MuiImage from "../../atoms/image"
import MuiReportCard from "../../molecules/reportCard"
import TextWithImage from "../../molecules/textWithImage"
import MuiButton from "../../atoms/button"
import MuiIcons from "../../atoms/icon"
import DropDown from "../dropdown"
import MuiTextfield from "../../atoms/textfield"
import {REPORTING_BODY,NOT_FOUND} from "../../../utils/constants"
import RampCategoryModal from "../rampCategoryModal"
import { UserContext } from "../../templates/rampDashBoard"

const ReportingBody = ()=>{
    const {showModal,setShowModal} = useContext<{showModal:boolean, setShowModal:Dispatch<SetStateAction<boolean>>}>(UserContext);  
  const component = <MuiReportCard 
      title={REPORTING_BODY.card.title}
      description={REPORTING_BODY.card.description}
      buttonText={REPORTING_BODY.card.button}
      textWithImage={<TextWithImage
          img={Aws}
          text={REPORTING_BODY.card.imageText}
          savings={REPORTING_BODY.card.savings1}
        />} 
    />
    return(
        <>    
        <Body>
            <UpperBody>
                <TextStack>
                    <MuiTypography text={REPORTING_BODY.heading} variant="h1" sx={{color:theme.palette.highEmphasis.main}} />
                    <MuiImage src={Reporting} alt={NOT_FOUND.image} />
                </TextStack>
                <BoxStack>
                    <MuiReportCard 
                        title={REPORTING_BODY.partner.title}
                        description={REPORTING_BODY.partner.description}
                        buttonText={REPORTING_BODY.partner.button}
                        textWithImage={<TextWithImage
                            img={Aws}
                            text={REPORTING_BODY.partner.imageText}
                            savings={REPORTING_BODY.partner.savings}
                          />} 
                    />
                    {component}
                    {component}
                    {component}
                </BoxStack>
            </UpperBody>
            <LowerBody>
                <SearchStack>
                    <BarStack>
                      <MuiTextfield placeholder={REPORTING_BODY.content.placeholder} sx={{width:"456px"}} search={true} size="small" iconStart={<MuiIcons src={Find} alt={NOT_FOUND.icon} />}/>
                      <DropDown label={REPORTING_BODY.content.label1} menuItems={[]} width="284px" />
                    </BarStack>
                    <BarStack>
                        <MuiButton variant="contained" text={<MuiTypography variant="body2" text={REPORTING_BODY.content.text} sx={{color:theme.palette.lowEmphasis.main}} />} startIcon={<MuiIcons src={Calender} alt={NOT_FOUND.icon}/>} 
                        sx={{
                            color: theme.palette.mediumEmphasis.main,
                            background: theme.palette.accent.main,
                            borderRadius: "4px",
                            "&:hover": {backgroundColor:theme.palette.accent.main},
                            boxShadow: '0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)' }} />
                        <MuiButton variant="contained" text={<MuiTypography variant="body2" text={REPORTING_BODY.content.label2} sx={{color:theme.palette.lowEmphasis.main}} />} endIcon={<MuiIcons src={Drop} alt={NOT_FOUND.icon}/>} 
                        sx={{
                            color: theme.palette.mediumEmphasis.main,
                            background: theme.palette.accent.main,
                            borderRadius: "4px",
                            "&:hover": {backgroundColor:theme.palette.accent.main},
                            boxShadow: '0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)' }} />
                    </BarStack>
                </SearchStack>
                <MuiImage src={Graph} alt={NOT_FOUND.image} />
                
            </LowerBody>
        </Body>
        {showModal===true?
        <RampCategoryModal showModal setShowModal={setShowModal}/>:''
        }
        </>
    )
}

export default ReportingBody;