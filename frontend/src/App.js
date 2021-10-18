import { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import Home from './pages/home/Home';
import Player from './pages/player/Player';
import Search from './pages/search/Search';
import Auth from './pages/auth/Auth';
import decode from 'jwt-decode';

const App = () => {
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const requireAuth = () => {
    if (user) return true;
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
    history.push('/');
  };

  useEffect(() => {
    const token = user?.tokenId || user?.data?.token;
    if (token) {
      if (decode(token).exp < Date.now() / 1000) {
        logout();
      }
    }
  }, [user, history]);

  return (
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
        render={() => (requireAuth() ? <Player /> : <Redirect to="/" />)}
      />
      <Route
        path="/search"
        render={() =>
          requireAuth() ? <Search user={user} /> : <Redirect to="/" />
        }
      />
      <Route path="/">404 PAGE NOT FOUND!</Route>
    </Switch>
  );
};

export default App;
