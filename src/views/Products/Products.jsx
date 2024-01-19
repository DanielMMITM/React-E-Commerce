import {
    CardProduct,
    Footer,
    NavBar
} from "/src/components";
import { ScrollRestoration } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import './Products.css'
import ReactPaginate from "react-paginate";


export function Products({ itemsPerPage }) {
    const [filterCategory, setFilterCategory] = useState("");
    const [products, setProducts] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    function onFilterValueSelected(filterValue) {
        setFilterCategory(filterValue);
    }

    let filteredProductsList = products?.filter((product) => {
        return product.category === filterCategory;     
    });

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    const handleFilterChange = e => {
        setFilterValue(e.target.value);
    };


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
            .catch(err => console.log(err))
    }, []);

    useMemo(() => {
        window.scrollTo({ top: 0 });
    }, [currentItems]);

    return (
        <>
            <ScrollRestoration/>
            <NavBar />
            <div className="products-main">
                <div className="productsBody">
                    <section className="left">
                        <div className="filterTitleBox">
                            <h1 className="filterTitle">Filter</h1>
                        </div>
                        <div className="filterOptions first">
                            <div className="option">
                                <p>Woman's Clothing</p>
                            </div>
                            <div className="option">
                                <p>Men's Clothing</p>
                            </div>
                            <div className="option">
                                <p>Electronics</p>
                            </div>
                            <div className="option">
                                <p>Jewelry</p>
                            </div>
                        </div>
                    </section>
                    <section className="right">
                        <div className="productsContainer">
                        <CardProduct currentItems={currentItems} />
                        </div>
                    </section>
                </div>
                <div className="paginationContainer">
                    <ReactPaginate
                    activeClassName={'item active '}
                    breakClassName={'item'}
                    breakLabel={'...'}
                    containerClassName={'pagination'}
                    disabledClassName={'disabled-page'}
                    marginPagesDisplayed={2}
                    pageClassName={'item pagination-page '}
                    nextLabel="Next >>"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="<< Previous"
                    renderOnZeroPageCount={null}
                    />
                </div>
            </div>    
            <Footer />
        </>
    )
}