import { useContext } from "react";
import Context from "../context/Context";
import { Navigate } from "react-router-dom";

const RutasPublicas = ({ children }) => {
  const { logged } = useContext(Context);

  return !logged ? children : <Navigate to={"/home"}></Navigate>;
};

export default RutasPublicas;
