import { render,screen } from "@testing-library/react";
import React from "react"
import MuiTextfield from ".";
import '@testing-library/jest-dom'

test("Testing textfield",()=>{
    render(<MuiTextfield placeholder="Email Adress" testId="inputfield" />)
    const textfieldEl = screen.getByTestId("inputfield");
    expect(textfieldEl).toBeInTheDocument();
})
test('username input shuold be rendered', () => {
    render(<MuiTextfield placeholder="Email Adress" />);
    const userInputEle = screen.getByPlaceholderText(/Email Adress/i);
    expect(userInputEle).toBeInTheDocument();
  });
  test('password input shuold be rendered', () => {
    render(<MuiTextfield placeholder="password" />);
    const passwordInputEle = screen.getByPlaceholderText(/password/i);
    expect(passwordInputEle).toBeInTheDocument();
  });
 