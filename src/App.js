import React from 'react';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/home.styles.scss';

import Header from './components/header-component/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './pages/shop/shop.component';
import {auth, createUserProfileDocument} from './components/firebase/firebase.utils';

class App extends React.Component {

  constructor () {
    super();

    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth =null;

  componentDidMount() {
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userauth =>{
      if(userauth) {
        const userref=await createUserProfileDocument(userauth);
        //writing code to set the authentication data to setstate to use in our appln.
        userref.onSnapshot(snapShot =>
          {this.setState({currentUser:{
          id:snapShot.id,
          ...snapShot.data() }
        })
      })
      }
      //if user logs out then set the currentuser to null
      else {
        this.setState({currentUser:userauth})
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route  path='/sign' component={SignInAndSignUpPage} />
          
        </Switch>
      </div>
  
  
    );
  
  }

}

export default App;