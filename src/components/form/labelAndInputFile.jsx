import React, { useState } from 'react'
import Grid from '../layout/grid'
import InputFiles from "react-input-files";
import './labelAndInputFile.css'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addProductImage } from "../../actions/actionProduct";


const labelAndInputFile = (props) => {
    const [imagePreviewUrl, setImagePreviewUrl] = useState({})


    function onChange(e) {
        const file = e[0]
        console.log(file)
        return file ? e[0].name : undefined
    }
    function addImage(img) {
        let reader = new FileReader();
        let file = img[0];
        reader.onloadend = () => {
          props.addProductImage(reader.result);
        }
        img[0] ? reader.readAsDataURL(file) : ''
      }
    return (
        <InputFiles
            multiple={props.multiple}
            {...props.input}
        >
            <div className="d-flex flex-row">
                {
                    addImage(props.input.value)
                }
                <div className="imgPreview">
                    <img src={imagePreviewUrl}  />
                </div>
                <label className="custom-file-label" htmlFor="customFileLang">
                    {console.log(props.input.value)}
                    
                    {
                        onChange(props.input.value) === undefined
                            ? "Selecione uma imagem"
                            : onChange(props.input.value)
                    }
                </label>
            </div>
        </InputFiles>)

}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addProductImage,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(labelAndInputFile);