import React from 'react';

import './checkoutItem.scss';

import { connect } from 'react-redux';

import {
  clearItemFromCart,
  removeItem,
  addItem,
} from '../../redux/cart/actions';

const CheckoutItem = ({ cartItem, dispatch }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={cartItem.imageUrl} alt='item' />
    </div>
    <span className='name'>{cartItem.name}</span>
    <span className='quantity'>
      <div className='arrow' onClick={() => dispatch(removeItem(cartItem))}>
        &#10094;
      </div>
      <span className='value'>{cartItem.quantity}</span>
      <div className='arrow' onClick={() => dispatch(addItem(cartItem))}>
        &#10095;
      </div>
    </span>
    <span className='price'>${cartItem.quantity * cartItem.price}</span>
    <div
      className='remove-button'
      onClick={() => dispatch(clearItemFromCart(cartItem))}
    >
      &#10005;
    </div>
  </div>
);

export default connect()(CheckoutItem);
