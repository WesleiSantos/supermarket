import React, { useState } from 'react'
import Grid from '../layout/grid'
import InputFiles from "react-input-files";
import './labelAndInputFile.css'
import { bindActionCreators } from "redux";
import { connect, useSelector  } from "react-redux";
import { addProductImage } from "../../actions/actionProduct";


const labelAndInputFile = (props) => {
    const [imagePreviewUrl, setImagePreviewUrl] = useState({})
    const product = useSelector(state => state.product)

    function onChange(e) {
        const file = e[0]
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
         
            <div className="imgPreview">
                    <img src={product.imagePreviewUrl}  />
                </div>
            <div className="d-flex flex-row">
                {
                    addImage(props.input.value)
                }
                
                <label className="custom-file-label" htmlFor="customFileLang">                    
                    {
                        onChange(props.input.value) === undefined
                            ? "Selecione uma imagem"
                            : onChange(props.input.value)
                    }
                </label>
            </div>
        </InputFiles>)

}

function mapStateToProps(state) {
  return {
      imagePreviewUrl: state.product.image
  };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addProductImage,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(labelAndInputFile);