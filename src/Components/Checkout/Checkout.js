import React from 'react'
import { useStateValue } from '../StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

 
 
 
const Checkout = () => {
    
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__details">
                {basket?.length === 0 ?
                    <div>
                        <h2>Your Shopping Basket is empty.</h2>
                        <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                    </div> :
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        <div className="checkout_list">
                            {basket?.map((item) => (
                                <CheckoutProduct
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    </div>
                }
            </div>

            <div className="checkout__summary">
                <Subtotal />
            </div>
           
        </div>
    )
}
 
 
 
export default Checkout;
 