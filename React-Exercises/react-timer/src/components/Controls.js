import React from 'react';
import { connect } from 'react-redux';
import { startTimer } from '../redux';
import { stopTimer } from '../redux';
import { resetTimer } from '../redux';
import './styles.css'

const Controls = (props) => {

    let timerId;

    const start = () =>{
        if(!timerId){
            timerId = setInterval(props.startTimer, 10)
        }
    }
    const stop = () =>{
        clearTimeout(timerId)
            timerId = false
        }
    
    const reset = () =>{
        props.resetTimer()
    }


    return (
        <div>
            <div className="container">
                <button className='start' onClick={ start }>Start</button>
                <button className='stop' onClick={ stop }>Stop</button>
                <button className='reset' onClick={ reset }>Reset</button>
            </div>
        </div>
    );
}
export default connect(null, { startTimer, stopTimer, resetTimer}) (Controls);
// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { startTimer } from '../redux';
// import { stopTimer } from '../redux';
// import { resetTimer } from '../redux'

// function getElapsedTime(baseTime, startedAt, stoppedAt = new Date().getTime()) {
//     if (!startedAt) {
//       return 0;
//     } else {
//       return stoppedAt - startedAt + baseTime;
//     }
//   }
  
//   class Display extends Component {
//     componentDidMount() {
//       this.interval = setInterval(this.forceUpdate.bind(this), this.props.updateInterval || 33);
//     }
  
//     componentWillUnmount() {
//       clearInterval(this.interval);
//     }
  
//     render() {
//       const { baseTime, startedAt, stoppedAt } = this.props;
//       const elapsed = getElapsedTime(baseTime, startedAt, stoppedAt);
  
//       return (
//         <div>
//           <h1>Time: {elapsed}</h1>
//           <div>
//             <button onClick={() => this.props.startTimer(elapsed)}>Start</button>
//             <button onClick={() => this.props.stopTimer()}>Stop</button>
//             <button onClick={() => this.props.resetTimer()}>Reset</button>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   function mapStateToProps(prevState) {
//     const { baseTime, startedAt, stoppedAt } = prevState;
//     return { baseTime, startedAt, stoppedAt };
//   }
  
//   export default connect(mapStateToProps, { startTimer, stopTimer, resetTimer })(Display);