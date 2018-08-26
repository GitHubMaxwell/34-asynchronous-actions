import superagent from 'superagent';

// Action constants CRUD
const CREATE_ITEM = 'CREATE_ITEM';
const READ_ITEM = 'READ_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';


export const createItem = payload => {

    return dispatch => {
        const url = 'https://lab14-max.herokuapp.com/api/v1/cats'
        superagent.post(url)
        .send(payload)
        .then(response => {
            return dispatch({type: CREATE_ITEM, payload: response.body})
        })
    }
}
export const readItem = () => {

    return dispatch => {
        const url = 'https://lab14-max.herokuapp.com/api/v1/cats'
        superagent.get(url)
        .then(payload => {
            return dispatch({type: READ_ITEM, payload})
        })
    }
}

export const updateItem = payload => {
    // console.log('update action payload', payload)

    // my lab 14 only lets you update either color or name but not both

    return dispatch => {
        const url = `https://lab14-max.herokuapp.com/api/v1/cats/${payload.id}`
        superagent.put(url)
        .send(payload)
        .then(response => {
            return dispatch({type: UPDATE_ITEM, payload: response.body})
        })
    }
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

let initialState = [];

// Reducer // has to be named reducer in a duck = the convention
// whats the initial state supposed to be? / the model of the lab 14 code
// you want to overwrite what the state is so in READ_ITEM you pass the array of objects in the payload instead of jus tthe objects and then in the switch statement return the [...payload]

export default (state=initialState,action) => {
    let {type, payload} = action;
    // console.log('reducer payload: ',payload)

    switch(type) {
        case 'CREATE_ITEM' : return [...state,payload]
        case 'READ_ITEM' : return [...payload.body]
        case 'UPDATE_ITEM' : return state.map(item => {
            return item._id === payload._id ? payload : item
        })
        case 'DELETE_ITEM' : return state.filter(item => item._id !== payload)
        default : return state
    }
}