import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ProgressItemComponent } from './ProgressItem.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faTimes,
  faCheck,
  faArrowRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const ProgressItem = ({ anime, progress, setProgress }) => {
  //! USE-STATE
  const [isHovored, setIsHovored] = useState(false);

  //! USE-REF
  const hoverRef = useRef();

  //! remove hover state *browser bug see on github
  useEffect(() => {
    if (isHovored) {
      let interval = setInterval(() => {
        if (
          isHovored &&
          hoverRef.current &&
          hoverRef.current.matches(':hover') === false
        ) {
          setIsHovored(false);
        }
      }, 200);
      return () => {
        clearInterval(interval);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  //! HANDLER
  const handlerProgress = (state) => {
    const id = anime?._id;
    setProgress(state, id);
  };

  return (
    <ProgressItemComponent
      onMouseEnter={() => setIsHovored(true)}
      onMouseLeave={() => setIsHovored(false)}
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
            <span>{anime?.title}</span>
          </div>
          <div className="infoTop">
            <span>{anime?.released}</span>
            <span>{anime?.status}</span>
            <span>{anime?.episodes.length} Folgen</span>
          </div>
          <div className="itemDescription">
            {anime?.description.slice(0, 50)}...
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
            onClick={() => handlerProgress('deleted')}
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
            onClick={() => handlerProgress('canceled')}
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
            onClick={() => handlerProgress('currently Watching')}
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
            onClick={() => handlerProgress('completed')}
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
