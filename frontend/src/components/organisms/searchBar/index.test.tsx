import React from "react";
import {
  render,
  fireEvent,
} from "@testing-library/react";
import SearchBar from ".";
import axios from "axios";

const mockData = [
  {
    merchant: {
      name: "Brand1",
    },
  },
  {
    merchant: {
      name: "Brand2",
    },
  },
  {
    merchant: {
      name: "Brand3",
    },
  },
];

const mockRows1 = [
  {
    merchant: {
      name: "Brand4",
    },
  },
];

const mockSetRows1 = jest.fn();
const mockSetChipData = jest.fn();
const mockSetChip = jest.fn();

describe("SearchBar Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  jest.mock("axios");
  it("makes an api call", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({ ok: true });
    const { getByTestId, getByPlaceholderText ,getAllByText} = render(
      <SearchBar
        data={mockData}
        rows1={mockRows1}
        setChipData={jest.fn()}
        setChip={jest.fn()}
        setRows1={jest.fn()}
        isChip={false}
        setIsChip={jest.fn()}
      />
    );

    const searchInput = getByPlaceholderText("Search cards");
    fireEvent.change(searchInput, { target: { value: "Brand" } });

    const closePanel = getAllByText('Brand1')[1];
    fireEvent.click(closePanel);

  });
});
