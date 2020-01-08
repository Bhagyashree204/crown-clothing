import React from 'react';
import {connect} from 'react-redux';
import './collection-item.styles.scss';
import {addItem} from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
const CollectionItem = ({item,addItem}) => {
    const { name, price, imageUrl}=item;
    return(
    
    <div className="collection-item">
        <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />


    
    <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>

    </div>
    <CustomButton onClick={() => {addItem(item)}} inverted>Add to Cart</CustomButton>
    </div>
   

)};

//additem(1st one) is the function which will be passed to component, it recieves item and dispatches item to additem action creator and adds item to payload
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);