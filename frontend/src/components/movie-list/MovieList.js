import { MovieListComponent } from './MovieList.styled';
import MovieItem from '../movie-item/MovieItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

const MovieList = ({ movie, isSmooth }) => {
  return (
    <MovieListComponent isSmooth={isSmooth} items={movie?.movies?.length}>
      <img className="listBanner" src={movie?.banner} alt="" />
      <div className="movieBanner">
        <FontAwesomeIcon icon={faArrowDown} />
        <h1>{movie?.title}</h1>
        <p>{movie?.movies?.length}</p>
      </div>
      <div className="movies">
        {movie?.movies?.map((episode) => (
          <MovieItem key={uuidv4()} episode={episode} />
        ))}
      </div>
    </MovieListComponent>
  );
};

export default MovieList;
