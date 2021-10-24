import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { RatingComponent } from './RatingItem.styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingItem = ({ anime, progress, setRating }) => {
  //! USE-STATE
  const [currRating, setCurrRating] = useState();

  //! HANDLER
  const handlerChangeRating = (rating, id) => {
    setCurrRating([...Array(parseInt(rating, 10))]);
    setRating(rating, id);
  };

  useEffect(() => {
    const number = parseInt(progress?.rating, 10);
    number > 0 ? setCurrRating([...Array(number)]) : setCurrRating([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RatingComponent>
      <img src={anime?.thumnail} alt="thumnail" />
      <div className="details">
        <span className="title">{anime?.title}</span>
        <div className="info">
          <div className="genre">
            Genre:
            {anime?.genres?.map((genre) => {
              return <span key={uuidv4()}>{genre}</span>;
            })}
          </div>
          <span>Released: {anime?.released}</span>
          <span>Episodes: {anime?.episodes.length}</span>
        </div>
        <div className="rating">
          <div className="stats">
            <div className="ratingCount">
              Rating: {currRating?.length ? currRating?.length : '-'}
            </div>
            <div className="status">Status: {progress?.status}</div>
          </div>
          <div className="setRating">
            <div className="rate">
              <select
                value={progress?.rating}
                onChange={(e) => handlerChangeRating(e.target.value, anime._id)}
              >
                <option value="0">Rate</option>
                <option value="10">(10) Masterpiece</option>
                <option value="9">(9) Great</option>
                <option value="8">(8) Very Good</option>
                <option value="7">(7) Good</option>
                <option value="6">(6) Fine</option>
                <option value="5">(5) Average</option>
                <option value="4">(4) Bad</option>
                <option value="3">(3) Very Bad</option>
                <option value="2">(2) Horrible</option>
                <option value="1">(1) Appalling</option>
              </select>
            </div>
            <div className="stars">
              {currRating?.map(() => (
                <FontAwesomeIcon icon={faStar} key={uuidv4()} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Link className="playBtn" to={{ pathname: '/player', anime: anime }}>
        Play
      </Link>
    </RatingComponent>
  );
};

export default RatingItem;
