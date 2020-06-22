import * as ActionTypes from '../actions/action-types';

const initialState = {
    loading: false,
    data: [],
}

const Clients = (state = initialState, action:any) => {
    switch (action.type) {
        case ActionTypes.PERSON_LOADING:
            return {
                ...state,
                loading: action.payload,
            }

        case ActionTypes.PERSON_CREATE:
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload,
                ],
            }

        default: return state
    }
}

export default Clients;
