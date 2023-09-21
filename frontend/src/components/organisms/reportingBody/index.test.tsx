import { render } from "@testing-library/react";
import React from "react";
import ReportingBody from ".";

test("render component", () => {
    const element= render(<ReportingBody />)
    expect(element).toBeDefined()
})