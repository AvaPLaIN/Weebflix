import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import debounce from 'lodash.debounce';
import { SearchComponent } from './Search.styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faSearch,
  faInfo,
} from '@fortawesome/free-solid-svg-icons';
import SearchItem from '../../components/search-item/SearchItem';
import { getAllAnime, getAnimeByName } from '../../api/anime';

function Search({ user }) {
  //! USE-STATE
  const [searchTitle, setSearchTitle] = useState('');
  const [animeList, setAnimeList] = useState([]);
  const [allAnimes, setAllAnimes] = useState([]);
  const [banner, setBanner] = useState('');

  //! USE-EFFECT
  useEffect(() => {
    searchTitle ? searchList(searchTitle) : setAnimeList(allAnimes);
  }, [searchTitle]);

  useEffect(() => {
    setBanner(animeList && animeList[0]?.banner);
  }, [animeList]);

  useEffect(() => {
    const animes = async () => {
      try {
        const res = await getAllAnime(user);
        setAnimeList(res);
        setAllAnimes(res);
      } catch (error) {
        console.error(error);
      }
    };
    animes();
  }, []);

  //! AXIOS
  const searchList = async (searchTitle) => {
    try {
      const res = await getAnimeByName(user, searchTitle);
      setAnimeList(res);
    } catch (error) {
      console.error(error);
    }
  };

  //! HANDLER
  const handlerSearchTitle = (e) => {
    setSearchTitle(e?.target?.value);
  };

  //! DEBOUNCE
  const debouncedSearch = debounce(handlerSearchTitle, 700);

  return (
    <SearchComponent>
      <div className="navbar">
        <Link to="/" className="backwards">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Zurück</span>
        </Link>
        <div className="searchbar">
          <FontAwesomeIcon icon={faSearch} />
          <input onChange={debouncedSearch} type="text" />
        </div>
        <div className="info">
          <FontAwesomeIcon icon={faInfo} className="infoHover" />
          <div className="container">
            <span>japanische Titel wenn es keine Englischen gibt!</span>
          </div>
        </div>
      </div>
      <img
        className="backgroundBanner"
        src={
          banner
            ? banner
            : 'https://images6.alphacoders.com/785/thumb-1920-785425.png'
        }
        alt=""
      />
      <div className="list">
        {animeList?.map((anime, index) => {
          return <SearchItem key={uuidv4()} anime={anime} />;
        })}
      </div>
    </SearchComponent>
  );
}

export default Search;
