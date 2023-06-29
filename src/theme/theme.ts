// theme.tsx
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0000CD",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#ff3333",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;
