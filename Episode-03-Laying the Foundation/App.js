  import React from "react";
  import  ReactDOM  from "react-dom/client";
 

 // React.createElement=> ReactElement(Object) => HTMLElement(render)

 /*   const heading = React.createElement("h1",
  *      {id:"heading"},
  *     "hello mohit! How are you?"
    );
   */
  


 // JSX -> HTML - Like or XML-Like Syntax.
 // JSX (Transpiled before it reaches the JS)->parcel->Babel(JS Compiler).
 // JSX => React.createElement => ReactElement-JS Object => HTMLElement(render).

 // React Element
    const jSXHeading =( 
              <h1 id="heading" className="xyz">
                Hello mohit you are writting in JSX
              </h1>
  );

  // React Component
  // Class Based Component -> OLD
  // Functional Based Component -> NEW

  const title = (
         <h3>this is title </h3>
  );

  // React Functional Component ->it is just a normal JavaScript=> return a piece of JSX
      const HeadingComponent1 = () => {
           return <h1 id="xyz" className="heading1">
            Namaste React Functional Component1
          </h1>
      };
  // shortHand syntax

  // this is called component composition=> a component in another component

   const number = 1000;

  const HeadingComponent2 = () => (
       <div id="container">  
            <h2>{number+200}</h2> 
            {title}   
            {HeadingComponent1()}
            <HeadingComponent1/> 
            <HeadingComponent1></HeadingComponent1>    
        <h1 id="uvw" className="heading2">
             Namaste React Functional Component2
        </h1>
        </div>
  );

  // <HeadingComponent1> ,{HeadingComponent1()} and <HeadingComponent1></HeadingComponent1> these are same.
    
   // if there are multiple lines then use () .      

   const root = ReactDOM.createRoot(document.getElementById("root"));

  //  root.render(heading);

   root.render(jSXHeading);

  //  console.log(heading); // Object

   console.log(jSXHeading);

   // How to render React Components
    //  root.render(<HeadingComponent1/>);
     root.render(<HeadingComponent2/>);