import React, {useState} from 'react';


function Counter () {
    const [count,setCount]= useState(0);
const handleIncrement=()=>{
    setCount(count+1);
};
  return (
    <div>
    <p>
        Count:{count}</p>
        <button onClick={handleIncrement}>Increment</button>  
    </div>
  );
}

export default Counter;

//index.js
/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './App';

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);*/


