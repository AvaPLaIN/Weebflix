import { ListItemComponent } from './ListItem.styled';
import useHover from '../../hooks/useHover';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function ListItem({ anime }) {
  const [hovorRef, isHovored] = useHover();

  return (
    <ListItemComponent ref={hovorRef} isHovored={isHovored}>
      {isHovored && window.innerWidth > 1200 ? (
        <div className="hoverOpenState">
          <div className="thumnail">
            <iframe title="trailer" src={anime?.trailer} />
          </div>
          <Link
            className="hovorLink"
            to={{ pathname: '/player', anime: anime }}
          >
            <div className="details">
              <div className="title">
                <span>{anime?.title}</span>
              </div>
              <div className="info">
                <span>{anime?.released}</span>
                <span>{anime?.status}</span>
                <span>{anime?.episodes?.length} Folgen</span>
              </div>
              <div className="description">
                <span>
                  {anime?.description?.slice(0, 140)}
                  {anime?.description?.length > 140 && '...'}
                </span>
              </div>
              <div className="genre">
                {anime?.genres?.map((genre) => {
                  return <span key={uuidv4()}>{genre}</span>;
                })}
              </div>
            </div>
          </Link>
          <img className="backgroundThumnail" src={anime?.thumnail} alt="" />
        </div>
      ) : (
        <div className="hoverCloseState">
          <Link
            className="ThumnailLink"
            to={{ pathname: '/player', anime: anime }}
          >
            <img src={anime?.thumnail} alt="" />
          </Link>
          <h2 className="thumnailTitle">
            {anime?.title?.slice(0, 40)}
            {anime?.title?.length > 40 && '...'}
          </h2>
        </div>
      )}
    </ListItemComponent>
  );
}

export default ListItem;
