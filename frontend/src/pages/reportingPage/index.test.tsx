import { render } from "@testing-library/react";
import React from "react";
import Reporting from ".";
import { BrowserRouter } from "react-router-dom";

test("render component", () => {
    const element= render(<BrowserRouter><Reporting /></BrowserRouter>)
    expect(element).toBeDefined()
})