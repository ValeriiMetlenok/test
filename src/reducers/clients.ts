import * as ActionTypes from '../actions/action-types';

const initialState = {
    loading: false,
    data: [],
}

const Clients = (state = initialState, action:any) => {
    switch (action.type) {
        case ActionTypes.PERSON_GET:
            return {
                ...state,
                data: [
                    ...state.data,
                    ...action.payload,
                ],
            }
        case ActionTypes.PERSON_REMOVE:
            return {
                ...state,
                data: state.data.filter((item: Person) => item.id !== action.payload),
            }
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

        case ActionTypes.PERSON_UPDATE:
            return {
                ...state,
                data: [
                    ...state.data.filter((item: Person) => item.id !== action.payload.id),
                    action.payload,
                ],
            }

        default: return state
    }
}

export default Clients;
