import { useContext } from "react";
import Context from "../context/Context";
import { Navigate } from "react-router-dom";

const RutasPrivadas = ({ children }) => {
  const { logged } = useContext(Context);

  return logged ? children : <Navigate to={"/login"}></Navigate>;
};

export default RutasPrivadas;
