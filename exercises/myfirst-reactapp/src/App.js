//components are functions that return some JSX (HTML/JS combo wombo)
import React from 'react'
import HelloWorld from './HelloWorld'


const App = () =>{
    return (
        <div>
            <HelloWorld/>
            <p>Yo dawg</p>
        </div>
    )
}

export default App