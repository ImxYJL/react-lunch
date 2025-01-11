import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import theme from "./styles/theme.ts";
import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

async function enableMocking() {
  const { worker } = await import("./mocks/browser.js");

  return worker.start();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
      refetchOnWindowFocus: false,
    },
    mutations: {
      throwOnError: true,
    },
  },
});

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        {/* <Global styles={globalStyles(theme)} /> */}
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
});
