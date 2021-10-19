import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getProgressAnimes } from '../../api/anime';
import ProgressItem from '../../components/progress-item/ProgressItem';
import Navbar from '../../components/navbar/Navbar';
import { MyListComponent } from './MyList.styled';

const MyList = ({ user, setUser, logout }) => {
  const [animeList, setAnimeList] = useState([]);

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
  }, []);

  return (
    <>
      <Navbar user={user} setUser={setUser} logout={logout} />
      <MyListComponent>
        <img
          className="backgroundBanner"
          src="https://images6.alphacoders.com/785/thumb-1920-785425.png"
          alt=""
        />
        <div className="list">
          {user?.data?.result?.progress?.map((progAnime) => {
            return (
              <ProgressItem
                key={uuidv4()}
                anime={animeList?.find((anime) => anime?._id === progAnime?.id)}
                progress={progAnime.count}
              />
            );
          })}
        </div>
      </MyListComponent>
    </>
  );
};

export default MyList;
