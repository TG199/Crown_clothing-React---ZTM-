import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Homepage from './pages/homepage/home-page.components';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/shop' element={<ShopPage />}/>
        <Route path='/signin' element={<SignInAndSignUp />}/>
      </Routes>

    </div>
);
}
export default App;
