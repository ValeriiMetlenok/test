import React from 'react'
import { Link } from 'react-router-dom';

type CommentPaginate = {
    count: number;
    personId: string;
}

const CommentPaginate: React.FC<CommentPaginate> = ({ count, personId }) => {
    if (count <= 1) {
        return <></>
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {Array(count).fill(1).map((item, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={i} className="page-item">
                        <Link to={i !== 0 ? `/comments/${personId}?page=${i + 1}` : `/comments/${personId}`} className="page-link">
                            {' '}
                            {i + 1}
                            {' '}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default CommentPaginate;
