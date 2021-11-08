//! IMPORT LIBRARIES
import { useEffect } from 'react';

//! IMPORT REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getGenresAnimes } from '../../redux/ducks/animes';

//! IMPORT COMPONENTS
import { HomeComponent } from './Home.styled';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';

//! IMPORT UTILS
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  //! INIT
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);
  const animes = useSelector((state) => state?.animes?.genreAnimes);

  //! USE-EFFECT
  useEffect(() => {
    dispatch(getGenresAnimes(user?.accessToken, randomGenres));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const genres = [
    'Action',
    'Adventure',
    'Comedy',
    'Demons',
    'Drama',
    'Ecchi',
    'Fantasy',
    'Game',
    'Historical',
    'Horror',
    'Magic',
    'Mecha',
    'Military',
    'Mystery',
    'Parody',
    'Police',
    'Psychological',
    'Romance',
    'Samurai',
    'School',
    'Sci-Fi',
    'Seinen',
    'Shoujo',
    'Shounen',
    'Slice of Life',
    'Sports',
    'Super Power',
    'Supernatural',
    'Thriller',
    'Vampire',
  ];

  const randomGenres = genres.sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <HomeComponent>
      <Navbar />
      <Featured />
      <div className="lists">
        {animes?.map((genreAnimes) => {
          return (
            <List
              key={uuidv4()}
              genre={genreAnimes.genre}
              animes={genreAnimes.animes}
            />
          );
        })}
      </div>
    </HomeComponent>
  );
};

export default Home;
