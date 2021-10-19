import { useState, useEffect } from 'react';
import { PlayerComponent } from './Player.styled';
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
import { v4 as uuidv4 } from 'uuid';
import { updateProgress } from '../../api/anime';

function Player({ user, setUser }) {
  const location = useLocation();
  const anime = location.anime;

  const selectEpisode = () => {
    const index = user?.data?.result?.progress.findIndex(
      (prog) => prog.id === anime._id
    );
    if (index >= 0) {
      return user?.data?.result?.progress[index].count;
    } else {
      return 0;
    }
  };

  //! USE-STATE
  const [episode, setEpisode] = useState();
  const [currEpisodeIndex, setCurrEpisodeIndex] = useState(selectEpisode);
  const [isEpisodeOpen, setIsEpisodeOpen] = useState(false);

  //! USE-EFFECT
  useEffect(() => {
    location.anime && setEpisode(location.anime.episodes[0]);
  }, [location.anime]);

  const updateUser = async (newUser) => {
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    updateProgress(user);
  };

  useEffect(() => {
    setIsEpisodeOpen(false);
    const index = user?.data?.result?.progress.findIndex(
      (prog) => prog.id === anime._id
    );

    if (index >= 0) {
      user?.data?.result?.progress.splice(index, 1, {
        id: anime._id,
        count: currEpisodeIndex,
      });
    } else {
      user?.data?.result?.progress.push({
        id: anime._id,
        count: 0,
      });
    }
    updateUser(user);
  }, [episode]);

  //! HANDLER
  const handleSetEpisode = (index, status) => {
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
            <span>Zurück</span>
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
              {anime?.episodes.map((episode, index) => {
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
            sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
            frameBorder="0"
            allow="autoplay"
            autoPlay="1"
            allowFullScreen
            title="Player"
            src={episode}
          ></iframe>
        </PlayerComponent>
      )}
    </>
  );
}

export default Player;
