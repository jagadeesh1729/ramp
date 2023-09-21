import { fireEvent, render,screen} from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import LogoutBody from ".";
import { BrowserRouter } from "react-router-dom";
describe("Testing Logout body",()=>{
    test("logout render or not",()=>{
        const element=render(<BrowserRouter><LogoutBody/></BrowserRouter>)
        const logout=screen.getByTestId("button")
        expect(logout).toBeEnabled()
        fireEvent.click(logout)
        expect(element).toBeDefined();
    })
})