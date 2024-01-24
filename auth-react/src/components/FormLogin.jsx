import { useForm } from "react-hook-form";
import AuthService from "../services/AuthService";
import { useContext } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const { register, handleSubmit } = useForm();
  const { setRoles, login } = useContext(Context);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await AuthService.authenticate(data);
      setRoles(res.data.roles);
      localStorage.setItem("token", res.data.token);
      login();

      res.data.roles.includes("ADMIN")
        ? navigate("/admin", { replace: true })
        : navigate("/home", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mb-1">
        <label htmlFor="user-name">Username</label>
        <input
          id="user-name"
          type="text"
          className="bg-slate-200 rounded-sm px-2 py-1 outline-none"
          {...register("userName")}
        />
      </div>
      <div className="flex flex-col mb-1">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="bg-slate-200 rounded-sm px-2 py-1 outline-none"
          {...register("password")}
        />
      </div>
      <button className="bg-green-500 rounded-lg px-4 py-2 text-white font-bold text-sm">
        Iniciar sesión
      </button>
    </form>
  );
};

export default FormLogin;
