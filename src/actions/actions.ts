import * as ActionCreators from './action-creator';

export const CreatePerson = (value:Person) => (dispatch: any) => dispatch(ActionCreators.PersonCreate(value))
export const LoadingPerson = (value:boolean) => (dispatch: any) => dispatch(ActionCreators.PesronLoading(value))

export const GetPersons = (value:any) => (dispatch: any) => {
    dispatch(ActionCreators.PesronLoading(true))
    fetch('/').then(() => {
        dispatch(ActionCreators.PesronLoading(false))
        dispatch(ActionCreators.PersonCreate(value))
    }).catch(() => {
        dispatch(ActionCreators.PesronLoading(false))
        dispatch(ActionCreators.PesronError('error'))
    })
}

// eslint-disable-next-line max-len
/* {"id":"t56hYx","name":"Иван","lastname":"Иванов","email":"ivanov@gmail.com","phone":"+7(223)904-22-22","city":"Иваново","address":"ул. Иванова, дом 150, кв 900 ","index":694386,"emailsend":true,"smssend":true,"uezd":"Уезд3"} */
