import { render } from "@testing-library/react";
import {fireEvent, getByText } from "@testing-library/dom";
import MerchantRule from ".";
import React from "react";

describe("MerchantRule component", () => {
  test("renders MerchantRule without any errors", () => {
    const { container,getByTestId } = render(
      <MerchantRule
        name="Example Name"
        category="Example Category"
        transactions={10} />
    );
    const unsyncedTransactions = getByText(
      container,
      "10 unsynced transactions."
    );
    expect(unsyncedTransactions).toBeDefined();
    const labelElements = getByTestId('dropdown').querySelector("input");
  fireEvent.change(labelElements!,{
    target:{
      value:"Travel"
    }
  })
    
  });
});
