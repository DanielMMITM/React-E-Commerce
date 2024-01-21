import {
    CardProduct
} from "/src/components";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import './Products.css'
import ReactPaginate from "react-paginate";

const GET_PRODUCTS = "https://fakestoreapi.com/products";

const CATEGORY_1 = "women's clothing";
const CATEGORY_2 = "men's clothing";
const CATEGORY_3 = "jewelery";
const CATEGORY_4 = "electronics";
const CLEAR = '';


export function Products({ itemsPerPage }) {
    const [filterValue, setFilterValue] = useState('');
    const [products, setProducts] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    let endOffset = itemOffset + itemsPerPage;

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
        console.log('currentItems: ' + currentItems);
        console.log('newOffset: ' + newOffset);
    };

    useEffect(() => {
        fetch(GET_PRODUCTS)
            .then(res=>res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(err => console.log(err))
    }, []);

    const filteredProducts = useMemo(() => {
        setItemOffset(0);
        endOffset = itemOffset + itemsPerPage;
        if (filterValue === CLEAR) {
            return products;
        }
        else {
            return products.filter(products => products.category.startsWith(filterValue));
        }
    }, [products, filterValue]);

    const currentItems = filteredProducts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

    const handleFilterChange = (cat) => {
        setFilterValue(cat);
    }

    useMemo(() => {
        window.scrollTo({ top: 0 });
    }, [currentItems]);

    return (
        <>
            <div className="products-main">
                <div className="productsBody">
                    <section className="left">
                        <div>
                            <div className="filterTitleBox">
                                <h1 className="filterTitle">Filter</h1>
                            </div>
                            <div className="filterOptions first">
                                <div className="option" onClick={() => handleFilterChange(CATEGORY_1)}>
                                    <p>Women's Clothing</p>
                                </div>
                                <div className="option" onClick={() => handleFilterChange(CATEGORY_2)}>
                                    <p>Men's Clothing</p>
                                </div>
                                <div className="option" onClick={() => handleFilterChange(CATEGORY_3)}>
                                    <p>Jewelry</p>
                                </div>
                                <div className="option" onClick={() => handleFilterChange(CATEGORY_4)}>
                                    <>Electronics</>
                                </div>
                            </div>
                            <div className="reset">
                                <div className="clearbtn-box">
                                    <button className="clearbtn" onClick={() => handleFilterChange(CLEAR)}>Clear filters</button>
                                </div>
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
        </>
    );
};

export default Products;