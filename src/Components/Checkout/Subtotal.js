import React from 'react'
import { useStateValue } from '../StateProvider';
import './Subtotal.css';
import { getBasketSubtotal } from '../../reducer';
 
 

const Subtotal = (props) => {
  const [{basket}] = useStateValue()

  return (
    <div className="subtotal">
        <p>
          Subtotal ({basket?.length} {basket?.length <= 1 ? "item" : "items"}):
          <strong className="subtotal__amount">
            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(getBasketSubtotal(basket)) }
          </strong>
        </p>
        
        <div className="subtotal__checkbox">
          <input  type="checkbox" />
          <span>Avail free shipping</span>
        </div>
        
        <button>Proceed to Checkout</button>

    </div>
  )
}
 
 
 
export default Subtotal;
 