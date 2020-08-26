import React from 'react';
import "./Product.css";
import StarRateIcon from '@material-ui/icons/StarRate';
function ProductCheckout({id,title,price,img,range}) {
    //const [{basket},]
    return (
         
        <div className="product__comp">
          <p>{title}</p>
          <p><small>$</small><strong>{price}</strong></p>
          <div className="product__range">
           {
               Array(range).fill().map(()=>(<StarRateIcon className="product__star"></StarRateIcon>))
           }
          </div>
          <img src={img} alt=""/>
         <button ></button>
        </div>
        
    )
}

export default ProductCheckout;
