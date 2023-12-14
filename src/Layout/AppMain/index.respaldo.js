import React, { Suspense, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Dashboards from '../../DemoPages/Dashboards';
import Widgets from '../../DemoPages/Widgets';
import Elements from '../../DemoPages/Elements';
import Components from '../../DemoPages/Components';
import Charts from '../../DemoPages/Charts';
import Forms from '../../DemoPages/Forms';
import Tables from '../../DemoPages/Tables';

import { AuthProvider, useAuth } from './AuthContext';
import Login from '../../components/login';
import RouteConstant from '../../router/routeConstant';
import rutas from '../../router';

// const PrivateRoute = ({ children }) => {

//     return isAuthenticated ? children : <Redirect to="/login" />;
// };

const PrivateRoute = ({component:Component, ...rest}) => {
    const { isAuthenticated } = useAuth();
    return (<Route {...rest}>  { isAuthenticated ? <Component/>  :  <Redirect to="/login"/>  } </Route> )
};

const routes = [
    // { path: "/components", component: Components },
    // { path: "/forms", component: Forms },
    // { path: "/charts", component: Charts },
    // { path: "/tables", component: Tables },
    // { path: "/elements", component: Elements },
    // { path: "/widgets", component: Widgets },
    // { path: "/dashboards", component: Dashboards },
    ...rutas
];

const RutasReact = routes.map((item, index) => (
    <PrivateRoute exact path={item.path} component={item.component} key={index}/>
));

const App = () => {
    return (
        <Fragment>
            <AuthProvider>
                <Router>
                    <ToastContainer />
                    <Switch>
                        <Route path={RouteConstant.LOGIN} component={Login} />
                        {RutasReact}
                        <Redirect from="/" to={RouteConstant.LOGIN}/>
                    </Switch>
                </Router>
            </AuthProvider>
        </Fragment>
    );
};

export default App;
