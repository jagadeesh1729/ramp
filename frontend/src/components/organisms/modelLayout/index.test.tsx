import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import MuiModal from ".";
import ModalHeader from "../../molecules/modalHeader/index";
import ModalFooter from "../../molecules/modalFooter";
describe("Modal template", () => {
  test("Rendering Template or not", () => {
    const abc = jest.fn();
    const template = render(
      <MuiModal
        showModel={true}
        modalHeader={<ModalHeader text="Hello" />}
        modalFooter={<ModalFooter button1Text={"Cancel"} button2Text={"Create"} button2Disable/>}
        set={abc}
      />
    );
    expect(template).toBeDefined();
  });
  test("Closing Modal ", () => {
    const abc = jest.fn();
    render(<MuiModal set={abc} showModel={true} />);
    const modal = screen.queryByTestId("test-modal");
    const overlay = screen.getByTestId("overlay");
    fireEvent.click(overlay);

    expect(modal).not.toBeVisible();
  });
});
