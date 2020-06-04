import {
  CLICK_ADD_PRODUCT_DESCRIPTION,
  CLICK_ADD_PRODUCT_UNITY,
  CLICK_ADD_PRODUCT_VALUE,
  CLICK_ADD_PRODUCT_CATEGORY,
  CLICK_ADD_PRODUCT_PERCENTAGE_DISCOUNT,
  CLICK_ADD_PRODUCT_CODE,
  CLICK_ADD_PRODUCT_DESCRIPTION_MEASURE,
  CLICK_ADD_PRODUCT_QUANTITY,
  CLICK_ADD_PRODUCT_IMAGE,
  CLICK_ADD_PRODUCT,
  PRODUCT_SEARCHED,
  FORM_PRODUCT_CLEAR,
  CLEAR_DESCRIPTION
} from "../actions/actionsTypes";

const initialState = {
  id: "",
  description_product: undefined,
  unity_sale: "UN",
  value_unitary: undefined,
  category: undefined,
  percentage_discount: undefined,
  code: undefined,
  description_measure: undefined,
  quantity: undefined,
  image:undefined,
  list:[]
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_ADD_PRODUCT_DESCRIPTION:
      return {
        ...state,
        description_product: action.payload,
      };
    case CLICK_ADD_PRODUCT_UNITY:
      return {
        ...state,
        unity_sale: action.payload
      };
    case CLICK_ADD_PRODUCT_VALUE:
      return {
        ...state,
        value_unitary: action.payload
      };
    case CLICK_ADD_PRODUCT_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    case CLICK_ADD_PRODUCT_PERCENTAGE_DISCOUNT:
      return {
        ...state,
        percentage_discount: action.payload
      };
    case CLICK_ADD_PRODUCT_CODE:
      return {
        ...state,
        code: action.payload,
      };
    case CLICK_ADD_PRODUCT_DESCRIPTION_MEASURE:
      return {
        ...state,
        description_measure: action.payload
      };
    case CLICK_ADD_PRODUCT_QUANTITY:
      return{
        ...state,
        quantity: action.payload
      }
    case CLICK_ADD_PRODUCT_IMAGE:
      return {
        ...state,
        image: action.payload
      };
    case CLICK_ADD_PRODUCT:
      return {
        ...state,
      }
    case  FORM_PRODUCT_CLEAR:
      return {
        ...initialState
      };
    case PRODUCT_SEARCHED:
      return {...state, list: action.payload.data }
    case CLEAR_DESCRIPTION:
      return {...state, description_measure:'' }
    default:
      return state;
  }
};
