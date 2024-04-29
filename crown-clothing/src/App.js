import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Homepage from './pages/homepage/home-page.components';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from '../src/firebase/firebase.utils'
import './App.css';


class App extends React.Component{
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }
  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/shop' element={<ShopPage />}/>
          <Route path='/signin' element={<SignInAndSignUp />}/>
        </Routes>
  
      </div>
  );
  }
}
export default App;
