import axios from "axios";
import { Top_Rated_Movie, options } from "../utils/constant";
import {getTopRatedMovies } from "../redux/moviesSlice";
import {  useDispatch } from "react-redux";

const useTopRatedMovies = async () => {
    const dispatch = useDispatch();
  try {
    const res = await axios.get(Top_Rated_Movie, options); 
    // console.log(res.data.results);     
    dispatch(getTopRatedMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export default useTopRatedMovies;