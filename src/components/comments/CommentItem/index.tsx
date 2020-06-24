/* eslint-disable max-len */
import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import CommentForm from '../CommentForm';

const CommentItem:React.FC<{comment: CommentItem, personId: string, removeComment: Function }> = ({ comment, personId, removeComment }) => {
    const [show, setShow] = useState<boolean>(false)

    let status: 'primary' | 'success' | 'info' | 'danger' | 'secondary' | 'warning' | 'light' | 'dark' | undefined;
    // | 'system' | 'important'
    switch (comment.status) {
        case 'information':
            status = 'success';
            break;

        case 'system':
            status = 'info';
            break;

        case 'important':
            status = 'danger';
            break;

        default:
            break;
    }
    const data = new Date(comment.createdAt)
    return (
        <>
            <Alert variant={status} className="alert alert--comment">
                <div className="row" key={comment.id}>
                    <div className="col-md-2">{data.toTimeString()}</div>
                    <div className="col-md-1">{comment.author}</div>
                    <div className="col-md-7">
                        {comment.message}
                    </div>
                    { comment.status !== 'system' && (
                        <>
                            <div className="col-md-1">
                                <button className="btn text-center" type="button" onClick={() => setShow(true)}>
                                    <svg className="bi bi-pencil" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                                        <path fillRule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="col-md-1">
                                <button className="btn text-center" type="button" onClick={() => removeComment({ personId, commentId: comment.id })}>
                                    <svg className="bi bi-x" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
                                        <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
                                    </svg>
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </Alert>
            <CommentForm show={show} toggleShow={setShow} personId={personId} data={comment} />
        </>
    )
}

export default CommentItem;
