import {render} from "@testing-library/react"
import TextWithIcon from "."
import React from "react"

test("render component", () => {
    const element = render(<TextWithIcon text1='H&M' text2='casio' variant1={"h1"} variant2={"h1"} />)
    expect(element).toBeDefined()
})