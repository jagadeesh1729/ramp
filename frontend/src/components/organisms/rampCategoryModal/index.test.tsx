import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import RampCategoryModal from ".";


test("render component", () => {
    const element= render(<RampCategoryModal showModal={true} setShowModal={function (value: React.SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
    } }  />)
    expect(element).toBeDefined()
})

test("click add button", () => {
    render(<RampCategoryModal showModal={true} setShowModal={jest.fn()}  />)
    const button = screen.getByRole("button",{name:"not found icon Add new"})
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    const textFieldList = screen.getAllByPlaceholderText("Enter Ramp category")
    expect(textFieldList).toHaveLength(4)
    fireEvent.change(textFieldList[0],{target:{value:"hello"}})
    expect(screen.getByDisplayValue("hello")).toBeInTheDocument()
    const create = screen.getByRole("button",{name:"Create rule"})
    expect(create).toBeEnabled()
    fireEvent.click(create)
})

test("close modal", () => {
    render(<RampCategoryModal showModal={true} setShowModal={jest.fn()}  />)
    const cancel = screen.getByRole("button",{name:"Cancel"})
    fireEvent.click(cancel)
})