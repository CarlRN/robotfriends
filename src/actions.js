import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';

//return an object
export const setSearchField = (text) => ({
    type : CHANGE_SEARCH_FIELD,
    payload : text
})

//obs.: dispatch comes from redux
//Because this action will be a promise (async request) using fetch, it has three actions related...
//this reducer-function return another function (high order function) that it's needed for the thunk middleware 
//Use this way when the thunk middleware (or similar) is present because redux for own it cannot understand it
export const requestRobots = () => (dispatch) => {
    dispatch( {type: REQUEST_ROBOTS_PENDING} );
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data => dispatch( {type: REQUEST_ROBOTS_SUCCESS, payload: data} ))
    .catch(error => dispatch( {type: REQUEST_ROBOTS_FAILED, payload: error} ))
} 