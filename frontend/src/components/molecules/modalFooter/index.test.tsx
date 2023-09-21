import { render } from "@testing-library/react";
import React from "react";
import ModalFooter from ".";

test("render component", () => {
    const element= render(<ModalFooter button1Text='Cancel' button2Text="Create"  />)
    expect(element).toBeDefined()
})