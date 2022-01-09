import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import './index.css';
import { FavoritesContextProvider } from './store/favorites-context';

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />}></Route>
    </Routes>
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById('root')
);
