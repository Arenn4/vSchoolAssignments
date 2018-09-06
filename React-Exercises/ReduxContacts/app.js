var redux = require("redux")



//state
var state = {
    contacts: [
        {
            name: 'Tom', phone: '123-456-7890', email: 'greenranger@myspace.com'
        },
        {
            name: 'Bob',
            phone: '123-666-7890',
            email: 'green@myspace.com'
        }
    ] 
}
//action
function addContact(addCont){
    return{
        type: "ADD_CONTACT",
        addCont: addCont
    }
}
function removeContact(subCont){
    return{
        type: "REMOVE_CONTACT",
        subCont: subCont
    }
}
//reducer
function reducer(prevState = state, action){
    switch(action.type){
        case "ADD_CONTACT":
            return {
                
                contacts: prevState.contacts.concat(action.addCont)
            }
        case "REMOVE_CONTACT":
            
            return{
                contacts: prevState.contacts.filter(person => person.name !== action.subCont.name)
            }
        default:
            return prevState    
    }
}

var store = redux.createStore(reducer)
//store
store.subscribe(function(){
    console.log(store.getState())
})

store.dispatch(addContact({name: 'joe', phone: '123-456-0987', email: 'aj@poop.commmmmmmmmmmmmmm'}))
store.dispatch(addContact({name: 'mike', phone: '123-456-0987', email: 'aj@poop.com'}))
store.dispatch(addContact({name: 'jimmy', phone: '123-456-0987', email: 'aj@poop.commmmmmmmmmmmmmm'}))
store.dispatch(addContact({name: 'troy', phone: '123-456-0987', email: 'aj@poop.com'}))
store.dispatch(removeContact({name: 'joe'}))
store.dispatch(addContact({name: 'MIKE', phone: '123-456-0987', email: 'aj@poop.com'}))