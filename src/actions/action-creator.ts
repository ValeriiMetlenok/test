import * as ActionTypes from './action-types';

export const PersonCreate = (value:any) => ({
    type: ActionTypes.PERSON_CREATE,
    payload: value,
})

export const PersonUpdate = (value:any) => ({
    type: ActionTypes.PERSON_UPDATE,
    payload: value,
})

export const PersonRemove = (value:any) => ({
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
