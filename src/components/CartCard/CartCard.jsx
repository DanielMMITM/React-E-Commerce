import './CartCard.css';

export const CartCard = ({product, productQuantity}) => {

    return (
        <>
            {product.map((product, index) => (
                <div className='cartCard-main' key={product.id}>
                    <div className='cartCard-left'>
                        <img className='cartImg' src={product.image} alt="" />
                    </div>
                    <div className='cartCard-right'>
                        <div className='cartContainer-info'>
                            <div className='cartProduct-info'>
                                <h2>{product.title}</h2>
                                <span className='info-cart'>Category: {product.category}</span>
                                <span className='info-cart'>Quantity: {productQuantity[index].quantity}</span>
                                <span className='info-cart'>SomeColor</span>
                            </div>
                        </div>
                        <div className='cartContainer-price'>
                            <div className='cartProduct-total'>
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