import React, { useEffect, useState } from "react"
import {ComponentStack,Stack,TextStack} from "./styles"
import theme from "../../../theme/index"
import MuiTypography from "../../atoms/typography"
import MuiButton from "../../atoms/button"
import Pluse from "../../../../public/images/pluse.svg"
import MuiIcons from "../../atoms/icon"
import Cancel from "../../../../public/images/cancel.svg"
import TextFieldWithLabel from "../../molecules/inputfieldWithLabel"
import {RAMP_CATEGORTY_LABEL,
    RAMP_CATEGORTY_PLACEHOLDER,
    ICON_NOT_FOUND,
    RAMP_CATEGORTY_DESCRIPTION,
    RAMP_CATEGORTY_HEADER,
    RAMP_CATEGORTY_BUTTON} from "../../../utils/constants"

interface RampProps{
    setBool?:React.Dispatch<React.SetStateAction<boolean>>
    setData?:React.Dispatch<any>
}
interface FormValues {
    [key: string]: string;
  }
const RampCategoryBody = ({setBool,setData}:RampProps) => {
    const [formValues, setFormValues] = useState<FormValues>({["Field 1"]:'',["Field 2"]:'',["Field 3"]:''});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        formValues[name]=value;
        const updatedFormValues = {...formValues};
        setFormValues(updatedFormValues);
        if(setData) setData(Object.values(formValues))
      };
      useEffect(() => {
        setBool?.(!(Object.values(formValues).some((value) => value !== '')))
      },[formValues])
    const [components, setComponents] = useState([
        <TextFieldWithLabel key={1} name="Field 1" onChange={handleChange} label={RAMP_CATEGORTY_LABEL}  placeholder={RAMP_CATEGORTY_PLACEHOLDER} icon={<MuiIcons src={Cancel} alt={ICON_NOT_FOUND} />} sx={{maxWidth:"360px"}}  />,
        <TextFieldWithLabel key={2} name="Field 2" onChange={handleChange} label={RAMP_CATEGORTY_LABEL}   placeholder={RAMP_CATEGORTY_PLACEHOLDER} icon={<MuiIcons src={Cancel} alt={ICON_NOT_FOUND} />} sx={{maxWidth:"360px"}} />,
        <TextFieldWithLabel key={3} name="Field 3" onChange={handleChange} label={RAMP_CATEGORTY_LABEL}  placeholder={RAMP_CATEGORTY_PLACEHOLDER} icon={<MuiIcons src={Cancel} alt={ICON_NOT_FOUND} />} sx={{maxWidth:"360px"}} />
        ]);

    const addComponent = () => {
        const newComponents = [...components,<TextFieldWithLabel key={components.length+1} name={`Field ${components.length+1}`} onChange={handleChange} label={RAMP_CATEGORTY_LABEL} placeholder={RAMP_CATEGORTY_PLACEHOLDER} icon={<MuiIcons src={Cancel} alt={ICON_NOT_FOUND} />} sx={{maxWidth:"360px"}} />];
        setFormValues({ ...formValues, [`Field ${components.length + 1}`]: '' });
        setComponents(newComponents);
      };
      
    return(
        <Stack>
            <TextStack>
                <MuiTypography text={RAMP_CATEGORTY_HEADER} variant="body2" sx={{color:theme.palette.highEmphasis.main}} />
                <MuiTypography text={RAMP_CATEGORTY_DESCRIPTION} variant="body3" sx={{color:theme.palette.highEmphasis.main}} />
            </TextStack>
            <ComponentStack>
                {components.map((component) => (
                    <div key={component.key}>{component}</div>
                ))}
                <MuiButton text={<MuiTypography text={RAMP_CATEGORTY_BUTTON} sx={{color:theme.palette.primary[500]}} />} startIcon={<MuiIcons src={Pluse} alt={ICON_NOT_FOUND}/>} variant="text" onClick={addComponent} />
            </ComponentStack>
        </Stack>
    )
}

export default RampCategoryBody;