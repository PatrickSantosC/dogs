import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import LoginCreate from '../../components/LoginCreate';
import LoginForm from '../../components/LoginForm';
import LoginPasswordLost from '../../components/LoginPasswordLost';
import LoginPasswordReset from '../../components/LoginPasswordReset';
import NotFound from '../../components/NotFound';
import { UserContext } from '../../UserContext';

import styles from './styles.module.css';
function Login() {
  const { path } = useRouteMatch();
  const { login } = React.useContext(UserContext);

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Switch>
          <Route exact path={path}>
            {login === true ? <Redirect to="/conta" /> : <LoginForm />}
          </Route>
          <Route path={`${path}/criar`}>
            <LoginCreate />
          </Route>
          <Route path={`${path}/perdeu`}>
            <LoginPasswordLost />
          </Route>
          <Route path={`${path}/resetar`}>
            <LoginPasswordReset />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default Login;
