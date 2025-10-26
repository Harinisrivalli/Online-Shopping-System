import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function ProductDetail() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    useEffect(()=>{
        fetchData();
    },[params.id]);
    async function fetchData(){
        const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        const data = await response.json();
        setProduct(data);
        console.log(data);
    }
    if (!product) return <p>Loading...</p>;

    return (
        <>
            <Link to="/products">🔙</Link>
            <div key={product.id}>
                <img src={product.image} height="150px" width="150px" alt={product.title} /><br/>
                <span style={{ fontSize: "larger", color:"blue" }}>{product.title}</span><br/>
                <label>Category: {product.category}</label><br/>
                <label>Price: {product.price}</label><br/>
                <label>Rating: {product.rating?.rate}/5</label><br/>
                <label>Description: {product.description}</label>
            </div>
        </>
    );
}
export default ProductDetail;