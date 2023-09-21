import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
    structural: Palette["primary"];
    icons: Palette["primary"];
    stroke: Palette["primary"];
    highEmphasis: Palette["primary"];
    mediumEmphasis: Palette["primary"];
    lowEmphasis: Palette["primary"];
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    accent: PaletteOptions["primary"];
    structural: PaletteOptions["primary"];
    icons: PaletteOptions["primary"];
    stroke: PaletteOptions["primary"];
    highEmphasis: PaletteOptions["primary"];
    mediumEmphasis: PaletteOptions["primary"];
    lowEmphasis: PaletteOptions["primary"];
    neutral: PaletteOptions["primary"];
  }
  interface PaletteColor {
    700: string;
    500: string;
    300: string;
    100: string;
    50: string;
    blue100: string;
    red100: string;
    green100: string;
    green50: string;
  }
  interface SimplePaletteColorOptions {
    700?: string;
    500?: string;
    300?: string;
    100?: string;
    50?: string;
    blue100?: string;
    red100?: string;
    green100?: string;
    green50?: string;
  }
  interface TypographyVariants {
    body3: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    subtitle3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body3: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    subtitle3: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3?: true;
    caption1?: true;
    caption2?: true;
    subtitle3?: true;
  }
}
const theme = createTheme({
  palette: {
    primary: {
      "700": "#0055BC",
      "500": "#625AFA",
      "300": "#CFF5F6",
    },
    structural: {
      "100": "#EBEEF1",
      "50": "#F6F8FA",
    },
    icons: {
      "100": "#545969",
    },
    stroke: {
      "100": "#C0C8D2",
      "50": "#EBEEF1",
    },
    highEmphasis: {
      main: "#1A1B25",
    },
    mediumEmphasis: {
      main: "#404452",
    },
    lowEmphasis: {
      main: "#687385",
    },
    accent: {
      main: "#fff",
      blue100: "#0196ED",
      red100: "#ED6704",
      green100: "#006908",
      green50: "#D7F7C2",
    },
    neutral: {
      "100": "#E0E6EB",
      "300":"F5F5F5"
    },
  },
  typography: {
    fontFamily:"Segoe UI",
    h1: {
      fontSize: "28px",
      fontWeight: "700",
      lineHeight: "40px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    h2: {
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "40px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: "21.28px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    subtitle2: {
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "21.28px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    subtitle3: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "20px",
      letterSpacing: "0em",
      textAlign: "left",
    },

    body1: {
      fontSize: "14px",
      fontWeight: "700",
      lineHeight: "18.62px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    body2: {
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "24px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    body3: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "18.62px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    caption1: {
      fontSize: "12px",
      fontWeight: "600",
      lineHeight: "15.96px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    caption2: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "15.96px",
      letterSpacing: "0em",
      textAlign: "left",
    },
  },
});
const customTheme = createTheme(theme, {
  components: {},
});

export default customTheme;