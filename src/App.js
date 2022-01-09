
import React, { Suspense } from 'react'
import PublicRoute from './routers/PublicRoute';
import PrivateRoute from './routers/PrivateRoute';
import AuthProvider from './auth/AuthProvider';

import Home from './views/panel/Panel'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import roles from './helpers/roles';
import routes from './helpers/routes';


const EditHome = React.lazy(() => import('./views/edit/casaIdEdit'));
const Upload = React.lazy(() => import('./views/upload/UploadHome'));
const Casas = React.lazy(() => import('./views/casas/casas'));
const Login = React.lazy(() => import('./views/login/login'));
const Account = React.lazy(() => import('./views/account/account'));


function App() {
  return (

    <Router>
      <AuthProvider>

        <Switch>

          <Suspense fallback={<div>Loading...</div>}>
            <PublicRoute path={routes.login} exact component={Login} />
            <PrivateRoute path={routes.account} exact component= {Account}/>
            <PrivateRoute hasRole={roles.admin} path={routes.home} exact component={Home} />
            <PrivateRoute path={routes.casas} exact component={Casas} />
            <PrivateRoute path={routes.upload} exact component={Upload} />
            <PrivateRoute path={routes.casa()} exact component={EditHome} />
          </Suspense>
        </Switch>

      </AuthProvider>
    </Router>


  );
}

export default App;
