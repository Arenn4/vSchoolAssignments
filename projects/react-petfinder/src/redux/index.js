import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import thunk from 'redux-thunk';

//State
const initState = {
    animals: []
}


// 
// 
//Action
export const getAnimals = () => {
    return (dispatch) =>{
        axios({
            url:'http://api.petfinder.com/pet.find?key=37a8dad2296118bbb84783e98651459d&animal=dog&location=60565&age=Young&age=Baby&breed=German+Shorthaired+Pointer&output=basic&format=json',
            adapter: jsonpAdapter
        })
        .then(response => {
            console.log(response.data.petfinder.pets.pet)
            dispatch({
                type: 'GET_ANIMALS',
                animals: response.data.petfinder.pets.pet

            })
        })
    }
    
}


const reducer = (prevState=initState, action) => {
    switch(action.type){
        case "GET_ANIMALS":
            return {
                animals: action.animals
            }
        default: 
            return prevState
    }
}

export default createStore(
    reducer,
    applyMiddleware(thunk)
    // devtool info here
)