type PersonForm = {
    name: string,
    lastname: string,
    email: string,
    phone: string,
    city: string,
    address: string,
    index: string,
    emailsend: boolean,
    smssend: boolean,
    uezd: string,
}

type Person = PersonForm & {
    id: number
}
