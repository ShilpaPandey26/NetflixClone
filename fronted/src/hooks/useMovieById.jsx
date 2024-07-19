import axios from "axios";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getTrailerMovies } from "../redux/moviesSlice";
import { useEffect } from "react";

const useMovieById = async (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );
        //   console.log(res.data.results);
        const trailer = res?.data?.results?.filter((item) => {
          return item.type === "Trailer";
        });

        dispatch(
          getTrailerMovies(
            trailer.length > 0 ? trailer[0] : res.data.results[0]
          )
        );
      } catch (error) {
        console.log(error);
      }
    };
    getMovieById();
  }, []);
};

export default useMovieById;
