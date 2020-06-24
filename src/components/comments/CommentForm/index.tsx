import React, { useState, useEffect } from 'react'
import {
    Modal, Button, Form, Alert,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import cn from 'classnames';
import './index.scss';
import { connect } from 'react-redux';
import { CreateComment, LoadingComment, UpdateComment } from '../../../actions/actions';
import MakeID from '../../../helpers/createId';

type CommentForm = {
    show: boolean,
    toggleShow: Function,
    data?: CommentItem
    personId: string,
    addComment: Function,
    loadingComment: Function,
    updateComment: Function
}
const CommentForm:React.FC<CommentForm> = ({
    show, toggleShow, data, personId, addComment, loadingComment, updateComment,
}) => {
    const [resultModal, setResultModal] = useState<ResultModal>(undefined)

    const validate = (values: any) => {
        const errors:any = {}
        if (!values.message) {
            errors.message = 'Заполнитеполе'
        }
        return errors
    }

    const formik = useFormik<{
        message: string,
        status: 'cammon' | 'information' | 'system' | 'important'
    }>({
        initialValues: {
            message: data?.message ?? '',
            status: data?.status ?? 'cammon',
        },
        validate,
        onSubmit: (values: any) => {
            if (data) {
                const dataComment: CommentItem = {
                    ...data,
                    ...values,
                    personId,
                }
                fetch('/', {
                    method: 'POST',
                    body: JSON.stringify(dataComment),
                }).then(() => {
                    updateComment(dataComment)
                    setResultModal({
                        show: true,
                        status: 'success',
                        text: 'Комментарий отредактирован',
                    })
                }).catch(() => {
                    setResultModal({
                        show: true,
                        status: 'danger',
                        text: 'Комментарий не отредактирован',
                    })
                })
            } else {
                const dataComment: CommentItem = {
                    ...values,
                    id: MakeID(6),
                    createdAt: Date.now(),
                    author: 'Test2',
                }
                loadingComment(true)
                fetch('/', {
                    method: 'POST',
                    body: JSON.stringify({ personId, comments: [values] }),
                }).then(() => {
                    loadingComment(false)
                    addComment({ personId, comments: [dataComment] })
                    setResultModal({
                        show: true,
                        status: 'success',
                        text: 'Комментарий добавлен',
                    })
                    formik.resetForm()
                }).catch(() => {
                    loadingComment(false)
                    setResultModal({
                        show: true,
                        status: 'danger',
                        text: 'Комментарий не добавлен',
                    })
                })
            }
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

    const cl = cn('mb-3 textarea', { 'textarea--error': formik.errors.message })

    return (
        <Modal show={show} onHide={() => toggleShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {data ? 'Редактирование комментария' : 'Добавить комментарий' }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    resultModal && <Alert variant={resultModal.status}>{resultModal.text}</Alert>
                }
                <form onSubmit={formik.handleSubmit}>
                    <Form.Label>Комментарий</Form.Label>
                    <Form.Control as="textarea" name="message" value={formik.values.message} onChange={formik.handleChange} className={cl} />
                    <Form.Check
                        checked={formik.values.status === 'cammon'}
                        type="radio"
                        label="Обычный"
                        name="status"
                        value="cammon"
                        onChange={formik.handleChange}
                        id="status-cammon"
                    />
                    <Form.Check
                        checked={formik.values.status === 'important'}
                        type="radio"
                        label="Важный"
                        name="status"
                        value="important"
                        onChange={formik.handleChange}
                        id="status-important"
                    />
                    <Form.Check
                        checked={formik.values.status === 'information'}
                        type="radio"
                        label="Инфо"
                        name="status"
                        value="information"
                        id="status-information"
                        onChange={formik.handleChange}
                    />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={() => formik.handleSubmit()}>
                    Сохранить
                </Button>
                <Button variant="primary" onClick={() => toggleShow(false)}>
                    Отмена
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default connect(
    (state) => ({
        // @ts-ignore
        loading: state.Comments.loading,
    }),
    (dispatch) => ({
        addComment: (value: CommentItem & { personId: string }) => dispatch<any>(CreateComment(value)),
        loadingComment: (value: boolean) => dispatch<any>(LoadingComment(value)),
        updateComment: (value: CommentItem & { personId: string}) => dispatch<any>(UpdateComment(value)),
    }),
)(CommentForm);
