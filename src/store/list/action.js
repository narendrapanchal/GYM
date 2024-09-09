import { FETCH_LIST_FAILURE, FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS } from "./actiontypes";

export const fetchListRequest = () => ({
    type: FETCH_LIST_REQUEST,
});

// Action when list is successfully fetched
export const fetchListSuccess = (list) => ({
    type: FETCH_LIST_SUCCESS,
    list,
});

// Action for when fetching list fails
export const fetchListFailure = (error) => ({
    type: FETCH_LIST_FAILURE,
    error,
});