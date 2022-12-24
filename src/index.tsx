import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider as QueryProvider, QueryClient } from 'react-query'
import "./index.scss";

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryProvider client={queryClient}>
      <App />
    </QueryProvider>
  </React.StrictMode>
);
