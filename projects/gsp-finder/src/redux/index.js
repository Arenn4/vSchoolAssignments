import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import thunk from 'redux-thunk';

//State
const initState = {
    animals: [],
    currentImage: 0
}


// 
// 
//Action
//have to add the KEY into the locaiton field
export const getAnimals = () => {
    return (dispatch) =>{
        axios({
            url:`http://api.petfinder.com/pet.find?key=37a8dad2296118bbb84783e98651459d&animal=dog&location=60565&age=Young&age=Baby&breed=German+Shorthaired+Pointer&output=basic&format=json`,
            adapter: jsonpAdapter
        })
        .then(response => {
            dispatch({
                type: 'GET_ANIMALS',
                animals: response.data.petfinder.pets.pet

            })
        })
    }
}

export const getZipcode = (zipcode) => {
    console.log(zipcode)
    return (dispatch) =>{
        axios({
            url:`http://api.petfinder.com/pet.find?key=37a8dad2296118bbb84783e98651459d&animal=dog&location=${zipcode.zip}&age=Young&age=Baby&breed=German+Shorthaired+Pointer&output=basic&format=json`,
            adapter: jsonpAdapter
        })
        .then(response => {
            console.log(response.data.petfinder)
            dispatch({
                type: 'GET_ZIPCODE',
                animals: response.data.petfinder.pets.pet
            })
        })
    }
}

export const randomImage = () =>{
    return{
        type: "RANDOM_IMAGE"
    }
}


const reducer = (prevState=initState, action) => {
    switch(action.type){
        case "GET_ANIMALS":
            return {
                animals: action.animals,
                currentImage: prevState.currentImage
            }
        case "RANDOM_IMAGE":
                const min = 0;
                const max = 4;
                return {
                currentImage: Math.floor(Math.random() * (max - min)) + min,
                animals: prevState.animals
            }
        case "GET_ZIPCODE":
            return {
                animals: action.animals,
                currentImage: prevState.currentImage,
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