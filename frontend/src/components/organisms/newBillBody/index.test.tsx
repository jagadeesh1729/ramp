import { fireEvent,render,screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; 
import React from "react";
import NewBillBody from ".";

test("render Typography", () => {
    const element= render(<NewBillBody uploaded={true} billData={[]}/>)
    expect(element).toBeDefined()
    const input = screen.getByPlaceholderText(/Select/i);
    fireEvent.click(input)
    const title = screen.getByText("ACH (Direct deposit)")
    fireEvent.click(title)
})


test("render Typography", () => {
    const element= render(<NewBillBody uploaded={true} setBody={jest.fn()} billData={[]}/>)
    expect(element).toBeDefined()
    const result = screen.getByRole("button",{name:"Review"});
    fireEvent.click(result);
})

test("render Typography", () => {
    const element= render(<NewBillBody uploaded={false} setBody={jest.fn()} billData={[]}/>)
    expect(element).toBeDefined()
})
