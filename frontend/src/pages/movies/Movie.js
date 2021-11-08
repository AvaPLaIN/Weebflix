//! IMPORT LIBRARIES
import { useState, useEffect } from 'react';

//! IMPORT REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies } from '../../redux/ducks/movies';

//! IMPORT COMPONENTS
import { MovieComponent } from './Movie.styled';
import Navbar from '../../components/navbar/Navbar';
import MovieList from '../../components/movie-list/MovieList';

//! IMPORT UTILS
import { v4 as uuidv4 } from 'uuid';

const Movie = () => {
  //! INIT
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);
  const movies = useSelector((state) => state?.movies?.movies);

  //! USE-STATE
  const [isSmooth, setIsSmooth] = useState(false);

  //! USE-EFFECT
  useEffect(() => {
    dispatch(getAllMovies(user.accessToken));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //! HANDLER
  const handlerSmooth = () => {
    setIsSmooth((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <MovieComponent>
        <img
          className="backgroundBanner"
          src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/a33.jpg"
          alt=""
        />
        <div className="toggle">
          <label className="switch">
            <input onChange={handlerSmooth} type="checkbox" id="togBtn" />
            <div className="slider round"></div>
          </label>
        </div>
        <div className="list">
          {movies?.map((movie) => (
            <MovieList isSmooth={isSmooth} key={uuidv4()} movie={movie} />
          ))}
        </div>
      </MovieComponent>
      ;
    </>
  );
};

export default Movie;
