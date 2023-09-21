import {render} from "@testing-library/react"
import TextWithImage from "."
import aws from "../../../../public/images/aws.svg"
import React from "react"


test("render component", () => {
    const element = render(<TextWithImage img={aws} savings="$ 5,000.00" text="hello" />)
    expect(element).toBeDefined()
})