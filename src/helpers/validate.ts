type Errors = {
    name?: string,
    lastname?: string,
    email?: string,
    phone?: string,
    city?: string,
    address?: string
    index?: string
    uezd?: string
}

const validate = (values: any) => {
    const errors:Errors = {};

    if (!values.name) {
        errors.name = 'Заполните поле';
    }

    if (!values.lastname) {
        errors.lastname = 'Заполните поле';
    }

    if (!values.email) {
        errors.email = 'Заполните поле';
    // eslint-disable-next-line no-useless-escape
    } else if (!/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(values.email)) {
        errors.email = 'Не корректный email';
    }

    if (!values.phone) {
        errors.phone = 'Заполните поле';
    // eslint-disable-next-line no-useless-escape
    } else if (!/^([+]?[0-9\s-\(\)]{3,25})*$/i.test(values.phone)) {
        errors.phone = 'Не корректный нормер телефона';
    }

    if (!values.city) {
        errors.city = 'Заполните поле';
    }

    if (!values.address) {
        errors.address = 'Заполните поле';
    }

    if (!values.index) {
        errors.index = 'Заполните поле';
    }

    if (!values.uezd) {
        errors.uezd = 'Заполните поле';
    }

    return errors;
}

export default validate;
