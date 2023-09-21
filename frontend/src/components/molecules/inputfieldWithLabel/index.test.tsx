import {render} from "@testing-library/react"
import TextFieldWithLabel from "."
import React from "react"

test("render component", () => {
    const element = render(<TextFieldWithLabel label="Ramp category" placeholder="enter ranp category" />)
    expect(element).toBeDefined()
})