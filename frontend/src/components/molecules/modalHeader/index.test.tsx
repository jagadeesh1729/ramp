import { render } from "@testing-library/react";
import React from "react";
import ModalHeader from ".";

test("render component", () => {
    const element= render(<ModalHeader text="hello" />)
    expect(element).toBeDefined()
})