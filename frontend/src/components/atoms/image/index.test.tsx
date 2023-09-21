import React from "react";
import MuiImage from ".";
import { render,screen } from "@testing-library/react";
import Pdf from "../../../../public/images/pdf.svg"

test("render image", () => {
    const element = render(<MuiImage alt="not found image" src={Pdf}/>)
    expect(element).toBeDefined()
})