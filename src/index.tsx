import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider as QueryProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import "./index.scss";
import { StateContextProvider } from "./utils/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
    }
  }
})

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryProvider client={queryClient}>
      <StateContextProvider>
      <App />
      </StateContextProvider>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryProvider>
  </React.StrictMode>
);
