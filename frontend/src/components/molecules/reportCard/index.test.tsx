import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import MuiReportCard from ".";
describe("Report Card ", () => {
  test("checking  all components  are rendering are not", () => {
    const { getByText } = render(
      <MuiReportCard
        title="Test title"
        description="Test description"
        buttonText="Test button text"
        textWithImage={<div>Test text with image</div>}
      />
    );
    const title = getByText("Test title");
    const description = getByText("Test description");
    const button = getByText("Test button text");
    const textWithImage = getByText("Test text with image");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(textWithImage).toBeInTheDocument();
  });
});
