//! IMPORT LIBRARIES
import { useState, useEffect } from 'react';

//! IMPORT REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getProgressAnimes } from '../../redux/ducks/animes';
import { updateAnimeRating } from '../../redux/ducks/user';

//! API
import { updateUserProgress } from '../../api/user';

//! IMPORT COMPONENTS
import { RatingComponent } from './Rating.styled';
import Navbar from '../../components/navbar/Navbar';
import RatingItem from '../../components/RatingItem/RatingItem';

//! IMPORT UTILS
import { v4 as uuidv4 } from 'uuid';

const Rating = () => {
  //! INIT
  const dispatch = useDispatch();
  const jwt = useSelector((state) => state?.user?.accessToken);
  const progress = useSelector((state) => state?.user?.progress);
  const animes = useSelector((state) => state?.animes?.progressAnimes);

  //! USE-STATE
  const [filter, setFilter] = useState('all');

  //! USE-EFFECT
  useEffect(() => {
    dispatch(getProgressAnimes(jwt, progress));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateUserProgress(jwt, progress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  //! HANDLER
  const handleSetRating = (rating, id) => {
    dispatch(updateAnimeRating(rating, id));
  };

  return (
    <>
      <Navbar />
      <RatingComponent>
        <img
          className="backgroundBanner"
          src="https://images6.alphacoders.com/785/thumb-1920-785425.png"
          alt=""
        />
        <div className="filter">
          <label for="cars">Filter: </label>

          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="unrated">Unrated</option>
            <option value="rated">Rated</option>
            <option value="top">Top Rated</option>
          </select>
        </div>
        <div className="list">
          {progress?.map((progress) => {
            if (
              //! RENDER ALL
              filter === 'all' ||
              //! RENDER UNRATED COMPONENTS
              (filter === 'unrated' &&
                (progress?.rating === '0' || progress?.rating === '-')) ||
              //! RENDER RATED COMPONENTS
              (filter === 'rated' &&
                progress?.rating !== '0' &&
                progress?.rating !== '-') ||
              //! RENDER TOP COMPONENTS
              (filter === 'top' &&
                (progress?.rating === '9' || progress?.rating === '10'))
            ) {
              return (
                <RatingItem
                  key={uuidv4()}
                  anime={animes?.find((anime) => anime?._id === progress?.id)}
                  progress={progress}
                  setRating={handleSetRating}
                />
              );
            }
            return null;
          })}
        </div>
      </RatingComponent>
    </>
  );
};

export default Rating;
