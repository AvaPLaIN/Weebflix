import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ProgressItemComponent } from './ProgressItem.styled';

const ProgressItem = ({ anime, progress }) => {
  //! USE-STATE
  const [isHovored, setIsHovored] = useState(false);

  useEffect(() => {
    console.log('anime: ' + anime);
    console.log('progress: ' + progress);
  }, [anime, progress]);

  return (
    <ProgressItemComponent
      onMouseEnter={() => setIsHovored(true)}
      onMouseLeave={() => setIsHovored(false)}
      progress={Math.round(((progress + 1) / anime?.episodes?.length) * 100)}
    >
      {isHovored ? (
        <iframe
          className="infoSource"
          src={anime?.trailer + '&controls=0&showinfo=0'}
          title="trailer"
        ></iframe>
      ) : (
        <>
          <img className="infoSource" src={anime?.thumnail} alt=""></img>
          <div className="progress">
            <div className="progressCount">{progress + 1}</div>
            <div className="currProgress">
              <span className="procent">
                {Math.round(((progress + 1) / anime?.episodes?.length) * 100)}%
              </span>
            </div>
            <div className="progressCount">{anime?.episodes?.length}</div>
          </div>
        </>
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
            {anime?.genres?.map((genre) => {
              return <span key={uuidv4()}>{genre}</span>;
            })}
          </div>
        </div>
      </Link>
    </ProgressItemComponent>
  );
};

export default ProgressItem;
