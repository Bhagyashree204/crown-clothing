import {createSelector} from 'reselect';

const selectCart= state => state.cart;

export const selectCartItems=createSelector([selectCart], cart=>cart.cartItems);
//console.log(selectCartItems);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartitemsCount= createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((totalQuant,cartItem) => totalQuant+cartItem.quantity ,0)
)

export  const selectCartTotal= createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((totalQuant,cartItem) => totalQuant+cartItem.quantity*cartItem.price ,0))
