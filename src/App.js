import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // for, looks like multi pages
import Sub from './Sub';
import Home from './Home';
import Cart from './Cart';
import My from './My';
import Header from './Header';
import './App.css';

function App() {
  const [count, setCount] = useState(1); // 1 is default value

  const addOne = () => {
    setCount(count + 1);
  };

  //execute when display update  (after all state updated) //catch update
  // ',[]' make this function only execute first update.
  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <Router>
      <Header />
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/my" component={My} />
        <p>{count}</p>
        {count > 2 ? <input type="text" /> : <p>cool</p>}
        <button onClick={addOne}>click me!</button>
        <Sub buttonTxt="hi" />
        <Sub buttonTxt="hello" />
      </div>
    </Router>
  );
}

// function App2() {
//   const [count, setCount] = useState(1); // 3 is default value

//   const addOne = () => {
//     setCount(count + 1);
//   };

//   // const arr = ['aws', 'google', 'world'];
//   const [arr, setArr] = useState([]);

//   // if do not use useEffect(), fetch is executing (not stop)
//   useEffect(() => {
//     fetch('http://localhost:8000/users')
//       .then((res) => res.json())
//       .then((data) => {
//         const status = data.status;
//         setArr = data.arr;
//         if (status !== 200) {
//           return false;
//         }
//       });
//   }, []);

//   return (
//     <div className="App">
//       <p>{count}</p>
//       {count > 2 ? <input type="text" /> : <p>cool</p>}
//       {arr.map((i) => (
//         <p>hi {i}</p>
//       ))}
//       <button onClick={addOne}>click me!</button>
//       <Sub buttonTxt="hi" />
//       <Sub buttonTxt="hello" />
//     </div>
//   );
// }

// // this is component. in react we can combinate components.
// function App3() {
//   // let count = 1;
//   // count += 2;

//   const [count, setCount] = useState(3); // 3 is default value

//   const addOne = () => {
//     setCount(count + 1); //this is asynchronism
//     console.log(count);
//   };

//   //execute when display update  (after all state updated) //catch update
//   // ',[]' make this function only execute first update.
//   useEffect(() => {
//     console.log(count);
//   }, []);

//   const txt = a > 2 ? 'big!' : 'small!';
//   txt2 = a > 2 || 'big!';

//   return (
//     <div className="App">
//       <p>{count}</p>
//       <button onClick={addOne}>click me!</button>
//       <Sub buttonTxt="hi" fn={addOne} />
//       <Sub buttonTxt="hello" />
//     </div>
//   );
// }

export default App;
    