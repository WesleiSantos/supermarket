import './Logo.css'
import React from 'react'
const logo = require('../../../assets/imgs/logo.png')
import {Link} from 'react-router-dom'

export default props =>
    <aside className="user-logo" >
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
        </Link>
    </aside>