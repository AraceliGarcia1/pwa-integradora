import React, { Suspense, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Login from '../../components/login';
import RouteConstant from '../../router/routeConstant';
import rutas from '../../router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={RouteConstant.LOGIN} />
      }
    />
  );
};

const LoginRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Redirect to={RouteConstant.INICIO} /> : <Route {...rest} component={Component} />;
};

const RedirectRoute = ({ ...rest }) => {
  const { isAuthenticated } = useAuth();
  return <Redirect to={isAuthenticated ? RouteConstant.INICIO : RouteConstant.LOGIN} />;
};

const routes = [...rutas];

const RutasReact = routes.map((item, index) => (
  <PrivateRoute exact path={item.path} component={item.component} key={index} />
));

const App = () => {
  return (
    <Fragment>
       <ToastContainer />
      <AuthProvider>
        <Router>
         <button>Descargar</button>
          <Switch>
            <LoginRoute path={RouteConstant.LOGIN} component={Login} />
            {RutasReact}
            <RedirectRoute />
          </Switch>
        </Router>
      </AuthProvider>
    </Fragment>
  );
};

export default App;
