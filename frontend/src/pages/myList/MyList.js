//! IMPORT LIBRARIES
import { useState, useEffect } from 'react';

//! IMPORT REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getProgressAnimes } from '../../redux/ducks/animes';
import { updateAnimeStatus } from '../../redux/ducks/user';

//! API
import { updateUserProgress } from '../../api/user';

//! IMPORT COMPONENTS
import { MyListComponent } from './MyList.styled';
import Navbar from '../../components/navbar/Navbar';
import ProgressItem from '../../components/progress-item/ProgressItem';

//! IMPORT UTILS
import { v4 as uuidv4 } from 'uuid';

const MyList = () => {
  //! INIT
  const dispatch = useDispatch();
  const jwt = useSelector((state) => state?.user?.accessToken);
  const progress = useSelector((state) => state?.user?.progress);
  const animes = useSelector((state) => state?.animes?.progressAnimes);

  //! USE-STATE
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    dispatch(getProgressAnimes(jwt, progress));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateUserProgress(jwt, progress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  //! HANDLER
  const handleSetStatus = (state, id) => {
    dispatch(updateAnimeStatus(state, id));

    //TODO IF completed SET COUNT TO 100% -> animes.find(id).episodes.length -> dispatch setEpsodes
  };

  return (
    <>
      <Navbar />
      <MyListComponent>
        <img
          className="backgroundBanner"
          src="https://images6.alphacoders.com/785/thumb-1920-785425.png"
          alt=""
        />
        <div className="filter">
          <label for="cars">Filter: </label>

          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="currently Watching">Currently Watching</option>
            <option value="canceled">Canceled</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="list">
          {progress?.map((progress) => {
            if (filter === 'all' || progress?.status === filter) {
              return (
                <ProgressItem
                  key={uuidv4()}
                  anime={animes?.find((anime) => anime?._id === progress?.id)}
                  progress={progress}
                  setStatus={handleSetStatus}
                />
              );
            }
            return null;
          })}
        </div>
      </MyListComponent>
    </>
  );
};

export default MyList;
