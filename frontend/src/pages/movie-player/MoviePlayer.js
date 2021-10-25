import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MoviePlayerComponent } from './MoviePlayer.styled';

const MoviePlayer = () => {
  //! INIT
  const location = useLocation();
  const movie = location?.movie;

  //! USE-REF
  const videoRef = useRef();

  //! USE-EFFECT
  useEffect(() => {
    const movieProgresses =
      JSON.parse(localStorage.getItem('movieProgress')) || [];
    const movieId = movie?.title + movie?.released + movie?.length;

    const currMovieProgress = movieProgresses?.findIndex(
      (movie) => movie.id === movieId
    );

    if (currMovieProgress === -1) {
      const movieProgress = { id: movieId, progress: 0 };
      movieProgresses.push(movieProgress);
    }

    videoRef.current.currentTime =
      movieProgresses[currMovieProgress]?.progress || 0;

    const progressUpdate = setInterval(() => {
      const time = videoRef?.current?.currentTime;
      const movieIndex = movieProgresses.findIndex(
        (movie) => movie.id === movieId
      );
      movieProgresses[movieIndex].progress = time;
      localStorage.setItem('movieProgress', JSON.stringify(movieProgresses));
    }, 30000);

    return () => {
      clearInterval(progressUpdate);
    };
  }, []);

  //! RENDER
  return (
    <MoviePlayerComponent>
      <Link to="/movies" className="backwards">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Back</span>
      </Link>
      <h1>{movie?.title}</h1>
      <video ref={videoRef} src={movie?.src} controls autoPlay></video>
    </MoviePlayerComponent>
  );
};

export default MoviePlayer;
