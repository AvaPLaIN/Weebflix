import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getProgressAnimes, updateProgress } from '../../api/anime';
import ProgressItem from '../../components/progress-item/ProgressItem';
import Navbar from '../../components/navbar/Navbar';
import { MyListComponent } from './MyList.styled';

const MyList = ({ user, setUser, logout }) => {
  const [animeList, setAnimeList] = useState([]);
  const [progress, setProgress] = useState(user?.data?.result?.progress);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const animeList = async () => {
      try {
        const res = await getProgressAnimes(user);
        setAnimeList(res);
      } catch (error) {
        console.error(error);
      }
    };
    animeList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const newUser = user;
    newUser.data.result.progress = progress;

    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    updateProgress(newUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  //! HANDLER
  const handlerSetProgress = (state, id) => {
    if (state === 'deleted') {
      deleteProgressAnime(id);
    } else if (state === 'canceled') {
      changeStatusProgressAnime(state, id);
    } else {
      changeStatusProgressAnime(state, id);
    }
  };

  const deleteProgressAnime = (id) => {
    setProgress(progress.filter((anime) => anime.id !== id));
  };

  const changeStatusProgressAnime = (state, id) => {
    const index = progress.findIndex((anime) => anime.id === id);
    progress[index].status = state;
    if (state === 'completed') {
      const anime = animeList?.find((anime) => anime?._id === id);
      progress[index].count = anime?.episodes?.length - 1;
    }
    setProgress(progress);
  };

  return (
    <>
      <Navbar user={user} setUser={setUser} logout={logout} />
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
          {progress?.map((progAnime) => {
            if (filter !== 'all') {
              if (progAnime?.status === filter) {
                return (
                  <ProgressItem
                    key={uuidv4()}
                    anime={animeList?.find(
                      (anime) => anime?._id === progAnime?.id
                    )}
                    progress={progAnime}
                    setProgress={handlerSetProgress}
                  />
                );
              }
            } else {
              return (
                <ProgressItem
                  key={uuidv4()}
                  anime={animeList?.find(
                    (anime) => anime?._id === progAnime?.id
                  )}
                  progress={progAnime}
                  setProgress={handlerSetProgress}
                />
              );
            }
          })}
        </div>
      </MyListComponent>
    </>
  );
};

export default MyList;
