import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { GetComments, RemoveComment } from '../../actions/actions';
import './index.scss';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';

type Commnets = {
    match: any,
    comments: any,
    loading: any,
    getComments: Function,
    removeComment: Function
}

const Comments:React.FC<Commnets> = ({
    match, comments, loading, getComments, removeComment,
}) => {
    const [show, setShow] = useState<boolean>(false)
    useEffect(() => {
        if (!comments?.[match.params.id]) {
            getComments(match.params.id)
        }
        // eslint-disable-next-line
    }, [match, getComments])

    return (
        <>
            <div className="raw mb-4">
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-primary" onClick={() => setShow(true)}> Добавить комментарий </button>
                </div>
                <CommentForm show={show} toggleShow={setShow} personId={match.params.id} />
            </div>
            {
                comments[match.params.id]?.sort((a:CommentItem, b:CommentItem) => b.createdAt - a.createdAt)
                .map((comment:CommentItem) => <CommentItem key={comment.id} comment={comment} personId={match.params.id} removeComment={removeComment} />)
            }
            {loading && (
                <div className="text-center">
                    {' '}
                    <Spinner animation="border" />
                    {' '}
                </div>
            )}
        </>
    )
}

export default connect(
    (state) => ({
        // @ts-ignore
        comments: state.Comments.data,
        // @ts-ignore
        loading: state.Comments.loading,
    }),
    (dispatch) => ({
        getComments: (value:string) => dispatch<any>(GetComments(value)),
        removeComment: ({ personId, commentId }: { personId: string, commentId: string }) => dispatch<any>(RemoveComment({ personId, commentId })),
    }),
)(Comments);
