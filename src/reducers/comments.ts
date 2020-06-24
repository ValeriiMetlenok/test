import * as ActionTypes from '../actions/action-types';

const initialState: {
    loading: boolean,
    data: CommentObject
} = {
    loading: false,
    data: {},
}

let personComments: CommentItem[] | []

const Comments = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionTypes.COMMENT_GET:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload,
                },
            }
        case ActionTypes.COMMENT_REMOVE:
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.payload.personId]: [
                        ...state.data[action.payload.personId].filter((item: CommentItem) => item.id !== action.payload.commentId),
                    ],
                },
            }
        case ActionTypes.COMMENT_LOADING:
            return {
                ...state,
                loading: action.payload,
            }

        case ActionTypes.COMMENT_CREATE:
            personComments = state.data[action.payload.personId] ?? []
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.payload.personId]: [
                        ...personComments,
                        ...action.payload.comments,
                    ],
                },
            }

        case ActionTypes.COMMENT_UPDATE:
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.payload.personId]: [
                        ...state.data[action.payload.personId].filter((item) => item.id !== action.payload.id),
                        action.payload,
                    ],
                },
            }

        default: return state
    }
}

export default Comments;
