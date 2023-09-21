import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LogoutPage from ".";
import { BrowserRouter } from "react-router-dom";
describe("Logout test", () => {
  test("Rendered SignUp or not", () => {
    const element = render(<BrowserRouter><LogoutPage /></BrowserRouter>);
    expect(element).toBeDefined();
  });
});
