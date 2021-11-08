//! IMPORT LIBRARIES
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faSearch,
  faInfo,
} from '@fortawesome/free-solid-svg-icons';

//! IMPORT REDUX
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllAnimes,
  getFilteredByTitleAnimes,
} from '../../redux/ducks/animes';

//! IMPORT COMPONENTS
import { SearchComponent } from './Search.styled';
import SearchItem from '../../components/search-item/SearchItem';

//! IMPORT UTILS
import { v4 as uuidv4 } from 'uuid';

const Search = () => {
  //! INIT
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);
  const allAnimes = useSelector((state) => state?.animes?.allAnimes);
  const filteredAnimes = useSelector(
    (state) => state?.animes?.filteredByTitleAnimes
  );

  //! USE-STATE
  const [searchTitle, setSearchTitle] = useState('');

  //! USE-EFFECT
  useEffect(() => {
    dispatch(getAllAnimes(user?.accessToken));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchTitle) {
      dispatch(getFilteredByTitleAnimes(user?.accessToken, searchTitle));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTitle]);

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
          <span>Back</span>
        </Link>
        <div className="searchbar">
          <FontAwesomeIcon icon={faSearch} />
          <input onChange={debouncedSearch} type="text" />
        </div>
        <div className="info">
          <FontAwesomeIcon icon={faInfo} className="infoHover" />
          <div className="container">
            <span>Look out for Japanese Titles!</span>
          </div>
        </div>
      </div>
      <img
        className="backgroundBanner"
        src="https://images6.alphacoders.com/785/thumb-1920-785425.png"
        alt=""
      />
      <div className="list">
        {searchTitle
          ? filteredAnimes?.map((anime) => {
              return <SearchItem key={uuidv4()} anime={anime} />;
            })
          : allAnimes?.map((anime) => {
              return <SearchItem key={uuidv4()} anime={anime} />;
            })}
      </div>
    </SearchComponent>
  );
};

export default Search;
