import { ThemeProvider } from '@emotion/react'
import theme from "../src/theme/index"
import "./style.css"
import React from 'react';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const decorators =[
  (Story) => <ThemeProvider theme={theme}>{Story()}</ThemeProvider>,
];