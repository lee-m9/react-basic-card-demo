import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const centerContentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

ReactDOM.render(
    <div className="container-fluid" style={centerContentStyle}>
        <App />
    </div>,
    document.querySelector("#root")
);
