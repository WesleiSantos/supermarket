import './Main.css'
import React from 'react'
export default props =>
    <React.Fragment>
        <main className="user-main">
            <div className="main-box-shadow p-5 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>