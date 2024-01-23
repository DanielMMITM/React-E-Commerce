import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '/src/context/user-context';
import './Cart.css';
import CartCard from '/src/components/CartCard/CartCard';
import { Navigate } from 'react-router-dom';

const GET_CART= "https://fakestoreapi.com/carts/";
const GET_PRODUCT= "https://fakestoreapi.com/products/";


export const Cart = () => {

    let randomCart = Math.floor(Math.random() * 7) + 1;

    const [user] = useContext(UserContext);
    const [cart, setCart] = useState('');
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);

    if (user == null) {
        return <Navigate state={'cart'} to={"/login"} />;
    }

    const handleTotal = () => {
        let totalPrice = 0;
        cart.products?.map((productCart) => {
            products?.map((product) => {
                totalPrice = totalPrice + (product.price * productCart.quantity);
            });
        });
        setTotal(totalPrice);
    };

    const fetchCart = async () => {
        try {
            let cartResponse = await fetch(GET_CART + randomCart);
            if (cartResponse.status === 200) {
                let cartResponseJson = await cartResponse.json();
                let productsList = await Promise.all(
                    cartResponseJson.products.map(async product => {
                        let productResponse = await fetch(GET_PRODUCT + product.productId);
                        return productResponse.json();
                    })
                );
                setCart(cartResponseJson);
                setProducts(productsList);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCart();
        handleTotal();
    }, []);

    useEffect(() => {
        handleTotal();
    }, [cart]);

    const handlePayment =  () => {
        alert("Thanks for buying");
    };

    return (
        <div className='d-flex flex-column flex-lg-row justify-content-center'>
            <div className="flex-grow-1 m-4 mt-md-1">
                <div className="cartBox mt-md-5">
                    <div className="cartBox-up">
                        <h2 className='cart-text-title'>Your shopping cart {user}</h2>
                    </div>
                    <div className='cart-separator mt-2'>
                        <h3 className='cart-text-title sub-title'>Product</h3>
                        <h3 className='cart-text-price sub-title'>Price</h3>
                    </div>
                    <div>
                        <CartCard product={products} productQuantity={cart.products} />
                    </div>
                </div>  
            </div>
            <div className='cart-body-right flex-grow-0'>
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
                        <div className='linked-payment totalbox'>
                            <span className='carttotal'>Estimated Total</span>
                            <span className='totalprice'>${total}</span>
                        </div>
                        <Link to={'/'} onClick={handlePayment}><button type='button' className='paybutton'>Checkout</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;