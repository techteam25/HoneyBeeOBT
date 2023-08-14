import type { AppProps } from "next/app";
import "../styles/burger.css";
import "../styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import HamburgerMenu from "@/components/menus/hamburger";
import "./globals.css";
import Help from "@/components/menus/help";

export default function App({ Component, pageProps }: AppProps) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <title>HoneyBee OBT</title>
      <HamburgerMenu />
      <Help />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
