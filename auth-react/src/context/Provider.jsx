import { useReducer, useState } from "react";
import Context from "./Context";
import types from "./types";

const loginReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return { logged: true };
    case types.logout:
      return { logged: false };
    default:
      return state;
  }
};

const init = () => {
  const token = localStorage.getItem("token");
  return {
    logged: token ? true : false,
  };
};

const Provider = ({ children }) => {
  const [loginState, dispatchLogin] = useReducer(loginReducer, {}, init);
  const [roles, setRoles] = useState([]);

  const login = () => {
    dispatchLogin({ type: types.login });
  };

  const logout = () => {
    dispatchLogin({ type: types.logout });
    localStorage.removeItem("token");
  };

  return (
    <Context.Provider value={{ ...loginState, login, logout, roles, setRoles }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
