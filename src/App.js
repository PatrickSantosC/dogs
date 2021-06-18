import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { UserStorage } from './UserContext';
// eslint-disable-next-line no-unused-vars
import styles from './global.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Account from './pages/Account';
import ProtectedRoute from './helper/ProtectedRoute';
import Photo from './components/Photo';
import UserProfile from './components/UserProfile';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <ProtectedRoute path="/conta">
                <Account />
              </ProtectedRoute>
              <Route path="/foto/:id">
                <Photo />
              </Route>
              <Route path="/perfil/:user">
                <UserProfile />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </main>

          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
