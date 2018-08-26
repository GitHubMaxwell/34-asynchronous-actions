// import uuid from 'uuid/v1';
import superagent from 'superagent';

// Action constants CRUD
const CREATE_ITEM = 'CREATE_ITEM';
const READ_ITEM = 'READ_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';


export const createItem = payload => {
    // if you want it to be snappy then you can add it to your internal array
    // if you need data integrity where it goes to the DB first and then the list updates per that change in the DB

    // console.log('create action', payload)
    // payload is {"name": "cat", "color": "color"}

    // {"name": "one cat","color": "one cat color"}

    return dispatch => {
        const url = 'https://lab14-max.herokuapp.com/api/v1/cats'
        superagent.post(url)
        .send(payload)
        .then(response => {
            // console.log('response: ',response.body)
            return dispatch({type: CREATE_ITEM, payload: response.body})
        })
    }
}

// on page load / componentDidMount this needs to fire
// get ALL
// inside the then is where you call the 
// export const readItem = payload => {

/* this is what heroku returns so map the _id to the key of the LI
[
    {
        "_id": "5b4c44fd098f3900143331a9",
        "name": "ONE CAT",
        "color": "ONE CAT COLOR",
        "__v": 0
    }
]
*/
export const readItem = () => {

    // console.log('read action')

    return dispatch => {
        const url = 'https://lab14-max.herokuapp.com/api/v1/cats'
        superagent.get(url)
        .then(payload => {
            // console.log('GET ALL payload: ',payload)
            return dispatch({type: READ_ITEM, payload})
        })
    }
}

export const updateItem = payload => {

    // how to get id of item have that attached to the li name attribute ?

    console.log('update action', payload)
    // {"name": "one cat","color": "one cat color"}
    return {
        type: UPDATE_ITEM,
        payload
    }

    // return dispatch => {
    //     const url = `https://lab14-max.herokuapp.com/api/v1/cats/${payload._id}`
    //     superagent.put(url)
    //     .send(payload)
    //     .then(response => {
    //         return dispatch({type: UPDATE_ITEM, payload: response})
    //     })
    // }
}

export const deleteItem = payload => {
    return dispatch => {
        const url = `https://lab14-max.herokuapp.com/api/v1/cats/${payload}`;
        superagent.delete(url)
        .then(() => {
            return dispatch({type: DELETE_ITEM, payload})
        })
    }
}

let initialState = []

// Reducer // has to be named reducer in a duck = the convention
// whats the initial state supposed to be? / the model of the lab 14 code
// you want to overwrite what the state is so in READ_ITEM you pass the array of objects in the payload instead of jus tthe objects and then in the switch statement return the [...payload]

export default (state=initialState,action) => {
    let {type, payload} = action;

    switch(type) {
        case 'CREATE_ITEM' : return [...state,payload]
        case 'READ_ITEM' : return [...payload.body]
        // case 'UPDATE_ITEM' : return state.map(item => item._id === payload._id ? payload : item)
        case 'UPDATE_ITEM' : return console.log('UPDATE PAYLOAD: ',payload)
        case 'DELETE_ITEM' : return state.filter(item => item._id !== payload)
        default : return state
    }
}