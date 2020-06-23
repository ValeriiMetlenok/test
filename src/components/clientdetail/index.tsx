import React, { useState, useEffect } from 'react'
import {
    Modal, Button, Spinner, Alert,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { useFormik } from 'formik'
import ClientDetailContent from './ClientDetailContent'
import ClientDetailEditor from './ClientDetailEditor'
import validate from '../../helpers/validate';
import { UpdatePerson, LoadingPerson } from '../../actions/actions'

type ClientDetail = { data: Person, handleShow: Function, updatePerson: Function, loadingPerson: Function, loading:boolean }

type AlertObj = {
    status: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | undefined,
    text: string,
}

const ClientDetail:React.FC<ClientDetail> = ({
    data, handleShow, updatePerson, loadingPerson, loading,
}) => {
    const [showEditor, setShowEditor] = useState(false)
    const [showAlert, setShowAlert] = useState<AlertObj | undefined>(undefined)

    const formik = useFormik<PersonForm>({
        initialValues: {
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            city: data.city,
            address: data.address,
            index: data.index,
            emailsend: data.emailsend,
            smssend: data.smssend,
            uezd: data.uezd,
        },
        validate,
        onSubmit: (values: PersonForm) => {
            const updatedData: Person = {
                ...data,
                ...values,
            }
            loadingPerson(true)
            fetch('/', {
                method: 'POST',
                body: JSON.stringify(updatedData),
            }).then(() => {
                updatePerson(updatedData)
                setShowEditor(!showEditor)
                loadingPerson(false)
                setShowAlert({
                    status: 'success',
                    text: 'Данные отредактированы',
                })
            }).catch(() => {
                setShowAlert({
                    status: 'danger',
                    text: 'Данные не отредактированы',
                })
            })
        },
    })

    useEffect(() => {
        let timout: NodeJS.Timeout | undefined;
        if (showAlert) {
            timout = setTimeout(() => setShowAlert(undefined), 2000)
        }
        return () => {
            if (timout) {
                clearTimeout(timout)
            }
        }
    }, [showAlert])

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Данные клиента</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { showAlert && (
                    <Alert variant={showAlert.status}>
                        { showAlert.text }
                    </Alert>
                )}

                {showEditor ? <ClientDetailEditor data={data} formik={formik} /> : <ClientDetailContent data={data} />}
            </Modal.Body>
            <Modal.Footer>
                {
                    showEditor
                        ? (
                            <Button
                                variant="primary"
                                onClick={() => {
                                    formik.handleSubmit()
                                }}
                            >
                                {loading ? (
                                    <>
                                        <Spinner animation="border" size="sm" variant="light" />
                                        Сохранение...
                                    </>
                                )
                                    : <>Сохранить</>}

                            </Button>
                        )
                        : (
                            <Button variant="primary" onClick={() => setShowEditor(!showEditor)}>
                                Редактировать
                            </Button>
                        )
                }
                <Button variant="primary" onClick={() => handleShow()}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </>
    )
}
export default connect(
    (state) => ({
        // @ts-ignore
        loading: state.Clients.loading,
    }),
    (dispatch) => ({
        loadingPerson: (value: boolean) => dispatch<any>(LoadingPerson(value)),
        updatePerson: (value: Person) => dispatch<any>(UpdatePerson(value)),
    }),
)(ClientDetail)
