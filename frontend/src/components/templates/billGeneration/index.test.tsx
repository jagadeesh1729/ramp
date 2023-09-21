import { render } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import BillGenerationTemplate from ".";
import Invoice from "../../organisms/invoice";
import Banner from "../../molecules/banner";
import Add from "../../../../public/images/add.svg"
import { INVOICE_TEXT, SIGNUP } from "../../../utils/constants";
import { STAY_SIGNED } from "../../../utils/constants";
import { CONTINUE } from "../../../utils/constants";
describe("Bill Generation Template",()=>{
    test("Bill Generation Template rendering or not",()=>{
        const template=render(<BillGenerationTemplate leftSide={<Banner title={SIGNUP} description={STAY_SIGNED} buttonText={CONTINUE} open={true}/>} rightSide={<Invoice icon={Add} text={INVOICE_TEXT}/>}/>)
        expect(template).toBeDefined();
    })
})