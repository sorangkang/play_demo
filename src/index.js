import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Dashboard from './dashboard/Dashboard'
//import Dashboard from './Dashboard';
function Example() {
    const [count, setCount] = useState({
        name : 'gg',
        age : 100
    });
    var updateAge = (c) => {
        console.log("c : " + c)
        let res = {}
        Object.assign(res, c)
        res.age = res.age + 1
        return res
    }
    return (
        <div>
            <p>You clicked {count.name} times</p>
            <p>You clicked {count.age} times</p>
            <button onClick={() => setCount(updateAge(count))}>
            Click me
            </button>
        </div>
    )
}

//ReactDOM.render(<Example />, document.getElementById("root"));
ReactDOM.render(<Dashboard />, document.getElementById("root"));
  