import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Hello } from "./hello/hello";

const container = document.getElementById("app-root")!;
const root = createRoot(container);
root.render(<Hello></Hello>);
