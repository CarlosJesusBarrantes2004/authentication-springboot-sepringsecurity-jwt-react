import { Routes, Route, Navigate } from "react-router-dom";
import Index from "../components/Index";
import FormLogin from "../components/FormLogin";
import FormRegister from "../components/FormRegister";
import RouterS from "./RouterS";
import RutasPublicas from "./RutasPublicas";
import RutasPrivadas from "./RutasPrivadas";

const RouterP = () => {
  return (
    <Routes>
      <Route
        path="/index"
        element={
          <RutasPublicas>
            <Index></Index>
          </RutasPublicas>
        }
      ></Route>
      <Route
        path="/login"
        element={
          <RutasPublicas>
            <FormLogin></FormLogin>
          </RutasPublicas>
        }
      ></Route>
      <Route
        path="/register"
        element={
          <RutasPublicas>
            <FormRegister></FormRegister>
          </RutasPublicas>
        }
      ></Route>
      <Route
        path="/"
        element={
          <RutasPublicas>
            <Navigate to={"/index"}></Navigate>
          </RutasPublicas>
        }
      ></Route>
      <Route
        path="/*"
        element={
          <RutasPrivadas>
            <RouterS></RouterS>
          </RutasPrivadas>
        }
      ></Route>
    </Routes>
  );
};

export default RouterP;
