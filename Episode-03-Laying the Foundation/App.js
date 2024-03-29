  import React from "react";
  import  ReactDOM  from "react-dom/client";
 

 // React.createElement=> ReactElement(Object) => HTMLElement(render)
         // shortHand syntax to create React Element:
            // const heading = <h1 id="heading">hello mohit! How are you?</h1>
           // console.log(heading)
  


 // JSX -> HTML - Like or XML-Like Syntax.

 // JSX (Transpiled before it reaches the JS Engine)->parcel->Babel(JS Compiler).

 // JSX => React.createElement => ReactElement-JS Object => HTMLElement(render).

 // React Element
     const jSXHeading =( 
              <h1 id="heading" className="xyz">
                Hello mohit you are writting in JSX
              </h1>
       );

  const title = (
         <h3>this is title </h3>
  );

 
  // Class Based Component -> OLD
  // Functional Based Component -> NEW


  // React Functional Component ->it is just a normal JavaScript function => return a piece of JSX


    // Functional Based Component:
         const HeadingComponent1 = () => {
                   return ( 
                          <h1 id="xyz" className="heading1">
                        Namaste React Functional Component1
                      </h1>
             )
      };


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
// this is called component composition=> a component in another component

  // <HeadingComponent1> ,{HeadingComponent1()} and <HeadingComponent1></HeadingComponent1> these are same.
    
   // if there are multiple lines then use () .      

   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(jSXHeading);
   // How to render React Components:
              //  root.render(<HeadingComponent1/>);
     root.render(<HeadingComponent2/>);
