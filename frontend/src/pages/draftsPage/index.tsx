import React from "react"
import DraftsBody from "../../components/organisms/draftsBody"
import RampDashBoardTemplate from "../../components/templates/rampDashBoard"

const DraftsPage = () => {
    return( <RampDashBoardTemplate body={<DraftsBody checkbox={true} autoHeight />} /> ) 
}
export default DraftsPage;