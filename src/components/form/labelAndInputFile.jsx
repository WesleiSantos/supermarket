import React, { useState }  from 'react'
import Grid from '../layout/grid'
import InputFiles from "react-input-files";


const labelAndInputFile = (props) => {
    const [nameFile, setNameFile] = useState(undefined);
    function onChange(e) {
        return e[0].name ? setNameFile(e[0].name) : ''
    }
    return (
        <InputFiles
            multiple={props.multiple}
            {...props.input}
        >
            <div className="d-flex flex-row">
                <label className="custom-file-label" htmlFor="customFileLang">
                    {nameFile === undefined
                        ? "Selecione uma imagem"
                    : nameFile}
                </label>
            </div>
        </InputFiles>)

}
export default labelAndInputFile;