//! IMPORT LIBRARIES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

//! IMPORT COMPONENTS
import { ListComponent } from './List.styled';
import ListItem from '../list-item/ListItem';

//! IMPORT UTILS
import { v4 as uuidv4 } from 'uuid';

//! IMPORT HOOKS
import useSlider from '../../hooks/useSlider';

function List({ animes, genre }) {
  //! USE-HOOKS
  const [isListScrolled, listRef, moveSlider] = useSlider();

  return (
    <ListComponent>
      <span className="listTitle">{genre}</span>
      <div className="wrapper">
        {isListScrolled && (
          <FontAwesomeIcon
            onClick={() => moveSlider('right')}
            className="sliderArrow left"
            icon={faChevronLeft}
          />
        )}
        <div ref={listRef} className="container">
          {animes?.map((anime) => {
            return <ListItem key={uuidv4()} anime={anime} />;
          })}
        </div>
        <FontAwesomeIcon
          onClick={() => moveSlider('left')}
          className="sliderArrow right"
          icon={faChevronRight}
        />
      </div>
    </ListComponent>
  );
}

export default List;
