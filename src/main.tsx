import "@/index.css";
import App from "@/app.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/extends/theme-provider";

import { Provider } from "react-redux";
import { store } from "@/store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
        <Toaster />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
