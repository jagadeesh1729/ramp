import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MuiSignInSignUpTemplate from ".";
import { BrowserRouter } from "react-router-dom";
describe("Testing Templates SignIn and SingOut", () => {
  test("SignIn template", () => {
    render(<BrowserRouter><MuiSignInSignUpTemplate signIn /></BrowserRouter>);
    const mouse = screen.getByTestId("mouseDownEvent");
    fireEvent.mouseDown(mouse);
    const emailInput = screen.getByTestId("email-input").querySelector("input");
    const passwordInput = screen.getByTestId("password-input").querySelector("input");
    fireEvent.change(emailInput!, {
      target: { value: "abc@gmail.com" },
    });
    fireEvent.change(passwordInput!, {
      target: { value: "AS45" },
    });
    fireEvent.change(emailInput!, {
      target: { value: "agmail.com" },
    });
    fireEvent.change(passwordInput!, {
      target: { value: "Asdfghj12" },
    });
    fireEvent.change(emailInput!, {
      target: { value: "abc@gmail.com" },
    });
    fireEvent.change(passwordInput!, {
      target: { value: "Asdfghj12" },
    });
    expect(emailInput).toBeDefined();
  });
  test("SignOut template", async () => {
    render(<BrowserRouter><MuiSignInSignUpTemplate signIn={false} /></BrowserRouter>);
    const mouse = screen.getByTestId("mouseDownEvent");
    fireEvent.mouseDown(mouse);
    const email = screen.getByTestId("email-input");
    const password = screen.getByTestId("password-input");
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    const emailInput = screen.getByTestId("email-input").querySelector("input");
    const userInput = screen.getByTestId("user-input").querySelector("input");
    const passwordInput = screen
      .getByTestId("password-input")
      .querySelector("input");
    fireEvent.change(emailInput!, {
      target: { value: "abc@gmail.com" },
    });
    fireEvent.change(passwordInput!, {
      target: { value: "AS45" },
    });
    fireEvent.change(emailInput!, {
      target: { value: "agmail.com" },
    });
    fireEvent.change(passwordInput!, {
      target: { value: "asdfgh12" },
    });
    fireEvent.change(userInput!, {
      target: { value: "Jagadeesh" },
    });

  });
  test("Button is enabled or not",()=>{
    render(<BrowserRouter><MuiSignInSignUpTemplate signIn={false} /></BrowserRouter>);
    const emailInput = screen.getByTestId("email-input").querySelector("input");
    const userInput = screen.getByTestId("user-input").querySelector("input");
    const passwordInput = screen
      .getByTestId("password-input")
      .querySelector("input");
      fireEvent.change(userInput!, {
        target: { value: "Jagadeesh" },
      });
      fireEvent.change(emailInput!, {
        target: { value: "jagadeeshkrishna@gmail.com" },
      });
      fireEvent.change(passwordInput!, {
        target: { value: "Asdfghj12sdf" },
      });
      const button=screen.getByTestId("button")
      expect(button).not.toBeEnabled()
      fireEvent.click(button)
      const dummy=screen.getByTestId("dummyButton")
      expect(dummy).toBeEnabled()
      fireEvent.click(dummy)
  })
});
