import { useEffect, useState } from "react";
import "../css/home.css";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
function Products(){
    const [products,setProducts] = useState([]);
    const [filterProd,setFilteredProducts] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    async function fetchData(){
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
    }
    function setProduct(){
        const data = document.getElementById("filter").value;
        if(data == "select"){
            setFilteredProducts(products);
        }
        else if(data == "men")
        {
            const filteredData = products.filter((product)=>product.category.toLowerCase().includes(data) && (!product.category.toLowerCase().includes("women")));
            setFilteredProducts(filteredData);
        }
        else{
            const filteredData = products.filter((product)=>product.category.toLowerCase().includes(data));
            setFilteredProducts(filteredData);
        }
    }
    return(
        <>
            <label style={{paddingLeft:"600px"}}>Filter</label>
            <select onChange={setProduct} id="filter">
                <option value="select">select</option>
                <option value="men">Men</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
                <option value="women">Women</option>
            </select><br/><br/>
            <div id="products">
                {filterProd.map((product)=>{
                    return(
                            <ProductItem product={product} key={product.id}></ProductItem>
                    );
                })}
            </div>
        </>
    )
}
export default Products;