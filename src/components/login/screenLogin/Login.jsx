import React from 'react'
import LoginTemplate from '../../template/templateLogin/LoginTemplate'
import FormLogin from './FormLogin'

export default props=>
    <React.Fragment>
        <LoginTemplate title="Login" icon="person" btnPath="/">
            <FormLogin/>
        </LoginTemplate>
    </React.Fragment>