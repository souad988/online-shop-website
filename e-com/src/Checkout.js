import React from 'react';
import { useStateValue } from './StateProvider';
import ProductCheckout from './ProductCheckout';
import './Checkout.css';
function Checkout() {
    const [{basket}]= useStateValue(); 
    const  x = 0;
    return (
        <div className="checkout__com">
           
          <img className="checkout__ad" src="../banner.jpg"
          alt=""/>
          {basket?.length === 0 ?
         ( <div><h1>empty basket!!!!!!</h1></div>) :
         (<div><h1>your items : </h1>
            {basket.map(item =>(
               <ProductCheckout 
               id={item.id}
               title={item.title}
               price={item.price}
               img={item.img}
               range={item.range}

               />
            )

            )}
           </div>)

          }
        </div>
    )
}

export default Checkout;
