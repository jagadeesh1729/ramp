import React from "react"
import PaymentsBody from "../../components/organisms/paymentsBody"
import RampDashBoardTemplate from "../../components/templates/rampDashBoard"

const PaymentsPage = () => {
    return( <RampDashBoardTemplate body={<PaymentsBody checkbox={true} autoHeight />} /> ) 
}
export default PaymentsPage;