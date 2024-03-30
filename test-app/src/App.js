import './App.css';
//import React from 'react';

/* Fragment and JS expressions
export default function App(){
  const name = 'Conner';
  return(
    <>
       <h1>Hello World {name.toUpperCase()}</h1>
       <p>Test</p>
    </>
  );
}
*/

//conditional rendering
/* 

export default function App(){
  const error = false;
//   if(error) {
//     return <h1>Error</h1>;
//   }
//   return <h1>Success</h1>;

//Another way
return <h1>{error ? 'Error' : 'Success'}</h1>
 }
 */

 //Atttributes/Props
//  export default function App(){
//   const type = 'text';
//   return(
//     <>
//     <label htmlFor="input">Input : </label>
//     <input id="input" type={type } maxLength="3"></input>
//     </>
//   );
//  }

/*
 export default function App(){
  const props = {
    id: 'input',
    type: 'text',
    maxLength: '3'
  };
  return(
    <>
    <label htmlFor="input">Input : </label>
    <input {...props} placeholder="username"></input>
    </>
  );
 }
 */

 export default function App(){
  return <p style={{
    color: 'red',
    textAlign: 'center',
    fontSize: '78px'
  }}>Hello World</p>
 }
