import { Button } from '/src/components'
import '/src/components/CardProduct/CardProduct.css'

export const CardProduct = ({ currentItems }) => {
    return (
        <>
            {currentItems && currentItems.map((product) => (
                <div className="card col-lg-3 col-md-5 col-sm-12 flex-grow-1"  key={product.id}>
                    <img src={product.image} className="card-img-top img-fluid w-50 mx-auto d-block" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <div className='contentBtn'>
                            <span className='price'>${product.price}</span>
                            <div className='btnBuy'>
                                <Button
                                    route='/'
                                    text="Add to cart"
                                >
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};



export default CardProduct;
