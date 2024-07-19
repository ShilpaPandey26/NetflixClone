import LogoSvg from "../assets/logo.svg";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { API_END_POINT } from "../utils/constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/userSlice";
import toast from "react-hot-toast";
import { setToggle } from "../redux/moviesSlice";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) =>store.movie.toggle)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle())
  };

  return (
    <div className="absolute z-10 flex w-full  items-center justify-between px-6 bg-gradient-to-b from-black ">
      <img  className="w-26" src={LogoSvg} alt="logo" />
      {user && (
        <div className="flex items-center gap-5">
          <div className="flex items-center text-white text-lg">
            <IoIosArrowDropdown />
            <h1>{user.fullName}</h1>
          </div>
          <button
            className="px-3 py-2 bg-red-600 rounded-lg text-white"
            onClick={logoutHandler}
          >
            Logout
          </button>
          <button
            className="px-3 py-2 bg-red-600 rounded-lg text-white"
            onClick={toggleHandler}
          >
            {toggle ? "Home ": " Search Movie"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
