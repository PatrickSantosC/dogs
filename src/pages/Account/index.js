import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router';
import Feed from '../../components/Feed';
import NotFound from '../../components/NotFound';
import UserHeader from '../../components/UserHeader';
import UserPhotoPost from '../../components/UserPhotoPost';
import UserStats from '../../components/UserStats';
import Head from '../../helper/Head';
import { UserContext } from '../../UserContext';

function Account() {
  const { path } = useRouteMatch();
  const { data } = React.useContext(UserContext);
  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Switch>
        <Route exact path={path}>
          <Feed user={data.id} />
        </Route>
        <Route exact path={`${path}/postar`}>
          <UserPhotoPost />
        </Route>
        <Route exact path={`${path}/estatisticas`}>
          <UserStats />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </section>
  );
}

export default Account;
