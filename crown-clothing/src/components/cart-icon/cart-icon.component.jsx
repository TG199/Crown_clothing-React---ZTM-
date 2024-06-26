import React from 'react'

import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.action'

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'
import { selectCartItemsCount } from '../../redux/cart/cart.selectorss'

import './cart-icon.styles.scss'


const CartIcon = ({ toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'>
            <span className='item-count'>{itemCount}
            </span>
        </ShoppingIcon>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
    
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)