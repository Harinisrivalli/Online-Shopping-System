import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import addCart from "../img/addcart.png";
import { Link } from "react-router-dom";
import "../css/home.css";
function ProductItem(props){
    const dispatch = useDispatch();
    function addtoCart(obj){
        dispatch(addItem(obj));
    }
    return(
        <>
            <div className="product" key={props.product.id}>
                <img src={props.product.image} height="150px" width="150px"></img><br/>
                <span style={{fontsize: "larger", color:"blue"}}>{props.product.title}</span><br/>
                <label>Category:{props.product.category}</label><br/>
                <label>Price: {props.product.price}</label><br/>
                <label>Rating: {props.product.rating.rate}/5</label><br/>
                <label style={{display:"none"}}>{props.product["qty"] = 1}</label>
                <Link to={`/products/${props.product.id}`}><label>Product Detail</label></Link><br/>
                <img src={addCart} style={{cursor:"pointer"}} alt="Add to Cart" height="40px" width="40px" onClick={()=> addtoCart(props.product)}></img>
            </div>
        </>
    );
}
export default ProductItem;