import axios from "axios";
import { Popular_Movie, options } from "../utils/constant";
import {getPopularMovies } from "../redux/moviesSlice";
import {  useDispatch } from "react-redux";

const usePopularMovies = async () => {
    const dispatch = useDispatch();
  try {
    const res = await axios.get(Popular_Movie, options); 
    // console.log(res.data.results);     
    dispatch(getPopularMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export default usePopularMovies;
