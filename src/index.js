import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store-redux';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './StoreContext';

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
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
