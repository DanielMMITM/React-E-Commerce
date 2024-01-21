import { Button } from '/src/components'
import '/src/components/CardProduct/CardProduct.css'

export const CardProduct = ({ currentItems }) => {
    return (
        <>
            {currentItems && currentItems.map((product) => (
                <div className="product-card" key={product.id}>
                    <div className='productCard-up'>
                        <div className='imgBox'>
                            <img src={product.image} className="productImg" />
                        </div>
                    </div>
                    <div className='productCard-down'>
                        <div className='contentBox'>
                                <h1 className='productTitle'>{product.title}</h1>
                                <p className='description'>{product.description}</p>
                        </div>
                    </div>
                    <div className='contentBtn'>
                        <span className='price'>${product.price}</span>
                        <div className='btnBuy'>
                            <Button
                                route='/'
                                text="Buy now"
                            >
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardProduct;
