import { Button } from '/src/components'
import '/src/components/CardProduct/CardProduct.css'

export const CardProduct = ({ currentItems }) => {
    return (
        <>
            {currentItems && currentItems.map((product) => (
                <div className="card col-lg-3 col-md-5 col-sm-12 flex-grow-1 pt-5" key={product.id}>
                    <img src={product.image} className="card-img-top img-fluid w-50 mx-auto d-block object-fit-contain img-height" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title mb-4">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                    </div>
                    <div className="card-footer content-btn">
                        <div className='d-flex flex-column justify-content-between align-items-center'>
                            <span className='price'>${product.price}</span>
                            <div className='btnBuy'>
                                <Button
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
