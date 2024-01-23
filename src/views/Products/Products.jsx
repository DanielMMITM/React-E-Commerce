import {
    CardProduct
} from "/src/components";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import './Products.css'
import ReactPaginate from "react-paginate";

const CLEAR = '';

const CATEGORIES = [
    {filterName: "women's clothing", displayName: "Women's clothing"},
    {filterName: "men's clothing", displayName: "Men's clothing"},
    {filterName:  "jewelery", displayName: "Jewelry"},
    {filterName: "electronics", displayName: "Electronics"}
]


export function Products({ itemsPerPage }) {
    const [filterValue, setFilterValue] = useState(CLEAR);
    const [products, setProducts] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    let endOffset = itemOffset + itemsPerPage;
    const [checkFirstLoad, setCheckFirstLoad] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = (event) => {
        setCheckFirstLoad(false);
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
        setCurrentPage(event.selected);
    };

    useEffect(() => {
        fetch("https://fakestoreapi.com/" + 'products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(err => console.log(err));
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
        if (filterValue !== cat) {
            setCurrentPage(0);
            setCheckFirstLoad(true);
        }
        else {
            setCheckFirstLoad(false);
            setCurrentPage(currentPage + 1);
        }
        setFilterValue(cat);
    }

    useMemo(() => {
        window.scrollTo({ top: 0 });
    }, [currentItems]);

    return (
        <>
            <div className="d-flex flex-column flex-sm-row justify-content-center">
                <aside className="left flex-grow-1 m-4 m-lg-3">
                    <div>
                        <div className="filterTitleBox">
                            <h1 className="filterTitle">Filter</h1>
                        </div>
                        <div className="filterOptions first">
                            {CATEGORIES.map((category) => (
                                <div className="option" onClick={() => handleFilterChange(category.filterName)}>
                                    <p>{category.displayName}</p>
                                </div>
                            ))}
                        </div>
                        <div className="reset my-4">
                            <div className="clearbtn-box">
                                <button className="clearbtn" onClick={() => handleFilterChange(CLEAR)}>Clear filters</button>
                            </div>
                        </div>
                    </div>
                </aside>
                <section className="right flex-grow-0">
                    <div className="container text-center">
                        <div className="d-flex flex-wrap justify-content-evenly gap-3 m-4 m-lg-3">
                            <CardProduct currentItems={currentItems} />
                        </div>
                    </div>
                </section>
            </div>
            <div className="d-flex w-100 mt-4 px-4">
                <ReactPaginate
                    previousClassName={'previous'}
                    forcePage={checkFirstLoad && currentPage === 0 ? 0 : currentPage}
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
        </>
    );
};

export default Products;