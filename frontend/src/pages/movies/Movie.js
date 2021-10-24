import { useState, useEffect } from 'react';
import { MovieComponent } from './Movie.styled';
import Navbar from '../../components/navbar/Navbar';
import { getMovies } from '../../api/movie';
import MovieList from '../../components/movie-list/MovieList';
import { v4 as uuidv4 } from 'uuid';

const Movie = ({ user, setUser, logout }) => {
  //! USE-STATE
  const [movies, setMovies] = useState();
  const [isSmooth, setIsSmooth] = useState(false);

  //! USE-EFFECT
  useEffect(() => {
    const movies = async () => {
      try {
        const res = await getMovies(user);
        setMovies(res);
      } catch (error) {
        console.error(error);
      }
    };
    movies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //! HANDLER
  const handlerSmooth = () => {
    setIsSmooth((prev) => !prev);
  };

  return (
    <>
      <Navbar user={user} setUser={setUser} logout={logout} />
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
