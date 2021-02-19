import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Home from './components/pages/home/home';
import CreatePost from './components/pages/createpost/createPost';

import { Route } from "wouter";
import LoginPage from './components/pages/login/login';
import SignupPage from './components/pages/signup/signup';
import ProfilePage from './components/pages/profile/profile';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/create">
        <CreatePost />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/register">
        <SignupPage />
      </Route>
      {/* TODO: make the profile route take an argument */}
      <Route path="/profile/:id">
        {params => <ProfilePage id={params.id} />}
      </Route>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
