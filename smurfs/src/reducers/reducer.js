import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE} from '../actions/action'

const initialState = {
    smurfs: [],
    error: '',
    isFetching: false
}

export const reducer = (state = initialState  , action) => {
    switch (action.type) {
        case FETCH_SMURFS_START: 
            return {
                ...state,
                error: '',
                isFetching: true,
            };
        case FETCH_SMURFS_SUCCESS: 
            return {
                ...state,
                error: '',
                isFetching: false,
                smurfs: action.payload
            };
        case FETCH_SMURFS_FAILURE: 
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        case ADD_SMURF_START:
            return {
                ...state,
                error: '',
                isFetching: true
            };
        case ADD_SMURF_SUCCESS: 
            return {
                ...state,
                error: '',
                isFetching: false
            };
        case ADD_SMURF_FAILURE: 
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default: 
            return state;
    }
}