import CreateBill from ".";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

describe("CreateBill component", () => {
  const mockProps = {
    amount: 100,
    name: "John Doe",
    paymentMethod: "Credit Card",
    scheduledDate: "2023-04-25",
    estimatedArrival: "2023-04-26",
    sendTo: "Jane Doe",
    addedBy: "Admin",
    withdrawFrom: "Savings Account",
    savingAccount: "5000",
  };

  it("renders correct amount and name", () => {
    render(<CreateBill handleSubmit={jest.fn() } {...mockProps} />);
    const amountElement = screen.getByText("Pay");
    const nameElement = screen.getByText("to");
    expect(amountElement).toBeDefined();
    expect(nameElement).toBeDefined();
  });

  it("renders correct scheduled date and estimated arrival", () => {
    render(<CreateBill handleSubmit={jest.fn() } {...mockProps} />);
    const estimatedArrivalElement = screen.getByText("Estimated arrival");
    expect(estimatedArrivalElement).toHaveTextContent("Estimated arrival");
  });
});
