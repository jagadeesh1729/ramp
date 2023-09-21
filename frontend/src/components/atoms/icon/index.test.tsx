import { render, screen } from "@testing-library/react";
import eye from "../../../../public/images/eye.svg";
import MuiIcons from ".";
import React from "react";
import '@testing-library/jest-dom'

describe("Icon element", () => {
  test("renders correctly", () => {
    render(<MuiIcons src={eye} alt="hidden icon" />);
    const imageElement = screen.getByRole('img');

    expect(imageElement).toBeInTheDocument();
  });

  test("alt attribute is renderd correctly", () => {
    render(<MuiIcons src={eye} alt="hidden Icon" />);
    expect(screen.getByAltText(/hidden icon/i)).toBeInTheDocument();
  });

  test("invalid attribute", () => {
    render(<MuiIcons src={eye} alt="hidden Icon" />);
    expect(screen.getByRole('img')).not.toHaveAttribute("alt", "eye icon");

  });

  test("image rendered with proper source", () => {
    render(<MuiIcons src={eye} alt="hidden Icon" />);
    expect(screen.getByRole('img')).toHaveAttribute("src", eye);

  });
});
