import { useState, useEffect, Suspense, lazy } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import decode from 'jwt-decode';

//! LAZY LOAD -- CODE SPLITTING
const Home = lazy(() => import('./pages/home/Home'));
const Player = lazy(() => import('./pages/player/Player'));
const Search = lazy(() => import('./pages/search/Search'));
const Auth = lazy(() => import('./pages/auth/Auth'));
const MyList = lazy(() => import('./pages/myList/MyList'));
const Rating = lazy(() => import('./pages/rating/Rating'));
const Movie = lazy(() => import('./pages/movies/Movie'));
const MoviePlayer = lazy(() => import('./pages/movie-player/MoviePlayer'));
// import Home from './pages/home/Home';
// import Player from './pages/player/Player';
// import Search from './pages/search/Search';
// import Auth from './pages/auth/Auth';
// import MyList from './pages/myList/MyList';
// import Rating from './pages/rating/Rating';
// import Movie from './pages/movies/Movie';
// import MoviePlayer from './pages/movie-player/MoviePlayer';

const App = () => {
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const requireAuth = () => {
    const token = user?.tokenId || user?.data.token;
    if (token) {
      try {
        if (decode(token).exp > Date.now() / 1000) {
          return true;
        }
      } catch (error) {
        console.error(error);
      }
    }
    setUser(null);
    localStorage.removeItem('user');
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    history.push('/');
  };

  useEffect(() => {
    const token = user?.tokenId || user?.data?.token;
    if (token) {
      if (decode(token).exp < Date.now() / 1000) {
        logout();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, history]);

  return (
    <Suspense
      fallback={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Loading...
        </div>
      }
    >
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            requireAuth() ? <Redirect to="/home" /> : <Auth setUser={setUser} />
          }
        />
        <Route
          path="/home"
          render={() =>
            requireAuth() ? (
              <Home user={user} setUser={setUser} logout={logout} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/player"
          render={() =>
            requireAuth() ? (
              <Player user={user} setUser={setUser} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/moviePlayer"
          render={() => (requireAuth() ? <MoviePlayer /> : <Redirect to="/" />)}
        />
        <Route
          path="/mylist"
          render={() =>
            requireAuth() ? (
              <MyList user={user} setUser={setUser} logout={logout} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/rating"
          render={() =>
            requireAuth() ? (
              <Rating user={user} setUser={setUser} logout={logout} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/movies"
          render={() =>
            requireAuth() ? (
              <Movie user={user} setUser={setUser} logout={logout} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/search"
          render={() =>
            requireAuth() ? <Search user={user} /> : <Redirect to="/" />
          }
        />
        <Route path="/">404 PAGE NOT FOUND!</Route>
      </Switch>
    </Suspense>
  );
};

export default App;
