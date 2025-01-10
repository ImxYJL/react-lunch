import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import theme from "./styles/theme.ts";
import { ThemeProvider } from "@emotion/react";

async function enableMocking() {
  const { worker } = await import("./mocks/browser.js");

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
});
