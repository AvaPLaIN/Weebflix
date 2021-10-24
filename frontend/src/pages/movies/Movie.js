import { useState, useEffect } from 'react';
import { MovieComponent } from './Movie.styled';
import Navbar from '../../components/navbar/Navbar';
import { getMovies } from '../../api/movie';
import MovieList from '../../components/movie-list/MovieList';
import { v4 as uuidv4 } from 'uuid';

const Movie = ({ user, setUser, logout }) => {
  //! USE-STATE
  const [movies, setMovies] = useState();

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

  return (
    <>
      <Navbar user={user} setUser={setUser} logout={logout} />
      <MovieComponent>
        <img
          className="backgroundBanner"
          src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/a33.jpg"
          alt=""
        />
        <div className="list">
          {movies?.map((movie) => (
            <MovieList key={uuidv4()} movie={movie} />
          ))}
        </div>
      </MovieComponent>
      ;
    </>
  );
};

export default Movie;
