import axios from "axios";
import { Now_Playing_Movie, options } from "../utils/constant";
import {getNowPlayingMovies} from "../redux/moviesSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(Now_Playing_Movie, options);
    // console.log(res.data.results);   
    dispatch(getNowPlayingMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export default useNowPlayingMovies;
