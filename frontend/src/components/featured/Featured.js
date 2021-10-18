import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FeaturedComponent } from './Featured.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { getRandomAnime } from '../../api/anime';

function Featured({ user }) {
  //! USE-STATE
  const [anime, setAnime] = useState({});

  //! USE-EFFECT
  useEffect(() => {
    const animeList = async () => {
      try {
        const res = await getRandomAnime(user);
        setAnime(res);
      } catch (error) {
        console.error(error);
      }
    };
    animeList();
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
            <Link to={{ pathname: '/player', anime: anime }}>Abspielen</Link>
          </button>
          <button className="infoBtn">
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>Weitere Infos</span>
          </button>
        </div>
      </div>
    </FeaturedComponent>
  );
}

export default Featured;
