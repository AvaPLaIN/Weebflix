import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import { HomeComponent } from './Home.styled';

function Home({ user, setUser, logout }) {
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
      <Navbar user={user} setUser={setUser} logout={logout} />
      <Featured user={user} />
      <div className="lists">
        {randomGenres.map((genre) => {
          return <List user={user} key={genre} genre={genre} />;
        })}
      </div>
    </HomeComponent>
  );
}

export default Home;
