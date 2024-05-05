import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './pages/homepage/home-page.components';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.action';
import './App.css';


class App extends React.Component{
 
  unsubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth)
      {
        try{
          await createUserProfileDocument(userAuth);
        } catch (error) {
          console.error('Error creating user profile: ', error);
        }
      }
      setCurrentUser(userAuth)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render () {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<Homepage />} />git 
          <Route path='/shop' element={<ShopPage />}/>
          <Route 
            exact path='/signin' 
            render={() => this.props.currentUser ? 
            (< Navigate to='/'/>) : (<SignInAndSignUp/>)
            } />
        </Routes>
  
      </div>
  );
  }

  
}
const mapStateToProps = ( {user}) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps) (App);
