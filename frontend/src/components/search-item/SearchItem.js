import { SearchItemComponent } from './SearchItem.styled';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function SearchItem({ anime }) {
  //! USE-STATE
  const [isHovored, setIsHovored] = useState(false);

  return (
    <SearchItemComponent
      onMouseEnter={() => setIsHovored(true)}
      onMouseLeave={() => setIsHovored(false)}
    >
      {isHovored ? (
        <iframe
          className="infoSource"
          src={anime?.trailer + '&controls=0&showinfo=0'}
          title="trailer"
        ></iframe>
      ) : (
        <img className="infoSource" src={anime?.thumnail} alt=""></img>
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
            {anime?.description.slice(0, 80)}...
          </div>
          <div className="itemGenre">
            {anime.genres.map((genre) => {
              return <span>{genre}</span>;
            })}
          </div>
        </div>
      </Link>
    </SearchItemComponent>
  );
}

export default SearchItem;
