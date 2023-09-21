/* eslint-disable @typescript-eslint/no-empty-function */
import { Grid } from "@mui/material";
import React, { useState,createContext, Dispatch, SetStateAction, useMemo } from "react";
import NavBar from "../../organisms/navBar";
import Header from "../../molecules/header";
interface RampDashBoardTemplateProps {
  body: React.ReactNode;
}
export const UserContext = createContext<{showModal:boolean, setShowModal:Dispatch<SetStateAction<boolean>>}>({showModal:false,setShowModal:() => {}});
export const UserContextModal = createContext<{showModalRamp:boolean, setShowModalRamp:Dispatch<SetStateAction<boolean>>}>({showModalRamp:false,setShowModalRamp:() => {}});

const RampDashBoardTemplate = ({ body }: RampDashBoardTemplateProps) => {
  const [showModal, setShowModal] = useState(false)
  const [showModalRamp, setShowModalRamp] = useState(false)
  const value = useMemo(() => ({showModal,setShowModal}), [showModal, setShowModal]);
  const value2= useMemo(()=> ({showModalRamp,setShowModalRamp}), [showModalRamp, setShowModalRamp]);
  return (
    <UserContext.Provider value={value}>
    <UserContextModal.Provider value={value2}>
    <Grid container direction="column">
      <Grid item>
        <Header />
       
      </Grid>
      <Grid item>
        <NavBar />
      </Grid>
      <Grid item> 
          {body}
       
         </Grid>
    </Grid>
    </UserContextModal.Provider>
    </UserContext.Provider>
  );
};

export default RampDashBoardTemplate;