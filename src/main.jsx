import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";

function applyColorSchemePreference() {
  const darkExpected = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  if (darkExpected) {
    document.documentElement.classList.remove("latte");
    document.documentElement.classList.add("mocha");
  } else {
    document.documentElement.classList.remove("mocha");
    document.documentElement.classList.add("latte");
  }
}

// set listener to update color scheme preference on change
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "light";
    console.log(newColorScheme);
    applyColorSchemePreference();
  });

// check color scheme preference on page load
applyColorSchemePreference();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
