//! IMPORT LIBRARIES
import { Link } from 'react-router-dom';

//! IMPORT COMPONENTS
import { SearchItemComponent } from './SearchItem.styled';

//! IMPORT HOOKS
import useHovor from '../../hooks/useHover';

//! IMPORT UTILS
import { v4 as uuidv4 } from 'uuid';

const SearchItem = ({ anime }) => {
  //! USE-HOOKS
  const [hoverRef, isHovored] = useHovor(1000);

  return (
    <SearchItemComponent ref={hoverRef}>
      {isHovored && window.innerWidth > 1200 ? (
        <iframe
          className="infoSource"
          src={anime?.trailer + '&controls=0&showinfo=0'}
          title="trailer"
        ></iframe>
      ) : (
        <img
          className="infoSource"
          loading="lazy"
          src={anime?.thumnail}
          alt=""
        ></img>
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
            {anime.genres.map((genre) => {
              return <span key={uuidv4()}>{genre}</span>;
            })}
          </div>
        </div>
      </Link>
    </SearchItemComponent>
  );
};

export default SearchItem;
