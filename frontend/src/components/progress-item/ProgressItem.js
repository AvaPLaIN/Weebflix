//! IMPORT LIBRARIES
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faTimes,
  faCheck,
  faArrowRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

//! IMPORT COMPONENTS
import { ProgressItemComponent } from './ProgressItem.styled';

//! IMPORT REDUX
import { useDispatch } from 'react-redux';
import { updateAnimeCount } from '../../redux/ducks/user';

//! IMPORT HOOKS
import useHovor from '../../hooks/useHover';

//! IMPORT UTILS
import { v4 as uuidv4 } from 'uuid';

const ProgressItem = ({ anime, progress, setStatus }) => {
  //! INIT
  const dispatch = useDispatch();

  //! USE-HOOKS
  const [hoverRef, isHovored] = useHovor(1000);

  //! HANDLER
  const handleProgress = (state) => {
    const id = anime?._id;

    if (state === 'completed') {
      const newEpisodeCount = anime?.episodes?.length - 1;
      dispatch(updateAnimeCount(newEpisodeCount, id));
    }

    setStatus(state, id);
  };

  return (
    <ProgressItemComponent
      progress={Math.round(
        ((progress?.count + 1) / anime?.episodes?.length) * 100
      )}
      status={progress?.status}
      rating={progress?.rating}
      ref={hoverRef}
    >
      {isHovored && window.innerWidth > 1200 ? (
        <iframe
          className="infoSource"
          src={anime?.trailer + '&controls=0&showinfo=0'}
          title="trailer"
        ></iframe>
      ) : (
        <>
          <img className="infoSource" src={anime?.thumnail} alt=""></img>
          <div className="progress">
            <div className="progressCount">{progress?.count + 1}</div>
            <div className="currProgress">
              <span className="procent">
                {Math.round(
                  ((progress?.count + 1) / anime?.episodes?.length) * 100
                )}
                %
              </span>
            </div>
            <div className="progressCount">{anime?.episodes?.length}</div>
          </div>
          <div className="status">
            <span>{progress?.status}</span>
          </div>
          <div className="rating">
            <span>{progress?.rating}</span>
            <FontAwesomeIcon icon={faStar} />
          </div>
        </>
      )}
      <Link className="playerLink" to={{ pathname: '/player', anime: anime }}>
        <div className="infos">
          <div className="itemTitle">
            <span>
              {anime?.title?.slice(0, 91)}
              {anime?.title?.length > 91 && '...'}
            </span>
          </div>
          <div className="infoTop">
            <span>{anime?.released}</span>
            <span>{anime?.status}</span>
            <span>{anime?.episodes.length} Folgen</span>
          </div>
          <div className="itemGenre">
            {anime?.genres?.map((genre) => {
              return <span key={uuidv4()}>{genre}</span>;
            })}
          </div>
        </div>
      </Link>
      <div className="stateOfAnime">
        <div className="container">
          <button
            onClick={() => handleProgress('deleted')}
            className="changeProgress delete"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <div className="hoverText">
            <span>Delete</span>
          </div>
        </div>
        <div className="container">
          <button
            onClick={() => handleProgress('canceled')}
            className="changeProgress cancel"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="hoverText">
            <span>Cancel</span>
          </div>
        </div>
        <div className="container">
          <button
            onClick={() => handleProgress('currently Watching')}
            className="changeProgress currently"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <div className="hoverText">
            <span>Continue</span>
          </div>
        </div>
        <div className="container">
          <button
            onClick={() => handleProgress('completed')}
            className="changeProgress completed"
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <div className="hoverText">
            <span>Completed</span>
          </div>
        </div>
      </div>
    </ProgressItemComponent>
  );
};

export default ProgressItem;
