import React, { useState } from 'react'
import InputFiles from "react-input-files";
import './labelAndInputFile.css'
import { bindActionCreators } from "redux";
import { connect, useSelector } from "react-redux";
import { addProductImage } from "../../actions/actionProduct";


const labelAndInputFile = (props) => {
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
      props.componentFather(reader.result)
    }
    img[0] ? reader.readAsDataURL(file) : ''
  }

  return (
    <React.Fragment>
      <InputFiles
        multiple={props.multiple}
        {...props.input}
      >
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

      </InputFiles>
    </React.Fragment>
  )

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