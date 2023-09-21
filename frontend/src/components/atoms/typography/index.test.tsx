import { render } from "@testing-library/react";
import React from "react";
import MuiTypography from ".";

test("render Typography", () => {
    const element= render(<MuiTypography text="hello" variant="h1" />)
    expect(element).toBeDefined()
})