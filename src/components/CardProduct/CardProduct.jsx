import { Button } from '/src/components/Button/Button'
import '/src/components/CardProduct/CardProduct.css'

export function CardProduct({currentItems}) {
    return (
        <>
            { currentItems && currentItems.map((product) => (
            <div className="product-card">
                <div className='imgBox'>
                    <img src={product.image} className="productImg" />
                </div>
                <div className='contentBox'>
                    <h1 className='productTitle'>{product.title}</h1>
                    <span className='price'>${product.price}</span>
                    <p className='description'>{product.description}</p>
                </div>
                <div className='btnContainer'>
                    <Button
                        route='/'
                        text="Buy now"
                    >
                    </Button>
                </div>
            </div>
            ))} 
        </>
    )
}