import { useState, useEffect, useRef } from 'react';
import { ListItemComponent } from './ListItem.styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPlus,
  faThumbsUp,
  faThumbsDown,
} from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

function ListItem({ anime }) {
  //! USE-STATE
  const [isItemHovored, setIsItemHovored] = useState(false);

  //! USE-REF
  const hoverRef = useRef();

  //! remove hover state *browser bug see on github
  useEffect(() => {
    if (isItemHovored) {
      let interval = setInterval(() => {
        if (
          isItemHovored &&
          hoverRef.current &&
          hoverRef.current.matches(':hover') === false
        ) {
          setIsItemHovored(false);
        }
      }, 200);
      return () => {
        clearInterval(interval);
      };
    }
  });

  return (
    <div style={{ position: 'relative', height: '10.2rem', width: '22.5rem' }}>
      <ListItemComponent
        ref={hoverRef}
        onMouseEnter={() => setIsItemHovored(true)}
        onMouseLeave={() => setIsItemHovored(false)}
      >
        {!isItemHovored ? (
          <>
            <Link to={{ pathname: '/player', anime: anime }}>
              <img src={anime?.thumnail} alt="banner" />
              <h3 className="thumnailTitle">{anime?.title}</h3>
            </Link>
          </>
        ) : (
          <>
            <iframe
              title="trailer"
              frameborder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              type="text/html"
              allow="autoPlay"
              src={anime?.trailer + '&controls=0&showinfo=0'}
            ></iframe>
            <Link to={{ pathname: '/player', anime: anime }}>
              <div className="itemInfo">
                <div className="icons">
                  <div className="icon">
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faThumbsDown} />
                  </div>
                </div>
                <div className="itemTitle">
                  <span>{anime?.title}</span>
                </div>
                <div className="infoTop">
                  <span>{anime?.released}</span>
                  <span>{anime?.status}</span>
                  <span>{anime?.episodes?.length} Folgen</span>
                </div>
                <div className="itemDescription">
                  {anime?.description?.slice(0, 140)}...
                </div>
                <div className="itemGenre">
                  {anime?.genres?.map((genre) => {
                    return <span key={uuidv4()}>{genre}</span>;
                  })}
                </div>
              </div>
            </Link>
          </>
        )}
      </ListItemComponent>
    </div>
  );
}

export default ListItem;
