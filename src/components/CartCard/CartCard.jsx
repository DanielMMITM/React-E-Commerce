import './CartCard.css';
import imgproduct from '/src/assets/img/ad.jpg';

export const CartCard = () => {

    return (
        <>
            <div className='cartCard-main'>
                <div className='cartCard-left'>
                    <img className='cartImg' src={imgproduct} alt="" />
                </div>
                <div className='cartCard-right'>
                    <div className='cartContainer-info'>
                        <div className='cartProduct-info'>
                            <h2>Title</h2>
                            <span className='info-cart'>Category</span>
                            <span className='info-cart'>Quantity</span>
                            <span className='info-cart'>SomeColor</span>
                        </div>
                    </div>
                    <div className='cartContainer-price'>
                        <div className='cartProduct-total'>
                            <h2>Price</h2>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    );

};

export default CartCard;