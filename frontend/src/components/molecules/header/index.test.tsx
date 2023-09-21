import {render} from "@testing-library/react"
import Header from "."
import React from "react"
import { BrowserRouter } from "react-router-dom"

test("render component", () => {
    const element = render(<BrowserRouter><Header /></BrowserRouter>)
    expect(element).toBeDefined()
})