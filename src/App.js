
import React, { Suspense } from 'react'

import AuthProvider from './auth/AuthProvider';

import Home from './views/panel/Panel'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './helpers/routes';


const EditHome = React.lazy(() => import('./views/edit/casaIdEdit'));
const Upload = React.lazy(() => import('./views/upload/UploadHome'));
const Casas = React.lazy(() => import('./views/casas/casas'));


function App() {
  return (

    <Router>
      <AuthProvider>

        <Switch>

          <Suspense fallback={<div>Loading...</div>}>
            
            <Route path={routes.home} exact component={Home} />
            <Route path={routes.casas} exact component={Casas} />
            <Route path={routes.upload} exact component={Upload} />
            <Route path={routes.casa()} exact component={EditHome} />
          </Suspense>
        </Switch>

      </AuthProvider>
    </Router>


  );
}

export default App;
