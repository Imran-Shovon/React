import React from "react";
import ReactDOM from "react-dom/client";

//React Element
//React.createElement => React Element -> Object => HTMLElement(render)
const heading = React.createElement("h1", { id: "heading"}, "This is a React Element");
console.log(heading);


//JSX(transpiled before it reaches the JS engine) by Parcel(Babel do this) - is not HTML in JavaScript --XML like syntax
//JSX is a syntax extension for JavaScript that looks similar to HTML
//JSX => Babel transpiled it to React.createElement => React Element -> JS Object => HTMLElement(render)
const headingJSX = (<h1 id="heading" className="head">
    This is a JSX Element
    </h1>);
console.log(headingJSX);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingJSX);