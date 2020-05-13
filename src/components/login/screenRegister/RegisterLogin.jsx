import React from 'react'
import LoginTemplate from '../../template/templateLogin/LoginTemplate'

import FormRegisterAddress from './FormRegisterAddress'
import FormRegisterLogin from './FormRegisterLogin'

export default props=>
<LoginTemplate title="Cadastro" btnPath="/login">
    <FormRegisterAddress/>
    <FormRegisterLogin/>
</LoginTemplate>
