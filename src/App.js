
import React, {Suspense} from 'react'
import './App.css'
import Home from './views/panel/Panel'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import { DataProvider } from './context/DataContext';
const Upload = React.lazy(() => import('./views/upload/UploadHome'));
const Edit = React.lazy(() => import('./views/edit/Edit'));

function App() {
  return (
   
 <DataProvider>
       <Router>
       <Switch>
         
       <Suspense fallback={<div>Loading...</div>}>
  
       <Route path="/" exact component={Home} />
       <Route path="/edit" exact component={Edit}/>
         <Route path="/upload" exact component={Upload}/>
      
       </Suspense>
       </Switch>
     </Router>
 </DataProvider>

  );
}

export default App;
