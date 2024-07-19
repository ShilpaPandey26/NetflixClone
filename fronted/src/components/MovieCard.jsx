import { useDispatch } from "react-redux";
import { TMDB_IMG_URL } from "../utils/constant";
import { getId,setOpen } from "../redux/moviesSlice";

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();
  if (posterPath == null) return null;

  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  };

  return (
    <div className="w-48 " onClick={handleOpen}>
      <img src={`${TMDB_IMG_URL}/${posterPath}`} alt="movie" />
    </div>
  );
};

export default MovieCard;
