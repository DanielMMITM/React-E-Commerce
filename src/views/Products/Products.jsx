import {
    CardProduct,
    Footer,
    NavBar
} from "/src/components";
import { ScrollRestoration } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import './Products.css'
import ReactPaginate from "react-paginate";


export function Products({ itemsPerPage }) {
    const [products, setProducts] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        window.scrollTo({top: 0});
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
                <CardProduct currentItems={currentItems} />
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
            <Footer />
        </>
    )
}