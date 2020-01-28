import React from 'react';
//import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
//import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown  from "../cart-component/cart-component.component";
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {OptionLink,HeaderContainer,LogoContainer,OptionsContainer} from './header.styles';


const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'></Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/shop">
                CONTACT
            </OptionLink>
            <OptionLink to="/signin">
                {
                currentUser?
                <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>:
                <OptionLink to="/signin">SIGNIN</OptionLink>

                }
            </OptionLink>

            <CartIcon/>
         </OptionsContainer>
         {
            hidden?null:<CartDropDown/>
         }
         
    </HeaderContainer>

);

//state is a root reducer state where redux passes down the value as props to state from root-reducer. now the header comp recieves the current user value from reducer not the app.js
const mapStateToProps = createStructuredSelector({
    //currentUser:state.user.currentUser
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
});


export default connect(mapStateToProps)(Header);