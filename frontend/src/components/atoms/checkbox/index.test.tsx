import { fireEvent, render } from "@testing-library/react";
import React from "react";
import MuiCheckbox from ".";

test("render Typography", () => {
    const element= render(<MuiCheckbox label="one" />)
    expect(element).toBeDefined()
})

test("check clicking checkbox", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<MuiCheckbox onChange={onChange} />);
    fireEvent.click(getByRole("checkbox"));
    expect(onChange).toHaveBeenCalled();
  });
