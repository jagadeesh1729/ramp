import { fireEvent, render,screen, waitFor} from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import AvatorPopOver from ".";
import { BrowserRouter } from "react-router-dom";
describe("AvatarPopOver", () => {
  it("should display avatar and dropdown menu", () => {
    const { getByTestId, getByText, queryByText } = render(<BrowserRouter><AvatorPopOver /></BrowserRouter>);
    const avatarButton = getByTestId("avatar-button");

    expect(avatarButton).toBeInTheDocument();

    fireEvent.click(avatarButton);

    const dropdownItem1 = getByText("Create Ramp category");
    const dropdownItem2 = getByText("View Ramp category");
    const dropdownItem3 = getByText("Delete Ramp category");
    const dropdownItem4 = getByText("My Ramp");

    expect(dropdownItem1).toBeInTheDocument();
    expect(dropdownItem2).toBeInTheDocument();
    expect(dropdownItem3).toBeInTheDocument();
    expect(dropdownItem4).toBeInTheDocument();

    fireEvent.click(avatarButton);
    fireEvent.click(dropdownItem1)
    expect(queryByText("Create Ramp category")).not.toBeNull();
    expect(queryByText("View Ramp category")).not.toBeNull();
    expect(queryByText("Delete Ramp category")).not.toBeNull();
    expect(queryByText("My Ramp")).not.toBeNull();
  });
  it("should display avatar and dropdown menu, and close when backdrop is clicked", () => {
    const setAnchorEl = jest.fn();
    const { getByTestId, queryByText } = render(<BrowserRouter><AvatorPopOver /></BrowserRouter>);

    const avatarButton = getByTestId("avatar-button");
    fireEvent.click(avatarButton);

    const backdrop = getByTestId("backdrop");
    fireEvent.click(backdrop);

    const dropdownItems = [
      "Create Ramp category",
      "View Ramp category",
      "Delete Ramp category",
      "My Ramp",
    ];

    dropdownItems.forEach((item) => {
      expect(queryByText(item)).not.toBeNull();
    });
    expect(setAnchorEl).toHaveBeenCalledTimes(0);
  });
  it("should display avatar and dropdown menu, and close when backdrop is clicked", async () => {
    render(<BrowserRouter><AvatorPopOver /></BrowserRouter>);
    const button = screen.getByTestId('avatar-button');  
    fireEvent.click(button)
    const popover = screen.getByTestId('backdrop');
    

  
  });

});
