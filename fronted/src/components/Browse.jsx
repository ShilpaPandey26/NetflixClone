import {useSelector } from "react-redux";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedingMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import SearchMovie from "./SearchMovie";




const Browse = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) =>store.movie.toggle)
  const navigate = useNavigate();
  //My custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedingMovies();
  useUpcomingMovies();


  
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
   
  }, []);


  return (
    <div>
      <Header />
      <div>
        {
          toggle ? <SearchMovie/> :(
            <>
             <MainContainer/>
        <MovieContainer/>
            </>
           

          )
        }
        
      </div>
    </div>
  );


};

export default Browse;
