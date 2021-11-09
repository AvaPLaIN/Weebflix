//! IMPORT LIBRARIES
import { useEffect, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//! IMPORT REDUX
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, setUser } from './redux/ducks/user';
import { updateAnimeProgress } from './redux/ducks/user';

//! IMPORT API
import { refreshUser } from './api/user';

//! IMPORT COMPONENTS
import Loading from './components/loading/Loading';

//! IMPORT UTILS
import { requireAuth } from './auth/auth';

//! IMPORT COMPONENTS - LAZY LOAD
const Home = lazy(() => import('./pages/home/Home'));
const Player = lazy(() => import('./pages/player/Player'));
const Search = lazy(() => import('./pages/search/Search'));
const Auth = lazy(() => import('./pages/auth/Auth'));
const MyList = lazy(() => import('./pages/myList/MyList'));
const Rating = lazy(() => import('./pages/rating/Rating'));
const Movie = lazy(() => import('./pages/movies/Movie'));
const MoviePlayer = lazy(() => import('./pages/movie-player/MoviePlayer'));

const App = () => {
  //! INIT
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  //! USE-EFFECT
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));

    const checkUserAuth = async () => {
      const newUser = await refreshUser(
        localUser?.accessToken,
        localUser?.refreshToken,
        localUser?.user
      );
      dispatch(updateAnimeProgress(newUser?.progress));
    };
    checkUserAuth();

    localUser && dispatch(setUser(localUser));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  //! HANDLERS
  const handleUserAuth = () => {
    if (requireAuth(user, dispatch)) return true;

    dispatch(logoutUser());
    return false;
  };

  //! RETURN
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (handleUserAuth() ? <Redirect to="/home" /> : <Auth />)}
        />
        <Route
          path="/home"
          render={() => (handleUserAuth() ? <Home /> : <Redirect to="/" />)}
        />
        <Route
          path="/player"
          render={() => (handleUserAuth() ? <Player /> : <Redirect to="/" />)}
        />
        <Route
          path="/moviePlayer"
          render={() =>
            handleUserAuth() ? <MoviePlayer /> : <Redirect to="/" />
          }
        />
        <Route
          path="/mylist"
          render={() =>
            handleUserAuth() ? <MyList user={user} /> : <Redirect to="/" />
          }
        />
        <Route
          path="/rating"
          render={() =>
            handleUserAuth() ? <Rating user={user} /> : <Redirect to="/" />
          }
        />
        <Route
          path="/movies"
          render={() =>
            handleUserAuth() ? <Movie user={user} /> : <Redirect to="/" />
          }
        />
        <Route
          path="/search"
          render={() =>
            handleUserAuth() ? <Search user={user} /> : <Redirect to="/" />
          }
        />
        <Route path="/">404 PAGE NOT FOUND!</Route>
      </Switch>
    </Suspense>
  );
};

export default App;
