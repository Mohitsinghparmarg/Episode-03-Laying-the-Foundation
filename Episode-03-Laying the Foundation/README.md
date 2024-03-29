##  what is JSX?

   JSX is what react uses to render content to page. JSX stands for JavaScript as XML, hence 
   it’s HTML like syntax. The extra features of JSX that don’t come with just plain HTML is 
    things like conditional rendering and dynamic content.

## JSX is an extension to javascript syntax. It allows writing code that look similar to html, and that similarity makes it feel pretty natural in the context of a front-End UI library. JSX is very commonly used with React, though technically you could do React without JSX (it would be combersome, so I don't recommend it), and the JSX syntax can be used with other libraries than react (this isn't common).
In the context of react,
             a JSX element is a shorthand for calling React.createElement is the code that 
            React uses for describing what should be on the  page. For example, the following 
      JSX:
##  Behind the Scenes of JSX
       <div>Hello World</div>
    Transpiles to this code:
         React.createElement("div", null, "Hello World");

 Which will return an object that looks roughly like this:
        {
            type: 'div',
            props: {
                children: 'Hello World'
            }
        }
##  Benefits of JSX

 1. Declarative Syntax: JSX allows developers to write UI code in a declarative manner, 
      making it easier to understand and maintain. It resembles HTML, making it more intuitive 
     for front-end developers.

2. Component-Based Architecture: JSX fits well with React's component-based architecture. 
     Components encapsulate both the UI and the logic associated with it, promoting reusability 
    and modularity.

3.JavaScript Integration: Since JSX is essentially a syntax extension for JavaScript, you can seamlessly integrate JavaScript expressions and logic within JSX code. This allows for dynamic content rendering and conditional rendering directly within the markup.

4. Type Safety: JSX can be used with TypeScript or Flow, enabling type checking and improving code reliability by catching errors at compile time.

5.Performance Optimization: JSX can be optimized by tools like Babel during the compilation process, resulting in optimized JavaScript code for better performance.

6.Tooling Support: JSX is well-supported by various development tools and IDEs, providing features like syntax highlighting, auto-completion, and error checking, which enhances developer productivity.

7.JSX Transforms: JSX can be transformed into regular JavaScript function calls using transpilers like Babel, which means it's not required in the final production code. This allows developers to write code using JSX syntax without worrying about browser compatibility.

8.Community Adoption: JSX has gained widespread adoption within the React community, which means there are plenty of resources, tutorials, and libraries available to help developers leverage its capabilities effectively.

## Babel & parcel role in JSX

Babel is responsible for transforming JSX syntax into regular JavaScript, while Parcel provides a convenient bundling solution that automatically applies Babel transformations, making it easier for developers to work with JSX in their projects without manual configuration.

-> Components:
components are fundamental to building applications with React, providing a structured and modular approach to building user interfaces. They promote code reuse, maintainability, and scalability, making it easier to develop and maintain complex applications.

-> Functional Components:
   functional components offer a simpler, more lightweight approach to building UI components 
   in React. They are a key feature of modern React development, offering improved performance, 
   reusability, and a more functional programming style.

-> Composing Components:
    Composing components in React refers to the practice of combining multiple smaller 
    components together to create more complex and feature-rich user interfaces. This approach 
   leverages the modularity and reusability of components to build UIs in a hierarchical and 
  structured manner.

in short => Component composition is a fundamental aspect of React development that enables developers to build complex UIs with ease.


## Role of type attribute in script tag? What options can I use there?

 This attribute specifies the scripting language of the element's contents and overrides the default scripting language. The scripting language is specified as a content type (e.g., "text/javascript"). Authors must supply a value for this attribute. There is no default value for this attribute. 
 
it is optional. If it is not specified, it defaults to text/javascript->
The type attribute gives the language of the script or format of the data. If the attribute is present, its value must be a valid MIME type. The charset parameter must not be specified. The default, which is used if the attribute is absent, is "text/javascript".

it should be omitted if using a valid JavaScript MIME type ->
Omitting the attribute, or setting it to a JavaScript MIME type, means that the script is a 
classic script, to be interpreted according to the JavaScript Script top-level production.  Classic scripts are affected by the charset, async, and defer attributes. Authors should omit 
the attribute, instead of redundantly giving a JavaScript MIME type.
