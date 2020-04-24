/* eslint-disable import/extensions */
import * as React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../../pages/Home';
import AuthPage from '../../pages/AuthPage';
import About from '../../pages/About';
import { IAuth, IRegisterData } from '../../redux/auth/auth.types';
import { AppState } from '../../redux';
import { selectAuth } from '../../redux/auth/auth.selector';

interface Props {
  user: IAuth | null | IRegisterData;
}

interface PrivateProps{
  path: string;
  exact?: boolean;
  user: IAuth | null | IRegisterData;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateProps> = ({
  user, component, exact, path,
}) => {
  const finalComponent = user ? component : AuthPage;
  return <Route exact={exact} path={path} component={finalComponent} />;
};


const Router: React.FC<Props> = ({ user }) => (
  <Switch>
    <PrivateRoute user={user} path="/" exact component={HomePage} />
    <Route path="/auth" exact component={AuthPage} />
    <Route path="/about" exact component={About} />
  </Switch>
);

const mapStateToProps = (state: AppState) => ({
  user: selectAuth(state),
});

export default connect(mapStateToProps)(Router);
