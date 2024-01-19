import { Button } from '/src/components/Button/Button'
import '/src/components/CardProduct/CardProduct.css'

export function CardProduct({title, img, category, description, price, }) {
    return (
        <div className="product-card">
            <div className='imgBox'>
                <img src={img} className="productImg" />
            </div>
            <div className='contentBox'>
                <h1 className='productTitle'>{title}</h1>
                <span className='price'>${price}</span>
                <p className='description'>{description}</p>
            </div>
            <div className='btnContainer'>
                <Button
                    route='/'
                    text = "Buy now"
                >
                </Button>
            </div>
            
        </div>
        
    )
    
}