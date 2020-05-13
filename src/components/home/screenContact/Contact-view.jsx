import React from 'react'
export default props =>
    <React.Fragment>
        <main className="container contact">
            <div className="container p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>