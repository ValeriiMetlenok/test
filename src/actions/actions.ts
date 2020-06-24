import * as ActionCreators from './action-creator';
import LabelsObj from '../helpers/labels';
import MakeID from '../helpers/createId';

// Клиенты
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

// Комментарии

export const GetComments = (value:string) => (dispatch: any) => {
    dispatch(ActionCreators.CommentLoading(true))
    // псевдо дилей для показа статуса загрузки
    setTimeout(() => {
        fetch(`/comments?id=${value}`).then(() => {
            const data:CommentObject = {
                h98rmmYXy: [
                    {
                        id: 'asfest',
                        createdAt: 1592991544156,
                        author: 'Test',
                        message: 'Обычное сообщение',
                        status: 'cammon',
                    },
                    {
                        id: 'hjkvbn',
                        createdAt: 1592994474081,
                        author: 'Test',
                        message: 'Важное сообщение',
                        status: 'important',
                    },
                    {
                        id: 'tyuigh',
                        createdAt: 1592994482495,
                        author: 'Система',
                        message: 'Системное сообщение',
                        status: 'system',
                    },
                    {
                        id: 'vnbxvx',
                        createdAt: 159299590849,
                        author: 'Test',
                        message: 'Информационное сообщение',
                        status: 'information',
                    },
                    {
                        id: 'tyuiwqegh',
                        createdAt: 1591994482495,
                        author: 'Система',
                        message: 'Системное сообщение',
                        status: 'system',
                    },
                    {
                        id: 'vnbxv4231x',
                        createdAt: 1592993490849,
                        author: 'Test',
                        message: 'Информационное сообщение',
                        status: 'information',
                    },
                    {
                        id: 'xv4231x',
                        createdAt: 1592934490849,
                        author: 'Test',
                        message: 'Информационное сообщение',
                        status: 'information',
                    },
                ],
            }
            dispatch(ActionCreators.CommentLoading(false))
            const l = value === 'h98rmmYXy' ? { [value]: [], ...data } : { ...data, [value]: [] }
            dispatch(ActionCreators.CommentGet(l))
        }).catch(() => {
            dispatch(ActionCreators.CommentLoading(false))
        })
    }, 1000)
}

export const RemoveComment = ({ personId, commentId }: { personId: string, commentId: string }) => (dispatch: any) => {
    dispatch(ActionCreators.CommentLoading(true))
    // псевдо дилей для показа статуса загрузки
    setTimeout(() => {
        fetch('/comments', {
            method: 'DELETE',
            body: JSON.stringify({ personId, commentId }),
        }).then(() => {
            dispatch(ActionCreators.CommentLoading(false))
            dispatch(ActionCreators.CommentRemove({ personId, commentId }))
        }).catch(() => {
            dispatch(ActionCreators.CommentLoading(false))
        })
    }, 1000)
};
export const LoadingComment = (value:boolean) => (dispatch: any) => dispatch(ActionCreators.CommentLoading(value))
export const CreateComment = (value:CommentItem & { personId: string }) => (dispatch: any) => dispatch(ActionCreators.CommentCreate(value));
export const UpdateComment = (value:CommentItem & { personId: string }) => (dispatch: any) => dispatch(ActionCreators.CommentUpdate(value));

export const CreateSystemComment = (newData:Person, oldData:Person) => (dispatch: any) => {
    const obj:any = []
    // @ts-ignore
    Object.keys(oldData).map((item) => (oldData[item] !== newData[item] && obj.push({
        field: item,
        // @ts-ignore
        new: newData[item],
        // @ts-ignore
        old: oldData[item],
    })))

    const data:any = obj.map((item:any) => ({
        status: 'system',
        author: 'Система',
        // @ts-ignore
        message: `Администратор изменил ${LabelsObj[item.field].toLowerCase()} c ${item.old} на ${item.new}`,
    }))

    fetch('/', {
        method: 'POST',
        body: JSON.stringify({ personId: newData.id, comments: data }),
    }).then(() => {
        const newComments = data.map((item:any) => ({
            ...item,
            id: MakeID(6),
            createdAt: Date.now(),
            personId: newData.id,
        }))
        dispatch(ActionCreators.CommentCreate({ personId: newData.id, comments: newComments }))
    })
}
