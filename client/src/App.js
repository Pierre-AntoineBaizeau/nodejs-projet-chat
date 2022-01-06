import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import Chat from './components/Chat';

const App = () => (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/chat" component={Chat} />
    </BrowserRouter>
);

export default App;