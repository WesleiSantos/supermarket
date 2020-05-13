import './Main.css'
import React from 'react'


export default props =>
    <React.Fragment>
        <main className="main">
            <div className="container">
                {props.children}
            </div>
        </main>
    </React.Fragment>