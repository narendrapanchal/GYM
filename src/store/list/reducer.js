import { FETCH_LIST_FAILURE, FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS } from "./actiontypes";
const initialState = {
    error: "",
    loading: false,
    list: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: "",
            };

        case FETCH_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.list,
            };

        case FETCH_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};
