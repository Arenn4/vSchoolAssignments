var redux = require('redux')

//REDUXXXX

//Initial State
var state = {
    count: 0
}


//Actions - Action Creators //
//All actions are functions that returns objects, objects must include a type
function addOne(){
    return {
        type: "ADD_ONE"
    }
}

function subtractOne(){
    return{
        type: "SUB_ONE"
    }
}

function setCount(newCount){
    return{
        type: "SET_COUNT",
        newCount: newCount
    }
}

function multByTwo(){
    return{
        type:"MULT_NUM",
    }
}

function divCount(){
    return{
        type: "DIV_NUM"
    }
}




//REDUCER - Function that takes action objects and updates the store (state) appropriately
function reducer(prevState = state, action){
    switch(action.type){
        case "ADD_ONE":
            return {
                count: prevState.count + 1
            }
        case "SUB_ONE":
            return{
                count: prevState.count - 1
            }
        case "SET_COUNT":
            return{
                count: action.newCount
            }
        case "MULT_NUM":
            return{
                count: prevState.count * 2
            }
        case "DIV_NUM":
            return{
                count: prevState.count / 2
            }
        default:
            return prevState
    }    
}

var store = redux.createStore(reducer)

store.subscribe(function(){
    console.log(store.getState())
})

store.dispatch(addOne())
store.dispatch(addOne())
store.dispatch(addOne())
store.dispatch(addOne())
store.dispatch(setCount(100))
store.dispatch(subtractOne())
store.dispatch(subtractOne())
store.dispatch(multByTwo())
store.dispatch(divCount())
store.dispatch(divCount())