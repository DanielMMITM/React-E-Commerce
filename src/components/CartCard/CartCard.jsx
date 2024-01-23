import './CartCard.css';

export const CartCard = ({product, productQuantity}) => {
    return (
        <>
            {product.map((product, index) => (
                <div className='cart-card-main' key={product.id}>
                    <div className='cart-card-left'>
                        <img className='cart-img' src={product.image} alt="" />
                    </div>
                    <div className='cart-card-right'>
                        <div className='cart-container-info'>
                            <div className='cart-product-info'>
                                <h4>{product.title}</h4>
                                <span className='info-cart'>Category: {product.category}</span>
                                <span className='info-cart'>Quantity: {productQuantity[index].quantity}</span>
                                <span className='info-cart'>SomeColor</span>
                            </div>
                        </div>
                        <div className='cart-container-price'>
                            <div className='cart-product-total'>
                                <h2>${product.price}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CartCard;