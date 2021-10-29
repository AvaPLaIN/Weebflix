import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ListComponent } from './List.styled';
import ListItem from '../list-item/ListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { getAnimeByGenre } from '../../api/anime';

function List({ genre, user }) {
  //! USE-STATE
  const [isListScrolled, setIsListScrolled] = useState(false);
  const [animeList, setAnimeList] = useState([]);

  //! USE-REF
  const listRef = useRef();

  //! USE-EFFECT
  useEffect(() => {
    const animeList = async () => {
      try {
        const res = await getAnimeByGenre(user, genre);
        setAnimeList(res);
      } catch (error) {
        console.error(error);
      }
    };
    animeList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMoveList = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x;
    const containerWidth = listRef.current.getBoundingClientRect().width;
    const windowWidth = window.innerWidth;
    //! CHECK DIRECTION
    if (direction === 'left') {
      if (windowWidth > 1000) {
        distance -= windowWidth / 2;
      } else {
        distance -= 285;
      }
    } else {
      if (windowWidth > 1000) {
        distance += windowWidth / 2;
      } else {
        distance += 185;
      }
    }
    //! CHECK OVERFLOW
    if (distance >= 0) {
      distance = 0;
    } else if (-distance + windowWidth - 110 >= containerWidth) {
      distance = -(containerWidth - windowWidth + 110);
    }
    if (containerWidth < windowWidth) {
      distance = 0;
    }
    //! (NOT)SHOW LEFT ARROW ON SCROLLED
    if (distance < 0) {
      setIsListScrolled(true);
    } else {
      setTimeout(() => {
        setIsListScrolled(false);
      }, 900);
    }
    //! TRANSLATE-X CONTAINER
    listRef.current.style.transform = `translateX(${distance}px)`;
  };

  return (
    <ListComponent>
      <span className="listTitle">{genre}</span>
      <div className="wrapper">
        {isListScrolled && (
          <FontAwesomeIcon
            onClick={() => handleMoveList('right')}
            className="sliderArrow left"
            icon={faChevronLeft}
          />
        )}
        <div ref={listRef} className="container">
          {animeList?.map((anime) => {
            return <ListItem key={uuidv4()} anime={anime} />;
          })}
        </div>
        <FontAwesomeIcon
          onClick={() => handleMoveList('left')}
          className="sliderArrow right"
          icon={faChevronRight}
        />
      </div>
    </ListComponent>
  );
}

export default List;
