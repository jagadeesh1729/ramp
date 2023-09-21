import React from "react"
import RampCards from "../../components/organisms/rampCards";
import RampDashBoardTemplate from "../../components/templates/rampDashBoard"

const RampCardsPage = () => {
    return(
        <RampDashBoardTemplate body={<RampCards columns={[]} rows={[]} checkbox={true} autoHeight />} />
    )
}
export default RampCardsPage;