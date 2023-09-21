import React from "react";
import { render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import SignInSignUpPage from ".";
import {  BrowserRouter } from "react-router-dom";
describe("SignInSignUp test", () => {
  test("Rendered SignIn or not", () => {
   const element = render(<BrowserRouter><SignInSignUpPage signInPage /></BrowserRouter>);
    expect(element).toBeDefined();
  });
  test("Rendered SignUp or not", () => {
    const element = render(<BrowserRouter><SignInSignUpPage signInPage={false} /></BrowserRouter>);
    expect(element).toBeDefined();
  });
});
