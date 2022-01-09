import { Fragment } from 'react';
import { Route, Router, Routes } from 'react-router-dom';


import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetups';
import Layout from './components/layout/layout';

function App() {
  return (
    <Layout>
        <Fragment>
          <Routes>
            <Route path='/' exact element={<AllMeetupsPage />}>
            </Route>
            <Route path='/new-meetups' element={<NewMeetupsPage />}>
            </Route>
            <Route path='/favorites' element={<FavoritesPage />}>
            </Route>
          </Routes>
        </Fragment>
    </Layout>
  );
}

export default App;
