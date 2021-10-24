import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MoviePlayerComponent } from './MoviePlayer.styled';

const MoviePlayer = () => {
  //! INIT
  const location = useLocation();
  const movie = location.movie;

  return (
    <MoviePlayerComponent>
      <Link to="/movies" className="backwards">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Zurück</span>
      </Link>
      <h1>{movie?.title}</h1>
      <video src={movie?.src} controls autoPlay></video>
    </MoviePlayerComponent>
  );
};

export default MoviePlayer;
