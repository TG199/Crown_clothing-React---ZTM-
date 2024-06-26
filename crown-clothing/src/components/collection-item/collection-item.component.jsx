import React from 'react'

import { connect } from 'react-redux'
import './collection-item.styles.scss'
import CustomButton from '../custom-buttton/custom-button.component';
import { addItem } from '../../redux/cart/cart.action';


const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
        <div className='image' style={{
            backgorundImage: `url(${imageUrl})`
        }} 
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)}inverted>
             Add to Cart
        </CustomButton>
    </div>
    )
    
};
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(
    null,
    mapDispatchToProps
)(CollectionItem)