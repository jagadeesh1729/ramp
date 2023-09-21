import { render, screen, fireEvent } from "@testing-library/react";
import MuiButton from ".";
import React from "react";
import '@testing-library/jest-dom';
describe("Contained button", () => {
  test("renders correctly", () => {
    render(<MuiButton variant="contained" text="Contained" testId="button"/>);
    const result = screen.getByTestId("button");
    expect(result).toBeInTheDocument();
    expect(result).toHaveClass("MuiButton-root");
  });


  test("disable the button", () => {
    render(
        <MuiButton variant="contained" text="Contained" disabled={true} testId="button"/>
    );
    const result = screen.getByTestId("button");
    expect(result).toBeInTheDocument();
    expect(result).toHaveClass("Mui-disabled");
    expect(result).toBeDisabled();
  });
  test("button is clicked", async () => {
    const mock = jest.fn();
    render(
        <MuiButton variant="contained" text="Contained" testId="button" onClick={mock}/>
    );
    const result = screen.getByTestId("button");
    fireEvent.click(result);
    expect(mock).toBeCalledTimes(1);
  });
  test("CHecking Background Color when the button is disabled",()=>{
    render(
        <MuiButton variant="contained" text="Contained" disabled={true} testId="button"/>
    );
    const result = screen.getByTestId("button");
    expect(result).toHaveStyle(`
    background-color:#C0C8D2;
    color: white;
  `);
 })
  test("CHecking Background Color when the button is enabled",()=>{
    render(
        <MuiButton variant="contained" text="Contained"  testId="button"/>
    );
    const result = screen.getByTestId("button");
    expect(result).not.toHaveStyle(`
    background-color:#C0C8D2;
    color: white;
  `);
  })
});

