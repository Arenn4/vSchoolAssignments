//components are functions that return some JSX (HTML/JS combo wombo)
import React from 'react'
import Boxes from './Boxes'


const App = () =>{

    const container = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 100px',
        gridTemplateRows: '50px 50px 50px',
        gridGap: '10px',
        textAlign: 'center'
    }


    return (
        <div style={container}>
            <Boxes backgroundColor="red" title='Box 1' subtitle='Sub Box ' description='this is a box'/>
            <Boxes backgroundColor='blue' title='Box 2' subtitle='Sub Box ' description='this is a box'/>
            <Boxes backgroundColor='green' title='Box 3' subtitle='Sub Box ' description='this is a box'/>
            <Boxes backgroundColor='coral' title='Box 4' subtitle='Sub Box ' description='this is a box'/>
            <Boxes backgroundColor='lightgreen' title='Box 5' subtitle='Sub Box ' description='this is a box'/>
            <Boxes backgroundColor='purple' title='Box 6' subtitle='Sub Box ' description='this is a box'/>
            <Boxes backgroundColor='cornflowerblue' title='Box 7' subtitle='Sub Box ' description='this is a box'/>
            <Boxes backgroundColor='teal' title='Box 8' subtitle='Sub Box ' description='this is a box'/>
            <Boxes backgroundColor='yellow' title='Box 9' subtitle='Sub Box ' description='this is a box'/>
            <Boxes backgroundColor='lightcoral' title='Box 10' subtitle='Sub Box ' description='this is a box'/>
        </div>
    )
}

export default App