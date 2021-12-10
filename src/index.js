// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import styling from "./components/styling";
import { ThemeProvider } from "styled-components";

import { worker } from "./mocks/browser";
worker.start();

ReactDOM.render(<ThemeProvider theme={styling}><App /></ThemeProvider>, document.getElementById("root"));
