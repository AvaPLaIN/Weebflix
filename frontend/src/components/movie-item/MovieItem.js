import { MovieItemComponent } from './MovieItem.styled';
import { Link } from 'react-router-dom';

const MovieItem = ({ episode }) => {
  return (
    <Link
      style={{ width: '100%' }}
      className="link"
      to={{ pathname: '/moviePlayer', movie: episode }}
    >
      <MovieItemComponent>
        <img src={episode?.thumnail} alt="" />
        <h2>{episode?.title}</h2>
        <div className="details">
          <span>Length: {episode?.length}</span>
          <span>Released: {episode?.released}</span>
        </div>
      </MovieItemComponent>
    </Link>
  );
};

export default MovieItem;
