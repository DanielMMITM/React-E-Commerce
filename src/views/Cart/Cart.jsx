import { useContext } from 'react';
import UserContext from '/src/context/user-context';
import './Cart.css';
import CartCard from '/src/components/CartCard/CartCard';

export const Cart = () => {
    const [user] = useContext(UserContext);


    return (
        <>
            <div className="cartbody">
                <div className="cartBody-left">
                    <div className="cartBox">
                        <div className="cartBox-up">
                            <h2>Your shopping cart {user}</h2>
                        </div>
                        <div className="cartBox-down">
                            <CartCard />
                            <CartCard />
                            <CartCard />
                            <CartCard />
                        </div>
                    </div>  
                </div>
                <div className='cartBody-right'>
                    <div className='summary-box'>
                        <div className='cart-summary'>
                            <h3>SUMMARY</h3>
                        </div>
                        <div className='cart-payment'>
                            <div className='cartpayment-title'>
                                <h4>SUBTOTAL</h4>
                            </div>
                            <div className='linked-payment'>
                                <span>Shipping</span>
                                <span>$4.99</span>
                            </div>
                            <div className='linked-payment'>
                                <span>Sales Tax</span>
                                <span>TBD</span>
                            </div>
                        </div>
                    </div>
                </div>
                      
            </div>
        </>
    );
    
};

export default Cart;