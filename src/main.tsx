import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import MainContent from "./components/MainContent";
import MainAppBar from "./components/MainAppBar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />

    <MainAppBar />
    <MainContent />
  </StrictMode>
);
