type ResultModal = {
    show: boolean,
    status: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | undefined,
    text: string,
} | undefined

type PersonForm = {
    name: string,
    lastname: string,
    email: string,
    phone: string,
    city: string,
    address: string,
    index: string | number,
    emailsend: boolean,
    smssend: boolean,
    uezd: string,
}

type Person = PersonForm & {
    id: string,
    status: string,
    origin: string,
    regestrationIp: string,
    regestrationRegion: string,
    language: string,
    invited: number,
}

type PersonLabels = {
    name: string;
    lastname: string;
    email: string;
    phone: string;
    city: string;
    address: string;
    index: string;
    emailsend: string;
    smssend: string;
    uezd: string;
    status: string;
    regestrationIp: string;
    regestrationRegion: string;
    language: string;
    invited: string;
    origin: string;
}

type CommentItem = {
    id: string,
    createdAt: number,
    author: string,
    message: string,
    status: 'cammon' | 'information' | 'system' | 'important',
}

interface CommentObject {
    [key: string]: CommentItem[] | []
}
