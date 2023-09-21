import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import MuiBanner from ".";
import theme from "../../../theme/index";
import MuiTypography from "../../atoms/typography";
describe("Banner element", () => {
  test("checking Button  rendered or not ", () => {
    render(
      <MuiBanner
        title={
          <MuiTypography
            text="Save time with uploading invoice"
            variant="body2"
          />
        }
        description={
          <MuiTypography
            sx={{ color: theme.palette.lowEmphasis.main }}
            text="Upload an invoice on the right and Ramp will read the invoice and prefill the bill for you. Or alternatively, do it the old fashioned way :"
          />
        }
        buttonText={
          <MuiTypography
            text="Skip Prefilling"
            variant="body2"
            sx={{ color: theme.palette.mediumEmphasis.main }}
            testId="button"
          />
        }
        open={true}
        isClose={true}
      />
    );
    const image = screen.getByTestId("button");
    expect(image).toBeInTheDocument();
  });
  test("checking  title and description  rendered or not ", () => {
    render(
      <MuiBanner
        title={
          <MuiTypography
            text="Save time with uploading invoice"
            variant="body2"
            testId="title"
          />
        }
        description={
          <MuiTypography
            testId="description"
            sx={{ color: theme.palette.lowEmphasis.main }}
            text="Upload an invoice on the right and Ramp will read the invoice and prefill the bill for you. Or alternatively, do it the old fashioned way :"
          />
        }
        buttonText={
          <MuiTypography
            text="Skip Prefilling"
            variant="body2"
            sx={{ color: theme.palette.mediumEmphasis.main }}
          />
        }
        open={true}
        isClose={true}
      />
    );
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
    const description = screen.getByTestId("description");
    expect(description).toBeInTheDocument();
    const buttonClose=screen.getByTestId("buttonClose")
    fireEvent.click(buttonClose)
  });
});
