import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import NavBar from ".";
import { BrowserRouter } from "react-router-dom";
describe("Testing NavBar", () => {
  test("Checking NavBar", async () => {
    render(<BrowserRouter><NavBar /></BrowserRouter>);
    const insightTab = screen.getByText(/Insights/i);
    const transactionTab = screen.getByText(/Transaction/i);
      expect(insightTab).toHaveClass(
      "MuiTypography-root MuiTypography-body2 css-qmqicp-MuiTypography-root"
    );
    fireEvent.click(transactionTab);
    expect(transactionTab).toHaveClass(
      "MuiTypography-root MuiTypography-body2 css-qmqicp-MuiTypography-root"
    );
  });
  test("Checking menuBar",async ()=>{
    render(<BrowserRouter><NavBar /></BrowserRouter>);
    const reimbursementTab=screen.getAllByText(/reimbursement/i)[0]
    expect(reimbursementTab).toBeEnabled()
    fireEvent.click(reimbursementTab)
      const menu = screen.getByTestId("menu")
      expect(menu).toBeVisible();
      const draftMenuItem = screen.getByTestId("Draft");
      expect(draftMenuItem).toBeEnabled()
      fireEvent.click(draftMenuItem)
      const PaymentsMenuItem=screen.getByTestId("Payments")
      expect(draftMenuItem).toHaveClass('Mui-selected');
      expect(PaymentsMenuItem).toBeEnabled()
      fireEvent.click(PaymentsMenuItem)
      expect(window.location.pathname).toBe("/payments");
      expect(PaymentsMenuItem).toHaveClass('Mui-selected')
      expect(draftMenuItem).not.toHaveClass('Mui-selected');



  })
});
