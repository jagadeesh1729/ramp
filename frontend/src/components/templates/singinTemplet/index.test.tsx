import { render } from "@testing-library/react";
import React from "react";
import SigninTemplate from ".";

test("render templet", () => {
    const element= render(<SigninTemplate />)
    expect(element).toBeDefined()
})