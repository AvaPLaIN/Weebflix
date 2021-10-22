import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getProgressAnimes, updateProgress } from '../../api/anime';
import { RatingComponent } from './Rating.styled';
import RatingItem from '../../components/RatingItem/RatingItem';
import Navbar from '../../components/navbar/Navbar';

const Rating = ({ user, setUser, logout }) => {
  //! USE-STATE
  const [animeList, setAnimeList] = useState([]);
  const [progress, setProgress] = useState(user?.data?.result?.progress);
  const [filter, setFilter] = useState('all');

  //! USE-EFFECT
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

  //! HANDLER
  const changeRatingAnime = (rating, id) => {
    const index = progress.findIndex((anime) => anime.id === id);
    progress[index].rating = rating;

    const newUser = user;
    newUser.data.result.progress = progress;
    updateProgress(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };

  return (
    <>
      <Navbar user={user} setUser={setUser} logout={logout} />
      <RatingComponent>
        <img
          className="backgroundBanner"
          src="https://images6.alphacoders.com/785/thumb-1920-785425.png"
          alt=""
        />
        <div className="filter">
          <label for="cars">Filter: </label>

          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="unrated">Unrated</option>
            <option value="rated">Rated</option>
            <option value="top">Top Rated</option>
          </select>
        </div>
        <div className="list">
          {progress?.map((progAnime) => {
            if (filter === 'all') {
              return (
                <RatingItem
                  key={uuidv4()}
                  anime={animeList?.find(
                    (anime) => anime?._id === progAnime?.id
                  )}
                  progress={progAnime}
                  setRating={changeRatingAnime}
                />
              );
            } else {
              if (filter === 'unrated') {
                if (progAnime?.rating === '0' || progAnime?.rating === '-') {
                  return (
                    <RatingItem
                      key={uuidv4()}
                      anime={animeList?.find(
                        (anime) => anime?._id === progAnime?.id
                      )}
                      progress={progAnime}
                      setRating={changeRatingAnime}
                    />
                  );
                }
              } else if (filter === 'rated') {
                if (progAnime?.rating !== '0' && progAnime?.rating !== '-') {
                  return (
                    <RatingItem
                      key={uuidv4()}
                      anime={animeList?.find(
                        (anime) => anime?._id === progAnime?.id
                      )}
                      progress={progAnime}
                      setRating={changeRatingAnime}
                    />
                  );
                }
              } else {
                if (progAnime?.rating === '9' || progAnime?.rating === '10') {
                  return (
                    <RatingItem
                      key={uuidv4()}
                      anime={animeList?.find(
                        (anime) => anime?._id === progAnime?.id
                      )}
                      progress={progAnime}
                      setRating={changeRatingAnime}
                    />
                  );
                }
              }
            }
          })}
        </div>
      </RatingComponent>
    </>
  );
};

export default Rating;
