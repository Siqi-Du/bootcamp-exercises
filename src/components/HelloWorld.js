// functional component

// 1. function declaration
// function HelloWorld(){}

// 2. function expression ==> rarely used
// const HelloWorld = function(){};

// 3. arrow function ===> most common
// const HelloWorld = () => {};


// react components starts with UpperCase!! to differ with html lower case
export const HelloWorld = () => {
  // jsx is not js, will be converted to below javascript function call by babel
  // return React.createElement('h1', null, 'Hello World!');
  return (
    <>  
      <h1>Hello World!</h1> 
      {/* <span>test</span> */}
    </>
  );  
  // --> JSX, html intrinsic element is lowercase
  // use fragment(<>...</>), without create a new <div> component
};