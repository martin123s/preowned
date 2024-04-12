
import React from 'react';
import {
  Router,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import ItemPage from './components/ItemPage/ItemPage.jsx';

const App = () => {
  return (
    <div>
      {/* <Home /> */}
      <ItemPage/>
    </div>
  )
}

export default App


{/* <ItemPage/> */ }
