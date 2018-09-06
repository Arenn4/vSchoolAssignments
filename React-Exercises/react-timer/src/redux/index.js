import { createStore } from 'redux'

//state
const initState = {
    milliSeconds: 0,
    seconds: 0,
    minutes: 0

}

//action
//start
export const startTimer = () =>{
    return {
        type: "START_TIMER",
    }
}
//stop
export const stopTimer = () =>{
    return {
        type: "STOP_TIMER",   
    }
}
//reset
export const resetTimer = () =>{
    return {
        type: "RESET_TIMER",        
    }
}

//reducer
const reducer = (prevState = initState, action) =>{
    switch(action.type){
        case "START_TIMER":
        if(prevState.seconds === 59 && prevState.milliSeconds === 99){
            return {
                minutes: prevState.minutes + 1,
                seconds: 0,
                milliSeconds: 0
            }
        }else if(prevState.milliSeconds === 99){
            return {
                minutes: prevState.minutes,
                seconds: prevState.seconds + 1,
                milliSeconds: 0
            }
        }else{
            return {
                minutes: prevState.minutes,
                seconds: prevState.seconds,
                milliSeconds: prevState.milliSeconds + 1
            }
        }
                // minutes: prevState.seconds === 59 ? prevState.minutes + 1 : prevState.minutes,
                // seconds: prevState.seconds === 59 ? 0 : prevState.seconds + 1,
                // milliseconds: prevState.seconds === 99 ? 0 : prevState.milliseconds + 1
                //if censec === 100, sec++
                //if sec === 59, min++
                //if min === 60, hour++

        case "STOP_TIMER":
            return {
                

                //start time - initial time(0) return value

            }
        case "RESET_TIMER":
            return {
                seconds: 0,
                minutes: 0,
                milliSeconds:0
                //resets to zero
            }
        default:
            return prevState
    }
}

//dispatcher
export default createStore(reducer)


//Answer
// import { createStore } from 'redux'

// //state
// const initState = {
//     startedAt: undefined,
//     stoppedAt: undefined,
//     baseTime: undefined
// }

// //action
// //start
// export const startTimer = (baseTime = 0) =>{
//     return {
//         type: "START_TIMER",
//         baseTime: baseTime,
//         now: new Date().getTime()
//     }
// }
// //stop
// export const stopTimer = () =>{
//     return {
//         type: "STOP_TIMER",
//         now: new Date().getTime()
//     }
// }
// //reset
// export const resetTimer = () =>{
//     return {
//         type: "RESET_TIMER",
//         now: new Date().getTime()
//     }
// }

// //reducer
// const reducer = (prevState = initState, action) =>{
//     switch(action.type){
//         case "START_TIMER":
//             return {
//                 ...prevState,
//                 baseTime: action.baseTime,
//                 startedAt: action.now,
//                 stoppedAt: undefined
//             }
//         case "STOP_TIMER":
//             return {
//                 ...prevState,
//                 stoppedAt: action.now
//             }
//         case "RESET_TIMER":
//             return {
//                 ...prevState,
//                 baseTime: 0,
//                 startedAt: prevState.startedAt ? action.now : undefined,
//                 stoppedAt: prevState.stoppedAt ? action.now : undefined
//             }
//         default:
//             return prevState
//     }
// }

// //dispatcher
// export default createStore(reducer)