import * as React from "react";
import { render } from "react-dom";
import App from "./app";

if (module.hot) module.hot.accept()

render(<App />, document.getElementById("app"));