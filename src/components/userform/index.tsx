import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { Spinner, Modal, Alert } from 'react-bootstrap';
import Input from '../input'
import Select from '../select'
import Checkbox from '../checkbox';
import { CreatePerson, LoadingPerson } from '../../actions/actions';
import validate from '../../helpers/validate';
import LabelsObj from '../../helpers/labels';
import MakeID from '../../helpers/createId';

const uezd: { title: string, value: string }[] = [
    {
        title: '---',
        value: '',
    },
    {
        title: 'Уезд1',
        value: 'Уезд1',
    },
    {
        title: 'Уезд2',
        value: 'Уезд2',
    },
    {
        title: 'Уезд3',
        value: 'Уезд3',
    },
]

const UserForm: React.FC<{ createPerson: Function, loading: boolean, loadingPerson: Function }> = ({ createPerson, loadingPerson, loading }) => {
    const [resultModal, setResultModal] = useState<ResultModal>(undefined)

    const formik = useFormik<PersonForm>({
        initialValues: {
            name: '',
            lastname: '',
            email: '',
            phone: '',
            city: '',
            address: '',
            index: '',
            emailsend: false,
            smssend: false,
            uezd: '',
        },
        validate,
        onSubmit: (values: PersonForm) => {
            loadingPerson(true)
            fetch('/', {
                method: 'POST',
                body: JSON.stringify(values),
            }).then(() => {
                const id: string = MakeID(9)
                // Часть даннх будет приходить с бэка после отправки формы
                createPerson({
                    id,
                    status: 'active',
                    origin: 'Через сайт',
                    regestrationIp: '192.168.1.1',
                    regestrationRegion: 'Россия',
                    language: 'Русский',
                    invited: 0,
                    ...values,
                })
                loadingPerson(false)
                formik.resetForm()
                setResultModal({
                    show: true,
                    status: 'success',
                    text: 'Пользователь добавлен',
                })
            }).catch(() => {
                loadingPerson(false)
                setResultModal({
                    show: true,
                    status: 'danger',
                    text: 'Пользователь не добавлен',
                })
            })
        },
    })

    useEffect(() => {
        let timout: NodeJS.Timeout | undefined;
        if (resultModal) {
            timout = setTimeout(() => {
                setResultModal(undefined)
            }, 2000)
        }
        return () => {
            if (timout) {
                clearTimeout(timout)
            }
        }
    }, [resultModal])

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <Input
                            type="text"
                            label={LabelsObj.name}
                            placeholder={LabelsObj.name}
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            error={formik.errors.name}
                        />
                        <Input
                            type="text"
                            label={LabelsObj.lastname}
                            placeholder={LabelsObj.lastname}
                            name="lastname"
                            onChange={formik.handleChange}
                            value={formik.values.lastname}
                            error={formik.errors.lastname}
                        />
                        <Input
                            type="email"
                            label={LabelsObj.email}
                            placeholder={LabelsObj.email}
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            error={formik.errors.email}
                        />
                        <Input
                            type="tel"
                            label={LabelsObj.phone}
                            placeholder={LabelsObj.phone}
                            name="phone"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            error={formik.errors.phone}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <Select
                            name="uezd"
                            label={LabelsObj.uezd}
                            values={uezd}
                            onChange={formik.handleChange}
                            value={formik.values.uezd}
                            error={formik.errors.uezd}
                        />
                        <Input
                            type="text"
                            label={LabelsObj.city}
                            placeholder={LabelsObj.city}
                            name="city"
                            onChange={formik.handleChange}
                            value={formik.values.city}
                            error={formik.errors.city}
                        />
                        <Input
                            type="text"
                            label={LabelsObj.address}
                            placeholder={LabelsObj.address}
                            name="address"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                            error={formik.errors.address}
                        />
                        <Input
                            type="number"
                            label={LabelsObj.index}
                            placeholder={LabelsObj.index}
                            name="index"
                            onChange={formik.handleChange}
                            value={formik.values.index}
                            error={formik.errors.index}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group mx-auto">
                        <Checkbox name="emailsend" text={LabelsObj.emailsend} onChange={formik.handleChange} value={formik.values.emailsend} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group mx-auto">
                        <Checkbox name="smssend" text={LabelsObj.smssend} onChange={formik.handleChange} value={formik.values.smssend} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group mx-auto">
                        <button type="submit" className="btn btn-primary">
                            {loading && <Spinner animation="border" size="sm" variant="light" />}
                            Зарегестрировать
                        </button>
                    </div>
                </div>
            </form>
            <Modal show={resultModal ? resultModal.show : false} onHide={() => setResultModal(resultModal ? { ...resultModal, show: false } : undefined)} size="sm">
                <Modal.Body>
                    {
                        resultModal && <Alert variant={resultModal.status}>{resultModal.text}</Alert>
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default connect(
    (state) => ({
        // @ts-ignore
        loading: state.Clients.loading,
    }),
    (dispatch) => ({
        createPerson: (value: Person) => dispatch<any>(CreatePerson(value)),
        loadingPerson: (value: boolean) => dispatch<any>(LoadingPerson(value)),
    }),
)(UserForm);
