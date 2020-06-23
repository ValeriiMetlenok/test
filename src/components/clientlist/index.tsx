import React from 'react'
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import ClientListItem from './clientlistitem';

const ClientList:React.FC<{ clients: Person[], loading: boolean }> = ({ clients, loading }) => (
    <div>
        {
            clients && clients.length !== 0
                ? (
                    <ul>
                        {
                            clients.map((data: Person) => <ClientListItem key={data.id} data={data} />)
                        }
                    </ul>
                )
                : (
                    !loading && <div className="">Нет зарегистрированных клиентов</div>
                )
        }
        {loading && (
            <div className="text-center">
                {' '}
                <Spinner animation="border" />
                {' '}
            </div>
        )}
    </div>
)

export default connect(
    (state) => ({
        // @ts-ignore
        clients: state.Clients.data,
        // @ts-ignore
        loading: state.Clients.loading,
    }),
)(ClientList)
