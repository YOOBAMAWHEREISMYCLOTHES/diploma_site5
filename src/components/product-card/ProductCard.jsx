

import React from 'react';
import './product-card.css';

const ProductCard = (props) => {

const {title, imgUrl, price} = props.item

  return (
    <div className='single_product'>
                        <div className='item_img'>
                            <img src={imgUrl} alt='' className='w-100'/>
                        </div>

                        <div className='product_content'>
                            <div className='rating text-center'>
                            <span><i class="ri-star-fill"></i></span>
                            <span><i class="ri-star-fill"></i></span>
                            <span><i class="ri-star-fill"></i></span>
                            <span><i class="ri-star-fill"></i></span>
                            <span><i class="ri-star-fill"></i></span>
                            </div>

                            <h6>{title}</h6>

                            <div className=' d-flex align-items-center justify-content-between'>
                                <span className='price d-flex align-items-center'> Price $<span>{price}</span></span>
                                <span className='shopping_icon'><i class="ri-shopping-cart-2-fill"></i></span>
                            </div>
                        </div>
                    </div>
  )
}

export default ProductCard