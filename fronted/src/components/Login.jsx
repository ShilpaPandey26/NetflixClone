import Header from "./Header";
import { useState } from "react";
import { API_END_POINT } from "../utils/constant";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);

  const LoginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (isLogin) {
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (res.data.success) {
          toast.success(res.data.message);
        }

        dispatch(setUser(res.data.user));
        navigate("/browse");
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      //register

      dispatch(setLoading(true));

      const user = { fullName, email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (res.data.success) {
          toast.success(res.data.message);
        }
        navigate("/browse");
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        dispatch(setLoading(false));
      }
      setFullName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <Header />
      <div className="absolute top-0 z-1 bg-cover darken-img">
        <img src="../src/assets/bg.jpg" className="h-[100vh] w-[100vw]" />
      </div>

      <form
        className="absolute z-11 bg-neutral-900  left-[550px] top-[160px]  rounded-md px-16 py-7 opacity-90"
        onSubmit={getInputData}
      >
        <h1 className="text-white text-3xl p-5 text-center font-semibold">
          {isLogin ? "Login" : "Signup"}
        </h1>
        <div className=" w-64 rounded-sm flex flex-col gap-3 ">
          {!isLogin && (
            <input
              type="text"
              placeholder="Enter your full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="p-3  outline-none rounded-md bg-slate-800 text-white"
            />
          )}

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3  outline-none rounded-md bg-slate-800 text-white"
          />
          <input
            type="password"
            placeholder="Enter your passward"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 outline-none rounded-md bg-slate-800 text-white"
          />
          <button className="bg-red-700 p-3 rounded-md text-white text-xl font-semibold">
            {`${isLoading ? "loading..." : isLogin ? "Login" : "Signup"}`}
          </button>

          <p className="text-white">
            {isLogin ? "New to Neflix?" : "Already have account?"}
            <span
              onClick={LoginHandler}
              className="text-blue-500 mx-3 cursor-pointer"
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
