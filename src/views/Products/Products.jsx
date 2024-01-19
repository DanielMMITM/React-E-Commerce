import { NavBar } from "/src/components/NavBar/NavBar";
import { Footer } from "/src/components/Footer/Footer";
import { ScrollRestoration } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import { CardProduct } from "/src/components/CardProduct/CardProduct";
import './Products.css'


export function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <ScrollRestoration/>
            <NavBar />
            <div className="productsContainer">
                {products.map((product) => (
                    <CardProduct
                        key = {product.id}
                        title = {product.title}
                        img = {product.image}
                        category = {product.category}
                        description = {product.description}
                        price = {product.price}
                    />
                    )
                )}
            </div>
            <Footer/>
            
            
        </>
    )
}