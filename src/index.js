import React from "react";
import ReactDOM from "react-dom/client";

import {GifExperApp} from "./GifExperApp"
import "./index.css"

// ReactDOM.render(
//     <App/>,                                                   //|
//     document.getElementById("root")                           //| React 17   
//     //document.querySelector("#root") es lo mismo q la linea 6  |
// )

// //React 18
// const idHtml = document.getElementById("root")
// const root = ReactDOM.createRoot(idHtml)
// root.render(<App/>)

//Otra forma

ReactDOM.createRoot(document.getElementById("root")).render(<GifExperApp />)
