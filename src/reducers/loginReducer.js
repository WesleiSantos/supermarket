import { CLICK_LOGIN, SEARCH_ME, LOGIN_CLEAR } from "../actions/actionsTypes";

const initialState = {
  name: undefined,
  surname: undefined,
  id: undefined,
  email:undefined,
  type_user: undefined,
  date: undefined,
  time: undefined,
  loading: undefined,
  error: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_LOGIN:
      return {
        ...state,
        loading:true
      };
    case SEARCH_ME:
      return {
        ...state,
        name:action.payload.name,
        surname:action.payload.surname,
        email:action.payload.email,
        type_user:action.payload.id_type_user,
        id:action.payload.id        
      }
    case LOGIN_CLEAR:
      return {
        ...initialState
      }
    default:
      return state;
  }
};
