import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import App from "./App";
import { RecoilRoot } from "recoil";

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <GlobalStyles />
            <App />
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById("root")
);
