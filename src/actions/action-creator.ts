import * as ActionTypes from './action-types';

// Данные клента
export const PersonGet = (value:Person[]) => ({
    type: ActionTypes.PERSON_GET,
    payload: value,
})
export const PersonCreate = (value:Person) => ({
    type: ActionTypes.PERSON_CREATE,
    payload: value,
})

export const PersonUpdate = (value:any) => ({
    type: ActionTypes.PERSON_UPDATE,
    payload: value,
})

export const PersonRemove = (value:string) => ({
    type: ActionTypes.PERSON_REMOVE,
    payload: value,
})

export const PesronLoading = (value:boolean) => ({
    type: ActionTypes.PERSON_LOADING,
    payload: value,
})

export const PesronError = (value:any) => ({
    type: ActionTypes.PERSON_ERROR,
    payload: value,
})

// Комментарий

export const CommentGet = (value:any) => ({
    type: ActionTypes.COMMENT_GET,
    payload: value,
})

export const CommentCreate = (value:any) => ({
    type: ActionTypes.COMMENT_CREATE,
    payload: value,
})

export const CommentLoading = (value:boolean) => ({
    type: ActionTypes.COMMENT_LOADING,
    payload: value,
})

export const CommentUpdate = (value:any) => ({
    type: ActionTypes.COMMENT_UPDATE,
    payload: value,
})

export const CommentRemove = (value:any) => ({
    type: ActionTypes.COMMENT_REMOVE,
    payload: value,
})
