import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss';

const Header = () => (
    <header className="header">
        <div className="container">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink exact to="/" activeClassName="active" className="nav-link ">Список клиентов</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/userform" activeClassName="active" className="nav-link ">Добавить клиента</NavLink>
                </li>
            </ul>
        </div>
    </header>
)
export default Header
