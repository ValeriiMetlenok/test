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
