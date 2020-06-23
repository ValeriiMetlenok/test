/* eslint-disable max-len */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { Modal } from 'react-bootstrap';
import { RemovePerson } from '../../../actions/actions';
import ClientDetail from '../../clientdetail';

const ClientListItem: React.FC<{ data: Person, removePerson: Function }> = ({ data, removePerson }) => {
    const { name, lastname, id } = data

    const [show, setShow] = useState<boolean>(false);

    const handleShow = ():void => {
        setShow(!show)
    }

    return (
        <>
            <li className="client-list-item">
                <div className="client-list-item__label">
                    {name}
                    {' '}
                    {lastname}
                </div>
                <div className="client-list-item__icons">
                    <button type="button" className="btn btn-primary client-list-item__icon client-list-item__icon--remove" onClick={handleShow}>
                        <svg className="bi bi-eye" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                            <path fillRule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                        Посмотреть
                    </button>
                    <button type="button" className="btn btn-primary client-list-item__icon client-list-item__icon--remove" onClick={() => removePerson(id)}>
                        <svg className="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
                            <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
                        </svg>
                        Удалить
                    </button>
                </div>
            </li>
            <Modal show={show} onHide={handleShow} size="lg">
                <ClientDetail data={data} handleShow={handleShow} />
            </Modal>
        </>
    )
}

export default connect(
    () => ({

    }),
    (dispatch) => ({
        removePerson: (value: string) => dispatch<any>(RemovePerson(value)),
    }),
)(ClientListItem);
