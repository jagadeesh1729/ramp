import React from "react"
import RampDashBoardTemplate from "../../components/templates/rampDashBoard"
import ReportingBody from "../../components/organisms/reportingBody"

const Reporting = () => {
    return(
        <RampDashBoardTemplate body={<ReportingBody  />} />
    )
}


export default Reporting;