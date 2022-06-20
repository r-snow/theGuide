import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const mountNode = document.getElementById("app");
const root = createRoot(mountNode);
root.render(<App />);
