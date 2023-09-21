import {render} from "@testing-library/react"
import DropdownWithLabel from "."
import React from "react"

test("render component", () => {
    const element = render(<DropdownWithLabel  label={'Quickbooks category'}
    text={'Enter Quickbooks category'}
    itemsList={['Expense', 'Advertising', 'Travel']} />)
    expect(element).toBeDefined()
})