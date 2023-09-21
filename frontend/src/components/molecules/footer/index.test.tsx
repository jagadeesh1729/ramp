import {render} from "@testing-library/react"
import Footer from "."
import React from "react"

test("render component", () => {
    const element = render(<Footer count={"919 results"} />)
    expect(element).toBeDefined()
})