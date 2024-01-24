import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import Admin from "../components/Admin";
import EditUser from "../components/EditUser";

const RouterS = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage></HomePage>}></Route>
      <Route path="/admin" element={<Admin></Admin>}></Route>
      <Route path="/edit-user" element={<EditUser></EditUser>}></Route>
    </Routes>
  );
};

export default RouterS;
