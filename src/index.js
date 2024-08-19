import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

function applyColorSchemePreference() {
  const darkExpected = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  if (darkExpected) {
    document.documentElement.classList.add("dark");
    document.documentElement.style.setProperty("color-scheme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.setProperty("color-scheme", "light");
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
