//! IMPORT LIBRARIES
import { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faThList,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router';

//! IMPORT REDUX
import { useDispatch, useSelector } from 'react-redux';
import {
  addProgressAnime,
  updateAnimeCount,
  updateAnimeStatus,
} from '../../redux/ducks/user';

//! IMPORT API
import { updateUserProgress } from '../../api/user';

//! IMPORT COMPONENTS
import { PlayerComponent } from './Player.styled';

//! IMPORT UTILS
import { v4 as uuidv4 } from 'uuid';

const Player = () => {
  //! INIT
  const dispatch = useDispatch();
  const location = useLocation();
  const anime = location.anime;
  const progress = useSelector((state) => state.user.progress);
  const jwt = useSelector((state) => state.user.accessToken);

  const selectEpisode = () => {
    const index = progress?.findIndex((prog) => prog.id === anime._id);
    if (index >= 0) {
      return progress[index]?.count;
    } else {
      return 0;
    }
  };

  //! REF
  const video = useRef();

  //! USE-STATE
  const [episode, setEpisode] = useState();
  const [currEpisodeIndex, setCurrEpisodeIndex] = useState(selectEpisode);
  const [isEpisodeOpen, setIsEpisodeOpen] = useState(false);

  //! USE-EFFECT
  useEffect(() => {
    setTimeout(() => {
      video?.current?.setAttribute('sandbox', '');
    }, 10);
    setEpisode(anime?.episodes[currEpisodeIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const index = progress?.findIndex((prog) => prog.id === anime._id);
    const animeId = anime?._id;
    const animeEpisodesCount = anime?.episodes?.length;

    if (index < 0) {
      const newAnime = {
        id: animeId,
        count: 0,
        status: 'currently Watching',
        rating: '-',
      };
      dispatch(addProgressAnime(newAnime));
    } else {
      dispatch(updateAnimeCount(currEpisodeIndex, animeId));
      if (currEpisodeIndex >= animeEpisodesCount - 1) {
        dispatch(updateAnimeStatus('completed', animeId));
      } else {
        dispatch(updateAnimeStatus('currently Watching', animeId));
      }
    }

    setTimeout(() => {
      video?.current?.setAttribute(
        'sandbox',
        'allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation'
      );
    }, 10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [episode]);

  useEffect(() => {
    updateUserProgress(jwt, progress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  //! HANDLER
  const handleSetEpisode = (index, status) => {
    video?.current?.removeAttribute('sandbox');
    if (status === 'skip') {
      if (
        currEpisodeIndex + index >= 0 &&
        currEpisodeIndex + index < anime?.episodes?.length
      ) {
        index += currEpisodeIndex;
      } else {
        index = currEpisodeIndex;
      }
    }
    setCurrEpisodeIndex(index);
    setEpisode(anime?.episodes[index]);
  };

  return (
    <>
      {!anime ? (
        <Redirect to={{ pathname: '/' }} />
      ) : (
        <PlayerComponent
          isEpisodeOpen={isEpisodeOpen}
          currEpisode={currEpisodeIndex}
        >
          <Link to="/" className="backwards">
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Back</span>
          </Link>
          <FontAwesomeIcon
            onClick={() => handleSetEpisode(-1, 'skip')}
            className="sliderArrow left"
            icon={faAngleDoubleLeft}
          />
          <FontAwesomeIcon
            onClick={() => handleSetEpisode(1, 'skip')}
            className="sliderArrow right"
            icon={faAngleDoubleRight}
          />
          <FontAwesomeIcon
            onClick={() => setIsEpisodeOpen(!isEpisodeOpen)}
            className="openEpisodes"
            icon={faThList}
          />
          <span className="count">Episode: {currEpisodeIndex + 1}</span>
          <span className="animeTitle">{anime?.title}</span>
          <div className="container">
            <span className="title">{anime?.title}</span>
            <div className="searchbar">
              <FontAwesomeIcon className="searchIcon" icon={faSearch} />
              <input className="searchInput" type="text" />
            </div>
            <div className="episodes">
              {anime?.episodes?.map((episode, index) => {
                return (
                  <div
                    onClick={() => handleSetEpisode(index)}
                    key={uuidv4()}
                    className="episode"
                  >
                    <span>{index + 1}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <iframe
            className="videoSource"
            frameBorder="0"
            allow="autoplay"
            autoPlay="1"
            allowFullScreen
            title="Player"
            src={episode}
            ref={video}
            onload="bindings(this)"
          ></iframe>
        </PlayerComponent>
      )}
    </>
  );
};

export default Player;
