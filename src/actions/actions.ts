import * as ActionCreators from './action-creator';

export const CreatePerson = (value:Person) => (dispatch: any) => dispatch(ActionCreators.PersonCreate(value))
export const LoadingPerson = (value:boolean) => (dispatch: any) => dispatch(ActionCreators.PesronLoading(value))
export const UpdatePerson = (value:Person) => (dispatch: any) => dispatch(ActionCreators.PersonUpdate(value))

export const GetPersons = () => (dispatch: any) => {
    dispatch(ActionCreators.PesronLoading(true))
    // псевдо дилей для показа статуса загрузки
    setTimeout(() => {
        fetch('/').then(() => {
            const data:Person[] = [
                {
                    id: 'h98rmmYXy',
                    status: 'active',
                    origin: 'Через сайт',
                    regestrationIp: '192.168.1.1',
                    regestrationRegion: 'Россия',
                    language: 'Русский',
                    invited: 0,
                    name: 'Иван',
                    lastname: 'Иванов',
                    email: 'ivanov@gmail.com',
                    phone: '+79995555555',
                    city: 'Иваново',
                    address: 'ул Иванова, дом 20, кв 24',
                    index: 658789,
                    emailsend: true,
                    smssend: true,
                    uezd: 'Уезд3',
                },
            ]
            dispatch(ActionCreators.PesronLoading(false))
            dispatch(ActionCreators.PersonGet(data))
        }).catch(() => {
            dispatch(ActionCreators.PesronLoading(false))
            dispatch(ActionCreators.PesronError('error'))
        })
    }, 1000)
}

export const RemovePerson = (value: string) => (dispatch: any) => {
    dispatch(ActionCreators.PesronLoading(true))
    // псевдо дилей для показа статуса загрузки
    setTimeout(() => {
        fetch('/', {
            method: 'DELETE',
            body: JSON.stringify({ id: value }),
        }).then(() => {
            dispatch(ActionCreators.PesronLoading(false))
            dispatch(ActionCreators.PersonRemove(value))
        }).catch(() => {
            dispatch(ActionCreators.PesronLoading(false))
            dispatch(ActionCreators.PesronError('error'))
        })
    }, 1000)
};
