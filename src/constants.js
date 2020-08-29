//related to search field change
export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';

//related to request robots. Because this action will be a promise (async request) using fetch, it have three actions related...
export const REQUEST_ROBOTS_PENDING = 'REQUEST_ROBOTS_PENDING';
export const REQUEST_ROBOTS_SUCCESS = 'REQUEST_ROBOTS_SUCCESS';
export const REQUEST_ROBOTS_FAILED = 'REQUEST_ROBOTS_FAILED';