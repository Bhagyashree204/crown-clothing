import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../firebase/firebase.utils';
const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className='logo'></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            <Link className="option" to="/sign">
                {
                currentUser?
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>:
                <Link className="option" to="/sign">SIGNIN</Link>

                }
            </Link>

        </div>
    </div>

);

//state is a root reducer state where redux passes down the value as props to state from root-reducer. now the header comp recieves the current user value from reducer not the app.js
const mapStateToProps = state => ({
    currentUser:state.user.currentUser
});


export default connect(mapStateToProps)(Header);