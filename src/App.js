import React from 'react';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/home.styles.scss';
import {connect} from 'react-redux';
import Header from './components/header-component/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './pages/shop/shop.component';
import {auth, createUserProfileDocument} from './components/firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
class App extends React.Component {
//no need to have this constructor as action is being taken care by mapDispatchTostates
 /* constructor () {
    super();

    this.state={
      currentUser:null
    }
  }*/

  unsubscribeFromAuth =null;

  componentDidMount() {
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userauth =>{
      if(userauth) {
        const userref=await createUserProfileDocument(userauth);
        //writing code to set the authentication data to setstate to use in our appln.
       /* userref.onSnapshot(snapShot =>
          {this.setState({currentUser:{
          id:snapShot.id,
          ...snapShot.data() }
        })
      })//code when reducer was not used, actions were passwd uing currentUser propery in
      }*/
      userref.onSnapshot(snapShot =>{
        setCurrentUser({
          id:snapShot.id,
          ...snapShot.data()
        });
      });
    }
      //if user logs out then set the currentuser to null
      else {
        setCurrentUser(userauth)
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  
  }
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route  path='/sign' component={SignInAndSignUpPage} />
          
        </Switch>
      </div>
  
  
    );
  
  }

}
/* app.js should update the setcurrent value to reducer with the action (suer action), so we can use the value in other components*/
//setCurrentUser is userreducer func 
const mapDispatchToProps= dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default connect(null,mapDispatchToProps)(App);