import React from "react";
import ReactDOM from "react-dom/client";

const element = <span>React element</span>


const Title = () => (
    <h1 className="heading" tabIndex="1">
     Namaste React using JSX
    </h1>
) ;



const HeadingComponent = () => (
<div id="container">
    {Title()}
    <h1 className="heading">Namaste React Functional Component</h1>
</div>  
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />) // render functional component