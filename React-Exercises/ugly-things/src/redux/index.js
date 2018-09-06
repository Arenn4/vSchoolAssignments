import { createStore } from 'redux'
import uuidv4 from 'uuid/v4'

//State
const state = {
    uglies: [
        {
            name: "Packers",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDjpIVUN8UdbAzkkRRcD7JlcHQwcs1Fg3tk9L-pvqfc1QE6-OV5w",
            description: "Cheese Heads"   
        }
    ]
}

//Action
export const addUgly = (addUg) => {
    return {
        type: "ADD_UGLY",
        addUg: addUg
    }
}

export const removeUgly = (removeUg) => {
    return {
        type: "REMOVE_UGLY",
        removeUg: removeUg
    }
}


//reducer
const reducer = (prevState = state, action) =>{
    switch(action.type){
        case"ADD_UGLY":
            action.addUg.id = uuidv4()
            return {
                uglies: prevState.uglies.concat(action.addUg)
            }
        case "REMOVE_UGLY":
            return {
                uglies: prevState.uglies.filter(cards => cards.id !== action.removeUg)
            }
        default: 
            return prevState
    }
}


export default createStore(reducer)