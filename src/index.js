import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store-redux';
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <App state={store.getState()} store={store} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})

rerenderEntireTree(store.getState())

reportWebVitals();
