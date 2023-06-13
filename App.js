import React from "react";
import ReactDOM  from "react-dom/client";
// const parent = React.createElement(
//     "div",{id:"parent"},
//    [ React.createElement("div",{id:"child"}
//    ,[React.createElement("h1",{},"I'm h1 tag"
//    ),React.createElement("h2",{},"I'm h2 tag"
//    )]), React.createElement("div",{id:"child2 "}
//    ,[React.createElement("h1",{},"I'm h1 tag"
//    ),React.createElement("h2",{},"I'm h2 tag"
//    )])]
    
//     )


// JSX (Transpiled before it reaches ths JS) - PARCEL - BABEL

// JSX => Babel transpiles it to React.createElement=>ReactElement - JS Object => HTML Element(render)

const Jsxheading =()=> (
        <h1 className="root">
                        Namaste React using JSX heading
         </h1>);


const FunctionalComponent  = () => (
        <div id="container">
                <Jsxheading/>
                <h2 className="headding">Namaste React Functional component</h2>
        </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent/>)

