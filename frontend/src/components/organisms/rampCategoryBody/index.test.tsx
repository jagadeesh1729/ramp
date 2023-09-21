import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import RampCategoryBody from ".";


test("render component", () => {
    const element= render(<RampCategoryBody  />)
    expect(element).toBeDefined()
})

test("click add button", () => {
    render(<RampCategoryBody  />)
    const button = screen.getByRole("button",{name:"not found icon Add new"})
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    const textFieldList = screen.getAllByPlaceholderText("Enter Ramp category")
    expect(textFieldList).toHaveLength(4)
    fireEvent.change(textFieldList[0],{target:{value:"hello"}})
})

test("change textfield content", () => {
    const mockSetBool = jest.fn();
    render(<RampCategoryBody  setBool={mockSetBool}/>)
    const textFieldList = screen.getAllByPlaceholderText("Enter Ramp category")
    fireEvent.change(textFieldList[0],{target:{value:"hello"}})
})