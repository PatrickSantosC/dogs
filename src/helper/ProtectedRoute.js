import React from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../UserContext';

const ProtectedRoute = (props) => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return <Route {...props}>{props.children}</Route>;
  }
  if (login === false) {
    return <Redirect to="/login" />;
  }

  return null;
};

export default ProtectedRoute;
