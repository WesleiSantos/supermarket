import api from "../api";
import { toastr } from "react-redux-toastr";
import { CLICK_LOGIN, SEARCH_ME, LOGIN_CLEAR } from "./actionsTypes";
import { login } from "../main/auth";
import { push, go } from "react-router-redux";
import history from "../main/history";

export const loginUser = (data) => {
  return (dispatch) => {
    const { email, password } = data;
    api
      .post("/auth/login", { email, password })
      .then((resp) => {
        dispatch([
          { type: CLICK_LOGIN, payload: data },
          login(resp.data.access_token),
          fetchMy(),
        ]);
      })
      .then((resp) => {
        toastr.success("Sucesso", "Operação Realizada com sucesso.");
      })
      .then((resp) => dispatch([push("/user/dashboard")]))
      .catch((error) => {
        error.response
          ? toastr.error("Erro", error.response.data.error)
          : toastr.error("Erro", error);
      });
  };
};

export const fetchMy = () => {
  return (dispatch) => {
    api
      .get("/auth/me")
      .then((response) => dispatch({ type: SEARCH_ME, payload: response.data }))
      .then((resp) =>
        toastr.success("Sucesso", "Operação Realizada com sucesso.")
      )
      .catch((error) => {
        toastr.error("Erro", error.response.data.error);
      });
  };
};

export const handleLogout = () => {

  return (dispatch) => {
    api
      .post("/auth/logout")
      .then((response) => dispatch({ type: LOGIN_CLEAR }))
      //.then((resp) => dispatch(push("/login")))
      .then((resp) => dispatch(history.push("/login")))
      .catch((error) => {
        toastr.error("Erro", error.response.data.error);
      });
  };
};
