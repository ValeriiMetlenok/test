import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import { GetComments, RemoveComment } from '../../actions/actions';
import './index.scss';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';
import CommentPaginate from './CommentPaginate';

type Commnets = {
    match: any,
    comments: any,
    loading: boolean,
    getComments: Function,
    removeComment: Function
    clients: Person[]
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Comments: React.FC<Commnets> = ({
    match, comments, loading, getComments, removeComment, clients,
}) => {
    const countOnPage: number = 4
    const query = useQuery();
    const history = useHistory();
    const [show, setShow] = useState<boolean>(false)
    const [page, setPage] = useState<number>(0)
    const [commensOnPage, setCommensOnPage] = useState<CommentItem[][]>()

    useEffect(() => {
        const client: Person[] | [] = clients?.filter((c: Person) => c.id === match.params.id) ?? []
        if (!comments?.[match.params.id] && client.length !== 0) {
            getComments(match.params.id)
        } else if (clients && !comments?.[match.params.id] && client.length === 0) {
            history.push('/404')
        }
        // eslint-disable-next-line
    }, [match, getComments, clients])

    useEffect(() => {
        const res = comments?.[match.params.id]?.sort((a: CommentItem, b: CommentItem) => b.createdAt - a.createdAt).reduce((p:CommentItem[][], c:CommentItem) => {
            if (p[p.length - 1].length === countOnPage) {
                p.push([]);
            }
            p[p.length - 1].push(c);
            return p;
        }, [[]]);
        setCommensOnPage(res)
        setPage(query.get('page') ? parseInt(query.get('page') as string, 10) - 1 : 0)
        // eslint-disable-next-line
    }, [ comments, page, match ])

    useEffect(() => {
        if (comments?.[match.params.id] && commensOnPage && !commensOnPage[page]) {
            history.push('/404')
        }
        // eslint-disable-next-line
    }, [commensOnPage, comments, match, history])

    return (
        <>
            {
                Array.isArray(comments?.[match.params.id]) && commensOnPage && commensOnPage[page] ? (
                    <div className="raw mb-4">
                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn btn-primary" onClick={() => setShow(true)}> Добавить комментарий </button>
                        </div>
                        <CommentForm show={show} toggleShow={setShow} personId={match.params.id} />
                    </div>
                ) : <></>
            }
            {
                commensOnPage && commensOnPage[page] && commensOnPage[page].length !== 0
                    ? (
                        <div className="row row--comment-head">
                            <div className="col-md-2">Дата</div>
                            <div className="col-md-1">Автор</div>
                            <div className="col-md-7">Комментарий</div>
                        </div>
                    ) : <></>
            }
            {
                commensOnPage && commensOnPage[page]
                    ? commensOnPage[page].map((comment: CommentItem) => <CommentItem key={comment.id} comment={comment} personId={match.params.id} removeComment={removeComment} />)
                    : <></>
            }
            {loading && (
                <div className="text-center">
                    {' '}
                    <Spinner animation="border" />
                    {' '}
                </div>
            )}
            <div className="d-flex justify-content-end">
                <CommentPaginate count={commensOnPage?.length ?? 0} personId={match.params.id} />
            </div>
        </>
    )
}

export default connect(
    (state) => ({
        // @ts-ignore
        comments: state.Comments.data,
        // @ts-ignore
        loading: state.Comments.loading,
        // @ts-ignore
        clients: state.Clients.data,
    }),
    (dispatch) => ({
        getComments: (value: string) => dispatch<any>(GetComments(value)),
        removeComment: ({ personId, commentId }: { personId: string, commentId: string }) => dispatch<any>(RemoveComment({ personId, commentId })),
    }),
)(Comments);
