//! IMPORT LIBRARIES
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

//! IMPORT REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getRandomAnime } from '../../redux/ducks/animes';

//! IMPORT COMPONENTS
import { FeaturedComponent } from './Featured.styled';

function Featured() {
  //! INIT
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);
  const anime = useSelector((state) => state?.animes?.randomAnime);

  //! USE-EFFECT
  useEffect(() => {
    dispatch(getRandomAnime(user?.accessToken));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FeaturedComponent>
      <img src={anime?.banner} alt="" className="banner" />
      <div className="info">
        <img className="logo" src={anime?.logo} alt="" />
        <div className="details">
          <span className="title">{anime?.title}</span>
          <span className="description">
            {window.innerWidth <= 1000
              ? anime?.description?.slice(0, 200)
              : anime?.description?.slice(0, 300)}
            ...
          </span>
        </div>
        <div className="buttons">
          <button className="playBtn">
            <FontAwesomeIcon icon={faPlay} />
            <Link to={{ pathname: '/player', anime: anime }}>Play</Link>
          </button>
          <button className="infoBtn">
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>More...</span>
          </button>
        </div>
      </div>
    </FeaturedComponent>
  );
}

export default Featured;
