import userContext from "../utils/userContext";
import { useContext } from "react";
function PlaceOrder(props){
    const data = useContext(userContext);
    return(
        <div style={{paddingLeft:"420px"}}>
            <div style={{backgroundColor:"white" , width:"500px",height:"200px",borderRadius:"20px",paddingLeft:"15px"}}>
                <h1>Your Order Successfully Placed!!!</h1>
                <h2>Total: {props.total}</h2>
                <label>Thank you for Purchasing!!!</label><br/><br/>
                <label>Order Shipped To : {data.address}</label>
            </div>
        </div>
    )
}
export default PlaceOrder;