import {
  CLICK_ADD_PRODUCT_DESCRIPTION_MEASURE,
  CLICK_ADD_PRODUCT_UNITY,
  CLICK_ADD_PRODUCT_VALUE,
  CLICK_ADD_PRODUCT_CATEGORY,
  CLICK_ADD_PRODUCT_PERCENTAGE_DISCOUNT,
  CLICK_ADD_PRODUCT_CODE,
  CLICK_ADD_PRODUCT_DESCRIPTION,
  CLICK_ADD_PRODUCT_QUANTITY,
  CLICK_ADD_PRODUCT_IMAGE,
  CLICK_ADD_PRODUCT,
  PRODUCT_SEARCHED,
  FORM_PRODUCT_CLEAR,
  CLEAR_DESCRIPTION,
} from "./actionsTypes";
import api from "../api";
import { toastr } from "react-redux-toastr";
import {reset as resetForm, initialize } from "redux-form"
import { push, go } from "react-router-redux";
import history from '../main/history';

export const search = () => {
  return dispatch => {
    api.get("/auth/listProducts").then( request => dispatch([{ type: PRODUCT_SEARCHED,
    payload: request}])).catch((error) => {
      Object.values(error.response.data).forEach((error) =>
        toastr.error("Erro", error[0])
      );
    })
  }
}

export const showUpdate = (product) =>{
  console.log(product)
  return dispatch => { 
      dispatch([initialize('registerProduct', product), history.go(1), history.push('/user/updateProduct')])
  }
}

const imagePost = (img) => {
  const image = new FormData();
  image.append('file', img);
  return image
};

export const addProduct = (product) => {
    return (dispatch) => {
      const image = new FormData();
      console.log(product)
      image.append('file', product.inputFile[0]);
      console.log("add image", image.get('file'));
      product = {...product, image}
    api
      .post("/auth/registerProducts", product)
      .then(
        (resp) =>
          console.log(
            "resposta do servidor",resp
          ) 
      )
      .then((resp) => {
        toastr.success("Sucesso", "Operação Realizada com sucesso.");
        dispatch([resetForm('registerProduct')])
      })
      .catch((error) => {
        Object.values(error.response.data).forEach((error) =>
          toastr.error("Erro", error[0])
        );
      });
}
}

export const addProductOriginal = (product) => {
  const image = new FormData();
  image.append('file', product.image);
  console.log("add image", image.get('file'), product.image.name);
  return (dispatch, getState) => {
    api
      .post("/auth/registerProducts", image)
      .then(
        (resp) =>
          console.log(
            resp
          ) 
      )
      .then((resp) => {
        dispatch([search(), resetForm('registerProduct')]);
        toastr.success("Sucesso", "Operação Realizada com sucesso.");
      })
      .catch((error) => {
        Object.values(error.response.data).forEach((error) =>
          toastr.error("Erro", error[0])
        );
      });
  }; 
};

export const clearDescripition = () => {
  return { type: CLEAR_DESCRIPTION };
};

export const clearFormProduct = () => {
  return {  type: FORM_PRODUCT_CLEAR }
}

export const clear = () => {
    return (dispatch) => {
        dispatch([resetForm('registerProduct')])
    }
};

export const addProductDescriptionMeasure = (event) => ({
  type: CLICK_ADD_PRODUCT_DESCRIPTION_MEASURE,
  payload: event.target.value,
});

export const addProductUnity = (event) => ({
  type: CLICK_ADD_PRODUCT_UNITY,
  payload: event.target.value,
});

export const addProductValue = (event) => ({
  type: CLICK_ADD_PRODUCT_VALUE,
  payload: event.target.value,
});

export const addProductCategory = (event) => ({
  type: CLICK_ADD_PRODUCT_CATEGORY,
  payload: event.target.value,
});

export const addProductPercentageDiscount = (event) => ({
  type: CLICK_ADD_PRODUCT_PERCENTAGE_DISCOUNT,
  payload: event.target.value,
});

export const addProductCode = (event) => ({
  type: CLICK_ADD_PRODUCT_CODE,
  payload: event.target.value,
});

export const addProductDescription = (event) => ({
  type: CLICK_ADD_PRODUCT_DESCRIPTION,
  payload: event.target.value,
});

export const addProductQuantity = (event) => ({
  type: CLICK_ADD_PRODUCT_QUANTITY,
  payload: event.target.value,
});

export const addProductImage = (event) => ({
          type: CLICK_ADD_PRODUCT_IMAGE,
          payload: event
});


/*dispatch({ type: CLICK_ADD_PRODUCT, payload: product })*/

 /*
    headers: {
      'accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': `multipart/form-data; boundary=${image._boundary}`,
    }

    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
    
    image.append('_method', 'PATCH');

    const image = new FormData();
  image.append('file', event);
  console.log("add image", image.get('file'), event.name);
  return (dispatch) =>
    api
      .post("/auth/addImage", image,{
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        }
      })
  */