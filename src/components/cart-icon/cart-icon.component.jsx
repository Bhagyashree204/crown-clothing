import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartitemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

const  CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>

    </div>
);

const mapDispatchStatetoProps = dispatch => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())


})
//we fetch the quantity of cart reudcer value to component and assign it to itemcount which is passed as props to this component
//mapStatetoprops will fetch the state from reducer and mapdispatch to pro pwill dispatch action to all reducers.
//mapsttetoprops always gets rerendered as state object from reducer is always a new object as we coded lke that in reducer,even if it utilizes only slice of code from state object.this is a performance issue as mapstatetoprops alwys reendered even if no new value/same value is passed.
//typically we dont want to rerender unless the cart value changes.caching of selector value(memoization ) is the olution.
const mapStateToprops=createStructuredSelector({
    itemCount: selectCartitemsCount
    
})

export default connect(mapStateToprops, mapDispatchStatetoProps)(CartIcon);