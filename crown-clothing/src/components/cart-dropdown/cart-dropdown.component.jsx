import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../custom-buttton/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectorss'

import './cart-dropdown.styles.scss'


const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
            }
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})
export default connect(mapStateToProps, null)(CartDropdown);