import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const Title = () => (<h1 id ="heading">Component using JSX.</h1>)

//React Element
const lm = <span>React Element outside</span>
const title = <h1 id ="heading">
    {lm}. React Element.
</h1>;


//Using normal JavaScript function
// const Title = function(){
//     return (
//         <h1 id ="heading">Component using JSX.</h1>
//     )
// }

//React Component
//Class based component - OLD way
//Functional component - NEW way


//Functional component
//Component composition
const HeadingComponent = () => (
    <div id= "container">
        {title}
        { Title() }
        <Title />
        <Title></Title>
        <h1 id = "heading">Component composition and functional component.</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);