import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalProvider from './context/GlobalConsumer';
import Home from './pages/Home';
import RepoDetails from './pages/Details';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/projects" component={Home} />
          <Route path="/project/:name" component={RepoDetails} />
        </Switch>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
