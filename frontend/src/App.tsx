import React from "react";
import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import theme from "./theme";
import SignInSignUpPage from "./pages/signInSignOutPage";
import LogoutPage from "./pages/logoutPage";
import Reporting from "./pages/reportingPage";
import RampCardsPage from "./pages/rampCardPage/index";
import DraftsPage from "./pages/draftsPage";
import PaymentsPage from "./pages/paymentsPage";
import BillGeneration from "./pages/billGeneration";
const App = () => 
<ThemeProvider theme={theme}>
<Routes>
  <Route path="/" element={<SignInSignUpPage signInPage/>}/>
  <Route path="/signin" element={<SignInSignUpPage signInPage/>}/>
  <Route path="/signup" element={<SignInSignUpPage signInPage={false} />}/>
  <Route path="/logout" element={<LogoutPage/>}/>
  <Route path="/accounting" element={<RampCardsPage/>}/>
  <Route path="/insights" element={<Reporting/>}/>
  <Route path="/reimbursement" element={<DraftsPage/>}/>
  <Route path="/payments" element={<PaymentsPage/>}/>
  <Route path="/billgenerate" element={<BillGeneration/>} />
</Routes>
</ThemeProvider>;

export default App;
