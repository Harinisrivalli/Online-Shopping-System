import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import "../css/home.css";
import { useState } from "react";
import PlaceOrder from "./PlaceOrder";
function Cart(){
    const items = useSelector((state) =>state.cart.items);
    const [total,setTotal] = useState();
    const dispatch = useDispatch();
    const [showplaceorder,setPlaceOrder] = useState(false);
    function handlePlaceOrder(){
        var tot = 0;
        items.map((item)=>{
            tot += (item.qty * item.price);
        })
        setTotal(tot);
        dispatch(clearCart());
        setPlaceOrder(true);
    }
    return(
        <>
            <div id="products">
                {items.map((product)=>{
                    return(
                        <CartItem product={product} key={product.id}></CartItem>
                    );
                })}
            </div>
            <div style={{paddingLeft:"1000px"}}>
                <br/>
                {items.length > 0 && (
                    <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
                )}
            </div>
            {showplaceorder && (
                <PlaceOrder total={total}></PlaceOrder>
            )}
        </>
    );
}
export default Cart;