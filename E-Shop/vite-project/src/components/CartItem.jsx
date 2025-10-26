import removeCart from "../img/removecart.png";
import { removeItem, addqty, removeqty } from "../utils/cartSlice";
import plus from "../img/plus.png";
import minus from "../img/minus.png";
import { useDispatch } from "react-redux";
function CartItem(props){
    const dispatch = useDispatch();
    function addQty(product){
        dispatch(addqty(product));
    }
    function removefromCart(item){
        dispatch(removeItem(item));
    }
    function removeQty(product){
        dispatch(removeqty(product));
    }
    return(
        <>
            <div className="product" key={props.product.id}>
                <img src={props.product.image} height="150px" width="150px"></img><br/>
                <span style={{fontsize: "larger", color:"blue"}}>{props.product.title}</span><br/>
                <label>Category:{props.product.category}</label><br/>
                <label>Price: {props.product.price}</label><br/>
                <label>Rating: {props.product.rating.rate}/5</label><br/>
                <label>Quantity:{props.product.qty}</label><br/>
                <button onClick={()=>addQty(props.product)}><img src={plus} height="20px" width="20px" style={{borderRadius:"10px"}} alt = "Add Qty" ></img></button> &nbsp;
                {props.product.qty > 1 && (
                    <button onClick={() => removeQty(props.product)}><img src={minus} height="20px" width="20px" style={{borderRadius:"10px"}} alt = "Remove Qty" ></img></button>
                )}
                <br/>
                <img src={removeCart} style={{cursor:"pointer" , paddingLeft:"150px"}} alt="Remove from Cart" height="40px" width="40px" onClick={()=>removefromCart(props.product)}></img>
            </div>
        </>
    )
}
export default CartItem;